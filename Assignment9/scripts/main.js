function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}

/*******Part 1***********/
//Place all of your part 1 code here
var name = "Eric Olson";
document.getElementById('partOne').innerHTML = name;

/*******Part 2***********/
var foo = "This is a String";
foo = "This is not an integer";

document.getElementById('partTwo').innerHTML = foo;

/*******Part 3***********/
var partThree = 5;
partThree += 10;
partThree *= 14;
partThree -= 25;

document.getElementById('partThree').innerHTML = partThree

/*******Part 4***********/
var fName = "Eric"
var lName = "Olson"

var fullName = fName + " " + lName

document.getElementById('partFour').innerHTML = fullName

/*******Part 5***********/
var myHtml = ""
myHtml += "<h2>Title</h2>"
myHtml += "<p>Lorem ipsum dolor</p>"
myHtml += "<h3>Pellentesque habitant morbi</h3>"
myHtml += "<p>Morbi in sem quis dui placerat ornare.</p>"

document.getElementById('partFive').innerHTML = myHtml

/*******Part 6***********/
var part6Number =getRandomNumber()

var part6Result
  if (part6Number > 50) {
    document.getElementById('part6Result').innerHTML = "Above 50"
  } else if (part6Number <= 50) {
    document.getElementById('part6Result').innerHTML = "Below or equal to 50"
  }

document.getElementById('part6Number').innerHTML = part6Number;

/***      Part 7*/
var part7Number = getRandomNumber();

var part7Result
if (part7Number < 25) {
  document.getElementById('part7Number').innerHTML = "Below 25"
} else if (part7Number >= 25 && part7Number < 50) {
  document.getElementById('part7Number').innerHTML = "Between 25 and 50"
} else if (part7Number >= 50 && part7Number < 75) {
  document.getElementById('part7Number').innerHTML = "Between 50 and 75"
} else {
  document.getElementById('part7Number').innerHTML = "Above 75"
}
//if (x > y && x > z)



////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}
