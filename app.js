const addCourse = document.querySelector(".add-course");
const calculateGp = document.querySelector(".calculate");

const unitLoad = document.querySelectorAll(".unit-load");
const grade = document.querySelectorAll(".grade");

const delBtn = document.querySelectorAll(".del-btn");
const container = document.querySelector(".container");
const inputCon = document.querySelector(".input-con");

const totScore = document.querySelector(".tot-score");
const totUnitLoad = document.querySelector(".tot-ul");
const gpDisp = document.querySelector(".gp");

const remark = document.querySelector(".remark");
const unitLoadArr = [];
let unitLoadArrSum = 0;

const gradeArr = [];

const multiplied = [];
let multipliedSum = 0;

addCourse.addEventListener("click", () => {
	const inputCont = document.createElement("div");
	inputCont.classList.add("input-con");

	inputCont.innerHTML = `<input type="tel" min="0" maxlength="1" class="unit-load" id="unit-load" placeholder="Unit Load" />
					<input type="text" maxlength="1" class="grade" id="grade"  placeholder="Grade" />
					<button class="del-btn">X</button>`;

	container.appendChild(inputCont);
});

container.addEventListener("click", (event) => {
	if (event.target.classList.contains("del-btn")) {
		const parentElement = event.target.parentElement;

		parentElement.remove();
	}
});

// !! MAIN LOGIIIIIC

function multiply() {
	for (let i = 0; i < unitLoadArr.length; i++) {
		multiplied[i] = unitLoadArr[i] * gradeArr[i];
	}

	getTotalGrade();
}

function addLoadArray() {
	for (let i = 0; i < unitLoadArr.length; i++) {
		unitLoadArrSum += unitLoadArr[i];
	}

	totUnitLoad.textContent = unitLoadArrSum;
}

function getTotalGrade() {
	for (let i = 0; i < multiplied.length; i++) {
		multipliedSum += multiplied[i];
	}
	totScore.textContent = multipliedSum;

	addLoadArray();
	gp();
}

function gp() {
	if (unitLoadArr.length === gradeArr.length) {
		let ans = multipliedSum / unitLoadArrSum;
		gpDisp.textContent = ans.toFixed(2);

		if (ans < 2) {
			gpDisp.style.color = "red";
		} else if (ans < 3.5) {
			gpDisp.style.color = "orange";
		} else if (ans < 4.5) {
			gpDisp.style.color = "yellow";
		}
	} else {
		alert("something is missing");
	}
}

// !! MAIN LOGIIIIIC

calculateGp.addEventListener("click", () => {
	const unitLoad = document.querySelectorAll(".unit-load");
	const grade = document.querySelectorAll(".grade");

	unitLoadArr.splice(0);
	gradeArr.splice(0);

	unitLoad.forEach((i) => {
		unitLoadArr.push(parseInt(i.value));
	});

	grade.forEach((i) => {
		if (i.value === "a" || i.value === "A") {
			gradeValue = 5;
		} else if (i.value === "b" || i.value === "B") {
			gradeValue = 4;
		} else if (i.value === "c" || i.value === "C") {
			gradeValue = 3;
		} else if (i.value === "d" || i.value === "D") {
			gradeValue = 2;
		} else if (i.value === "e" || i.value === "E") {
			gradeValue = 1;
		} else if (i.value === "f" || i.value === "F") {
			gradeValue = 0;
		}

		gradeArr.push(parseInt(gradeValue));
	});

	multiply();
	unitLoadArrSum = 0;
	multipliedSum = 0;
});
