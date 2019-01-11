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
      <div class="bread-menus active">
        <span class="numb">3</span> Finish
      </div>
    </div>
    <div class="row-custom ">
      <div class="col-8">
        <!-- <div class="row-custom"> -->
          <div class="col-12 end-resume">
            <div class="d-flex justify-content-between">
              <div class="title no-right-option">Thank you</div>
            </div>
            <div class="row-custom">
              <div class="col-12">
                <p>Order ID: <b>{{ orderID }}</b></p>
                <p>Your order will be delivered {{ shipment.delivery_estimation ? (shipment.delivery_estimation > 1 ? shipment.delivery_estimation + ' days' : shipment.delivery_estimation + ' day') : 'today' }} with {{ shipment.name }}</p>
                <div class="homepage-back">
                  <a :href="'/'"><svg class="svg-inline--fa fa-arrow-left fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg> Back to Homepage</a>
                </div>
              </div>
            </div>
          </div>
        <!-- </div> -->
      </div>
      <div class="col-4">
        <div class="right-panel">
          <div class="top-section">
            <div class="sec-title">Summary</div>
            <p class="sub-title">10 item purchased</p>
            <hr align="left" width="50%" style="border: 1px solid #aaa; margin-top: 30px;">
            <div class="col-12 calculated">
              <table class="tables no-border">
                <tr>
                  <td class="item-names">Delivery estimation</td>
                </tr>
                <tr>
                  <td class="subitem-names"><span v-show="shipment.type">{{ shipment.delivery_estimation ? (shipment.delivery_estimation > 1 ? shipment.delivery_estimation + ' days' : shipment.delivery_estimation + ' day') : 'today' }} by {{ shipment.name }}</span></td>
                </tr>
              </table>
            </div>

            <hr align="left" width="50%" style="border: 1px solid #aaa;">

            <div class="col-12 calculated">
              <table class="tables no-border">
              <tr>
                <td class="item-names">Payment Method</td>
              </tr>
              <tr>
                  <td class="subitem-names">{{ payment.name }}</td>
                </tr>
            </table>
            </div>
          </div>

          <div class="calculate">
            <table class="tables no-border">
              <tr>
                <td class="item-names">Cost of goods</td>
                <td>{{ cosOfGood.toLocaleString() }}</td>
              </tr>
              <tr>
                <td class="item-names">Drop shipping fee</td>
                <td>{{ dropFee.toLocaleString() }}</td>
              </tr>
              <tr>
                <td class="item-names"><span style="color:black">{{ kurir }}</span> Shipment</td>
                <td>{{ shipment.fee.toLocaleString() }}</td>
              </tr>
              <tr>
                <td class="sec-title text-left">Total</td>
                <td class="sec-title">{{ countTotal }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Step1',
  data () {
    return {
      dropFee: 0,
      orderID: '-',
      cosOfGood: 0,
      shipment: { type: '', name: '', fee: 0, delivery_estimation: 0 },
      payment: {}
    }
  },
  methods: {
    paymentList: function () {
      console.log('awaw')
    },
    saveState: function () {
      localStorage.step1 = JSON.stringify(this.$data)
      this.$router.push('/1')
    }
  },
  computed: {
    countTotal: function () {
      var total = this.dropFee + this.cosOfGood + this.shipment.fee
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
  },
  mounted () {
    var result = ''
    var chars = '23456789ABCDEFGHJKLMNOPQRSTUVWXYZ'
    for (var i = 5; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))]

    var step3 = localStorage.step3 ? JSON.parse(localStorage.step3) : {}
    if (step3.orderID === undefined) {
      this.orderID = result
    } else {
      this.orderID = step3.orderID
    }

    var step1 = localStorage.step1 ? JSON.parse(localStorage.step1) : {}
    this.dropFee = step1.dropFee
    this.cosOfGood = step1.cosOfGood

    var step2 = localStorage.step2 ? JSON.parse(localStorage.step2) : {}
    this.payment = step2.payment
    this.shipment = step2.shipment

    localStorage.step3 = JSON.stringify(this.$data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
