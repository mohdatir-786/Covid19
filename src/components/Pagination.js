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
                <div className="item" key={post.id} style={{backgroundColor:"#8FBC8F",padding:"10px"}}>
                    <div className="content">
                        <div className="description" style={{border:"2px solid black"}}>
                            <h3 style={{color:"white"}}>{post.title}</h3>
                            <h5>Published on:{post.date}</h5>
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
    console.log(state.posts)
    return {
        posts:state.posts
    };
}
export default connect(mapStateToProps,{fetchPosts})(Pagination);