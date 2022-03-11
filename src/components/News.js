import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  static PropsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

capitalizeFirstLetter = (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor(props){
    super(props);
    // console.log("Hello Im a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page:1,
  }
  document.title = `NewsMedia - ${this.capitalizeFirstLetter(this.props.category)}`;
}
 
async updateNews(){
  this.props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4e7f83cb65f4c6a87e5520c91050f27&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
  this.props.setProgress(40);
    let parsedData = await data.json()
    console.log(parsedData);
  this.props.setProgress(70);
    this.setState({articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false  })
  this.props.setProgress(100);

}

  async componentDidMount(){
    // console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4e7f83cb65f4c6a87e5520c91050f27&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});

    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false  })  
    this.updateNews();
  }
  
   handlePrevClick = async ()=>{
     // console.log("Previous");
     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4e7f83cb65f4c6a87e5520c91050f27&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`; 
     // this.setState({loading: true});   
     // let data = await fetch(url);
     // let parsedData = await data.json()
     // this.setState({
       //   page: this.state.page - 1,
       //   articles: parsedData.articles,
       //   loading: false
       // })
       this.setState({page: this.state.page - 1});
       this.updateNews();
  }

   handleNextClick = async ()=>{
    // console.log("Next");
    // if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
    // }   
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4e7f83cb65f4c6a87e5520c91050f27&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`; 
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
   this.setState({page: this.state.page + 1});
   this.updateNews();
  }

  render() {
     console.log("render")
    return (
      <div className="container my-3">
          <h2 className="text-center" style={{margin: '20px'}}>NewsMedia - Top Headlines #{this.capitalizeFirstLetter(this.props.category)}</h2>
          {this.state.loading && <Spinner/>}
          <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
             return <div className="col-md-4" key={element.url}>

          {/* <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
          })}
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-light" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-light" onClick={this.handleNextClick}> Next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default News