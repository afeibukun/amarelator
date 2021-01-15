<template>
  <div>
    <div
      class="main-inner-container px-10 md:px-20 py-32 md:py-40 bg-indigo-800 rounded-md md:rounded-tl-3xl md:rounded-tr-md md:rounded-b-3xl relative"
      :style="mainInnerContainerStyle"
    >
      <div class="block md:flex justify-between items-center">
        <div class="home-text-section w-full md:w-1/2">
          <div class="home-text-title mb-10">
            <h1 class="text-3xl text-white font-semibold w-auto md:w-96">
              Confirm the compatibility between yourself and your partner
            </h1>
          </div>
          <div>
            <div class="button-container mt-8">
              <router-link
                to="/love-calculator?framework=simplex"
                class="get-started-button py-2 px-8 bg-yellow-500 rounded text-gray-700 font-medium text-md shadow-sm focus:outline-none focus:ring focus:bg-yellow-700 hover:bg-yellow-700 hover:text-white focus:text-white"
              >
                Get Started
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="featured-cards-container">
      <div
        class="featured-cards-inner-container md:flex justify-center items-center mt-10 pb-10"
      >
        <div
          class="featured-cards card-simplex w-80 py-8 px-6 mx-auto md:mx-4 mt-2 shadow-sm bg-white rounded"
        >
          <div>
            <h3 class="text-2xl font-semibold text-indigo-900 mb-12">
              Simplex
            </h3>
            <p class="mb-6 text-justify">
              Check out the compatibility between yourself and your partner
              using the Simplex framework.
            </p>
          </div>
          <div>
            <router-link
              to="/love-calculator?framework=simplex"
              class="font-medium text-md w-full py-2 bg-indigo-200 rounded text-indigo-900 focus:outline-none focus:ring inline-block text-center"
            >
              Simplex Compatibility
            </router-link>
          </div>
        </div>
        <div
          class="featured-cards card-gravis w-80 py-8 px-6 mx-auto mt-2 md:mx-4 shadow-sm bg-white rounded"
        >
          <div>
            <h3 class="text-2xl font-semibold text-yellow-900 mb-12">
              Gravis
            </h3>
            <p class="mb-6 text-justify">
              Check out your compatibility using the Gravis framework.
            </p>
          </div>
          <div>
            <router-link
              to="/love-calculator?framework=gravis"
              class="font-medium text-md w-full py-2 bg-yellow-200 rounded text-yellow-900 focus:outline-none focus:ring inline-block text-center"
            >
              Gravis Compatibility
            </router-link>
          </div>
        </div>
        <div
          class="featured-cards card-flames w-80 py-8 px-6 mx-auto md:mx-4 mt-2 shadow-sm bg-white rounded"
        >
          <div>
            <h3 class="text-2xl font-semibold text-red-900 mb-12">
              Flames
            </h3>
            <p class="mb-6 text-justify">
              Remember the popular flames game from high school? Check it out
            </p>
          </div>
          <div>
            <router-link
              to="/love-calculator?framework=flames"
              class="font-medium text-md w-full py-2 bg-red-200 rounded text-red-900 focus:outline-none focus:ring inline-block text-center"
            >
              Checkout Flames
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import boyAndGirlBackground from "../assets/img/boy-and-girl.jpg";
export default {
  data() {
    return {
      boyAndGirlBackground,
    };
  },
  computed: {
    mainInnerContainerStyle() {
      return {
        background:
          "linear-gradient(rgba(55,48,163,0.7), rgba(55,48,163,0.7)), url(" +
          this.boyAndGirlBackground +
          ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 100%",
      };
    },
  },
};
</script>

<style>
.main-inner-container {
  background-size: cover;
}
</style>
