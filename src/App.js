import React, { useEffect, useContext, useRef } from 'react';
import { Context } from './index';
import { observer } from 'mobx-react-lite';

import LoginForm from './components/LoginForm';


const App = () => {
  const { store } = useContext(Context);
  const checkAuthRef = useRef(false)

  useEffect(() => {
    //при загрузке страницы новой
    //нужно отсылать запрос с токеном на обновление данных
    //в локалстораже ВСЕГДА хранить только ТОКЕН
    if (!checkAuthRef.current) {
      checkAuthRef.current = true;//react 18+ для исключения двойной отрисовки
      if (localStorage.getItem('token')) {
        //если юзер авторизован(в наличии токен), вызываем checkAuth
        store.checkAuth()
      }
    }
  }, [])

  return (
    <div className="App">
      ПЛАТФОРМА ОБРАЗОВАНИЕ
      {
        store.isAuth ?
          <div>
            <p> Пользователь авторизован </p>
            <p>{JSON.stringify(store.user)}</p>
            <button onClick={() => store.logout()}>
              Выйти
            </button>
          </div> :
          <LoginForm />
      }
    </div>
  );
}

export default observer(App);
