import React, { Component } from 'react';
import axios from 'axios';
import {Consumer} from '../context';
import {Link} from 'react-router-dom';

export default class form extends Component {
    state ={
        tracecode: ''
    };


    findTrack =(dispatch,e)=>{
        e.preventDefault();
        const code= this.state.tracecode
        const tracecode= {"tracecode": code}
        
        axios.post('/search/tracecode', tracecode)
        .then(res => {console.log(res);
            this.setState({track_list: res.data});
        })
        .catch(err => console.log(err));
    };

    onChange = (e, dispatch) => {
            this.setState({ [e.target.name]: e.target.value});
    }
    render() {
        return (
          <Consumer>
              {value => {
                  const { dispatch } = value;
                  return (
                      <div className="card card-body mb-4 p-4">
                          <h1 className="display-4 text-center">
                             Search Tracecode
                          </h1>
                          <form onSubmit={this.findTrack.bind(this, dispatch)}>
                              <div className="form-group">
                                  <input type="text" className="form-control form-control-lg" placeholder="search.." name="tracecode" value={this.state.tracecode} onChange={this.onChange}/>
                              </div>
                              <Link to={`/search/form/${this.state.tracecode}`} type="submit" className="btn btn-primary btn-lg btn-block mb-5">
                                <i className="fas fa-chevron-right"> Search </i>
                            </Link>
                          </form>
                      </div>
                  );
              }}
          </Consumer>
        )
    }
}
