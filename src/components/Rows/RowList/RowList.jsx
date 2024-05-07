import React from 'react'
import Row from '../Row/Row'
import requests from '../../../Utils/Requests'

const RowList = () => {

  return (
    <>
   <Row title="NETFLIX ORIGINALS"
   fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow={true} 
      />   
      <Row title={"TRENDING NOW"} fetchUrl={requests.fetchTrending}/>
      <Row title={"TOP RATED"} fetchUrl={requests.fetchTopRated}/>
      <Row title={"ACTION"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"COMEDY"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"HORROR"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"ROMANCE"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"DOCUMENTARIES"} fetchUrl={requests.fetchDocumentaries} />
    </>
  )
}

export default RowList
