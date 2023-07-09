<template>
  <div class="App" :class="mode">
    <navbar :mode="mode" @toggle="toggle"/>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <footer-obj :mode="mode"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import FooterObj from '@/components/FooterObj.vue'

export default {
  name: 'App',
  data () {
    return {
      mode: 'light'
    }
  },
  components: { FooterObj, Navbar },
  methods: {
    toggle () {
      if (this.mode === 'dark') {
        // eslint-disable-next-line vue/no-mutating-props
        this.mode = 'light'
      } else {
        // eslint-disable-next-line vue/no-mutating-props
        this.mode = 'dark'
      }
    }
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.App {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  min-height: 100vh;
  background: white;
  color: #15202B;
  transition: background 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
}

.dark {
  background: #404040;
  color: #f3f3f3;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.footer {
  margin-top: auto;
}
</style>
