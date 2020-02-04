<template>
  <div class="container">
    <main class="post">
      <h1>{{ post.title }}</h1>
      <div class="content">
        <div v-html="post.html">{{ post.html }}</div>
      </div>
    </main>
  </div>
</template>

<script>

import { getSinglePost } from "~/api/posts";

export default {
  async asyncData ({params}) {
    const post = await getSinglePost(params.slug);
    return {
      post : post
    }
  },
  beforeCreate(){
    document.querySelector('header').className = 'slug';
  },
  beforeDestroy(){
    document.querySelector('header').className = '';
  }
}
</script>

<style lang="scss">
  header.slug{
    height: 15em;
  }
  h1{
    margin-bottom: 2rem;
    color: #fff;
  }
  .content{
    padding: 2em;
    border-radius: 1em;
    background-color: #fff;
  }
  main.post{
    margin-top: -9em;
    margin-bottom: 2em;
  }

  @media only screen and (max-width: 768px){
    .content{
      padding: 1em;
    }
  }
</style>