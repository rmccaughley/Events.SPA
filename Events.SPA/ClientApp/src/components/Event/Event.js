import { Form, CardImg, CardImgOverlay, FormGroup, Label, Button, Card, CardBody, CardTitle, CardText, CardSubtitle} from 'reactstrap';
import { Link } from "react-router-dom";
function Event({ title, description, location, image, id }) {
    console.log(image)
    return (<Card
        style={{
            width: '18rem'
        }}
    > 
        {image != null ?
            <img
                alt="Sample"
                src={`data:image/jpeg;base64,${image}`} alt="Event" />
            : <></>}
        <CardBody>
            <CardTitle tag="h5">
                {title}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                {location}
            </CardSubtitle>
            <CardText>
                {description}
            </CardText>
            <Link to={`/event/${id}`} className="btn btn-outline-dark" replace>
                Event 
            </Link>
        </CardBody>
    </Card>);
}
export default Event;