var Magix = require('magix')
var $ = require('jquery')

module.exports = Magix.View.extend({
  tmpl: '@act.html',
  render: function() {
    var me = this
    var id = me.param('id')

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
  }
})