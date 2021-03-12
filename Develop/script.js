// Current Date at top of page 
var CurrentDate = moment ();
$("#currentDay"). text(CurrentDate.format("dddd MMMM Do, YYYY"));

// Schedule Array containing time options for timeblocks

var schedule = [
  {
    hour: '9',
    meridiem: 'am',
  },
  {
    hour: '10',
    meridiem: 'am',
  },
  {
    hour: '11',
    meridiem: 'am',
  },
  {
    hour: '12',
    meridiem: 'pm',
  },
  {
    hour: '1',
    meridiem: 'pm',
  },
  {
    hour: '2',
    meridiem: 'pm',
  },
  {
    hour: '3',
    meridiem: 'pm',
  },
  {
    hour: '4',
    meridiem: 'pm',
  },
  {
    hour: '5',
    meridiem: 'pm',
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
  var textAreaEl = $('<Textarea>');
  var saveBtnEl = $('<button>');

  // Add CSS attributes 
  formEl.attr('class', 'row');
  timeEl.attr('class', 'hour');
  saveBtnEl.attr('class', 'saveBtn');

  // Add CSS class 
  timeEl.addClass('col-2');

  // textBlockEl.addClass('col-8');
  textAreaEl.addClass('col-8');
  saveBtnEl.addClass('col-2');

  // write hour to timeEl 
  timeEl.text(schedule[i].hour);
  console.log(schedule[i].hour);


  // Append time, text, and save button elements to forum 
  formEl.append(timeEl);
  formEl.append(textAreaEl);
  formEl.append(saveBtnEl);

  // Append forum to container 
  containerEl.append(formEl);
};

