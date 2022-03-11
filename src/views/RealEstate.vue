<template>
  <div class="card">
    <div class="card-header">Houses</div>
    <div class="card-body">
      <HouseList :houses="houses" />
    </div>
  </div>
</template>

<script>
import HouseList from "@/components/house/houseList.vue";
export default {
  components: { HouseList },
  data: () => {
    return {
      houses: [
        {
          coverImg:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/217882733.jpg?k=7e62f76511564f0c98d60efc8ce00e547243ea76ef189266f44cd0b5bea2c1da&o=&hp=1",
          title: "Real Estate",
          summary:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          coverImg:
            "https://enesnergizlawyer.com/wp-content/uploads/2019/09/nidvijomist.jpg",
          title: "Real Estate",
          summary:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          coverImg:
            "https://infradeals.in/wp-content/uploads/2020/08/pexels-photo-1396132-1.jpeg",
          title: "Real Estate",
          summary:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          coverImg:
            "https://southsoundpropertygroup.com/files/2019/07/Cottage-1024x683.jpg",
          title: "Real Estate",
          summary:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          coverImg:
            "https://res.akamaized.net/domain/image/upload/t_web/c_fill,w_600/v1568703466/94_Newington_Road_Marrickville_NSW_1_xphe8b.jpg",
          title: "Real Estate",
          summary:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
    };
  },
};
</script>

<style>
</style>