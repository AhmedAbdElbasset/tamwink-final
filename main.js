let plus = document.querySelectorAll(".layer");
let basket = document.getElementById("basket");
let plus1 = plus.forEach(function (ele) {
    let count = 0;
    ele.querySelector(`.click`).onclick = function () {
        // let count=0;
        count += 1;
        ele.querySelector(` .count`).innerHTML = count;
        if (count >= 10) {
            ele.querySelector(".limit").style.display = "flex";
            ele.querySelector(`.click`).style.display = "none";
        }
        if (count > 0) {
            ele.querySelector(`.click-`).style.display = "flex";
            
        }
    }
    ele.querySelector(`.click-`).onclick = function () {
        count -= 1;
        ele.querySelector(` .count`).innerHTML = count;
        if (count <= 0) {
            ele.querySelector(` .count`).innerHTML = 0;
            ele.querySelector(`.click-`).style.display = "none";
            count = 0;
            
        }
        if (count < 10) {
            ele.querySelector(".limit").style.display = "none";
            ele.querySelector(`.click`).style.display = "flex";
        }
        console.log(ele.querySelector(` .count`).innerHTML)
    }
});



