const chalk = require('chalk');

const { getAgenda } = require('./directus/agenda');
const { getBlogposts } = require('./directus/blogposts');
const { getWinners } = require('./directus/winners');
const { getHighlights } = require('./directus/highlights');


console.log('');
console.log(chalk.green('Starting importing data from Directus...'));
console.log('');
console.log(chalk.green('[ AGENDA - UPDATES - PRIZE - HIGHLIGHTS ]'));

getHighlights();
getAgenda();
getBlogposts();
getWinners();
