console.log("Vue Hello");

const { createApp } = Vue;

createApp({

  data(){
    return {
      message: 'Edit me!!',
      count: 0
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