<template>

  <div class="landscape">
    <div class="sky">
      <div v-sky-cloud v-for="n in 25" class="cloud"></div>
    </div>
    <div class="mountains">
      <div v-for="n in 5" class="peak n{{n+1}}"></div>
    </div>
    <div class="birds">
      <div v-sky-bird v-for="n in 10" class="bird">
        <div class="body2"></div>
        <div class="body1"></div>
        <div class="wing-l"></div>
        <div class="wing-r"></div>
      </div>
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

  @keyframes moveRight
    0%
      transform: translateX(-200vw)
    100%
      transform: translateX(-0vw)

  @keyframes flap-r
    0%, 10%
      border-top-width: 60px
    40%, 60%
      border-top-width: 10px
    100%
      border-top-width: 60px

  @keyframes flap-l
    0%
      border-bottom-width: 0
    40%, 60%
      border-bottom-width: 40px
    100%
      border-bottom-width: 0

  @keyframes bob
    0%
      margin-top: 25px
    50%
      margin-top: 0
    100%
      margin-top: 25px

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

    .sky,
    .birds
      overflow: hidden
      position: absolute
      top: 0
      width: 100%
      height: 60%

    .sky
      background: linear-gradient(to top, #E15AFF, #00CBFF)
      .cloud
        position: absolute
        border-radius: 999em 999em 0 0
        background: linear-gradient(to bottom, rgba(white, .25), rgba(white, .85))
        animation: moveLeft 200s linear infinite

    .birds
      .bird
        position: absolute
        animation: moveRight 20s linear infinite, bob 0.7s infinite cubic-bezier(0.7, 0.7, 0.1, 0.4)
        div
          position: absolute
        .body1, .body2, .wing-l, .wing-r
          width: 0
          height: 0
          border-color: transparent
          border-style: solid
        .body1
          border-width: 15px
          border-left-width: 25px
          border-right-width: 55px
          border-top-color: #333
        .body2
          left: 50px
          bottom: 0
          border-width: 10px
          border-top-width: 0
          border-left-width: 5px
          border-right-width: 15px
          border-bottom-color: #777
        .wing-l
          left: 22px
          bottom: 0
          border-width: 60px
          border-left-width: 20px
          border-top-width: 0
          border-right-width: 6px
          border-bottom-color: #444
          animation: flap-l 0.7s infinite
        .wing-r
          left: 22px
          top: 0
          border-width: 60px
          border-left-width: 20px
          border-bottom-width: 0
          border-right-width: 6px
          border-top-color: #777
          animation: flap-r 0.7s infinite

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
        &.n5
          left: 10%
          triangle(22vw, 25vh, darken($color, 0%))
        &.n1
          left: 35%
          triangle(20vw, 38vh, darken($color, 20%))
        &.n2
          left: 50%
          triangle(25vw, 45vh, darken($color, 10%))
        &.n3
          left: 70%
          triangle(20vw, 33vh, darken($color, 20%))
        &.n4
          left: 90%
          triangle(35vw, 20vh, darken($color, 0%))

    .water
      overflow: hidden
      position: absolute
      bottom: 0
      width: 100%
      height: 40%
      background: linear-gradient(to top, rgba(#008AFF, .6), #008AFF)

      .sparkle
        position: absolute
        width: 5px
        height: 5px
        background: rgba(white, .5)
        animation: sparkle 2s infinite

</style>

<script>

  import SkyBird from '../directives/SkyBird.js';
  import SkyCloud from '../directives/SkyCloud.js';
  import WaterSparkle from '../directives/WaterSparkle.js';
  export default {
    directives: {
      'sky-bird': SkyBird,
      'sky-cloud': SkyCloud,
      'water-sparkle': WaterSparkle
    }
  };

</script>
