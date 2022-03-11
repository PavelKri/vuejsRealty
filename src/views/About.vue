<template>
  <div class="card">
    <div class="card-header">About</div>
    <div class="card-body">
      <vue-range-slider
        v-model="value"
        :min="min"
        :max="max"
        :formatter="formatter"
      ></vue-range-slider>
    </div>
  </div>
</template>

<script>
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";
export default {
  components: { VueRangeSlider },
  data() {
    return {
      value: [0, 50],
    };
  },
  created() {
    this.min = 0;
    this.max = 100;
  },
};
</script>

<style>
</style>