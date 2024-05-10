import { StackOptions } from "~/types";
import Home from "./Home";
import screenNames from "./screenName";
type Route = {
    name: string;
    component: () => JSX.Element;
    options?: StackOptions;
}

const routes:Route[] = [{name: screenNames.HOME, component: Home}];


export default routes;