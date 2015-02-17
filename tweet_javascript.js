
$(document).ready(

  function() {
    var $feed = $('.feed');
    var filter;

    var index = 0;

    while(index <= streams.home.length-1){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      var timestamp = moment(tweet.created_at).startOf().fromNow();
      $tweet.text('@' + tweet.user + ' : ' + tweet.message + '\n' + timestamp);
      $tweet.prependTo($feed);
      index += 1;
    }
    //streams.home =[] 
  
  var users = Object.keys(streams.users) 
  for (var index=0; index<users.length; index++) {
    console.log(users[index]);
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
    console.log("filter:" + tweetFilter);
    var index = 0 //tweets.length-1;

    while(index <= tweets.length-1){
      var tweet = tweets[index];
      var $tweet = $('<div></div>');
      $($tweet).attr('user', tweet.user);

      var timestamp = moment(tweet.created_at).startOf().fromNow();
      // var timestamp = tweet.created_at;
      $tweet.text('@' + tweet.user + ': ' + tweet.message + timestamp);
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

}); 

