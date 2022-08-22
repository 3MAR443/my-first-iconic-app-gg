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
            <ion-col v-for="item in items" :key="item" size="12">
              <ion-card>
                <ion-img
                  :src="'http://localhost/omar-api/public/' + item.img"
                ></ion-img>
                <ion-card-header>
                  <ion-card-title> {{ item.name }} </ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  {{ item.description }}
                </ion-card-content>
                <ion-grid>
                  <ion-row class="ion-justify-content-between">
                    <ion-col size="6">
                      <ion-button expand="full" color="danger">
                        order
                      </ion-button>
                    </ion-col>
                    <ion-col size="6">
                      <ion-button>
                        <ion-icon :ios="cartSharp" :md="cartOutline"></ion-icon>
                      </ion-button>
                    </ion-col>
                  </ion-row>
                </ion-grid>
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
import { cartOutline, cartSharp } from "ionicons/icons";
import { useRoute } from "vue-router";
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
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton,
  IonIcon,
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
      items: [],
      api_1: "http://localhost/omar-api/public/api/get_item",
    };
  },

  created() {
    const route = useRoute();

    this.axios.get(this.api_1).then((res) => {
      this.items = res.data.filter(function (el) {
        return el.item_category_id == route.params.name;
      });
    });
  },
  setup() {
    return { cartOutline, cartSharp };
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
