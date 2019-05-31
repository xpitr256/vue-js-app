<template>
  <div>
    <h2 class="title">Showing results...</h2>
    <input v-on:keypress="detectCharacter" v-model="mail" type="text" />
    <button v-on:click="showMoreResults">Show more</button>
    <p>
      {{mailInUpperCase}}
    </p>
    <p>
      Property value: {{name}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ShowResults',
  props: {
    name: {
      type: String,
      default: 'nothing'
    }
  },
  data () {
    return {
      mail: ''
    }
  },
  methods: {
    showMoreResults: function () {
      console.log('more results for mail: ' + this.mail)
    },
    detectCharacter: function (event) {
      console.log(event.key)
    }
  },
  computed: {
    mailInUpperCase: function () {
      return this.mail.toUpperCase()
    }
  },
  created: async function () {
    console.log('constructor or init method called')
    let users = await this.$http.get('https://jsonplaceholder.typicode.com/posts')
    console.log(users.data)
  }
}
</script>

<style scoped>
.title {
  color: lightcoral;
}
</style>
