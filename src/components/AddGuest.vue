<template lang="">
    <div>
        <div class="card bg-base-100 w-96 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-center">Add Guest</h2>
                <form @submit.prevent="handleAddGuest">
                    <label class="input input-bordered flex items-center gap-2 my-2 w-full">
                        <Icon icon="ic:baseline-person" />
                        <input type="text" class="grow" placeholder="Firstname" v-model="firstname"/>
                    </label>
                    <label class="input input-bordered flex items-center gap-2 my-2 w-full">
                        <Icon icon="ic:baseline-person" />
                        <input type="text" class="grow" placeholder="Lastname" v-model="lastname"/>
                    </label>
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
import axios from 'axios'
import { Icon } from "@iconify/vue"

export default {
    data() {
        return {
            firstname: '',
            lastname: '',
            username: '',
            password: ''
        }
    },
    components: {
        Icon
    },
    methods: {
        async handleAddGuest() {
            try {
                if (this.$store.state.accessToken) {
                    const response = await axios.post("/users/add", {
                        firstname: this.firstname,
                        lastname: this.lastname,
                        username: this.username,
                        password: this.password
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    });
                }
                console.log('Adding data successful!')
            } 
            catch (error) {
                console.error('Failed adding data:', error)
            }
        }
    }
}
</script>
<style lang="">
    
</style>