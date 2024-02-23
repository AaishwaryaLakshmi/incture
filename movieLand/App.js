import {useEffect ,useState} from 'react';   //useEffect as we want to fetch the data from api as soon as the component loads
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL='http://www.omdbapi.com?apikey=d2612576'


const App=()=>{

    const [movies, setMovies]= useState([]);
    const [searchTerm, setSearchTerm]=useState([]);
    //to search movies                         
    const searchMovies= async(title)=>{                //asynchronous data: takes time to fetch the movies
        const response= await fetch(`${API_URL}&s=${title}`);  //call API
        const data = await response.json();

        setMovies(data.Search);

        }

    useEffect(()=>{                    //callback function
        searchMovies('Avengers');
    },[]);                             //[] is the empty array used if we want to call it in the start
    return(
        <div className='app'>
            <h1>Movie Land</h1>
            <div className='search'>
                <input placeholder='Search for movies' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)}/>
            </div>
            {
                movies?.length>0
                ?(
                <div className='container'>
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ))}
                </div>

                ):
                (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }

            
    </div>
    );
}
export default App;
