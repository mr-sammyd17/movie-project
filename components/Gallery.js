import { MovieCards } from './MovieCards'
import styles from '../styles/Home.module.css'
import { useState } from 'react';


  // const [apiMovieData, setApiMovieData] = useState(null) //Sort array of movies to display 4 at a time

export const Gallery = ({movieData}) => {
return (
    <div className={styles.container} class={'rounded-t-full'} style={{display: 'flex', flexDirection: 'row', alignItems: 'center' /*, justifyContent: 'space-between'*/, background: 'grey', /*flexWrap: 'wrap'*/}}>
    {movieData ? movieData.map((movie, index) => {
      return <MovieCards movie={movie} index={index} key={index} />
    }): null}
    </div> 
)
}