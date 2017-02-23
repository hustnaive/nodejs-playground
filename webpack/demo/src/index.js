let text = "This is a test page".split('');
let ele = document.getElementById("text");

ele.innerHTML = '';
var timeOut = 0;
for(let t of text) {
	timeOut += 200;
	setTimeout(function() {
		ele.innerHTML += t;
	},timeOut);
}
