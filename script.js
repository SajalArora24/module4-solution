(function () {

var names = ["Yaakov", "Jack", "Jene", "Jordan", "Paul", "Henry", "Luorl", "Paula", "Laura", "Jimmy"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();



