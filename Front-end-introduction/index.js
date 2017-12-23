/**
 * Created by 872458899@qq.com on 2017/12/23.
 */
;(function () {
    var currentStep = '';
    impress().init();
    var rootElement = document.getElementById( "impress" );
    rootElement.addEventListener( "impress:stepenter", function(event) {
        currentStep = event.target;
    });
    rootElement.addEventListener( "impress:stepleave", function(event) {
        //离开时样式还原
        var id = event.target.id;
        if(id == 'cover'){
            event.target.className = 'step wellcome';
        }else if(id == 'thanks'){
            event.target.className = 'step ths';
        }else{
            event.target.className = 'step content-item st-1';
            currentStep.setAttribute('data-index',1);
        }
    });

    var oldKeyUp = document.onkeyup;
    var isList = ['epoch_list','browser_war','ie_version'];
    document.onkeyup = function (e) {
        //如果window.event对象存在，就以此事件对象为准
        if (window.event){
            e = window.event;
        }
        oldKeyUp && oldKeyUp(e)
        if(!currentStep){
            return;
        }
        var code = e.charCode || e.keyCode;
        var id = currentStep.id;
        if(isList.indexOf(id)>-1){
            //回车事件
            if (code == 13) {
                var curr = +currentStep.getAttribute('data-index') || 0;
                var max = +currentStep.getAttribute('data-max') || 0;
                if(curr >= max){
                    return;
                }
                curr++;
                currentStep.classList.add('st-'+curr);
                currentStep.setAttribute('data-index',curr);
            }else if(code == 18){
                //alt 事件
                var curr = +currentStep.getAttribute('data-index') || 0;
                if(curr >1 ){
                    currentStep.classList.remove('st-'+curr);
                    currentStep.setAttribute('data-index',--curr);
                }
            }
        }
    }

}());