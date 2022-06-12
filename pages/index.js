import LoginForm from "../components/LoginForm";
import { useEffect, useState } from "react";
import AccountPage from "../components/AccountPage";

const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const user_data = [
    {
      email: "lacus.quisque@yahoo.ca",
      password: "test",
      name: "Elvis Beard",
      phone: "1-503-473-2246",
      address: "3039 Id Road",
      currency: "$29.11",
      alphanumeric: "SPC55QQD3XR",
      list: "11",
      country: "Norway",
      region: "Punjab",
      numberrange: "1",
      text: "faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum.",
      postalZip: "46147",
      thumb_nail:
        "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?t=st=1655014275~exp=1655014875~hmac=9fbbe46f0b180951ebf4163999dff8e0bb05d8feec706fbafc47076f76b86177&w=996",
    },
    {
      email: "quis.arcu@yahoo.com",
      password: "test",
      name: "Gage Yang",
      phone: "(435) 672-9788",
      address: "Ap #127-1772 Risus. St.",
      currency: "$51.57",
      alphanumeric: "EEN30JYX1DV",
      list: "11",
      country: "Nigeria",
      region: "Western Visayas",
      numberrange: "0",
      text: "et nunc. Quisque ornare tortor at risus. Nunc ac sem",
      postalZip: "117144",
      thumb_nail:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      email: "egestas.fusce@icloud.ca",
      password: "test",
      name: "Patrick Vasquez",
      phone: "(503) 962-1651",
      address: "170-5414 Mauris Rd.",
      currency: "$80.02",
      alphanumeric: "FCY96DYQ2YT",
      list: "11",
      country: "Nigeria",
      region: "Limpopo",
      numberrange: "0",
      text: "hendrerit neque. In ornare sagittis felis. Donec tempor, est ac",
      postalZip: "58641",
      thumb_nail:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      email: "pellentesque.ultricies@hotmail.com",
      password: "test",
      name: "Louis Mcfadden",
      phone: "(327) 583-6137",
      address: "Ap #126-5290 Id St.",
      currency: "$2.56",
      alphanumeric: "VOR87YBJ7BE",
      list: "3",
      country: "Norway",
      region: "Western Visayas",
      numberrange: "6",
      text: "pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod",
      postalZip: "22578",
      thumb_nail:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      email: "sit@google.net",
      password: "test",
      name: "Cameran Sanford",
      phone: "(911) 253-1826",
      address: "P.O. Box 883, 8550 Rhoncus. Avenue",
      currency: "$96.16",
      alphanumeric: "OQI20KJP7QB",
      list: "15",
      country: "Singapore",
      region: "Lower Austria",
      numberrange: "5",
      text: "vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus",
      postalZip: "26765-514",
      thumb_nail:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      email: "test@test.com",
      password: "test",
      name: "Cameran Sanford",
      phone: "(911) 253-1826",
      address: "P.O. Box 883, 8550 Rhoncus. Avenue",
      currency: "$96.16",
      alphanumeric: "OQI20KJP7QB",
      list: "15",
      country: "Singapore",
      region: "Lower Austria",
      numberrange: "5",
      text: "vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus",
      postalZip: "26765-514",
      thumb_nail:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  // login action/ this is where you would ask db for user
  const Login = (input) => {
    console.log(input);
    const userInput = input.userInput;
    user_data.forEach((user) => {
      if (
        userInput.password &&
        userInput.email == user.email &&
        user.password
      ) {
        setLoggedIn(true);
        return true;
      }
      if (
        userInput.password &&
        userInput.email != user.email &&
        user.password
      ) {
        setLoggedIn(false);
        return false;
      }
    });
  };

  useEffect(() => {
    // Api call to ask for auth before component renders to set state
  });
  // asking the question are you logged in then pointing user to correct page

  return (
    <>
      {loggedIn ? (
        <AccountPage fake_data={user_data} />
      ) : (
        <LoginForm Login={Login} />
      )}
    </>
  );
};

export default Index;
