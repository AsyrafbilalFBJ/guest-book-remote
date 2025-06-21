<template lang="">
    <div>
        <div class="card bg-base-100 w-96 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-center">Login</h2>
                <form @submit.prevent="handleLogin">
                    <label class="input input-bordered flex items-center gap-2 my-2 w-full">
                        <Icon icon="ic:baseline-person" />
                        <input type="text" class="grow" placeholder="Username" v-model="username"/>
                    </label>
                    <label class="input input-bordered flex items-center gap-2 my-2 w-full">
                        <Icon icon="ic:baseline-key" />
                        <input type="password" class="grow" placeholder="Password" v-model="password"/>
                    </label>
                    <div class="card-actions justify-end">
                        <button type="submit" class="btn btn-accent w-full">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue"

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    components: {
        Icon
    },
    methods: {
        async handleLogin() {
            try {
                await this.$store.dispatch('login', {
                    username: this.username,
                    password: this.password,
                });
                console.log('Login successful!');
                this.$router.push('/')
            } catch (error) {
                console.error('Login failed:', error);
            }
            console.log(this.$store.state.accessToken)
        }
    }
}

</script>
<style lang="">
    
</style>