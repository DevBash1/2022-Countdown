function changeNumber(number, elem) {
    let test = elem;
    let newNumber = document.getElementById("number" + number);
    test.setAttribute("d", newNumber.getAttribute("d"));
    test.setAttribute("stroke", randomRGB());
    test.setAttribute("class", "animate");
    setTimeout(function() {
        test.setAttribute("class", "");
        test.setAttribute("d", newNumber.getAttribute("d"));
    }, 500)
}

function randomRGB() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

let end = new Date('01/01/23 12:00 AM');
let timer;

function showRemaining() {
    let now = new Date();
    let distance = end - now;
    let time = new Date((distance / 1000) * 1000).toISOString().substr(11, 8);
    if (distance > 0) {
        let times = time.split(":");
        times.forEach(function(each,i){
            let type = ["hour","mins","secs"];
            setTime(each,type[i]);
        })
    }else{
        let times = ["00","00","00"];
        times.forEach(function(each,i){
            let type = ["hour","mins","secs"];
            setTime(each,type[i]);
        })
        clearInterval(timer);
    }
}

let last = {

};

function setTime(time,type){
    let times = time.split("");
    if(last[type] != time){
        changeNumber(Number(times[0]),document.getElementById(type+"1"))
        changeNumber(Number(times[1]),document.getElementById(type+"2"))
        last[type] = time;
    }
}

timer = setInterval(showRemaining, 1000);
