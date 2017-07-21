var Magix = require('magix')
var $ = require('jquery')
var Dialog = require('app/mixins/dialog')
var Router = Magix.Router
var pathMap = {
  '/pages/article/list': {
    param: 'type'
  },
  '/pages/article/detail': {
    path: '/pages/article/list',
    param: 'type'
  }
}

module.exports = Magix.View.extend({
  tmpl: '@header_manage.html',
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
    var params = loc.params
    var siteNav = $('.site-nav li')

    if (!path) {
      return siteNav[0].addClass('selected')
    }

    var rule = pathMap[path]

    siteNav.each(function (index, node) {
      node = $(node)
      var nodeHref = node.find('a').attr('href')
      var nodeSelectValue = node.find('a').attr('selectValue')
      siteNav.removeClass('selected')

      if (nodeHref == path) {
        node.addClass('selected')
        return false
      }

      if (nodeHref.indexOf(path) != -1) {
        if (rule && rule.param && params[rule.param] == nodeSelectValue) {
          node.addClass('selected')
          return false
        }
      }

      if (rule && rule.path && nodeHref.indexOf(rule.path) != -1) {
        if (rule && rule.param && params[rule.param] == nodeSelectValue) {
          node.addClass('selected')
          return false
        }
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