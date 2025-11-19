const User = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register new user
exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
      },
    };

    // Sign JWT and send token
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "7d" }, // expires in 7 days
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
      },
    };

    // Sign JWT and send token
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};



// Testing api
exports.testApi = async (req, res) => {
  return res
    .status(200)
    .json({ msg: "Knowlytics app Api running successfully" });
};

// Register Knowlytics App User
exports.registerKnowlyticsAppUser = async (req, res) => {
  const {
    fullName,
    fatherName,
    motherName,
    personalEmail,
    guardianEmail,
    personalContactNo,
    guardianContactNo,
    profession,
    guardianProfession,
    standardOfStudent,
    password,
  } = req.body;
  console.log("29", req.body);
  try {
    const personaluser = await KnowlyticsAppUser.findOne({ personalEmail });
    if (personaluser) {
      return res.status(400).json({ msgeErr: "Personal email already registered" });
    }
    const personalContact = await KnowlyticsAppUser.findOne({
      personalContactNo,
    });
    if (personalContact) {
      return res
        .status(400)
        .json({ msgeErr: "Personal contact number already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new KnowlyticsAppUser({
      fullName,
      fatherName,
      motherName,
      personalEmail,
      guardianEmail,
      personalContactNo,
      guardianContactNo,
      profession,
      guardianProfession,
      standardOfStudent,
      password: hashedPassword,
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
      (err, token) => {
        if (err) {
          return res.status(500).json({
            status: 500,
            token: null,
            msgeErr: "Fail to register user",
            error: err.message,
          });
        }

        return res.status(200).json({
          status: 200,
          token,
          msgScs: "Registration successful",
        });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

