const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");

// POST /api/add-doctor
router.post("/add-doctor", async (req, res) => {
  try {
    const { name, specialization, experience, gender, consultationMode, fee, rating, image } = req.body;

    if (!name || !specialization || !experience || !gender || !consultationMode || !fee) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const doctor = new Doctor({ name, specialization, experience, gender, consultationMode, fee, rating, image });
    await doctor.save();

    res.status(201).json({ message: "Doctor added successfully", doctor });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/doctors
router.get("/doctors", async (req, res) => {
  try {
    const { modeOfConsult, experience, fees } = req.query;

    const query = {};

    // Mode of Consult filter
    if (modeOfConsult) {
      const consultModes = Array.isArray(modeOfConsult)
        ? modeOfConsult
        : [modeOfConsult];

      const allowedModes = [];

      if (consultModes.includes("Online")) {
        allowedModes.push("Online", "Both");
      }

      if (consultModes.includes("Offline")) {
        allowedModes.push("Offline", "Both");
      }

      query.consultationMode = { $in: allowedModes };
    }

    // Experience filter
    if (experience) {
      const ranges = Array.isArray(experience) ? experience : [experience];
      const experienceQuery = ranges.map((start) => {
        const num = parseInt(start);
        if (num === 0) return { experience: { $gte: 0, $lte: 5 } };
        if (num === 6) return { experience: { $gte: 6, $lte: 10 } };
        if (num === 11) return { experience: { $gte: 11, $lte: 16 } };
        return null;
      }).filter(Boolean);

      if (experienceQuery.length > 0) {
        query.$or = experienceQuery;
      }
    }

    // Fees filter
    if (fees) {
      const feeRanges = Array.isArray(fees) ? fees : [fees];
      const feeQuery = feeRanges.map((start) => {
        const num = parseInt(start);
        if (num === 100) return { fee: { $gte: 100, $lte: 500 } };
        if (num === 500) return { fee: { $gte: 500, $lte: 1000 } };
        if (num === 1000) return { fee: { $gte: 1000 } };
        return null;
      }).filter(Boolean);

      if (feeQuery.length > 0) {
        query.$and = query.$and || [];
        query.$and.push({ $or: feeQuery });
      }
    }

    const doctors = await Doctor.find(query);
    res.status(200).json(doctors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch doctors" });
  }
});


module.exports = router;
