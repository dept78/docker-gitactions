const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    return res.json({ message: "Devesh Node.js my own build Docker container is running ec2 pe" });
});

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
