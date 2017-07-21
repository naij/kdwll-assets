var Magix = require('magix')

module.exports = Magix.View.extend({
  tmpl: '@sitenav.html',
  render: function() {
    var me = this
    me.setView()
  }
})