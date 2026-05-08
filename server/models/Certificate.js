const mongoose = require('mongoose')

const certificateSchema = new mongoose.Schema(
  {
    recipientName: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    programName: {
      type: String,
      required: true,
    },

    startDate: {
      type: String,
    },

    endDate: {
      type: String,
    },

    issuedBy: {
      type: String,
    },

    certificateId: {
      type: String,
      unique: true,
    },

    template: {
      type: String,
      default: 'classic',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model(
  'Certificate',
  certificateSchema
)