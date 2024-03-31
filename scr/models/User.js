import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
        select: false,
      },
      avatar: {
        type: String,
        required: true,
      },
      background: {
        type: String,
        required: true,
    }
});

UserSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 8);
});

const User = mongoose.model("User", UserSchema);

export default User;