<template>
  <div class="header-container container mx-auto py-4 md:px-20">
    <div class="header-inner-container md:flex justify-between items-center">
      <div class="logo-container md:px-0 px-8 md:pb-0 pb-4">
        <router-link class="" to="/">
          <span class="text-2xl font-semibold">Amarelator</span>
        </router-link>
      </div>
      <div class="navigation-container md:px-0 px-4">
        <nav>
          <ul class="flex">
            <li>
              <router-link
                to="/"
                class="text-md font-medium px-4 py-1.5 hover:bg-gray-300 focus:bg-gray-300 rounded mr-1"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/love-calculator"
                class="text-md font-medium px-4 py-1.5 hover:bg-gray-300 focus:bg-gray-300 rounded"
                >Love Calculator</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.router-link-exact-active {
  color: #3730a3;
  background-color: #d8d9dd;
}
</style>
