export default {
  filters: {
    limitText(value, maxLength){
      if(value?.length > maxLength) {
        return value.slice(0,maxLength) + '...';
      }
      return value;
    },
    round(value, decimals) {
      if(!value){
        value = 0
      }
      
      if(!decimals) {
        decimals = 0
      }
      
      var value = Number(value);
      value = value.toFixed(decimals);
      
      return value;
    }
  },
  methods: {
    showSuccessMsg(msg) {
      this.$swal.fire({
        position: 'top-right',
        icon: 'success',
        toast: true,
        title: msg,
        showConfirmButton: false,
        timer: 1500
      })
    },
    showFailMsg(msg) {
      this.$swal.fire({
        position: 'top-right',
        icon: 'error',
        toast: true,
        title: msg,
        showConfirmButton: false,
        timer: 1500
      })
    },
    upperCase(text){
      if(text){
        return text.toUpperCase();
      }
    },
  }
}
