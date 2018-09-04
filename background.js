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
// var el = document.getElementById('iconBtn');
// if(el){
//   el.addEventListener('click', swapper, false);
// }
// This click event is when the button icon (page action) is clicked it gets fired.
// document.getElementById('iconBtn').addEventListener('click', test);

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {
//             $('#status').html('changed data in page');
//             console.log('success');
//         });
//     });
// });

// MESSAGE API REQUEST CREATES ALERT BOX, TEST SUCCESSFUL
chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {

  //  This was a function I got off of stack overflow
  function parseHTML(html, elements){
      // Parse the HTML
      let parser = new DOMParser();
      let htmlDoc = parser.parseFromString(html, "text/html");

      // Loop through each element that should be removed
      for(let i = 0; i < elements.length; i++){
          // Get all elements that need to be removed
          let element = htmlDoc.getElementsByTagName(elements[i]), index;

          // Loop through each element
          for (index = element.length - 1; index >= 0; index--) {
              let parent = element[index].parentNode;
              // Copy the contents of the element to be removed to its parent so it doesn't get lost
              while( element[index].firstChild ) {
                  parent.insertBefore( element[index].firstChild, element[index] );
              }
              // Remove the element
              element[index].parentNode.removeChild(element[index]);
          }
      }

      // Save the result
      let result = htmlDoc.documentElement.outerHTML;

      // Show the result in the console
      console.log(result);
  }

  // Array of elements to remove
  const arr = ['table','tr','td'];

  // HTML string to parse
  const str = "<body><div><table><tr><td><p>test</p></td></tr></table></div></body>";

  parseHTML(str, arr);

alert(response);

})
