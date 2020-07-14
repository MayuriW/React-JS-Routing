import React , {Component} from 'react';
import ReactDOM from 'react-dom';
//import Component from "./Component1";
import  Header from "./Header";
import JSON from './resources/db.json';
import NewsList from './NewsList'

//functional component
//const  Test = () =>
class Test extends Component
{
    constructor() {
        super();
        this.state =
            { news : JSON , filtered : JSON  }
    }

    filterNews(userInput)
    {

        console.log("userInput "+ userInput)
        let filteredData = this.state.news.filter((item) => {
                return item.label.toLowerCase().indexOf(userInput) > -1
            }
        );
        console.log("filteredData "+ filteredData)
            this.setState({filtered:filteredData})

    }
    render() {
        //console.log(this.state.news)
        return (
            <React.Fragment>
            <Header newsSearch={(data)=>this.filterNews(data)}></Header>
            <NewsList newsdata={this.state.news}></NewsList>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
  <Test/>,
  document.getElementById('root')
);
