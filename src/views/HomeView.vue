<template>
  <div
    class="min-h-screen bg-gradient-to-t from-stellar-blue to-stellar-purple"
  >
    <div class="py-12"></div>
    <div>
      <div class="text-stellar-warm font-poppins text-center text-5xl">
        {{ $t("FirstPage.Welcome") }}
      </div>
      <div class="text-stellar-warm text-center text-xl py-2">
        {{ $t("FirstPage.Slogan") }}
      </div>
    </div>

    <div class="mx-auto my-3 flex justify-center">
      <button class="enter-btn" @click="enterSiteBtn()">
        {{ $t("FirstPage.Navigation.Enter") }}
      </button>
    </div>
    <div class="flex flex-col px-2 items-center justify-center">
      <LanguageSelectionBar></LanguageSelectionBar>
      <h1 class="text-stellar-warm">Change the language here</h1>
    </div>
    <div class="flex justify-center py-10">
      <video width="720" height="240" muted autoplay loop>
        <source src="../assets/firstpage-vdo.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script lang="ts">
import router from "../router";
import LanguageSelectionBar from "../components/LanguageSelectionBar.vue";
export default {
  components: {
    LanguageSelectionBar,
  },
  methods: {
    enterSiteBtn() {
      router.push("/lobby");
    },
  },
};
</script>

<style lang="postcss" scoped>
.language-btn {
  @apply bg-red-200;
}
.enter-btn {
  @apply text-stellar-warm text-center py-5 text-3xl font-poppins
  bg-black bg-opacity-60 w-72
  hover:bg-opacity-50 duration-200 
  hover:border-cyan-400 hover:border-opacity-50 border-4 border-opacity-0 border-black;
}
</style>


