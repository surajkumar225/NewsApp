import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
          <div className="card">
  <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2020/01/BSE_Sensex_Stocks_market-770x433.png":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target= " _blank" className="btn btn-sm btn-danger">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem