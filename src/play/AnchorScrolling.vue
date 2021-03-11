<template>
  <section id="anchor-scrolling">
    <div class="container">
      <!-- nav -->
      <div class="row">
        <ul class="nav">
          <li
            class="nav-item"
            v-for="(content, index) in contents"
            :key="index"
          >
            <a class="nav-link" :href="`#${lowercaseDashes(content)}`">{{
              content
            }}</a>
          </li>
        </ul>
      </div>
      <!-- paragraphs -->
      <div class="row" v-for="(content, index) in contents" :key="index">
        <div class="col">
          <h2 :id="lowercaseDashes(content)">{{ content }}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit non
            voluptate sunt. Natus iure doloremque, pariatur nisi recusandae amet
            magnam veniam accusamus ipsum aliquid aut suscipit, quibusdam eos
            fugiat eligendi qui perferendis, itaque facilis et nesciunt rem
            omnis odit vero repellendus? Doloribus repudiandae fugit asperiores
            explicabo alias illum architecto fuga. Libero reprehenderit iste
            veniam optio at laudantium! Expedita aut beatae ipsa aspernatur at
            sit repudiandae nam deserunt sapiente fuga ex alias placeat
            molestias nihil fugiat aperiam nostrum, ad velit dolorum laudantium?
            Explicabo rem dicta saepe facere, tenetur fuga maiores alias magnam
            possimus, aperiam officiis illum veniam labore? Nesciunt delectus
            repellendus, aliquid rerum ab vitae exercitationem blanditiis
            perspiciatis officia aspernatur quam error, earum ratione ipsa
            debitis nisi, deserunt possimus. Ipsum, quo ullam quas est
            aspernatur sapiente doloremque modi ad?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            eius voluptatibus sed exercitationem earum tempore vitae. Aspernatur
            dolorem recusandae, earum quidem optio neque est nulla facere dicta,
            similique magni incidunt voluptatibus cupiditate hic nihil vero,
            eveniet deleniti pariatur tempore iure ullam libero. Delectus soluta
            veniam ullam? Beatae alias, totam quisquam ad assumenda provident
            tempora hic. Nam nesciunt molestiae laudantium officiis maxime autem
            sint. Omnis, natus? Eaque voluptatum voluptate iste natus aliquid,
            dignissimos distinctio? Expedita, aperiam fugit. Eligendi tenetur
            eaque iusto!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            eius voluptatibus sed exercitationem earum tempore vitae. Aspernatur
            dolorem recusandae, earum quidem optio neque est nulla facere dicta,
            similique magni incidunt voluptatibus cupiditate hic nihil vero,
            eveniet deleniti pariatur tempore iure ullam libero. Delectus soluta
            veniam ullam? Beatae alias, totam quisquam ad assumenda provident
            tempora hic. Nam nesciunt molestiae laudantium officiis maxime autem
            sint. Omnis, natus? Eaque voluptatum voluptate iste natus aliquid,
            dignissimos distinctio? Expedita, aperiam fugit. Eligendi tenetur
            eaque iusto!
          </p>
        </div>
      </div>
    </div>
    <div class="position-fixed" style="bottom: 0; right: 0;">
      <button id="top" class="btn btn-secondary rounded">Back to Top</button>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    /**
     * Javascript scrollintoview smooth scroll and offset
     * @desc
     * @link https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset#49924496
     * @link https://codepen.io/ekfuhrmann/pen/pVvpqM
     */
    const navLinks = document.querySelectorAll(".nav-item a.nav-link");

    Array.from(navLinks).forEach((navLink) => {
      const href = navLink.getAttribute("href");
      const section = document.querySelector(href);
      const offset = 50 + 20; // nav and offset

      navLink.onclick = (e) => {
        // get body position
        const bodyRect = document.body.getBoundingClientRect().top;
        // get section position relative
        const sectionRect = section.getBoundingClientRect().top;
        // subtract the section from body
        const sectionPosition = sectionRect - bodyRect;
        // subtract offset
        const offsetPosition = sectionPosition - offset;

        e.preventDefault();
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      };
    });
    // To Top
    document.querySelector("#top").onclick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  },
  data() {
    return {
      contents: [
        "Chapter 1",
        "Chapter 2",
        "Chapter 3",
        "Chapter 4",
        "Chapter 5",
        "Chapter 6",
      ],
    };
  },
  methods: {
    lowercaseDashes(str) {
      return str.replace(/\s+/g, "-").toLowerCase();
    },
  },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
<style lang="scss" scoped>
@use "bootstrap/scss/bootstrap";
</style>