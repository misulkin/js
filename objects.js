"use strict"
/////////////first task
document.getElementById('firBut').onclick = firstTask;

function firstTask() {
    let car = {
        brand: "toyota",
        model: "supra",
        generation: "A80",
        hp: "280",
        maxspeed: 244,
        avaragespeed: 180
    }

    let disc = (car) => {
        for (let key in car) {
            console.log(key);
            console.log(car[key]);
        }
    }

    disc(car);

    console.log(car.avaragespeed);


    let speedchecker = (car) => {
        let length = prompt('Сколько км едем?');
        let hours = length / car.avaragespeed;
        let time = hours;
        while (hours > 3) {
            if (hours <= 4) {
                break;
            }
            hours = hours - 4;
            time++;
        }
        console.log(`Vashe vremya ${Math.trunc(time)}`);
        alert(`Vashe vremya ${Math.trunc(time)}`);
    }

    speedchecker(car);
}
/////////////////////second task
document.getElementById('secBut').onclick = secTask;

function secTask() {

    let doubleNumsFirst = {
        firstnum: Number(prompt('Числитель первой дроби')),
        secnum: Number(prompt('Знаменатель первой дроби')),

    }
    let doubleNumsSecond = {
        firstnum: Number(prompt('Числитель второй дроби')),
        secnum: Number(prompt('Знаменатель второй дроби')),
    }
    console.log(doubleNumsFirst);
    console.log(doubleNumsSecond);

    /////////////////////////////////////////

    var gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    }

    function uprost(chisl, znam) {

        for (let checker = 100; checker < 1; checker--) {
            if (chisl % checker == 0 && znam % checker == 0) {
                chisl = chisl / checker;
                znam = znam / checker;
            }
        }
    }
    /////////////////////////////
    function plusDrob() {
        const resultSecnum = doubleNumsFirst.secnum * doubleNumsSecond.secnum;
        const resultFirstnum =
            doubleNumsFirst.firstnum * doubleNumsSecond.secnum +
            doubleNumsSecond.firstnum * doubleNumsFirst.secnum;
        const drobSlog = {
            firstnum: resultFirstnum / gcd(resultFirstnum, resultSecnum),
            secnum: resultSecnum / gcd(resultFirstnum, resultSecnum),
        };
        console.log(drobSlog);
    }
    plusDrob();

}

document.getElementById('thiBut').onclick = thirdTask;

function thirdTask() {
    let hourcheck = Number(prompt("Введите часы"));
    let minetcheck = Number(prompt("Введите минуты"));
    let secondcheck = Number(prompt("Введитк секунды"));

    function converter() {

        if (secondcheck > 59) {
            while (secondcheck > 59) {
                secondcheck = secondcheck - 60;
                minetcheck++;
            }
        }
        if (minetcheck > 59) {
            while (minetcheck > 59) {
                minetcheck = minetcheck - 60;
                hourcheck++;
            }
        }
        if (hourcheck > 23) {
            while (hourcheck > 23) {
                hourcheck = hourcheck - 24;
            }
        }
    }
    converter();
    let clocks = {
        hours: hourcheck,
        minets: minetcheck,
        seconds: secondcheck,
    }
    console.log(clocks);

    document.getElementById('secchanger').onclick = addSec;

    function addSec(secondcheck) {

        secondcheck = secondcheck + Number(prompt("Введитк секунды"));
        converter();
        console.log(clocks);
        return
    }
    document.getElementById('minchanger').onclick = addMin;

    function addMin(minetcheck) {

        minetcheck = minetcheck + Number(prompt("Введитк минуты"));
        converter();
        return
    }
    document.getElementById('hourchanger').onclick = addHour;

    function addHour(hourcheck) {

        hourcheck = hourcheck + Number(prompt("Введитк часы"));
        converter();
        return
    }
    document.getElementById('timer').onclick = timer;

    function timer() {

        console.log(clocks);

    }
}