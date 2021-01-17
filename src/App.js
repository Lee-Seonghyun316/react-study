import react, { Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
    id = 2;
    state = {
        information: [
            {
                id: 0,
                name: '이성현',
                phone: '010-0000-0000'
            },
            {
                id: 1,
                name: '이영준',
                phone: '010-1111-1111'
            }
        ]
    }

    handleCreate = (date) => {
        const {information}
    }
}

//1
/*
import React from 'react';
import Hello from "./practice/Hello";
import Wrapper from "./practice/Wrapper";

function App() {
  return (
      <Wrapper>
        <Hello  color="red"/>
      </Wrapper>
  );
}

export default App;
*/
 */