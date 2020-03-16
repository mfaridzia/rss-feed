import React from 'react'

const SearchForm = ({ url, handleURL, handleRSSFeed }) => {
  return (
    <>
      <h2> RSS Feed </h2>
      <input 
        placeholder="Enter URL (eg: https://news.ycombinator.com/rss)"
        type="text" 
        value={url}
        onChange={handleURL}
      />
      <button type="submit" onClick={handleRSSFeed}> Search </button>
    </>
  )
}

export default SearchForm;