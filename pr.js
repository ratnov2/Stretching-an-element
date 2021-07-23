

let img = document.querySelector('.imgDiv');


function getPosition(e) {
  var x = y = 0;

  if (!e) {
    var e = window.event;
  }

  if (e.pageX || e.pageY) {
    x = e.pageX;
    y = e.pageY;
  } else if (e.clientX || e.clientY) {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return { x: x, y: y }
}
img.addEventListener('mousemove', (e) => {
  let t = getPosition(e);

  if ((img.offsetWidth - t.x) <= 30 && (img.offsetHeight - t.y) <= 30) {
    console.log('f');
    img.style.width = t.x + 'px';
    img.style.height = t.y + 'px';
  }

})