 var forismatic = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
 //json version
      window.onload = function() {
        var quote;
        var author;
  $(".getQuote").click("click", function(event){
    event.preventDefault();
  $.getJSON(forismatic, function(json) {
quote = (json.quoteText);
  $(".quote").text(json.quoteText);
    console.log(json.quoteText);
    author = (json.quoteAuthor);
      $(".author").text(json.quoteAuthor);
  if(json.quoteAuthor == "") {
      $(".author").text("Anonymous");
    }
  });
   });
// tweet button update
        $(".share").on("click", function(bing){
   bing.preventDefault();
  window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + " -" + author))
 })       
  };
  
    
// twitter share button  update

// api call using ajax
