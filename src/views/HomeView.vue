<template>
  <div class="min-h-screen">
    <div class="">{{ $t("FirstPage.Welcome") }}</div>
    <div class="">{{ $t("FirstPage.Slogan") }}</div>
    <div class="">
      <button>{{ $t("FirstPage.Navigation.Enter") }}</button>
    </div>
    <div>
      <div class="language-btn">TH</div>
      <div class="language-btn">EN</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.language-btn{
  @apply bg-red-200
}
</style>


