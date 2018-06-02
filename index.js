define([
    'require',
    'lib',
    'jquery',
    'text!../view/index/page-a.html',
    'text!../view/home.html'
], function(require, lib, $,content,home) {
    'use strict';
    return {
        init: function (){
            $('#main').append(home)
            $('#content').append(content)
        },
    }
});