import React from 'react';
import {Link} from "react-router-dom";


const PostView = (props) =>{
    //method
    const renderTopicData = ({topicdata}) => {
    if(topicdata)
    {   //iterate over data map
        return topicdata.map((item)=>{
        //console.log(item);
        return (
            <div key={item.isocode}>
            <Link className="btn btn-link" to={`/post/${item.country}`}>{item.country}</Link>
            </div>
        )
        })
    }
    }
    return(
        <div className="card bg-warning">
            <div className="card-header">postview Header</div>
            <div className="card-body">
               {/* calling method */}
             {renderTopicData(props)}
            </div>
        </div>
    )
}

export default PostView;
