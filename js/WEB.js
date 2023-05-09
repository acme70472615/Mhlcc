
document.addEventListener('DOMContentLoaded', function(){

    const A = document.querySelector('#A');
    A.addEventListener("targetFound", event => {
      console.log("targetA found");
      window.location.assign("https://www.youtube.com/watch?v=GJ4XRzxemCI");
    });
    const B = document.querySelector('#B');
    B.addEventListener("targetFound", event => {
      console.log("targetB found");
      window.location.assign("https://www.youtube.com/watch?v=vvePj3hroHE");
    });
    const C = document.querySelector('#C');
    C.addEventListener("targetFound", event => {
      console.log("targetC found");
      window.location.assign("https://www.youtube.com/watch?v=gQUYCqwSjdw");
    });
    const D = document.querySelector('#D');
    D.addEventListener("targetFound", event => {
      console.log("targetD found");
      window.location.assign("https://www.youtube.com/watch?v=YlU9O-TYkQU");
    });

});


AFRAME.registerComponent('mytarget', {
    init: function () {
        this.el.addEventListener('targetFound', event => {
            console.log("target found");
        });
        this.el.addEventListener('targetLost', event => {
            console.log("target lost");
        });
        //this.el.emit('targetFound');
    }
});