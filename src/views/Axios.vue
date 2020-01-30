<template>
  <div class="container axios-container">
    <b-container>
      <b-row v-if="posts && posts.length">
        <b-col
          class="content-main-container"
          lg="6"
          sm="12"
          v-for="post of posts"
          :key="post.id"
        >
          <div class="content-details">
            <h3>
              <strong>{{ post.title }}</strong>
            </h3>
            <p>{{ post.body }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Axios',
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  created() {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900);
$lato: 'Lato', sans-serif;

$bg-color: #cecece;
$white: #ffffff;
$dark-transparent: rgba(0, 0, 0, 0.7);
$dark: #000000;
$light-blue: #05d3ff;
$coin-detail-bg: rgb(64, 64, 89);
$red: #ff0505;
$green: #45ff05;

.axios-container {
  padding: 3em 0;
  .content-details {
    min-height: 200px;
    font-family: $lato;
    background: $bg-color;
    padding: 2em;
    border: 1px solid $dark;
    margin-bottom: 1em;
    h3 {
      color: $dark;
      font-size: 24px;
      font-weight: 400;
    }

    p {
      font-weight: 300;
      font-size: 16px;
      color: $coin-detail-bg;
    }
  }
}
</style>
