const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  groupSize: {
    type: Number,
    required: true,
  },
  ageGroupFrom: {
    type: Number,
    required: true,
  },
  ageGroupTill: {
    type: Number,
    required: true,
  },
  interests: {
    type: [String],
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  genderPreference: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    },
    name: { type: String, required: true }
  },
  availableFrom: {
    type: Date,
    required: true,
  },
  availableTill: {
    type: Date,
    required: true,
  },
});

travelSchema.index({ location: '2dsphere' });

// Define the user model
const Travel = mongoose.model('Travel', travelSchema);


module.exports = Travel;


