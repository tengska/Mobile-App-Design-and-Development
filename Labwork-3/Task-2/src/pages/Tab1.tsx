import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { homeOutline, reorderThreeOutline, apertureOutline, home, person } from "ionicons/icons";
import glamguidewelcome from './glamguidewelcome.png'

const Tab1: React.FC = () => {
  return (
   <IonApp>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonListHeader>
            </IonListHeader>
            <IonMenuToggle autoHide>
              <IonItem button routerLink="/tab1">
                <IonIcon slot="start" icon={home}></IonIcon>
                <IonLabel>Home</IonLabel>
              </IonItem>
              <IonItem routerLink="/profile">
                <IonIcon slot="start" icon={person}></IonIcon>
                <IonLabel>Profile</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuToggle>
                <IonButton>
                  <IonIcon slot="start" icon={reorderThreeOutline}></IonIcon>
                </IonButton>
              </IonMenuToggle>
            </IonButtons>
            <IonTitle>GlamGuide</IonTitle>
          </IonToolbar>
        
        <IonCard color={"dark"}>
          <img src={glamguidewelcome} className="Welcome-img" alt="Woman in makeup" />
        <IonCardHeader>
        <IonCardTitle >Discover your beauty with GlamGuide: Your Makeup Companion</IonCardTitle>
        </IonCardHeader>
      <IonCardContent>Join GlamGuide to Elevate Your Natural Beauty!</IonCardContent>
      </IonCard>
      </IonHeader>
      </IonPage>
    </IonApp>
  );
};

export default Tab1;

