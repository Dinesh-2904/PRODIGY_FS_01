const express = require("express");

const router = express.Router();

const {
    register,
    login
} = require("../controllers/authController");

const authMiddleware =
    require("../middleware/authMiddleware");

router.post("/register",register);

router.post("/login",login);

router.get(
    "/dashboard",
    authMiddleware,
    (req,res)=>{
        res.json({
            message:"Protected Route Accessed",
            user:req.user
        });
    }
);

module.exports = router;
const roleMiddleware =
    require("../middleware/roleMiddleware");

router.get(
    "/admin",
    authMiddleware,
    roleMiddleware("admin"),
    (req,res)=>{
        res.json({
            message:"Admin Access Granted"
        });
    }
);