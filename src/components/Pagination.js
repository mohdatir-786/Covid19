import React from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../Actions/postAction";
class Pagination extends React.Component{
    componentDidMount() {
        this.props.fetchPosts();
    }

     renderList = () => {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <div className="content">
                        <div className="description" style={{border:"2px solid black"}}>
                            <h3>{post.title}</h3>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
       return <div className="ui relaxed divided list">{this.renderList()}</div>
   }
   }



const mapStateToProps=(state)=>{
    return {
        posts:state.posts
    };
}
export default connect(mapStateToProps,{fetchPosts})(Pagination);