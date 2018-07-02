import React, { Component } from 'react';
import classNames from 'classnames';
import './_button.scss';

class Button extends Component {
    render() {
        const { content, active } = this.props;
        
        const buttonClasses = classNames({
            'my-button': true,
            'active': active
        });
        
        return (
            <button className={buttonClasses} name={content}>
                {content}
            </button>
        );
    }
}

Button.defaultProps = {
    active: false
};

export default Button;