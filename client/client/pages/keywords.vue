<template slot="icon-right">
  <v-layout>
    <v-flex text-xs-center>
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5">
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="blue-grey"
        class="white--text"
        @click.native="loader = 'loading3'"
      >
        Upload
        <v-icon right dark>cloud_upload</v-icon>
      </v-btn>

      <label class="button" @click="$refs.fileInput.value = ''">
        <input type="file" multiple style="display:none" ref="fileInput" @input="uploadFiles">
      </label>

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
  export default {
    name: "keywords"
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

