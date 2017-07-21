var $ = require('jquery')

var routes = function() {
  var map = {
    'app/views/layout/default': [
      '/',
      '/search',
      '/item/detail',
      '/channel/haohuo',
      '/channel/9kuai9',
      '/channel/baokuan'
    ],
    'app/views/layout/act': [
      '/act'
    ],
    'app/views/layout/manage': [
      '/user/setting',
      '/user/favorites'
    ]
  }

  var s = {}
  $.each(map, function(k, item) {
    $.each(item, function(i, v) {
      s[v] = k
    })
  })
  return s
}()

return {
  defaultPath: '/',
  defaultView: 'app/views/layout/default',
  unmatchView: 'app/views/common/404',
  routes: routes,
  exts: [
    'app/exts',
    'app/vclick',
    'app/login',
    'app/plugins/index'
  ]
}