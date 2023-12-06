
import { useState } from 'react';
import './App.css';

function App() {

  //   const[firstName,setFirstName] = useState("");
  //   const[lastName,setLastName] = useState("");

  //   console.log(firstName);
  //   console.log(lastName);

  // function changeFirstHandler(event){
  //   // console.log("printing first name")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastHandler(event){
  //   // console.log("printing last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "", lastName: "",
    email: "", comments: "", isVisible: true, mode: "", favCar: ""
  })

  function changeHandler(event) {
    const { name, type, value, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })

  }
  return (
    <div className="App">
      <form>
        <input
          type='text'
          placeholder='first name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        />

        <br />
        <br />

        <input
          type='text'
          placeholder='last name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />

        <br />
        <br />

        <input
          type='email'
          placeholder='Enter your email here'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />

        <br />
        <br />

        <textarea
          placeholder='Enter your comments here'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />
        <br />
        <br />

        <input
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I Visible ?</label>

        <br />
        <br />

        <fieldset>
          <legend>Mode:</legend>

          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="Online-Mode"
            id='Online-Mode'
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor='Online-Mode'>Online Mode</label>

          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="Offline-Mode"
            id='Offline-Mode'
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor='Offline-Mode'>Offline Mode</label>
        </fieldset>

        <label htmlFor='favCar'>Tell me your fav car</label>

        <select
          onChange={changeHandler}
          name='favCar'
          id='favCar'
          value={formData.favCar}
        > 

        <option value="scorpio">Scorpio</option>
        <option value="fartuner">fartuner</option>
        <option value="Tharr">Tharr</option>
        <option value="Legender">Legender</option>
        <option value="Defender">Defender</option>

        </select>

        <button>Submit</button>


      </form>
    </div>
  );
}

export default App;
