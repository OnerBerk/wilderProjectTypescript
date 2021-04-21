import mongoose, { Model, Schema } from 'mongoose';

const WilderSchema = new Schema({
  name: {
    type: String,
    unique: [true, 'this name already exist'],
    require: [true, 'name is required'],
    minLength: [3, 'min 3 letters'],
    maxLength: [15, 'max 15 letters'],
  },
  city: {
    type: String,
    minLength: [3, 'min 3 lettres'],
    maxLength: [15, 'max 15 lettres'],
  },
  skills: [{ title: String, votes: Number }],
});

module.exports = mongoose.model('wilder', WilderSchema);
