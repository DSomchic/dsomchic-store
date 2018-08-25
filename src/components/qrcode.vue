<template>
    <div id="myQr"></div>
</template>

<script>
import qrcode from 'qrcode-generator'
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  mounted () {
    let typeNumber = 4
    let errorCorrectionLevel = 'L'
    let qr = qrcode(typeNumber, errorCorrectionLevel)
    qr.addData(this.message)
    qr.make()
    document.getElementById('myQr').innerHTML = qr.createSvgTag(7, 0)
  }
}
</script>
