const app = new Vue({
    el: '#vue-app', // document.getElementsByClassName('vue-app')[0]
    data: {
      
      posts: []
    },
    methods: {
      
    },
    // Mounted hook is being called after the app is fully initialized
    mounted: function() {
        fetch('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?commontrack_id=5920049&apikey=e06708be7a728768734c486cd6c6547e')
        .then(response => response.json())
        .then(postsResponse => {
          this.posts = postsResponse;
        })
        console.log("the app is loaded"); 
    }
  })