import Utils from '../scripts/classes/Utils.js';

export default {
  isLiteral: true,
  bind: function () {
    var speed = Utils.getRandomInt(30, 50);
    this.el.style.top = Utils.getRandomInt(10, 50) + '%';
    this.el.style.left = 100 + Utils.getRandomInt(0, 100) + '%';
    this.el.style.animationDelay = '-' + Utils.getRandomInt(0, speed) + 's';
    this.el.style.animationDuration = speed + 's';
  }
};
