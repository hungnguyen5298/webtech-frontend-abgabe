<template>
  <section className="diagramm">
    <div class="w-100 h-100">
      <canvas id="myChart"></canvas>
    </div>
  </section>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'DiagrammTest',
  props: ['title'],
  data () {
    return {
      items: []
    }
  },
  methods: {
    loadGewichte () {
      const endpoint = 'http://localhost:8080/gewichte'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.items = result
          this.updateChart()
        })
        .catch((error) => console.log('error', error))
    },
    save () {
      const endpoint = 'http://localhost:8080/add'
      const data = {
        kilo: this.kiloField,
        datum: this.datumField
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data)
          this.loadGewichte()
        })
        .catch(error => console.log('error', error))
    },
    updateChart () {
      const ctx = document.getElementById('myChart').getContext('2d')
      const dates = this.items.map((item) => item.datum)
      const weights = this.items.map((item) => item.kilo)

      if (this.myChart) {
        this.myChart.destroy()
      }

      // eslint-disable-next-line no-new
      this.myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              label: 'Kilogramm',
              data: weights,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          spanGaps: true,
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            y: {
              min: 30,
              max: 100
            }
          },
          plugins: {
            legend: {
              title: {
                display: true,
                text: 'Diagramm zur Gewichtsverlauf'
              }
            }
          }
        }
      })
    }
  },
  created () {
    this.loadGewichte()
  }
}
</script>

<style scoped>

</style>
