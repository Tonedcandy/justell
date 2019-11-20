<script>
   import { butter } from '@/buttercms'
  export default {
    name: 'blog-post',
    data() {
      return {
        post: null
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then(res => {
            this.post = res.data
          }).catch(res => {
            console.log(res)
          })
      }
    },
    computed:{
      style(){
        return{
        margin: '20px',
        
        
        }


      },


    },
    watch: {
      $route: {
        immediate: true,
        handler(to, from) {
          this.getPost()
        }
      }
    }
  }
</script>

<template>
  <div id="blog-post" :style="style">
    <p class=title is-4>{{ post.data.title }}</p>
    <p class=subtitle>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</p>
    <div v-html="post.data.body"></div>
    <div class="comment my-4">
      <vue-disqus shortname="community-blog" :identifier="getPost.slug" :url="'http://localhost:8080/blog/${getPost.slug}'"></vue-disqus>
    </div>
    <router-link
      v-if="post.meta.previous_post"
      :to="/blog/ + post.meta.previous_post.slug"
      class="button"
    >
      {{ post.meta.previous_post.title }}
    </router-link>
    <router-link
      v-if="post.meta.next_post"
      :to="/blog/ + post.meta.next_post.slug"
      class="button"
    >
      {{ post.meta.next_post.title }}
    </router-link>
  </div>
</template>