const passport = require("passport");
const GoogleStrategy = require("passport-google-oidc").Strategy;
const { google } = require("../lib/config");
const userModel = require("../models/user");

const googleAuth = new GoogleStrategy(
  {
    clientID: google.clientID,
    clientSecret: google.clientSecret,
    callbackURL: "/oauth2/redirect/google",
  },
  async (profile, callback) => {
    try {
      const user = await userModel.findOne({
        email: profile.emails[0].value,
      });
      if (!user) {
        const newUser = new userModel({
          userName: profile.displayName,
          email: profile.emails[0].value,
          password: null,
        });
        await newUser.save();
        const userObject = {
          id: newUser._id,
          name: profile.displayName,
        };
        return callback(null, userObject);
      } else {
        const userObject = {
          id: user._id,
          name: user && user.userName ? user.userName : profile.displayName,
        };
        return callback(null, userObject);
      }
    } catch (err) {
      return callback(err);
    }
  }
);

passport.use(googleAuth);

module.exports = googleAuth;
