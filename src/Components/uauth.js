import UAuth from "@uauth/js";

let uauth;

if (typeof window !== "undefined") {
  uauth = new UAuth({
    clientID: process.env.REACT_APP_UAUTH_CLIENT_ID,
    clientSecret: process.env.REACT_APP_UAUTH_CLIENT_SECRET,
    scope: "openid email wallet",
    redirectUri: process.env.REACT_APP_UAUTH_REDIRECT_URI,
  });
}

export default uauth;