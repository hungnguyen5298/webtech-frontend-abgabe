<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <h1 class="font-weight-light">WeightFit:</h1>
        <h1 class="font-weight-light">Gewicht-Tracker-Anwendung</h1>
        <p class="mt-4">
          Unsere App ist eine webbasierte Anwendung, die Benutzern ermöglicht,
          ihre Gewicht zu verfolgen und ihrer Fortschritt im Laufe der Zeit
          zu überwachen.
        </p>
        <router-link to="/gewicht" class="btn btn-primary">Jetzt starten!</router-link>
      </div>
      <div class="col-md-7">
        <img src="../assets/pic1.png" width="300" height="300">
      </div>
    </div>
    <div class="row">
      <div class="col-md-7">
        <img src="../assets/pic3.png" width="600" height="400">
      </div>
      <div class="col-md-5">
        <h1 class="font-weight-light">Multiplattform!</h1>
        <p class="mt-4">
          Der Betatest befindet sich in vollem Gange,
          und unsere App wird demnächst in den beiden größten App Stores verfügbar sein!
        </p>
        <img src="../assets/pic2.png" width="150" height="100">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
.row {
  align-items: center;
}
</style>
