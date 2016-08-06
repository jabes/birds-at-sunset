import Utils from '../scripts/classes/Utils.js';

export default {
  bind: function () {
    this.el.style.top = Utils.getRandomInt(10, 50) + '%';
    this.el.style.left = 100 + Utils.getRandomInt(0, 100) + '%';
    this.el.style.animationDelay = '-' + Utils.getRandomInt(0, 20) + 's';
  }
};
