export const planetChartData = {
  type: 'bar',
  data: {
    labels: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember'
    ],
    datasets: [
      { // one line graph
        label: 'Einladungskarte',
        data: [34, 23, 8, 16, 67, 62, 44, 56, 29, 92, 10, 78],
        backgroundColor: [
          '#FD718D',
          '#FD718D',
          '#FD718D',
          '#FD718D',
          '#FD718D',
          '#FD718D',
          '#FD718D',
          '#FD718D',
          '#FD718D',
          '#FD718D',
          '#FD718D',
          '#FD718D'
        ],
      },
      { // another line graph
        label: 'Hochzeit',
        data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 29, 94, 33, 66, 77, 99],
        backgroundColor: [
          '#8538F2',
          '#8538F2',
          '#8538F2',
          '#8538F2',
          '#8538F2',
          '#8538F2',
          '#8538F2',
          '#8538F2',
          '#8538F2',
          '#8538F2',
          '#8538F2',
          '#8538F2'
        ]
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        }
      }]
    }
  }
}

export default planetChartData;
