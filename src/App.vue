<template>
  <div id="app" class="bg-gray-200">
    <header>
      <calculator-header />
    </header>
    <main>
      <div class="main-container container mx-auto">
        <router-view></router-view>
      </div>
    </main>
    <footer>
      <calculator-footer />
    </footer>
  </div>
</template>

<script>
import CalculatorFooter from "./components/CalculatorFooter.vue";
import CalculatorHeader from "./components/CalculatorHeader.vue";

export default {
  name: "App",
  components: {
    CalculatorHeader,
    CalculatorFooter,
  },
};
</script>

<style>
#app {
}
.main-container {
  min-height: calc(100vh - 104px);
}
</style>
