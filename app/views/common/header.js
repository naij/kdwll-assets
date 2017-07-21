var Magix = require('magix')
var $ = require('jquery')
var Dialog = require('app/mixins/dialog')
var Router = Magix.Router

module.exports = Magix.View.extend({
  tmpl: '@header.html',
  mixins: [Dialog],
  ctor: function() {
    this.observe(['type'], true)
  },
  render: function() {
    var me = this
    me.setView().then(function() {
      me.updateNav()
    })
  },
  updateNav: function () {
    var loc = Router.parse()
    var path = loc.path
    var $mainNav = $('.nav-wrap li')

    if (!path || path == '/') {
      return $mainNav.eq(0).addClass('active')
    }

    $mainNav.each(function (index, node) {
      node = $(node)
      var nodeHref = node.find('a').attr('href')
      $mainNav.removeClass('active')

      if (nodeHref == path) {
        node.addClass('active')
        return false
      }
    })
  },
  'search<click>': function(e) {
    var me = this
    // var suggest = me.getManaged('suggest')
    // var value = suggest.val()
    var value = 'q'
    var v = value && $.trim(value)
    v = v.substr(0, 150)
    v && me.to('/search?q=' + encodeURIComponent(v) + '&_t=' + (new Date()).getTime())
  },
  'login<click>': function() {
    this.mxDialog('app/views/common/login')
  }
})