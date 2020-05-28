const app = new Vue({
    el: '#vue-app', // document.getElementsByClassName('vue-app')[0]
    data: {
      // name: 'Jane',
      // name2: 'Alex',
      // students: [
      //   {
      //     name: 'Jane',
      //     age: 20
      //   },
      //   {
      //     name: 'Bob',
      //     age: 25
      //   },
      //   {
      //     name: 'Alex',
      //     age: 30
      //   },
      //   {
      //     name: 'John',
      //     age: 42
      //   }
      // ],
      // names: ['Jane', 'Bob', 'Alex', 'John']
      posts: []
    },
    methods: {
      // showInfo: function(name) {
      //   console.log(name);
      // }
      // getTime: function() {
      //   return new Date();
      // },
      // changeName: function() {
      //   this.name = 'Bob'
      // },
      // onInput(event) {
      //   console.log(event.target.value);
      //   this.name = event.target.value;
      // }
    },
    // Mounted hook is being called after the app is fully initialized
    mounted: function() {
      fetch('http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc')
        .then(response => response.json())
        .then(postsResponse => {
          this.posts = postsResponse;
        })
    }
  })