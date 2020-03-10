import React from 'react';
import './App.css';

const ENDPOINT = 'https://api.rss2json.com/v1/api.json?rss_url=';

const App = () => {
  const [url, setURL] = React.useState("");
  const [state, setState] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleRSSFeed = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`${ENDPOINT}${url}`);
      const { items } = await response.json();
      console.log(items)
      setTimeout(() => {
        setState(items);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <h2> RSS Feed </h2>
      <input 
        type="text" 
        value={url}
        onChange={e => setURL(e.target.value)}
      />
      <button type="submit" onClick={handleRSSFeed}> Submit </button>

      <section className="lists-rss-feed">
        { loading ? "Loading..." : 
          <ul>
            { state.length === 0 ? "No data to display!" :
              state.map((item, i) => {
                return <li key={i}> { item.title } </li>
              })
            }
          </ul>
        }
        { error && "Error Parsing Feed, Please try again." }
      </section>
    </div>
  );
}

export default App;