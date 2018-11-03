<template slot="icon-right">
  <v-layout>

    <v-flex text-xs-center>
      <div class="UppyForm">
        <form action="/api/keywords/upload/" method="POST" encType="multipart/form-data">
          <h5>Uppy was not loaded — slow connection, unsupported browser, weird JS error on a page — but the upload still works, because HTML is cool like that</h5>
          <input type="file" name="file" accept="*.csv" >
          <button type="submit">Fallback Form Upload</button>
        </form>
      </div>
    </v-flex>

    <v-flex text-xs-center>
      <v-flex xs12>

        <v-header
          class="pl-0"
          color="white"
        ><h4>Avg. monthly searches</h4></v-header>

        <v-slider
          v-model="slider"
          thumb-label="always"
          thumb-size="42"
          color="accent"
          step="100"
          min="0"
          max="100000">
        ></v-slider>

        <v-header
          class="pl-0"
          color="white"
        ><h4>Competition</h4></v-header>

        <v-slider
          v-model="slider"
          thumb-label="always"
          thumb-size="42"
          color="secondary"
          step="100"
          min="0"
          max="100000">
          ></v-slider>

        <v-header
          class="pl-0"
          color="white"
        ><h4>Top of page bid - low</h4></v-header>

        <v-slider
          v-model="slider"
          thumb-label="always"
          thumb-size="42"
          color="info"
          step="100"
          min="0"
          max="100000">
          ></v-slider>

        <v-header
          class="pl-0"
          color="white"
          ><h4>Top of page bid - high</h4></v-header>

        <v-slider
          v-model="slider"
          thumb-label="always"
          thumb-size="42"
          color="good"
          step="100"
          min="0"
          max="100000">
          ></v-slider>

      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
  const Uppy = require('@uppy/core');
  const FileInput = require('@uppy/file-input');
  const XHRUpload = require('@uppy/xhr-upload');

  /* Beispiel von Uppy Website
  const uppy = new Uppy({ debug: true, autoProceed: true });
  uppy.use(FileInput, { target: '.UppyForm', replaceTargetContent: true })
  uppy.use(XHRUpload, {
    endpoint: 'localhost:4000/api/keywords/',
    formData: true,
    fieldName: 'files[]'
  });
  */

  export default {
    name: "keywords",
    props: {
      modelClass: {
        type: String,
        required: true
      },
      modelId: {
        type: String,
        required: true
      },
      collection: {
        type: String,
        required: true
      },
      endpoint: {
        type: String,
        required: false,
        default() {
          return '/api/keywords/upload/'
        }
      }
    },
    data() {
      return {}
    },

    computed: {
      uppyId() {
        return this.modelClass + '-' + this.modelId + '-' + this.collection;
      }
    },
    mounted() {
      const uppy = new Uppy({
        id: this.uppyId,
        debug: true,
        autoProceed: true,
        restrictions: {
          maxFileSize: false,
          allowedFileTypes: ['.csv']
        },
        meta: {
          modelClass: this.modelClass,
          modelId: this.modelId,
          collection: this.collection
        },
      });
      uppy.use(XHRUpload, {
        endpoint: this.endpoint,
        headers: {
          'X-CSRF-TOKEN': window.csrfToken
        },
        fieldName: 'files[]'
      })
      uppy.run();
    }
  }
</script>

<style scoped>

  .inline {
    display: inline;
  }
  .v-slider__thumb-label {
    font-weight: 700;
  }
  .v-icon {
    margin-left: .8rem;
  }

</style>

