const fs = require('fs');

module.exports = language => {
	// Checks if a language has been given or if the language given doesn't exist
	if(typeof language === 'undefined' || !fs.existsSync(`./data/${language}`)) {
		language = 'en_US';
	}
	// Imports the data
	const messageOfTheWeekData = require(`./data/${language}/messageOfTheWeekData.js`);
	const talkingToMyselfData = require(`./data/${language}/talkingToMyselfData.js`);
	const poetryData = require(`./data/${language}/poetryData.js`); 

	// Modules
	return {
		messageOfTheWeek: () => {
			return randomMessage(messageOfTheWeekData);
		},
		talkingToMyself: () => {
			return randomMessage(talkingToMyselfData);
		},
		poetry: () => {
			return randomMessage(poetryData);
		},
		messageOfTheWeekDataLength: messageOfTheWeekData.length,
		talkingToMyselfDataLength: talkingToMyselfData.length,
		poetryDataLength: poetryData.length
	};
};

// Returns a random string from an array
const randomMessage = array => {
	return array[Math.floor(Math.random() * array.length)];
}