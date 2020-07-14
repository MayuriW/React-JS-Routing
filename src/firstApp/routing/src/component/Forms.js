import React , {Component} from 'react';
const url = "https://jsonplaceholder.typicode.com/posts";
class forms extends Component
{
    constructor(props) {
        console.log(props);
        super();
        this.state =
            {
                userId : '',
                title : '',
                body : ''
            }
        this.changeuserId = this.changeuserId.bind(this);
        this.changetitle = this.changetitle.bind(this);
        this.changebody = this.changebody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    changeuserId(event)
    {
        this.setState({userId:event.target.value})
    }

    changetitle(event)
    {
        this.setState({title:event.target.value})
    }

    changebody(event)
    {
        this.setState({body:event.target.value})
    }

    handleSubmit()
    {
        console.log("Submit called ");
        console.log(this.state);
        var data = {
            userId : this.state.userId,
            title : this.state.title,
            body : this.state.body
        }
        fetch(url,{
            method:'POST',
            headers :
                {
                },
            body : data
        })
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                console.log(jsonData)
            })
    }

    render() {
        return (
            <div className="card bg-light">
                <div className="card-header">Forms Header</div>
                <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="cName">User Name :</label>
                            <input type="text" className="form-control" placeholder="Enter userId" id="cName"
                            value={this.state.userId} onChange={this.changeuserId}/>
                            <h1>{this.state.userId}</h1>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cTitle">Title :</label>
                            <input type="text" className="form-control" placeholder="Enter title" id="cTitle"
                                   value={this.state.title}
                                   onChange={this.changetitle}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="cBody">Title :</label>
                        <input type="text" className="form-control" placeholder="Enter Description" id="cBody"
                               value={this.state.body}
                               onChange={this.changebody}/>
                         </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
                </div>
            </div>
        )
    }
}

export default forms;
