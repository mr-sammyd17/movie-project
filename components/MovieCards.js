import Image from 'next/image'

export const MovieCards = ({movie, index}) => {
    const idx = index+1
    return (
        <div style={{ height: '500px', width: '300px', background: 'yellow', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '5px'}}>
            <h4 style = {{textAlign: 'center'}}>{idx + ' -' + ' ' + movie.fullTitle}</h4>
            <div style={{height:'300px', position:'relative', width:'218px', background: 'red'}}>
                <Image src={movie.image} alt={movie.fullTitle} layout={'fill'} objectFit={'contain'} objectPosition={'center'} style={{width:'300px', height:'auto', borderRadius:'25px'}}/>
            </div>
            {/* <img src={`${movie.image}`}> </img> */}
            <p style = {{textAlign: 'center'}}>The IMDb rating for this movie is: {movie.imDbRating}</p>
            <p style = {{textAlign: 'center'}}>This rating was achieved after {movie.imDbRatingCount} IMDb votes were counted</p>
            <br></br>
        </div>
    ) //Create an ordered list (using the ranking) of the top 20 movies displaying their name, movie poster and IMDb ratings
} 