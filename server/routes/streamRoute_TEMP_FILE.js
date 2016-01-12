//////////////////MEANT TO INSERT INSIDE THE ELSE CLAUSE OF THE STREAM REQUEST//////////////////

      //create a tweetObject and scrubbedTweetObject variable; set tweetObject equal to data.
      var tweetObject = data; 
      var scrubbedTweetObject;
      //if tweet object from stream has a 'truthy' geo or coordinates property... 
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
           tweetTime: tweetObject['created_at'],
           retweet_count: tweetObject['retweet_count'],
           favorite_count: tweetObject['favorite_count']
        };
      }
      //once tweetObject has been scrubbed, send it back up to the client side!
      res.json(scrubbedTweetObject);


