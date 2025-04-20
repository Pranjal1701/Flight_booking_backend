# Airline Reservation System

Developed a scalable airline reservation system using Node.js, Express.js, and MySQL with a microservices architecture, improving system maintainability and modularity.

## Services

### 1. Searching Service
* **Purpose:** Provides APIs to search available flights based on criteria.
* **Technology:** Node.js, Express.js, Sequelize ORM, MySQL.

### 2. Booking Service
* **Purpose:** Handles flight bookings, maintains reservations, and processes transactions.
* **Technology:** Node.js, Express.js, Sequelize ORM, MySQL.
* **Features:**
  - SQL Transactions for reliable booking operations.
  - Cron job to handle timed operations (e.g., booking expirations).

### 3. API Gateway
* **Purpose:** Acts as a single entry point, routes requests to respective microservices.
* **Technology:** Node.js, Express.js.
* **Features:**
  - Rate limiting to protect backend services.
  - Reverse proxy to forward requests to appropriate services.

## Technology Stack
* Node.js
* Express.js
* MySQL
* Sequelize (ORM)

## Setup Instructions

1. Clone the repository.
2. Install dependencies for each service:
   ```bash
   npm install
   ```
3. Configure MySQL database connection in each service.
4. Run each service separately:
   ```bash
   npm start
   ```
