<template>

  <div class="landscape">
    <div class="sky"></div>
    <div class="mountains">
      <div class="peak n1"></div>
      <div class="peak n2"></div>
      <div class="peak n3"></div>
      <div class="peak n4"></div>
      <div class="peak n5"></div>
    </div>
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

  triangle($width, $height, $color)
    width: 0
    height: 0
    border-bottom: $height solid $color
    border-left: $width solid transparent
    border-right: $width solid transparent

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

    .mountains
      position: absolute
      bottom: 40%
      width: 100%
      height: 0

      .peak
        $color = #65A82F
        position: absolute
        bottom: 0
        transform: translateX(-50%)
        &.n1
          z-index: 2
          left: 10%
          border-bottom:  solid
          triangle(22vw, 25vh, darken($color, 0%))
        &.n2
          z-index: 0
          left: 35%
          triangle(20vw, 38vh, darken($color, 20%))
        &.n3
          z-index: 1
          left: 50%
          triangle(25vw, 45vh, darken($color, 10%))
        &.n4
          z-index: 0
          left: 70%
          triangle(20vw, 33vh, darken($color, 20%))
        &.n5
          z-index: 2
          left: 90%
          triangle(35vw, 20vh, darken($color, 0%))

    .water
      overflow: hidden
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
