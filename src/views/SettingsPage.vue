<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container ">
        <ion-list>
          <ion-item>
            <ion-label>Vibration</ion-label>
            <ion-toggle @ionChange="vibe()" slot="end"></ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label>Mega Man X</ion-label>
            <ion-toggle slot="end"></ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label>The Legend of Zelda</ion-label>
            <ion-toggle slot="end"></ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label>Pac-Man</ion-label>
            <ion-toggle slot="end"></ion-toggle>
          </ion-item>
        </ion-list>
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
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/vue";

export default defineComponent({
  name: "SettingsPage",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
  },
  methods: {
    vibe() {
      return console.log("clicked");
    },
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
