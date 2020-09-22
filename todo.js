window.addEventListener('load', _currentTime);

const currentDate = document.querySelector("[data-date]");
const userInput = document.querySelector("#userInput");
const addButton = document.querySelector(".svg-icon")

addButton.addEventListener('click', () => {
    if (userInput.value != "") {
        createItem();
        clear();
    }
    else {
      prompt("You have not entered a to-do item");
    }
})

function createItem() {
    let newItem = document.createElement("div");
    newItem.classList.add("listItem");
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.classList.add("check")
    let pTag = document.createElement("p");
    let icons = document.createElement("div");
    icons.classList.add("icons")
    let edit = document.createElement("img");
    edit.src = "https://img.icons8.com/pastel-glyph/65/000000/edit.png";
    edit.classList.add("edit");
    let del = document.createElement("img");
    del.src = "https://img.icons8.com/cotton/64/000000/delete-sign--v2.png";
    del.classList.add("delete");
    pTagNode = document.createTextNode(userInput.value);
    icons.appendChild(edit);
    icons.appendChild(del);
    pTag.appendChild(pTagNode);
    newItem.appendChild(check);
    newItem.appendChild(pTag);
    newItem.appendChild(icons);
    let allItems = document.querySelector(".listItems").appendChild(newItem);
    del.addEventListener('click', () => {
        newItem.parentNode.removeChild(newItem);
    })

    edit.addEventListener('click', () => {
        pTag.setAttribute("contentEditable", "true");
    })
}

function clear() {
    userInput.value = "";
}

function _currentTime() {
    const currentDay = new Date();
    this.day = currentDay.getDate();
    this.month = currentDay.getMonth() + 1;
    this.year = currentDay.getFullYear()
    this.hour = currentDay.getHours();
    this.min = currentDay.getMinutes();
    this.sec = currentDay.getSeconds();
    this.meridian = "AM";

    if (this.min < 10) {
        this.min = `0${this.min}`;
    }; 
    if (this.sec < 10) {
        this.sec = `0${this.sec}`;
    };
    if (this.month < 10) {
        this.month = `0${this.month}`;
    };
    if (this.hour >= 12) {
        this.meridian = "PM";
    }
    if (this.hour > 12) {
        this.hour -= 12;
    }
    if (this.hour < 10) {
        this.hour = `0${this.hour}`;
    };
    let displayTime = `${this.day}/${this.month}/${this.year}  ${this.hour}:${this.min}:${this.sec} ${this.meridian}`
    currentDate.innerHTML = displayTime;
}

setInterval(_currentTime, 1000);