<template slot="icon-right">

  <div>
    <v-layout>
      <v-container>
        <v-flex>

          <fileUpload></fileUpload>

          <chart class="chart"></chart>

        </v-flex>
      </v-container>
    </v-layout>

    <v-layout>

      <v-flex text-xs-center>
        <v-flex xs12>

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
          ><h4>Avg. monthly searches</h4></v-header>

          <v-slider
            v-model="competition"
            color="secondary"
            :tick-labels="ticksLabels"
            :max="2"
            step="1"
            ticks="always"
            tick-size="3"
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
            color="info"
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
            color="good"
            step="100"
            min="0"
            max="100000">
            >
          </v-slider>


          <v-header
            class="pl-0"
            color="white"
          ><h4>Top of page bid - high</h4></v-header>

        </v-flex>
      </v-flex>

      <v-flex text-xs-center>
        <v-text-field
          label="Solo"
          single-line
          solo
        ></v-text-field>

        <v-text-field
          label="Solo"
          single-line
          solo
        ></v-text-field>

        <v-text-field
          label="Solo"
          single-line
          solo
        ></v-text-field>

        <v-text-field
          label="Solo"
          single-line
          solo
        ></v-text-field>
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
  import fileUpload from '~/components/fileUpload.vue'
  import chart from '~/components/chart.vue'

  export default {
    components: {
      chart,
      fileUpload
    },
    data () {
      return {
        value: 0,
        competition: 0,
        ticksLabels: [
          'Low',
          'Medium',
          'High'
        ]
      }
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

  .v-input--slider {
    height: 1rem;
    margin-top: 2.4rem;
  }

  h4 {
    margin: 1rem 0 4rem 0;
  }

</style>

