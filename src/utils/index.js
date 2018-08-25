import { BigNumber } from 'bignumber.js'

export default {
  toHumanNumber (amount, decimal = 18) {
    const humanNumber = new BigNumber(amount.toString(10) / 10 ** decimal).toNumber(10)
    return humanNumber
  },
  toWei (humanAmount, decimal = 18) {
    const amount = new BigNumber(humanAmount.toString(10) * 10 ** decimal).toNumber(10)
    return amount
  },
  toBigNumber (amount) {
    return new BigNumber(amount)
  },
  gweiToWei (humanAmount) {
    const amount = new BigNumber(humanAmount.toString(10) * 10 ** 9).toNumber(10)
    return amount
  }
}
