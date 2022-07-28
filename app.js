const app = Vue.createApp({
    data(){
        return{
            showPoems: false,
            title: "",
            author: "Click To Get A Poem",
            poem:" "
        }
    },
    methods: {
      async getPoem(){
        const apiUrl= "https://poetrydb.org/random"
        try {
            
        const response = await fetch(apiUrl);
        poems = await response.json();
        this.showPoems = true
        this.title = poems[0].title
        this.author = poems[0].author
        this.poem = poems[0].lines
        
    
        } catch (error) {   
            
        }
      }
    }
})

app.mount("#app")