import React from 'react';
import './App.css';
import Feed  from "./Feed"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Widgets from "./Widgets"
import Login from "./Login"
import { UseStateValue} from "./StateProvider"

function App() {
  const [{user}, dispatch] = UseStateValue()
  return (
    <div className="App">
      {/* si le user existe : sinon  */}
      {!user ? (
        <Login/>
      ) : 
      (
      <>
        <Header />
        <div className="container">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </>
      )
      }
    </div>
  );
}

export default App;
