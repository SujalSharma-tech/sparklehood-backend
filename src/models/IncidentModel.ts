import mongoose, { Document, Schema } from 'mongoose';

export interface IIncident {
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
  reported_at: Date;
}

export interface IIncidentDocument extends IIncident, Document {}

const incidentSchema = new Schema<IIncidentDocument>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    severity: {
      type: String,
      enum: {
        values: ['Low', 'Medium', 'High'],
        message: '{VALUE} is not a valid severity level',
      },
      required: [true, 'Severity is required'],
    },
    reported_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Incident = mongoose.model<IIncidentDocument>('Incident', incidentSchema);

export default Incident;