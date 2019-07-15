const regex = new RegExp('^[a-z]{2}-[A-Z]{2}$'); // xx-YY

module.exports = language => {
	// Language format verification
	if (regex.test(language)) { // Language format (xx-YY) verification
		language = language.substring(0, 2);
	}

	let messageOfTheWeekData;
	let poetryData;
	let talkingToMyselfData;

	// Importation of the data
	try {
		messageOfTheWeekData = require(`./data/${language}/messageOfTheWeekData.js`);
		poetryData = require(`./data/${language}/poetryData.js`);
		talkingToMyselfData = require(`./data/${language}/talkingToMyselfData.js`);
	} catch (e) {
		messageOfTheWeekData = require('./data/en/messageOfTheWeekData.js');
		poetryData = require('./data/en/poetryData.js');
		talkingToMyselfData = require('./data/en/talkingToMyselfData.js');
	}

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