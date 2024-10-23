const numberToMonth = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };



  // Month day, year format (e.g. January 1, 2024)
  function getwrittenDate(date) {
    const dateSplitted = date.split("-");
    return `${numberToMonth[dateSplitted[1]]} ${dateSplitted[2]}, ${
      dateSplitted[0]
    }`;
  }


  export default getwrittenDate;