function Note(props) {
    if (!props.text) {
        return null;
    }

    const tooltip = <Tooltip>{props.text}</Tooltip>;

    return (
        <OverlayTrigger placement="top" overlay={tooltip}>
            <span>{props.icon || "*"}</span>
        </OverlayTrigger>
    );
}