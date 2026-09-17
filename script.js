// Smoke test: proves script.js loaded AND that a date-difference countdown works.
// Change TARGET to your real date later.

var TARGET = new Date("2031-09-17T00:00:00");

function tick() {
  var ms = TARGET - new Date();
  var past = ms < 0;
  ms = Math.abs(ms);

  var s = Math.floor(ms / 1000);
  var days = Math.floor(s / 86400);
  var hours = Math.floor((s % 86400) / 3600);
  var mins = Math.floor((s % 3600) / 60);
  var secs = s % 60;

  document.getElementById("countdown").textContent =
    days + "d " + hours + "h " + mins + "m " + secs + "s " + (past ? "ago" : "to go");
}

tick();
setInterval(tick, 1000);
