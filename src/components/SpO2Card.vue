<template>
  <div class="col  text-center">
    <router-link to="/spo2" class="text-decoration-none text-dark">
      <div class="py-5 border border-primary bg-primary-subtle rounded cards">
        <h1>SpO2</h1>
        <i class="bi bi-heart-pulse fs-1"></i>
        <h1>{{ mqttData.slice(-1)[0] }} %</h1>
      </div>
    </router-link>
  </div>
</template>

<script setup>

import { useMqtt } from '../useMqtt';

const { mqttData, subscribeMqttTopic } = useMqtt();

subscribeMqttTopic('iot/sa02/value');

</script>

<style scoped>

</style>