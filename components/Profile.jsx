import { data } from "autoprefixer";
import React from "react";

const Profile = (props) => {
  console.log(props.data.fake_data[0].name);
  return <div>{props.data.fake_data[0].name}</div>;
};

export default Profile;
