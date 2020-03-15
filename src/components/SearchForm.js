import React from 'react'

const SearchForm = ({ url, handleURL, handleRSSFeed }) => {
  return (
    <>
      <h2> RSS Feed </h2>
      <input 
        type="text" 
        value={url}
        onChange={handleURL}
      />
      <button type="submit" onClick={handleRSSFeed}> Search </button>
    </>
  )
}

export default SearchForm;