import './style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const
    day = document.querySelector("#day"),
    hr = document.querySelector("#hr"),
    min = document.querySelector("#min"),
    sec = document.querySelector("#sec"),
    dDay = "1 Apr 2023";

function countDown() {
    const
        countDate = new Date(dDay),
        currentDate = new Date(),
        miniSeconds = (countDate - currentDate) / 1000,
        days = Math.floor(miniSeconds / 3600 / 24),
        hours = Math.floor(miniSeconds / 3600) % 24,
        minutes = Math.floor(miniSeconds / 60) % 60,
        seconds = Math.floor(miniSeconds) % 60;


    day.innerHTML = days;
    hr.innerHTML = addZero(hours);
    min.innerHTML = addZero(minutes);
    sec.innerHTML = addZero(seconds);
}

function addZero(time) {
    return time < 10 ? `0${time}` : time
}

countDown();
setInterval(() => {
    countDown();
}, 1000);