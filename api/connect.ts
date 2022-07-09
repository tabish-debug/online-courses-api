import mongoose from 'mongoose';

export const DBConnect = async (db: string) => {
  try {
      await mongoose.connect(db)
      return console.info(`successfully connected to ${db}`);
  } catch(error) {
      console.error('error connecting to database: ', error);
      return process.exit(1);
  }
};