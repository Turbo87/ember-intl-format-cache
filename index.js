/* jshint node: true */
'use strict';

const path = require('path');
const funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const UnwatchedDir = require('broccoli-source').UnwatchedDir;

const sourcePath = path.join(path.dirname(require.resolve('intl-format-cache')), 'src');

module.exports = {
  name: 'intl-format-cache',

  treeForAddon(tree) {
    let formatCacheTree = funnel(new UnwatchedDir(sourcePath));
    let trees = mergeTrees([formatCacheTree, tree], { overwrite: true });

    return this._super.treeForAddon.call(this, trees);
  }
};
