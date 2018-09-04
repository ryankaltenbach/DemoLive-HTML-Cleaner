
// $( "table" ).removeClass(function() {
//   return $( this ).prev().attr( "class" );
// });

// Remove specific <tags> replace them with different tags that are Cleaner
// for VG EDITOR.
// Issue getting JQUERY synched up
// $('button').click(function() {
//   $( "<table>" ).replaceWith( "<p>" )
// )};
// document.getElementById('iconBtn').addEventListener('click', test);
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
