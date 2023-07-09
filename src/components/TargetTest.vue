<template>
  <section class="getZielKilo">
    <div class="table-responsive">
      <table class="table table-bordered table-striped table-hover text-center caption-top">
        <caption>Ziel</caption>
        <thead class="bg-light">
        <tr>
          <th scope="col">Ihre Ziel ist zurzeit:</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="items1.length === 0">
          <td colspan="1">Es liegt keine Information vor!</td>
        </tr>
        <tr v-for="(item1) in items1" :key="item1.id">
          <td>{{ item1.zielKilo }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
  <section class="getKilo">
    <div class="table-responsive">
      <table class="table table-bordered table-striped table-hover text-center caption-top">
        <caption>Gewicht</caption>
        <thead class="bg-light">
        <tr>
          <th scope="col">Ihre Gewicht ist zurzeit:</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="items.length === 0">
          <td colspan="1">Es liegt keine Information vor!</td>
        </tr>
        <tr v-for="(item, index) in lastItems" :key="index">
          <td>{{ item.kilo }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
  <section class="Diff">
    <div v-if="items.length > 0 && items1.length > 0">
      <h3>Sie müssen noch {{ getDiff() }} Kilogramm abnehmen,
        um Ihre Ziel zu erreichen.
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TargetTest',
  props: ['title'],
  data () {
    return {
      items: [],
      items1: [],
      kiloField: '',
      zielKiloField: ''
    }
  },
  computed: {
    lastItems () {
      return this.items.slice(-1)
    }
  },
  methods: {
    loadZielGewichte () {
      const endpoint = 'http://localhost:8080/zielgewicht'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => {
          this.items1 = []
          result.forEach(zielKilo => {
            this.items1.push(zielKilo)
          })
        })
        .catch(error => console.log('error', error))
    },
    save () {
      const endpoint = 'http://localhost:8080/addzielgewicht'
      const data = {
        zielKilo: this.zielKiloField
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
          this.loadZielGewichte()
        })
        .catch(error => console.log('error', error))
    },
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
    save1 () {
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
    getDiff () {
      const lastWeight = this.lastItems[0].kilo
      const targetWeight = this.items1[0].zielKilo
      const diff = lastWeight - targetWeight
      return diff.toFixed(2)
    },
    updateZielKilo () {
      const endpoint = 'http://localhost:8080/updatezielgewicht'
      const data = {
        zielKilo: this.zielKiloField
      }
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data)
          this.loadZielGewichte()
          this.zielKiloField = ''
        })
        .catch(error => console.log('error', error))
    },
    setup () { }
  },
  async created () {
    await this.setup()
    this.loadZielGewichte()
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

</style>
