import React from 'react';
import UncontrolledTooltip from 'reactstrap/lib/UncontrolledTooltip';
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
        id: PropTypes.string,
        text: PropTypes.string,
        icon: PropTypes.element,
    }

    render() {
        if (!this.props.text) {
            return null;
        }

        return (
            <span id={this.props.id}>
                {this.props.icon || '*'}
                <UncontrolledTooltip placement="top" target={this.props.id}>
                    {this.props.text}
                </UncontrolledTooltip>
            </span>
        );
    }
}

export function Recycles(props) {
    return <Note
        id="recycles"
        text={props.text || 'Card is likely to recycle from the discard'}
        icon={<Icon fontSize={200}>{'\u2672'}</Icon>}
    />;
}
