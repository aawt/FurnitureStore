Vue.filter('price', function (limit) {
    return price(limit);
});

var vm = new Vue({
  el: '#store',
  data () {
     return {
         inventory: null,
         loading: true
     }
   },
   mounted () {
      axios
        .get('https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture')
        .then(response => {
          this.inventory = response.data.body.data
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => this.loading = false)
    }

  })
