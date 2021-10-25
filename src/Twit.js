const Twit = require("twit");
const config = require("./configs/twitterConfig.js");
const lyrics = require("./lyrics");

const twitterUsername = "@julietavbot";

const T = new Twit(config);

const tweetLyrics = () =>
  T.post(
    "statuses/update",
    { status: lyrics.getRandomLyrics() },
    function (err, data, response) {
      console.log(data);
    }
  );

const stream = T.stream("statuses/filter", { track: [twitterUsername] });

function replyWithLyrics(tweet) {
  const userID = tweet.user.screen_name;
  const nameID = tweet.id_str;
  const reply = `@${userID} ${lyrics.getRandomLyrics()}`;
  const params = {
    status: reply,
    in_reply_to_status_id: nameID,
  };

  T.post("statuses/update", params, function (err, data, response) {
    if (err !== undefined) {
      console.log(err);
    } else {
      console.log("Tweeted: " + params.status);
    }
  });
}

const streamListen = () => stream.on("tweet", replyWithLyrics);

module.exports = {
  tweetLyrics,
  streamListen,
};
