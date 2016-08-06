<template>

  <div class="landscape">
    <div class="sky"></div>
    <div id="waterContainer" class="water">
      <div v-water-sparkle v-for="n in 200" class="sparkle"></div>
    </div>
  </div>

</template>

<style lang="stylus">

  @keyframes sparkle
    0%
      opacity: 0
    50%
      opacity: 1
    100%
      opacity: 0

  .landscape
    width: 100vw
    height: 100vh
    background: black
    position: relative

    .sky
      position: absolute
      top: 0
      width: 100%
      height: 60%
      background: #00CBFF

    .water
      position: absolute
      bottom: 0
      width: 100%
      height: 40%
      background: #008AFF

      .sparkle
        position: absolute
        width: 5px
        height: 5px
        background: rgba(white, .5)
        animation: sparkle 2s infinite

</style>

<script>

  import WaterSparkle from '../directives/WaterSparkle.js';
  export default {
    directives: {
      'water-sparkle': WaterSparkle
    }
  };

</script>
