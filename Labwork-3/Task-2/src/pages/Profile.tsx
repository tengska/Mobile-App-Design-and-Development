import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Your profile</IonTitle>
          </IonToolbar>
        </IonHeader>

      </IonContent>
    </IonPage>
  );
};

export default Profile;