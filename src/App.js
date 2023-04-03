import './App.css';
import { useState } from 'react'


function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h3>Add your tasks here! </h3>
        </div>

        <div className="input">
          <input value={toDo} type="text" onChange={(e) => setToDo(e.target.value)} placeholder=" Add item..." />
          <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
        </div>
      </div>
      <div className='tasks'>
        <div className='mainmain'>
          <div className='todos'>
            <h2>Tasks added</h2>
            {toDos.map((data) => {
              return (

                <div className="todo">
                  <div className="left">
                    <input onChange={(e) =>   //Changing the status while clicking the checkbox via the ID assigned 
                    {
                      setToDos(toDos.filter(data2 => {
                        if (data2.id === data.id) {
                          data2.status = e.target.checked
                        }
                        return data2
                      }))
                    }}
                      value={data.status} type="checkbox" name="" id="" />
                    <p>{data.text}</p>
                  </div>
                  <div className="right">
                    <i id={data.id} onClick={(e) => {
                      let index = toDos.findIndex(data => { return data.id == e.target.id })
                      if (index !== -1) 
                      {
                        toDos.splice(index, 1);  
                        setToDos([...toDos])
                      }
                    }} className="fas fa-times"></i>
                  </div>
                </div>

              )
            })
            }
          </div>
          <div className='complete'>
            <h2>Tasks Completed</h2>
            {toDos.map((data) => {
              if (data.status) {
                return (
                  <div className='final'>
                    <div className='backfinal'>
                    <p>✓ <strike>{data.text}</strike></p>
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
