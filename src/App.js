import React from 'react';
import {Container} from './components/Container';
import {Content, RightContent, LeftContent} from './components/Content'
import RssLists from './components/RssLists';
import Sidebar from './components/Sidebar';
import SearchForm from './components/SearchForm';
const ENDPOINT = process.env.REACT_APP_RSS_ENDPOINT;

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
      const data = await response.json();
      console.log(data)
      setTimeout(() => {
        setState(data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  if (error) return "Error Parsing Feed, Please try again.";

  return (
    <Container>
      <SearchForm 
        url={url}
        handleURL={e => setURL(e.target.value)}
        handleRSSFeed={handleRSSFeed}
      />
      <Content>
        <RightContent>
          <Sidebar data={state} />
        </RightContent>
        <LeftContent>
          <RssLists
            loading={loading}
            data={state} 
          />
        </LeftContent>
      </Content>
    </Container>
  );
}

export default App;