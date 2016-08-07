import Utils from '../scripts/classes/Utils.js';

export default {
  isLiteral: true,
  params: ['size-multiplier'],
  bind: function () {
    var size = Utils.getRandomInt(20, 40) * parseInt(this.params.sizeMultiplier);
    var speed = 300 - (size * 2.5);
    this.el.style.width = size * 2 + 'px';
    this.el.style.height = size + 'px';
    this.el.style.top = Utils.getRandomInt(0, 70) + '%';
    this.el.style.left = 100 + Utils.getRandomInt(0, 100) + '%';
    this.el.style.animationDelay = '-' + Utils.getRandomInt(0, speed) + 's';
    this.el.style.animationDuration = speed + 's';
    this.el.style.opacity = Utils.getRandom(.4, .8);
  }
};
