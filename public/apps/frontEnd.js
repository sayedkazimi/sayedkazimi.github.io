"use strict";
import Math_Game from "./math-game.js";
const asideWrapper = document.getElementById("aside-wrapper");
const mainAside = document.querySelector(".main-aside");
const menu = document.getElementById("menu");
const welcomeParagraph = document.getElementById("welcome-paragraph");
const mainNav = document.querySelector(".main-nav");

const cY = new Date().getFullYear();
/* 
    for displaying and non-displaying the elements
*/
let displaying = false;

function toggleDisplay (getElement)
{
    displaying = !displaying;
    if (displaying)
    {
        getElement.style.display = "flex";
    } else
    {
        getElement.style.display = "none";
    }
}
menu.addEventListener("click", function ()
{
    asideWrapper.style.display = "initial";
});
// close the menu
function closeMenu_ ()
{
    asideWrapper.style.display = "none";
};
/* 
    for welcome paragraph
*/
let left = 90, originalText = welcomeParagraph.innerText, newText = "", x = 0;
function moveParagraph ()
{
    left = left - 0.15;
    welcomeParagraph.style.left = `${left}vw`;
    if (welcomeParagraph.offsetLeft < 0)
    {
        if (originalText.length > newText.length)
        {
            newText += originalText[x]; x++;
        }
    }

    if (-welcomeParagraph.offsetLeft >= welcomeParagraph.offsetWidth)
    {
        x = 0; newText = ""; left = 90;
    }
}
setInterval(moveParagraph, 15);

// for the showcase

const threedSection = document.querySelector("section.transform-3d");
let optionsArray = [
    "rotate(360deg)",
    "rotateX(360deg)",
    "rotateY(360deg)",
    "rotateZ(360deg)",
    "rotate3d(1, 1, 1, 90deg)",
    "scale(1.5)",
    "scaleX(1.5)",
    "scaleY(1.5)",
    "scaleZ(1.5)",
    "scale3d(1, 1.5, 1.5)",
    "skew(17deg, 13deg)",
    "skewX(17deg)",
    "skewY(17deg)",
    "translate(50px, 50px)",
    "translateX(50px)",
    "translateY(50px)",
    "translateZ(50px)",
    "translate3d(50px, 50px, 50px)",
    "perspective(100px)",
    "matrix(1, 2, -1, 1, 50, 50)",
    "matrix3d(1,0,0,0,0,1,3,0,0,0,1,0,50,50,0,1.1)",
];

let i = 0;

function changeStyle ()
{
    threedSection.style.transform = `rotate3d(1, 1, 1, 30deg) ${optionsArray[i]}`;
    i++;
    if (i > optionsArray.length)
    {
        i = 0;
    }
}
setInterval(changeStyle, 1000);
// for the second 3D animation
const threedSectionTwo = document.querySelector("section.transform-3d2");
let optionsArrayTwo = [
    "rotateX(90deg)",
    "rotateX(180deg)",
    "rotateX(270deg)",
    "rotateX(360deg)",
    "rotateY(90deg)",
    "rotateY(270deg)",
    "rotateY(90deg)",
    "rotateY(360deg)",
    "rotateZ(90deg)",
    "rotateZ(180deg)",
    "rotateZ(270deg)",
    "rotateZ(360deg)",
];

let j = 0;

function changeStyleTwo ()
{
    threedSectionTwo.style.transform = `rotate3d(1, 1, 1, 30deg) ${optionsArrayTwo[j]}`;
    j++;
    if (j > optionsArrayTwo.length)
    {
        j = 0;
    }
}
setInterval(changeStyleTwo, 1200);

// for key codes
const keyText = document.getElementById("key-input");
const keyContainer = document.getElementById("keycode-container");

function keyCodeFinder (event)
{
    keyContainer.textContent += `  ${event.keyCode}`;
}
keyText.onkeyup = keyCodeFinder;

// for binary to decimal
const binaryInput = document.getElementById("binary-input");
const decimalContainer = document.getElementById("decimal-container");

function binaryConverter (event)
{
    let binNum = event.target.value;
    // in case users enter other numbers than 0 and 1 then display a custom alert box
    if (binNum.match(/[2-9]+/))
    {
        const wrapper = document.createElement("div");
        wrapper.className = "alert-wrapper";
        const container = document.createElement("div");
        container.className = "alert-container";
        const message = document.createElement("p");
        const confirmButton = document.createElement("button");
        message.textContent =
            "Please enter only the digits 1(one) and 0(zero) because it's binary!";
        confirmButton.textContent = "OK";
        document.body.appendChild(wrapper);
        wrapper.appendChild(container);
        container.appendChild(message);
        container.appendChild(confirmButton);
        confirmButton.onclick = function ()
        {
            binaryInput.value = "";
            decimalContainer.value = "";
            wrapper.style.display = "none";
        };
    } else
    {
        let inputArray = binNum.split("");
        let powerOf = inputArray.length;
        let decimalNum = 0;
        for (let i = 0; i < powerOf; i++)
        {
            let eachBinary = Number(inputArray[i]);
            decimalNum += eachBinary * Math.pow(2, powerOf - (i + 1));
        }
        decimalContainer.value = ` ${decimalNum}`;
    }
}
binaryInput.onkeyup = binaryConverter;

// for decimal to binary

const decimalInput = document.getElementById("decimal-input");
const binaryContainer = document.getElementById("binary-container");

function decimalToBinary (event)
{

    binaryContainer.value = "";
    const userInput = event.target.value;
    let userInputToNumber = Number(userInput);
    let convertedDecimalToBinary = "";
    while (userInputToNumber > 0)
    {
        let checking = Math.floor(userInputToNumber % 2);

        if (checking === 0)
        {
            convertedDecimalToBinary = "0" + convertedDecimalToBinary;
        } else
        {
            convertedDecimalToBinary = "1" + convertedDecimalToBinary;
        }
        userInputToNumber = Math.floor(userInputToNumber / 2);
    }
    /*
    if (convertedDecimalToBinary.length == 2) {
        convertedDecimalToBinary = "00" + convertedDecimalToBinary;
    }
	
    if (convertedDecimalToBinary.length % 2 > 0) {
        convertedDecimalToBinary = "0" + convertedDecimalToBinary;
    }
    */

    while (convertedDecimalToBinary.length % 4 > 0)
    {
        convertedDecimalToBinary = "0" + convertedDecimalToBinary;
    }

    binaryContainer.value = ` ${convertedDecimalToBinary}`;
}

decimalInput.onkeyup = decimalToBinary;

// for 3 m's in math

const threeMsChoiceList = document.getElementById("3ms-in-math");
const threeMsNumbers = document.getElementById("3ms-input");
const threeMsBtn = document.getElementById("3ms-calculate");
const threeMsDes = document.getElementById("3ms-des");
const threeMsResult = document.getElementById("3ms-result");

function sortInputNum (inputNum)
{
    const inputArr = inputNum.split(",");
    let toNum = [];
    for (let i = 0; i < inputArr.length; i++)
    {
        toNum.push(Number(inputArr[i]));
    }
    let sortedArr = toNum.sort(function (a, b) {return a - b;});
    return sortedArr;
}

function setStyleAndInnerText (des, res)
{
    threeMsNumbers.style = "border: 1px solid green;";
    threeMsDes.style.color = "black";
    threeMsDes.innerText = des;
    threeMsResult.innerText = res;
}
// for mean
function calcMean (threeMsNumValue, threeMsChoiceValue)
{
    const inputArr = sortInputNum(threeMsNumValue);
    let arrSum = 0;
    for (let i = 0; i < inputArr.length; i++)
    {
        arrSum = arrSum + inputArr[i];
    }
    let results = arrSum / inputArr.length;
    let resultDes = `The sum of your numbers is: ${arrSum} and the ${threeMsChoiceValue} or the average of the numbers: ${threeMsNumValue} is: `;
    setStyleAndInnerText(resultDes, `${results}`);
}

// for median
function calcMedian (threeMsNumValue, threeMsChoiceValue)
{
    // debugger
    const inputArr = sortInputNum(threeMsNumValue);
    /* if the length of array is an even number, it means that the array has tow median numbers
    and the median is the sum of those tow median divided by two
    */
    let arrLength = inputArr.length;
    let isEven = true;
    let results = 0;
    if (arrLength % 2 !== 0)
    {
        isEven = false;
    }
    if (isEven)
    {
        let firstNum = inputArr[Math.floor((arrLength - 1) / 2)];
        let secondNum = inputArr[(arrLength / 2)];
        results = (firstNum + secondNum) / 2;
    } else
    {
        results = inputArr[(arrLength - 1) / 2];
    }
    let resultDes = `The ${threeMsChoiceValue} or the middle number of the numbers: ${threeMsNumValue} is: `;
    setStyleAndInnerText(resultDes, `${results}`);
}
// for mode
function calcMode (threeMsNumValue, threeMsChoiceValue)
{
    const inputArr = sortInputNum(threeMsNumValue);
    let arrGroupedNum = [];
    let i = 0;
    for (i; i < inputArr.length; i++)
    {
        let newArr = [];
        for (let j = i; j < inputArr.length; j++)
        {
            if (inputArr[i] === inputArr[j])
            {
                newArr.push(inputArr[j]);
                if (j === inputArr.length - 1)
                {
                    i = j;
                }
            }
            if (inputArr[i] !== inputArr[j])
            {
                let ind = inputArr.indexOf(inputArr[j]);
                i = ind - 1;
                break;
            }

        }
        arrGroupedNum.push(newArr);
    }
    let arrMode = 0;
    let longestArr = 0;
    for (let a = 0; a < arrGroupedNum.length; a++)
    {
        if (arrGroupedNum[a].length > longestArr)
        {
            longestArr = arrGroupedNum[a].length;
            arrMode = arrGroupedNum[a][0];
        }
    }
    let resultDes = `The ${threeMsChoiceValue} of the numbers: ${threeMsNumValue} is: `;
    setStyleAndInnerText(resultDes, `${arrMode}`);
}
threeMsBtn.onclick = function ()
{
    const threeMsChoiceValue = threeMsChoiceList.value;
    const threeMsNumValue = threeMsNumbers.value;
    if (threeMsNumValue === "")
    {
        threeMsDes.innerText = "";
        threeMsNumbers.style = "border: 2px solid red;";
        threeMsDes.style.color = "red";
        threeMsDes.innerText = `Please enter a series of numbers separated by comma`;
        return;
    }
    switch (threeMsChoiceValue)
    {
        case "mean":
            calcMean(threeMsNumValue, threeMsChoiceValue);
            break;
        case "median":
            calcMedian(threeMsNumValue, threeMsChoiceValue);
            break;
        case "mode":
            calcMode(threeMsNumValue, threeMsChoiceValue);
            break;
    }

};

// gen content

function setContent_ ()
{
    const mainFooterEl = document.querySelector(".main-footer");
    if (mainFooterEl)
    {
        mainFooterEl.innerHTML = `
    <section class="container-footer">
    <section>
        <p>MAIN</p>
        <a href="/">HOME</a>
        <a href="/about.html">ABOUT</a>
    </section>
    <section class="github-stuff">
        <p>
            CODING EXPERIENCE
        </p>
        <a href="/projects.html">PROJECTS</a>
        <a href="/public/repositories.html">GITHUB REPOSITORIES</a>
    </section>
    <section>
        <p>
            CONTACTS
        </p>
        <a href="/public/contacts.html">DIRECT MESSAGE</a>
        <a href="https://be.linkedin.com/in/sayed-kazimi-0507/" target="_blank">LINKEDIN</a>
        <a href="https://github.com/Sayed94h" target="_blank">GITHUB</a>
    </section>
    <section>
        <p>MORE...</p>
        <a href="/projects.html">WEB APPS</a>
        <a href="#subscribe">SUBSCRIBE</a>
    </section>

</section>
<p class="copyright">
    &copy; SAYED KHALIL KAZIMI | ${cY}
</p>
    `;
    }

    if (asideWrapper)
    {
        asideWrapper.innerHTML = `
        <aside class="main-aside">
            <section class="aside-contacts">
                <div id="close-menu" onclick="document.getElementById('aside-wrapper').style.display = 'none'">X</div>
                <p>MAIN</p>
                <a href="/">HOME</a>
                <a href="/projects.html">PROJECTS</a>
                <a href="/about.html">ABOUT</a>
            </section>

            <section class="aside-contacts">
                <p>CONTACTS</p>
                <a href="/public/contacts.html">DIRECT MESSAGE</a>
                <a href="https://be.linkedin.com/in/sayed-kazimi-0507/" title="LinkedIn" target="_blank">LINKEDIN</a>
                <a href="https://github.com/Sayed94h" target="_blank">GITHUB</a>
            </section>
            <section class="aside-contacts">
                <p>MORE...</p>
                <a href="/projects.html">WEB APPS</a>
                <a href="#subscribe">SUBSCRIBE</a>
                <a href="/public/repositories.html">GITHUB REPOS</a>
            </section>
        </aside>
        `;
    }

    if (mainNav)
    {
        mainNav.innerHTML = `
        <a href="/" class="current"><span>HOME</span> <i class="material-icons">home</i></a>
        <a href="/projects.html"><span>PROJECTS</span> <i class="material-icons">business</i></a>
        <a href="/public/contacts.html"><span>CONTACT</span> <i class="material-icons">call</i></a>
        <a href="/about.html"><span>ABOUT</span> <i class="material-icons">info</i></a>
        `;
    }

}

setContent_();
