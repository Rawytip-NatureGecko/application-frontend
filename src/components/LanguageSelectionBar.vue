<template>
  <div class="flex flex-row">
    <div>
      <button
        class="lang-switch-btn lang-switch-th"
        @click="switchLanguage('th')"
        v-bind:disabled="lang == 'th'"
      ></button>
      <button
        class="lang-switch-btn lang-switch-en"
        @click="switchLanguage('en')"
        v-bind:disabled="lang == 'en'"
      ></button>
    </div>
  </div>
</template>

<script lang="js">
export default {
  data(){
    return{
      lang:'en'
    }
  },
  methods: {
    switchLanguage(lang) {
      this.lang = lang
      localStorage.setItem("lang", lang);
      this.$i18n.locale = localStorage.getItem("lang").toString();
    },
    getCurrentLang(){
      this.lang = localStorage.getItem("lang").toString();
    }
  },
  created(){
    this.getCurrentLang()
  }
};
</script>

<style lang="postcss" scoped>
.lang-switch-th {
  background-image: url("../assets/flags/th.svg");
  background-repeat: repeat-x;
}

.lang-switch-en {
  background-image: url("../assets/flags/us.svg");
  background-repeat: no-repeat;
  background-size: 100%;
}
.lang-switch-btn {
  @apply text-red-100 font-extrabold p-3 mx-4 w-20 h-14
  duration-300
  border-black border-4 border-opacity-0;
}
.lang-switch-btn:disabled {
  @apply p-3 mx-4 w-20 h-14
  duration-300
  border-4 border-cyan-400 border-opacity-60;
}
</style>