import { useState } from 'react';
import { dummyData } from './data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './routes/Header';
import View from './routes/View';
import Add from './routes/Add';
import Item from './routes/Item';
import ItemDefault from './routes/ItemDefault';
import NoMatch from './routes/NoMatch';



import './App.css';

function App() {

  const [list, setList] = useState(dummyData);

  const handlerDeleteProduct = (id) => {
    const newList = list.filter(item => item.id!== id);
    setList(newList);
  }

  const handlerAddProduct = (newProduct) => {

    const newList = [...list, newProduct];
    setList(newList);


  }

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Header />}>

            <Route path='view' element={<View list={list} />} >
              <Route index element={<ItemDefault />} />
              <Route path=':id' element={<Item list={list} handlerDelete={handlerDeleteProduct} />} />
            </Route>
            <Route path='/add' element={<Add handlerAddProduct={handlerAddProduct}/>} />

          </Route>

          <Route path='*' element={<NoMatch />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

