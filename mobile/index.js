/**
 * @format
 */

import App from './App';
import { Navigation } from "react-native-navigation";

import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faPlus, 
    faChevronLeft, 
    faRedoAlt, 
    faFileSignature, 
    faPencilAlt, 
    faMonument 
} from "@fortawesome/free-solid-svg-icons";
import { 
    faEye, 
    faTrashAlt
} from "@fortawesome/free-regular-svg-icons";

library.add(faPlus, faChevronLeft, faRedoAlt, faFileSignature, faPencilAlt, faMonument, faEye, faTrashAlt);

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "navigation.playground.WelcomeScreen"
            }
        }
    });
});
