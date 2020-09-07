var settings = {
    "url": "http://api-tycoone.tk/api/posts/",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  