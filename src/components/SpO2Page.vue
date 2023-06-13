<template>
  <div class="row g-3">
    <div class="col-6">
      <label>Start Time</label>
      <input type="datetime-local"
             v-model="request.start"
             class="form-control">
    </div>
    <div class="col-6">
      <label>End Time</label>
      <input type="datetime-local"
             v-model="request.end"
             class="form-control">
    </div>
    <div class="text-center">
      <button class="btn btn-primary" @click="print"> Get data</button>
    </div>
    <apexchart width="100%" type="line" :options="options" :series="series" :key="testKey"></apexchart>
    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">MAX</th>
        <th scope="col">MIN</th>
        <th scope="col">AVG</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in datesMM.value" :key="item.date">
        <th scope="row">{{moment(item.date).format('YYYY-MM-DD HH:mm:ss')}}</th>
        <td>{{ item.max }}</td>
        <td>{{ item.min }}</td>
        <td>{{ item.avg }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import moment from 'moment';
import axios from 'axios';

const request = ref({});
const dates = ([]);
const datesMM = reactive([]);

const options= ref({
  chart: {
    id: 'vuechart-example',
    type: 'line'
  },
  xaxis: {
    type: 'datetime',
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
    style: 'hollow',
  },
  title: {
    text: 'SpO2'
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy HH:mm:ss'
    }
  },
})

const series= ref([{
  name: 'SpO2',
  data: []}
])

function getHours() {
  const startDate = new Date(request.value.start).setMinutes(0, 0, 0);
  let endDate = new Date(request.value.end);
  endDate.setMinutes(0, 0, 0);
  endDate.setHours(endDate.getHours() + 1);
  const fullHours = [];

  let currentHour = new Date(startDate);
  while (currentHour < endDate) {
    fullHours.push(moment(currentHour).format().slice(0, -6));
    currentHour.setHours(currentHour.getHours() + 1);
  }
  return fullHours;
}

onMounted(() => {
  request.value.start = moment().startOf('day').format().slice(0, -6);
  request.value.end = moment().endOf('day').format().slice(0, -6);
  fetchData();
  getHours();
  fetchDataMM();
});

function print() {
  fetchData();
  getHours();
  fetchDataMM();
}

async function fetchDataMM() {
  datesMM.value = [];
  let newDatas = []
  for (const data of getHours()) {
    try {
      const response = await axios.get('http://localhost:8000/api/sp02/mm', {
        params: {
          start: data,
          end: moment(data).add(1, 'hours').format('YYYY-MM-DDTHH:mm:ss')
        }
      });
      if (response.status === 200) {
        newDatas.push(response.data)
      } else {
        console.error('Failed to fetch data from API');
      }
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  }
  datesMM.value = newDatas;
}

async function fetchData() {
  try {
    const response = await axios.get('http://localhost:8000/api/sp02', {
      params: request.value});
    if (response.status === 200) {
      dates.value = response.data.map(({ date, value }) => [new Date(date).getTime() + 7200000 , value]);
      // dates.value = response.data.map(({ date }) => new Date(date).getTime());
      // values.value = response.data.map(({ value }) => value);
      // options.value.xaxis.categories = dates.value;
      // options.value.xaxis.min = dates.value[0];
      series.value[0].data = dates.value;
    } else {
      console.error('Failed to fetch data from API');
    }
  } catch (error) {
    console.error('Error while fetching data:', error);
  }
}
</script>

<style scoped>

</style>