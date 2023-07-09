<template>
  <section class="getKilo">
    <h3>{{ title }}</h3>
    <div class="table-responsive">
      <table class="table table-bordered table-striped table-hover text-center caption-top">
        <caption>Verlauf</caption>
        <thead class="bg-light">
        <tr>
          <th scope="col">Nr.</th>
          <th scope="col">Gewicht</th>
          <th scope="col">Datum</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="items.length === 0">
          <td colspan="3">Es liegt keine Information vor!</td>
        </tr>
        <tr v-for="(item) in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.kilo }}</td>
          <td>{{ item.datum }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GewichtTabelle',
  props: ['title'],
  data () {
    return {
      items: [],
      kiloField: '',
      datumField: ''
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
        .then(response => response.json())
        .then(result => {
          this.items = []
          result.forEach(kilo => {
            this.items.push(kilo)
          })
        })
        .catch(error => console.log('error', error))
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
          this.reloadPage()
        })
        .catch(error => console.log('error', error))
    },
    reloadPage () {
      location.reload()
    },
    setup () {

    }
  },
  async created () {
    await this.setup()
    this.loadGewichte()
  },
  mounted () {
  },
  updated () {
    console.log('UPDATED!')
  }
}
</script>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: center;
}

thead th {
  background-color: #f2f2f2;
}

tbody td {
  border-bottom: 1px solid #ddd;
}

</style>
