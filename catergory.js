/*lazyLoaing*/
window.addEventListener("load", loading);
function loading() {
	var hr = document.getElementsByTagName('hr');
	hr[0].style.width = "75%";
}
/*leave page*/
function unloadIn(e){
	setTimeout(function(){
		window.location.href = link;
	}, 700);
}
/*nav*/
document.addEventListener("scroll", scrollFunction);
var nav = document.getElementsByClassName('navLarge')[0];
var navId = document.getElementById('nav');
function scrollFunction(){	
	var nodes = document.getElementById('menu').getElementsByTagName('a');
	var i, cssMenu, cssSocial;
	var style = document.createElement('style');
	var hamburger = document.getElementsByClassName('hamburger');
	var a = document.body.scroll;
	var b = document.documentElement.scrollTop;
	if(window.matchMedia('(min-width: 320px) and (max-width: 1023px)').matches){
		if (a < 10 || b < 10){
			navId.style.background = "none";	
			navId.style.boxShadow = "none";
			navId.style.height = "10%";
			for(i=0; i<hamburger.length; i++){
				hamburger[i].style.background = "#444445";
			}
			document.getElementById('logo').getElementsByTagName('img')[0].src = "Asset/logob.png";
		}
		if (a > 10 || b > 10) {
			navId.style.background = "#7CB342";
			navId.style.boxShadow = "0px 2px 2px rgba(0, 0, 0, 0.1)";
			navId.style.height = "10%";
			for(i=0; i<hamburger.length; i++){
				hamburger[i].style.background = "#fff";
			}
			document.getElementById('logo').getElementsByTagName('img')[0].src = "Asset/logow.png";
		}
	}
	if(window.matchMedia('(min-width: 1024px)').matches){
		if (a < 10 || b < 10){
			navId.style.background = "none";	
			navId.style.boxShadow = "none";
			navId.style.height = "20%";
			nav.classList.remove('navSmall');
			nav.classList.add('navLarge');
		}
		if (a > 10 || b > 10) {
			navId.style.background = "#fff";
			navId.style.boxShadow = "0px 2px 2px rgba(0, 0, 0, 0.1)";
			navId.style.height = "8%";
			nav.classList.remove('navLarge');
			nav.classList.add('navSmall');
		}
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
	
	setTimeout(function(){
		$('.grid').masonry({
			itemSelector: '.grid-item',
		  	columnWidth: '.grid-sizer',
		  	gutter: '.gutter-sizer',
		  	percentPosition: true
		});
		$('.grid').masonry('reloadItems');
	} ,100); 
}
/*masonry*/
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  percentPosition: true
});

