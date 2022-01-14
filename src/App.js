import React, {useState} from "react";
import {Route, Switch} from 'react-router-dom'
import Main from './Main'
import Detail from './Detail'
import Cart from './Cart'
import shoesData from './data'

function App(){
  let [shoes, changeShoes] = useState(shoesData)
  return(
    <div>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/detail/:id"> 
            <Detail shoes={shoes}/>
          </Route>
          <Route path="/cart"> 
            <Cart/>
          </Route>
        </Switch>
    </div>
  )
}

export default App
