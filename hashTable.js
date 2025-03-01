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

// table2.set('ca', 'athul')
// table2.set('81', 'amal')
// table2.set('b', 'ziyadh')
// table2.set('2123221', 'salim')
// table2.display()
// console.log(table2.get('ca'))

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

