<template>
  <div>
    <div
      class="main-inner-container px-10 md:px-20 py-32 md:py-40 bg-indigo-800 rounded-md md:rounded-tl-3xl md:rounded-tr-md md:rounded-b-3xl relative overflow-hidden"
      :style="mainInnerContainerStyle"
    >
      <div class="block md:flex justify-between items-center">
        <div class="input-section w-full md:w-1/2">
          <div class="input-section-title mb-10">
            <h1 class="text-4xl text-white font-semibold w-auto md:w-96">
              Find out how well you match with your Partner
            </h1>
            <p class="text-2xl text-yellow-400 font-semibold uppercase my-8">
              {{ frameworkName }}
              <span class=" text-yellow-200">framework</span>
            </p>
          </div>
          <div>
            <div class="input-container mb-8">
              <label class="text-white block text-md font-medium"
                >Your Name</label
              >
              <input
                v-model="yourName"
                type="text"
                class="font-medium text-xl py-1.5 px-4 rounded-sm shadow-sm focus:outline-none focus:ring  focus:border-gray-600"
              />
            </div>
            <div class="input-container">
              <label class="text-white block text-md font-medium"
                >Partner's Name</label
              >
              <input
                v-model="partnersName"
                type="text"
                class="font-medium text-xl py-1.5 px-4 rounded-sm shadow-sm focus:outline-none focus:ring  focus:border-gray-600"
              />
            </div>

            <div class="button-container mt-8">
              <button
                class="amarelate-button py-2 px-8 bg-yellow-500 rounded text-gray-700 font-medium text-lg shadow-sm focus:outline-none focus:ring focus:bg-yellow-700 hover:bg-yellow-700 hover:text-white focus:text-white"
                @click="amarelate"
              >
                Amarelate
              </button>
            </div>
          </div>
        </div>
        <div class="illustration-section hidden md:block ">
          <div>
            <img class="absolute top-28 -right-40" :src="polygonHeart" />
          </div>
        </div>

        <div
          class="result-section absolute right-0 top-0 bottom-0 md:w-5/12 bg-white rounded-sm shadow-md"
          v-if="loveCalculatorData.yourName && showCalculatorData"
        >
          <div class="result-inner-section px-8 py-8 relative" style="">
            <div>
              <button
                href=""
                class="absolute bg-purple-700 right-2 rounded-full inline-block w-10 h-10 focus:outline-none focus:ring"
                @click="hideCalculatorData"
              >
                <span
                  class="text-xl leading-5 absolute top-2.5 left-4 text-white"
                  >x</span
                >
              </button>
            </div>
            <div class="mt-4">
              <img class="w-48 mx-auto" :src="polygonHeart" />
            </div>
            <div v-if="loveCalculatorData.result" class="mt-4">
              <h3 class="text-5xl text-center p-2 font-bold uppercase">
                {{ displayedResult }}
              </h3>
              <h3
                v-if="loveCalculatorData.framework == 'flames'"
                class="text-2xl text-center uppercase"
              >
                {{ loveCalculatorData.description }}
              </h3>
            </div>
            <div>
              <h4 class="text-2xl font-medium mb-4 capitalize">
                Hi, {{ loveCalculatorData.yourName }}
              </h4>

              <p class="text-xl font-normal text-justify">
                {{ loveCalculatorData.comment }}
              </p>
            </div>
            <div>
              <p class="text-xl font-medium mt-10 text-justify">
                Try out other frameworks to see how strong your bond could be
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="featured-cards-container">
      <div class="featured-title-container">
        <h1 class="text-3xl font-semibold mt-10 text-center px-4">
          Try out other frameworks
        </h1>
      </div>
      <div
        class="featured-cards-inner-container md:flex justify-center items-center mt-10 pb-10"
      >
        <div
          class="featured-cards card-simplex w-80 py-8 px-6 mx-auto md:mx-4 mt-2 shadow-sm bg-white rounded"
          v-if="frameworkName != 'simplex'"
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
          v-if="frameworkName != 'gravis'"
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
          v-if="frameworkName != 'flames'"
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
import loveIllustration from "../assets/img/love-img.png";
import polygonHeart from "../assets/img/polygon_heart.png";
import boyAndGirlBackground from "../assets/img/boy-and-girl.jpg";
import LoveCalculator from "../LoveCalculator.js";

export default {
  name: "LoveCalculator",
  data() {
    return {
      yourName: "",
      partnersName: "",
      loveIllustration,
      boyAndGirlBackground,
      polygonHeart,
      loveCalculatorData: {
        yourName: null,
        partnersName: null,
        result: null,
        description: null,
        comment: null,
      },
      showCalculatorData: false,
    };
  },
  created() {},
  computed: {
    frameworkName() {
      let response = "simplex";
      if (this.$route.query.framework) {
        response = this.$route.query.framework;
      }
      return response;
    },
    mainInnerContainerStyle() {
      return {
        background:
          "linear-gradient(rgba(55,48,163,0.9), rgba(55,48,163,0.9)), url(" +
          this.boyAndGirlBackground +
          ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 100%",
      };
    },
    displayedResult() {
      let result = this.loveCalculatorData.result;
      if (
        this.loveCalculatorData.framework == "simplex" ||
        this.loveCalculatorData.framework == "gravis"
      ) {
        result = result + "%";
      }
      return result;
    },
  },
  methods: {
    amarelate() {
      let loveCalculatorObject = new LoveCalculator(
        this.yourName,
        this.partnersName,
        this.frameworkName
      );
      loveCalculatorObject.compute();
      this.loveCalculatorData = loveCalculatorObject;
      this.showCalculatorData = true;
    },
    hideCalculatorData() {
      this.showCalculatorData = !this.showCalculatorData;
    },
  },
};
</script>

<style></style>
