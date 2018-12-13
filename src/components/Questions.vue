<template>
  <div class="questions">
    <h1>Questions</h1>
    <p class='category' v-html='question.category'></p>
    <p class='question' v-html='question.question'></p>
    <p class='questionNumber'>{{ $route.params.id }}/10</p>
    <button class='button' @click='nextQuestion' value='True'>True</button>
    <button class='button' @click='nextQuestion' value='False'>False</button>

  </div>
</template>

<script>
import questions from '../service/questions.js'
export default {
  name: 'Questions',
  data() {
      return {
          api : {},
      }
  },
  methods : {
     nextQuestion(e) {
       // console.log('user answer', e.target.value);
        console.log(this.api)
        this.question.user_answer = e.target.value

        if(Number(this.$route.params.id) === 10) {
            console.log('route');
            this.$router.push({ path: `/answers`})
        } else {
        this.$router.push({ path: `/questions/${parseInt(this.$route.params.id)+1}`})
         //this.$router.push({ name: 'questions', params: {id : Number(this.$route.params.id) +1} })
        }
     }
  },
  computed: {
      question : function () {
      //  console.log('api',this.api, questions)
        this.api = questions
        return this.api.results[Number(this.$route.params.id)-1]
      }
  },
  mounted() {
       if(!this.api.results) {
          this.$router.push({ path: `/`})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
font-family: 'Roboto', sans-serif;
}

h1{
    background: #000080;
    color: white;
    padding-top: 13px;
    padding-bottom: 13px;
    margin-bottom: 0px;
}

.category{
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 30px;
    color: black;
    font-weight: bold;
}

.question{
    background: #DBD7D3;
    margin-top: 0px;
    padding:30px;
}

.questionNumber{
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 50px;
}

.button{
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