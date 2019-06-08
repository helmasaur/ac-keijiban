[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![](https://img.shields.io/npm/v/ac-keijiban.svg)](https://www.npmjs.com/package/ac-keijiban)

# AC-Keijiban

Sends a random message from the Animal Crossing: Wild World video game on Nintend DS created by Katsuya Eguchi and published in 2005.

The quotes come from three types of board message:
- "Message of the Week"
- "Talking to Myself"
- "Poetry"

## Installation

You  have to add this module to your NPM project folder.

```bash
$ npm install ac-keijiban
```

## Example

### Importing the module

```js
// Require with custom language
const acKeijiban = require('ac-keijiban')('en_US');
// Require without an argument sets 'en_US'
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

For the moment, the only language avaible is English. I will collect them in French while I play to *Animal Crossing: Wild World* on Nintendo DS.

Obviously, you are free to participate to the translation in French or any other language.

## Thanks

Thanks to:
- The [*Programming Discussion*](https://progdisc.club) and the [*Coding Den*](https://discordapp.com/invite/code) Discord servers;
- [r/AnimalCrossing](https://www.reddit.com/r/AnimalCrossing) on Reddit;
- The [*Bulletin Board*](https://animalcrossing.fandom.com/wiki/Bulletin_Board) article on the *Animal Crossing* FANDOM wiki;
- Nintendo and Katsuya Eguchi for creating *Animal Crossing*.

## Licenses

- My source code is published under [GNU General Public License v3.0](https://github.com/Helmasaur/ac-keijiban/blob/master/LICENSE) (GPL-3.0).
- All the quotes from *Animal Crossing: Wild World* is the property of Nintendo.