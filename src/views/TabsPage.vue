<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary "></ion-menu-button>
        </ion-buttons>
        <ion-title>Store</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Store</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-grid>
          <ion-row class="ion-justify-content-between">
            <ion-col v-for="(cate, index) in cates" :key="index" size="6">
              <ion-button
                @click="showLoading"
                expand="block"
                fill="outline"
                :href="'/folder/Store_Category/' + cate.name"
              >
                {{ cate.name }}</ion-button
              >
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
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  loadingController,
} from "@ionic/vue";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
  },
  data() {
    return {
      cates: [
        { name: "phones", items: ["iphone", "galaxy"] },
        { name: "electronics", items: ["gg", "ff"] },
        { name: "accessories", items: ["iphone", "galaxy"] },
      ],
    };
  },
  setup() {
    const showLoading = async () => {
      const loading = await loadingController.create({
        message: "Dismissing after 2.5 seconds...",
        duration: 4000,
      });

      loading.present();
    };

    return { showLoading };
  },
});
</script>

<style scoped>
#containe {
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
