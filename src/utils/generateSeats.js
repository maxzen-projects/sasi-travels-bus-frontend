const getRandomStatus = (id) => {
  // Make some seats sold, some reserved for ladies/gents for demonstration
  const seatNum = parseInt(id.substring(1));

  if (seatNum > 25 && id.startsWith("L"))
    return { status: "sold", originalStatus: "sold", gender: null };
  if (seatNum % 7 === 0)
    return {
      status: "female",
      originalStatus: "female",
      gender: "female",
    };
  if (seatNum % 11 === 0)
    return { status: "male", originalStatus: "male", gender: "male" };

  return { status: "available", originalStatus: "available", gender: null };
};

export const generateSeats = (layoutConfig) => {
  const seats = [];
  if (layoutConfig.lower?.totalSeats) {
    for (let i = 1; i <= layoutConfig.lower.totalSeats; i++) {
      const seatId = `L${i}`;
      let seatType = layoutConfig.lower?.seatType || 'seater'; // default

      // Check for custom seat type mapping
      if (layoutConfig.lower.seatTypes) {
        if (layoutConfig.lower.seatTypes.seater?.includes(i)) {
          seatType = 'seater';
        } else if (layoutConfig.lower.seatTypes.sleeper?.includes(i)) {
          seatType = 'sleeper';
        }
      }
      
      seats.push({
        id: seatId,
        price: 850,
        type: seatType,
        ...getRandomStatus(seatId),
      });
    }
  }
  if (layoutConfig.upper?.totalSeats) {
    for (let i = 1; i <= layoutConfig.upper.totalSeats; i++) {
      const seatId = `U${i}`;
      let seatType = layoutConfig.upper?.seatType || 'seater'; // default

      // Check for custom seat type mapping for upper deck
      if (layoutConfig.upper.seatTypes) {
        if (layoutConfig.upper.seatTypes.seater?.includes(i)) {
          seatType = 'seater';
        } else if (layoutConfig.upper.seatTypes.sleeper?.includes(i)) {
          seatType = 'sleeper';
        }
      }

      seats.push({
        id: seatId,
        price: 1050, // upper deck might be pricier
        type: seatType,
        ...getRandomStatus(seatId),
      });
    }
  }
  return seats;
};