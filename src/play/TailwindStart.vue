<template>
  <section id="tailwind-start" class="p-6">
    <button
      class="bg-blue-500 rounded-lg px-6 py-3 leading-none text-white uppercase font-semibold text-sm shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
    >
      Sign up
    </button>
    <button class="sass-btn">sass</button>

    <pre>
      https://blog.codecourse.com/tailwind-in-vue-cli/
    </pre>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<style lang="scss" scoped>
.sass-btn {
  padding: 1rem 3rem;
  background-color: red;
}
</style>
