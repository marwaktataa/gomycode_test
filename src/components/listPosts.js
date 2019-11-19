import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import axios from 'axios';
class ListPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []

        }
    }
    componentDidMount() {
        const { match: { params } } = this.props;

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
            .then(res => {
                this.setState({
                    posts: res.data,

                })
            })

    }
    render() {
        return (
            
                
                <div className='listPost'>
                <h1 className='listTitle' >List posts</h1>
                    {this.state.posts.map(el =>
                        <div className='postContainer'>
                            <div>
                            <h1>{el.name}</h1>

                            <h1> title:{el.title}</h1>
                            <span> comment: {el.body}</span>
                            </div>
                            <Link to ={`/comment/${el.id}`}>  <button> show comments </button> </Link>

                            

                        </div>)}
                </div>






            
        );
    }
}

export default ListPosts;
