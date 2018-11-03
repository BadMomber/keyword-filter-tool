import axios from 'axios'

export default {
  getKeywords () {
    return axios.get('http://127.0.0.1:4000/api/keywords/')
  },
  uploadKeywords () {
    return axios.post({
      action: 'http://127.0.0.1:4000/api/keywords/upload/',
      type: "submit",
      encType: "multipart/form-data"
    })
  }
}
