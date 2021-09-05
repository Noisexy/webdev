import React from 'react';
import {useState} from 'react';

//css
import './index.css'

import {people} from './dataBase'
import {Card} from './card'


export function App(){
  const [data, setData] = useState(people);

  return(
    <>
      <div className="container">
        <h1 style={{position:'absolute', top: '200px'}}>You have {data.length} birthdays today!</h1>
        <div className="frame" style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
            {data.map((person)=>{
              const {key, name, age, img} = person;
              return (
                <>
                  <Card key={key} data={person}/>
                </>
              )
            })}
        </div>

        <button className="btn" onClick={() => setData([])}>clear</button>
        
      </div>


    </>
  );
}


