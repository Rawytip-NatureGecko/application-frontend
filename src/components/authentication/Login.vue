<template>
  <div>
    <div class="main">
      <div class="main-header">Login</div>
      <div>
        <form method="post" action="">
          <div class="flex justify-between my-3">
            <div class="label">
              <label for="login.username">Username</label>
            </div>
            <input
              type="text"
              name="username"
              id="login.username"
              v-model="login.username"
            />
          </div>
          <div class="flex justify-between my-3">
            <div class="label">
              <label for="login.password">password</label>
            </div>
            <input
              type="password"
              name="password"
              id="login.password"
              v-model="login.password"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="main">
      <div class="main-header">Register</div>
      <form method="post" action="">
        <div class="flex justify-between my-3">
          <div class="label">
            <label for="register.username">username</label>
          </div>
          <input
            type="username"
            name="username"
            id="register.username"
            v-model="register.username"
          />
        </div>
        <!--Error Box-->
        <div class="error-box" v-show="form.usernameTooShort">
          Username is too short. At least 6 characters are required.
        </div>
        <div class="error-box" v-show="form.usernameTooLong">
          Username can't be longer than 75.
        </div>
        <div class="error-box" v-show="form.usernameContainIllegalChars">
          Username can only have an english or number characters.
        </div>

        <div class="flex justify-between my-3">
          <div class="label">
            <label for="register.password">password</label>
          </div>
          <input
            type="password"
            name="password"
            id="register.password"
            v-model="register.password"
          />
        </div>
        <div class="flex justify-between my-3">
          <div class="label">
            <label for="register.confirmPassword"></label>
          </div>
          <input
            type="password"
            name="confirmPassword"
            id="register.confirmPassword"
            v-model="register.confirmPassword"
          />
        </div>
        <!--Error Box-->
        <div class="error-box" v-show="form.passwordMissMatch">
          Your password and comfirn password are not matched.
        </div>
        <div class="error-box" v-show="form.passwordTooShort">
          Your password should be longer than 6 characters.
        </div>

        <div class="flex justify-between my-3">
          <div class="label">
            <label for="register.email">Email</label>
          </div>
          <input
            type="text"
            name="email"
            id="register.email"
            v-model="register.email"
          />
        </div>
        <!--Error Box-->
        <div class="error-box" v-show="form.invalidEmail">
          This is not a valid email
        </div>

        <div class="text-stellar-warm">
          Email is optional. Filling your email is currently only useful for
          recovering your password.
        </div>

        <!--Result Box-->
        <div class="warn-box" v-show="!form.takenUsername">
          This username is taken by another account.
        </div>
        <div class="warn-box" v-show="!form.takenEmail">
          This email is taken by another account.
        </div>
        <div class="success-box" v-show="!form.succesfullRegisteration">
          Registered! You can now login using your new account!
        </div>
      </form>
    </div>
    <div class="main text-white">
      <h1 class="warning">โคตรสำคัญ!!</h1>
      <p>
        เว็บไซต์เล่นหวยออนไลน์แบบจำลอง ประชดชีวิตของคนทำที่ซื้อหวยแล้วไม่ถูก
      </p>
      <p>เราไม่มีเติมเงิน</p>
      <p>ถอนไม่ได้</p>
      <p>เงินในเว็บก็แค่ตัวเลข!</p>
      โปรดทราบ เงินภายในเว็บไซต์เป็นเพียงเงินจำลอง
      ไม่มีระบบฝากถอนหรือเติมเงินเพราะไม่ใช่เว็บพนัน
      ถ้ามีใครบอกให้เติมเงินเพื่อมาเล่นเว็บนี้ คุณเจอมิจฉาชีพแล้ว Notice : This
      website has no {{ register.username }}
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.main {
  @apply my-3
    lg:w-1/3
    md:w-1/2
    sm:w-full;
}
.main-header {
  @apply text-xl text-stellar-warm font-poppins text-center
    bg-black bg-opacity-40
    py-3 mx-auto 
    hover:bg-opacity-60 duration-300;
}
.warning {
  @apply text-2xl text-center;
}
.label {
  min-width: 100px;
  @apply text-white font-semibold  text-right
  px-5 my-auto;
}
.result-box {
  @apply font-poppins bg-opacity-10 p-2
  border-2 rounded-md my-1
  hover:bg-opacity-20 duration-150;
}
.error-box {
  @apply bg-red-500 text-red-200 
  border-red-500 
  result-box;
}
.warn-box {
  @apply bg-yellow-500 text-yellow-200 
  border-yellow-500 
  result-box;
}
.success-box {
  @apply bg-green-500 text-green-200
  border-green-500
  result-box;
}
input {
  @apply bg-black bg-opacity-40 w-full
    text-white
    p-2 rounded-lg
    hover:bg-opacity-40 duration-150 hover:bg-cyan-900;
}
</style>

<script lang="่ts">
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
