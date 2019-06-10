[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![](https://img.shields.io/npm/v/ac-keijiban.svg)](https://www.npmjs.com/package/ac-keijiban)

# AC-Keijiban

Sends a random message from the Animal Crossing: Wild World video game on Nintend DS created by Katsuya Eguchi and published in 2005.

The quotes come from three types of board message:
- "Message of the Week"
- "Poetry"
- "Talking to Myself"

## Installation

You  have to add this module to your NPM project folder.

```bash
$ npm install ac-keijiban
```

## Example

### Importing the module

```js
// Require with a language (format xx)
const acKeijiban = require('ac-keijiban')('en');
// Require with a language (format xx-YY) sets 'en'(format xx)
const acKeijiban = require('ac-keijiban')('en-US')
// Require without an argument sets 'en'
const acKeijiban = require('ac-keijiban')();
```

### Displaying a random "Message of the Week"

```js
console.log('*Message of the Week*');
console.log(acKeijiban.messageOfTheWeek.random());
```

### Displaying a random "Poetry"

```js
console.log('-Poetry-');
console.log(acKeijiban.poetry.random());
```

### Displaying a random "Talking to Myself"

```js
console.log('-Talking to Myself-');
console.log(acKeijiban.talkingToMyself.random());
```

## Translation

For the moment, the only language avaible is English. The French messages are being collected directly from *Animal Crossing: Wild World* on Nintendo DS.

Obviously, you are free to participate to the translation in French or in any other language.

### Avaible languages

#### English 
- "Message of the Week": 85 *(complete)*
- "Poetry": 2 *(complete)*
- "Talking to Myself": 74 *(complete)*
#### French
- "Message of the Week": 8
- "Poetry": 0
- "Talking to Myself": 4

## Thanks

Thanks to:
- The [*Programming Discussion*](https://progdisc.club) and the [*Coding Den*](https://discordapp.com/invite/code) Discord servers;
- [r/AnimalCrossing](https://www.reddit.com/r/AnimalCrossing) on Reddit;
- The [*Bulletin Board*](https://animalcrossing.fandom.com/wiki/Bulletin_Board) article on the *Animal Crossing* FANDOM wiki;
- Nintendo and Katsuya Eguchi for creating *Animal Crossing*;
- BelleChoucroute for the French translation.

## Licenses

- My source code is published under [MIT License](https://github.com/Helmasaur/ac-keijiban/blob/master/LICENSE).
- All the quotes from *Animal Crossing: Wild World* is the property of Nintendo.