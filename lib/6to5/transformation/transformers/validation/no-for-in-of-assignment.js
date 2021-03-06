"use strict";

var t = require("../../../types");

exports.check = t.isFor;

exports.ForInStatement =
exports.ForOfStatement = function (node, parent, scope, file) {
  var left = node.left;
  if (t.isVariableDeclaration(left)) {
    var declar = left.declarations[0];
    if (declar.init) throw file.errorWithNode(declar, "No assignments allowed in for-in/of head");
  }
};
