$(document).on('shown.bs.modal', function () {
  var scrollBarWidth = window.innerWidth - document.body.clientWidth;
  $('body').css('padding-right', scrollBarWidth);
});

$(document).on('hidden.bs.modal', function () {
  $('body').css('padding-right', 0);
});
