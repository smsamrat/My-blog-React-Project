import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(){  
        super();
        this.state ={
            articles: [],
            loading: false
        }  
   }  

    async componentDidMount(){
        let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=797101dc43464e9283a5d20c3c057d47";
        let data = await fetch(url);
        let perseData = await data.json()
        this.setState({articles: perseData.articles})
        console.log(perseData)
    
    }
  render() {
    return (
        <div className='container'>
        <div className='row'>
            {this.state.articles.map((element)=>{
                return <div  className='col-md-4' key = {element.url}>
                <NewsItem title={element.title} description={element.description} />
                </div>
            })}
            
        </div>
    </div>

    )
  }
}
