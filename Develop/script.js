// Schedule Array containing times 

var schedule = [
  {
    hour: '9';,
    meridiem: 'am';
  };
  {
    hour: '10';,
    meridiem: 'am';
  };
  {
    hour: '11';,
    meridiem: 'am';
  }
  {
    hour: '12';,
    meridiem: 'pm';
  }
  {
    hour: '1';,
    meridiem: 'am';
  }
  {
    hour: '2';,
    meridiem: 'pm';
  }
  {
    hour: '3';,
    meridiem: 'pm';
  }
  {
    hour: '4';,
    meridiem: 'pm';
  }
  {
    hour: '5';,
    meridiem: 'pm';
  }
];



// Current Date at top of page 
var CurrentDate = moment ();
$("#currentDay"). text(CurrentDate.format("dddd MMMM Do, YYYY"));

// Select the existing DOM element <div class="container">
var containerEl = $('#container');

// Create/add a forum, textarea, and button to create the individual timeblocks
var forumEl = $('<forum>');
var timeEl = $('<div>');
var textBlockEl = $('<div>');
var textAreaEl = $('<Textarea>');
var saveBtnEl = $('<button>')


