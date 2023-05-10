import { Button, Container , Row, Col, Card, CardBody, CardTitle, CardText, CardSubtitle} from 'reactstrap';
import Event from '../../components/Event/Event';
import { useEffect, useState } from 'react';
import { getEvents } from '../../services/eventservice';
export default function Events()
{
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            var result = await getEvents();
            setEvents(result);
           
        }
        
        fetchEvents();
    }, []);
    return (
        <div>
          <Container>
          {events.length>0?events.map((item,index)=>{
              if(index%4==0)
              {
                return(
                  <Row style={{paddingBottom:'3rem'}}> 
                    {events.length>index?
                            <Col className="" key={index}>
                                <Event title={events[index].title} description={events[index].description} location={events[index].location} id={events[index].id} image={events[index].image} />
                    </Col>:<></>}
                    {events.length>index+1?
                    <Col className="" key={index}>
                                <Event title={events[index + 1].title} description={events[index + 1].description} location={events[index + 1].location} id={events[index + 1].id} image={events[index + 1].image}/>
                        
                    </Col>:<></>}
                    {events.length>index+2?
                    <Col className="" key={index}>
                                <Event title={events[index + 2].title} description={events[index + 2].description} location={events[index + 2].location} id={events[index + 2].id} image={events[index + 2].image}/>
                    </Col>:<></>}
                    {events.length>index+3?
                    <Col className="" key={index}>
                                <Event title={events[index + 3].title} description={events[index + 3].description} location={events[index + 3].location} id={events[index + 3].id} image={events[index + 3].image}/>
                        </Col>:<></>}
                  </Row>
                  )
              }
          }):<></>}      
          </Container>
        </div>
      );
        }