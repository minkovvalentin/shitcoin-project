const {
  initialize: initScraper,
  getResults
} = require('../helpers/scrape');

const {
 getPosts
} = require('../helpers/redditBot');

const defaultsubreddit = 'CryptoMoonShots'

const externalCoinService =  {
  getScrapeCoinDetails: async () => {
  
    await initScraper();
    
    const scrapeResults = await getResults(defaultsubreddit, 300);
  
    return scrapeResults;  
  },

  getApiCoinDetails: async () => {
    return await getPosts(defaultsubreddit, false, 200)  ; 
  }
}

module.exports = externalCoinService