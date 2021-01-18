import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import ReceiptIcon from "@material-ui/icons/Receipt";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import ShareIcon from "@material-ui/icons/Share";
import LanguageIcon from "@material-ui/icons/Language";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "./SearchResult.css";
import { useStateValue } from "../contextApi/StateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";
import { Link } from "react-router-dom";

function SearchResult() {
  const [question, setQusetion] = useState("");
  const [showAnswer, setshowAnswer] = useState(false);

  const [{ term }, dispatch] = useStateValue();

  const { data } = useGoogleSearch(term);
  const openToggle = () => {
    setshowAnswer(!showAnswer);
  };

  console.log(data);
  return (
    <div className="searchresult">
      <div className="searchresult__header">
        <div className="searchresult__headerRow1">
          <div className="searchresult__left">
            <Link to="/">
              <img
                src="https://www.google.com.ng/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
                alt=""
                className="logo"
              />
            </Link>
            <SearchInput term />
          </div>
          <div className="searchresult__right">
            <AppsIcon />
            <button className="signin-btn">Sign in</button>
          </div>
        </div>
        <div className="searchresult__headerRow2">
          <div className="search--extra">
            <div>
              <SearchIcon />
              <p>all</p>
            </div>
            <div>
              <ImageIcon />
              <p>Images</p>
            </div>
            <div>
              <ReceiptIcon />
              <p>News</p>
            </div>
            <div>
              <OndemandVideoIcon />
              <p>Videos</p>
            </div>
            <div>
              <LocationOnIcon />
              <p>maps</p>
            </div>
            <div>
              <MoreVertIcon />
              <p>more</p>
            </div>
          </div>
          <div className="search--extraLeft">
            <p>Settings</p>
            <p>Tools</p>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchresult__body">
          <p className="time">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>
          <div className="container__split">
            <div className="container__left">
              {data?.items.map((item) => (
                <div className="card">
                  <div className="card__top">
                    <a href={item.link} className="card__link">
                      {item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src && (
                          <img
                            className="object-image"
                            src={
                              item.pagemap?.cse_image?.length > 0 &&
                              item.pagemap?.cse_image[0]?.src
                            }
                            alt=""
                          />
                        )}
                      {item.displayLink}
                    </a>
                    <ArrowDropDownIcon />
                  </div>
                  <a href="item.link" className="card__title">
                    {item.title}
                  </a>

                  <p className="snippet">{item.snippet}</p>
                  <div className="card__split"></div>
                </div>
              ))}
              {/* <div className="toggler">
                  <h3>People also ask</h3>
                  <div className="row">
                    <div
                      className="question"
                      onClick={() => {
                        openToggle();
                      }}
                    >
                      <p>What is the cheapest Tesla?</p>
                      {showAnswer ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </div>
                    <>
                      {showAnswer && (
                        <div className="answer">
                          <p className="snippet">
                            The Model 3 is the newest car in the Tesla
                            portfolio, and also its top-selling vehicle. Its
                            base price is $37,990. This makes it Tesla's most
                            affordable vehicle, but unfortunately still almost
                            $3,000 more than the $35,000 price tag long-promised
                            by Tesla.Aug 24, 2020.
                          </p>
                          <a href="">
                            <span>
                              www.solarreviews.com › blog ›
                              )}
                              how-much-do-teslas-elect...
                            </span>
                            <h4>
                              How much does a Tesla cost? All Tesla models &
                              prices in 2020
                            </h4>
                          </a>
                        </div>
                      )}
                    </>
                  </div>
                </div> */}
            </div>

            {/* <div className="container__right"> */}
            {/* <div className="container">
                    <div className="container__header">
                      <h2>tesla, Inc.</h2>
                      <ShareIcon />
                    </div>
                    <p className="tag">Vehicle manufacturer</p>
                    <div className="weblink">
                      <LanguageIcon />
                      <a href="">tesla.com</a>
                    </div>
                    <p className="snippet">
                      Tesla, Inc. is an American electric vehicle and clean
                      energy company based in Palo Alto, California. The company
                      specializes in electric vehicle manufacturing, battery
                      energy storage from home to grid scale and, through its
                      acquisition of SolarCity, solar panel and solar roof tile
                      manufacturing. <a href="">wikipedia</a>
                    </p>
                    <div className="list">
                      <div>
                        <h4>Stock Price:</h4>
                        <p>TSLA (NASDAQ) US$497.43 +54.75 (+12.37%)</p>
                      </div>
                      <div>
                        <h4>Stock Price:</h4>
                        <p>TSLA (NASDAQ) US$497.43 +54.75 (+12.37%)</p>
                      </div>
                      <div>
                        <h4>Stock Price:</h4>
                        <p>TSLA (NASDAQ) US$497.43 +54.75 (+12.37%)</p>
                      </div>
                      <div>
                        <h4>Stock Price:</h4>
                        <p>TSLA (NASDAQ) US$497.43 +54.75 (+12.37%)</p>
                      </div>
                    </div>
                    <h3>Profiles</h3>
                    <div className="profiles">
                      <TwitterIcon />
                      <LinkedInIcon />
                      <InstagramIcon />
                      <YouTubeIcon />
                      <PinterestIcon />
                    </div>
                    <h3>People also search for</h3>
                  </div> */}
            {/* <p className="feedback">Feedback</p> */}
            {/* </div> */}
          </div>
        </div>
      )}
      <footer>
        <div>
          <div>
            <h3>Location</h3>
          </div>
        </div>
        <div>
          <div>
            <h3>Help</h3>
            <h3>Send feedback</h3>
            <h3>Privacy</h3>
            <h3>Terms</h3>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SearchResult;
