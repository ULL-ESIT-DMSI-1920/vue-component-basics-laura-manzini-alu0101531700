Vue.component('plan-picker', {
    template: '#plan-picker-template',
    data() {
      return {
        plans: ['The Single', 'The Cappuccino', 'The Addict', 'The Double']
      }
    }
  })


Vue.component('plan', {
    template: '#plan-template',
    props: {
      name: {
        type: String,
        required: true
      }
    }
  })
  
  new Vue({
    el: '#app'
  }) 