<template>
  <div id="app">
    <NavMenu />
    <div class="container py-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/navMenu.vue";

export default {
  name: "App",
  components: { NavMenu },
};
</script>

<style>
@import "https://use.fontawesome.com/releases/v5.2.0/css/all.css";

.checked {
  color: orange;
}
</style>
