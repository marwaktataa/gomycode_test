import React,{Component} from 'react';
import axios from 'axios'
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { comments:[] }
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`)
            .then(res => {
                this.setState({
                    comments: res.data,

                })
            })

    }

    render() { 
        return ( 
            <div className='listComment'>
            <h1 className='listTitle' >List comments</h1>
                {this.state.comments.map(el =>
                    <span>

                        <h1>{el.name}</h1>
                        <span>{el.body}</span>
                       

                        

                    </span>)}
            </div>
         );
    }
}
 
export default Comment;