import "./App.css";
import React, {useState, useEffect, useReducer ,useRef} from "react"

const defaultState = {
  showModal: false,
  modalContent: 'hello world!',
  showHSButton: true,
}

const reducer = (state, action) => {

 if (action.type === "SHOW_MODAL"){
  //  document.body.style.background = 'gray';
   return {
     ...state, showModal: !state.showModal, showHSButton: !state.showHSButton,
   }
 }
}

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [showSideBar, setShowSideBar] = useState(false);
  const showHideSideBar = useRef(null);
  const showBurger = useRef(null);

  useEffect(() =>{
    if(!showSideBar)
    {
      showHideSideBar.current.style.transform = 'translateX(-500px)' 
      showBurger.current.style.transform = ' translateX(0px)'
    } else {
      showHideSideBar.current.style.transform = 'translateX(0px)'
      showBurger.current.style.transform = ' translateX(-500px)'
    }
    
  },[showSideBar])

  return <>
    <div className="sidebar h-screen w-2/12 bg-indigo-200 inline-block" ref={showHideSideBar}> 
      <h3 className="m-2 text-3xl text-gray-800 inline">Noisex</h3>
      <span className="font-extrabold text-2xl text-red-800" style={{marginLeft:'50%'}} onClick={()=> setShowSideBar(!showSideBar)}>X</span>
      <div className="linkContainer">
        <ul className="m-2">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="divContainer">
      <img className="burger" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-burger-food-those-icons-lineal-color-those-icons.png" 
        onClick={()=> setShowSideBar(!showSideBar) } ref={showBurger}
      />
      { state.showHSButton &&
        <button className="btn" style={{margin:'auto'}} onClick={()=> dispatch({type:'SHOW_MODAL'})}>Show/hide</button>}
      {
        state.showModal && <Modal content={state.modalContent}/>
      }
    </div>
  </>;
}


const Modal = ({content}) =>{
  return <div style={{ margin:'auto'}}>
   {content}
  </div>
}

export default App;
