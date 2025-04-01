class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(10);
// table.set("name", "Bruce");
// table.set("age", 25);
// table.display();
// console.log(table.get("name"));
// table.set("mane", "Clark");
// table.set("name", "Diana");
// console.log(table.get("mane"));
// table.remove("name");
// table.display();

class SimpleHashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key, value) {
    const index = this.hash(key)
    this.table[index] = value
  }

  get(key) {
    const index = this.hash(key)
    return this.table[index]
  }

  remove(key) {
    const index = this.hash(key)
    this.table[index] = undefined
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i, this.table[i])
      }
    }
  }
}

const table1 = new SimpleHashTable(10)

// table1.set('name', 'Bruce');
// table1.set('eman', 'lee')
// table1.set(1, 'athul')
// table1.set('athul', 101010)
// console.log(table1.get('name'));
// // table1.remove('name')
// table1.display()


class SimpleHashTable1 {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key, value) {
    const index = this.hash(key)
    this.table[index] = value
  }

  get(key) {
    const index = this.hash(key)
    return this.table[index]
  }

  remove(key) {
    const index = this.hash(key)
    return this.table[index] = undefined
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i, this.table[i])
      }
    }
  }
}

const table2 = new SimpleHashTable1(10)

table2.set('ca', 'athul')
table2.set('81', 'amal')
table2.set('b', 'ziyadh')
table2.set('2123221', 'salim')
table2.display()
console.log(table2.get('ca'))

class HashTable1 {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  hash(key) {
    key = String(key)
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key, value) {
    const index = this.hash(key)
    if (!this.table[index]) {
      this.table[index] = []
    }
    const existingElem = this.table[index].find(item => item[0] == key)
    if (existingElem) {
      existingElem[1] = value
    } else {
      this.table[index].push([key, value])
    }
  }

  get(key) {
    const index = this.hash(key)
    const bucket = this.table[index]

    if (bucket) {
      const found = bucket.find(item => item[0] === key)
      return found ? found[1] : undefined
    }
    return undefined
  }

  remove(key) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      this.table[index] = bucket.filter(item => item[0] !== key)
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i])
      }
    }
  }
}

const table3 = new HashTable1()

table3.set('s','sample value')
table3.set('bsd', 'check the value')
table3.get('bsd')
table3.display()


class HashTable2 {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  hash(key) {
    key = String(key)
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key, value) {
    const index = this.hash(key)
    if (!this.table[index]) {
      this.table[index] = []
    }
    const existingElem = this.table[index].find(item => item[0] == key)
    if (existingElem) {
      existingElem[1] = value
    } else {
      this.table[index].push([key, value])
    }
  }

  get(key) {
    const index = this.hash(key)
    const bucket = this.table[index]

    if (bucket) {
      const found = bucket.find(item => item[0] === key)
      return found ? found[1] : undefined
    }
    return undefined
  }

  remove(key) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      this.table[index] = bucket.filter(item => item[0] !== key)
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i])
      }
    }
  }
}

const table4 = new HashTable2()

// table4.set('s','sample value')
// table4.set('bsd', 'check the value')
// table4.get('bsd')
// table4.display()

class HashTable3 {
  constructor(size){
    this.table = []
    this.size = size
  }

  hash(key){
    key = String(key)
    let total = 0
    for(let i = 0; i<key.length; i++){
      total += key.charCodeAt(i)
    }

    return total % this.size
  }

  get(key){
    const index = this.hash(key)
    const bucket = this.table[index]

    if(!bucket){
      return null
    } else {
      const found = bucket.find(item => item[0] == key)

      return found ? found[1] : undefined
    }
  }

  set(key, value){
    const index = this.hash(key)
    if(!this.table[index]){
      this.table[index] = []
    }

    const existElem = this.table[index].find(item => item[0] == key)

    if(existElem){
      existElem[1] = value
    } else {
      this.table[index].push([key, value])
    }
  }

  remove(key){
    let index = this.hash(key)
    const bucket = this.table[index]

    if(bucket){
      this.table[index] = bucket.filter(item => item[0] != key)
    }
  }

  display(){
    if(!this.table){
      return null
    } else {
      for(let i = 0; i<this.table.length; i++){
        console.log(i, this.table[i])
      }
    }
  }
}

const ht = new HashTable3(10);

ht.set("apple", 100);
ht.set("banana", 200);
ht.set("grape", 300);
ht.set("orange", 400);
ht.set("apple", 500);  
ht.set("grape", 600);  
ht.set("mango", 700);
console.log(ht.get('apple'))
ht.display()
ht.remove('apple')
ht.display()