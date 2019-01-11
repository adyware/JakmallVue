<template>
  <div>
  <div class="content">
    <div class="breadcrumbs">
      <div class="bread-menus active">
        <span class="numb">1</span> Delivery
      </div>
      <div class="bread-menus active">
        <span class="numb">2</span> Payment
      </div>
      <div class="bread-menus">
        <span class="numb">3</span> Finish
      </div>
    </div>
    <div class="top-left-navs">
      <a :href="'/'""><svg class="svg-inline--fa fa-arrow-left fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg> Back to chart</a>
    </div>
    <div class="row-custom ">
      <div class="col-8">
        <div class="d-flex justify-content-between">
          <div class="title">Delivery details</div>
          <div class="right-option">
            <label for="dropshipper">
              <input v-on:click="setDropFee" type="checkbox" name="" v-model="sendDropCheckBox"> Send as dropshipper
            </label>
          </div>
        </div>
        <div class="row-custom forms">
          <div class="col-7">
            <div class="user-input-wrp" v-bind:class="{'error':isError.name, 'success':isSuccess.name}">
              <br/>
              <input v-on:keyup="requiredHandle" type="text" name="name" class="inputText" v-model="name" required>
              <span class="floating-label">Name</span>
            </div>

            <div class="user-input-wrp" v-bind:class="{'error':isError.email, 'success':isSuccess.email}">
              <br/>
              <input v-on:keyup="emailHandle" type="text" name="email" class="inputText" v-model="email" required>
              <span class="floating-label">Email</span>
            </div>

            <div class="user-input-wrp" v-bind:class="{'error':isError.phone, 'success':isSuccess.phone}">
              <br/>
              <input v-on:keyup="phoneHandle" type="text" name="phone" v-model="phone" class="inputText" required>
              <span class="floating-label">Phone Number</span>
            </div>

            <div class="user-input-wrp address" v-bind:class="{'error':isError.address, 'success':isSuccess.address}">
              <br/>
              <input v-on:keyup="addressHandle" v-bind:class="{'error':isError.address, 'success':isSuccess.address}" v-model="address" name="address" type="text" class="inputText" required>
              <span class="floating-label">Adress</span>
            </div>
            <div class="sisa-karakter">
              <span>{{ countSisaAddress }} Characters Available</span>
            </div>
          </div>
          <div class="col-5">
            <div class="user-input-wrp" v-bind:class="{'error':isError.dropName, 'success':isSuccess.dropName, 'disabled-background':!sendDropCheckBox}">
              <br/>
              <input v-on:keyup="requiredHandle" v-model="dropName" name="dropName" type="text" :disabled="!sendDropCheckBox" class="inputText" required>
              <span class="floating-label">Dropshipper Name</span>
            </div>
            <div class="user-input-wrp" v-bind:class="{'disabled-background':!sendDropCheckBox, 'error':isError.dropPhoneNum, 'success':isSuccess.dropPhoneNum}">
              <br/>
              <input v-on:keyup="phoneHandle" v-model="dropPhoneNum" name="dropPhoneNum" type="text" :disabled="!sendDropCheckBox" class="inputText" required>
              <span class="floating-label">Dropshipper Phone Number</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="right-panel">
          <div class="top-section">
            <div class="sec-title">Summary</div>
            <p class="sub-title">10 item purchased</p>
          </div>
          <div class="calculate">
            <table class="tables no-border">
              <tr>
                <td class="item-names">Cost of goods</td>
                <td>{{ cosOfGood }}</td>
              </tr>
              <tr>
                <td class="item-names">Drop shipping fee</td>
                <td>{{ dropFee }}</td>
              </tr>
              <tr>
                <td class="sec-title text-left">Total</td>
                <td class="sec-title">{{ countTotal }}</td>
              </tr>
            </table>
            <button class="btn-custom btn-orange" :disabled="getTotalError" @click="saveState">
              Continue to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'StepEntah',
  data () {
    return {
      sendDropCheckBox: false,
      name: '',
      email: '',
      phone: '',
      address: '',
      dropName: '',
      dropPhoneNum: '',
      cosOfGood: '500,000',
      dropFee: '',
      total: '',
      countSisaAddress: 120,
      initForm: true,
      isError: {
        name: false,
        phone: false,
        dropName: false,
        dropPhoneNum: false,
        address: false,
        email: false
      },
      isSuccess: {
        name: false,
        phone: false,
        dropName: false,
        dropPhoneNum: false,
        address: false,
        email: false
      }
    }
  },
  methods: {
    setDropFee: function () {
      this.sendDropCheckBox = !this.sendDropCheckBox
      if (this.sendDropCheckBox) {
        this.dropFee = '5,900'
      } else {
        this.dropFee = ''
        this.isError.dropName = false
        this.isSuccess.dropName = false
        this.isError.dropPhoneNum = false
        this.isSuccess.dropPhoneNum = false
        this.dropName = ''
        this.dropPhoneNum = ''
      }
    },
    requiredHandle: function (e) {
      this.initForm = false
      var val = e.target.value
      var name = e.target.name
      this[name] = val
      if (val.length > 0) {
        this.isError[name] = false
        this.isSuccess[name] = true
      } else {
        this.isError[name] = true
        this.isSuccess[name] = false
      }
    },
    phoneHandle: function (e) {
      this.initForm = false
      var regex = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g
      var val = e.target.value
      var name = e.target.name
      this[name] = val
      if (val.length >= 6 && val.length <= 20) {
        if (val.match(regex)) {
          this.isError[name] = false
          this.isSuccess[name] = true
        } else {
          this.isError[name] = true
          this.isSuccess[name] = false
        }
      } else {
        this.isError[name] = true
        this.isSuccess[name] = false
      }
    },
    addressHandle: function (e) {
      this.initForm = false
      var val = e.target.value
      var name = e.target.name
      this[name] = val
      this.countSisaAddress = 120 - val.length
      if (this.countSisaAddress < 0) this.countSisaAddress = 0
      if (val.length > 0 && val.length <= 120) {
        this.isError[name] = false
        this.isSuccess[name] = true
      } else {
        this.isError[name] = true
        this.isSuccess[name] = false
      }
    },
    emailHandle: function (e) {
      this.initForm = false
      var regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      var val = e.target.value
      var name = e.target.name
      this[name] = val
      if (val.match(regex)) {
        this.isError[name] = false
        this.isSuccess[name] = true
      } else {
        this.isError[name] = true
        this.isSuccess[name] = false
      }
    },
    saveState: function () {
      localStorage.step1 = JSON.stringify(this.$data)
      this.$router.push('/1')
    }
  },
  computed: {
    countTotal: function () {
      var fee = this.dropFee
      var cost = this.cosOfGood
      fee = parseInt(fee.replace(',', ''))
      cost = parseInt(cost.replace(',', ''))
      if (isNaN(fee)) fee = 0
      if (isNaN(cost)) cost = 0

      var total = fee + cost
      return total.toLocaleString()
    },
    getTotalError: function () {
      var drop = ['dropName', 'dropPhoneNum']
      for (var key in this.isError) {
        if (drop.indexOf(key) > -1 && (this.isError[key] || this[key] === '')) {
          if (this.sendDropCheckBox) {
            return true
          }
        } else if (this.isError.hasOwnProperty(key) && (this.isError[key] || this[key] === '')) {
          return true
        }
      }
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
