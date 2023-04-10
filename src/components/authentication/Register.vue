<template>
    <div class="authen-main-block">
        <div class="authen-main-header">{{ $t("Authentication.Register.Title") }}</div>
        <div class="authen-form-block">
        <form method="post" action="">
            <!--Username-->
            <div class="flex justify-between my-3">
                <div class="authen-label">
                    <label for="register.username">{{
                        $t("Authentication.Register.Form.Username")
                    }}</label>
                </div>
                <input class="authen-input" type="username" name="username" id="register.username"
                    v-model="register.username" :placeholder="$t('Authentication.Register.Placeholder.Username')" />
            </div>
            <!--Error Box-->
            <div class="error-box" v-show="form.usernameTooShort">
                {{ $t("Authentication.Warn.UsernameTooShort") }}
            </div>
            <div class="error-box" v-show="form.usernameTooLong">
                {{ $t("Authentication.Warn.UsernameTooLong") }}
            </div>
            <div class="error-box" v-show="form.usernameContainIllegalChars">
                {{ $t("Authentication.Warn.UsernameContainIllegalChars") }}
                </div>
            <!--Password-->
            <div class="flex justify-between my-3">
                <div class="authen-label">
                    <label for="register.password">{{
                        $t("Authentication.Register.Form.Password")
                    }}</label>
                </div>
                <input class="authen-input" type="password" name="password" id="register.password"
                    v-model="register.password" :placeholder="$t('Authentication.Register.Placeholder.Password')" />
            </div>
            <!--Confirm Password-->
            <div class="flex justify-between my-3">
                <div class="authen-label">
                    <label for="register.confirmPassword"></label>
                </div>
                <input class="authen-input" type="password" name="confirmPassword" id="register.confirmPassword"
                    v-model="register.confirmPassword"
                    :placeholder="$t('Authentication.Register.Placeholder.ConfirmPassword')" />
            </div>
            <!--Error Box-->
            <div class="error-box" v-show="form.passwordMissMatch">
                {{ $t("Authentication.Warn.PasswordMissMatch") }}
            </div>
            <div class="error-box" v-show="form.passwordTooShort">
                {{ $t("Authentication.Warn.PasswordTooShort") }}
            </div>

            <div class="flex justify-between my-3">
                <div class="authen-label">
                    <label for="register.email">{{ $t("Authentication.Register.Form.Email") }}</label>
                </div>
                <input class="authen-input" type="text" name="email" id="register.email" v-model="register.email"
                    :placeholder="$t('Authentication.Register.Placeholder.Email')" />
            </div>
            <!--Error Box-->
            <div class="error-box" v-show="form.invalidEmail">
                {{ $t("Authentication.Warn.InvalidEmail") }}
            </div>

            <div class="text-general"></div>

            <!--Result Box-->
            <div class="warn-box" v-show="form.takenUsername">
                This username is taken by another account.
            </div>
            <div class="warn-box" v-show="form.takenEmail">
                This email is taken by another account.
            </div>
            <div class="success-box" v-show="form.succesfullRegisteration">
                Registered! You can now login using your new account!
            </div>
            <div class="authen-tipbox">
                {{ $t("Authentication.EmailOptional") }}
            </div>
        </form>
        </div>
    </div>
</template>

<script lang="js">
export default {
    data() {
        return {
            register: {
                username: "",
                password: "",
                confirmPassword: "",
                email: "",
            },
            form: {
                atLeastOneTrue: false,
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
        submitRegister() {
            if (this.form.usernameTooShort || this.form.usernameTooLong || this.form.usernameContainIllegalChars || this.form.passwordTooShort || this.form.passwordMissMatch || this.form.invalidEmail) {
                this.form.atLeastOneTrue = true
                return
            } else {
                this.form.atLeastOneTrue = false
            }
            let response;
            // Submit Registeration

            this.form.takenEmail = true ? true : false
            this.form.takenUsername = true ? true : false
            this.form.takenUsername = true ? true : false
            this.form.succesfullRegisteration = true ? true : false
        }
    },
    watch: {
        "register.username": function (value) {
            this.form.usernameTooShort = value.length <= 6 ? true : false
            this.form.usernameTooLong = value.length > 50 ? true : false
            this.form.usernameContainIllegalChars = !(/^([a-zA-Z0-9_])+$/.test(value))
        },
        "register.password": function (value) {
            this.form.passwordTooShort = value.length < 6 ? true : false
        },
        "register.confirmPassword": function (value) {
            this.form.passwordMissMatch = this.register.password != value ? true : false;
        },
        "register.email": function (value) {
            this.form.invalidEmail = !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) && value.length > 0;
        }
    },
};
</script>
