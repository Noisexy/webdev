import React, { useEffect, useState } from "react";
import "./HomePage.css";
import FlareIcon from "@material-ui/icons/Flare";
import ImageIcon from "@material-ui/icons/Image";
import GifIcon from "@material-ui/icons/Gif";
import PollIcon from "@material-ui/icons/Poll";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { useHistory } from "react-router-dom";

//import { useFetchTweets } from "../../customHooks/useFetchdb";

function HomePage({ enterData, setEnterData }) {
  const [user, setUser] = useState("");
  const [isHomePage, setIsHomePage] = useState(true);
  const [isMessages, setIsMessages] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  useEffect(() => {
    //this use Effect is basically where we access to the username if there was one stored in the
    //browser to display it an keep the value even after refresh
    const userLogged = localStorage.getItem("user");
    if (userLogged) {
      setUser(userLogged);
    }
  }, []);

  return (
    <section className="homePageContainer">
      <LeftBar
        user={user}
        isHomePage={isHomePage}
        setIsHomePage={setIsHomePage}
        isMessages={isMessages}
        setIsMessages={setIsMessages}
        isProfile={isProfile}
        setIsProfile={setIsProfile}
      />
      <MiddleContainer
        username={user}
        isHomePage={isHomePage}
        setIsHomePage={setIsHomePage}
        isMessages={isMessages}
        setIsMessages={setIsMessages}
        isProfile={isProfile}
        setIsProfile={setIsProfile}
      />
      <RigthBar />
    </section>
  );
}

const LeftBar = ({
  user,
  isHomePage,
  setIsHomePage,
  isMessages,
  setIsMessages,
  isProfile,
  setIsProfile,
}) => {
  const handleHome = () => {
    if (!isMessages && !isProfile) {
      setIsHomePage(true);
    } else {
      setIsHomePage(!isHomePage);
      setIsMessages(false);
      setIsProfile(false);
    }
  };

  const handleMessages = () => {
    setIsMessages(true);
    setIsHomePage(false);
    setIsProfile(false);
  };

  const handleProfile = () => {
    setIsProfile(true);
    setIsMessages(false);
    setIsHomePage(false);
  };

  return (
    <section className="homePageLeftBar">
      <div className="leftBarIconsContainer">
        <span>
          <TwitterIcon fontSize="large"></TwitterIcon>
        </span>
        <span className="leftBarLinkIcon" onClick={() => handleHome()}>
          <HomeIcon fontSize="large"></HomeIcon>
          <p>Home</p>
        </span>
        {/* <span className="leftBarLinkIcon">
          <FormatAlignCenterIcon fontSize="large"></FormatAlignCenterIcon>
          <p>Explore</p>
        </span> */}

        {/* <span className="leftBarLinkIcon">
          <NotificationsNoneIcon fontSize="large"></NotificationsNoneIcon>
          <p>Notifications</p>
        </span> */}

        <span className="leftBarLinkIcon" onClick={() => handleMessages()}>
          <MailOutlineIcon fontSize="large"></MailOutlineIcon>
          <p>Messages</p>
        </span>
        {/* 
        <span className="leftBarLinkIcon">
          <BookmarkBorderIcon fontSize="large"></BookmarkBorderIcon>
          <p>Saved</p>
        </span> */}

        {/* <span className="leftBarLinkIcon">
          <ListAltIcon fontSize="large"></ListAltIcon>
          <p>Lists</p>
        </span> */}

        <span className="leftBarLinkIcon" onClick={() => handleProfile()}>
          <PermIdentityIcon fontSize="large"></PermIdentityIcon>
          <p>Profile</p>
        </span>

        {/* <span className="leftBarLinkIcon">
            <MoreHorizIcon fontSize="large"></MoreHorizIcon>
            <p>More options</p>
          </span> */}

        <button>Tweet</button>

        <div className="leftBarIconProfileContainer">
          <img
            src="https://pbs.twimg.com/media/E9sN5jzVUAUgYHn.png"
            alt="pfp"
          />
          <span> @{user}</span>
        </div>
      </div>
    </section>
  );
};

const MiddleContainer = ({
  username,
  isHomePage,
  setIsHomePage,
  isMessages,
  setIsMessages,
  isProfile,
  setIsProfile,
}) => {
  const [tweets, setTweet] = useState("");
  const [tweetTrigger, setTweetTrigger] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setTweet(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted tweet");
    await axios
      .put("http://localhost:8000/api/v1/tweets", {
        username,
        tweets,
      })
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
    setTweet("");
    setTweetTrigger(!tweetTrigger);
  };

  return (
    <section className="homePageMiddleContainer">
      <div className="homePageMiddleHeader">
        <h1>Inicio</h1>
        <FlareIcon className="flareIcon" />
      </div>
      <div className="homePageStatusContainer">
        <img src="https://pbs.twimg.com/media/E9sN5jzVUAUgYHn.png" alt="pfp" />
        <form className="homePageStatusInfoType" onSubmit={handleSubmit}>
          <textarea
            type="text"
            placeholder="¿Que estas pensando?"
            value={tweets}
            onChange={handleChange}
            required={true}
          />
          <div className="homePageStatusInfoTypeButtons">
            <div className="homePageStatusInfoTypeButtonsIcons">
              <ImageIcon style={{ marginLeft: "10px" }} />
              <GifIcon style={{ marginLeft: "10px" }} />
              <PollIcon style={{ marginLeft: "10px" }} />
              <InsertEmoticonIcon style={{ marginLeft: "10px" }} />
              <CalendarTodayIcon style={{ marginLeft: "10px" }} />
            </div>
            <div className="homePageStatusInfoTypeButtonsTweet">
              <button type="submit">Tweet</button>
            </div>
          </div>
        </form>
      </div>
      {isHomePage && (
        <TweetContainer username={username} tweetTrigger={tweetTrigger} />
      )}
      {isMessages && <MessagesContainer />}
      {isProfile && (
        <ProfileContainer username={username} tweetTrigger={tweetTrigger} />
      )}
    </section>
  );
};

const MessagesContainer = () => {
  return (
    <div className="messagesContainer">
      <h1>Messages</h1>
    </div>
  );
};

const ProfileContainer = ({ username, tweetTrigger }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUserTweets = async () => {
      const userLogged = localStorage.getItem("user");
      if (userLogged) {
        //console.log("enter here");
        await axios
          .get(
            `http://localhost:8000/api/v1/tweets/userTweets?username=${userLogged}`
          )
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));
        console.log(data);
      }
    };

    fetchUserTweets();
  }, [tweetTrigger]);

  return (
    <section className="profileContainer">
      <div className="profileDataContainer">
        <img
          className="tweetPfp"
          src="https://pbs.twimg.com/media/E9sN5jzVUAUgYHn.png"
          alt="pfp"
        />
        <h3>{username}</h3>
        <img
          className="bgUserImg"
          src="https://observatoriodelpaisajeucr.org/wp-content/uploads/2016/10/video-bg-1024x576.jpg"
          alt="pfp"
        />
      </div>
      <h2 className="tweetsText">Tweets</h2>
      {data.map((tweet, index) => {
        return (
          <div className="tweetContainer" key={index}>
            <img
              className="tweetPfp"
              src="https://pbs.twimg.com/media/E9sN5jzVUAUgYHn.png"
              alt="pfp"
            />
            <span>
              <h2 className="tweetContainerUserName">{username}</h2>
              <h2 className="tweetContainerUserNameat">@{username}</h2>
            </span>
            <p>{tweet}</p>
            <div className="tweetImageContainer">
              {/* <img
            className="tweetImage"
            src="https://observatoriodelpaisajeucr.org/wp-content/uploads/2016/10/video-bg-1024x576.jpg"
            alt="pfp"
          /> */}
            </div>
          </div>
        );
      })}
    </section>
  );
};

const TweetContainer = ({ username, tweetTrigger }) => {
  const [otherTweets, setOtherTweets] = useState([]);

  useEffect(() => {
    //console.log(tweetTrigger);

    const fetchAllTweets = async () => {
      const userLogged = localStorage.getItem("user");
      await axios
        .get("http://localhost:8000/api/v1/tweets")
        .then((res) => {
          //setData(data.concat(otherTweets));
          let newArr = [];
          let newArr2 = [];
          newArr = res.data.filter((user) => user.user === userLogged);
          newArr2 = res.data.filter((user) => user.user !== userLogged);
          setOtherTweets(newArr.concat(newArr2));
        })
        .catch((err) => console.log(err));
    };

    //fetchUserTweets();
    fetchAllTweets();
  }, [tweetTrigger]);

  // useEffect(() => {
  //   console.log(otherTweets);
  //
  //   console.log(data);
  // });
  // useEffect(() => {
  //   fetchAllTweets();
  // }, [tweetTrigger]);

  return otherTweets.map((tweet, index) => {
    //console.log(tweet);
    const { user, tweets, id } = tweet;
    return tweets.map((msg, index) => {
      //console.log(msg);
      return (
        <div className="tweetContainer" key={index}>
          <img
            className="tweetPfp"
            src="https://pbs.twimg.com/media/E9sN5jzVUAUgYHn.png"
            alt="pfp"
          />
          <span>
            <h2 className="tweetContainerUserName">{user}</h2>
            <h2 className="tweetContainerUserNameat">@{user}</h2>
          </span>
          <p>{msg}</p>
          <div className="tweetImageContainer">
            {/* <img
            className="tweetImage"
            src="https://observatoriodelpaisajeucr.org/wp-content/uploads/2016/10/video-bg-1024x576.jpg"
            alt="pfp"
          /> */}
          </div>
        </div>
      );
    });
  });
};

const trendingTopicsData = [
  {
    topic: "Gaming",
    interested: true,
  },
  {
    topic: "Entertainment",
    interested: true,
  },
  {
    topic: "Sports",
    interested: true,
  },
  {
    topic: "Music",
    interested: true,
  },
];

const RigthBar = () => {
  const [trending, setTrending] = useState(trendingTopicsData);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search submitted");
  };

  const handleTrendingClickX = (i) => {
    const newArr = trending.filter((topic, index) => index !== i);
    setTrending(newArr);
  };
  return (
    <section className="homePageRightBar">
      <form className="rightBarSearchForm" onSubmit={handleSubmit}>
        <input type="text" placeholder="SEARCH" />
        <button type="submit">
          <SearchIcon></SearchIcon>
        </button>
      </form>

      <div className="rigthBarItemsContainer">
        <h1>Trending Topics</h1>
        <ul>
          {trending.map((topics, index) => {
            const { topic, interested } = topics;

            return (
              <>
                {interested && (
                  <li key={index}>
                    {topic}
                    <span onClick={() => handleTrendingClickX(index)}>
                      <p>x</p>
                    </span>
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default HomePage;
