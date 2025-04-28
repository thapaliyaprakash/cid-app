const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());  // To parse JSON requests

const galleryFilePath = path.join(__dirname, 'gallery.json');

// Utility function to read the gallery data from a file
const readGalleryItems = () => {
  try {
    const data = fs.readFileSync(galleryFilePath);
    return JSON.parse(data);
  } catch (err) {
    return []; // Return empty array if file read fails
  }
};

// Utility function to write to the gallery file
const writeGalleryItems = (items) => {
  fs.writeFileSync(galleryFilePath, JSON.stringify(items, null, 2));
};

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Crime Investigation Department (CID) API');
});

// Get all gallery items
app.get('/api/gallery', (req, res) => {
  const galleryItems = readGalleryItems();
  res.json(galleryItems);
});

// Add a new gallery item
app.post('/api/gallery', (req, res) => {
  const { title, imageUrl } = req.body;
  const galleryItems = readGalleryItems();
  const newItem = { id: galleryItems.length + 1, title, imageUrl };
  galleryItems.push(newItem);
  writeGalleryItems(galleryItems);
  res.status(201).json(newItem);
});

// Update a gallery item by ID
app.put('/api/gallery/:id', (req, res) => {
  const { title, imageUrl } = req.body;
  const galleryItems = readGalleryItems();
  const index = galleryItems.findIndex(item => item.id === parseInt(req.params.id));
  if (index !== -1) {
    galleryItems[index] = { id: parseInt(req.params.id), title, imageUrl };
    writeGalleryItems(galleryItems);
    res.json(galleryItems[index]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Delete a gallery item by ID
app.delete('/api/gallery/:id', (req, res) => {
  const galleryItems = readGalleryItems();
  const index = galleryItems.findIndex(item => item.id === parseInt(req.params.id));
  if (index !== -1) {
    galleryItems.splice(index, 1);
    writeGalleryItems(galleryItems);
    res.json({ message: 'Item deleted' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
