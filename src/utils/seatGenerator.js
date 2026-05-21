export const seatGenerator = () => {
  const rows = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
  const column = 6;
  const seats = [];

  rows.forEach(letter => {
    for (let colNumber = 1; colNumber <= column; colNumber++) {
      const isAisle = colNumber === 3;
      const isReserved = Math.random() < 0.25;

      seats.push({
        id: `${letter}-${colNumber}`,
        status: isAisle ? 'empty' : isReserved ? 'reserved' : 'available',
        price: letter < 'C' ? 300 : 150,
      });
    }
  });
  return seats;
};
