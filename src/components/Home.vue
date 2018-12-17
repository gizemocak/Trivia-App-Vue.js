<template>
  <div class="home">
    <h1>Welcome to the Trivia Challenge!</h1>
    <p>You will be presented with 10 True or False questions.</p>
    <p>Can you score 100%?</p>
    <button @click.prevent="getApi">BEGIN</button>
  </div>
</template>

<script>


export default {
  name: 'Home',
  data() {
      return {
      }
  },
  methods: {
      async getApi() {
                await this.$store.dispatch('fetchQuestions')
                this.$router.push({ path: "questions/1" })
            }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
font-family: 'Roboto', sans-serif;
}

button{ 
 font-size: 23px;
 background: #FFFF00;
 border-style: none;
 padding: 15px 30px 15px 30px;
   transition: 0.5s;
}

button:hover{ 
 background: #FF6347;
 color: white;
}
</style>
