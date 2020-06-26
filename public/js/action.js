// jQuery that will "listen" to the html niceSurvey.html
$(document).ready(function () {

  $('form').on('submit', function () {

    // var item = $('form input');
    // console.log(item.serializeArray());

    $.ajax({
      type: 'POST',
      url: '/niceSurvey',
      data: $(this).serializeArray(),
      success: function (data) { }
    });
    return false;
  });
});
