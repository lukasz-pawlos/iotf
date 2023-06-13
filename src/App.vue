<template>
  <div class="container border my-4">
    <NavBar/>
    <router-view />

      <section class="">
        <!-- Footer -->
        <footer class="text-center text-white bg-primary-subtle">
          <!-- Grid container -->
          <div class="container p-4 pb-0">
            <!-- Section: CTA -->
            <section class="">
              <p class="d-flex justify-content-center align-items-center fs-2">
                <a href="/" class="d-flex align-items-center text-decoration-none">
                  <i class="bi bi-activity"></i>
                  Health monitor
                </a>
              </p>
            </section>
            <!-- Section: CTA -->
          </div>
          <!-- Grid container -->

          <!-- Copyright -->
          <div class="text-center p-3 bg-primary">
            © 2023 Łukasz Pawłoś
          </div>
          <!-- Copyright -->
        </footer>
        <!-- Footer -->
      </section>

    </div>

</template>

<script setup>
import NavBar from './components/NavBar';


</script>

<style>

</style>
