import { Toast,ToastHeader, ToastBody, Form, CardImg, CardImgOverlay, FormGroup, Label, Button, Container, Row, Col, Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import Event from '../../components/Event/Event';
import { useEffect, useState } from 'react';
import { getEvent } from '../../services/eventservice';
import Image from '../../statics/images/image1.jpg';
import { useParams } from 'react-router-dom';
import Chat from '../../components/Chat/Chat';
import Map from '../../components/Map/Map';
export default function EventDetail() {
    const [event, setEvent] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchEvent = async () => {
            var result = await getEvent(id);
            console.log(result)
            setEvent(result);
        }

        fetchEvent();
    }, []);

  return (<Container>
    <Row>
      <Col><div>
              <Card inverse>
                  {event != null ?
                      <CardImg
                          src={`data:image/jpeg;base64,${event.image}`} alt="Event"
                          style={{
                              height: 270
                          }}
                          width="100%"
                      /> : <></>}
          <CardImgOverlay>
                    <CardTitle tag="h5">
                       {event != null?event.name:""}
            </CardTitle>
          </CardImgOverlay>
        </Card>
      </div> </Col>
          <Col>
              <Toast style={{ width:'600px'}}>
                  <ToastHeader>
                      <h6 className="mb-1">{event != null ? event.name : ""}</h6>
                  </ToastHeader>

                  <ToastBody>
                      <Form>
                          <FormGroup row>
                              <Col>
                                  <Label
                                      for="exampleEmail"
                                      size="lg"
                                      
                                  >
                                      {event != null ? event.location : ""}
            </Label></Col>
                            
                          </FormGroup>
                          <FormGroup row>
                              <Col>
                                  <Label
                                      for="exampleEmail"
                                      size="lg"

                                  >
                                      {event != null ? event.date : ""}
                                  </Label></Col>

                          </FormGroup>
                          <FormGroup row>
                              <Col>
                                  <Label
                                      for="exampleEmail"
                                      size="lg"

                                  >
                                      {event != null ? event.description : ""}
                                  </Label></Col>

                          </FormGroup>

                      </Form>
                  </ToastBody>
              </Toast>
       
      </Col>
    </Row>
      <Row>
          <Col>{event && <Map Latitude={event.latitude} Longitude={event.longitude} />}
               

          </Col>
          <Col>
              <Chat />
          </Col>
     
      </Row>
  </Container>)
}