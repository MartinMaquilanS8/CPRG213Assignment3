/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costperday = 0;
var selected_days = 0;
var half_day = document.getElementById("half");
var full_day = document.getElementById("full");
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
var clear = document.getElementById("clear-button");
var calculated_cost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function add_color(){
    if(this.classList.contains('blue-hover') && !this.classList.contains('clicked')){
        this.classList.add('clicked');
        selected_days = selected_days + 1;
        costperday = 35;
        recalculate();
    }
}

monday.addEventListener('click', add_color);
tuesday.addEventListener('click', add_color);
wednesday.addEventListener('click', add_color);
thursday.addEventListener('click', add_color);
friday.addEventListener('click', add_color);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function remove_color(){
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');
    selected_days = 0;
    recalculate();
}
clear.addEventListener('click', remove_color);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half_day.addEventListener('click', function(){
    half_day.classList.add('clicked');
    full_day.classList.remove('clicked');
    costperday = 20;
    recalculate();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full_day.addEventListener('click', function(){
    full_day.classList.add('clicked');
    half_day.classList.remove('clicked');
    costperday = 35;
    recalculate();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(){
    let total_cost = costperday * selected_days;
    calculated_cost.innerHTML = total_cost;
}
