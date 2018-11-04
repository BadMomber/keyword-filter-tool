<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <v-chip label outline color="primary">
        <input
          color="primary"
          type="file"
          id="file"
          ref="file"
          v-on:change="handleFileUpload()"
        >
      </v-chip label outline>
      <v-btn

        color="good"
        v-on:click="submitFile()"
      >
        Submit
      </v-btn>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "fileUpload",
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

</style>
