<script>
import * as msal from "@azure/msal-browser";
import Profile from "@/Profile.vue";
import {store} from './store.vue'
import axios from 'axios';

export default {
    components: {Profile},
    data() {
        return {
            msalConfig: {
                auth: {
                    clientId: "a7bb9be7-109d-4c12-9f58-b977f84a3700",
                    authority: "https://login.microsoftonline.com/de084535-12a9-406c-bd84-d4bbcdb1a7b4",
                    redirectUri: "http://localhost:5173",
                },
            },
            msalInstance: null,
            userInfo: null, // nouvelle variable pour stocker les informations de l'utilisateu
            store
        };
    },
    mounted() {
        this.msalInstance = new msal.PublicClientApplication(this.msalConfig);
        const account = this.msalInstance.getAllAccounts()[0];
        if (account) {
            this.msalInstance.setActiveAccount(account);
            this.getUserInfo();
        }
    },
    methods: {
        async signIn() {
            if(store.userInfo == null){
                try {
                    const loginRequest = {
                        scopes: ["openid", "profile", "User.Read"],
                    };
                    const authResult = await this.msalInstance.loginPopup(loginRequest);
                    this.msalInstance.setActiveAccount(authResult.account);
                    await this.getUserInfo();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        async getUserInfo() {
            const account = this.msalInstance.getActiveAccount();
            if (account) {
                const accessTokenRequest = {
                    scopes: ["User.Read"],
                    account: account,
                };
                const response = await this.msalInstance.acquireTokenSilent(
                    accessTokenRequest
                );
                this.userInfo = {
                    name: account.name,
                    email: account.username,
                    access: response.accessToken,
                };
                this.store.userInfo = this.userInfo;
                console.log(this.userInfo)
                await this.getMicrosoftProfilePic(this.userInfo.access);
                await this.getLausanneRooms(this.userInfo.access)
            }
        },
        async getMicrosoftProfilePic(access) {
            try {
                const response = await axios.get(
                    "https://graph.microsoft.com/v1.0/me/photo/$value",
                    {
                        headers: {
                            Authorization: "Bearer " + access,
                        },
                        responseType: "arraybuffer",
                    }
                );
                const blob = new Blob([response.data], {type: "image/jpeg"});
                const imageUrl = URL.createObjectURL(blob);
                this.store.pic = imageUrl;
            } catch (error) {
                console.error(error);
            }
        },
        async getLausanneRooms(token1) {
            const token = token1;
             const currentTime = Date.now();
             const startDateTime = new Date(currentTime).toISOString();
             const endDateTime = new Date(currentTime + 1).toISOString();
            console.log(token)
            const response = await axios.get('https://graph.microsoft.com/v1.0/places/microsoft.graph.room', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const lausanneRooms = response.data.value.filter(room => {
                return room.emailAddress.indexOf("lausanne") !== -1;
            });
            console.log(lausanneRooms)
            for (const room of lausanneRooms) {
                const calendarResponse =  await axios.get(`https://graph.microsoft.com/v1.0/users/${room.emailAddress}/calendar/calendarView?startDateTime=${encodeURIComponent(startDateTime)}&endDateTime=${encodeURIComponent(endDateTime)}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log(`Données du calendrier pour la salle ${room.displayName}:`, calendarResponse);
            }
        }

    }
}
</script>
<template class="display">
    <div class="Arrow">
        <router-link to="/profile" @click="signIn">Profile</router-link>
        <img src="./IMG/Arrow%20Left.svg">
    </div>
    <div class="main_logo">
        <img src="./IMG/image.png" alt="MAIN">
    </div>
    <div class="Arrow">
        <router-link v-if="store.userInfo != null" to="/scene">Scene</router-link>
        <a v-else @click="signIn">Scene</a>
        <img src="./IMG/Arrow%20Right.svg">
    </div>
</template>
<style scoped>
@font-face {
    font-family: 'Bebas Nueue';
    src: url('src/assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf') format('truetype');
}
div{
    display: flex;
    justify-content: center;
}
.main_logo img{
    margin-top: 30%;
}
.Arrow{
    display: grid;
    grid-template-rows: repeat(2,1fr);
}
.Arrow a {
    display: flex;
    margin-top: 100%;
    align-items: center;
    justify-content: center;
}
.display{
    display:grid;
    grid-template-columns: repeat(3,1fr);
}
</style>