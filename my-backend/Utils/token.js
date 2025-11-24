import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.userPersonalDetails.email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }   // short-lived access token
  );
};

export const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }   // long-lived refresh token
  );
};
