<template>
  <div class="love-calculator-container container mx-auto">
    <div
      class="love-calculator-inner-container block md:flex justify-between items-center  px-10 md:px-20 py-32 md:py-40 bg-indigo-800 rounded-tl-3xl rounded-tr-md rounded-b-3xl relative"
    >
      <div class="input-section w-full md:w-1/2">
        <div class="input-section-title mb-10">
          <h1 class="text-3xl text-white font-semibold w-auto md:w-96">
            Find out how well you match with your Partner
          </h1>
        </div>
        <div>
          <div class="input-container mb-8">
            <label class="text-white block text-md font-medium"
              >Your Name</label
            >
            <input
              v-model="yourName"
              type="text"
              class="font-medium text-lg py-1.5 px-4 rounded-sm shadow-sm focus:outline-none focus:ring  focus:border-gray-600"
            />
          </div>
          <div class="input-container">
            <label class="text-white block text-md font-medium"
              >Partner's Name</label
            >
            <input
              v-model="partnersName"
              type="text"
              class="font-medium text-lg py-1.5 px-4 rounded-sm shadow-sm focus:outline-none focus:ring  focus:border-gray-600"
            />
          </div>

          <div class="button-container mt-8">
            <button
              class="amarelate-button py-2 px-8 bg-yellow-500 rounded text-gray-700 font-medium text-md shadow-sm focus:outline-none focus:ring focus:bg-yellow-700 hover:bg-yellow-700 hover:text-white focus:text-white"
            >
              Amarelate
            </button>
          </div>
        </div>
      </div>
      <div class="illustration-section hidden md:block ">
        <div>
          <img class="absolute top-6 right-2" :src="loveIllustration" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loveIllustration from "../assets/img/love-img.png";

export default {
  name: "LoveCalculator",
  data: function() {
    return {
      yourName: "",
      partnersName: "",
      loveIllustration,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.love-calculator-container {
  min-height: calc(100vh - 64px);
}
</style>
