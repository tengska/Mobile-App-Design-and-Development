import { IonButton, IonContent, IonHeader, IonInput, IonInputPasswordToggle, IonPage, IonTitle, IonToolbar, IonToast, IonLoading } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../firebaseConfig';

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const history = useHistory(); // Use history for navigation

  async function login() {
    setBusy(true)
    const result = await loginUser(email, password, history);

    if (result.success) {
      setToastMessage('Login successful!');
    } else {
      setToastMessage(result.message || 'Login failed. Please try again.');
    }
    setIsToastOpen(true);  // Open toast for either success or failure
    setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonLoading 
            message={"Please wait..."} 
            isOpen={busy}/>
        <IonInput 
          type="email"
          label="Your email"
          labelPlacement="floating"
          fill="outline"
          placeholder='Email?' 
          onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
          <br />
        <IonInput 
          type="password"
          label="Enter password"
          labelPlacement="floating"
          fill="outline"
          placeholder='Password?'
          onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
          <br />
        <IonButton onClick={login}>Login</IonButton> 
        <p>
            Don't have an account? <Link to='/signup'>Sign Up!</Link>
        </p>
        {/* Success/Error Toast */}
        <IonToast
          isOpen={isToastOpen} // Controls visibility
          message={toastMessage} // Displays success or error message
          duration={2000} // Closes after 2 seconds
          onDidDismiss={() => setIsToastOpen(false)} // Resets toast visibility
        />
      </IonContent>
    </IonPage>
  );
};

export default Login; 

