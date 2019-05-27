$(document).ready(function() {

    $.getJSON( "https://data.nasa.gov/resource/gh4g-9sfh.json", function( data ) {
      var data = data; //or the search query
      var html = '';
        
      $.each(data, function() {
        var year = ''
        if(this.year){
          year = this.year.slice(0,4);
        }
        var newLine = '<li class="col-lg-12"><div class="row results-row"><div class="col-sm-3">' + this.name + '</div><div class="col-sm-3">'+ this.fall + '</div><div class="col-sm-3">' + year + '</div><div class="col-sm-3">' + this.mass + '</div></div></li>';
        html += newLine;
      });
        
      $(".results-list").html(html);
  });
});