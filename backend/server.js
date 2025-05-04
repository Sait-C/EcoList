const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const fileupload = require('express-fileupload');

const errorHandler = require('./middleware/error');

// Load env vars
dotenv.config({ path: "./config/config.env"});

// Route Files
const ai = require('./routes/ai');

const cors = require('cors');
const app = express();

// CORS
var corsOptions = {
  origin: process.env.APP_URL,
  optionsSuccessStatus: 200,
  credentials: true,
  origin: true
}
app.use(cors(corsOptions));

// Body parser
app.use(express.json());

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('combined'));
}

// File Uploading
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/v1/ai', ai);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
}
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = app;