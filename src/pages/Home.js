import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import Search from "../components/Search";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <p>Gmail</p>
        <p>Images</p>
        <AppsIcon />
        <button className="signin-btn">Sign in</button>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com.ng/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          alt=""
        />
        <Search />
      </div>
      <div className="home__footer">
        <div className="home__footerRow1">
          <h3>Location</h3>
        </div>
        <div className="home__footerRow2">
          <div className="home__footerLeft">
            <h3>Advertising</h3>
            <h3>Business</h3>
            <h3>About</h3>
            <h3>How Search works</h3>
          </div>
          <div className="home__footerRight">
            <h3>Privacy</h3>
            <h3>Terms</h3>
            <h3>Settings</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
