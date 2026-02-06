const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  routeName: {
    type: String,
    required: true, // e.g. Patiala, Ambala
  },
  buses: [
    {
      busId: {
        type: String,
        required: true, // BUS_07
      },
      stops: [
        {
          type: String, // Chitkara University, Banur, etc.
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Route", routeSchema);
