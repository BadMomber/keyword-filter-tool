<template slot="icon-right">


  <v-layout>
    <div class="container">
      <div class="large-12 medium-12 small-12 cell">
        <label>File
          <input
            type="file"
            id="file"
            ref="file"
            v-on:change="handleFileUpload()"
          >
        </label>
        <button
          v-on:click="submitFile()"
        >Submit
        </button>
      </div>
    </div>
    <!--
    <v-flex text-xs-center>
      <div class="UppyForm">
          <form action="/api/keywords/upload/" method="POST" encType="multipart/form-data">
            <h5>Uppy was not loaded — slow connection, unsupported browser, weird JS error on a page — but the upload
              still works, because HTML is cool like that</h5>
            <input type="file" name="file" accept="*.csv">
            <button type="submit">Fallback Form Upload</button>
            <button id="open-thumbnail-modal" class="button">Select file</button>
          </form>
        </div>
    </v-flex>
    -->

    <!--
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
          >
        </v-slider>

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
          >
        </v-slider>

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
          >
        </v-slider>

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
          >
        </v-slider>

      </v-flex>
    </v-flex>
    -->
  </v-layout>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        file: ''
      }
    },
    methods: {
      handleFileUpload() {
        this.file = this.$refs.file.files[0];
      },
      submitFile() {
        /*
                Initialize the form data
            */
        let formData = new FormData ();

        /*
            Add the form data we need to submit
        */
        formData.append ('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
        axios.post ('http://localhost:4000/api/keywords/upload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then (function () {
          console.log ('SUCCESS!!');
        })
          .catch (function () {
            console.log ('FAILURE!!');
          });
      },
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

