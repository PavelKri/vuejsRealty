<template>
  <div class="col-md-6 col-lg-4 col-12 d-flex">
    <div class="card-deck mb-3 text-center">
      <div class="card h-100">
        <img :src="house.coverImg" class="card-img-top" :alt="house.title" />
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title">{{ house.title }}</h5>
            <div class="rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
          <p class="card-text">
            {{ house.summary }}
          </p>
          <a href="#" class="btn btn-primary">Detail</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "house",
  props: {
    house: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.card-img-top {
  width: 100%;
  height: 25vh;
  object-fit: cover;
}
</style>