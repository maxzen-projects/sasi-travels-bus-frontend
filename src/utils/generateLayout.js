export function generateLayout(layoutConfig) {

  const columns = layoutConfig.columns;
  const seatsPerRow = columns.filter((c) => c === "seat").length;

  const rows = [];
  let seatCounter = 1;

  while (seatCounter <= layoutConfig.seatsPerDeck) {

    const row = [];

    columns.forEach((col) => {

      if (col === "seat") {
        row.push(seatCounter <= layoutConfig.seatsPerDeck ? seatCounter : null);
        seatCounter++;
      } else {
        row.push(null);
      }

    });

    rows.push(row);

  }

  return rows;
}