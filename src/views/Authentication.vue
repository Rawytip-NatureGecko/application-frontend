<template>
    <div class="main-page-background min-h-screen">
        <NavigationBar></NavigationBar>
        <div>

        </div>
        Login page fuck U
    </div>
</template>

<script lang="ts">
import NavigationBar from '../components/general/NavigationBar.vue';
import Register from '../components/authentication/Register.vue';
import Login from '../components/authentication/Login.vue';

export default {
    components:{
        NavigationBar,
        Register,
        Login
    },
    data() {
        return {
            page: {
                authenticationMode: 'login'
            }
        }
    }
}
</script>