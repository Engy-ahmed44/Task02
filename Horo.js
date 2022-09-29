"use strict";
//function getHoroscope() {}

const getHoroscope = function () {
  //Get Values day, month, year
  let day = Number(document.getElementById("day").value);
  let month = Number(document.getElementById("month").value);
  let year = Number(document.getElementById("year").value);

  //Validate day, month, year,
  let isValidDate = validateDate(day, month, year);
  if (isValidDate) {
    //Get correct Horoscope
    let horoscopeName = getHoroscopeName(day, month);
    displayHoroscopeName(horoscopeName);
    //Display correct horoscope
  } else {
    //Display error if exists
    displayError();
  }
};

const validateDate = function (day, month, year) {
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
  if (
    day < 1 ||
    month < 1 ||
    year < 1900 ||
    month > 12 ||
    year > 2100 ||
    day > 31
  )
    return false;
  if (day > 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
    return false;
  }
  if (day > 28 && month == 2 && year % 4 != 0) {
    return false;
  }
  if (day > 29 && month == 2 && year % 4 == 0) {
    return false;
  }
  return true;
};

const displayError = function () {
  document.getElementById("result").innerHTML =
    "<strong style='color:red'>Please enter a valid date</strong>";
};

const displayHoroscopeName = function (name) {
  document.getElementById("result").innerHTML =
    "<strong style='color:green'>" + name + "</strong>";
};

const getHoroscopeName = function (day, month) {
  
   if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) 
  {
    return "Aquarius";
  }else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return "Pisces";

  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    return "Aries";

  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) 
  {
    return "Taurus";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    return "Gemini";
  } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) 
  {
    return "Cancer";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) 
  {
    return "Leo";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) 
  {
    return "Virgo";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) 
  {
    return "Lipra";
  } else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) 
  {
    return "Scorpius";
  } else if ((month == 11 && day >= 20) || (month == 12 && day <= 18)) 
  {
    return "Sagittarius";
  }
  else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    return "Capricornus";
};

}
