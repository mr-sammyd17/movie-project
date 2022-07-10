import { MovieCards } from './MovieCards'
import styles from '../styles/Home.module.css'


  // const [apiMovieData, setApiMovieData] = useState(null) //Create a button to get 4 movies at a time

  // useEffect(() => {
  //   axios.get('https://imdb-api.com/en/API/Top250Movies/k_e41cox2u').then((data) => { //Connect to the IMDb API and get the top 250 movies
  //     console.log(data) //Print the list of movies to the screen
  //     data.data.items.splice(20) //Cut the list down from 250 to 20
  //     setApiMovieData(data.data.items)
  //   })
  // }, [])


export const Gallery = ({movieData}) => {
return (
    <div className={styles.container} class={'rounded-t-full'} style={{display: 'flex', flexDirection: 'row', alignItems: 'center' /*, justifyContent: 'space-between'*/, background: 'grey', /*flexWrap: 'wrap'*/}}>
    {movieData ? movieData.map((movie, index) => {
      return <MovieCards movie={movie} index={index} key={index} />
    }): null}
    </div> 
)
}