export default class Utils {

  /**
   * Get a random floating point number between `min` and `max`.
   *
   * @param {number} min - min number
   * @param {number} max - max number
   * @return {float} a random floating point number
   */
  static getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * Get a random integer between `min` and `max`.
   *
   * @param {number} min - min number
   * @param {number} max - max number
   * @return {int} a random integer
   */
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
