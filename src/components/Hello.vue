<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <nav-bar></nav-bar>

        <div id="chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import NavBar from "./shared/NavBar";

import ApexCharts from 'apexcharts'
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    ApexCharts
  },
  methods: {
    logout: () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  },
  mounted() {
    var options = {
      chart: {
        type: "line"
      },
      series: [
        {
          name: "sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
  }
};
</script>

<style scoped>
</style>
