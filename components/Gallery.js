import { MovieCards } from './MovieCards'
import styles from '../styles/Home.module.css'
import { useState } from 'react'



  // const [apiMovieData, setApiMovieData] = useState(null) //Sort array of movies to display 4 at a time


export const Gallery = ({movieData, pageCount}) => {
console.log(pageCount)  
// if (count == 1 || count < 1){
//   console.log(count)
//   return (
//     <div className={styles.container} class={'rounded-t-full'} style={{display: 'flex', flexDirection: 'row', alignItems: 'center' /*, justifyContent: 'space-between'*/, background: 'grey', /*flexWrap: 'wrap'*/}}>
//     {movieData ? movieData.map((movie, index) => {
//       return <MovieCards movie={movie} index={index} key={index} />
//     }): null}
//     </div> 
// )
// }
// else if (count == 2){
//   console.log(count)
//   return (
//     <div className={styles.container} class={'rounded-t-full'} style={{display: 'flex', flexDirection: 'row', alignItems: 'center' /*, justifyContent: 'space-between'*/, background: 'grey', /*flexWrap: 'wrap'*/}}>
//     {movieData ? movieData.map((movie, index) => {
//       return <MovieCards movie={movie} index={index} key={index} />
//     }): null}
//     </div> 
// )
// }
// else if (count == 3){
//   console.log(count)
//   return (
//     <div className={styles.container} class={'rounded-t-full'} style={{display: 'flex', flexDirection: 'row', alignItems: 'center' /*, justifyContent: 'space-between'*/, background: 'grey', /*flexWrap: 'wrap'*/}}>
//     {movieData ? movieData.map((movie, index) => {
//       return <MovieCards movie={movie} index={index} key={index} />
//     }): null}
//     </div> 
// )
// }
// else if (count == 4 || count > 4){
//   console.log(count)
//   return (
//     <div className={styles.container} class={'rounded-t-full'} style={{display: 'flex', flexDirection: 'row', alignItems: 'center' /*, justifyContent: 'space-between'*/, background: 'grey', /*flexWrap: 'wrap'*/}}>
//     {movieData ? movieData.map((movie, index) => {
//       return <MovieCards movie={movie} index={index} key={index} />
//     }): null}
//     </div> 
// )
// }
return (
    <div className={styles.container} class={'rounded-t-full'} style={{display: 'flex', flexDirection: 'row', alignItems: 'center' /*, justifyContent: 'space-between'*/, background: 'grey', /*flexWrap: 'wrap'*/}}>
    {movieData ? movieData.slice((pageCount-1)*5,pageCount*5).map((movie, index) => {
      return <MovieCards movie={movie} index={index} key={index} />
    }): null}
    </div> 
)
}