    import { Input, FormText, Toast, ToastHeader, ToastBody, Form, CardImg, CardImgOverlay, FormGroup, Label, Button, Container, Row, Col, Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
    import Event from '../../components/Event/Event';
    import { useEffect, useState } from 'react';
    import { addEvent } from '../../services/eventservice';
    import Image from '../../statics/images/image1.jpg';
    import { useParams } from 'react-router-dom';
    import Chat from '../../components/Chat/Chat';
import Map from '../../components/Map/Map';
import { useNavigate } from 'react-router-dom';

export default function NewEvent() {
    const navigate = useNavigate();
    const [Name, setName] = useState('');
    const [LocationName, setLocationName] = useState('');
    const [Description, setDescription] = useState('');
    const [Image, setImage] = useState(null);
    const [Date, setDate] = useState('');
    const [EventUsers, setEventUsers] = useState('');

        
        const handleSubmit = (e) => {
            e.preventDefault();

            const formData = new FormData();
            formData.append('Name', Name);
            formData.append('LocationName', LocationName);
            formData.append('Description', Description);
            formData.append('Image', Image);
            formData.append('Date', Date);
            formData.append('EventUsers', EventUsers);
            addEvent(formData)
            navigate('/'); 
        }
    


        return (<Container>
            <Row style={{paddingTop:"1em", paddingBottom:"2em"}}>
                <h3>New Event</h3>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <Label for="EventName">
                                Event Name
        </Label>
                            <Input
                                onChange={(e) => setName(e.target.value)}
                                id="EventName"
                                name="eventname"
                                placeholder="with a placeholder"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Date">
                                Date
        </Label>
                            <Input
                                onChange={(e) => setDate(e.target.value)}
                                id="Date"
                                name="date"
                                placeholder="date placeholder"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Location">
                                Location
        </Label>
                            <Input
                                onChange={(e) => setLocationName(e.target.value)}
                                id="Location"
                                name="location"
                                placeholder="location placeholder"
                                type="text"
                            />
                        </FormGroup>
         
                        <FormGroup>
                            <Label for="Description">
                                Description
        </Label>
                            <Input
                                onChange={(e) => setDescription(e.target.value)}
                                id="Description"
                                name="text"
                                type="textarea"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="EventUsers">
                                Event Users
        </Label>
                            <Input
                                onChange={(e) => setEventUsers(e.target.value)}
                                id="EventUsers"
                                name="text"
                                type="textarea"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleFile">
                                Image
        </Label>
                            <Input
                                onChange={(e) => setImage(e.target.files[0])}
                                id="exampleFile"
                                name="file"
                                type="file"
                            />
                            <FormText>
                                This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
        </FormText>
                        </FormGroup>
                     

                        <Button onClick={(e) => handleSubmit(e)}>
                            Submit
      </Button>
                    </Form>
                </Col>
                <Col>
                    <div style={{ paddingTop: "2em"}}>
                        <Card inverse>
                            {Image != null ? 
                            <CardImg
                                alt="Card image cap"
                                src={URL.createObjectURL(Image)}
                                style={{
                                    height: 270
                                }}
                                width="100%"
                            />:<></>}
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row>
            </Row>
        </Container>)
    }