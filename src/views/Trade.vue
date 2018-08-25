<template>
  <div class="container w-100pct pd-20px">
    <div class="f-left w-100pct title">
      Exchange
    </div>
    <div class="f-left w-100pct pd-10px">
      <div class="columns">
        <div class="column">
          <div class="f-left w-100pct">
            <div class="f-left w-100pct shadow pd-10px bd-rd-4px">
              <div class="f-left mg-r-10px">
                <img v-if="tokenETH.code === 'ETH'" src="../assets/eth.png" width="50px">
                <img v-if="tokenETH.code === 'SOMC'" src="../assets/somc.png" width="50px">
              </div>
              <div class="f-left">
                <div class="f-w-bold">{{ tokenETH.name }}</div>
                <div class="f-w-bold">{{parseFloat(tokenETH.balance).toFixed(8)}} {{ tokenETH.code }}</div>
              </div>
            </div>
          </div>
          <div class="f-left w-100pct mg-t-10px">
            <b-input v-if="tokenETH.code === 'ETH'" v-model="tokenETH.amount" placeholder="Amount"></b-input>
            <b-input v-if="tokenETH.code === 'SOMC'" v-model="tokenSOMC.amount" placeholder="Amount"></b-input>
          </div>
        </div>
        <div class="column">
          <div class="f-left w-100pct pd-20px t-al-center dp-none-tablet">
            <img src="../assets/swap.png" width="50px" class="cs-pointer" @click="switchToken()">
          </div>
          <div class="f-left w-100pct pd-20px t-al-center rotation dp-none-mobile">
            <img src="../assets/swap.png" width="50px" class="cs-pointer" @click="switchToken()">
          </div>
        </div>
        <div class="column">
          <div class="f-left w-100pct">
            <div class="f-left w-100pct shadow pd-10px bd-rd-4px">
              <div class="f-left mg-r-10px">
                <img v-if="tokenSOMC.code === 'ETH'" src="../assets/eth.png" width="50px">
                <img v-if="tokenSOMC.code === 'SOMC'" src="../assets/somc.png" width="50px">
              </div>
              <div class="f-left">
                <div class="f-w-bold">{{ tokenSOMC.name }}</div>
                <div class="f-w-bold">{{parseFloat(tokenSOMC.balance).toFixed(8)}} {{ tokenSOMC.code }}</div>
              </div>
            </div>
          </div>
          <div class="f-left w-100pct mg-t-10px">
            <b-input v-if="tokenETH.code === 'ETH'" :value="getReceiveSOMC" placeholder="Amount" disabled></b-input>
            <b-input v-if="tokenETH.code === 'SOMC'" :value="getReceiveETH" placeholder="Amount" disabled></b-input>
          </div>
        </div>
        </div>
      </div>
    <div class="f-left w-100pct pd-10px mg-t-10px">
      <div v-if="tokenETH.code === 'ETH'" class="button is-primary f-left w-100pct h-50px f-s-21px" @click="buyToken(tokenETH.amount)">BUY</div>
      <div v-if="tokenETH.code === 'SOMC'" class="button is-primary f-left w-100pct h-50px f-s-21px" @click="sellToken(tokenSOMC.amount)">SELL</div>
    </div>
  </div>
</template>

<script>
import modalTrade from '../components/modalTrade'
import bn from '../utils'
export default {
  name: 'Transfer',
  components: {
    modalTrade
  },
  props: {
    ethBalance: {
      type: [String, Number]
    },
    somcBalance: {
      type: [String, Number]
    },
  },
  watch: {
    ethBalance (newVal, oldVal) {
      if (oldVal === '' && this.tokenETH.balance === '') {
        this.tokenETH.balance = newVal
      }
    },
    somcBalance (newVal, oldVal) {
      if (oldVal === '' && this.tokenSOMC.balance === '') {
        this.tokenSOMC.balance = newVal
      }
    }
  },
  data () {
    return {
      tokenETH: {
        name: 'Ethereum',
        code: 'ETH',
        balance: this.ethBalance,
        amount: ''
      },
      tokenSOMC: {
        name: 'SOMC',
        code: 'SOMC',
        balance: this.somcBalance,
        amount: ''
      },
      isShowTransaction: false,
      confirmation: '',
      hash: ''
    }
  },
  computed: {
    getReceiveSOMC () {
      return this.tokenETH.amount * 10000
    },
    getReceiveETH () {
      return this.tokenSOMC.amount / 10000
    }
  },
  methods: {
    showTradeModal (hash) {
      this.hash = hash
      this.isShowTransaction = true
    },
    hideTradeModal () {
      this.hash = ''
      this.isShowTransaction = false
      this.confirmation = ''
    },
    buyToken (amount) {
      const value = bn.toWei(amount)
      this.$contract.methods.buyToken().send({ from: this.$web3.eth.defaultAccount, value })
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
          this.confirmation = 'fail'
        })
    },
    sellToken (amount) {
      const value = bn.toWei(amount)
      this.$contract.methods.sellToken(value).send({ from: this.$web3.eth.defaultAccount })
    },
    switchToken () {
      const oldTokenETH = { ...this.tokenETH, amount:'' }
      this.tokenETH = { ...this.tokenSOMC, amount:'' }
      this.tokenSOMC = oldTokenETH
    }
  }
}
</script>

<style scoped>
.shadow {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

.rotation {
  transform: rotate(90deg);
}

</style>
