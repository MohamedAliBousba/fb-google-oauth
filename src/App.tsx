import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';
import "./App.css";

const App: React.FC = () => {

  const login = (res: any) => {
    console.log(res);
  };

  return (
    <div className="App">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
        buttonText="Login"
        onSuccess={login}
        onFailure={login}
        cookiePolicy={"single_host_origin"}
      />

      <div style={{ margin: "0 10px" }} />

      <FacebookLogin
        appId={process.env.REACT_APP_FB_APP_ID as string}
        autoLoad={true}
        fields="name,email,picture"
        onClick={login}
        callback={login}
      />
    </div>
  );
};

export default App;
