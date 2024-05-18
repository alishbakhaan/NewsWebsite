// import { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";

// const NewsBoard = () => {

//   const [articles,setArticles] = useState([]);

//   useEffect(() => {
//       let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
//       fetch(url).then(Response=> Response.json()).then(data=> setArticles(data.articles));

//   },[])
//   return (
//     <div>
//       <h2 className="text-center">Latest 
//       <span className="badge bg-danger m-2">News</span> </h2>
//        {articles.map((news,index)=>{
//         return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
//        })}
//     </div>
//   )
// }
// export default NewsBoard;
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard() {
  const [articles,setArticles] = useState([]);

  useEffect(() => {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f683e5c370224d2c85103612439ad2f4';
          fetch(url)
          .then(response=> response.json())
          .then(data=> setArticles(data.articles))
          .catch(err=> console.log(err));
    
      },[])

  return (
    <div>  
    <h2 className="text-center">Latest 
      <span className="badge bg-danger m-2">News</span> 
    </h2>
    {articles && articles.map((news, index) => (
      <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
    ))}
  </div>
        )
}

export default NewsBoard


 