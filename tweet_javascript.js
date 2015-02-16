
$(document).ready(

  function() {
    var $feed = $('.feed');
    var filter;
    // feed.html('');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      var timestamp = tweet.created_at
      $tweet.text('@' + tweet.user + ' : ' + tweet.message + '\n' + timestamp);
      $tweet.prependTo($feed);
      index -= 1;
    }
    streams.home =[] 
  
  var users = Object.keys(streams.users) 
  for (var index=0; index<users.length; index++) {
    console.log(users[index]);
    $('.friends_panel').append('<a class="'+users[index]+'">' + users[index] + '<br></a>');
  }


  $('.update_button').on('click', function(){

    var tweetFilter;
    var tweets = [];

    if (filter === undefined) {
      tweets = streams.home;
    } else {
      tweets = streams.users[filter];
    }

    var $feed = $('.feed');
    console.log("filter:" + tweetFilter);
    var index = tweets.length-1;
    while(index >= 0){
      var tweet = tweets[index];
      var $tweet = $('<div></div>');
      $($tweet).attr('user', tweet.user);
      $tweet.text('@' + tweet.user + ': ' + tweet.message + '\n' + tweet.created_at);
      $tweet.prependTo($feed);
      index -= 1;
    }
    streams.home =[]
  })

  $('button.home').on('click', function(){
    filter = undefined;
  })


  $('.friends_panel').on('click', 'a', function(){
    $('.feed').text(" ");
    filter = $(this).attr('class');
  })

//use select tag to hold all the users
//on click of user 

}); 

