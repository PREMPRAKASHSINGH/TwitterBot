var Twit = require("twit");
var config = require("./config");
var T = new Twit(config);

//set up a user stream
var stream=T.stream('user');

// Anytime someone follows me
stream.on('follow',followed);

function followed(eventMsg) {
  var name = eventMsg.source.name;
  var screenName= eventMsg.source.screen_name;
  var reply = ".@"+screenName+" thank you for following me";

  tweetIt(reply);
}

console.log("bot is listening.");
//setInterval();
/*var params = {
  q: 'rainbow',
  count: 2
};

T.get('search/tweets', params, gotData);

 function gotData(err, data, response) {
  console.log(data);
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}*/
//tweetIt();
function tweetIt(txt) {
  var tweet = { status: txt };
  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if(err){
      console.console.log("Err as "+err);
    }else{
      console.log("it worked");
      //console.log(data);
    }
  }
}
