<template>

  <div class="container text-center fs-2">
    {{ currentTime }}
  </div>

    <div class="row gx-4 my-5">
      <PulseCard/>
      <SpO2Card/>
    </div>

</template>

<script setup>
import { ref, onMounted  } from 'vue'
import PulseCard from './PulseCard';
import SpO2Card from './SpO2Card';


const currentTime = ref('');

function updateTime() {
  setInterval(() => {
    const now = new Date();
    currentTime.value = now.toLocaleString();
  }, 1000);
}

onMounted(() => {
  updateTime();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
