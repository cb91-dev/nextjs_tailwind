import { data } from "autoprefixer";
import React from "react";

const Profile = (props) => {

  return <div>Your Profile Page {props.data.loggedInUser}</div>;
};

export default Profile;
