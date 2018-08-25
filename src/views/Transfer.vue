<template>
  <div class="transfer">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-8 is-offset-2">
            <div class="box">
              <div class="title">Get Points</div>
              <div class="columns">
                <div class="column">
                  <div class="field">
                      <div class="control">
                        <label class="label">Address of receiver</label>
                        <qrcode-reader @decode="onDecode" :track="false" :paused="paused"/>
                        <input class="input is-large mg-t-10px" v-model="addressReceive" placeholder="Enter address" autofocus="">
                      </div>
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <div class="control">
                      <div class="f-left pd-t-15px w-100pct">
                        <div class="f-left w-100pct shadow pd-10px bd-rd-4px">
                          <div class="f-left mg-r-10px">
                            <img src="../assets/somc.png" width="50px">
                          </div>
                          <div class="f-left">
                            <div class="f-w-bold">SOMC</div>
                            <div class="f-w-bold">{{parseFloat(somcBalance).toFixed(8)}} SOMC</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="field">
                      <div class="control">
                        <div class="pd-t-100px">
                          <label class="label">Net Price</label>
                          <input class="input is-large" v-model="totalPrice" placeholder="Enter net price">
                        </div>
                      </div>
                  </div>
                  <div class="field">
                      <div class="control">
                        <label class="label">SOMC Point amount</label>
                        <input disabled class="input is-large" v-model="amountSOMC" placeholder="Enter amount to transfer">
                      </div>
                  </div>
                  <div class="field">
                    <span>20 Bath = 1 SOMC</span>
                  </div>
                </div>
              </div>
              <button class="button is-block is-info is-large is-fullwidth" @click="transferToken(addressReceive, amountSOMC)">TRANSFER</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-modal :active.sync="isShowTransaction" @close="hideTradeModal">
      <modalTrade :hash="hash" :confirmation="confirmation"/>
    </b-modal>
  </div>
</template>

<script>
import { QrcodeReader } from 'vue-qrcode-reader'
import modalTrade from '../components/modalTrade'
import bn from '../utils'
export default {
  components: {
    QrcodeReader,
    modalTrade
  },
  props: {
    somcBalance: {
      type: [String, Number]
    }
  },
  data () {
    return {
      addressReceive: '',
      totalPrice: '',
      paused: false,
      isShowTransaction: false,
      confirmation: '',
      hash: ''
    }
  },
  computed: {
    amountSOMC () {
      if (!this.totalPrice) {
        return 0
      }
      return this.totalPrice / 20
    }
  },
  methods: {
    onDecode (text) {
      this.paused = true
      const regex = /(0x[a-fA-F0-9]{40})/g
      this.addressReceive = text.match(regex)[0]
    },
    showTradeModal (hash) {
      this.hash = hash
      this.isShowTransaction = true
    },
    hideTradeModal () {
      this.hash = ''
      this.isShowTransaction = false
      this.confirmation = ''
      this.addressReceive = ''
      this.paused = false
    },
    transferToken (address, amount) {
      const value = bn.toWei(amount)
      this.$contract.methods.transfer(address, value).send({ from: this.$web3.eth.defaultAccount })
        .on('transactionHash', (hash) => {
          this.showTradeModal(hash)
          this.confirmation = 'loading'
        })
        .on('confirmation', (confirmationNumber, receipt) => {
          if (confirmationNumber === 1) {
            this.confirmation = 'success'
            this.$emit('getBalance')
          }
        })
        .on('error', () => {
          this.hideTradeModal()
          this.confirmation = 'fail'
        })
    }
  }
}
</script>

<style scoped>
.shadow {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}
</style>
