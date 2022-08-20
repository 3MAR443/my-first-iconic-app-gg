<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Fruits</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Fruits</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list lines="full">
        <ion-list-header lines="full" color="light">My Fruits</ion-list-header>
        <ion-item v-for="fruit in fruits" :key="fruit">
          <ion-avatar>
            <ion-img src="/adil.jpg"></ion-img>
          </ion-avatar>
          <ion-label style="margin-left: 10px">{{ fruit }}</ion-label>
        </ion-item>
      </ion-list>

      <ion-list lines="full">
        <ion-list-header lines="full">My Fruits</ion-list-header>
        <ion-item v-for="fruit in fruits" :key="fruit">
          <ion-thumbnail>
            <ion-img src="/adil.jpg"></ion-img>
          </ion-thumbnail>
          <ion-label style="margin-left: 10px">{{ fruit }}</ion-label>
        </ion-item>
      </ion-list>
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
} from "@ionic/vue";

export default defineComponent({
  name: "HomePage",
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
  },
  data() {
    return {
      fruits: ["Apple", "Banana", "Orange", "Mango"],
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
