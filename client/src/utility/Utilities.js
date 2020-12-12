export const readableAmounts = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatDate = (timestamp) => {
  var months = new Array(
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  );

  var Day = timestamp.getDate();
  var Month = months[timestamp.getMonth()];
  var Year = timestamp.getYear() - 100;

  return Day + " " + Month + " " + Year;
};

export const shortenAddress = (address) => {
  const first = address.substring(0, 4);
  const last = address.substring(address.length - 4);
  return first + "..." + last;
};
