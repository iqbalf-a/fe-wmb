const AlertMessage = (props) => {
    return (
        <>
            <small className="text-danger">{props.message}</small>
        </>
    );
};

export default AlertMessage;