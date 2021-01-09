import React, {useEffect} from 'react';
import './App.css';






















// Check if api and client are talking to each other
function App() {
  const [data, setData] = useEffect('');

  useEffect( () => {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => setData(data.users))
      .catch(err => console.log('aaah', err))
  }, []);

  return (
    <div>
      <ul>
        {data.map((user, i) => <li key={i}>{user}</li>)}
      </ul>
    </div>
  )
}

export default App;
