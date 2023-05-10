import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Events from './Views/Events/Events';
import EventDetail from './Views/EventDetail/EventDetail';
import NewEvent from './Views/NewEvent/NewEvent';

const AppRoutes = [
  {
        index: true,
        element: <Events />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  {
    path: '/event/:id',
    element: <EventDetail />
    },
  {
      path: '/newevent',
      element: <NewEvent />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
