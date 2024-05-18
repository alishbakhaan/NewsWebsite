

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block text-center">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={src} style={{height: "500px", width: "600px"}}  className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{fontSize:"50px"}}>{title}</h5>
        <p className="card-text" style={{fontSize:"30px"}}>{description}</p>
        <a href={url} className="btn btn-light">Read More</a>
      </div>
    </div>
  </div>
</div>

  )
}
export default NewsItem;