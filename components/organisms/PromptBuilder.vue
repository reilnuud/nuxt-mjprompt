<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <Container>
    <ul
      class="mt-6 grid leading-none grid-cols-1 gap-3 border-2 border-stone-200 p-4 rounded"
    >
      <li class="text-sm gap-3 flex items-center w-full">
        <div class="text-xs w-full">phrase</div>
        <span class="flex-shrink-0 w-auto" />
        <div class="text-xs flex-shrink-0 w-12">weight</div>
      </li>
      <li
        v-for="(phrase, i) in phrases"
        :key="phrase.uid"
        class="text-sm gap-3 flex w-full items-center relative"
      >
        <textarea
          :value="phrase.phrase"
          @input="e => (phrases[i].phrase = e.target.value)"
          class="h-4 bg-stone-600 border-stone-300 rounded border-2 text-xs px-2 py-1 min-h-[1.67rem] overflow-auto w-full"
        />
        <span class="flex-shrink-0 w-auto">::</span>
        <input
          :value="phrase.weight"
          placeholder="1"
          @input="e => (phrases[i].weight = e.target.value)"
          type="number"
          class="bg-stone-600 border-stone-300 flex-shrink-0 rounded border-2 w-12 text-xs px-2 py-1"
        />
        <button
          v-if="i !== 0"
          @click="this.phrases = this.phrases.filter(v => v.uid !== phrase.uid)"
          class="absolute right-0 translate-x-[1.8rem] rounded-full bg-stone-800 p-1 hover:text-red-500 transition duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </li>
    </ul>
    <div class="w-full flex flex-col items-center justify-center -mt-3">
      <button
        @click="addPhrase"
        class="bg-stone-800 p-1 rounded-full flex flex-col items-center justify-center font-bold text-xs uppercase relative hover:text-lime-400 transition duration-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span
          class="absolute bottom-1 whitespace-nowrap text-[0.5rem] translate-y-full"
        >
          Add Phrase
        </span>
      </button>
    </div>
    <div
      class="flex flex-wrap gap-3 py-3 border-2 mt-5 p-3 rounded border-stone-200"
    >
      <!-- ar -->
      <div class="flex flex-col gap-1">
        <span class="text-xs">aspect ratio</span>
        <input
          @model="ar"
          placeholder="1:1"
          @input="e => (ar = e.target.value)"
          class="bg-stone-600 border-stone-300 flex-shrink-0 rounded border-2 w-16 text-xs px-2 py-1"
        />
      </div>
      <!-- w -->
      <!-- <div class="flex flex-col gap-1">
        <span class="text-xs">width</span>
        <input
          @model="width"
          placeholder="1024"
          @input="e => (width = e.target.value)"
          class="bg-stone-600 border-stone-300 flex-shrink-0 rounded border-2 w-16 text-xs px-2 py-1"
        />
      </div> -->
      <!-- h -->
      <!-- <div class="flex flex-col gap-1">
        <span class="text-xs">height</span>
        <input
          @model="height"
          placeholder="1024"
          @input="e => (height = e.target.value)"
          class="bg-stone-600 border-stone-300 flex-shrink-0 rounded border-2 w-16 text-xs px-2 py-1"
        />
      </div> -->
      <!-- uplight -->
      <div class="flex flex-col pt-5">
        <button
          @click="uplight = !uplight"
          placeholder="1024"
          class="border-stone-300 flex-shrink-0 rounded border-2 text-xs px-2 py-1"
          :class="{ 'bg-stone-600 text-stone-100': uplight }"
        >
          uplight
        </button>
      </div>
      <!-- uplight -->
      <!-- <div class="flex flex-col pt-5">
        <button
          @click="hd = !hd"
          placeholder="1024"
          class="border-stone-300 flex-shrink-0 rounded border-2 text-xs px-2 py-1"
          :class="{ 'bg-stone-600 text-stone-100': hd }"
        >
          hd
        </button>
      </div> -->
    </div>
    <div class="mt-4 text-xs mb-1">prompt</div>
    <button
      @click="copyToClipboard"
      class="w-full flex gap-2 items-start relative text-stone-400 hover:text-stone-200 duration-100"
    >
      <div
        class="font-mono bg-stone-700 border-stone-400 text-left border-2 w-full rounded py-1 px-2 text-xs"
      >
        {{ prompt }}
      </div>
      <span class="block p-1 bg-stone-700 border-2 border-stone-400 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-height="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
          />
        </svg>
      </span>
    </button>
  </Container>
</template>

<script>
export default {
  data: () => ({
    phrases: [],
    ar: "",
    height: "",
    width: "",
    uplight: false,
    hd: false,
  }),
  watch: {
    ar() {
      this.saveSettings();
    },
    height() {
      this.saveSettings();
    },
    width() {
      this.saveSettings();
    },
    uplight() {
      this.saveSettings();
    },
    hd() {
      this.saveSettings();
    },
    phrases: {
      handler() {
        this.saveSettings();
      },
      deep: true,
    },
  },
  mounted() {
    const oldPhrases = window.localStorage.getItem("settings");
    if (oldPhrases) {
      const { phrases, ar, height, width, uplight, hd } =
        JSON.parse(oldPhrases);
      this.phrases = phrases;
      this.ar = ar;
      this.height = height;
      this.width = width;
      this.uplight = uplight;
      this.hd = hd;
    } else {
      this.addPhrase();
    }
  },
  computed: {
    prompt() {
      let newPrompt = this.phrases?.length
        ? `/imagine prompt: ${this.phrases.map(this.combinePhrase).join(" ")}`
        : "prompt";
      if (this.ar) {
        newPrompt += ` --ar ${this.ar}`;
      }
      if (this.height) {
        newPrompt += ` --h ${this.width}`;
      }
      if (this.width) {
        newPrompt += ` --w ${this.height}`;
      }
      if (this.uplight) {
        newPrompt += " --uplight";
      }
      return newPrompt;
    },
  },
  methods: {
    copyToClipboard() {
      window.navigator.clipboard.writeText(this.prompt);
    },
    combinePhrase(p) {
      const { phrase, weight } = p;
      return `${phrase.replace(/\s+/, " ").replace(/\s$/, "")}::${parseFloat(
        weight || 1,
      )}`;
    },
    createUUID() {
      // http://www.ietf.org/rfc/rfc4122.txt
      const s = [];
      const hexDigits = "0123456789abcdef";
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
      // eslint-disable-next-line no-bitwise
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
      // eslint-disable-next-line no-multi-assign
      s[8] = s[13] = s[18] = s[23] = "-";

      const uuid = s.join("");
      return uuid;
    },
    saveSettings() {
      const { phrases, ar, height, width, uplight, hd } = this;
      const settings = { phrases, ar, height, width, uplight, hd };
      window.localStorage.setItem("settings", JSON.stringify(settings));
    },
    addPhrase() {
      this.phrases = [
        ...this.phrases,
        {
          uid: this.createUUID(),
          phrase: "",
          weight: 1,
        },
      ];
    },
  },
};
</script>
