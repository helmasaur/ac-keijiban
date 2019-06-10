const fs = require('fs');
const regex = new RegExp('^[a-z]{2}-[A-Z]{2}$'); // xx-YY

module.exports = language => {
	// Language format verification
	if (regex.test(language)) { // Language format (xx-YY) verification
		language = language.substring(0, 2);
	}

	// Language folder existance verification
	try {
		fs.accessSync(`../data/${language}`); // Why ".." and not "."?
	} catch (e) {
		language = 'en';
	}

	// Importation of the data
	const messageOfTheWeekData = require(`./data/${language}/messageOfTheWeekData.js`);
	const poetryData = require(`./data/${language}/poetryData.js`);
	const talkingToMyselfData = require(`./data/${language}/talkingToMyselfData.js`);

	// Modules
	return {
		messageOfTheWeek: {
			all: messageOfTheWeekData,
			count: messageOfTheWeekData.length,
			random: () => {
				return randomMessage(messageOfTheWeekData);
			}
		},
		poetry: {
			all: poetryData,
			count: poetryData.length,
			random: () => {
				return randomMessage(poetryData);
			}
		},
		talkingToMyself: {
			all: talkingToMyselfData,
			count: talkingToMyselfData.length,
			random: () => {
				return randomMessage(talkingToMyselfData);
			}
		},
		all: messageOfTheWeekData.concat(poetryData.concat(talkingToMyselfData)),
		count: messageOfTheWeekData.length + poetryData.length + talkingToMyselfData.length,
		random: () => {
			return randomMessage(messageOfTheWeekData.concat(poetryData.concat(talkingToMyselfData)));
		}
	};
};

// Returns a random string from an array
const randomMessage = array => {
	return array[Math.floor(Math.random() * array.length)];
}