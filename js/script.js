console.log("Vue Hello");

const { createApp } = Vue;

createApp({

  data(){
    return {
      message: 'Edit Me!!!',
      count: 0,
    }
  },

  methods: {
    increment(){
      this.count++
    },

    reverse(){
      this.message = this.message.split('').reverse().join('')
    }
  }

}).mount("#app")