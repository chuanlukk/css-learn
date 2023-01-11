var input = document.getElementById('trip');
var button = document.getElementById('submit-button');
// 定义一个变量，指向超时函数
var timeout = null;

button.addEventListener('click', function(e){
    e.preventDefault();
    // 用户提交时，取消等待的超时函数（如果有的话）
    clearTimeout(timeout);
    button.classList.add('is-loading');
    button.disabled = true;
    input.disabled = true;
    // 下面的代码可以是使用js提交表单数据
    // 一旦服务器响应，需要恢复表单输入并移除is-loading类
});

input.addEventListener('keyup', function(){
    clearTimeout(timeout);
    // 1s等待后，添加shake类
    // 添加该类后，按钮振动动画显示
    timeout = setTimeout(function(){
        button.classList.add('shake');
    }, 1000);
});
// 动画结束后移除shake类
button.addEventListener('animationend', function(){
    button.classList.remove('shake');
});