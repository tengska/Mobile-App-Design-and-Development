import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to my App!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton routerLink='/Login'>Log in</IonButton>
        <IonButton routerLink='/Signup' color={'secondary'}>Sign up</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
