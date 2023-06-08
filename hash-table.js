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
    this.data = new Array(numBuckets).fill(null);
    this.capacity = numBuckets;
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
      this.data[index] = new KeyValuePair(key, value)
      this.count++
    }
  }

  insertWithHashCollisions(key, value) {
    const index = this.hashMod(key)
    const newNode = new KeyValuePair(key, value);

    if(this.data[index]) {
    newNode.next = this.data[index]
    }

    this.data[index] =  newNode;
    this.count++

  }

  insert(key, value) {
  const index = this.hashMod(key)
 let currNode = this.data[index]

 while(currNode && currNode.key !== key) {
     currNode = currNode.next
   }
   if(currNode) {
     currNode.value = value
   } else {
     this.insertWithHashCollisions(key, value)
   }

  }

}


module.exports = HashTable;
