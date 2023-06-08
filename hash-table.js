const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.data = new Array(bucketNums).fill(null);
    this.capacity = 2;
    this.count = 0// Your code here
  }

  hash(key) {
    const hex = sha256(key).slice(0,8)
    return parseInt(hex, 16)
  }

  hashMod(key) {
    return this.hash(key) % this.capacity
  }

  insertNoCollisions(key, value) {
    const index = this.hashMod(key)
    if(this.data[index]) {
      throw new Error('hash collision or same key/value pair already exists!')
    } else {
      this.data[index] =
    }
  }

  insertWithHashCollisions(key, value) {
     const collide = this.insertNoCollisions()

  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;
