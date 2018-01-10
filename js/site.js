$(document).ready(function(){
  console.log(map);
});
function reloadhtml(){
  	url = window.location.href;
  	if (url.includes("article/")) {
  	  article_url = url.replace("/#", "");
      item_id = url.split("#")[1];
      articlerender(article_url, item_id);
  	} else if (url.includes("#") == true) {
		page_url = url.replace("/#", "");
		pagerender(page_url);
  	} else {
    	home_url = window.location.origin + window.location.pathname + "home/"
    	pagerender(home_url);
    }
};

function articlerender(articleurl, item_id){
    console.log(item_id);
    marker = items[item_id];
    var articleicon = "<img class='article-marker' src='" + marker.iconURL  + "' onclick='mapClick()'>";
  	$.get(article_url, function(data){
    	var index = data.indexOf("</h1>");
        data = data.slice(0, index) + articleicon + data.slice(index);
        $("#sidebar-content").html(data);
    });
   marker.openPopup();
   $( ".sidebar" ).scrollTop(0); //tell sidebar scroll to go to the top
}

function pagerender(page_url){
	$.get(page_url, function(data){
		$("#sidebar-content").html(data);
	  });
	this.marker.closePopup();
	$( ".sidebar" ).scrollTop(0); //tell sidebar scroll to go to the top
}

function onClick(url){
    if (url.includes("article/")) {
      item_id = url;
      article_url = window.location.origin + window.location.pathname + item_id;
      articlerender(article_url, item_id);
    } else {
    	page_url = window.location.origin + window.location.pathname + url
    	pagerender(page_url);
    }
}


function mapClick(){
  url = window.location.href;
  url = url.split("#");
  item_id = url[1];
  marker = items[item_id];
  marker.togglePopup();
};
