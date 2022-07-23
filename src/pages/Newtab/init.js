const colorMode = localStorage.getItem('chakra-ui-color-mode');
if (colorMode === 'dark') {
  document.querySelector('html').style.backgroundColor = '#2C3333';
} else {
  document.querySelector('html').style.backgroundColor = '#FEFBF3';
}
