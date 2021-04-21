import mongoose from 'mongoose';

const connectToDb = () => {
  const dbConnect = process.env.DBCONNECT;
  // @ts-ignore
  mongoose.connect(dbConnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }).then(() => {
    console.log('connected');
  });
};

module.exports = connectToDb;
