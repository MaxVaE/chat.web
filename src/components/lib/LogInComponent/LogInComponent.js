/* eslint-disable */
import axios from 'axios'
import ButtonAccount from '@/components/lib/ButtonAccount/ButtonAccount.vue'

export default {
  components: {
    ButtonAccount
  },
  data () {
    return {
      obj: {
        Email: "",
        Password: ""
      },
      bool: true
    }
  },
  computed: {
    emptyInput () {
      this.bool = this.obj.Email === '' || this.obj.Password === ''
      return this.bool
    }
  },
  methods: {
    validateEmail (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      console.log(re.test(email))
      return re.test(email)
    },
    login () {
      if (!this.bool) {
        if (this.validateEmail(this.obj.Email)) {
          axios
            .post('URL', this.obj)
        }
      }
    }
  }
}