import mongoose from 'mongoose';

const CounterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 83 } // Start from 83 as requested
});
 
const Counter = mongoose.model('Counter', CounterSchema);

export default Counter;