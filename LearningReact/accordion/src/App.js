import React, { useState, useEffect } from "react";
import "./App.css";

var questions = [
  //array of data
  {
    key: 0,
    message: "Do I have to allow the use of cookies?",
    description: `Yes, you have to! Don't worry, it is only to ensure the integrity of the website, we ain't gonna track your ass, or will we?`,
    showT: false,
  },
  {
    key: 1,
    message: "How do I change my page password.",
    description: `You can change your password by going into your account settings and clicking the change password option`,
    showT: false,
  },
  {
    key: 2,
    message: "What is Bank ID",
    description: `It is your personal account ID, which you can use to withdraw or deposit money from your account`,
    showT: false,
  },
  {
    key: 3,
    message: "Whose birth date can I use?",
    description: `Yours... DUH!`,
    showT: false,
  },
  {
    key: 4,
    message: "When do I recieve a password ordered by letter",
    description: `Someday bro, just wait for it, our schedule is a little bit busy, but it will someday arrive at your doorstep`,
    showT: false,
  },
];

function App() {
  return (
    <>
      <div className="container">
        <div className="frame">
          <h3>Questions And Answers About Login</h3>
          <div className="questions">
            <QA />
          </div>
        </div>
      </div>
    </>
  );
}

const QA = () => {
  const [message, setMessage] = useState(questions); //useState variable equals to the questions array
  const [show, setShow] = useState(false); // useState that we are gonna use to re-render

  const showDesc = (id) => {
    // function that takes the id of the button that we click, it is also triggered once we click on a button
    //it shows the message of the button's question that we clicked on
    message.map((msg) => {
      //we loop through the array to check which item has the id that we passed when we clicked on the button
      const { key, showT } = msg; 
      if (id === key) {
        message[id].showT = !message[id].showT; //we make its show varible the opposite of its value to show it or hide it
        setShow(!show); // we update show, so that the component re-renders
      }
    });
  };

  return (
    <>
      {message.map((msg) => {//looping through the array that contains all of the info... 'msg' is a varible that in each iteration is equals to one of the array's items
        const { key, message, description, showT } = msg; // we define the attributes that we wanna use from the item
        return (
          <div className="questionFrame">
            <h4 key={key}>
              {message} 
              {""}
              <span onClick={() => showDesc(key)/* we call in the function that set's the item's showT varible to the opposite of what it is show/hide */}>
                {showT ? <p>-</p> : <p>+</p>}
              </span>{" "}
              {showT ? <p>{description}</p> : "" /* we show the description, as long as, the showT variable is true and hide it, as long as, it is false */}
            </h4>
          </div>
        );
      })}
    </>
  );
};

export default App;
