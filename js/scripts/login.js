var form = new FormData();
form.append("email", "mabadejeda1@gmail.com");
form.append("password", "12345678");

var settings = {
  "url":"http://api-tycoone.tk/api/users/login",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
    console.log(response);
});