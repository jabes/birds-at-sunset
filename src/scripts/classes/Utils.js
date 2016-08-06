export default class Utils {

  /**
   * Generate random integer between min (inclusive) and max (inclusive)
   * @see {@link http://stackoverflow.com/a/1527820}
   * @param {number} min - The smallest possible value
   * @param {number} max - The largest possible value
   * @returns {number}
   */
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
