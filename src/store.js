import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
import { router } from "@/router/index.js";

Vue.use(Vuex);

 export const store = new Vuex.Store({
//export default new Vuex.Store({
    state : {
        token : "",
        fbApiKey : "AIzaSyAsKQgrRBYK5yNom081iYFRhTE71MQRyRs",
        articleId: ""
    },

    //senkron metodlar için mutation kullanılır.
    mutations : {
        setToken(state,token){
            state.token = token;
        },
        clearToken(state){
            state.token = "";
            localStorage.removeItem("token");
        }
    },

    actions : {

        initAuth({commit, dispatch}){
            let token = localStorage.getItem("token");
            if(token){
                commit("setToken",token);
                router.push("/");
            }else{
                  router.push("/auth");
            }
        },

        async login({commit, dispatch, state}, authData){
            //console.log(authData);
            let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
            if(authData.isUser){
                authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
            }

            return await fetch(authLink + "AIzaSyBXxdGfZx7GAKInm77YUwzj7TKchpb0ETw", {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
               email : authData.email, password : authData.password, returnSecureToken : true
              })
            })
            .then((response) => {
                //console.log(response.json());
                const data_ = response.json();
                commit("setToken",data_.idToken)
                localStorage.setItem("token",data_.idToken);
            })
        },
        logout({ commit, dispatch, state }){
            commit("clearToken");
        }

    },
    getters : {
        isAuthenticated(state){
            return state.token !== ""
        }
    }

});
