import React from 'react';
import {
    Tooltip,
    OverlayTrigger,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

export class Note extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        icon: PropTypes.element,
    }

    render() {
        if (!this.props.text) {
            return null;
        }

        const tooltip = <Tooltip id={this.props.text}>{this.props.text}</Tooltip>;

        return (
            <OverlayTrigger placement="top" overlay={tooltip}>
                <span>{this.props.icon || '*'}</span>
            </OverlayTrigger>
        );
    }
}

export default Note;

export function recycles(text) {
    return <Note
        text={text || 'Card is likely to recycle from the discard'}
        icon={<span style={{fontSize: '200%'}}>{'\u2672'}</span>}
    />;
}
