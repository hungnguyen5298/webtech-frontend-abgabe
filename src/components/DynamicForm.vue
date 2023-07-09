<template>
  <section class="createKilo">
    <h3>{{ title }}</h3>
    <br>
    <div class="row">
      <div class="d-flex justify-content-center">
        <form>
          <div class="mb-3">
            <label for="kiloField" class="form-label">Was ist ihre Gewicht?</label>
            <input v-model="kiloField" placeholder="Punkt statt Komma" type="number" id="kiloField" class="form-control">
          </div>
          <div class="mb-3">
            <label for="datumField" class="form-label">Wie ist die Datum?</label>
            <input v-model="datumField" placeholder="YYYY-MM-DD" @keyup.enter="save()" type="date" id="datumField" class="form-control">
          </div>
          <br>
          <button type="button" @click="save()" class="btn btn-primary">Speichern</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DynamicForm',
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

</style>
