const UserDocument = require("../Models/UserModalNew");

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
console.log("req.body",req.body)
    const isEmailAvailable = await UserDocument.findOne({
      "userPersonalDetails.email": email,
    });

    if (isEmailAvailable) {
      return res.status(400).json({
        error: true,
        message: "Email already used.",
      });
    }

    const isMobileAvailable = await UserDocument.findOne({
      "userPersonalDetails.mobile": mobile,
    });

    if (isMobileAvailable) {
      return res.status(400).json({
        error: true,
        message: "Mobile number already used.",
      });
    }

    const isAadharAvailable = await UserDocument.findOne({
      "userPersonalDetails.aadhar": aadhar,
    });

    if (isAadharAvailable) {
      return res.status(400).json({
        error: true,
        message: "Aadhar already used.",
      });
    }

    const newUser = new UserDocument({
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
        password,
        confirmPassword,
      },

      isDeleted: false,
      termsAccepted
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

module.exports = { userRegistration };
