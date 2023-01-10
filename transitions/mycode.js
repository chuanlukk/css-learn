var helper_trans_a = function () {
    var toggle = document.getElementsByClassName('dropdown__toggle')[0];
    var dropdown = toggle.parentElement;
    // 点击按钮时，在按钮对应的容器上添加和删除is-open类
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        dropdown.classList.toggle('is-open');
    });
};
helper_trans_a();

var helper_trans_h = function () {
    var toggle = document.getElementsByClassName('dropdown__toggle')[1];
    var dropdown = toggle.parentElement;
    var drawer = document.getElementsByClassName('dropdown__drawer')[1];
    // 获取drawer的自动高度值
    var height = drawer.scrollHeight;
    // 点击按钮时，在按钮对应的容器上添加和删除is-open类
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        // 对toggle添加或移除is-open类
        dropdown.classList.toggle('is-open');
        // 如果是添加了is-open类（点击toggle打开菜单）
        if(dropdown.classList.contains('is-open')){
            drawer.style.setProperty('height', height + 'px');
        }else{//如果是关闭菜单
            drawer.style.setProperty('height', '0');
        }
    });
}
helper_trans_h();
// 某元素如果使用display: none隐藏起来，则该元素scrollHeight为0
// 遇到这种情况，可以先把display属性设置为block
// el.style.display = 'block';
// 然后获取到scrollHeight，最后重置display为none
// el.style.display = 'none';
