import Utils from '../scripts/classes/Utils.js';

export default {
  bind: function () {
    var size = Utils.getRandomInt(40, 80);
    this.el.style.width = size * 2 + 'px';
    this.el.style.height = size + 'px';
    this.el.style.top = Utils.getRandomInt(0, 100) + '%';
    this.el.style.left = 100 + Utils.getRandomInt(0, 100) + '%';
    this.el.style.animationDelay = '-' + Utils.getRandomInt(0, 200) + 's';
  }
};
