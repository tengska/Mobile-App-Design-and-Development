import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToast, IonLoading, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../firebaseConfig'


const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>Welcome to your Dashboard!</IonCardTitle>
        <IonCardSubtitle>Great to have you here</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>Hopefully this will have a function in the next Labwork.
      </IonCardContent>
      <IonButton fill="clear" color={'secondary'} onClick={logoutUser}>Logout</IonButton>
    </IonCard>
    </IonPage>
  );
};

export default Dashboard; 

