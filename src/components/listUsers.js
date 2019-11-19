import React, { Component } from 'react';
import axios from 'axios'

import {BrowserRouter,Route,Link} from 'react-router-dom'
class ListUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

      

                    
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    users: res.data,

                })
            })

    }
    render() {
        return (
            <div>
                <h1 className='listTitle'> LIST USERS</h1>
                <div className='listUsers'>
                    <div className='listUserContainer'>
                    {this.state.users.map(el =>
                       <div className='userCard'>
                           <img className='img'  src='https://www.chardhamtour.in/wp-content/uploads/2019/03/user-default.png'  />
                            <div className='userName'><p >{el.name}</p></div> 
                            <Link to ={`/posts/${el.id}`}>  <button> show the posts </button> </Link>
                          
                       <div>
                    
                       </div>
                       
                       </div>)}
                       </div>
                </div>


                
                    

            
            </div>
        );
    }
}



export default ListUsers;