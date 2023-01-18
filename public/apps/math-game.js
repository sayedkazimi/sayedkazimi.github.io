"use strict";

const score = document.getElementById("score");
const checkBtn = document.getElementById("check-btn");
const question_box = document.querySelector(".question-box");
const game_level = document.getElementById("level");
const user_in = document.getElementById("user-answer");
const math_operator = document.getElementById("operator");

let isAnswerEmpty = false;
// load the score from localStorage
window.onload = function ()
{
    if (localStorage.getItem("score") === null)
    {
        localStorage.setItem("score", 0);
        score.innerText = `${localStorage.getItem("score")}`;
    } else
    {
        score.innerText = `${localStorage.getItem("score")}`;
    }
};
const handler = {
    operators: ["+", "-", "*", "/"],
    operatorToDisplay: "",
    theQuestion: [],
    operatorSetter: function ()
    {
        if (math_operator.value === "mix")
        {
            const operator = this.operators[
                Math.floor(Math.random() * this.operators.length)
            ];
            this.theQuestion.push(operator);
            if (operator === "*")
            {
                this.operatorToDisplay = "x";
            } else if (operator === "/")
            {
                this.operatorToDisplay = "÷";
            } else
            {
                this.operatorToDisplay = operator;
            }
        } else
        {
            const operator = math_operator.value;
            this.theQuestion.push(operator);
            if (operator === "*")
            {
                this.operatorToDisplay = "x";
            } else if (operator === "/")
            {
                this.operatorToDisplay = "÷";
            } else
            {
                this.operatorToDisplay = operator;
            }
        }
    },
    correctAnswer: 0,
    realtime_score: 0,
    correctAnswer_Calculator: function ()
    {
        if (this.theQuestion[1] === "+")
        {
            this.correctAnswer = Math.round(
                this.theQuestion[0] + this.theQuestion[2]
            );
            return;
        }
        if (this.theQuestion[1] === "-")
        {
            this.correctAnswer = Math.round(
                this.theQuestion[0] - this.theQuestion[2]
            );
            return;
        }
        if (this.theQuestion[1] === "/")
        {
            this.correctAnswer = Math.round(
                this.theQuestion[0] / this.theQuestion[2]
            );
            return;
        }
        if (this.theQuestion[1] === "*")
        {
            this.correctAnswer = Math.round(
                this.theQuestion[0] * this.theQuestion[2]
            );
            return;
        }
    },
    check_user_answer: function (userAnswer, inputEl)
    {
        // check the correct answer, get the score from the localstorage and store the score in the localstorage
        if (Number(userAnswer) == this.correctAnswer)
        {
            let old_score = Number(localStorage.getItem("score"));
            this.realtime_score = old_score;
            let new_score = old_score + 1;
            localStorage.setItem("score", new_score);
            inputEl.style = "border:2px green solid;";
            score.innerText = `${new_score}`;
        } else
        {
            inputEl.style = "border:2px red solid;";
            score.innerText = `${localStorage.getItem("score")}`;
        }
    },
    operandGenerator: function ()
    {
        const theOperand = Math.round(Math.random() * Number(game_level.value));
        this.theQuestion.push(theOperand);
        return theOperand;
    },
    questionGenerator: function ()
    {
        const question = document.createElement("section");
        for (let i = 0; i < 1; i++)
        {
            // if (i > 0) {
            // 	const spanOp2 = document.createElement("span");
            // 	this.operatorSetter();
            // 	spanOp2.innerText = ` ${this.operatorToDisplay} `;
            // 	question.appendChild(spanOp2);
            // }
            const spanNum = document.createElement("span");
            const spanNum2 = document.createElement("span");
            const spanOp = document.createElement("span");
            spanNum.innerText = ` ${this.operandGenerator()} `;
            this.operatorSetter();
            spanNum2.innerText = ` ${this.operandGenerator()} `;
            spanOp.innerText = ` ${this.operatorToDisplay} `;

            question.appendChild(spanNum);
            question.appendChild(spanOp);
            question.appendChild(spanNum2);
        }
        question_box.appendChild(question);
    },
    clickHandler: function ()
    {
        // debugger;
        this.correctAnswer_Calculator();
        this.check_user_answer(user_in.value, user_in);
        question_box.innerText = "";
        user_in.value = "";
        this.theQuestion = [];
        this.questionGenerator();
    },
};
handler.questionGenerator();

function displayErrors (err)
{
    const errorCont = document.getElementById("show-error");
    errorCont.innerText = err;
}
checkBtn.onclick = function ()
{
    if (user_in.value === "")
    {
        displayErrors("Please provide your answer");
        isAnswerEmpty = true;
        return;
    }

    if (isAnswerEmpty)
    {
        displayErrors('');
    }
    handler.clickHandler();
};
user_in.onkeyup = function (event)
{
    if (event.keyCode === 13)
    {
        if (user_in.value === "")
        {
            displayErrors("Please provide your answer");
            isAnswerEmpty = true;
            return;
        }

        if (isAnswerEmpty)
        {
            displayErrors('');
        }

        handler.clickHandler();
    } else
    {
        return;
    }
};
export default handler;