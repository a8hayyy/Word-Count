// var countTraget = document.querySelector("#word-count-input");
// var wordCount = document.querySelector("#word-count");
// var characterCount = document.querySelector("#character-count");

// var count = function(){
//     var characters = countTraget.value;
//     var characterLength = characters.length;

//     var words = characters.split(/[\n\r\s]+/g).fliter(
//         function (word) {
//             return word.length > 0;
//         }
//     );

//         wordCount.innerHTML = words.length;
//         characterCount.innerHTML = characterLength;
// };

// count;

// window.addEventListener(
//     "input",
//     function(event){
//         if(event.target.matches("#word-count-input")){
//             count;
//         }
//     },
//     false
// );

// =======================================================================

let button = document.getElementById('btn');

button.addEventListener('click', function(){
    let word = document.getElementById('str').value;
    let count = word.length;
    let outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `<h1>${count}</h1>`
});