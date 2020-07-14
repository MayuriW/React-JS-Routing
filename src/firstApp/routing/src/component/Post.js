import React , {Component} from 'react';
import PostView from './PostView';
const url = "http://apiv3.iucnredlist.org/api/v3/country/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";
class post extends Component
{
    constructor(props) {
        console.log(props);
        super();
        this.state =
            { topics : ''  }
    }

    componentDidMount() {
         fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({topics:data.results});
            console.log(data)
        })
    }

    render() {
        return (
            <div className="card bg-secondary">
                <div className="card-header">Post Header</div>
                <div className="jumbotron">
                    <PostView topicdata={this.state.topics}></PostView>
                </div>
            </div>
        )
    }
}

export default post;
