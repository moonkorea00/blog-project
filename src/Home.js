import BlogList from './BlogList';
import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'title1', body: 'lorem ipsum...', author: 'author1', id: 1 },
    { title: 'title2', body: 'lorem ipsum...', author: 'author2', id: 2 },
    { title: 'title3', body: 'lorem ipsum...', author: 'author3', id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="This is the Title"/>
    </div> 
  );
};

export default Home;
