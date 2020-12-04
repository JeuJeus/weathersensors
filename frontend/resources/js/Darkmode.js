function isDarkmodeSet() {
  return window.localStorage.getItem('darkmode');
}

function onDarkmodeButtonPress(pagestyleTag, darkmodeButton) {
  if (isDarkmodeSet()) {
    toggleDarkmode(pagestyleTag, 'stylez');
    window.localStorage.removeItem('darkmode');
    setButtonMode(darkmodeButton, 'Dark');
  } else {
    toggleDarkmode(pagestyleTag, 'stylez-darkmode');
    window.localStorage.setItem('darkmode', 'enabled');
    setButtonMode(darkmodeButton, 'Light');
  }
}

function toggleDarkmode(pagestyleTag, mode) {
  pagestyleTag.setAttribute('href', '../resources/css/' + mode + '.css');
}

function setButtonMode(darkmodeButton, mode) {
  darkmodeButton.text = mode + ' Mode';
}

function checkIfDarkmodeSetAndEnableThen(pagestyle, darkmodeButton) {
  if (isDarkmodeSet()) {
    toggleDarkmode(pagestyle, 'stylez-darkmode');
    setButtonMode(darkmodeButton, 'Light');
  } else {
    setButtonMode(darkmodeButton, 'Dark');
  }
}

module.exports = {
  onDarkmodeButtonPress,
  checkIfDarkmodeSetAndEnableThen,
};
