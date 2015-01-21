var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "subscriber"});

log.info("I'm Alive master");