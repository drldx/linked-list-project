import { LinkedList } from "./linked-list.js"

const list = new LinkedList();
console.log(list);
// list.append('dog');
// list.append("cat");
// list.append("parrot");
// list.append("hamstor");
// list.append("snake");
// list.append("turtle");

// console.log(list);
// console.log('lastItem: ', list.tail());
// console.log('headItem: ', list.headVal());
// console.log('count: ', list.size());
// console.log('at index: ', list.at(3));
// console.log('icludes: ', list.contains('turtle'));
// console.log('indexOf: ', list.findIndex('parrot'));
// console.log('toString: ', list.toString());
//console.log('pop: ', list.pop() + ' ,size: ' + list.size() + ' ,head now: ' + list.headVal());

list.append(1);
list.append(2);
list.append(3);

// console.log('insertion: ', list.insertAt(1, 10, 11));
// console.log(list.toString());

list.removeAt(1);
console.log(list.toString());
