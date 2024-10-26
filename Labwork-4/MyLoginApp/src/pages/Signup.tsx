import { IonButton, IonContent, IonHeader, IonInput, IonInputPasswordToggle, IonLoading, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {signupUser} from '../firebaseConfig'



const Signup: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const history = useHistory(); // Use history for navigation

  async function signup() {
    setBusy(true)
    // Check if passwords match
    if (password !== cpassword) {
      setToastMessage('Passwords do not match');
      setIsToastOpen(true);
      return; // Stop further execution
    }
    
    // Check for empty fields
    if (email.trim() === '' || password.trim() === '') {
      setToastMessage('Please fill in all fields.');
      setIsToastOpen(true);
      return;
    }
    
    // Attempt to sign up with Firebase
    const result = await signupUser(email, password, history);
    
    if (result.success) {
      setToastMessage('Registration successful!');
    } else {
      setToastMessage(result.message || 'Registration failed. Please try again.');
    }
    setIsToastOpen(true); // Show toast with message
    setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonLoading 
              message={"Registration in  progress..."} 
              isOpen={busy}/>
        <IonInput 
          type="email"
          label="Your Email address"
          labelPlacement="floating"
          fill="outline"
          placeholder='Write your email address' 
          onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
          <br />
        <IonInput 
          type="password"
          label="Create password"
          labelPlacement="floating"
          fill="outline"
          placeholder='Password?'
          onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
          <br />
        <IonInput 
          type="password"
          label="Confirm password"
          labelPlacement="floating"
          fill="outline"
          placeholder='Confirm Password'
          onIonChange={(e: any) => setCPassword(e.target.value)}></IonInput>
          <br />
        <IonButton onClick={signup}>Sign Up</IonButton>
        <p>
            Already have an account? <Link to='/login'>Login!</Link>
        </p>
        {/* Toast for showing success or error messages */}
        <IonToast
          isOpen={isToastOpen}
          message={toastMessage}
          duration={2000}
          onDidDismiss={() => setIsToastOpen(false)} // Reset toast visibility
        />
      </IonContent>
    </IonPage>
  );
};

export default Signup;
