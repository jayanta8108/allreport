const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// মূল পাতায় গেলে এই HTML কোডটি প্রদর্শন করবে
app.get('/', (req, res) => {
  res.send('<p> জেলা ভূমি অফিস </p>');
});

// সার্ভার চালু করার জন্য
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
