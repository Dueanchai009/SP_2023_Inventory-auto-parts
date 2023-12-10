<template>
  <div class="row ">
    <div class="col-lg-4 col-12" v-for="i in 3" :key="i">
      <div class="card shadow border-0 bg-danger">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="text-white">สินค้าในระบบ</h6>
            <i class='bx bxs-balloon text-white' style="font-size:20px;"></i>
          </div>
          <h4 class="text-white">฿20,200</h4>
        </div>
      </div>
    </div>

    <div class="col-lg-12 mt-3">

      <Bar  id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
    <!-- <div class="col-lg-7">

    </div> -->
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
<style scoped>

.card{
  transition: all 0.3s ease;
}
.card:hover{
  transform: translateY(-5px);
}
</style>