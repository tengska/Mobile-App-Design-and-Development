import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonInputPasswordToggle,
    IonItemDivider,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    useIonRouter,
    IonCheckbox,
  } from '@ionic/react';
import { checkmarkDoneOutline, logInOutline, logoFacebook, logoGoogle, personCircleOutline } from 'ionicons/icons';
import React from 'react';
import { Link } from 'react-router-dom';
  
const Register: React.FC = () => {
    const router = useIonRouter();

    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('doRegister');
        router.goBack();
    };
  
    return (
        <IonPage>
            <IonHeader>
              <IonToolbar color={'light'}>
                <IonButtons slot="start">
                    <IonBackButton defaultHref='/' />
                </IonButtons>
                <IonTitle className='ion-text-center'>Campus Casheee</IonTitle>
              </IonToolbar>
            </IonHeader>
  
            <IonContent scrollY={false} className="ion-padding">
              <IonGrid fixed>  
                <IonRow class="ion-justify-content-center">
                  <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Sign up</IonCardTitle>
                            <IonCardSubtitle>Create an account to get started</IonCardSubtitle>
                        </IonCardHeader>
                      <IonCardContent>
                        <form onSubmit={doRegister}>
                        <IonInput mode="md" fill="outline" labelPlacement="stacked" label="Name" placeholder="Type your name"></IonInput>
                          <IonInput mode="md" className="ion-margin-vertical" fill="outline" type="email" labelPlacement="stacked" label="Email Address" placeholder="Type your email"></IonInput>
                          <IonInput mode="md" className="ion-margin-vertical" fill="outline" labelPlacement="stacked" label="Password" type="password" placeholder="Create a password">
                          <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                          </IonInput>
                          <IonInput mode="md" className="ion-margin-vertical" fill="outline" type="password" placeholder="Confirm password">
                          <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                          </IonInput>
                          <IonCheckbox labelPlacement="end">I've read and agree with the Terms and Conditions <br></br> and the Privacy Policy.</IonCheckbox>
                          <IonButton type="submit" expand="block" className="ion-margin-vertical">
                            Sign up
                          </IonButton>
                          </form>
                          <p className='ion-text-center'>
                            Already have an account? <Link to='/'>Log in</Link>
                            </p>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonContent>
        </IonPage>
    );
};
  
export default Register;