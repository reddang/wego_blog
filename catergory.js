/*lazyLoaing*/
window.addEventListener("load", loading);
function loading() {
	var columns = document.getElementsByClassName('columns');
	var lineCols = document.querySelectorAll('.line .columns');
	for(var i=0; i<6; i++){
		columns[i].style.width = '0';
		lineCols[i].style.opacity = '0';
	}
	var hr = document.getElementsByTagName('hr');
	hr[0].style.width = "75%";
	document.getElementById('nav').style.zIndex = '102';
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
	document.getElementById('nav').style.zIndex = '100';
	setTimeout(function(){
		window.location.href = link;
	}, 700);
}
function unloadEx(e){
	e.preventDefault();
	window.open(this.href);
}
/*nav*/
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
	
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		if (nav.classList){
			nav.classList.remove('navLarge');
			nav.classList.add('navSmall');
		}
		else if(hasClass(nav, 'navLarge')){
			nav.className = nav.className.replace(/\navLarge\b/g, "navSmall");
		}
			navId.style.background = "rgba(255,255,255, 1)";
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
}
/*menuCatergory*/
function openTab(evt){
	var i, tablinks, ahref, hr, line;
	ahref = document.getElementById('category');
	tablinks = ahref.getElementsByTagName('a');
	for (i=0; i<tablinks.length; i++){
		hr = tablinks[i].getElementsByTagName('hr');
		tablinks[i].setAttribute("id","");
		tablinks[i].setAttribute("class", "tabLinks");
		if (tablinks[i].childNodes[0] == hr[0]){
			hr[0].style.width = "0";
		}
	}
	document.getElementsByTagName("hr")[0].removeAttribute("id");
	evt.currentTarget.setAttribute("id", "active");
	evt.currentTarget.setAttribute("class", "");
	line = evt.currentTarget.childNodes[0];
	line.style.width = '75%';
	$("#containerContent").load(" #containerContent > *");
}


