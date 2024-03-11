console.log("Vue Hello");

const { createApp } = Vue;

createApp({

  data(){
    return {
      message: '',
      count: 0
    }
  },

  methods: {
    increment(){
      
    }
  }

}).mount("#app")