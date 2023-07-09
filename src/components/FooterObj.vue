<template>
  <footer :class="[mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-center']">
    <div class="container p-4 pb-0">
      <section class="">
        <form action="">
          <div class="row d-flex justify-content-center">
            <div class="col-auto">
              <p class="pt-2">
                <strong>Anmelden für unsere neue Nachricht!</strong>
              </p>
            </div>
            <div class="col-md-5 col-12">
              <div class="form-outline mb-4">
                <input type="email" id="form5Example27" class="form-control" />
                <label class="form-label" for="form5Example27">Email address</label>
              </div>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-4">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 WeightFit Team
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterObj',
  props: ['mode']
}
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
