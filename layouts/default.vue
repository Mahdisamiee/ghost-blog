<template>
  <div>
    <header>
      <div class="container">
        <div class="navbar">
          <nuxt-link to="/" class="logo">New Blog</nuxt-link>

          <nav>
            <ul>
              <li>
                <nuxt-link to="/who">Who?</nuxt-link>
                <nuxt-link to="/posts">Posts</nuxt-link>
                <nuxt-link to="/contact">Contanct</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <nuxt />
  </div>
</template>


<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body{
  background: #f5f5f5;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container{
  margin: 0 auto;
  width: 90%;
}

header{
  background: $primary-color;
  padding: 1em 0;
  text-align: center;
  .navbar{
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }

  a{
    color: #fff;
    text-decoration: none;
  }

  ul{
    list-style-type: none;
    display: flex;
    padding: 0;

    li a{
      font-weight: normal;
      padding: .5em;
    }
  }
}

@media only screen and (min-width: 768px){
  body{
    font-size: 18px;
  }
}
</style>
