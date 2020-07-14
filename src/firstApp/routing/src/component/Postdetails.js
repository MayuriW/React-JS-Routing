import React , {Component} from 'react';
const url = "https://restcountries.eu/rest/v2/name"

class postdetails extends Component
{
    constructor(props) {
        console.log(props);
        super();
        this.state={
            countryDtl:''
        }
    }

    componentDidMount() {
        console.log(`${url}/${this.props.match.params.topic}`)
        //url with input param as country name called
        fetch(`${url}/${this.props.match.params.topic}`,{method:'GET'})
            .then((res)=>res.json())
            .then((data)=>{
                this.setState({countryDtl:data[0]})
            })
    }
        
    render()
    {
        return (
            <div className="card bg-secondary">
                <div className="card-header">Country</div>
                <div className="card-body">
                <ul>Country {this.state.countryDtl.name}</ul>
                <ul>Capital {this.state.countryDtl.capital}</ul>
                </div>
            </div>


        )
    }
}
export default postdetails