import React, { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'Search':
        return{
            ...state,
            track_list: action.payload,
            heading: 'search'
        };
        default:
            return state;
    }
};
export class Provider extends Component {
    state = {
        track_list: [],
        heading: 'Top 10 Track',
        dispatch: action  => this.setState(state => reducer(state, action))
    };

    componentDidMount(){
        axios.post(`/search/tracecode?tracecode=track_list
          `)
        .then(res => {//console.log(res);
            this.setState({track_list: res.data.payload.pit})
        })
        .catch(err => console.log(err));

    }

    render() {
        return (
           <Context.Provider value={this.state}>
               {this.props.children}
           </Context.Provider>
        );
    }
}
export const Consumer = Context.Consumer;