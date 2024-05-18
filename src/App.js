import React from 'react'
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import NewsItem from './components/NewsItem';


const App = () => {
  // const [category,setCategory] = useState("general");
  return (
    <div>
       <Navbar/>
       <NewsBoard/>
       <NewsItem/>
   </div>
  )
}

export default App;