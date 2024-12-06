import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonInputPasswordToggle,
    IonItemDivider,
    IonLabel,
    IonList,
    IonPage,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
    useIonLoading,
    useIonRouter,
  } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import CC from '../assets/CCwelcome.png';
import { Link } from 'react-router-dom';
import { eye, logoFacebook, logoGoogle } from 'ionicons/icons';
  
  
const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(false);
    const [present, dismiss] = useIonLoading();
    
    const doLogin = async (event: any) => {
      event.preventDefault();
      await present('Logging in...');
      setTimeout(async () => {
        dismiss();
        router.push('/app', 'root');
      }, 2000);
    };
  
  
return (
        <IonPage>
            <IonHeader>
              <IonToolbar color={'light'}>
                <IonTitle className='ion-text-center'>Campus Casheee</IonTitle>
              </IonToolbar>
            </IonHeader>
  
            <IonContent scrollY={false} className="ion-padding">
              <IonGrid fixed>  
                <IonRow class="ion-justify-content-center">
                  <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                    <IonCard>
                    <div className="ion-text-center ion-padding-top">
                      <img src={CC} alt="CC Logo" width={'50%'} />
                    </div>
                        <IonCardHeader className='ion-text-center'>
                            <h1>Welcome to 
                                <br></br>CampusCasheee!</h1>
                        </IonCardHeader>
                      <IonCardContent>
                        <form onSubmit={doLogin}>
                          <IonInput mode="md" fill="outline" type="email" placeholder="Email Address"></IonInput>
                          <IonInput mode="md" className="ion-margin-vertical" fill="outline" type="password" placeholder="Password">
                          <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                          </IonInput>
                          <p><Link to='/register'>Forgot password?</Link></p>
                          <IonButton type="submit" expand="block" className="ion-margin-vertical">
                            Log in
                          </IonButton>
                          </form>
                          <p className='ion-text-center'>
                            Not a member? <Link to='/register'>Register now</Link>
                            </p>
                        <IonItemDivider></IonItemDivider>
                        <p className='ion-text-center ion-padding-top'>
                            Or continue with</p>
                            <IonRow class="ion-justify-content-center">
                                <IonCol className='ion-text-center'>
                                    <IonButton color="danger" fill="solid" shape="round">
                                        <IonIcon slot='icon-only' icon={logoGoogle}/>
                                    </IonButton>
                                    <IonButton slot='' fill="solid" shape="round">
                                        <IonIcon slot='icon-only' icon={logoFacebook}/>
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonContent>
        </IonPage>
    );
};

  
export default Login;