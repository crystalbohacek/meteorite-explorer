$(document).ready(function() {
  
    $.getJSON( "https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=1111", function( data ) {
      var html = ''; 
      var data = data;        
      $.each(data, function() {
        var year = ''
        if(this.year){
          year = this.year.slice(0,4);
        }
        var newLine = '<li class="col-lg-12" id="myLi"><div class="row results-row"><div class="col-sm-3">' + this.name + '</div><div class="col-sm-3">'+ this.fall + '</div><div class="col-sm-3">' + year + '</div><div class="col-sm-3">' + this.mass + '</div></div></li>';
        html += newLine;
      });
      
      
    $("#target").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myDIV li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
        
    $(".results-list").html(html);
  });
});