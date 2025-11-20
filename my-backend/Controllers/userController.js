const bcrypt = require("bcryptjs");
const AppUser = require("../Models/UserModalNew").default;

const userRegistration = async (req, res) => {
  try {
    const {
      name,
      email,
      aadhar,
      mobile,
      fatherName,
      motherName,
      guardianMobile,
      guardianEmail,
      state,
      district,
      block,
      panchayat,
      village,
      ward,
      houseNo,
      landmark,
      area,
      pincode,
      password,
      confirmPassword,
      termsAccepted,
    } = req.body;

    const isEmailAvailable = await AppUser.findOne({
      "userPersonalDetails.email": email,
    });
    if (isEmailAvailable) {
      return res.status(400).json({ error: true, message: "Email already used." });
    }

    const isMobileAvailable = await AppUser.findOne({
      "userPersonalDetails.mobile": mobile,
    });
    if (isMobileAvailable) {
      return res.status(400).json({ error: true, message: "Mobile number already used." });
    }

    const isAadharAvailable = await AppUser.findOne({
      "userPersonalDetails.aadhar": aadhar,
    });   
    if (isAadharAvailable) {
      return res.status(400).json({ error: true, message: "Aadhar already used." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        error: true,
        message: "Passwords do not match.",
      });
    }

   const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const hashedConfirmPassword = await bcrypt.hash(confirmPassword, salt);

    const newUser = new AppUser({
      userType: "01",

      userPersonalDetails: {
        name,
        email,
        mobile,
        aadhar,
      },

      userGurdianDetails: {
        fatherName,
        motherName,
        mobile: guardianMobile,
        email: guardianEmail,
      },

      userAddressDetails: {
        state,
        district,
        block,
        panchayat,
        village,
        ward,
        houseNo,
        landmark,
        area,
        pincode,
      },

      userSecurityDetails: {
        password: hashedPassword,
        confirmPassword:hashedConfirmPassword
      },
      isDeleted: false,
      termsAccepted,
    });

    await newUser.save();

    res.status(201).json({
      error: false,
      message: "User registered successfully.",
      data: newUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: true,
      message: "Server error.",
    });
  }
};

const userLogin = async (req, res) => {
  try{
    const {email, password} = req.body;
     const isUserAvailbale = await AppUser.findOne({
      "userPersonalDetails.email": email,
      "userSecurityDetails.password": password,
    }); 

    if(!isUserAvailbale){
      return res.status(400).json({
        error: true,
        message: "Login credential do not match."
      })
    }

  }catch(err){
    console.error(err);
    res.status(500).json({
      error: true,
      message: "Server error.",
    });
  }
}

module.exports = { userRegistration,userLogin };
