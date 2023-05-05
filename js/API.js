AFRAME.registerComponent('ar_scene', {
    init: function () {
        var sceneEl = document.querySelector('a-scene');
        var uiEl = sceneEl.querySelector('#UI_000');
        //var uiEl = sceneEl.querySelector('#UI_001');

        uiEl.addEventListener('mouseenter', function () {
            //console.log(evt.detail.intersection.point);
            _color('blue');
        });

        uiEl.addEventListener('mouseleave', function () {
            //console.log(evt.detail.intersection.point);
            _color('red');
        });

        const _color = (x) => {
            //console.log(x);
            uiEl.setAttribute('color', x);
        };
    }
});