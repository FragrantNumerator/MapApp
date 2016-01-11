//////////////////TO INSERT INSIDE ROUTER.GET FUNCTION ON LINE 42 OF ROUTES.JS FILE//////////////////

  twitterApiController.getTweets(req.params.category, 10, function(err, data) {
    // ** Reject data that doesn't have a location ** !!! Need to do this
    if (err) {
      console.log('Error getting data from Twttier API');
      throw new Error(err);

    } else {
      //create an empty scrubbedTweetData array.
      var scrubbedTweetData = [];
      //loop through each tweetObject returned from the twitter API...
      data.statuses.forEach(function(tweetObject){
        //if tweet object has a 'truthy' time_zone or coordinates property... 
        if(tweetObject['geo'] || tweetObject['coordinates']){
          //then create a scrubbedTweetObject containing most salient info...
          var scrubbedTweetObject = {
             name: tweetObject.user['name'],
             handle: tweetObject.user['screen_name'],
             verified: tweetObject.user['verified'],
             createdAt: tweetObject.user['created_at'],
             description: tweetObject.user['description'], 
             url: tweetObject.user['url'],
             followers_count: tweetObject.user['followers_count'], 
             friends_count: tweetObject.user['friends_count'],
             timezone: tweetObject.user['time_zone'],
             coordinates: tweetObject['coordinates'],
             geo: tweetObject['geo'],
             place: tweetObject['place'],
             tweetText: tweetObject['text'],
             retweet_count: tweetObject['retweet_count'],
             favorite_count: tweetObject['favorite_count']
          };
          //and push the scrubbed object to scrubbedTweetData.
          scrubbedTweetData.push(scrubbedTweetObject);
        }
      });
      //once data has been scrubbed, send it back up to the client side!
      res.json(scrubbedTweetData);
    }
  });