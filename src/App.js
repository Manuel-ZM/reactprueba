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
  let newfield = { dato: '', input: '', type: ''}
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
    <div className="App" class="w-full">
      
<div class="text-black align-middle items-center text-center p-2 w-1/2 rounded bg-gray-800">
<p class="block text-black text-bold items-center text-center px-2"> 
<b class="text-center text-zinc-400">Base de Datos</b>
</p>
        {inputFields.map((input, index) => {
          return (
            <div class="space-x-2 space-y-1" key={index}>
              <input class='inline-block rounded bg-red-700 text-center space-y-1 space-x-2 border-2'
                name='dato'
                placeholder='Dato'
                value={input.dato}
                onChange={event => handleFormChange(index, event)}
              />
              <input class='inline-block rounded bg-red-700 text-center space-y-1 space-x-2 border-2'
               type={input.type}
                name='input'
                placeholder='Input'
                value={input.input}
                onChange={event => handleFormChange(index, event)}
              />   
              <input class='inline-block rounded bg-red-700 text-center space-y-1 space-x-2 border-2'
                name='type'
                placeholder='Tipo de Dato'
                value={input.type}
                onChange={event => handleFormChange(index, event)}
              />


              <button class="text-bold rounded bg-slate-500 px-2 hover:border-2 hover:text-white" onClick={() => removeFields(index)}>Quitar</button>
            </div>    
          )
        })}
        <div class="my-2"></div>
              <button class="text-bold rounded bg-slate-500 px-2 border-2 py-2 hover:bg-opacity-50" onClick={addFields}>Agregar</button>
              <a class="mx-2"></a>
              <button class="text-bold rounded bg-slate-500 px-2 border-2 py-2 hover:bg-opacity-50" onClick={submit}>Guardar</button>

      <div>
      </div>
      <div class="absolute right-0 top-0 w-1/2 p-2">
      <a href="https://www.w3schools.com/html/html_form_input_types.asp" target="_blank" rel="noopener noreferrer" class="rounded border-2 p-2 bg-slate-500 text-white hover:bg-slate-800">Los tipos de input de datos</a>
      
      <a href="https://github.com/Manuel-ZM/reactprueba" target="_blank" rel="noopener noreferrer" class="rounded border-2 p-2 bg-slate-500 text-white hover:bg-slate-800">Github</a>
      <br></br>
      <p class='font-bold break py-2'>pide usar _uid me comentaron solo usar ReactJs y Tailwind, _uid es una libreria, tampoco puedo hacer que el Json se vea "bonito" es otra libreria</p>
      </div>
      <div>
      <div class="absolute right-0 bottom-1/2 items-center px-2 rounded align-middle break w-1/3 bg-slate-400">
        <a>Json</a>
        {JSON.stringify(inputFields, null, 2)}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;

