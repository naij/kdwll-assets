var Magix = require('magix')
var $ = require('jquery')

module.exports = Magix.View.extend({
  tmpl: '@setting.html',
  ctor: function() {
    this.observe(['type'])
  },
  render: function() {
    var me = this
    me.setView()
  }
})