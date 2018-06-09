// function Jquery(selector){
//     return new init (selector);
// }

// function init (selector){
//     let selectedItems = document.querySelectorAll(selector);
//     this.hide = function(){
//         for(let k of selectedItems){
//             k.style.display= "none"
//         }
       
//     }
//     this.show = function(){
//         for(let k of selectedItems){
//             k.style.display= "block"
//         }
//   }
// }

var opacity = 0;

function ntime() {
   if (opacity<1) {
      opacity += .1;
      setTimeout(function(){ntime()},100);
   }
   document.getElementById('about').style.opacity = opacity;
}

function myFunction() {
    var x = document.getElementById("div1");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.opacity = "0.5";
    } else {
        x.style.display = "none";
    }


    
    var x = document.getElementById("div2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    var x = document.getElementById("div3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



// let $ = Jquery;
