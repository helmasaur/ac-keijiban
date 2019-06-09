const acKeijiban = require('..')('en');
// const acKeijiban = require('..')('en-US');
// const acKeijiban = require('..')();

console.log(`*Message of the Week* (1/${acKeijiban.messageOfTheWeek.count})\n`);
console.log(`${acKeijiban.messageOfTheWeek.random()}\n`);

console.log(`-Poetry- (1/${acKeijiban.poetry.count})\n`);
console.log(`${acKeijiban.poetry.random()}\n`);

console.log(`-Talking to Myself- (1/${acKeijiban.talkingToMyself.count})\n`);
console.log(`${acKeijiban.talkingToMyself.random()}\n`);

console.log(`Any (1/${acKeijiban.count})\n`);
console.log(`${acKeijiban.random()}\n`);

// All the messages
// console.log(`${acKeijiban.messageOfTheWeek.all}\n`);
// console.log(`${acKeijiban.poetry.all}\n`);
// console.log(`${acKeijiban.talkingToMyself.all}\n`);
// console.log(`${acKeijiban.all}\n`);*/