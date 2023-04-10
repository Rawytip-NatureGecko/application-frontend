<template>
  <div class="lobby-main">
    <NavigationBar></NavigationBar>
    <div class="main-header">
      <p>Rawytip Lounge</p><i class="bi bi-person-circle"></i>
    </div>
    <!--Main COmponents-->
    <div class="lobby-block items-center flex md:flex-col">
      <div class="my-3">
        <button class="lobby-switch-authen" @click="switchAuthenticationMode()">{{
          page.authenticationMode == 'register' ? $t("Authentication.Login.Title") : $t("Authentication.Register.Title")
        }}</button>
        <Register v-show="page.authenticationMode == 'register'" class="lobby-form-component-authen"></Register>
        <Login v-show="page.authenticationMode == 'login'" class="lobby-form-component-authen"></Login>
      </div>
      <div>
        <PrizeList></PrizeList>
      </div>
    </div>












    <div v-show="false">
      <!--No membership? Display this-->
      <div class="flex sm:flex-col md:flex-row justify-center mx-auto">

        <PrizeList class="w-2/3"></PrizeList>
      </div>
      <TermAndAgreement></TermAndAgreement>

      <div class="bg-black bg-opacity-20">
        <input type="text" v-model="message" />
        <button v-on:click="sendMsg(message)">SEND</button>
      </div>
      <div class="h-24 text-black">
        {{ messages }}
      </div>
    </div>
  </div>
</template>

<script lang="js">
import TermAndAgreement from "../components/general/TermAndAgreement.vue";
import Login from "../components/authentication/Login.vue";
import PrizeList from "@/components/userlounge/PrizeList.vue";
import Register from "@/components/authentication/Register.vue";
import NavigationBar from "@/components/general/NavigationBar.vue";

import io from "socket.io-client";

export default {
  components: {
    TermAndAgreement,
    Login,
    Register,
    PrizeList,
    NavigationBar
  },
  setup() { },
  data() {
    return {
      socket: {},
      context: {},
      message: '',
      messages: [],
      page: {
        authenticationMode: 'login'
      }
    };
  },
  created() {
    this.socket = io(process.env.VUE_APP_HOST_BACKEND)
  },
  mounted() {
    this.socket.on("getMSG", data => {
      this.messages.push(data)
    })
  },
  methods: {
    sendMsg(message) {
      this.socket.emit("sendMSG", message);
      this.message = ''
    },
    switchAuthenticationMode() {
      this.page.authenticationMode = this.page.authenticationMode == 'login' ? 'register' : 'login';
    }
  },
};
</script>
