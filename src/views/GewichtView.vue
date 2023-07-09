<template>
  <br>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <section class="greeting">
          <h2>Guten Tag! :-)</h2>
        </section>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-sm-4">
        <dynamic-form title="Fügen Sie bitte Ihre neue Gewicht hinzu!"/>
      </div>
      <div class="col-sm-1"></div>
      <div class="col-sm-6">
        <target-test/>
      </div>
    </div>
    <br>
    <div class="row">
        <div class="col-sm-4">
          <gewicht-tabelle title="Test Tabelle"/>
        </div>
        <div class="col-sm-1"></div>
        <div class="col-sm-7">
          <diagramm-test title="Test Diagramm"/>
        </div>
    </div>
  </div>
</template>

<script>
import DynamicForm from '@/components/DynamicForm.vue'
import DiagrammTest from '@/components/DiagrammTest.vue'
import GewichtTabelle from '@/components/GewichtTabelle.vue'
import TargetTest from '@/components/TargetTest.vue'
export default {
  name: 'GewichtView',
  components: { TargetTest, GewichtTabelle, DiagrammTest, DynamicForm }
}
</script>

<style scoped>
.col-sm-7 {
  display: auto;
  align-items: center;
  justify-items: center;
}

.container {
  font-family: 'Montserrat', sans-serif;
}
</style>
