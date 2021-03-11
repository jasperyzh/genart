<template>
  <main id="home">
    <section class="container">
      <div class="row">
        <h1>Home</h1>
      </div>
      <nav>
        <ul class="nav nav-pills justify-content-center">
          <li
            class="nav-item"
            v-for="(link, key) in documentation_links"
            :key="key"
          >
            <a :href="link" class="nav-link">
              {{ key }}
            </a>
          </li>
        </ul>
      </nav>
    </section>
    <section class="container">
      <div class="row">
        <!-- latest  -->
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      documentation_links: {
        "Bootstrap Doc": "https://getbootstrap.com/docs/5.0/components/navbar/",
        "vue-cli-documentation": "https://cli.vuejs.org",
        babel:
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
        eslint:
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
        "core-docs": "https://vuejs.org",
        Forum: "https://forum.vuejs.org",
        "Community Chat": "https://chat.vuejs.org",
        Twitter: "https://twitter.com/vuejs",
        News: "https://news.vuejs.org",
        "vue-router": "https://router.vuejs.org",
        vuex: "https://vuex.vuejs.org",
        "vue-devtools": "https://github.com/vuejs/vue-devtools#vue-devtools",
        "vue-loader": "https://vue-loader.vuejs.org",
        "awesome-vue": "https://github.com/vuejs/awesome-vue",
      },
    };
  },
};
</script>