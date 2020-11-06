function showAndDismissAlert(type, message) {
  const htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';
  $('.alert-messages').prepend(htmlAlert);
  $('.alert-messages .alert').first().hide().fadeIn(200).delay(2000).fadeOut(1000, function() {
    $(this).remove();
  });
}

module.exports = {
  'showAndDismissAlert': showAndDismissAlert,
};
