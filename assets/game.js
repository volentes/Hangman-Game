/* Starting the game by clicking on a start button */


document.getElementById("startbutton")
        .addEventListener('click', function() {

/* Having the quote display on "start" */
var display =
document.getElementById("display");
display.innerHTML = displayquote[0];

/*Having the blanks display on "start" */
var blanks =
document.getElementById("blanks");
blanks.innerHTML = word[0];


})

var displayquote = ["A girl should be two things classy and fabulous",
"I like my money right where I can see it…hanging in my closet",
"Fashions fade, style is eternal"];
  displayquote[0]

/* Answer = "Coco Chanel", "Carrie Bradshaw", "Yves Saint Laurent" */
var word = ["_  _  _  _   _  _  _  _  _  _", "_  _  _  _  _  _     _  _  _  _  _  _  _  _",
"_  _  _  _     _  _  _  _  _    _  _  _  _  _  _  _", ];
  word[0]

/*________the above code works ____________*/



// var icon = "Coco Chanel";
// var letr = "C";
// var pos = 0;
// var more = true;
// var found = [];
//   while (more) {
//     pos = icon.indexOf(letr, pos);
//     if (pos < 0) {
//       more = false;
//     }
//     else {
//       found.push(pos);
//       alert("found at " + pos);
//       pos++;
//     }
// }
//
//   alert(found);

// var alphabet = ["A","B","C","D","E","F","G","H","I","J","K",
// "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
