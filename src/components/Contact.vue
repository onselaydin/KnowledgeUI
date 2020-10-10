<template>
<div class="container">
    <section class="mb-4">
    <h2 class="h1-responsive font-weight-bold text-center my-4">İletişim</h2>

    <p class="text-center w-responsive mx-auto mb-5">
        Mantıklı sorulara erken zamanda cevap vereceğim.
    </p>

    <div class="row">
        <div class="col-md-9 mb-md-0 mb-5">
             <form @submit.prevent="onSubmit">
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="name" class="">Ad Soyad</label>
                            <input type="text" name="name" class="form-control" v-model="message.name">
                        </div>
                    </div>
               
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="email" class="">Email</label>
                            <input type="text" name="email" class="form-control" v-model="message.email">
                        </div>
                    </div>
                </div>
   
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Konu</label>
                            <input type="text"  name="subject" class="form-control" v-model="message.subject">
                        </div>
                    </div>
                </div>
               
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form">
                            <label for="message">Mesaj</label>
                            <textarea type="text" name="message" rows="2" class="form-control md-textarea" v-model="message.msg"></textarea>
                        </div>

                    </div>
                </div>
                <div class="text-center text-md-left">
                     <button type="submit" class="btn btn-large btn-block btn-primary full-width">Kaydet</button>
                </div>
                <div class="status"></div>
            </form>

            
        </div>
  
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>onselaydin@gmail.com</p>
                </li>
            </ul>
        </div>
    </div>

</section>
</div>

</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            message: {
                name: "",
                email: "",
                subject: "",
                msg: "",
                date: ""
            }
        };
  },
  methods: {
    onSubmit() {
      
        this.message.date = new Date().toLocaleString();
        axios
        .post("/message", { ...this.message })
        .then((response) => {
            this.message = {};

        })
        .catch((e) => console.log(e));
    },
  }
}
</script>

<style scoped>

</style>