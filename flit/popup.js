// This code grabs the button from popup.html and requests the color value from storage.
// It then applies the color as the background of the button.
// Include a script tag to popup.js in popup.html.

let header = document.getElementById("header");
let t1 = document.getElementById("t1");
let tz1 = document.getElementById("tz1");
let t2 = document.getElementById("t2");
let tz2 = document.getElementById("tz2");

let setT1 = function () {
  t1.innerHTML = (function () {
    return (
      (new Date().getHours() >= 12 ? "🌚" : "🌝") +
      " " +
      new Date().toTimeString().split("(")[0].split(" ")[0] +
      " " +
      new Date().toLocaleDateString()
    );
  })();
};

setT1();
setInterval(setT1, 1000);
tz1.innerHTML = new Date().toTimeString().split("(")[1].slice(0, -1);

let setT2 = function () {
  t2.innerHTML = (function () {
    const offset = 8;
    let d = new Date();

    if (new Date().getUTCHours() + offset >= 24) d.setDate(d.getUTCDate() + 1);
    else d.setDate(d.getUTCDate());

    return (
      (new Date().getUTCHours() + offset >= 12 ? "🌚" : "🌝") +
      " " +
      (new Date().getUTCHours() + offset >= 24
        ? new Date().getUTCHours() + offset - 24
        : new Date().getUTCHours() + offset) +
      ":" +
      new Date().getUTCMinutes() +
      ":" +
      new Date().getUTCSeconds() +
      " " +
      (d.getMonth() + 1) +
      "/" +
      d.getDate() +
      "/" +
      d.getFullYear()
    );
  })();
};

setT2();
setInterval(setT2, 1000);
tz2.innerHTML = "🇨🇳 Beijing, China";
