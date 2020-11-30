import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url);

    const users = await response.json();
    
    setUsers(users) // if you use it, be careful because this triggers a rerender.
    console.log(users)
  }

  useEffect(() => {
getUsers() // this will trigger rerender because you are using setUsers in the function. this will cause an inifinite loop. Be careful. Set up the empty dependency array for the useEffect to be called only one, when the component is mounted.
  },[])
  return <>
  <h3>Github users</h3>
  <ul className="users">
 {users.map(user => {
   const {id, login, avatar_url, html_url} = user
    return <li key={id}>
      <img src={avatar_url} alt={login}/>
      <div>
        <h4>
          {login}
        </h4>
        <a href={html_url}>Profile</a>
      </div>
    </li>
  })}


  </ul>
 
  </>;
};

export default UseEffectFetchData;
