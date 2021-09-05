import React from 'react';
import ReactDom from 'react-dom';

//css
import './index.css';

import {BookArr} from './Books';
import {BookPrototype} from './book';



const BookList = () =>{

  return (
    <>
      <section className="bookList">
        {BookArr.map((book) => {
          return <BookPrototype key={book.id}  {...book}/>
        })}
      </section>
    </>
  );
  
}




ReactDom.render(<BookList/>, document.getElementById('root'));