var controller = new ScrollMagic.Controller();

window.addEventListener ('load',function(){
    
var pinIntro = new ScrollMagic.Scene({ 
    triggerElement: '#intro',
    duration: '20%',
    triggerHook: 0.1
})
.setPin('#intro')
.addTo(controller);

var pinMain = new ScrollMagic.Scene({
    triggerElement: '#main',
    triggerHook: 0.5,
})
.setPin('#intro', {pushFollowers: false})
.addTo(controller);

}, false);