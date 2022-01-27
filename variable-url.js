console.log($("body").prevObject);
var getURL = function() {
  return $("body").prevObject[0].URL;
}

var parentbody = window.parent.document.body;
var container = $(parentbody).find("#mainPanel");
var input = $(parentbody).find("#pageURL");
var urlHTML = "<div id='pageURL'> \n\
<style> \n\
#mainPanelContainer { \n\
  position: absolute !important; \n\
  top: 65px !important; \n\
  left: 50% !important; \n\
  transform: translateX(-50%) !important; \n\
} \n\
#pageInput { \n\
  margin: 10px; \n\
  padding: 10px; \n\
  border-radius: 4px; \n\
  background-color: white; \n\
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.6); \n\
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.6); \n\
  display: flex; \n\
  align-items: center \n\
} \n\
#pageInput span { \n\
  display: inline-block; \n\
  text-align: center; \n\
  width: 25px; \n\
} \n\
#pageInput input { \n\
  height: 35px; \n\
  padding: 5px; \n\
  width: 100%; \n\
  border: none; \n\
  border-radius: 4px; \n\
  margin-left: -25px; \n\
  padding-left: 25px; \n\
  background: transparent; \n\
} \n\
#pageInput button { \n\
  width: 65px; \n\
  height: 35px; \n\
  margin-left: 10px; \n\
  border: none; \n\
  border-radius: 4px; \n\
  padding: 5px 15px; \n\
  font-weight: 600; \n\
  transition: .2s ease-in-out; \n\
} \n\
#pageInput button#pageCopy { \n\
  background-color: #E8E8E8; \n\
  color: black; \n\
} \n\
#pageInput button#pageCopy:hover { \n\
  background-color: #cbcbcb; \n\
} \n\
#pageInput button#pageReload { \n\
  background-color: #253347; \n\
  color: white; \n\
} \n\
#pageInput button#pageReload:hover { \n\
  background-color: #111720; \n\
} \n\
#pageInput button#pageReload:disabled { \n\
  opacity: .1; \n\
} \n\
#pageInput div#pageCopied { \n\
  background: #006B43; \n\
  padding: 5px 10px; \n\
  border-radius: 4px; \n\
  position: relative; \n\
  color: white; \n\
} \n\
#pageInput div#pageCopied:after { \n\
  content: ''; \n\
  position: absolute; \n\
  top: 50%; \n\
  transform: translateY(-50%); \n\
  width: 0; \n\
  height: 0; \n\
  border-left: 7px solid #006B43; \n\
  border-right: 7px solid transparent; \n\
  border-top: 7px solid transparent; \n\
  border-bottom: 7px solid transparent; \n\
  clear: both; \n\
  margin-left: 10px; \n\
} \n\
</style> \n\
<div id='pageInput'> \n\
  <span>&#128279;</span> \n\
  <input id='pageValue' type='text' value='"+getURL()+"'></input> \n\
  <div style='display: none;' id='pageCopied'>&#10004;</div> \n\
  <button id='pageCopy' onClick='var $txt = $(\"<textarea />\"); $txt.val($(\"#pageValue\").val()).css({ width: \"1px\", height: \"1px\" }).appendTo(\"body\"); $txt.select(); if (document.execCommand(\"copy\")) {$txt.remove();}$(\"#pageCopied\").show(200).delay(500).hide(200);'>copy</button> \n\
  <button disabled id='pageReload' onclick='$(\"body\").prevObject[0].location.href = \"https://rm2h68.axshare.com/x_welcome.html#globalvar=01\"; console.log($(\"body\").prevObject);'>reload</button> \n\
</div> \n\
<div>";

//if opject is already there, remove it and re-add
if (input.length >= 0) {
  input.remove();
}
$(container).prepend(urlHTML);
