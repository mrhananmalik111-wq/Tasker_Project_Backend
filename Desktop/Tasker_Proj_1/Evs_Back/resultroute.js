import express from "express";
import upload from "./upload.js";

const router = express.Router();

// Single image upload (profilePic is frontend field name)
router.post("/upload-profile", upload.single("profilePic"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Image ka path database me save karna hoga
    const imageUrl = `/uploads/${req.file.filename}`;

    res.json({
      message: "Profile picture uploaded successfully",
      imageUrl: imageUrl
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
