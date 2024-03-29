import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import { MovieCards } from '../components/MovieCards'
//import { Carosel } from '../components/Carosel'

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

  useEffect(() => {
    axios.get('https://imdb-api.com/en/API/Top250Movies/k_e41cox2u').then((data) => { //Connect to the IMDb API and get the top 250 movies to be printed to the screen
      console.log(data)
      data.data.items.splice(20) //Cut the list down from 250 to 20
      setApiMovieData(data.data.items)
    })
  }, [])

  console.log('Rendering')
  return (
    <div style= {{background: 'blue'}}>
      <h2 style={{margin: 'unset', color: 'white'}}><u>This page lists the top 20 movies according to IMDb</u></h2>
      <div className={styles.container} class={'rounded-t-full'} style={{display: 'flex', flexDirection: 'row', alignItems: 'center' /*, justifyContent: 'space-between'*/, background: 'grey', /*flexWrap: 'wrap'*/}}>
      {apiMovieData ? apiMovieData.map((movie, index) => {
        return <MovieCards movie={movie} index={index} key={index} />
      }): null}
        <Head>
          <title></title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      {/* <Carosel movieData={apiMovieData}/> */}
      </div> 
    </div> //Create a div box to hold all of the elements of the page
  )
}
