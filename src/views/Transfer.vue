<template>
  <div class="transfer">
    <section class="hero is-fullheight bg-cl-black">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <div class="box">
              <div class="field">
                  <div class="control">
                    <label class="label">Address of receiver</label>
                    <input class="input is-large" v-model="addressReceive" placeholder="Enter address" autofocus="">
                  </div>
              </div>
              <div class="field">
                  <div class="control">
                    <label class="label">Amount to transfer</label>
                    <input class="input is-large" v-model="amountSOMC" placeholder="Enter amount to transfer">
                  </div>
              </div>
              <button class="button is-block is-info is-large is-fullwidth" @click="transferToken(addressReceive, amountSOMC)">TRANSFER</button>
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
      addressReceive: '',
      amountSOMC: ''
    }
  },
  methods: {
    transferToken (address, amount) {
      const value = bn.toWei(amount)
      this.$contract.methods.transfer(address, value).send({ from: this.$web3.eth.defaultAccount })
    }
  }
}
</script>

<style scoped>
.container {
  height: 80vh;
}
</style>
