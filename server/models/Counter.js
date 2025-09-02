import mongoose from 'mongoose';

const CounterSchema = new mongoose.Schema({
  _id: { type: 

import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 80 }
});

const Counter = mongoose.model('Counter', counterSchema);
export default Counter;