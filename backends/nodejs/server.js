const express = require('express');
const app = express();
const port = 8099; 

app.get('/api/oidc-configuration', (req, res) => {
  res.json({
    "authority": "some company",
    "scopes": "login profile"
  });
});

app.listen(port, () => {
  console.log(`Server starting on port 8099...`);
});
