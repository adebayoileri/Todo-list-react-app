import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () =>{
        // if(this.props.todo.done){
        //     return{
        //         textDecoration:'line-through'
        //     }
        // }else{
        //     return{
        //         textDecoration:'none;'
        //     }
        // }
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.done ?'line-through':'none'
        }
    }

    render() {
        const {id,title}= this.props.todo;
        return (
            <div style={this.getStyle()}>
            <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}/> {' '} {title}
            <button title ='Remove todo' onClick={this.props.delTodo.bind(this,id)}  style={btnStyle}> &times; </button>
            </div>
        )
    }
}
TodoItem.propTypes={
    todo: PropTypes.object.isRequired
}
const btnStyle = {
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    cursor:'pointer',
    borderRadius:'50%',
    float:'right'
}
export default TodoItem
