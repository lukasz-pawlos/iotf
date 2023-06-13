<template>
  <div class="my-4">
    <div class="row">
      <div class="col-6 col-lg-3">
      <label>Pulse alert</label>
      <input type="number"
             min="1"
             max="240"
             v-model="formDate.alert"
             class="form-control">
      </div>
      <div class="col-3 align-self-end">
        <button
            @click="publishMqttMessage('iot/settings/savefrequency', `${formDate.alert}`)"
            :disabled="!formDate.alert"
            class="btn btn-primary">Save</button>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-lg-3">
      <label>Save frequency</label>
      <input type="number"
             min="1"
             max="240"
             v-model="formDate.saveF"
             class="form-control">
      </div>
      <div class="col-3 align-self-end">
        <button
            @click="publishMqttMessage('iot/settings/savefrequency', `${formDate.saveF}`)"
            :disabled="!formDate.saveF"
            class="btn btn-primary">Save</button>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-lg-3">
      <label>Sending frequency</label>
      <input type="number"
             min="1"
             max="240"
             v-model="formDate.saveS"
             class="form-control">
      </div>
      <div class="col-3 align-self-end">
        <button
            @click="publishMqttMessage('iot/settings/savefrequency', `${formDate.saveS}`)"
            :disabled="!formDate.saveS"
            class="btn btn-primary ">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue'
import { useMqtt } from '../useMqtt';

const { mqttData, subscribeMqttTopic, publishMqttMessage } = useMqtt();

const formDate = ref({})

onMounted(() => {
  subscribeMqttTopic('iot/settings/value');

  setTimeout(() => {
    publishMqttMessage('iot/settings', `get`);
  }, 1000);
});

watch(() => mqttData.value, (newValue) => {
  formDate.value = JSON.parse(JSON.stringify(newValue[0]));
}, { deep: true });


</script>

<style scoped>

</style>