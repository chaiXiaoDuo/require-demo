define([
    'require',
    'jquery'
], function(require, $) {
    'use strict';
    return {
        log: function (e){
            console.log('===============',e,'===============')
        },
        setCookie: function (name, value){
            var exp = new Date();
            exp.setTime(exp.getTime() + 7000 * 1000);
            document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
        },
        getCookie: function (name){
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg)) {
                    return unescape(arr[2]);
            } else { 
                return null; 
            }
        },
        clearCookie(){
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);  
            if(keys) {  
                for(let i = keys.length; i--;)  
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()  
            } 
        }
    }
});