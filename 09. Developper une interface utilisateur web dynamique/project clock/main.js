var hands = [];
hands.push(document.querySelector('#second > *'));
hands.push(document.querySelector('#minute > *'));
hands.push(document.querySelector('#hour > *'));

var cx = 100;
var cy = 100;

function shifter(val) {
  return [val, cx, cy].join(' ');
}

var date = new Date();
var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
var minuteAngle = 360 * date.getMinutes() / 60;
var secAngle = 360 * date.getSeconds() / 60;

hands[0].setAttribute('from', shifter(secAngle));
hands[0].setAttribute('to', shifter(secAngle + 360));
hands[1].setAttribute('from', shifter(minuteAngle));
hands[1].setAttribute('to', shifter(minuteAngle + 360));
hands[2].setAttribute('from', shifter(hoursAngle));
hands[2].setAttribute('to', shifter(hoursAngle + 360));

for(var i = 1; i <= 12; i++) {
  var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', '100');
  line.setAttribute('y1', '30');
  line.setAttribute('x2', '100');
  line.setAttribute('y2', '40');
  line.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)');
  line.setAttribute('style', 'stroke: #ffffff;');
  document.querySelector('svg').appendChild(line);
}