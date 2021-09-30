import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [grocery, setGrocery] = useState([]); // setting an empty array were we will store the data that we will pass in once we submit the form
  const [item, setItem] = useState({ name: "" }); // this is the useState were we will store the value that we type in the input of the form
  const [op, setOp] = useState("Add"); // controller to display the option that we are doing on the button of the form
  const [isEdit, setIsEdit] = useState(false); //boolean to check if we are currently editing a value;

  useEffect(() => {}, [grocery]); // to re-render the app when grocery is updated

  const handleChange = (e) => {
    // we need to get the event to target its values
    // to handle the changes of the input of the form
    const value = e.target.value; // we get the value of what we are typing in the input
    setItem({ ...item, name: value }); //setting the item variable to what we are typing so that it displays on screen
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // preventing the default behaviour of the form submit event
    setIsEdit(false); // we set is edit to false because we are submitting changes
    if (item.name) {
      // if the item is not an empty string
      const newItem = { ...item, id: new Date().getTime().toString() }; // we get the items values and give it a new property of id and we make it unique with new Date().getTime().toString()
      setGrocery([...grocery, newItem]); // we set the grocery array to its current values plus the new one
      //setGrocery([newItem, ...grocery]); // a way to do the same thing from above but appending to the start instead of the end
      setItem({ name: "" }); // we set item to empty string so that once we submit the input displays an empty value
    }
  };

  const handleEdit = (id, name) => {
    if (!isEdit) {
      // if a value is not being edited
      const newArr = grocery.filter((item) => item.id !== id); // we make a new array were we filter the values of grocery that do not match the id that we are passing in
      setOp("Edit"); // we set the button's text to edit
      setItem({ ...item, name }); // we set the item to that name that we are passing in so that we can edit it on the input
      setGrocery(newArr); // we set the grocery array to the one that we filtered so that is does not contain the value that is being edited
      setIsEdit(true); // we set isEdit to true because we are editing
    }
  };

  const handleDelete = (id) => {
    const newArr = grocery.filter((item) => item.id !== id); // we make a new array were we filter the values of grocery that do not match the id that we are passing in
    setGrocery(newArr); // we set the grocery array to the one that we filtered so that is does not contain the value that was deleted
  };

  return (
    <>
      <section className="section-container" onSubmit={handleSubmit}>
        <div className="container">
          <h3>Grocery Bud</h3>
          <form className="form">
            <input
              type="text"
              id="items"
              name="items"
              placeholder="e.g. eggs"
              value={item.name}
              onChange={handleChange}
            />
            <button type="submit" onClick={() => setOp("Add")}>
              {" "}
              {op}{" "}
            </button>
          </form>
          {grocery.map((i) => {
            const { name, id } = i;
            return (
              <div className="listContainer" key={id}>
                <p>{name} </p>
                <div className="btnContainer">
                  <button onClick={() => handleEdit(id, name)}>Edit</button>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default App;
