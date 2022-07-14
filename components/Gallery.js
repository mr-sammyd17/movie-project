import { MovieCards } from './MovieCards'
import styles from '../styles/Home.module.css'
import { useState } from 'react';


  // const [apiMovieData, setApiMovieData] = useState(null) //Create a button to get 4 movies at a time

export const Gallery = ({movieData}) => {
return (
    <div className={styles.container} class={'rounded-t-full'} style={{display: 'flex', flexDirection: 'row', alignItems: 'center' /*, justifyContent: 'space-between'*/, background: 'grey', /*flexWrap: 'wrap'*/}}>
    {movieData ? movieData.map((movie, index) => {
      return <MovieCards movie={movie} index={index} key={index} />
    }): null}
    </div> 
)
}

//The code below will create a set of next and previous buttons to take the user through the gallery
function nextButton(props) {
  
   return (
     <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
     +1
     </button>
   )
}

function previousButton(props) {
  
  return (
    <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
    -1
    </button>
  )
}

function display(props) {
  return (
    <label style={{ marginLeft: '.5rem'}} >{props.message}</label>
  )
}

function buttonFunction() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }

  return (
    <div> 
      <nextButton onClickFunc={incrementCounter}/>
      <display message={counter}/> 
      <previousButton onClickFunc={decrementCounter}/>
    </div>
  );
}

export default buttonFunction