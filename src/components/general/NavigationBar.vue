<template>
    <div class="flex justify-end">
        <a href="/home" class="navigation-general">
            <p class="my-auto px-2">Home</p>
            <img src="@/assets/icon/house.svg" width="25" />
        </a>
        <a href="/home" class="navigation-general">
            <p class="my-auto px-2">Lottery</p>
            <img src="@/assets/icon/ticket.svg" width="30" />
        </a>
        <a v-show="true" href="/member" class="navigation-login">
            <p class="my-auto px-2">Login</p>
            <img src="@/assets/icon/box-arrow-in-right.svg" width="25" />
        </a>
        <!--Only show when logged in-->
        <div v-show="false" class="navigation-account">
            <p class="my-auto px-2">My Account</p>
            <img src="@/assets/icon/person-circle.svg" width="25" />
        </div>
        <div v-show="false" class="navigation-logout">
            <p class="my-auto px-2">Logout</p>
            <img src="@/assets/icon/box-arrow-right.svg" width="25" />
        </div>
    </div>
</template>

<script lang="js">
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    created() {

    }
}
</script>