import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Incident from '../src/models/IncidentModel';
import connectDB from '../src/config/dbConnection';
import fs from "fs"
dotenv.config();

const sampleIncidents = JSON.parse(fs.readFileSync("scripts/SampleDataforMigration.json","utf-8"));

const seedDB = async () => {
  try {

    await connectDB();

    await Incident.deleteMany({});
   
    const seededIncidents = await Incident.insertMany(sampleIncidents);
    console.log(`${seededIncidents.length} incidents seeded successfully`);
    
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    
    process.exit(0);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error seeding database: ${error.message}`);
    } else {
      console.error('Unknown error occurred when seeding database');
    }
    process.exit(1);
  }
};

seedDB();