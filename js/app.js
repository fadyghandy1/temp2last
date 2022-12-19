

function Ck() {
	var checkBox = document.getElementById("dm");

	if (checkBox.checked == true) {
		document.body.style.backgroundColor = "#1d1e25";
		document.body.style.backgroundImage = "url('../imgs/bg-simplify-section-desktop2.svg')";
		document.body.style.color = "#fff";
		//document.body.style.transform = "1s";
		document.getElementById("logo-img").src = "./imgs/logo-dark.svg";

		Array.from(document.getElementsByClassName("list-link")).forEach(element => {
			element.classList.remove("list-link-light");
			element.classList.add("list-link-dark");
		});



		Array.from(document.getElementsByClassName("card")).forEach(element => {
			element.classList.remove("card-light");
			element.classList.add("card-dark");
		});

		Array.from(document.getElementsByClassName("line")).forEach(element => {
			element.classList.remove("line-light");
			element.classList.add("line-dark");
			
		});

	} else {
		document.body.style.backgroundColor = "#fff";
		document.body.style.backgroundImage = "url('../imgs/bg-simplify-section-desktop.svg')";
		document.body.style.color = "#242d52";
		document.getElementById("logo-img").src = "./imgs/logo1.svg";
		Array.from(document.getElementsByClassName("list-link")).forEach(element => {
			element.classList.add("list-link-light");
			element.classList.remove("list-link-dark");
		});

		Array.from(document.getElementsByClassName("card")).forEach(element => {
			element.classList.add("card-light");
			element.classList.remove("card-dark");
		});
		Array.from(document.getElementsByClassName("line")).forEach(element => {
			element.classList.add("line-light");
			element.classList.remove("line-dark");
			
		});
	}

	if (checkBox.checked == true) {
		document.getElementById("button").style.background =
			"url('https://i.pinimg.com/236x/cf/e6/17/cfe6176a35db2af958e8a9ad07eed532.jpg') no-repeat center center";
		document.getElementById("button").style.backgroundSize = "cover";
	} else {
		document.getElementById("button").style.background =
			"url('https://i.pinimg.com/564x/a5/5c/13/a55c132fec6ba35b063bc6d32c7cf7fb.jpg') no-repeat center center";
		document.getElementById("button").style.backgroundSize = "cover";
	}

}