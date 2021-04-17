import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AdminService from "../services/AdminService.js";

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAdmin = await AdminService.findOne({ email });

    if (!existingAdmin)
      return res.status(404).json({ message: "Admin does not exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingAdmin.password
    );

    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingAdmin.email, id: existingAdmin._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingAdmin, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Create initial admin

/*router.post("/init", async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await AdminService.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await AdminService.add({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
});*/

export default router;
