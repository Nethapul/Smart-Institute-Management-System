<template>
  <div class="card h-100">
    <div class="card-body p-0">
      <div
        class="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
        <h6 class="text-lg mb-0">Revenue Statistic</h6>
      </div>
      <div class="p-20">
        <ul class="d-flex flex-wrap align-items-center justify-content-center mb-16 gap-3">
          <li class="d-flex align-items-center gap-8">
            <span class="w-12-px h-12-px radius-2 rotate-45-deg bg-primary-600"></span>
            <span class="text-secondary-light text-sm fw-semibold">
              Total Fee:
              <span class="text-primary-light fw-bold">$500</span>
            </span>
          </li>
          <li class="d-flex align-items-center gap-8">
            <span class="w-12-px h-12-px radius-2 rotate-45-deg bg-warning-600"></span>
            <span class="text-secondary-light text-sm font-semibold">
              Collected Fee:
              <span class="text-primary-light fw-bold"> $300</span>
            </span>
          </li>
        </ul>
        <div id="revenueStatistic" ref="chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RevenueStatic",
  mounted() {
    var options = {
      series: [{
        name: 'Total Fee',
        data: [25, 35, 50, 60, 26, 20, 40, 20, 50, 16, 10, 40]
      }, {
        name: 'Collected Fee',
        data: [15, 16, 24, 30, 20, 15, 20, 10, 25, 10, 6, 20]
      }],
      chart: {
        type: 'bar',
        height: 250,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      colors: ["#25A194", "#FF7A2C"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          shape: "pyramid",
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr',
          'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return "$" + value + "k";
          },
          style: {
            fontSize: "14px"
          }
        },
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1
      }
    };

    if (window.ApexCharts) {
      var chart = new window.ApexCharts(this.$refs.chart, options);
      chart.render();
    }
  }
}
</script>
