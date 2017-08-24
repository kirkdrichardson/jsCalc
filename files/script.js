$(function() {

  // replace characters w/ their JS operands
  function cleanInput(str) {
    var switchObj = {"\u{2212}": "-", "x": "*"}; // key: value == item to be replaced: replacement
    var re = new RegExp(Object.keys(switchObj).join("|"), "gu"); // use | separated keys for matches
    return str.replace(re, (match) => switchObj[match]); // replace matches w/ their value in switchObj
  }

  // evaluate cleaned string
  function calculate(str) {
    str = cleanInput(str);
    try {
      return eval(str);
    }
    catch(e) {
      return "Syntax Error";
    }
  }

  // button logic chain
  function buttonHandling() {
    var screen = document.getElementById('display'); // output screen
    var str = $(this).val(); // the char pressed

    if (str === "AC")
      screen.value = ""; // clear screen
    else if (str === "C")
      screen.value = screen.value.slice(0, screen.value.length - 1); // remove char @ last str index
    else if (str === "X²")
      screen.value += "**2"; // replace displayed char w/ JS notation
    else if (str === "=")
      screen.value = calculate(screen.value); // run calculate Fx
    else
      screen.value += str; // append char to display str
  }

// event listener
$(".key").on("click", buttonHandling);

}); // doc ready
