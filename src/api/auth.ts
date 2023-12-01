import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const logout = async () => {
  await GoogleSignin.signOut();
};
