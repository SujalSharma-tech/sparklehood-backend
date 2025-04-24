import express from 'express';
import {
  getAllIncidents,
  getIncidentById,
  createIncident,
  deleteIncident,
} from '../controllers/IncidentController';

const router = express.Router();

router.route('/')
  .get(getAllIncidents)
  .post(createIncident);

router.route('/:id')
  .get(getIncidentById)
  .delete(deleteIncident);

export default router;