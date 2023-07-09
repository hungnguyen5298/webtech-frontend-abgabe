<template>
  <header>
    <div class="left-sec">
      <nav>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/gewicht">Gewicht verwalten</router-link>
      </nav>
    </div>
    <div class="center-sec">
      <div class="logo-container">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" alt="Logo" width="40" height="40">
        </a>
      </div>
    </div>
    <div class="right-sec">
      <nav>
        <ToggleTest :mode="mode" @toggle="$emit('toggle')"/>
      </nav>
    </div>
  </header>
</template>

<script>
import ToggleTest from '@/components/ToggleTest.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  computed: {
    ToggleTest () {
      return ToggleTest
    }
  },
  components: { ToggleTest },
  props: ['mode']
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 60px;
  background: #f8f9fa;
  transition: background 0.3s ease-in-out;
  font-size: large;
}

.dark header{
  background: #222529;
}

header .left-sec {
  flex: 600px;
}

header .right-sec {
  flex: auto;
  justify-content: center;
  align-items: center;
}

header .center-sec {
  flex: 30;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-container img {
  margin: 0;
}

header nav {
  display: flex;
  height: 60px;
}

header nav .nav-link {
  display: flex;
  align-items: center;
  padding: 0px 15px;
}

header nav .nav-link:hover {
  background: whitesmoke;
}

.dark header nav .nav-link:hover {
  background: #1b1e21;
}

a {
  text-decoration: none;
  margin-right: 1em;
}

a:hover,
a.router-link-active {
  border-bottom: 2px solid lightsteelblue;
}

</style>
