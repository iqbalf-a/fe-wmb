import {Spinner} from "react-bootstrap";

const LoadingState = () => (
    <>
        <div className="vh-100">
            <div className="d-flex justify-content-center align-items-center h-100">
                <Spinner animation="border"/>
                Fetching Data ...
            </div>
        </div>
    </>

)

export default LoadingState;