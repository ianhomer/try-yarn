const git = require('simple-git')();
git.log((err, log) => console.log("git @ " + log.latest.hash))