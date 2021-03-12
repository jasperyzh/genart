<template>
  <div id="metalob" class="my-5 px-0">
    <pre>
      <a target="_blank" href="https://www.metalab.com/about">MetaLab</a>
      <a target="_blank" href="https://learnvue.co/2020/02/6-techniques-to-write-better-vuejs-v-for-loops/">7 Ways to Write Better Vue v-for Loops</a>
    </pre>
    <section id="who-are-we" class="my-5">
      <div class="container-fluid p-0">
        <div class="row __maxwidth">
          <div class="col">
            <h1 class="title">Who we are</h1>
          </div>
        </div>
        <div
          class="row row-cols-2 row-cols-sm-3 justify-content-around __maxwidth"
        >
          <div class="col mb-4" v-for="(point, index) in points" :key="index">
            <h2 class="h5">
              <span class="h1">{{ point.value }}</span> {{ point.text }}
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section id="client" class="bg-circle __marginy">
      <div class="container-fluid">
        <div class="row justify-content-center __marginy text-center">
          <div class="col-8">
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              velit recusandae quos reiciendis officiis. Voluptate officia
              adipisci rerum non tenetur esse aliquid quasi voluptatem pariatur
              blanditiis, facere maxime quo repellendus.
            </p>
          </div>
        </div>
        <div class="row justify-content-center my-4">
          <div class="col-auto" v-for="item in 4" :key="item">
            <figure>
              <img src="http://via.placeholder.com/160x80" alt="..." />
            </figure>
          </div>
        </div>
        <div class="row justify-content-center my-4">
          <div class="col-auto" v-for="item in 5" :key="item">
            <figure>
              <img src="http://via.placeholder.com/160x80" alt="..." />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      points: [
        {
          value: 63,
          text: "Campaigns launched",
        },
        {
          value: 3,
          text: "Unicorns launched",
        },
        {
          value: 7,
          text: "Years in business",
        },
        {
          value: 2,
          text: "Countries represented",
        },
        {
          value: "32%",
          text: "of fishes",
        },
        {
          value: "$0",
          text: "Funding raised",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@use "~bootstrap/scss/bootstrap" as *;
.bg-circle {
  background-image: url("~@/assets/Metalob/about-bg-circle.svg");
  background-position: center top;
  overflow: hidden;
  padding-top: 170px;
}
.__maxwidth {
  max-width: 912px;
  margin: auto;
}
.__marginy {
  margin: 5rem auto;
}
.title {
  margin-bottom: 5rem;
  font-weight: bold;
  font-size: 3.2rem;
  @include media-breakpoint-up(md) {
    font-size: 4.2rem;
  }
}
h2 {
  color: #555;
  font-weight: 300;
  display: flex;
  flex-direction: column;

  @include media-breakpoint-up(md) {
    flex-direction: row;
    align-items: center;
  }

  span.h1 {
    margin: 0;
    font-size: 2.4rem;
    font-weight: bold;

    @include media-breakpoint-up(md) {
      margin-right: 5px;
    }
  }
}
</style>
