const { Schema, model } = require("mongoose")

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'El nombre es obligatorio.'],
    },
    date: {
      type: String,
      required: [true, 'La fecha es obligatoria.'],
    },
    location: {
      type: String,
      required: [true, 'La ubicación es obligatoria.']
    }
  },
  {
    timestamps: true
  }
)

const Event = model("Event", eventSchema)

module.exports = Event
