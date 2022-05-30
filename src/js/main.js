"use strict";
const sectionAlerts = document.querySelector("#alerts")
const btnDesktop = document.querySelector(".btn-desktop");
const closeBtnAlert = document.querySelector(".btn-alert");
const backdrop = document.querySelector(".backdrop");
const resetCounterButton = document.querySelector(".btn-reset-counter");
const alertInformationCountCick = document.querySelector(".sumClick");


let countClickedButton = localStorage.getItem("sumClickedButton");

const countClick = ()=>{
    countClickedButton = localStorage.getItem("sumClickedButton");
    countClickedButton++;
};

const showResetCounterButtonHandler = ()=>{
    if(countClickedButton >= 5){
    resetCounterButton.classList.remove("d-none");
    }else{
        resetCounterButton.classList.add("d-none");
    };
};

const btnDesktopOpenAlert = ()=>{
    sectionAlerts.classList.remove("d-none");
    countClick();
    localStorage.setItem("sumClickedButton", `${countClickedButton}`);
    alertInformationCountCick.textContent = `${countClickedButton}`
    showResetCounterButtonHandler();    
};

const resetCounter = ()=>{
    localStorage.setItem("sumClickedButton", "0");
    alertInformationCountCick.textContent = `0`
    resetCounterButton.classList.add("d-none");
};

const closeAlert = ()=>{
    sectionAlerts.classList.add("d-none");
};

const backdropCloseAlertHandler = (event)=>{
    if(event.target === backdrop){
        closeAlert()
    }else{
        return;
    }
};
const closeBtnAlertHandler = (event)=>{
        closeAlert()
};




btnDesktop.addEventListener("click", btnDesktopOpenAlert)
closeBtnAlert.addEventListener("click", closeBtnAlertHandler)
backdrop.addEventListener("click", backdropCloseAlertHandler)
resetCounterButton.addEventListener("click", resetCounter)