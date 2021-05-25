import { Switch }  from "react-router-dom";
import RouteWithSubRoutes from "./RouteWithSubroutes";
import routes from '../plugins/routes'

function routeContentRenderer () {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={route.name} {...route} />
      ))}
    </Switch>
  )
}

export default routeContentRenderer