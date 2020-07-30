const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const fullDate = (dateTime, withYear = false) => {
    const date = new Date(dateTime);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    //  returns full date string
    return !withYear ? `${day} ${month},  ${year}` : `${day} ${month}`;
  };