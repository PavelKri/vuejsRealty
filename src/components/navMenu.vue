<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Real Estate</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <router-link
            to="/"
            class="nav-item nav-link"
            active-class="active"
            exact
          >
            Home
          </router-link>
          <router-link
            to="about"
            class="nav-item nav-link"
            active-class="active"
            exact
          >
            About
          </router-link>
          <router-link
            to="contact"
            class="nav-item nav-link"
            active-class="active"
            exact
          >
            Contact
          </router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavMenu",
};
</script>

<style>
</style>