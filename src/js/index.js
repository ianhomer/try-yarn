const git = require('simple-git')();
console.log("Trying Yarn ...")
git.log((err, log) => console.log("git @ " + log.latest.hash))