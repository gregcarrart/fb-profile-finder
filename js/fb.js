// Access Token AAACEdEose0cBADPNY3zYZCviYFjFK2qR7mAZBaxWmhENDQHZA6Mzn1dT9tjZCVfjTZCKulJtVolMlDDV8wWrCOsppIpT86LZAHtoZAh8qQzOwZDZD
// var appId = '477717335615071';
  
$('#fbName').submit(function(){
  
    if ($('#getUserName:first').val() == '') {
      alert('Please enter your user name');
    } else {
      var name = $('#getUserName').val();
      setData(name);
      return false;
    }
});

function setData(name) {
  var user = name;
  var fields = 'name,'; //separate multiple fields with commas and no spaces
  var pic = 'picture.width(200).height(200)';
  var pageUrl = 'https://graph.facebook.com/' + user + '?fields=' + fields + pic;

  getData(pageUrl);
}

function getData(pageUrl) {
  if (pageUrl) {
      $.ajax({
          type: 'GET',
          url: pageUrl,
          dataType: 'jsonp',
          success: function(data) {
            console.log(data);
            postData(data);
          }
      });
  }
}

function postData(data) {
  
  $.each(data, function(index, val) {
      var personName, personPic;
    });
    personPic = data.picture.data.url;
    personName = data.name;
    //personLink = data.link;
    
    $('.pic').find('img').remove();

    $('.name').html(personName);
    $('.pic').append('<img src = ' + personPic + ' />');

}