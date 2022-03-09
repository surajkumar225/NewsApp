import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": { "id": "news24", "name": "News24" },
      "author": "Compiled by Herman Mostert",
      "title": "Proteas name 16-man squad for Bangladesh ODIs, Magala and Nortje sidelined",
      "description": "Cricket SA has named a 16-man Proteas squad for the upcoming home ODI series against Bangladesh.",
      "url": "https://www.news24.com/sport/Cricket/Proteas/proteas-name-16-man-squad-for-bangladesh-odis-magala-and-nortje-sidelined-20220308",
      "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/2951/ee9ad5052aba46e6889b4d1e8eb3d079.jpg",
      "publishedAt": "2022-03-08T11:31:35+00:00",
      "content": "<ul><li>Cricket SA has named a 16-man Proteas squad for the upcoming home ODI series against Bangladesh.</li><li>The three-game series will take place in Centurion and Johannesburg between 18-23 Marc… [+2377 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  constructor(){
    super();
    console.log("Hello Im a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false
  }
}
  render() {
  
    return (
      <div className="container my-3">
          <h2>NewsMedia - Top Headlines</h2>
          <div className="row">
          {this.state.articles.map((element)=>{

            return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}

          </div>
      </div>
    )
  }
}

export default News