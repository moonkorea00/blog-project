const BlogList = ({blogs,title}) => {
  
  return ( 
    <>
    <div className="blog-list">
      <h2>{title}</h2>
    {blogs.map(el => (
    <div className="blog-preview" key={el.id}>
      <h2>{el.title}</h2>
      <p>Written by {el.author}</p>
    </div>
  ))} 
  </div>
  </>
  );
}
 
export default BlogList;