const Twit = require("./src/Twit");

setInterval(Twit.tweetLyrics, 3600 * 2 * 1000);
Twit.streamListen();
