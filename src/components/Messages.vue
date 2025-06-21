<template lang="">
    <div v-for="message in messages.comments" class="card bg-base-100 w-10/12 shadow-xl my-2">
        <div class="card-body">
            <h2 class="card-title">{{ message.user.fullName }}</h2>
            <p>{{ message.body }}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            messages: {}
        }
    },
    async mounted() {
        try {
            if (this.$store.state.accessToken) {
                const response = await axios.get("/comments");
                this.messages = response.data
                console.log(response.data);
            }
            console.log('Fetching data successful!');
            } 
        catch (error) {
            console.error('Failed fetching data:', error);
        }
    }
}
</script>
<style lang="">
    
</style>