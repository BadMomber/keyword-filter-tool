<template>
  <v-layout>
    <v-flex text-xs-center>
      <div id="app">
        <canvas id="planet-chart"></canvas>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import Chart from 'chart.js'
  import planetChartData from '../plugins/chart-data.js'
  export default {
    name: "chart",
    methods: {
      createChart(chartId, chartData) {
        const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options,
        });
      }
    },
    data() {
      return {
        planetChartData,
      }
    },
    mounted() {
      this.createChart('planet-chart', this.planetChartData);
    }
  }
</script>

<style scoped>

  .chart-wrapper {
    height: 300px;
    width: 500px;
    border: 1px solid #41D2F2;
  }

</style>
