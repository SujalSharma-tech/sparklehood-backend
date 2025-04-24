import { Request, Response, NextFunction } from 'express';
import Incident, { IIncident } from '../models/IncidentModel';
import { AppError } from '../utils/errorHandler';


export const getAllIncidents = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const incidents = await Incident.find().sort({ reported_at: -1 });
    
    res.status(200).json(incidents);
  } catch (error) {
    next(error);
  }
};

export const getIncidentById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const incident = await Incident.findById(req.params.id);
    
    if (!incident) {
      return next(new AppError('Incident not found', 404));
    }
    
    res.status(200).json(incident);
  } catch (error) {
    next(error);
  }
};


export const createIncident = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { title, description, severity } = req.body;
    
    if (!title || !description || !severity) {
      return next(new AppError('Please provide title, description, and severity', 400));
    }
    
    if (!['Low', 'Medium', 'High'].includes(severity)) {
      return next(new AppError('Severity must be one of: Low, Medium, High', 400));
    }
    
    const newIncident = await Incident.create({
      title,
      description,
      severity,
    });
    
    res.status(201).json(newIncident);
  } catch (error) {
    next(error);
  }
};


export const deleteIncident = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    
    if (!incident) {
      return next(new AppError('Incident not found', 404));
    }
    
    res.status(204).json(null);
  } catch (error) {
    next(error);
  }
};