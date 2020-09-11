var html = document.querySelector("html");
function resetrem() {
  //获取到html元素
  var width = html.getBoundingClientRect().width; //获取屏幕的宽度
  html.style.fontSize = width / 7.5 * 2 + "px";
}

resetrem()
window.onresize = function () {
  resetrem()
}
// 禁止双指放大
// window.addEventListener(
//   "touchmove",
//   function(event) {
//     if(event.scale !== 1) {
//       event.preventDefault();
//     }
//   }, {
//     passive: false
//   }
// );
// 禁止双击放大
document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
  var now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false)

if(!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
  $('#app').css({'width': '400px','margin': '0 auto'})
  html.style.fontSize =  400 / 7.5 + 'px';
}
