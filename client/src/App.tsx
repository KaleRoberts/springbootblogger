import React, { useEffect, useState } from 'react';
import './App.css';


interface Article {
  title: "JavaScript is the coolest",
  headline: "See what makes JavaScript so useful",
  content: "Some cool stuff about JavaScript",
  author: {
    login: "kroberts",
    firstname: "Kale",
    lastname: "Roberts",
    description: null,
    id: 1
  },
  slug: "javascript-is-the-coolest"
}

function App() {

  const [clients, setClients] = useState<Article[]>();

  useEffect(() => {

    const getData = async () => {
      const response = await fetch('/api/article/');
      const body = await response.json();
      setClients(body);
    }
    getData();

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3> Blog Entries </h3>
        <div className="App-intro">
          {clients !== undefined ? clients.map(client =>
            <ul>
              <div key={client.author.id}>
                <a href={`http://localhost:8080/article/${client.slug}`}>{client.title}</a>
                <br />
              ({client.headline})
              <br />
                {client.content}
                <br />
                By User {client.author.firstname} {client.author.lastname}
              </div>
            </ul>
          ) : null}
        </div>
      </header>
    </div >
  );
}

export default App;