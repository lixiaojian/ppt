/**
 * Created by 872458899@qq.com on 2017/12/23.
 */
function createStyle() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    var nod = document.createElement('style'),
        str = '.step{width:'+parseInt(width*0.98)+'px;height:'+parseInt(height*0.96)+'px;}';
    console.log(width);
    nod.type='text/css';
    if(nod.styleSheet){         //ie下
        nod.styleSheet.cssText = str;
    } else {
        nod.innerHTML = str;       //或者写成 nod.appendChild(document.createTextNode(str))
    }
    document.getElementsByTagName('head')[0].appendChild(nod);
}
createStyle();