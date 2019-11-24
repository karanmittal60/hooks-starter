import React, {Component} from 'react';

class InputName extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            userArray: []
        }
    }
    hanleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addToArray = () => {
        let useArrayClone = [...this.state.userArray]
        useArrayClone.push(this.state.name)
        this.setState({
            userArray: useArrayClone,
            name: ''
        });
    }
    render() {
        return (
            <div>
                <input type="text"
                       name="name"
                       value={this.state.name}
                       onChange={this.hanleChange}
                />
                <button onClick={this.addToArray}>Add</button>

                <div>
                    {this.state.userArray.join(", ")}
                </div>
            </div>
        );
    }
}

export default InputName;