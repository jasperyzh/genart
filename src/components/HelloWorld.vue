<template>
  <section
    id="hello-world"
    :style="`background-color: rgb(${randNum},${randNum},${randNum});`"
  >
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <h1>MIDI Controller</h1>
        </div>
        <p>Controlling Digitakt using ChromeBrowser & JavaScript</p>
        <ul>
          <li>
            <a
              href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
              target="_blank"
              >Bootstrap 5 Documentation</a
            >
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=556e3cLWusc&ab_channel=JakeAlbaugh"
              target="_blank"
              >gropramming: 001 - Web MIDI API</a
            >
          </li>
        </ul>
        <hr />
      </div>
      <div class="row">
        <h2 class="w-100">console_log</h2>
        <div class="col-auto">
          <pre>{{ sound_controller }}</pre>
        </div>
        <div class="col-auto">
          <div class="timing_clock_box animate-flicker"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// https://github.com/jakealbaugh/gropramming/blob/master/001-midi/script/MIDI.js
import { MIDI } from "@/js/midi";
export default {
  name: "HelloWorld",
  async mounted() {
    // console.log(MIDI);

    this.runMidi = new MIDI(this.handleEvent);

    this.runMidi.initialize().then(() => {
      console.log("is running");
      this.send_note();
    });
  },
  methods: {
    handleEvent({ device, type, a, b }) {
      if (type == "timing_clock") return;
      // console.log("device name: ", device.name)

      /* 
      if (b && b.type == "sound_controller 1 (default: sound variation)") {
        this.sound_controller = b.value;
      }

      if (b && b.value == 0) {
        this.timing_clock_hit();
      } */

      if (type === "note_on" && a.value === 0) {
        this.on = true;
      } else if (type === "note_off" && a.value === 0) {
        this.on = false;
      }
      console.log(device.type, device.name, type, a, b);
      // if (b.type == "sound_controller 1 (default: sound variation)") {
      // } // this.sound_controller = b.value;
    },
    timing_clock_hit() {
      let element = this.$el.querySelector(".timing_clock_box");
      element.classList.remove("animate-flicker");
      void element.offsetWidth;
      element.classList.add("animate-flicker");
    },
    /* 
input Elektron Digitakt note_on {value: 0, ratio: 0, type: "note"} {value: 100, ratio: 0.7874015748031497, type: "velocity"}
input Elektron Digitakt note_off {value: 0, ratio: 0, type: "note"} {value: 0, ratio: 0, type: "velocity"}
  */
    send_note() {
      const loop = () => {
        const track = 0;
        const noteOn = 144;
        const noteOff = 128;
        const DEVICE = "Elektron Digitakt";
        this.runMidi.notify([noteOn, track, 100], DEVICE);
        setTimeout(() => this.runMidi.notify([noteOff, track, 0], DEVICE), 50);
        console.log('kick!')
        this.timing_clock_hit();
      };
      // loop();
      setInterval(loop, 1200);
    },
  },
  data() {
    return {
      runMidi: {},
      on: false,
      sound_controller: 0,
    };
  },
  computed: {
    randNum() {
      return 255 - (this.sound_controller / 127) * 255;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#hello-world {
  min-height: 100vh;
}
.timing_clock_box {
  background-color: red;
  width: 200px;
  height: 200px;
  display: block;
}

@keyframes flickerAnimation {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.animate-flicker {
  animation: flickerAnimation 0.3s 1;
}
</style>
