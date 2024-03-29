/**
 * @format
 */

import App from './App';
import HomeScreen from "./src/screens/HomeScreen";
import CreateScreen from "./src/screens/CreateScreen";
import ViewScreen from "./src/screens/ViewScreen";
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

library.add([faPlus, faChevronLeft, faRedoAlt, faFileSignature, faPencilAlt, faMonument, faEye, faTrashAlt]);

Navigation.registerComponent(`CreateCreds`, () => CreateScreen);
Navigation.registerComponent(`Home`, () => HomeScreen);
Navigation.registerComponent(`ViewCreds`, () => ViewScreen);

// Navigation.setDefaultOptions({
//     topBar
// });

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                        component: {
                            name: "Home"
                        }
                }],
                options: {
                    topBar: {
                        visible: false,
                        background: {
                            translucent: false
                        }
                    }
                }
            },
        }
    });
});

