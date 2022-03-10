import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
          <div className="card" style={{border: 'black'}}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-black" style={{left: '90%', zIndex: '1', color: 'yellow'}}>{source}</span>
  <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2020/01/BSE_Sensex_Stocks_market-770x433.png":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body" style={{background: 'black'}}>
    <h5 className="card-title" style={{color: 'white'}}>{title}</h5>
    <p className="card-text" style={{color: 'grey'}}>{description}</p>
    <p className="card-text"><small className="text-white">By {!author?"Unknown":author} on {new Date (date).toGMTString( )}</small></p>
    <a href={newsUrl} target= " _blank" className="btn btn-sm btn-danger">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem