import Utils from '../scripts/classes/Utils.js';

export default {
  isLiteral: true,
  bind: function () {
    this.el.style.top = Utils.getRandomInt(0, 100) + '%';
    this.el.style.left = Utils.getRandomInt(0, 100) + '%';
    this.el.style.animationDelay = Utils.getRandomInt(0, 2000) + 'ms';
  }
};
