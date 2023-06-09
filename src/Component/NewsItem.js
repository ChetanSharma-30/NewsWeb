import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let {title, description, imageurl, newsurl,author, date, source} = this.props;
    return (
        <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "88%", zIndex: "1"}}>
    {source}
  </span>
            <img src={!imageurl?'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg':imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
            </div>
         </div>
        </div>
    )
  }
}

export default NewsItem
