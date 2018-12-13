<template>
  <div class="answers">
    <h1>You scored</h1>
    <div class='score'>
    <span v-html='totalScore'></span>/10
    </div>
    <div>
     <ul class='list'>
        <li v-for="item in info">
         <template v-if="item.user_answer == item.correct_answer">
          <div class='list-item'>
          <span class='span'>+</span><div v-html='item.question'></div>
          </div>
         </template>
         <template v-else>
         <div class='list-item'>
          <span class='span'>-</span><div v-html='item.question'></div>
          </div>
         </template>
        </li> 
     </ul>
    </div>
    <button @click='$router.push({ path: `/`})'>PLAY AGAIN? </button>
  </div>
</template>

<script>
import questions from '../service/questions.js'

export default {
  name: 'Answers',
  data() {
      return {
          info: {},
      }
  },
  mounted(){
      this.info = questions.results

      if(!this.info){
          this.$router.push({ path: `/`})
      }
  },
  computed: {
      totalScore: function() {
          let score = 0;
          for (let i in this.info) {
              if(this.info[i].user_answer === this.info[i].correct_answer){
                  score = score + 1
              }
          }
          return score
      }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
font-family: 'Roboto', sans-serif;
margin-right:10px;
}

.score{
font-weight: bold;
color: #FF6347;
font-size: 50px;
margin-bottom:40px;
}

.list{
 list-style: none;
}

.list-item{
    display: flex;
    flex-direction: row;
}

.span{
    margin-right: 20px;
    font-weight: bold;
    padding: 10px;
    align-content: flex-start;
    margin-bottom:20px;

}

button{
font-size: 23px;
 background: #FFFF00;
 border-style: none;
 padding: 15px 30px 15px 30px;
transition: 0.5s;
margin-right: 10px;
}

button:hover{ 
 background: #FF6347;
 color: white;
}

</style>