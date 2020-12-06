function isDarkmodeSet() {
  return window.localStorage.getItem('darkmode');
}

function onDarkmodeButtonPress(pagestyleTag, darkmodeButton, darkmodeIcon) {
  if (isDarkmodeSet()) {
    toggleDarkmode(pagestyleTag, 'stylez');
    window.localStorage.removeItem('darkmode');
    setButtonMode(darkmodeIcon, 'Dark');
  } else {
    toggleDarkmode(pagestyleTag, 'stylez-darkmode');
    window.localStorage.setItem('darkmode', 'enabled');
    setButtonMode(darkmodeIcon, 'Light');
  }
}

function toggleDarkmode(pagestyleTag, mode) {
  pagestyleTag.setAttribute('href', '../resources/css/' + mode + '.css');
}

function setButtonMode(darkmodeIcon, mode) {
  if (mode === 'Light') {
    darkmodeIcon.classList.remove('fa-moon');
    darkmodeIcon.classList.add('fa-sun');
  } else if (mode === 'Dark') {
    darkmodeIcon.classList.add('fa-moon');
    darkmodeIcon.classList.remove('fa-sun');
  }
}

function checkIfDarkmodeSetAndEnableThen(pagestyle, darkmodeIcon) {
  if (isDarkmodeSet()) {
    toggleDarkmode(pagestyle, 'stylez-darkmode');
    setButtonMode(darkmodeIcon, 'Light');
  } else {
    setButtonMode(darkmodeIcon, 'Dark');
  }
}

module.exports = {
  onDarkmodeButtonPress,
  checkIfDarkmodeSetAndEnableThen,
};
