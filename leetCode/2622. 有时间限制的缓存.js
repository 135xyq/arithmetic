var TimeLimitedCache = function () {
  this.cache = {}
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let flag = false
  if (this.cache.hasOwnProperty(key)) {
    if (this.cache[key].expiration > new Date()) {
      flag = true
    }
  }
  this.cache[key] = {
    value: value,
    isExpired: false,
    expiration: Date.now() + duration
  }
  return flag
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.hasOwnProperty(key)) {
    if (this.cache[key].expiration > Date.now()) {
      return this.cache[key].value
    } else {
      this.cache[key].isExpired = true
      return -1
    }
  }
  return -1
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let count = 0
  for (let key in this.cache) {
    if (this.cache[key].expiration > Date.now()) {
      count++
    } else {
      this.cache[key].isExpired = true
    }
  }
  return count
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */