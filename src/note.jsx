import React from 'react';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Icon = styled.div`
    fontSize: ${(props) => props.fontSize || 150}%;
    display: inline-block;
    min-width: 20px;
    text-align: center;
    vertical-align: middle;
    height: 20px;
    line-height: 20px;
`;

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

export function Recycles(props) {
    return <Note
        text={props.text || 'Card is likely to recycle from the discard'}
        icon={<Icon fontSize={200}>{'\u2672'}</Icon>}
    />;
}
