import React from 'react';
import uniqueId from '../../util/util';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        };
        
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({ title: e.target.value });
    }

    updateBody(e) {
        this.setState({ body: e.target.value });
    }

    updateStatus(e) {
        this.setState({ done: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);

        this.setState({
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        })
    }

    render () {
        return (
            <div>
                <h1>Create Todo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label> Title:
                        <input type="text" value={this.state.title} onChange={this.updateTitle} />
                    </label>
                    <br/>
                    <label> Body:
                        <br/>
                        <textarea cols="30" rows="10" value={this.state.body} onChange={this.updateBody} ></textarea> 
                    </label>
                    <br/>
                    
                    <button type="submit">Create Todo</button>
                </form>
            </div>
        )
    }
}