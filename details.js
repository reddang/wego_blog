/*lazyLoaing*/
window.addEventListener("load", loading);
function loading() {
	var columns = document.getElementsByClassName('columns');
	for(var i=0; i<columns.length; i++){
		columns[i].style.width = '0';
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
	for(var i=0; i<columns.length; i++){
		columns[i].style.width = '45%';
	}
	setTimeout(function(){
		window.location.href = link;
	}, 700);
}
function unloadEx(e){
	e.preventDefault();
	window.open(this.href);
}
/*nav*/
//document.addEventListener("scroll", scrollFunction);
//var nav = document.getElementsByClassName('navLarge')[0];
//var navId = document.getElementById('nav');
//function hasClass(nav, className) {
//  	if (nav.classList)
//    	return nav.classList.contains(className)
//  	else
//    	return !!nav.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
//}
//function scrollFunction(){	
//	var nodes = document.getElementById('menu').getElementsByTagName('a');
//	var i, cssMenu, cssSocial;
//	var style = document.createElement('style');
//	
//	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//		if (nav.classList){
//			nav.classList.remove('navLarge');
//			nav.classList.add('navSmall');
//		}
//		else if(hasClass(nav, 'navLarge')){
//			nav.className = nav.className.replace(/\navLarge\b/g, "navSmall");
//		}
//			navId.style.background = "#1F1F1F";
//			navId.style.height = "8%";
//	}else {
//		if (nav.classList){
//			nav.classList.remove('navSmall');
//			nav.classList.add('navLarge');
//		}
//		else if(hasClass(nav, 'navLarge')){	
//			nav.className = nav.className.replace(/\navSmall\b/g, "navLarge");
//		}
//			navId.style.background = "#1F1F1F";	
//			navId.style.height = "20%";
//	}
//}
//slideshow
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  	showSlides(slideIndex += n);
}
function showSlides(n) {
  	var i;
  	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {slideIndex = 1;} 
	if (n < 1) {slideIndex = slides.length;}
  	for (i = 0; i < slides.length; i++) {
      	slides[i].style.opacity = "0"; 
	}
	slides[slideIndex-1].style.opacity = "1";	
}
//modal
var modal = document.getElementById('modal');
var videoOpen = document.getElementById('video').firstChild;
var video = document.getElementById('modalVideo');
var mapOpen = document.getElementById('map').firstChild;
var map = document.getElementById('modalMap');
var closeBtn = document.getElementsByClassName("close");
for(var i = 0; i < closeBtn.length; i++){
	var closebtn = document.getElementsByClassName("close")[i];
	function noscroll() {
		window.scrollTo( 0, 0 );
	}
	videoOpen.onclick = function(){
		closebtn.style.opacity = '1';
		modal.style.pointerEvents = "auto";
		video.style.width = "70%";
		modal.style.transition = "width .2s ease-out";
		video.style.transition = "width .4s ease-out";
		window.addEventListener('scroll', noscroll, true);
		var cols = modal.getElementsByClassName('cols');
		for(var i=0; i<cols.length; i++){
			cols[i].style.width = '45%';
		}
	};
	mapOpen.onclick = function(){
		closebtn.style.opacity = '1';
		modal.style.pointerEvents = "auto";
		map.style.width = "70%";
		modal.style.transition = "width .2s ease-out";
		map.style.transition = "width .4s ease-out";
		window.addEventListener('scroll', noscroll, true);
		var cols = modal.getElementsByClassName('cols');
		for(var i=0; i<cols.length; i++){
			cols[i].style.width = '45%';
		}
	};
	closebtn.onclick = function() { 
		closebtn.style.opacity = '0';
		modal.style.pointerEvents = "none";
		video.style.width = "0";
		map.style.width = "0";
		modal.style.transition = "width .4s ease-out";
		video.style.transition = "width .2s ease-out";
		map.style.transition = "width .2s ease-out";
		window.removeEventListener('scroll', noscroll, true);
		var cols = modal.getElementsByClassName('cols');
		for(var i=0; i<cols.length; i++){
			cols[i].style.width = '0';
		}
	};
	modal.onclick = function() { 
		closebtn.style.opacity = '0';
		modal.style.pointerEvents = "none";
		video.style.width = "0";
		map.style.width = "0";
		modal.style.transition = "width .4s ease-out";
		video.style.transition = "width .2s ease-out";
		map.style.transition = "width .2s ease-out";
		window.removeEventListener('scroll', noscroll, true);
		var cols = modal.getElementsByClassName('cols');
		for(var i=0; i<cols.length; i++){
			cols[i].style.width = '0';
		}
	};
	setTimeout(function(){
		document.getElementById("videoPlayer").play();
	}, 2000);
	var frameWindow = document.getElementById('mapLoad');
	setTimeout(function(){
		frameWindow.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12663.097265829861!2d103.79322079549027!3d1.40093472240724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da115fbfffffff%3A0xb99d28fa7e51f77f!2sUpper+Seletar+Reservoir!5e0!3m2!1sen!2s!4v1542014192371";
	}, 1500);
}














