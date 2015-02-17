
$(document).ready(

  function() {
    var $feed = $('.feed');
    var filter;

    var index = 0;

    while(index <= streams.home.length-1){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      var $tweetStamp = $('<div></div>');
      var timestamp = moment(tweet.created_at).startOf().fromNow();
      $tweet.text('@' + tweet.user + ' : ' + tweet.message);
      $tweetStamp.text(timestamp);
      $tweetStamp.appendTo($tweet);
      $tweet.prependTo($feed);
      index += 1;
    }
  
  var users = Object.keys(streams.users) 
  for (var index=0; index<users.length; index++) {
    $('.friends_panel').append('<a class="'+users[index]+'">' + '@' + users[index] + '<br></a>');
  }

  $('.username').text('@' + tweet.user);

  $('.update_button').on('click', function(){
    var tweetFilter;
    var tweets = [];

    if (filter === undefined) {
      tweets = streams.home;
    } else {
      tweets = streams.users[filter];
    }

    var $feed = $('.feed');
    var index = 0 

    while(index <= tweets.length-1){
      var tweet = tweets[index];
      var $tweet = $('<div></div>');
      var $tweetStamp = $('<div></div>');
      $($tweet).attr('user', tweet.user);
      var timestamp = moment(tweet.created_at).startOf().fromNow();
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweetStamp.text(timestamp);
      $tweetStamp.appendTo($tweet);
      $tweet.prependTo($feed);
      index += 1;
    }
  })

  $('button.home').on('click', function(){
    filter = undefined;
    $('.update_button').trigger('click')
  })


  $('.friends_panel').on('click', 'a', function(){
    $('.feed').text(" ");
    filter = $(this).attr('class');
    $('.update_button').trigger('click')
  })

  $('.addTweet').on('click', function(){
    var message = $('input').val()
    if (message.length>0) {
      writeTweet(message);
      $('.update_button').trigger('click')
      $('input').val('')
    }
  })

}); 

