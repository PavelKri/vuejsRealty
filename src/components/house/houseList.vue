<template>
  <div class="row">
    <House v-for="(house, index) in houses" :key="index" :house="house" />
  </div>
</template>

<script>
import House from "@/components/house/house.vue";
export default {
  components: { House },
  props: {
    houses: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>

<style>
</style>