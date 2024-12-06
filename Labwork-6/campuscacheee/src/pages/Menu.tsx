import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import Settings from './Settings';
import { addCircleOutline, bookmarkOutline, bookOutline, chatboxOutline, homeOutline, logOutOutline, newspaperOutline, personCircleOutline, personOutline, searchCircleOutline, searchOutline, settingsOutline } from 'ionicons/icons';

const Menu: React.FC = () => {
  const paths = [
    { name: 'Feed', url: '/app/list', icon: homeOutline },
    { name: 'Profile', url: '/app/list', icon: personOutline },
    { name: 'Settings', url: '/app/settings', icon: settingsOutline },
    { name: 'Search', url: '/app/list', icon: searchOutline },
    { name: 'Saved', url: '/app/list', icon: bookmarkOutline },
    { name: 'Create post', url: '/app/list', icon: addCircleOutline },
    { name: 'Messaging', url: '/app/list', icon: chatboxOutline },
  ];
  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar color={'light'}>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
                <IonIcon slot='start' icon={personCircleOutline}></IonIcon>
                <b>User name</b>
            </IonItem>
            {paths.map((item, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem detail={true} routerLink={item.url} routerDirection="none">
                  <IonIcon slot="start" icon={item.icon} />
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}

            <IonMenuToggle autoHide={false}>
              <IonItem detail={true} routerLink="/" routerDirection="root">
                <IonIcon slot="start" icon={logOutOutline} />
                Logout
              </IonItem>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main">
          <Route exact path="/app/list" component={List} />
          <Route path="/app/settings" component={Settings} />
          <Route exact path="/app">
            <Redirect to="/app/list" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;