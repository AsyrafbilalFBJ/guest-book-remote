<template lang="">
    <div>
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <Icon icon="ic:round-menu" />
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <RouterLink to="/">Messages</RouterLink>
                    </li>
                    <li v-if="role === 'admin'">
                        <RouterLink to="/add-guest">Add Guest</RouterLink>
                    </li>
                    <li v-if="role === 'user'">
                        <RouterLink to="/add-message">Add Message</RouterLink>
                    </li>
                </ul>
                </div>
                <a class="btn btn-ghost text-xl">Guest Book</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li>
                        <RouterLink to="/" exactActiveClass="btn-active">Messages</RouterLink>
                    </li>
                    <li v-if="role === 'admin'">
                        <RouterLink to="/add-guest" exactActiveClass="btn-active">Add Guest</RouterLink>
                    </li>
                    <li v-if="role === 'user'">
                        <RouterLink to="/add-message" exactActiveClass="btn-active">Add Message</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                <p class="mr-2">Hi, {{ fullName }} ({{ role === 'user' ? 'Guest' : role === 'admin' ? 'Admin' : '' }})</p>
                <button class="btn btn-outline btn-accent" @click="handleLogout">Logout</button>
            </div>
        </div>
    </div>
</template>
<script>
import { Icon } from "@iconify/vue"

export default {
    data() {
        return {
        }
    },
    computed: {
        role() {
            return this.$store.state.user.role;
        },
        fullName() {
            return this.$store.state.user.firstName + ' ' + this.$store.state.user.lastName;
        },
    },
    components: {
        Icon
    },
    methods: {
        async handleLogout() {
            try {
                await this.$store.dispatch('logout');
                console.log('Logout successful!');
                this.$router.push('/login')
            } catch (error) {
                console.error('Logout failed:', error);
            }
            console.log(this.$store.state.accessToken)
        },
    },
}
</script>
<style lang="">
    
</style>