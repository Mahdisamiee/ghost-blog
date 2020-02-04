<template>
  <div>
    <div class="hero">
      <div class="container">
        <h1>Welcome to My Blog</h1>
        <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nesciunt expedita. Suscipit saepe necessitatibus ut.</p>
        <nuxt-link to="/contact" class="hire">Hire me</nuxt-link>
      </div>
    </div>
    <div class="container">
      <main>
        <h2>Latest thoughts</h2>
        <ul>
          <li v-for="(post, index) in posts" :key="index">
            <img :src="post.feature_image">
            <div class="content">
              <span>{{ post.authors[0].name }}</span>
              <nuxt-link :to="{path : post.slug}">{{ post.title }}</nuxt-link>
              <p>{{ post.excerpt }}</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
import { getPosts } from '../api/posts.js'

export default {
  async asyncData(){
    const posts = await getPosts();
    return{
      posts: posts
    }
  }
}
</script>

<style lang="scss">
.hero{
  background-color: $primary-color;
  color: white;
  text-align: center;
  padding-top: 2em;
  h1{
    margin-bottom: 1em;
  }

  .hire{
    background: darken($primary-color, 10%);
    color: $accent-color;
    text-decoration: none;
    padding: .5em 3em;
    border-radius: 10px;
    display: inline-block;
    margin: 2em 0 3em;
  }
}

main{
  margin: 0;
  h2{
    margin: 0;
    padding: 0;
    margin-top: 3em;
    text-transform: uppercase;
    font-size: 1em;
  }

  ul{
    margin: 1em 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    li{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      border-radius: .5rem;
      background: #fff;
      margin: 1em auto;
      padding: 1em;

      .content{
        padding: 1em;
        span{
          font-weight: 300;
          display: block;
          margin: .3em 0;
          text-transform: uppercase;
          color: $primary-color;
        }
        a{
          text-decoration: none;
          color: #000;
          font-weight: bold;
          font-size: 1.5em;
        }
        p{
          margin-top: .5em;
        }
      }
    }

    li img{
      max-width: 100%;
      border-radius: .5rem;
    }

    
  }
}


@media only screen and (min-width: 768px){
  main{
    ul{
      li{
        flex-direction: row;
        flex-wrap: nowrap;
      }
      li img{
        max-width: 30%;
      }

    }
  }
}
</style>
