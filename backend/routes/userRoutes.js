import express from "express";
import {
  authUser,
  deleteUser,
  getUserProfile,
  getUsers,
  getUsersById,
  registerUser,
  updateUser,
  updateUserProfile,
} from "../controller/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.get("/profile", protect, getUserProfile);
router.put("/updateProfile", protect, updateUserProfile);
router.get("/getusers", protect, admin, getUsers);
router.delete("/:id", protect, admin, deleteUser);
router.get("/:id", protect, admin, getUsersById);
router.put("/:id", protect, admin, updateUser);

export default router;
