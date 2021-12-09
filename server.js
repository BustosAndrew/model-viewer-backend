const express = require("express");
const cors = require("cors");

// express config
const app = express();
const port = process.env.PORT || 5000;

// const corsOptions = {
//     origin: "https://comebackworld.netlify.app"
// };

// express middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/credentials", (req, res) => {
    res.send({
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID
    });
});

app.listen(port, () => {
    console.log(`express listening at http://localhost:${port}`);
});
