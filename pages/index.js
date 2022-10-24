import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Gallery } from '../components/Gallery'
import React from 'react'


// The following information is available to me via the IMDb API call
// crew: "Frank Darabont (dir.), Tim Robbins, Morgan Freeman"
// fullTitle: "The Shawshank Redemption (1994)"
// id: "tt0111161"
// imDbRating: "9.2"
// imDbRatingCount: "2592489"
// image: "https://imdb-api.com/images/original/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg"
// rank: "1"
// title: "The Shawshank Redemption"
// year: "1994"

export default function Home() {
  const [apiMovieData, setApiMovieData] = useState(null)
  var [count, setCount] = useState(1) //create a counter and set it to 1 - https://dev.to/estheragbaje/how-to-use-react-hooks-to-create-a-counter-component-1bmp

  const Previous = () => {
    setCount(prevCount => {
      if (prevCount == 1){
        return prevCount
      }
      else{ 
        return prevCount - 1
      }
      
    }); //Remove 1 from the current value of count
  }

  const Next = () => {
    setCount(prevCount => {
      if (prevCount == 4){
        return prevCount
      }
      else{
        return prevCount + 1
      }
    }); //Add 1 to the current value of count
  }

  useEffect(() => {
    axios.get('https://imdb-api.com/en/API/Top250Movies/k_e41cox2u').then((data) => { //Connect to the IMDb API and get the top 250 movies
      console.log(data)
      // data.data.items.splice(20) //Cut the list down from 250 to 20
      setApiMovieData(data.data.items)
    })
  }, [])

  console.log('Rendering')
  return (
    //The 1st div holds the page heading
    //The 2nd div shows the movies
    //The 3rd div holds the counter buttons
    <div style = {{background: 'green'}}> 
    <div>
    </div>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h2 style={{margin: 'unset'}}><u>This page lists the top 20 movies according to IMDb</u></h2>
      <Gallery movieData={apiMovieData} pageCount={count}/>
      <div style = {{background: 'grey', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <button onClick={Previous}>Previous</button> 
        <h5>You are seeing the movies in view {count} of 4</h5>
        <button onClick={Next}>Next</button>
      </div>
    </div>
  )
}
