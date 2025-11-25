import mongoose from "mongoose";
const { Schema } = mongoose;

const UserPersonalDetailsSchema = new Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    aadhar: { type: String, required: true },
    email: { type: String, required: true },
});
const UserGurdianDetailsSchema = new Schema({
    fatherName: { type: String, required: true },
    motherName: { type: String, required: false },
    aadhar: { type: String, required: false },
    email: { type: String, required: false },
    mobile: { type: String, required: true },
});
const UserAddressDetailsSchema = new Schema({
    area: { type: String, required: false },
    block: { type: String, required: true },
    district: { type: String, required: true },
    houseNo: { type: String, required: true },
    landmark: { type: String, required: true },
    panchayat: { type: String, required: true },
    pincode: { type: String, required: true },
    state: { type: String, required: true },
    village: { type: String, required: true },
    ward: { type: String, required: false },
});
const UserSecurityDetailsSchema = new Schema({
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    refreshToken: { type: String, default: null },
});

const AppUserSchema = new Schema(
    {
        _id: { type: Schema.Types.ObjectId, auto: true },
        userType: {
            type: String,
            enum: ["01", "02", "03", "04", "05"],
            required: true,
            default: "01",
        },
        userPersonalDetails: UserPersonalDetailsSchema,
        userGurdianDetails: UserGurdianDetailsSchema,
        userAddressDetails: UserAddressDetailsSchema,
        userSecurityDetails: UserSecurityDetailsSchema,
        termsAccepted: { type: Boolean, required: true },
        isDeleted: { type: Boolean, required: false },
    },
    { timestamps: true }
);

export default mongoose.model("AppUser", AppUserSchema);
