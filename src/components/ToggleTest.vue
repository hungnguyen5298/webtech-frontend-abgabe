<script>
export default {
  name: 'ToggleTest',
  props: ['mode']
}
</script>

<template>
  <div class="toggle-wrapper">
    <label class="toggletest">
      <input
        type="checkbox"
        :checked = "(mode === 'dark') ? 'checked' : false"
        @change="$emit('toggle')"
      />
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<style>

.toggle-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 600px;
}

.toggletest {
  position: absolute;
  display: inline-block;
  align-items: center;
  width: 60px;
  height: 34px;
}

.toggletest input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1b1e21;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.toggler:before {
  position:absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background: #FFFFFF;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .toggler {
  background: #2196F3;
}
input:focus + toggler {
  box-shadow: 0 0 2px #2196F3;
}

input:checked + .toggler:before {
  -webkit-transition: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.toggler.round {
  border-radius: 34px;
}

.toggler.round:before {
  border-radius: 34px;
}
</style>
