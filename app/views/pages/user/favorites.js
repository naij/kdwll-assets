var Magix = require('magix')
var $ = require('jquery')

module.exports = Magix.View.extend({
  tmpl: '@favorites.html',
  ctor: function() {
    this.observe(['type'])
  },
  render: function() {
    var me = this
    me.setView()
  },
  'pageChange<change>': function(e) {
    this.to({page: e.state.page})
  }
})