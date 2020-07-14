import React from 'react'
import './Header.css'

const NewsList = (props) =>
{   console.log(props)
    const newsDisplay = props.newsdata.map((data) =>
    {
        return (
            <div key={data.klassId}>
                <h1 onClick={()=> console.log(" clicked on label ")}>{data.label}</h1>
            </div>
            )
    })
    return (
            <div className="newsList">{newsDisplay}
            </div>
    )
}

export default NewsList ;