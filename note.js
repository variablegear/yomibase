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

function recycles(text) {
    return <Note
        text={text || "Card is likely to recycle from the discard"}
        icon={<span style={{fontSize: "200%"}}>{"\u2672"}</span>}
    />;
}