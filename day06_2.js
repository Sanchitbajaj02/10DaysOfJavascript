// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  let dayName;
  let date = new Date(dateString);
  
  dayName = date.toLocaleString("en-US", {weekday: "long"});
  // dayName = Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  
  return dayName;
}

let date = "10/11/2009";

console.log(getDayName(date));
