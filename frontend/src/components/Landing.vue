<template>
  <div class="my-landing">
    <h1 :class="$store.state.theme_change" class="scripture_quote">"{{$t('scripture_quote')}}"</h1>
    <p :class="$store.state.theme_change" class="scripture">{{$t('scripture')}}</p>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {

      }
  },
  props: {
    scripture_quote: String,
    scripture: String
  },

  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
