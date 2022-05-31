import { useState } from 'react';
import './App.css';



function App() {
  const [inputFields, setInputFields] = useState([
    { dato: '', input: '', type: '' }
  ])

const handleFormChange = (index, event) => {
   let data = [...inputFields];
   data[index][event.target.name] = event.target.value;
   setInputFields(data);
}

const addFields = () => {
  let newfield = { dato: '', input: '' }
  setInputFields([...inputFields, newfield])
}

const submit = (e) => {
  e.preventDefault();
  JSON.stringify(inputFields)
  console.log(inputFields)
}


const removeFields = (index) => {
  let data = [...inputFields];
  data.splice(index, 1)
  setInputFields(data)
}

  return (
    <div className="App">
      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name='dato'
                placeholder='Dato'
                value={input.dato}
                onChange={event => handleFormChange(index, event)}
              />
              <input
               type={input.type}
                name='input'
                placeholder='Input'
                value={input.input}
                onChange={event => handleFormChange(index, event)}
              />   
                <input
                name='type'
                placeholder='Tipo'
                value={input.type}
                onChange={event => handleFormChange(index, event)}
              />   


              <button onClick={() => removeFields(index)}>Quitar</button>
            </div>    
          )
        })}
              <button onClick={addFields}>Agregar</button>
              
              <button onClick={submit}>Guardar</button>
      </form>
      <div>
        <link url="https://www.w3schools.com/html/html_form_input_types.asp"> los tipos de input de datos</link>
      </div>
    </div>
  );
}

export default App;

