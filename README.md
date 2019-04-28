[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# AC-Keijiban

Sends a random message from the Animal Crossing: Wild World video game on Nintend DS created by Katsuya Eguchi and published in 2005.

The quotes come from three types of board message:
- "Message of the Week"
- "Talking to Myself"
- "Poetry"

## Installation

The package isn't on NPM yet. To use it, there are two solutions.

### Manual download

You have to download the [archive](https://github.com/helmasaur/ac-keijiban/archive/master.zip) manually from this repository. Then, extract it within your project.

### Cloning the repository

You  have to clone this repository within your project using the command `git`.

```bash
$ git submodule add https://github.com/Helmasaur/ac-keijiban.git ac-keijiban
```

## Example

### Importing the module

```js
// Require with custom language
const acKeijiban = require('..')('en_US');
// Require without an argument sets 'en_US'
const acKeijiban = require('..')();
```

### Displaying a random "Message of the Week"

```js
console.log('*Message of the Week*');
console.log(acKeijiban.messageOfTheWeek());
```

### Displaying a random "Talking to Myself"

```js
console.log('-Talking to Myself-');
console.log(acKeijiban.talkingToMyself());
```

### Displaying a random "Poetry"

```js
console.log('-Poetry-');
console.log(acKeijiban.poetry());
```

## Translation

For the moment, the only language avaible is English. I will collect them in French while I play to *Animal Crossing: Wild World* on Nintendo DS.

Obviously, you are free to participate to the translation in French or any other language.

## Thanks

Thanks to:
- The [*Programming Discussion*](https://progdisc.club) Discord server;
- [r/AnimalCrossing](https://www.reddit.com/r/AnimalCrossing) on Reddit;
- The [*Bulletin Board*](https://animalcrossing.fandom.com/wiki/Bulletin_Board) article on the *Animal Crossing* FANDOM wiki;
- Nintendo and Katsuya Eguchi for creating *Animal Crossing*.

## Licenses

- My source code is published under [GNU General Public License v3.0](https://github.com/Helmasaur/ac-keijiban/blob/master/LICENSE) (GPL-3.0).
- All the quotes from *Animal Crossing: Wild World* is the property of Nintendo.