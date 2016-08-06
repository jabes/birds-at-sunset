<template>

  <div class="landscape">
    <div class="sky">
      <div v-sky-cloud v-for="n in 40" class="cloud"></div>
    </div>
    <div class="mountains">
      <div v-for="n in 5" class="peak n{{n+1}}"></div>
    </div>
    <div class="water">
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

  @keyframes moveLeft
    0%
      transform: translateX(-0vw)
    100%
      transform: translateX(-200vw)

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
      overflow: hidden
      position: absolute
      top: 0
      width: 100%
      height: 60%
      background: #00CBFF

      .cloud
        position: absolute
        background: rgba(white, .5)
        border-radius: 999em 999em 0 0
        animation: moveLeft 200s linear infinite

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

  import SkyCloud from '../directives/SkyCloud.js';
  import WaterSparkle from '../directives/WaterSparkle.js';
  export default {
    directives: {
      'sky-cloud': SkyCloud,
      'water-sparkle': WaterSparkle
    }
  };

</script>
