import React from 'react';
import { Person } from './Person';

function App() {
  return (
    <div className="App">
     <Person 
     name="Imran"
     email="imran@gmail.com"
     age={21}
     isMarried={true}
     friends={['Anna','Jessica','Sara','danny']}
     />
    </div>
  );
}

export default App;
