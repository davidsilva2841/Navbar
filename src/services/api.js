const axios = require('axios');

const navbarProxy = 'http://navbar-proxy-env.rf3rxfpfwq.us-east-2.elasticbeanstalk.com/api/search';

axios.post(navbarProxy, {Name: 'cabin'})
    .then(result => {
    	console.log(`FILE: api.js () | result: \n`, result);
    })
    .catch(error => {
    	console.log(`FILE: api.js () | ERROR: \n`, error);
    });
