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

// Select the existing DOM element <div class="container">
var containerEl = $('.container');

// Create/add a forum, textarea, and button for each individual time slot 
// Tutor suggested I change var to let in this case. For some reason wih var my code won't output the items in the text field as separate line items in local storage but it will with Let
for (let i = 0; i < schedule.length; i++) {
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
  saveBtnEl.addClass('col-2 save-button' + i);

  // write hour to timeEl 
  timeEl.text(schedule[i].hour);

  // Append time, text, and save button elements to forum 
  formEl.append(timeEl);
  formEl.append(textAreaEl);
  formEl.append(saveBtnEl);

  // Append forum to container 
  containerEl.append(formEl);

  // i + added to save button to ensure that clicking one would not trigger all inputs 
  // On click, text in the textarea is saved to local storage and persist on the page despite refresh 
  $('.save-button' + i).on('click', function(event){
    // prevent default used bc i wrapped everything in a form tag 
    event.preventDefault(); 
    // define user input 
    console.log(event.currentTarget.parentElement.childNodes[1].value)
    var userInput = event.currentTarget.parentElement.childNodes[1].value;
    console.log('userInfo' , userInput)
    // logic that needs to run when event listener is triggered
    // logic is: take value from input and set item to local storage 
    // obj. to string 
    localStorage.setItem('user-input-' + i, JSON.stringify(userInput));
    // // persist user input 
    JSON.parse(localStorage.getItem('user-input-' + i, (userInput)));
    // string to object 
    });

  var currentHour = moment ().format('HH');
  console.log(currentHour);
  console.log(schedule[i].time)
  
  if (currentHour > schedule[i].time) {
    textAreaEl.addClass('past');
  } if (currentHour === schedule[i].time){
    textAreaEl.addClass('present')
  } if (currentHour < schedule[i].time){
    textAreaEl.addClass('future');
  }

};





