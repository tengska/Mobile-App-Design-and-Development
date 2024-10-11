import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';


const Tab2: React.FC = () => {
  return (
    <IonPage>
    <IonCard color={'dark'}>
      <IonCardHeader>
        <IonCardTitle>My products</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Lipstick" src="https://www.reneecosmetics.in/cdn/shop/files/renee-stunner-matte-lipstick-4gm-renee-cosmetics-11.jpg?v=1691477163" />
            </IonThumbnail>
            <IonLabel>RENEE Stunner Matte Lipstick, 4gm</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Powder foundation" src="https://media.ulta.com/i/ulta/2510813?w=1200&h=1200&fmt=auto" />
            </IonThumbnail>
            <IonLabel>Studio Fix Powder Plus Foundation Makeup - NC30</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Mascara" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfrCnRevwYHsFhN1X6f014JDczVTtmRzSOw&s" />
            </IonThumbnail>
            <IonLabel>Maybelline Lash Sensational Sky High</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Blush" src="https://png.pngtree.com/png-clipart/20220103/original/pngtree-blush-box-png-image_7012669.png" />
            </IonThumbnail>
            <IonLabel>MAC CosmeticsIn Monochrome</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
    </IonPage>
  );
};

export default Tab2;