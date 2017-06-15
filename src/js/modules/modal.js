//Get general information about client
$.getJSON('data/client.json', function(data) {
  var template = $('#step1_account').html();
  var html = Mustache.to_html(template, data);
  $('.modal_account').html(html);
});

//Get trade information
$.getJSON('data/trade.json', function(data) {
  var template = $('#step1_trade').html();
  var html = Mustache.to_html(template, data);
  $('.modal_trade').html(html);
  $(".money_value").digits();
});

//Get notes
$.getJSON('data/notes.json', function(data) {
  var template = $('#step1_notes').html();
  var html = Mustache.to_html(template, data);
  $('.modal_notes').html(html);
});

//Add comma for money values
$.fn.digits = function(){
  return this.each(function(){
    $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
  })
}