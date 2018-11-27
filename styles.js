/*lazyLoaing*/
window.addEventListener("load", loading);
function loading() {
	var columns = document.getElementsByClassName('columns');
	var lineCols = document.querySelectorAll('.line .columns');
	for(var i=0; i < 6; i++){
		columns[i].style.width = '0';
		lineCols[i].style.opacity = '0';
	}
}
/*leave page*/
var internalLinks = document.getElementsByClassName('internalLink');
var externalLinks = document.querySelectorAll('a[href^="http"]');
for (var i = 0; i < internalLinks.length; i++){
	internalLinks[i].addEventListener("click", unloadIn, false);
}
for (var j = 0; j < externalLinks.length; j++){
	externalLinks[j].addEventListener("click", unloadEx, false);
}
function unloadIn(e){
	e.preventDefault();
	var link = this.href;
	var columns = document.getElementsByClassName('columns');
	var lineCols = document.querySelectorAll('.line .columns');
	for(var i=0; i<6; i++){
		columns[i].style.width = '22.5%';
		lineCols[i].style.opacity = '1';
	}
	setTimeout(function(){
		window.location.href = link;
	}, 700);
}
function unloadEx(e){
	e.preventDefault();
	window.open(this.href);
}
//VideoPlayer
var videos = ["https://ak0.picdn.net/shutterstock/videos/19727980/preview/stock-footage-munich-germany-july-people-in-marienplatz-on-the-the-famous-town-hall-at-evening.mp4",
"https://ak8.picdn.net/shutterstock/videos/29771878/preview/stock-footage-uluru-ayers-rock-at-sunrise-with-some-clouds-australia-timelapse.mp4",
"https://ak6.picdn.net/shutterstock/videos/8359096/preview/stock-footage-following-parachute-silhouette.mp4",
"https://ak2.picdn.net/shutterstock/videos/27751162/preview/stock-footage-riding-husky-sledge-in-lapland-landscape.mp4",
"https://ak0.picdn.net/shutterstock/videos/18084160/preview/stock-footage-happy-cheerful-joyful-tourist-woman-at-great-wall-of-china-having-fun-on-travel-smiling-laughing.mp4"];
var curVideo = 0;
var videoPlayer = document.getElementById('videoPlayer');
var playProgress = document.getElementById('playProgress');
videoPlayer.src = videos[curVideo];
videoPlayer.ontimeupdate = setInterval(function(){
    var durationRatio = videoPlayer.currentTime / videoPlayer.duration;
    playProgress.style.width = Math.floor(durationRatio * 100) + '%';
},0);
videoPlayer.onended = function(){
	++curVideo;
    if(curVideo >= videos.length){
		curVideo = 0;       
    }
	videoPlayer.src = videos[curVideo];
};
function nextVideo(){
	++curVideo;
    if(curVideo >= videos.length){
		curVideo = 0;       
    }
	videoPlayer.src = videos[curVideo];
}
function preVideo(){
	--curVideo;
    if(curVideo < 0){
		curVideo = videos.length-1;       
    }
	videoPlayer.src = videos[curVideo];
}
//Catalog
var topic = document.querySelectorAll('.topic');
var preTopicDisable = document.querySelectorAll('.preButton');
var count = 0;
function nextTopic(){
	++count;
	for (var i=0; i<topic.length; i++){
		topic[i].style.left = count * (-338) + "px";
		if(count >= (topic.length - 3)){
			count = 0;
			for (i=0; i<topic.length; i++){
				topic[i].style.left = count * (-338) + "px";
			}break;
		}
	}	
}
function preTopic(){
	--count;
	if(count < 0){
		count = 0;
		preTopicDisable[1].disabled = true;
	}
	else{
		for (var i=0; i<topic.length; i++){
			topic[i].style.left = count * (-338) + "px";
		}
	}	
}
//Instafeed	
(function () {
    var feed = new Instafeed({
		get: 'user',
		userId: '4044026246',
		limit: 18,
		resolution: 'standard_resolution',
		sortBy: 'most-recent',
		accessToken: '4044026246.1677ed0.8896752506ed4402a0519d23b8f50a17',
		template: '<div class="imgList"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}"  alt="{{caption}}" /><div class="likes">&hearts; {{likes}}</div></a></div>'
	});
	feed.run();
	
	$('.magnific').magnificPopup({
  		type: 'image',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enable: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		delegate: 'a',
  		gallery:{
    	enabled:true
  		}
	});
})();
var imgList = document.getElementsByClassName('imgList');
var temp, temp2;
function nextInsta(){
	for (var i=0; i<imgList.length; i++ ){
		temp = imgList[i].innerHTML;
		imgList[i].innerHTML = imgList[i+6].innerHTML;
		imgList[i+6].innerHTML = temp;
	}
}
function preInsta(){
	for (var i=0; i<imgList.length; i++ ){
		temp = imgList[i].innerHTML;
		imgList[i].innerHTML = imgList[imgList.length + i - 6].innerHTML;
		temp2 = temp;
		imgList[imgList.length + i - 6].innerHTML = imgList[imgList.length/3 + i].innerHTML;
		imgList[imgList.length/3 + i].innerHTML = temp2;
	}
}
//Shrink Nav
document.addEventListener("scroll", scrollFunction);
var nav = document.getElementsByClassName('navLarge')[0];
var navId = document.getElementById('nav');
function hasClass(nav, className) {
  	if (nav.classList)
    	return nav.classList.contains(className)
  	else
    	return !!nav.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}
function scrollFunction(){	
	var nodes = document.getElementById('menu').getElementsByTagName('a');
	var i, cssMenu, cssSocial;
	var style = document.createElement('style');
	
	if (document.body.scrollTop > (innerHeight*0.5) || document.documentElement.scrollTop > (innerHeight*0.5)) {
		document.getElementById('social').style.color="#444445";
		document.getElementById('social').style.fontWeight="700";
		
		cssSocial = '#social a:hover{ color: #fff }' + '#social a:after{ background: #444445 }';
		if (style.styleSheet) {
    		style.styleSheet.cssText = cssSocial;
		} else {
    		style.appendChild(document.createTextNode(cssSocial));
		}
		document.getElementsByTagName('a')[0].appendChild(style);
		
	}else {
		document.getElementById('social').style.color="#fff";
		document.getElementById('social').style.fontWeight="400";
		
		cssSocial = '#social a:hover{ color: #444445}' + '#social a:after{ background: #fff}';
		if (style.styleSheet) {
    		style.styleSheet.cssText = cssSocial;
		} else {
    		style.appendChild(document.createTextNode(cssSocial));
		}
		document.getElementsByTagName('a')[0].appendChild(style);
	}
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		if (nav.classList){
			nav.classList.remove('navLarge');
			nav.classList.add('navSmall');
		}
		else if(hasClass(nav, 'navLarge')){
			nav.className = nav.className.replace(/\navLarge\b/g, "navSmall");
		}
			navId.style.background = "rgba(0, 0, 0, .8)";
			navId.style.boxShadow = "0px 2px 2px rgba(0, 0, 0, 0.1)";
			navId.style.height = "8%";
	}else {
		if (nav.classList){
			nav.classList.remove('navSmall');
			nav.classList.add('navLarge');
		}
		else if(hasClass(nav, 'navLarge')){
			nav.className = nav.className.replace(/\navSmall\b/g, "navLarge");
		}
			navId.style.background = "none";	
			navId.style.boxShadow = "none";
			navId.style.height = "20%";
	}
	if (document.body.scrollTop > (innerHeight*0.9) || document.documentElement.scrollTop > (innerHeight*0.9)) {
		navId.style.background = "rgba(255, 255, 255, 1)";
		for(i=0; i<nodes.length; i++){
			nodes[i].style.color = "#444445";
		}
		document.getElementById('logo').getElementsByTagName('img')[0].src = "Asset/logob.png";
		
		cssMenu = '#menu a:hover{ color: #fff !important }' + '#menu a:after{ background: #444445 !important }';
		if (style.styleSheet) {
    		style.styleSheet.cssText = cssMenu;
		} else {
    		style.appendChild(document.createTextNode(cssMenu));
		}
		document.getElementsByTagName('a')[0].appendChild(style);
		
	}else if ((document.body.scrollTop < (innerHeight*0.9) && document.body.scrollTop > 10) || (document.documentElement.scrollTop < (innerHeight*0.9) && document.documentElement.scrollTop > 10)){
		navId.style.background = "rgba(0, 0, 0, .8)";
		for(i=0; i<nodes.length; i++){
			nodes[i].style.color = "#fff";
		}
		document.getElementById('logo').getElementsByTagName('img')[0].src = "Asset/logow.png";
		
		cssMenu = '#menu a:hover{ color: #444445 !important }' + '#menu a:after{ background: #fff !important }';
		if (style.styleSheet) {
    		style.styleSheet.cssText = cssMenu;
		} else {
    		style.appendChild(document.createTextNode(cssMenu));
		}
		document.getElementsByTagName('a')[0].appendChild(style);
	}
}
//seclect_option
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
  	/*for each element, create a new DIV that will act as the selected item:*/
  	a = document.createElement("DIV");
  	a.setAttribute("class", "select-selected");
  	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  	x[i].appendChild(a);
  	/*for each element, create a new DIV that will contain the option list:*/
  	b = document.createElement("DIV");
  	b.setAttribute("class", "select-items select-hide");
  		for (j = 0; j < selElmnt.length; j++) {
    		/*for each option in the original select element, create a new DIV that will act as an option item:*/
    		c = document.createElement("DIV");
    		c.innerHTML = selElmnt.options[j].innerHTML;
    		c.addEventListener("click", function(e) {
        	/*when an item is clicked, update the original select box,and the selected item:*/
        		var y, i, k, s, h;
        		s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        		h = this.parentNode.previousSibling;
        		for (i = 0; i < s.length; i++) {
          			if (s.options[i].innerHTML == this.innerHTML) {
            			s.selectedIndex = i;
            			h.innerHTML = this.innerHTML;
            			y = this.parentNode.getElementsByClassName("same-as-selected");
            			for (k = 0; k < y.length; k++) {
              				y[k].removeAttribute("class");
            			}
            		this.setAttribute("class", "same-as-selected");
            		break;
          			}
        		}
			h.click();
    		});
		b.appendChild(c);
  		}
  	x[i].appendChild(b);
  	a.addEventListener("click", function(e) {
  	    /*when the select box is clicked, close any other select boxes, and open/close the current select box:*/
  	    e.stopPropagation();
  	    closeAllSelect(this);
  	    this.nextSibling.classList.toggle("select-hide");
  	    this.classList.toggle("select-arrow-active");
  	});
}
function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document, except the current select box:*/
  	var x, y, i, arrNo = [];
  	x = document.getElementsByClassName("select-items");
  	y = document.getElementsByClassName("select-selected");
  	for (i = 0; i < y.length; i++) {
    	if (elmnt == y[i]) {
      		arrNo.push(i);
    	} else {
      		y[i].classList.remove("select-arrow-active");
    	}
  	}
  	for (i = 0; i < x.length; i++) {
    	if (arrNo.indexOf(i)) {
      		x[i].classList.add("select-hide");
    	}
  	}
}
/*if the user clicks anywhere outside the select box, then close all select boxes:*/
document.addEventListener("click", closeAllSelect);




