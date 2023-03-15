questionInputEl = document.getElementById("question-input");
errorEl = document.getElementById("error");
answerEl = document.getElementById("answer");
ballEl = document.getElementById("ball");

const setDisplay = () => {
	errorEl.style.visibility = "visible";
	answerEl.style.visibility = "hidden";
};

const checkInput = (input) => {
	setTimeout(() => {
		if (input.value == 0) {
			console.log(input.value);
			errorEl.textContent = "Najpierw zadaj pytanie!";
			setDisplay();
		} else if (!input.value.endsWith("?")) {
			errorEl.textContent = "To nie jest pytanie!";
			setDisplay();
		} else if (!input.value.toLowerCase().startsWith("czy".toLowerCase())) {
			errorEl.textContent =
				"Bila odpowiada tylko na pytania ,na które można odpowiedzieć ''tak'', lub ''nie'' ";
			setDisplay();
		} else {
			answerEl.style.visibility = "visible";
			answerEl.classList.add("appear-animation");
			setTimeout(() => {
				answerEl.classList.remove("appear-animation");
				answerEl.style.visibility = "hidden";
			}, "1500");
		}
	}, "1000");
};

const generateAnswer = (el) => {
	const answers = [
		"Tak",
		"Nie",
		"Nie chcesz znać odpowiedzi na to pytanie",
		"Tej odpowiedzi nie zna nawet bila!",
		"To bardzo prawdopodobne",
		"Jest na to niewielka szansa",
		"Tego musisz się domyślić samodzielnie",
		"To prawie pewne!",
		"Nie ma szans",
		"Spróbuj jeszcze raz!",
		"Na pewno!",
		"Tak się nie stanie",
		"Z pewnością",
		"mało prawdopodobne",
		"Szanse są nikłe",
		"Jak najbardziej",
	];

	answerEl.textContent =
		answers[Math.floor(Math.random() * (answers.length - 0) + 0)];
};

ballEl.addEventListener("click", (e) => {
	ballEl.classList.add("shake-animation");
	setTimeout(() => {
		ballEl.classList.remove("shake-animation");
	}, "1000");

	errorEl.style.visibility = "hidden";
	checkInput(questionInputEl);
	generateAnswer();
});
