export const layoutConfigs = {
  "1+2": {
    lower: {
      totalSeats: 30,
      seatType: 'sleeper',
      // null represents an aisle
      layout: [
        [1, null, 2, 3],
        [4, null, 5, 6],
        [7, null, 8, 9],
        [10, null, 11, 12],
        [13, null, 15, 16],
        [17, null, 19, 20],
        
      ],
    },
    upper: {
      totalSeats: 30,
      seatType: 'sleeper',
      layout: [
        [1, null, 2, 3], // Example upper deck layout
        [4, null, 5, 6],
        [7, null, 8, 9],
        [10, null, 11, 12],
        [13, null, 15, 16],
        [17, null, 19, 20],
        
      ],
    },
  },
  "2+2": {
    lower: {
      totalSeats: 40,
      layout: [
        [1, 2, null, 3, 4],
        [5, 6, null, 7, 8],
        [9, 10, null, 11, 12],
        [13, 14, null, 15, 16],
        [17, 18, null, 19, 20],
        [21, 22, null, 23, 24],
        
      ],
    },
  },
  "seater_sleeper": {
    lower: {
      totalSeats: 30,
      seatType: 'seater',
      layout: [
        [1, null, 2,  3],
        [4,null, 5,  6],
        [7,null, 8,  9],
        [10,null, 11,  12],
        [13,null, 14,  15],
        [16,null, 17,  18],
        [19,null, 20,  21],
        [22,null, 23,  24],
        [25,null, 26,  27],
        [28,null, 29,  30],

      ],
    },
    upper: {
      totalSeats: 15,
      seatType: 'sleeper',
      layout: [
        [1, null, 2,3],
        [4, null, 5,6],
        [7, null, 8,9],
        [10, null, 11,12],
        [13, null, 14,15],
        [16, null, 17, 18],
        
      ],
    },
  },
  "1+2_sleeper": { // This is a 1+2 sleeper bus (double decker)
    lower: {
      totalSeats: 15,
      seatType: 'sleeper',
      layout: [
        [1, null, 2, 3],
        [4, null, 5, 6],
        [7, null, 8, 9],
        [10, null, 11, 12],
        [13, null, 14, 15],
      ],
    },
    upper: {
      totalSeats: 15,
      seatType: 'sleeper',
      layout: [
        [1, null, 2, 3],
        [4, null, 5, 6],
        [7, null, 8, 9],
        [10, null, 11, 12],
        [13, null, 14, 15],
      ],
    },
  },
  "1+2_mixed": {
    lower: {
      totalSeats: 20, // Based on max seat number in layout
      layout: [
        [1, null, 2, 3],
        [4, null, 5, 6],
        [7, null, 8, 9],
        [10, null, 11, 12],
        [13, null, 15, 16],
        [17, null, 19, 20],
      ],
      // Custom seat type mapping for this deck
      seatTypes: {
        seater: [1, 4, 7, 10, 13, 17],
        sleeper: [2, 3, 5, 6, 8, 9, 11, 12, 15, 16, 19, 20],
      }
    },
    upper: {
      totalSeats: 20, // Based on max seat number in layout
      seatType: 'sleeper',
      layout: [
        [1, null, 2, 3],
        [4, null, 5, 6],
        [7, null, 8, 9],
        [10, null, 11, 12],
        [13, null, 15, 16],
        [17, null, 19, 20],
      ],
    },
  },
};