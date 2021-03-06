// Generated by LiveScript 1.2.0
var x$;
x$ = angular.module('chart', []);
x$.controller('main', ['$scope', '$http'].concat(function($scope, $http){
  var data, newarc, sum, i$, to$, i, path, color, arc;
  data = [["Iceland", 14.1], ["Egypt", 30.4], ["Syria", 27.6], ["Malaysia", 17.5], ["Japan", 8.3], ["USA", 12.7], ["Taiwan", 8.5], ["India", 21.8], ["Germany", 8.1]];
  newarc = function(start, end){
    var r1, r2, x1, y1, x2, y2, x3, y3, x4, y4;
    r1 = 180;
    r2 = 200;
    x1 = Math.cos(start) * r2;
    y1 = Math.sin(start) * r2;
    x2 = Math.cos(end) * r2;
    y2 = Math.sin(end) * r2;
    x3 = Math.cos(end) * r1;
    y3 = Math.sin(end) * r1;
    x4 = Math.cos(start) * r1;
    y4 = Math.sin(start) * r1;
    return "M" + x1 + " " + y1 + " L" + x2 + " " + y2 + " L" + x3 + " " + y3 + " L" + x4 + " " + y4 + " Z";
  };
  sum = 0;
  for (i$ = 0, to$ = data.length; i$ < to$; ++i$) {
    i = i$;
    data[i].push(sum);
    sum += data[i][1];
  }
  path = d3.select("svg").selectAll("path").data(data).enter().append('path');
  color = d3.scale.category20();

  path.attr({
    transform: "translate(400 200)",
    d: function(d, i){
      var x1, x2, y1, y2;
      x1 = -300;
      x2 = d[1] * 22 - 300;
      y1 = i * 40 - 200;
      y2 = i * 40 + 30 - 200;
      return "M" + x1 + " " + y1 + " L" + x2 + " " + y1 + " L" + x2 + " " + y2 + " L" + x1 + " " + y2 + " Z";
    },
    fill: function(d, i){
      return color(d[0]);
    }
  });

  arc = d3.svg.arc().innerRadius(160).outerRadius(180);

  function do1() {
    path.transition().duration(700).attr({
      transform: "translate(400 200)",
      d: function(d, i){
        var x1, x2, y1, y2;
        x1 = -300;
        x2 = d[1] * 22 - 300;
        y1 = i * 40 - 200;
        y2 = i * 40 + 30 - 200;
        return "M" + x1 + " " + y1 + " L" + x2 + " " + y1 + " L" + x2 + " " + y2 + " L" + x1 + " " + y2 + " Z";
      },
      fill: function(d, i){
        return color(d[0]);
      }
    });
  }
  function do2() {
    path.transition().duration(700).attr({
      transform: "translate(400 200)",
      d: function(d, i){
        return newarc(6.28 * d[2] / sum, 6.28 * (d[2] + d[1]) / sum);
      }
    });
  }
  var cur = 0;
  setInterval(function() {
    cur = 1 - cur;
    if(cur==1) { do2(); }
    else { do1(); }
  }, 1200);
}));
