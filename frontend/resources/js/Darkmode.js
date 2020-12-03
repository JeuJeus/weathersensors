function onDarkmodeButtonPress() {
  let pagestyle = document.getElementById('pagestyle');
  let currentStylesheet = pagestyle.getAttribute('href');

  let newStylesheet = (currentStylesheet === '../resources/css/stylez.css') ? '../resources/css/stylez-darkmode.css' : '../resources/css/stylez.css';
  pagestyle.setAttribute('href', newStylesheet);
}

module.exports = {
  onDarkmodeButtonPress,
};
