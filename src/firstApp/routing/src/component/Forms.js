import React , {Component} from 'react';
const url = "http://localhost:3001/user"

class forms extends Component
{
    constructor(props) {
        console.log(props);
        super();
        this.state =
            {
                user : '',
                ttl : '',
                bd : ''
            }
        this.changeuserId = this.changeuserId.bind(this);
        this.changetitle = this.changetitle.bind(this);
        this.changebody = this.changebody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    changeuserId(event)
    {
        this.setState({user:event.target.value})
    }

    changetitle(event)
    {
        this.setState({ttl:event.target.value})
    }

    changebody(event)
    {
        this.setState({bd:event.target.value})
    }

    handleSubmit()
    {
        console.log("Submit called ");
        console.log(this.state);
        var data = {
            'userId' : this.state.user,
            'title' : this.state.ttl,
            'body' : this.state.bd
        }
        fetch(url,{
            method:'POST',
            headers :
                {  'Accept': 'application/json' ,
                    'Content-Type': 'application/json'
                },
            body : JSON.stringify(data)
        })
            //.then(response => response.json())
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
                            value={this.state.user} onChange={this.changeuserId}/>
                            <h1>{this.state.user}</h1>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cTitle">Title :</label>
                            <input type="text" className="form-control" placeholder="Enter title" id="cTitle"
                                   value={this.state.ttl}
                                   onChange={this.changetitle}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="cBody">Body :</label>
                        <input type="text" className="form-control" placeholder="Enter Description" id="cBody"
                               value={this.state.bd}
                               onChange={this.changebody}/>
                         </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
                </div>
            </div>
        )
    }
}

export default forms;
