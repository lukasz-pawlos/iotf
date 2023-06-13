<template>
  <div class="px-3 py-2 text-bg-dark border-bottom bg-primary">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none fs-2">
          <i class="bi bi-activity "></i>
          Health monitor
        </a>

        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
          <li>
            <router-link to="/" class="nav-link text-white text-center">
              <i class="bi bi-house mx-auto mb-1 " ></i>
              <br>
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/pulse" class="nav-link text-white text-center">
              <i class="bi bi-heart-pulse"></i>
              <br>
              Pulse
            </router-link>
          </li>
          <li>
            <router-link to="/spo2" class="nav-link text-white text-center">
              <i class="bi bi-browser-edge"></i>
              <br>
              SpO2
            </router-link>
          </li>
          <li>
            <router-link to="/settings" class="nav-link text-white text-center">
              <i class="bi bi-gear"></i>
              <br>
              Settings
            </router-link>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>