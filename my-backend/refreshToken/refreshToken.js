import jwt from "jsonwebtoken";
import AppUser from "../models/AppUser.js";

export const refreshAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken)
      return res.status(403).json({ error: true, message: "Refresh token required" });

    // Check DB
    const user = await AppUser.findOne({
      "userSecurityDetails.refreshToken": refreshToken,
    });

    if (!user)
      return res.status(403).json({ error: true, message: "Invalid refresh token" });

    // Verify refresh token
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    // Create new tokens
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    // Save new refresh token
    user.userSecurityDetails.refreshToken = newRefreshToken;
    await user.save();

    res.json({
      error: false,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });

  } catch (err) {
    res.status(403).json({ error: true, message: "Invalid/expired refresh token" });
  }
};
