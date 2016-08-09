import Utils from '../scripts/classes/Utils.js';

export default {
  isLiteral: true,
  params: ['size-multiplier'],
  bind: function () {
    var size = Utils.getRandomInt(4, 7) * parseInt(this.params.sizeMultiplier);
    var speed = 150 - (size * 8);
    this.el.style.width = size * 1.5 + 'vw';
    this.el.style.height = size + 'vh';
    this.el.style.top = Utils.getRandomInt(0, 70) + '%';
    this.el.style.left = Utils.getRandomInt(50, 100) + '%';
    this.el.style.animationDelay = '-' + Utils.getRandomInt(0, speed) + 's';
    this.el.style.animationDuration = speed + 's';
    this.el.style.opacity = Utils.getRandom(.4, .8);
  }
};
