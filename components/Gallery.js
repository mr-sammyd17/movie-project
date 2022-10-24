import { MovieCards } from './MovieCards'
import styles from '../styles/Home.module.css'


export const Gallery = ({movieData, pageCount}) => {
return (
    <div className={styles.container} class={'rounded-t-full'} style={{display: 'flex', flexDirection: 'row', alignItems: 'center' /*, justifyContent: 'space-between'*/, background: 'grey', /*flexWrap: 'wrap'*/}}>
    {movieData ? movieData.slice((pageCount-1)*5,pageCount*5).map((movie, index) => {
      return <MovieCards movie={movie} index={index} key={index} />
    }): null}
    </div> //The '.slice' method on the movieData array is splitting the list of 250 movies into sets of 5
)
}