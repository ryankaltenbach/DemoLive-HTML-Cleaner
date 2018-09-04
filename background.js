// This allows users to turn the extension on and off through manage extension menu
// var toggle = false;
// chrome.browserAction.onClicked.addListener(function(tab) {
//   toggle = !toggle;
//   if(toggle){
//     chrome.browserAction.setIcon({path: "on.png", tabId:tab.id});
//     chrome.tabs.executeScript(tab.id, {file:"SCRIPT.user.js"});
//   }
//   else{
//     chrome.browserAction.setIcon({path: "off.png", tabId:tab.id});
//     chrome.tabs.executeScript(tab.id, {code:"alert()"});
//   }
// });



// function checking if button null
var el = document.getElementById('iconBtn');
if(el){
  el.addEventListener('click', swapper, false);
}



// This click event is when the button icon (page action) is clicked it gets fired.
document.getElementById('iconBtn').addEventListener('click', test);
