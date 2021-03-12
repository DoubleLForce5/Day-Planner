// Current Date at top of page 
var CurrentDate = moment ();
$("#currentDay").text(CurrentDate.format("dddd MMMM Do, YYYY"));

// Schedule Array containing time options for timeblocks

var schedule = [
  {
    hour: '9am',
    meridiem: 'am',
  },
  {
    hour: '10am',
    meridiem: 'am',
  },
  {
    hour: '11am',
    meridiem: 'am',
  },
  {
    hour: '12pm',
    meridiem: 'pm',
  },
  {
    hour: '1pm',
    meridiem: 'pm',
  },
  {
    hour: '2pm',
    meridiem: 'pm',
  },
  {
    hour: '3pm',
    meridiem: 'pm',
  },
  {
    hour: '4pm',
    meridiem: 'pm',
  },
  {
    hour: '5pm',
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
  formEl.addClass('change');
  timeEl.addClass('col-2');
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

  // color code blocks based on time being past, present, or in the future 
  var currentTime = moment().format("hh");

  console.log(schedule[i].hour);

  $('.change').each(function() {
    console.log(schedule[i].hour);
    if (parseInt($(schedule[i].hour).text()) < currentTime) {
      formEl.addClass('past');
    } if (parseInt($(schedule[i].hour).text()) === currentTime) {
      formEl.addClass('present');
    } if (parseInt($(schedule[i].hour).text()) > currentTime) {
      formEl.addClass('future');
    }
  });

};


