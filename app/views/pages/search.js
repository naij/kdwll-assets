var Magix = require('magix')

module.exports = Magix.View.extend({
  tmpl: '@search.html',
  ctor: function() {
    this.observe(['type'])
  },
  render: function() {
    var me = this
    var type = me.param('type') || 'f2e'

    // me.request().all([{
    //   name: 'article_list',
    //   params: {
    //     type: type
    //   }
    // }], function(e, MesModel) {
    //   var data = MesModel.get('data')

    //   me.data = {
    //     list: data
    //   }
      me.setView()
    // })
  },
  'pageChange<change>': function(e) {
    this.to({page: e.state.page})
  }
})