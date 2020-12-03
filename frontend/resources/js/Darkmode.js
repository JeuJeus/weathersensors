function isDarkmodeSet() {
  return window.localStorage.getItem('darkmode');
}

function onDarkmodeButtonPress(pagestyleTag) {
  if (isDarkmodeSet()) {
    toggleDarkmode(pagestyleTag, 'stylez');
    window.localStorage.removeItem('darkmode');
  } else {
    toggleDarkmode(pagestyleTag, 'stylez-darkmode');
    window.localStorage.setItem('darkmode', 'enabled');
  }
}

function toggleDarkmode(pagestyleTag, mode) {
  pagestyleTag.setAttribute('href', '../resources/css/' + mode + '.css');
}

module.exports = {
  onDarkmodeButtonPress,
  isDarkmodeSet,
  toggleDarkmode,
};
