import { Switch, Route } from "react-router-dom";
import { Home, Biologia } from "pages"


const Routes = () => {
    return (
        <Switch>
            <Route path="//" component={Home} />
            <Route path="/Biologia" component={Biologia} />
        </Switch>
    )
}

export default Routes