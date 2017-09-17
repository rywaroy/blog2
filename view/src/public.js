var plus = {}
plus.set_font = function (num) {

  // 计算、转换布局单位
  var html = document.getElementsByTagName('html')[0];
  var designFontSize = 100;
  var designWidth = 640;
  if (num) {
    designWidth = num;
  }

  function setFontSize() {
    var winWidth = document.documentElement.getBoundingClientRect().width;
    var fontSize = winWidth / designWidth * designFontSize;

    html.style.fontSize = fontSize + 'px';
  }

  setFontSize();
  window.addEventListener('resize', function () {
    setFontSize();
  });

  return this;
}
plus.set_font(750);


export default plus;
