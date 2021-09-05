import React from 'react'

export const BookPrototype = (props) =>{
  // instead of using props as the parameter we can also say ({img, title, author}) to use them as the parameters and not have to type props. before every parameter
  // we can also make a variable that contains the values = to props // like this... const {img, title, author} = props;
  const {title, img, author} = props;

  //attribute, eventHandler
  //onClick, onMouseO
  const clickHandler = () => {
    console.log("clicked");
  }

  return(
    <article className="book">
      <img src={img} alt="book" />
      <h1 onClick={()=>console.log(title)}>{title}</h1>
      <h4 style={{color: '#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>{author}</h4>
      <button onClick={clickHandler}> TEST</button>
    </article>
  );
}
