<template>
  <section id="map-tooltip">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>{{ title }}</h1>
          <p>{{ desc }}</p>
          <pre>210310 - trigger svg popover with data-attr</pre>
          <ul>
            <li>
              <a href="https://www.pavilion-kl.com/directory/lv5"
                >reference: Pavilion KL directory</a
              >
            </li>
            <li>
              <a
                href="https://getbootstrap.com/docs/5.0/components/popovers/#example-enable-popovers-everywhere"
                >Bootstrap 5 popover</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col test">
          <!-- <?xml version="1.0" encoding="utf-8"?> -->
          <!-- Generator: Adobe Illustrator 25.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <a
            tabindex="0"
            class="btn btn-lg btn-danger"
            role="button"
            data-bs-toggle="popover"
            data-bs-trigger="focus"
            title="Dismissible popover"
            data-bs-content="And here's some amazing content. It's very engaging. Right?"
            >Dismissible popover</a
          >
          <svg
            version="1.1"
            id="map"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 800 600"
            style="enable-background: new 0 0 800 600"
            xml:space="preserve"
          >
            <image
              style="overflow: visible"
              width="750"
              height="582"
              xlink:href="@/assets/MapTooltip/siteplan.jpg"
              transform="matrix(1 0 0 1 25 9)"
            ></image>
            <polygon
              class="st0"
              points="70.4,272.8 325.8,272.8 652.5,25 757.1,156.8 528.2,324.3 552.4,424.4 356.9,507.7 324.3,507.7 
	324.3,560.8 205.3,560.8 205.3,535 70.4,535 "
            />
            <circle
              class="st st1"
              cx="261.4"
              cy="400.1"
              r="39.4"
              data-bs-trigger="focus"
              title="Dismissible popover"
              data-bs-content="And here's some amazing content. It's very engaging. Right?"
            />
            <circle
              class="st st2"
              cx="581.2"
              cy="186.4"
              r="39.4"
              data-bs-trigger="focus"
              title="Dismissible popover 2"
              data-bs-content="This appear like the others"
            />
            <circle
              class="st st3"
              cx="488.8"
              cy="360.7"
              r="39.4"
              data-bs-trigger="focus"
              title="Static"
              data-bs-content="This button was specified in the initial HTML document"
              data-placement="top"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
export default {
  mounted() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll("circle"));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
    console.log(popoverList);
  },
  data: () => {
    return {
      title: "MapTooltip",
      desc:
        "Hover and highlight SVG; add small popup to describe the highlighted section",
    };
  },
  methods: {
    /*  popoverCircle(e) {
      // var exampleEl = document.getElementById("example");
      let popover = new bootstrap.Popover(e.target, {
        container: "body",
        trigger: "click",
        // title: "hello world",
        // trigger: "hover",
        // template: `<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>`,
      });
      console.log(e.target, popover);
    }, */
  },
};
</script>
<style lang="scss" scoped>
.st0 {
  fill: #cccccc;
  opacity: 0.8;
}
.st {
  opacity: 0.5;
  transition: all 0.3s ease;
  &.st1 {
    fill: #ffce6d;
  }
  &.st2 {
    fill: #b6faff;
  }
  &.st3 {
    fill: #91d7ff;
  }
  &.st1:hover,
  &.st2:hover,
  &.st3:hover {
    opacity: 1;
  }
}
</style>