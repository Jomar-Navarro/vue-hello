console.log("Vue Hello");

const { createApp } = Vue;

createApp({

  data(){
    return {
      message: ''
    }
  }

}).mount("#app")