const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
const date = document.getElementById("date")

function ClockUpdate() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";
    let d = new Date().toDateString();

    if (h > 12) {
        h = h - 12
        am = "PM"
    }
    
    h = h<10 ? "0"+h : h
    m = m<10 ? "0"+m : m
    s = s<10 ? "0"+s : s
    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm.innerText = am;
    date.innerText = d;
    setTimeout(() => {
        ClockUpdate()
    }, 1000)
}

ClockUpdate()