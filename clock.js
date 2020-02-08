const clock = document.querySelector("#clock");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    clock.innerHTML = `
                        ${hours<10?`0${hours}`:`${hours}`}:
                        ${min<10?`0${min}`:`${min}`}:
                        ${sec<10?`0${sec}`:`${sec}`}
                        `;

    setTimeout(getTime, 1000);
}

function init(){
    getTime();
    //setInterval(getTime, 1000);
}

init();
