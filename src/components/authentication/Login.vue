<template>
  <div class="authen-main-block">
    <div class="authen-main-header">{{ $t("Authentication.Login.Title") }}</div>
    <div class="authen-form-block">
      <form method="post" action="">
        <div class="flex justify-between my-3">
          <div class="authen-label">
            <label for="login.username">{{ $t("Authentication.Login.Form.Username") }}</label>
          </div>
          <input type="text" name="username" id="login.username" v-model="login.username" class="authen-input" :placeholder="$t('Authentication.Login.Placeholder.Username')"/>
        </div>
        <div class="flex justify-between my-3">
          <div class="authen-label">
            <label for="login.password">{{ $t("Authentication.Login.Form.Password") }}</label>
          </div>
          <input type="password" name="password" id="login.password" v-model="login.password" class="authen-input" :placeholder="$t('Authentication.Login.Placeholder.Password')"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="่js">
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      register: {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
      },
      form: {
        usernameTooShort: false,
        usernameTooLong: false,
        usernameContainIllegalChars: false,
        passwordTooShort: false,
        passwordMissMatch: false,
        invalidEmail: false,
        takenUsername: false,
        takenEmail: false,
        succesfullRegisteration: false,
      },
    };
  },
  methods: {
    submitLogin() {},
    submitRegister() {}
  },
  watch: {
    "register.username": function (value) {      
      this.form.usernameTooShort = value.length <= 6?true:false
      this.form.usernameTooLong = value.length > 50?true:false
      this.form.usernameContainIllegalChars = !(/^([a-zA-Z0-9_])+$/.test(value))
    },
    "register.password": function (value) {
      this.form.passwordTooShort = value.length <= 6?true:false
    },
    "register.confirmPassword": function(value){
      this.form.passwordMissMatch = this.register.password!=value?true:false;
    },
    "register.email": function(value){
      this.form.invalidEmail = !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) && value.length > 0;
    }

    
  },
};
</script>
