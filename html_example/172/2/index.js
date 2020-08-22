// Generated by LiveScript 1.2.0
var x$;
x$ = angular.module('chart', []);
x$.controller('main', ['$scope', '$http'].concat(function($scope, $http){
  var data, newarc, sum, i$, to$, i, path, color, do1, do2;
  data = [["Iceland", 14.1], ["Egypt", 30.4], ["Syria", 27.6], ["Malaysia", 17.5], ["Japan", 8.3], ["USA", 12.7], ["Taiwan", 8.5], ["India", 21.8], ["Germany", 8.1]];
  newarc = function(start, end, flat){
    var r1, r2, x1, xm1, y1, ym1, x2, xm2, y2, ym2, x3, xm3, y3, ym3, x4, xm4, y4, ym4, len1, len2;
    flat == null && (flat = false);
    r1 = 160;
    r2 = 180;
    x1 = xm1 = Math.cos(start) * r2;
    y1 = ym1 = Math.sin(start) * r2;
    x2 = xm2 = Math.cos(end) * r2;
    y2 = ym2 = Math.sin(end) * r2;
    x3 = xm3 = Math.cos(end) * r1;
    y3 = ym3 = Math.sin(end) * r1;
    x4 = xm4 = Math.cos(start) * r1;
    y4 = ym4 = Math.sin(start) * r1;
    len1 = Math.pow(r1, 2) / Math.sqrt(Math.pow(r1, 2) - (Math.pow(x3 - x4, 2) + Math.pow(y3 - y4, 2)) / 4);
    len2 = Math.pow(r2, 2) / Math.sqrt(Math.pow(r2, 2) - (Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) / 4);
    len2 = (len2 - r2) * 0.2 + r2;
    len1 = (len1 - r1) * 0.2 + r1;
    if (!flat) {
      xm1 = Math.cos((start * 2 + end) / 3) * len2;
      ym1 = Math.sin((start * 2 + end) / 3) * len2;
      xm2 = Math.cos((start + end * 2) / 3) * len2;
      ym2 = Math.sin((start + end * 2) / 3) * len2;
      xm3 = Math.cos((start + end * 2) / 3) * len1;
      ym3 = Math.sin((start + end * 2) / 3) * len1;
      xm4 = Math.cos((start * 2 + end) / 3) * len1;
      ym4 = Math.sin((start * 2 + end) / 3) * len1;
    }
    return "M" + x1 + " " + y1 + " C" + xm1 + " " + ym1 + " " + xm2 + " " + ym2 + " " + x2 + " " + y2 + " L" + x3 + " " + y3 + " C" + xm3 + " " + ym3 + " " + xm4 + " " + ym4 + " " + x4 + " " + y4 + " Z";
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
      return "M" + x1 + " " + y1 + " C" + x1 + " " + y1 + " " + x2 + " " + y1 + " " + x2 + " " + y1 + " L" + x2 + " " + y2 + " C" + x2 + " " + y2 + " " + x1 + " " + y2 + " " + x1 + " " + y2 + " Z";
    },
    fill: function(d, i){
      return color(d[0]);
    }
  });
  do1 = function(){
    return path.transition().duration(500).attr({
      transform: "translate(400 200)",
      d: function(d, i){
        var x1, x2, y1, y2;
        x1 = -300;
        x2 = d[1] * 22 - 300;
        y1 = i * 40 - 200;
        y2 = i * 40 + 30 - 200;
        return "M" + x1 + " " + y1 + " C" + x1 + " " + y1 + " " + x2 + " " + y1 + " " + x2 + " " + y1 + " L" + x2 + " " + y2 + " C" + x2 + " " + y2 + " " + x1 + " " + y2 + " " + x1 + " " + y2 + " Z";
      },
      fill: function(d, i){
        return color(d[0]);
      }
    });
  };
  do2 = function(){
    return path.transition().duration(500).attr({
      transform: "translate(400 200)",
      d: function(d, i){
        return newarc(6.28 * d[2] / sum, 6.28 * (d[2] + d[1]) / sum, false);
      }
    });
  };
  do2();
  $scope.state = 1;
  return $scope.morph = function(){
    $scope.state = 1 - $scope.state;
    if ($scope.state) {
      return do2();
    } else {
      return do1();
    }
  };
}));