<template lang="">
    <div class="card bg-base-100 w-10/12 shadow-xl my-2">
        <div class="card-body">
            <h2 class="card-title text-center">Add Message</h2>
            <form @submit.prevent="handleAddMessage">
                <textarea class="textarea textarea-bordered w-full" placeholder="Message" v-model="message"></textarea>
                <div class="card-actions justify-end">
                    <button type="submit" class="btn btn-accent w-full">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            message: ''
        }
    },
    methods: {
        async handleAddMessage() {
            try {
                if (this.$store.state.accessToken) {
                    const response = await axios.post("/comments/add", {
                        body: this.message,
                        postId: 3,
                        userId: 5,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                    },
                    });
                    console.log(response);
                }
                console.log('Adding data successful!');
            } 
            catch (error) {
                console.error('Failed adding data:', error);
            }
        }
    }
}
</script>
<style lang="">
    
</style>