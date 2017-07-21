var Magix = require('magix')
var $ = require('jquery')
var Dialog = require('app/mixins/dialog')

$('body').on('click', '[data-login]', function (e) {
  if (!Magix.isLogin) {
    e && e.preventDefault()
    e && e.stopImmediatePropagation()
    $('.login-trigger').click()
  }
})