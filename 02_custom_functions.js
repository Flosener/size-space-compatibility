// Here, you can define all custom functions, you want to use and initialize some variables

// Helper function for counterbalancing (used in 06-main).
const counterbalance = _.sample([0,1]);


// Helper function to fill array in 04-trials
  // https://stackoverflow.com/questions/12503146/create-an-array-with-same-element-repeated-multiple-times
function fillArray(value1, value2, len) {
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(value1);
    arr.push(value2);
  }
  return arr;
}

// For generating random participant IDs (dec2hex :: Integer -> String)
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};


// Error feedback if participants exceeds the time for responding.
  // Function does not work, as the setTimeout function is no "sleep()" function.
  // We tried to implement and use a sleep/wait function, but it was to
  // hard to integrate the function into the custom view such that it works to our wishes.
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 2 seconds
    window.timeout.push(
      timer = setTimeout(function(){
      $('#feedback').text('Please respond faster!');
    }, 2000));
    next();
};

// Compares the chosen answer to the value of `option1`.
  // Also implemented in the custom key press view.
const check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.expected) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.expected);
        }
        next();
    })
}
