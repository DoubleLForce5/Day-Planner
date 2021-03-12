// Current Date at top of page 
var CurrentDate = moment ();
$("#currentDay").text(CurrentDate.format("dddd MMMM Do, YYYY"));

// Schedule Array containing time options for timeblocks

var schedule = [
  {
    hour: '9am',
    time: 09,
  },
  {
    hour: '10am',
    time: 10,
  },
  {
    hour: '11am',
    time: 11,
  },
  {
    hour: '12pm',
    time: 12,
  },
  {
    hour: '1pm',
    time: 13,
  },
  {
    hour: '2pm',
    time: 14,
  },
  {
    hour: '3pm',
    time: 15,
  },
  {
    hour: '4pm',
    time: 16,
  },
  {
    hour: '5pm',
    time: 17,
  }
];

// how access my hour 
// schedule[8].hour

// Select the existing DOM element <div class="container">
var containerEl = $('.container');
// var hourEl = schedule[hour];
// console.log(schedule[hour])

// Create/add a forum, textarea, and button for each individual time slot 
for (var i = 0; i < schedule.length; i++) {
  var formEl = $('<form>');
  var timeEl = $('<div>');
  var textBlockEl = $('<div>');
  var textAreaEl = $('<input>');
  var saveBtnEl = $('<button>');

  // Add CSS attributes 
  formEl.attr('class', 'row');
  timeEl.attr('class', 'hour');
  saveBtnEl.attr('class', 'saveBtn');

  // Add input attributes 
  textAreaEl.attr('type', 'text')
  textAreaEl.attr('id', 'user-input-' + i)
  textAreaEl.attr('name', 'planner-input')

  // Add CSS class 
  formEl.addClass('change');
  timeEl.addClass('col-2 change-2');
  textAreaEl.addClass('col-8 form-input');
  saveBtnEl.addClass('col-2 save-button');

  // write hour to timeEl 
  timeEl.text(schedule[i].hour);
  // console.log(schedule[i].hour);


  // Append time, text, and save button elements to forum 
  formEl.append(timeEl);
  formEl.append(textAreaEl);
  formEl.append(saveBtnEl);

  // Append forum to container 
  containerEl.append(formEl);

  // color code blocks based on time being past, present, or in the future 
  // var currentTime = moment().format("hh");

  // $(document).ready(function() {
  //   $.fn.changeColor = function () {
  //     document.getElementById('col-8').innerHTML = "hello";
  //     console.log( $.fn.changeColor)
  //   }
  // });

  // $('.change').each(function() {
  //   console.log(schedule[i].hour);
  //   if (parseInt($(schedule[i].hour).text()) < currentTime) {
  //     formEl.addClass('past');
  //   } if (parseInt($(schedule[i].hour).text()) === currentTime) {
  //     formEl.addClass('present');
  //   } if (parseInt($(schedule[i].hour).text()) > currentTime) {
  //     formEl.addClass('future');
  //   }
  // });

};


// On click, text in the textarea is saved to local storage and persist on the page despite refresh 
$('.save-button').on('click', function(event){
    // prevent default used bc i wrapped everything in a form tag 
    event.preventDefault(); 
    // define user input 
    console.log(event.currentTarget.parentElement.childNodes[1].value)
    var userInput = event.currentTarget.parentElement.childNodes[1].value;
    console.log('userInfo' , userInput)
    // logic that needs to run when event listener is triggered
    // logic is: take value from input and set item to local storage 
    // console.log('Planner-input: ', userInput.val());
    // obj. to string 
    // localStorage.setItem('userInfo' , JSON.stringify(userInput));
    localStorage.setItem('user-input- ', JSON.stringify(userInput));
    // // persist user input 
    // localStorage.getItem('userInfo' , userInput);
    // string to object 
    // for (j = 0; j < schedule.length; j++) {
    //   localStorage.setItem('userInfo' , JSON.stringify(userInput));
    // };
});


// // listen for save button click event
// saveBtnEl.addEventListener('click', saveText)




