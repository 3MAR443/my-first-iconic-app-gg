<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Favorites</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Favorites</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container ">
        <ion-col v-for="(item, index) in items" :key="index" size="12">
          <ion-card>
            <ion-img src="..\phones\c6.jpg"></ion-img>
            <ion-card-header>
              <ion-card-subtitle>{{ item }}</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain
              <ion-icon name="cartSharp"></ion-icon> or spend a week in the
              woods. Wash your spirit clean.
            </ion-card-content>
            <ion-grid>
              <ion-row class="ion-justify-content-between">
                <ion-col size="" class="">
                  <ion-button expand="block" class="" color="danger">
                    order
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card>
        </ion-col>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";

import {
  IonButtons,
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
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton,
  IonIcon,
} from "@ionic/vue";

export default defineComponent({
  name: "FavPage",
  components: {
    IonButtons,
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
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonButton,
    IonIcon,
  },
  data() {
    return {
      items: ["Iphone", "galaxy", "Huawei"],
    };
  },
});
</script>

<style scoped>
#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
