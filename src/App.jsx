import './App.css'
import Counter from './Counter'
import Freinds from './Freinds'
import Users from './Users'

function App() {
  const handleClick2 = () => {
    alert('Hi')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>


      <h1>React</h1>
      <Freinds></Freinds>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick2}>Click Here</button>

      <button onClick={() => addToFive(3)}>Click Here 2</button>

    </>
  )
}

export default App
