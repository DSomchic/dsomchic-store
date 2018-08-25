<template>
  <div class="trad">
    <section class="hero is-fullheight bg-cl-black">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <div class="box">
              <b-tabs type="is-toggle" position="is-centered">
                <b-tab-item label="Buy SOMC">
                  <div class="field">
                      <div class="control">
                        <label class="label">ETH you spend</label>
                        <input class="input is-large" v-model.number="buySOMC" placeholder="Amount to spend">
                      </div>
                  </div>
                  <div class="field">
                      <div class="control">
                        <label class="label">SOMC you receive</label>
                        <input class="input is-large" disabled v-model="receiveSOMC" placeholder="Amount you receive">
                      </div>
                  </div>
                  <button class="button is-block is-info is-large is-fullwidth" @click="buyToken(buySOMC)">BUY</button>
                </b-tab-item>
                <b-tab-item label="Sell SOMC">
                  <div class="field">
                      <div class="control">
                        <label class="label">SOMC you spend</label>
                        <input class="input is-large" placeholder="Amount to spend" autofocus="">
                      </div>
                  </div>
                  <div class="field">
                      <div class="control">
                        <label class="label">ETH you receive</label>
                        <input class="input is-large" disabled placeholder="Amount you receive">
                      </div>
                  </div>
                  <button class="button is-block is-info is-large is-fullwidth">SELL</button>
                </b-tab-item>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import bn from '../utils'
export default {
  data () {
    return {
      buySOMC: ''
    }
  },
  computed: {
    receiveSOMC () {
      return this.buySOMC * 10000
    }
  },
  methods: {
    buyToken (amount) {
      const value = bn.toWei(amount)
      this.$contract.methods.buyToken().send({ from: this.$web3.eth.defaultAccount, value })
    }
  }
}
</script>

<style scoped>
.container {
  height: 80vh;
}
</style>
