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
            <ion-col v-for="cate in cates" :key="cate" size="6">
              <ion-button
                @click="showLoading"
                size="large"
                expand="block"
                fill="outline"
                :href="'/folder/Store_Category/' + cate.id"
              >
                {{ cate.category_name }}</ion-button
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
      cates: [],
      api: "",
    };
  },
  setup() {
    const showLoading = async () => {
      const loading = await loadingController.create({
        message: "Loading...",
        duration: 15000,
      });

      loading.present();
    };

    return { showLoading };
  },
  created() {
    this.axios
      .get("http://localhost/omar-api/public/api/get_item_category")
      .then((res) => {
        this.cates = res.data;
      });
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
