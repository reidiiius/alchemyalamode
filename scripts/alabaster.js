
(function() {

var obv = [
[1,0,1,0,1,0,1,1,0,1,0,1,1],
[1,0,1,0,0,1,1,1,0,1,0,1,1],
[1,0,1,0,1,1,1,0,0,1,0,1,1],
[1,0,0,0,1,1,1,1,0,1,0,1,1],
[1,0,1,0,1,1,1,1,0,0,0,1,1],
[1,0,1,0,1,0,1,1,0,1,1,0,1],
[0,0,1,0,0,1,1,1,0,1,1,1,0],
[1,0,1,0,1,1,1,0,0,0,1,1,1],
[1,0,0,0,1,1,1,0,0,1,1,1,1],
[1,0,0,0,1,1,1,1,0,0,1,1,1],
[1,0,1,1,0,0,1,1,0,1,0,1,1],
[1,0,1,1,0,0,1,1,0,1,1,0,1],
[1,0,0,1,0,1,1,1,0,1,0,1,1],
[1,0,1,1,1,0,1,0,0,1,1,0,1],
[0,0,1,1,0,1,1,1,0,1,0,1,0],
[1,0,1,1,1,0,1,1,0,0,1,0,1],
[0,0,1,1,1,0,1,1,0,1,1,0,0],
[1,0,1,1,0,1,1,1,0,0,0,1,1],
[0,0,1,1,0,1,1,1,1,0,0,1,0],
[1,0,0,1,0,0,1,1,1,1,0,1,1],
[1,0,1,1,0,0,1,0,1,1,0,1,1],
[1,0,1,1,0,1,1,0,1,0,0,1,1],
[1,0,1,0,1,0,1,1,1,0,0,1,1],
[1,0,1,1,0,0,1,1,1,0,0,1,1],
[1,0,1,1,0,0,1,1,1,0,1,0,1],
[1,0,1,0,1,0,1,1,1,0,1,0,1],
[1,0,1,0,0,1,1,1,1,0,1,0,1],
[1,0,1,0,1,0,1,1,1,1,0,0,1],
[1,0,1,0,0,1,1,1,1,0,0,1,1],
[1,0,1,1,0,0,1,1,1,1,0,0,1],
[1,0,0,1,0,1,1,1,1,0,0,1,1],
[0,0,1,1,0,0,1,1,1,1,0,1,0],
[0,0,1,1,0,0,1,1,1,1,1,0,0],
[1,0,0,0,1,1,1,1,1,0,0,1,1],
[1,0,1,0,0,1,1,1,1,1,0,0,1],
[1,0,1,0,0,1,1,1,0,1,1,0,1],
[1,0,1,1,0,1,1,1,0,0,1,0,1],
[0,0,1,1,0,1,1,1,0,1,1,0,0],
[1,0,1,1,0,0,1,1,0,0,1,1,1],
[0,0,1,1,0,1,1,1,0,0,1,1,0],
[1,0,1,0,0,1,1,1,0,0,1,1,1],
[1,0,0,1,0,1,1,1,0,0,1,1,1]
];

var rev = [
[1,0,1,0,1,0,1,1,0,1,0,1,1],
[1,1,0,0,1,0,1,1,0,1,0,1,1],
[1,1,1,0,1,0,1,1,0,1,0,0,1],
[1,1,1,0,0,0,1,1,0,1,0,1,1],
[1,1,1,0,1,0,1,1,0,0,0,1,1],
[1,0,1,0,1,0,1,0,1,1,0,1,1],
[1,1,0,0,1,0,0,1,1,1,0,1,1],
[1,1,1,0,1,0,1,1,1,0,0,0,1],
[1,1,1,0,0,0,1,1,1,1,0,0,1],
[1,1,1,0,0,0,1,1,1,0,0,1,1],
[1,0,0,1,1,0,1,1,0,1,0,1,1],
[1,0,0,1,1,0,1,0,1,1,0,1,1],
[1,1,0,1,0,0,1,1,0,1,0,1,1],
[1,0,1,1,1,0,1,0,1,1,0,0,1],
[1,1,0,1,1,0,0,1,0,1,0,1,1],
[1,0,1,1,1,0,1,0,1,0,0,1,1],
[1,0,1,1,1,0,0,0,1,1,0,1,1],
[1,1,0,1,1,0,1,1,0,0,0,1,1],
[1,1,0,1,1,0,0,1,0,0,1,1,1],
[1,0,0,1,0,0,1,1,0,1,1,1,1],
[1,0,0,1,1,0,1,1,0,1,1,0,1],
[1,1,0,1,1,0,1,1,0,0,1,0,1],
[1,0,1,0,1,0,1,1,0,0,1,1,1],
[1,0,0,1,1,0,1,1,0,0,1,1,1],
[1,0,0,1,1,0,1,0,1,0,1,1,1],
[1,0,1,0,1,0,1,0,1,0,1,1,1],
[1,1,0,0,1,0,1,0,1,0,1,1,1],
[1,0,1,0,1,0,1,0,0,1,1,1,1],
[1,1,0,0,1,0,1,1,0,0,1,1,1],
[1,0,0,1,1,0,1,0,0,1,1,1,1],
[1,1,0,1,0,0,1,1,0,0,1,1,1],
[1,0,0,1,1,0,0,1,0,1,1,1,1],
[1,0,0,1,1,0,0,0,1,1,1,1,1],
[1,1,1,0,0,0,1,1,0,0,1,1,1],
[1,1,0,0,1,0,1,0,0,1,1,1,1],
[1,1,0,0,1,0,1,0,1,1,0,1,1],
[1,1,0,1,1,0,1,0,1,0,0,1,1],
[1,1,0,1,1,0,0,0,1,1,0,1,1],
[1,0,0,1,1,0,1,1,1,0,0,1,1],
[1,1,0,1,1,0,0,1,1,0,0,1,1],
[1,1,0,0,1,0,1,1,1,0,0,1,1],
[1,1,0,1,0,0,1,1,1,0,0,1,1]
];

var wings = [obv, rev];

for (var u = 0; u < wings.length; u++) {

  for (var m = 0; m < wings[u].length; m++) {

    var axis = [10,40,70,100,130,160,190,220,250,280,310,340,370];

    var flip = wings[u];

    var symArr = flip[m];

    var slicat = [
      symArr,
      symArr.slice( 7,12).concat(symArr.slice( 0, 8)),
      symArr.slice( 2,12).concat(symArr.slice( 0, 3)),
      symArr.slice( 9,12).concat(symArr.slice( 0,10)),
      symArr.slice( 4,12).concat(symArr.slice( 0, 5)),
      symArr.slice(11,12).concat(symArr.slice( 0,12)),
      symArr.slice( 6,12).concat(symArr.slice( 0, 7))
    ];

    document.writeln("<div><svg width=\'420\' height=\'240\'>");
    for (var h = 0; h < slicat.length; h++) {
      var duo = slicat[h];
      document.writeln("<g>");
        for (var i = 0; i < slicat[0].length; i++) {
          document.writeln("<use y=\'" + axis[h] + "\' x=\'" +
          axis[i] + "\' xlink:href=\'#sqr_" + duo[i] + "\'><\/use>");
        }
      document.writeln("<\/g>");
    }
    document.writeln("<\/svg></div>");
  }
}
})();

