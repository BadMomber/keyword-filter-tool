/** Package imports */
const express = require ('express');
const router = express.Router ({mergeParams: true});
let path = require('path');


/** File imports */
const asyncWrapper = require ('./middleware/asyncWrapper');
const Keyword = require ('../models/keyword');
const escape = require ('./middleware/escapeHTML');
let upload = require('./upload');

/** Routes */
router.get('/start', function (req, res) {res.sendFile(path.resolve(__dirname + '../../../client/index.html'))});
router.get ('/template', getKeywordTemplate);
router.get ('/', getKeywords);
router.get ('/:id', getKeywordWithID);
router.delete ('/:id', deleteKeyword);
router.put ('/:id', updateKeyword);
router.post ('/', asyncWrapper (addNewKeyword));
router.post('/upload', upload.post);



async function getKeywordTemplate(req, res) {
  try {
    res.writeHead (200, {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename=keywords.csv'
    });
    // pipe file using mongoose-csv
    Keyword.find ().csv (res);
  } catch (e) {
    res.status (500).send (e);
  }
}

/**
 * Add a new keyword
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function addNewKeyword(req, res) {
  const combinedString = (req.body.keyword + req.body.currency + req.body.competition).toString ();
  if (await escape (combinedString) === false) {
    res.status (422).send ({
      status: 'DECLINED',
      data: ' HTML special characters < > & are not allowed in user editable string fields (keyword, currency,' +
        ' competition)'
    });
  } else {
    try {
      const newKeyword = new Keyword (req.body);
      const createdKeyword = await newKeyword.save ();
      res.status (201).send ({
        status: 'CREATED',
        data: createdKeyword
      })
    } catch (e) {
      res.status (500).send (e);
    }
  }
}

/**
 * Get all keywords from list
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function getKeywords(req, res) {
  try {
    const keyword = await Keyword.find ({});
    res.status (200).send ({
      status: 'OK',
      data: keyword
    });
  } catch (e) {
    res.status (500).send (e);
  }
}

/**
 * Get a single keyword from list
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function getKeywordWithID(req, res) {
  try {
    const keyword = await Keyword.findById (req.params.id);
    res.status (200).send ({
      status: 'OK',
      data: keyword
    });
  } catch (e) {
    res.status (500).send (e);
  }
}

/**
 * Update a keyword with given id
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function updateKeyword(req, res) {
  try {
    const keywordId = req.params.id;
    const keyword = await Keyword.findOneAndUpdate ({
      _id: keywordId
    }, {
      $set: req.body,
      updated_at: Date.now ()
    }, {
      new: true,
    });
    
    res.status (201).send ({
      status: 'UPDATED',
      data: keyword
    })
  } catch (e) {
    res.status (500).send (e);
  }
}

/**
 * Delete a single keyword with given id
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function deleteKeyword(req, res) {
  try {
    await Keyword.findOneAndDelete (req.params.id);
    res.status (204).send ();
  } catch (e) {
    res.status (500).send (e);
  }
}

/**
 * Export all keywords on list as CSV
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function getAllKeywordsAsCSV(req, res) {
  try {
    res.writeHead (200, {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename=keywords.csv'
    });
    // pipe file using mongoose-csv
    Keyword.find ().csv (res);
  } catch (e) {
    res.status (500).send (e);
  }
}

module.exports = {
  router
};
