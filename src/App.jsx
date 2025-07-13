import { useState, useEffect } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import NewsCard from "./components/NewsCard";

const API_BASE_URL= 'https://newsapi.org/v2/';
const API_KEY = import.meta.env.VITE_NEWS_KEY;
/*fetch(`https://newsapi.org/v2/everything?q=usa&language=en&pageSize=40&apiKey=${API_KEY}`)

  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));*/



export default function App() {
  const [searchTerm, setsearchTerm] = useState('');
  const [errorMsg, seterrorMsg] = useState('');
  const [newsList, setnewsList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [debounced, setdebounced] = useState('');

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setdebounced(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchNews = async(query = '') => {
    setisLoading(true);
    seterrorMsg('');
    try{
      const endpoint = `${API_BASE_URL}everything?q=${encodeURIComponent(query || 'usa')}&language=en&pageSize=40&apiKey=${API_KEY}`;
      const response = await fetch(endpoint);
      if(!response.ok){
        throw new Error('Failed to fetch news');
      }
      const data = await response.json();
      console.log(data);
      if(data.status !== 'ok'){
        seterrorMsg(data.Error ||'Failed to fetch News');
        setnewsList([]);
        return;
      }
      setnewsList(data.articles || []);
    }
    catch(error){
      console.log(`Error fetching News: ${error}`);
      seterrorMsg('Error fetching news. Try later')
    }
    finally{
      setisLoading(false);
    }
  }
  useEffect(()=>{
    fetchNews(debounced)
  }, [debounced]);
  return (
    <main>
      <div className="wrapper">
        <header>
          <img src="/news_1.jpg" alt="Hero Banner"/>
          <h1>Find <span className="text-gradient">Trending News</span> Without Any Hassle</h1>
          <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>
        </header>
        <section className="all-news">
          <h2 className="mt-[30px]">All News</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMsg ? (
            <p className="text-red-500">{errorMsg}</p>
          ): (
            <ul>
              {newsList.map((news, index)=>(
                <NewsCard key = {news.url} news={news} />
              ))
              }
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}
