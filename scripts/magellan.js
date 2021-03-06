
"use strict";

var FeRdInAnd = function() {

var zdc = "\u2650 \u264F \u264E \u264D \u264C \u264B \u264A \u2649 \u2648 \u2653 \u2652 \u2651 ";

var aRay = zdc.split(" ");

var pnt = {
      j2: [2, 3, 6, 8,10],
      j3: [1, 4, 6, 8,10],
      j5: [1, 3, 7, 8,10],
      j6: [1, 3, 6, 9,10],
      k1: [0, 3, 6, 8,10],
      k2: [1, 2, 6, 8,10],
      k5: [1, 3, 6, 7,10],
      k6: [1, 3, 6, 8, 9],
      n0: [1, 3, 6, 8,10],
     j17: [0, 1, 3, 6, 8],
     j23: [2, 4, 6, 8,10],
     j25: [2, 3, 7, 8,10],
     j26: [2, 3, 6, 9,10],
     j36: [1, 4, 6, 9,10],
     j56: [1, 3, 7, 9,10],
     k12: [0, 2, 6, 8,10],
     k15: [0, 3, 6, 7,10],
     k25: [1, 2, 6, 7,10],
     k26: [1, 2, 6, 8, 9],
     k34: [1, 3, 4, 8,10],
     k56: [1, 3, 6, 7, 9],
    j236: [2, 4, 6, 9,10],
    j256: [2, 3, 7, 9,10],
    j2k5: [2, 3, 6, 7,10],
    j2k6: [2, 3, 6, 8, 9],
    j2y3: [3, 4, 6, 8,10],
    j3k5: [1, 4, 6, 7,10],
    j3k6: [1, 4, 6, 8, 9],
    j5y6: [1, 3, 8, 9,10],
    k125: [0, 2, 6, 7,10],
    k1j5: [0, 3, 7, 8,10],
    k1j6: [0, 3, 6, 9,10],
    k256: [1, 2, 6, 7, 9],
    k2j5: [1, 2, 7, 8,10],
    k2j6: [1, 2, 6, 9,10],
    k2x1: [0, 1, 6, 8,10],
    k6x5: [1, 3, 6, 7, 8],
    n167: [1, 2, 4, 7,10],
    n345: [0, 2, 3, 6, 9],
    n5y2: [1, 2, 5, 6, 9],
    n6x2: [2, 3, 7,10,11],
   j17k2: [0, 1, 2, 6, 8],
   j17y2: [1, 2, 3, 6, 8],
   j23k6: [2, 4, 6, 8, 9],
   j25y6: [2, 3, 8, 9,10],
   j26y3: [3, 4, 6, 9,10],
   j2k34: [2, 3, 4, 8,10],
   j2k56: [2, 3, 6, 7, 9],
   j34k6: [1, 5, 6, 8, 9],
   j56y7: [1, 3, 7,10,11],
   k12j5: [0, 2, 7, 8,10],
   k17j5: [3, 7, 8,10,11],
   k25x1: [0, 1, 6, 7,10],
   k26x5: [1, 2, 6, 7, 8],
   k2j56: [1, 2, 7, 9,10],
   k34x2: [1, 2, 3, 8,10],
   k56x4: [1, 3, 5, 6, 9],
   n25x6: [3, 4, 8, 9,10],
   n26y5: [0, 1, 6, 7, 8],
   n45y2: [1, 2, 4, 6, 9],
   n67x2: [0, 2, 3, 7,10],
  j136y7: [0, 1, 4, 6,10],
  j167y2: [1, 2, 3, 6, 9],
  j246y3: [3, 5, 6, 9,10],
  j26y34: [4, 5, 6, 9,10],
  j2k6x5: [2, 3, 6, 7, 8],
  j2k6y3: [3, 4, 6, 8, 9],
  j346y5: [1, 6, 7, 9,10],
  j3k5x4: [1, 4, 5, 6,10],
  k135x4: [0, 3, 4, 6,10],
  k157x6: [3, 6, 7, 9,10],
  k1j6y7: [0, 3, 6,10,11],
  k257x1: [1, 6, 7,10,11],
  k25x17: [0, 6, 7,10,11],
  k2j5x1: [0, 1, 7, 8,10],
  k2j5y6: [1, 2, 8, 9,10],
  k345x2: [1, 2, 3, 7,10],
  n167x4: [1, 2, 4, 6,10],
  n345y7: [0, 2, 3, 6,10],
 j2k56x4: [2, 3, 5, 6, 9],
 j3k56x4: [1, 4, 5, 6, 9],
 k1j56y7: [0, 3, 7,10,11],
 k2j56y7: [1, 2, 7,10,11]};

var ostrakon = document.createDocumentFragment();

for (var item in pnt) {

  var dl0 = document.createElement("dl"),
      dt0 = document.createElement("dt"),
      dd0 = document.createElement("dd"),
      dd1 = document.createElement("dd"),
      dd2 = document.createElement("dd"),
      dd3 = document.createElement("dd"),
      dd4 = document.createElement("dd"),
      dd5 = document.createElement("dd"),
      dd6 = document.createElement("dd");

      dl0.id = item;
      dl0.style.marginLeft = "15%";

      dt0.title = item;
      dt0.style.fontSize = "40px";
      dt0.style.color = "sienna";

  var etch = function(arr, oNum) {
    var i, tmp = [];
    for (i = 0; i < arr.length; i++) {
      tmp.push(arr[i]);
    }
    for (i = 0; i < oNum.length; i++) {
      tmp[oNum[i]] = "\u2015";
    }
    return tmp.join(" ");
  };

  var qp = etch(aRay, pnt[item]);

      dt0.textContent = item;
      dd0.textContent = qp.slice(10,24).concat(qp.slice( 0,10));
      dd1.textContent = qp.slice( 0,24).concat(qp.slice( 0, 0));
      dd2.textContent = qp.slice(14,24).concat(qp.slice( 0,14));
      dd3.textContent = qp.slice( 4,24).concat(qp.slice( 0, 4));
      dd4.textContent = qp.slice(18,24).concat(qp.slice( 0,18));
      dd5.textContent = qp.slice( 8,24).concat(qp.slice( 0, 8));
      dd6.textContent = qp.slice(22,24).concat(qp.slice( 0,22));

      dl0.appendChild(dt0);
      dl0.appendChild(dd0);
      dl0.appendChild(dd1);
      dl0.appendChild(dd2);
      dl0.appendChild(dd3);
      dl0.appendChild(dd4);
      dl0.appendChild(dd5);
      dl0.appendChild(dd6);

    ostrakon.appendChild(dl0);

  }

  document.body.appendChild(ostrakon);

}

