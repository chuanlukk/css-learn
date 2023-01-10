var html = document.documentElement;
var script = document.createElement(script);
script.src = "/node_modules/fontfaceobserver.js";
script.async = true;

script.onload = function () {
    // 为Roboto和Sansita字体创建观察器
    var roboto = new FontFaceObserver("Roboto");
    var sansita = new FontFaceObserver("Sansita");
    var timeout = 2000;

    Promise.all([
        roboto.load(null, timeout),
        sansita.load(null, timeout)
    ]).then(function(){
        // 两种字体都加载完成以后，为<html>元素添加fonts-loaded类
        html.classList.add("fonts-loaded");
    }).catch(function(e){// 如果加载失败或超时
        // 如果字体加载失败，为<html>元素添加fonts-failed类
        html.classList.add("fonts-failed");
    });
};
document.head.appendChild(script);
// 当页面加载完成时，脚本会为页面要么添加fonts-loaded类，要么添加fonts-failed类
// 关于在开发者工具中的网络设置，查阅书籍Paga-305

