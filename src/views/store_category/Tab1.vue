<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            mode="ios"
            default-href="../Store_Category"
          ></ion-back-button>
        </ion-buttons>

        <ion-title>{{ $route.params.name }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"> {{ $route.params.name }} </ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-grid>
          <ion-row>
            <ion-col v-for="(item, index) in items" :key="index" size="12">
              <ion-card>
                <ion-img src="..\phones\c6.jpg"></ion-img>
                <ion-card-header>
                  <ion-card-subtitle>{{ item }}</ion-card-subtitle>
                  <ion-card-title>Card Title</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  Keep close to Nature's heart... and break clear away, once in
                  awhile, and climb a mountain or spend a week in the woods.
                  Wash your spirit clean.
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
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
  IonBackButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/vue";

export default defineComponent({
  name: "TabsPage",

  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
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
