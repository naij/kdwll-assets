var Magix = require('magix')

module.exports = Magix.View.extend({
  tmpl: '@login.html',
  render: function() {
    var me = this
    me.setView()
  }
})