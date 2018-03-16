/**
 * Created by 872458899@qq.com on 2017/12/23.
 */
function createStyle() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    var nod = document.createElement('style'),
        str = '.step{width:'+parseInt(width*0.98)+'px;height:'+parseInt(height*0.98)+'px;}';
    console.log(width);
    nod.type='text/css';
    nod.innerHTML = str;
    document.getElementsByTagName('head')[0].appendChild(nod);
}
createStyle();