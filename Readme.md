# AI Safety Incident Log API

This is a RESTful API service for logging and managing hypothetical AI safety incidents. The API allows you to create, retrieve, and delete incidents, with data persistence in MongoDB.

### Live Link 
```
https://sparklehood-backend-1068c8193640.herokuapp.com/incidents
```

### Frontend Dashboard Live Link

```
https://sparklehood.sujal.codes
```

## Technology Stack

- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB
- **ORM**: Mongoose

## Prerequisites

- Node.js (v16+)
- npm
- MongoDB (local instance or remote connection)

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd sparklehood-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory with the following content:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ai-safety-incidents
```

Adjust the `MONGODB_URI` as needed for your MongoDB setup.

### 4. Build the project

```bash
npm run build
```

### 5. Set up the database and seed initial data

Run the seed script to populate the database with sample incidents:

```bash
npm run seed
```

This will create 10 sample incidents in your MongoDB database.

### 6. Start the server

```bash
npm start
```

For development with hot reloading:

```bash
npm run dev
```

The server will be running at `http://localhost:3000`.

## API Endpoints

### 1. Get all incidents

```
GET /incidents
```

**Example Request:**
```bash
curl -X GET http://localhost:3000/incidents
```

**Response:**
```json
[
  {
    "id": "60a1f2c3d4e5f6a7b8c9d0e1",
    "title": "GPT-5 Unauthorized Access Attempt",
    "description": "Multiple attempts detected to access GPT-5 model parameters without proper authorization, potentially leading to model weights leakage.",
    "severity": "High",
    "reported_at": "2025-03-15T09:30:00.000Z"
  },
  {
    "id": "60a1f2c3d4e5f6a7b8c9d0e2",
    "title": "Bias Detection in Language Model Responses",
    "description": "Statistical analysis of model outputs showed consistent political bias in responses to policy questions, potentially influencing user perspectives.",
    "severity": "Medium",
    "reported_at": "2025-03-10T14:45:00.000Z"
  },
  {
    "id": "60a1f2c3d4e5f6a7b8c9d0e3",
    "title": "Prompt Injection Vulnerability",
    "description": "A vulnerability was discovered allowing users to inject instructions that override system prompts in our Intelligent Assistant product.",
    "severity": "Low",
    "reported_at": "2025-03-05T11:20:00.000Z"
  }
]
```

### 2. Create a new incident

```
POST /incidents
```

**Example Request:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "title": "New AI Safety Incident",
  "description": "Detailed description of the incident.",
  "severity": "Medium"
}' http://localhost:3000/incidents
```

**Response:**
```json
{
  "id": "60a1f2c3d4e5f6a7b8c9d0e4",
  "title": "New AI Safety Incident",
  "description": "Detailed description of the incident.",
  "severity": "Medium",
  "reported_at": "2025-04-20T12:00:00.000Z"
}
```

### 3. Get a specific incident by ID

```
GET /incidents/{id}
```

**Example Request:**
```bash
curl -X GET http://localhost:3000/incidents/60a1f2c3d4e5f6a7b8c9d0e1
```

**Response:**
```json
{
  "id": "60a1f2c3d4e5f6a7b8c9d0e1",
  "title": "GPT-5 Unauthorized Access Attempt",
  "description": "Multiple attempts detected to access GPT-5 model parameters without proper authorization, potentially leading to model weights leakage.",
  "severity": "High",
  "reported_at": "2025-03-15T09:30:00.000Z"
}
```

### 4. Delete an incident

```
DELETE /incidents/{id}
```

**Example Request:**
```bash
curl -X DELETE http://localhost:3000/incidents/60a1f2c3d4e5f6a7b8c9d0e1
```

**Response:**
- 204 No Content

## Design Decisions

1. **MongoDB with Mongoose**: Chosen for its flexibility with schema design and ease of use with Node.js applications.
2. **Proper Error Handling**: Implemented a custom error handler to provide clear error messages and appropriate HTTP status codes.
3. **TypeScript**: Used for type safety and better code organization.
4. **Validation**: Implemented basic validation for incident creation to ensure data integrity.
5. **Sorting**: Incidents are sorted by reported_at date in descending order to show the most recent incidents first.

## Sample Data

The seed script populates the database with ten sample incidents

These samples cover a range of severity levels and incident types relevant to AI safety.
