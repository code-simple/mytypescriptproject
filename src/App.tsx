import React from 'react';
import { Person , Country} from './Person';

function App() {
  return (
    <div className="App">
     <Person 
     name="Imran"
     email="imran@gmail.com"
     age={21}
     isMarried={true}
     friends={['Anna','Jessica','Sara','danny']}
     country={Country.Brazil}
     />
    </div>
  );
}

export default App;
