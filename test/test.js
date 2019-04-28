const acKeijiban = require('..')('en_UrefgegttS');

console.log(`*Message of the Week* (1/${acKeijiban.messageOfTheWeekDataLength})\n`)
console.log(`${acKeijiban.talkingToMyself()}\n`);

console.log(`-Talking to Myself- (1/${acKeijiban.talkingToMyselfDataLength})\n`);
console.log(`${acKeijiban.messageOfTheWeek()}\n`);

console.log(`-Poetry- (1/${acKeijiban.poetryDataLength})\n`);
console.log(`${acKeijiban.poetry()}`);