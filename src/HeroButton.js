import React from 'react'; 

export default class HeroButton extends React.Component {
    render() {
        return (
           <a href="#" className="Button"  data-primary={this.props.primary} text={this.props.text}/>
        )
    }
}