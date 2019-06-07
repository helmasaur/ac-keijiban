const fs = require('fs');

module.exports = language => {
	// Checks if a language has been given or if the language given doesn't exist
	if(typeof language === 'undefined' || !fs.existsSync(`./data/${language}`)) {
		language = 'en_US';
	}
	// Imports the data
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
		   },
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