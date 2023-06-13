<template>
    <div class="col text-center" >
      <router-link to="/pulse" class="text-decoration-none text-dark">
      <div class="py-5 border border-primary bg-primary-subtle rounded cards">
        <h1>Pulse</h1>
        <i class="bi bi-heart-pulse fs-1"></i>
        <h1>{{ mqttData.slice(-1)[0] }} bpm</h1>
      </div>
      </router-link>
    </div>
</template>

<script setup>

import { useMqtt } from '../useMqtt';

const { mqttData, subscribeMqttTopic } = useMqtt();

subscribeMqttTopic('iot/pulse/value');

</script>

<style>

.cards{

  transition: all 0.2s ease;
  cursor: pointer;


}



.cards:hover{

  box-shadow: 5px 6px 6px 2px #e9ecef;
  transform: scale(1.1);
}

</style>