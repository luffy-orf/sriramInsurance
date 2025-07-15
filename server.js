import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Database setup
const dbPath = path.join(__dirname, 'database.sqlite');
const sqlite3Verbose = sqlite3.verbose();
const db = new sqlite3Verbose.Database(dbPath);

// Initialize database
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS feedbacks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT,
    rating INTEGER,
    message TEXT NOT NULL,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Insert preloaded feedbacks
  db.run(`DELETE FROM feedbacks`); // Clear existing data
  
  const preloadedFeedbacks = [
    {
      name: 'सागर राऊत',
      phone: '9594932516',
      rating: 5,
      message: 'मनःपूर्वक आभार! मी, सागर अंकुश राऊत (मो. 9594932516), रा. चिंचवली, शेकिन खोपोली, हे नम्रतेने सांगू इच्छितो की मार्च 2022 मध्ये मी स्टार हेल्थ इन्शुरन्स पॉलिसी श्री. रामा रणखांबे यांच्या मार्गदर्शनाखाली घेतली होती. सप्टेंबर 2023 मध्ये माझ्या कुटुंबातील पत्नी व मुलास टायफॉईड झाल्यामुळे हॉस्पिटलमध्ये उपचार करावे लागले. परंतु उपचारानंतर क्लेम प्रक्रियेमध्ये अनेक अडचणी आल्या. हॉस्पिटल कडून चालढकल करण्यात आली आणि अपुर्‍या कागदपत्रांमुळे माझा क्लेम रिजेक्ट झाला. अशा कठीण प्रसंगी श्री. रामा रणखांबे यांनी स्वतः हॉस्पिटलमध्ये येऊन सर्व कागदपत्रांची पूर्तता केली आणि माझा क्लेम मंजूर करून घेतला. त्यांच्या मुळे क्लेमची रक्कम माझ्या बँक खात्यात जमा झाली. मी त्यांचं मनापासून आभार मानतो. हेल्थ पॉलिसी घेताना योग्य सल्लागार निवडणं अत्यंत महत्त्वाचं आहे.'
    },
    {
      name: 'Priyanka',
      phone: '',
      rating: 5,
      message: 'Very Helpful and Cooperation'
    }
  ];

  preloadedFeedbacks.forEach(feedback => {
    db.run(`INSERT INTO feedbacks (name, phone, rating, message) VALUES (?, ?, ?, ?)`,
      [feedback.name, feedback.phone, feedback.rating, feedback.message]);
  });
});

// API Routes
app.get('/api/feedbacks', (req, res) => {
  db.all('SELECT * FROM feedbacks ORDER BY submitted_at DESC', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/api/feedbacks', (req, res) => {
  const { name, phone, rating, message } = req.body;
  
  if (!name || !message) {
    res.status(400).json({ error: 'Name and message are required' });
    return;
  }

  db.run(
    'INSERT INTO feedbacks (name, phone, rating, message) VALUES (?, ?, ?, ?)',
    [name, phone || '', rating || 5, message],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, message: 'Feedback submitted successfully' });
    }
  );
});

// Inquiry Routes
app.get('/api/inquiries', (req, res) => {
  db.all('SELECT * FROM inquiries ORDER BY submitted_at DESC', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/api/inquiries', (req, res) => {
  const { name, phone, email, message } = req.body;
  
  if (!name || !phone || !email || !message) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }

  db.run(
    'INSERT INTO inquiries (name, phone, email, message) VALUES (?, ?, ?, ?)',
    [name, phone, email, message],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      
      // Generate WhatsApp message for admin notification
      const whatsappMessage = `🔔 *New Insurance Inquiry*

📝 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}

💬 *Message:*
${message}

🕒 *Submitted:* ${new Date().toLocaleString('en-IN')}
🆔 *Inquiry ID:* ${this.lastID}

Please follow up with this potential client.`;

      const whatsappUrl = `https://wa.me/919822123088?text=${encodeURIComponent(whatsappMessage)}`;
      
      res.json({ 
        id: this.lastID, 
        message: 'Inquiry submitted successfully',
        whatsappUrl: whatsappUrl
      });
    }
  );
});

// Update inquiry status
app.patch('/api/inquiries/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  if (!status) {
    res.status(400).json({ error: 'Status is required' });
    return;
  }

  db.run(
    'UPDATE inquiries SET status = ? WHERE id = ?',
    [status, id],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Inquiry status updated successfully' });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});