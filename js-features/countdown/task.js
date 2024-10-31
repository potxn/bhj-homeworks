let startValue = parseInt(document.getElementById("timer").textContent);

function func() {
	startValue--;
	document.getElementById("timer").textContent = startValue;

	if (startValue === 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(timerId);
	}
};

let timerId = setInterval(func, 1000);