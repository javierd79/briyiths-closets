import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  // IonIcon,
  // IonLabel,
  // IonRouterOutlet,
  // IonTabBar,
  // IonTabButton,
  // IonTabs,
  IonSlides, 
  IonSlide, 
  IonContent,
  setupIonicReact
} from '@ionic/react';
import Menu from './components/Menu';
import CardText from './components/CardText';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

// modelito lima kid 2022
import Modelo from './assets/img/modelo.png';


// ropa de modelito lima kid 2022

//top
import Top1 from './assets/img/top/top-1.png';
import Top2 from './assets/img/top/top-2.png';
import Top3 from './assets/img/top/top-3.png';
import Top4 from './assets/img/top/top-4.png';
import Top5 from './assets/img/top/top-5.png';

//bottom
import Bottom1 from './assets/img/bottom/bottom-1.png';
import Bottom2 from './assets/img/bottom/bottom-2.png';
import Bottom3 from './assets/img/bottom/bottom-3.png';
import Bottom4 from './assets/img/bottom/bottom-4.png';
import Bottom5 from './assets/img/bottom/bottom-5.png';

//head
import Head1 from './assets/img/top/head-1.png';
import Head2 from './assets/img/top/head-2.png';
import Head3 from './assets/img/top/head-3.png';
import Head4 from './assets/img/top/head-4.png';
import Head5 from './assets/img/top/head-5.png';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import './index.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const slideOpts = {
  initialSlide: 0,
  speed: 300
};

const App: React.FC = () => (
  <IonApp>
  <IonContent className="ion-padding">
    <Menu
      title="Briyith's Closet ❤️"
    >
      <CardText
        title="Descripcion"
        subtitle="Descripcion de la aplicacion"
        color="danger"
      >
        Briyith's Closet esta diseñada para hacer la tarea de la vestimenta un poco diferente!<br/><br/> Acompañanos en esta experiencia!
      </CardText>
      <IonButton style={{width: '100%'}}>
        Hecha con ❤️ por Briyith 
      </IonButton>
    </Menu>
      <IonSlides pager={false} options={slideOpts}>
        <IonSlide>
          <img src={Top1} alt="modelito lima kid" />
        </IonSlide>
        <IonSlide>
          <img src={Top2} alt="modelito lima kid" />
        </IonSlide>
        <IonSlide>
          <img src={Top3} alt="modelito lima kid" />
        </IonSlide>
      </IonSlides>
    </IonContent>
  </IonApp>
);

export default App;
