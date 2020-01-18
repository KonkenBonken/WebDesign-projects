const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
};

const convertTime12to24 = (time12h) => {
	const [time, modifier] = time12h.split(' ');
	let [hours, minutes] = time.split(':');
	if (hours === '12') {
		hours = '00';
	};
	if (modifier === 'PM') {
		hours = parseInt(hours, 10) + 12;
	};
	return `${hours}:${minutes}`;
}

function timeConvert(n) {
	var num = n;
	var hours = (num / 60);
	var rhours = Math.floor(hours);
	var minutes = (hours - rhours) * 60;
	var rminutes = Math.round(minutes);
	return rhours + ":" + rminutes;
}
Uppdatera();
Nyheter(20);
Klock();
Vader();
Spotify();
NewsRoll();
NewBack();

function NewBack() {
	document.getElementsByTagName("html")[0].style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkOAMAANIAzr59FiYAAAAASUVORK5CYII=), url(https://source.unsplash.com/user/erondu/1920x1080)";
	sleep(60000).then(() => {
		NewBack();
	});
}

function NewsRoll() {
	for (var i = 1; i < 21; i++) {
		Reload2(i);
	};
	sleep(201500).then(() => {
		NewsRoll();
		Nyheter(20);
	});
}


function Klock() {
	var klockan = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
	document.getElementById("Klockan").innerHTML = klockan;
	sleep(100).then(() => {
		Klock();
	});
}

function Uppdatera() {
	var month = new Date().getMonth() + 1

	var weekday = new Array(7);
	weekday[0] = "S&ouml;ndag";
	weekday[1] = "M&aring;ndag";
	weekday[2] = "Tisdag";
	weekday[3] = "Onsdag";
	weekday[4] = "Torsdag";
	weekday[5] = "Fredag";
	weekday[6] = "L&ouml;rdag";
	var vecka = weekday[new Date().getDay()];
	var Datum = "Idag &auml;r det " + vecka + " Den <span id=\"DatumSiff\" style=\"font-size:150%\;\">" + new Date().getDate() + "/" + month + "</span>";
	var Busstid = new Array(7);
	Busstid[0] = "Du &auml;r ledig idag";
	Busstid[1] = "Idag b&ouml;rjar du klockan 09:00<br>Din buss g&aring;r klockan: 08:41";
	Busstid[2] = "Idag b&ouml;rjar du klockan 10:10<br>Din buss g&aring;r klockan: 08:41";
	Busstid[3] = "Idag b&ouml;rjar du klockan 09:00<br>Din buss g&aring;r klockan: 09:35";
	Busstid[4] = "Idag b&ouml;rjar du klockan 09:10<br>Din buss g&aring;r klockan: 08:42";
	Busstid[5] = "Idag b&ouml;rjar du klockan 08:30<br>Din buss g&aring;r klockan: 08:12";
	Busstid[6] = "Du &auml;r ledig idag";
	var buss = Busstid[new Date().getDay()];

	if (buss != "Du &auml;r ledig idag") {
		var BussTidIckeText = Number(buss.split("<br>Din buss g&aring;r klockan: ")[1].split(":")[0].split("")[1]) * 60 + Number(buss.split("<br>Din buss g&aring;r klockan: ")[1].split(":")[1])
		var NuIMin = new Date().getHours() * 60 + new Date().getMinutes()
		var MinTillBuss = Number(BussTidIckeText) - Number(NuIMin)
		//console.log(NuIMin);
		if (MinTillBuss.toString().split("")[0] != "-") {
			document.getElementById("BussOm").innerHTML = "&nbsp;&nbsp;Det är om " + MinTillBuss + " Minuter"
			document.getElementById("Busstid").innerHTML = buss;
		} else {
			var buss = Busstid[Number(new Date().getDay()) + 1];
			var BussTidIckeText = Number(Number(buss.split("<br>Din buss g&aring;r klockan: ")[1].split(":")[0].split("")[1]) * 60 + Number(buss.split("<br>Din buss g&aring;r klockan: ")[1].split(":")[1]))
			var NuIMin = Number(new Date().getHours() * 60 + new Date().getMinutes()) - 1440
			var MinTillBuss = Number(BussTidIckeText) - Number(NuIMin)

			var TidTillBussTimMin = timeConvert(MinTillBuss);


			if (document.getElementById("BussOm")) document.getElementById("BussOm").innerHTML = '&nbsp;&nbsp;Det är om <span style="font-size:125%\;">' + TidTillBussTimMin + "</span>";
			if (document.getElementById("Busstid")) document.getElementById("Busstid").innerHTML = buss + " imorgon";
		}
	} else {
		if (document.getElementById("Busstid")) document.getElementById("Busstid").innerHTML = buss;
	}


	if (document.getElementById("Datum")) document.getElementById("Datum").innerHTML = Datum;


	sleep(60000).then(() => {
		Uppdatera();
	});
};
//&category=technology

function Nyheter(nr) {
	fetch('https://newsapi.org/v2/top-headlines?country=se&category=technology&apiKey=2be7722aa456474dbb1743d990ef852a&sortBy=publishedAt')
		.then(dataWrappedByPromise => dataWrappedByPromise.json())
		.then(data => {
			var artikelNr = -1;
			var i;
			document.getElementById("Nyheterdiv").innerHTML = "";
			for (i = 0; i < nr; i++) {
				var artikelNr = artikelNr + 1;
				var artikelNr1 = artikelNr + 1
				var title = data.articles[artikelNr].title.split(" - ")[0];
				var description = data.articles[artikelNr].description
				var source = data.articles[artikelNr].source.name
				var sourceUrl = data.articles[artikelNr].url
				var tid = data.articles[artikelNr].publishedAt.split("T")[1].split("Z")[0]
				document.getElementById("Nyheterdiv").innerHTML += "<div id=\"Div" + artikelNr1 + "\"><p class=\"newsTit\" id=\"newsTit" + artikelNr1 + "\"></p><p class=\"newsDes\" id=\"newsDes" + artikelNr1 + "\"></p><nobr><p class=\"newsSor\"><a id=\"newsSor" + artikelNr1 + "\" href=></a><img src=\"Cross.webp\" onclick=\"Reload(" + artikelNr1 + ")\" id=\"Reload" + artikelNr1 + "\" class=\"Reload\"></nobr></p></div>"
				document.getElementById("newsTit" + artikelNr1).innerHTML = title
				document.getElementById("newsDes" + artikelNr1).innerHTML = description
				document.getElementById("newsSor" + artikelNr1).innerHTML = "K&auml;lla:  " + source + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + tid + "&nbsp;&nbsp;" + "<br><br><br><br>"
				document.getElementById("newsSor" + artikelNr1).setAttribute("href", sourceUrl);

				document.getElementById("Dagens").innerHTML = "<br><br>&nbsp;&nbsp;Dagens nyheter:";

			}
			document.getElementById("newsSor" + artikelNr1).innerHTML = "K&auml;lla:  " + source + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + tid + "<br><br><br><br>"
			//console.log("NyheterAPI:");
			//console.log(data);
		})
}

function Reload(id) {
	removeFadeOut(document.getElementById("Div" + id), 1500);
};

function Reload2(id) {
	var tid8746 = id * 10000;
	sleep(tid8746).then(() => {
		removeFadeOut(document.getElementById("Div" + id), 1500);
	});
}

function removeFadeOut(el, speed) {
	var seconds = speed / 1000;
	el.style.transition = "opacity " + seconds + "s ease";

	el.style.opacity = 0;
	setTimeout(function() {
		el.parentNode.appendChild(el);
		el.removeAttribute("style");

	}, speed);
}

function Vader() {
	fetch('http://api.weatherstack.com/current?access_key=4d3647a57cc7f021e35110f811f96586&query=59.3331732,18.0377413')
		.then(dataWrappedByPromise => dataWrappedByPromise.json())
		.then(data => {
			if (data.success != false) {
				var temp = data.current.temperature;
				var desc = data.current.weather_descriptions[0];
				var iconurl = data.current.weather_icons[0];
				document.getElementById('Temp').innerHTML = temp;
				document.getElementById("Icon").setAttribute("src", iconurl);
				document.getElementById('desc').innerHTML = desc;
				document.getElementById('C').innerHTML = "&#730;C";
				document.getElementById('VTid').innerHTML = convertTime12to24(data.current.observation_time);
				document.getElementById('Vader').style.display = "block";
				//  console.log("VäderAPI:");
				//console.log(data.current);
			} else {
				fetch('http://api.weatherstack.com/current?access_key=36f9a2e9857ab4f81a04c6a98cb8bbda&query=59.3331732,18.0377413')
					.then(dataWrappedByPromise => dataWrappedByPromise.json())
					.then(data1 => {
						if (data1.success != false) {
							var temp = data1.current.temperature;
							var desc = data1.current.weather_descriptions[0];
							var iconurl = data1.current.weather_icons[0];
							document.getElementById('Temp').innerHTML = temp;
							document.getElementById("Icon").setAttribute("src", iconurl);
							document.getElementById('desc').innerHTML = desc;
							document.getElementById('C').innerHTML = "&#730;C";
							document.getElementById('VTid').innerHTML = convertTime12to24(data1.current.observation_time);
							document.getElementById('Vader').style.display = "block";
						} else {
							document.getElementById('Spotify').style.marginRight = "20%";
						}
					})
			}
		})
	sleep(3600000).then(() => {
		Vader();
	});
}

function Spotify() {
	//if (document.getElementsByClassName("Osyn").innerHTML == "Funka") {
	var APIkeyTemp = window.location.href.split("?")[1]
	fetch('https://api.spotify.com/v1/me/player/currently-playing?market=SV&access_token=' + APIkeyTemp)
		.then(dataWrappedByPromise => dataWrappedByPromise.json())
		.then(data => {
			if (data.is_playing == true || data.is_playing == false || data.error.status != 401) {
				var Artist = data.item.artists[0].name
				var Title = data.item.album.name
				var AlbumImg = data.item.album.images[0].url
				if (document.getElementById('LåtTit').innerHTML != Title) {
					document.getElementById('LåtArt').innerHTML = Artist;
					document.getElementById("LåtAlb").setAttribute("src", AlbumImg);
					document.getElementById('LåtTit').innerHTML = Title;
				}
				var NuTid = data.progress_ms
				var TotTid = data.item.duration_ms
				if (document.getElementById('Progress').style.width != (NuTid / TotTid) * 100 + "%") {
					document.getElementById('Progress').style.width = (NuTid / TotTid) * 100 + "%"
				}
				//  console.log("SpotifyAPI:");
				//console.log(data)
				document.getElementById("Spotify").style.display = "block"
				if (data.is_playing == false) {
					document.getElementById("LåtAlb").style.filter = "grayscale(80%)";
				} else {
					document.getElementById("LåtAlb").style.filter = "grayscale(0%)";
				}
				//document.getElementsByClassName("Osyn").innerHTML = "hej"
				sleep(1000).then(() => {
					Spotify();
				});
			} else {
				document.getElementById('Spotify').remove();
				document.getElementsByClassName("Vader")[0].style.marginRight = "30%";
			}
		})
}