const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const connectDB =
    require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/auth",
    require("./routes/authRoutes")
);

app.listen(
    process.env.PORT,
    ()=>{
        console.log(
            `Server Running on Port ${process.env.PORT}`
        );
    }
);
