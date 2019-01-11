<template>
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
      <router-link to="/step-1"><svg class="svg-inline--fa fa-arrow-left fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg> Back to delivery</router-link>
    </div>
    <div class="row-custom ">
        <div class="col-9">
          <div class="row-custom ">
            <div class="d-flex justify-content-between">
              <div class="title">Shipment</div>
            </div>
            <div class="col-12">
              <div class="radio-options">
                <div class="radio-box" v-for="s in shipments" @click="setShipment(s)" v-bind:class="{'active': s === shipment}" v-bind:key="s.id">
                  <input type="radio" value="promotion" class="radio-btn-custom" name="template" v-bind:id="s.id">
                  <label class="label-radio-custom " v-bind:for="s.id"></label>
                  <div class="radio-text">
                    <h3 class="shipment-name">{{ s.name }}</h3>
                    <h5 class="shipment-fee">{{ s.fee.toLocaleString() }}</h5>
                  </div>
                  <div class="checklist">
                    <img class="hidden" v-bind:class="{'show': s === shipment}" src="/static/check.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row-custom ">
            <div class="d-flex justify-content-between">
              <div class="title">Payment</div>
            </div>

            <div class="col-12">
              <div class="radio-options">
                <div class="radio-box" v-for="p in payments" @click="setPayment(p)" v-bind:class="{'active': p === payment}" v-bind:key="p.id">
                  <input type="radio" value="promotion" class="radio-btn-custom" name="PaymentTemplate" v-bind:id="p.id">
                  <label class="label-radio-custom " v-bind:for="p.id"></label>
                  <div class="radio-text">
                    <h3 class="payment-name">{{ p.name }}</h3>
                    <h5 class="payment-amount" v-bind:class="{'text-transparent': !p.amount}" v-if="p.amount >= 0"> {{p.amount.toLocaleString()}}
                    </h5>
                  </div>
                  <div class="checklist">
                    <img class="hidden" v-bind:class="{'show':  p === payment}" src="/static/check.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="col-3">
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
                <td class="item-names"><b>{{ shipment.name }}</b> shipment</td>
                <td>{{ shipment.fee.toLocaleString() }}</td>
              </tr>
              <tr>
                <td class="sec-title text-left">Total</td>
                <td class="sec-title">{{ countTotal }}</td>
              </tr>
            </table>
            <button class="btn-custom btn-orange" @click="saveState">
              Pay with {{ payment.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step2',
  data () {
    return {
      msg: 'hello',
      dropFee: 0,
      cosOfGood: 0,
      shipment: { type: '', name: '', fee: 0, delivery_estimation: 0 },
      payment: {},
      shipments: [
        { id: 'shipment1', type: 'go-send', name: 'GO-SEND', fee: 15000, delivery_estimation: 0 },
        { id: 'shipment2', type: 'jne', name: 'JNE', fee: 9000, delivery_estimation: 2 },
        { id: 'shipment3', type: 'persona-courier', name: 'Personal Courier', fee: 29000, delivery_estimation: 1 }
      ],
      payments: [
        { id: 'payment1', type: 'e-wallet', name: 'e-Wallet', amount: 1500000 },
        { id: 'payment2', type: 'bank-transfer', name: 'Bank Transfer' },
        { id: 'payment3', type: 'virtual-account', name: 'Virtual Account' }
      ]
    }
  },
  methods: {
    setShipment (shipment) {
      this.shipment = shipment
    },
    setPayment (payment) {
      this.payment = payment
    },
    saveState () {
      localStorage.step2 = JSON.stringify(this.$data)
      this.$router.push('/step-3')
    }
  },
  computed: {
    countTotal: function () {
      var total = this.dropFee + this.cosOfGood + this.shipment.fee
      return total.toLocaleString()
    }
  },
  mounted () {
    var step1 = localStorage.step1 ? JSON.parse(localStorage.step1) : {}
    this.dropFee = step1.dropFee
    this.cosOfGood = step1.cosOfGood

    var step2 = localStorage.step2 ? JSON.parse(localStorage.step2) : {}
    for (var key in step2) {
      if (step2.hasOwnProperty(key)) {
        this[key] = step2[key]
      }
    }

    var shipment = this.shipment
    const eShipment = this.$el.querySelector('#' + shipment.id)
    eShipment.click()
    var payment = this.payment
    const ePayment = this.$el.querySelector('#' + payment.id)
    ePayment.click()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
