import React, {useEffect, useContext, useRef }from 'react';
import { Context } from './index';
import { observer } from 'mobx-react-lite';

import LoginForm from './components/LoginForm';


const App = () => {
  const {store} = useContext(Context);
  const checkAuthRef = useRef(false)
  
  useEffect(() => {
    if(!checkAuthRef.current) {
      checkAuthRef.current = true;//react 18+ для исключения двойной отрисовки
      if(localStorage.getItem('token')) {
        store.checkAuth()
      }
    }
  }, [])
  
  return (
    <div className="App">
      ПЛАТФОРМА ОБРАЗОВАНИЕ
        <LoginForm />
    </div>
  );
}

export default observer(App);
