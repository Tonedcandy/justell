<script>
  import { butter } from '@/buttercms'

  export default {
    name: 'blog-home',
    data() {
      return {
        page_title: 'Blog',
        posts: []
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 12
        }).then(res => {
          this.posts = res.data.data
        })
      }
    },
    created() {
      this.getPosts()
    },
    computed: {
    style() {
      return {
        margin: '20px',
        
      }
    },
    cardBehaviour(){
      return{
        display: 'flex',
        'flex-direction': 'column'
      }

    }
  }

    
  }
</script>

<template>
<section>
<!-- <nav class="navbar is-black" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://justell.s3.amazonaws.com/logo.png" width="112" height="39.4" style="styleObject"> 
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav> -->
      <!-- <h1>{{ page_title }}</h1> -->
      <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->
      <div class="columns is-multiline is-gapless ">
      
      <div
        v-for="(post,index) in posts"
        :key="post.slug + '_' + index"
        class=" column is-one-quarter " 
      >
        <router-link :to="'/blog/' + post.slug">
        
          <article class="media" :style="style">
         
          <div class="card">
          <div class="card-image">
            <figure class="image">
              <!-- Bind results using a `:` -->
              <!-- Use a `v-if`/`else` if there is a `featured_image` -->
              <img
                v-if="post.featured_image"
                :src="post.featured_image"
                alt=""
              >
              <img
                v-else
                src="http://via.placeholder.com/250x250"
                alt=""
              >

            </figure>
          </div>
           <div class="card-content">

            <p class=title is-4>{{ post.title }}</p>
            <p>{{ post.summary }}</p>
           </div>
            </div>
          </article>

        </router-link>
      </div>
      </div>
</section>
</template>