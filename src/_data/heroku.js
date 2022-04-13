const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
    const url = 'https://jacobmeeps.herokuapp.com/api/meeps';

    /* This returns a promise */
    return EleventyFetch(url, {
        duration: '1d', // save for 1 day
        type: 'json', // we’ll parse JSON for you
    });
    
};