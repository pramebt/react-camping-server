const calNight = (checkIn, checkOut) => {
 
  //1000 ms = 1 s => m => hr => d
  const milliDay = checkOut.getTime() - checkIn.getTime();
  const diffDay = milliDay / (1000 * 60 * 60 * 24);
  return diffDay;
};

exports.calTotal = (price, checkIn, checkOut) => {
  if (!checkIn || !checkOut) return;
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  //change checkIn to checkInDate to make that type from string to object

  const TotalNights = calNight(checkInDate, checkOutDate);
  const TotalPrice = TotalNights * price;

  return { TotalPrice, TotalNights };
};

