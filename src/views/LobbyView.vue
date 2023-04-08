<template>
  <div class="main">
    <div class="main-header">
      <p>Welcome to the lobby</p>
    </div>
    <!--No membership? Display this-->
    <div class="">
      <div class="text-stellar-warm">
        <p>Hi! It look like you are not logged in!</p>
        <p>Login to buy a lottery and get rich!</p>
        <p>(Only in the game. :p )</p>
        <br />
        <p>Or create your account! It is free forever.</p>
      </div>
    </div>
    <Login></Login>
    <TermAndAgreement></TermAndAgreement>
  </div>
</template>

<style scoped>
.main {
  @apply min-h-screen bg-gradient-to-t from-stellar-blue to-stellar-purple
  px-11;
}
.main-header {
  @apply text-stellar-warm text-3xl text-center 
    py-4  bg-black bg-opacity-25
    border-b-2 border-cyan-400 border-opacity-60;
}
</style>

<script lang="ts">
import TermAndAgreement from "../components/general/TermAndAgreement.vue";
import Login from "../components/authentication/Login.vue";
export default {
  components: {
    TermAndAgreement,
    Login
  },
  setup() {},
  data() {
    return {
      register: {},
      login: {},
    };
  },
  methods: {},
};
</script>
