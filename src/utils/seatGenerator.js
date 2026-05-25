export const seatGenerator = bookedSeats => {
  const rows = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
  const column = 6;
  const seats = [];

  rows.forEach(letter => {
    for (let colNumber = 1; colNumber <= column; colNumber++) {
      const isAisle = colNumber === 3;
      const seatId = `${letter}-${colNumber}`;
      const isReserved = bookedSeats.includes(seatId);

      seats.push({
        id: seatId,
        status: isAisle ? 'empty' : isReserved ? 'reserved' : 'available',
        price: letter < 'C' ? 300 : 150,
      });
    }
  });
  return seats;
};
