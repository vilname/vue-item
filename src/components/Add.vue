<template>
  <div>
    <div v-if="this.success" class="alert alert-success" role="alert">
      {{this.success}}
    </div>
    <div v-if="this.error" class="alert alert-danger" role="alert">
      {{this.error}}
    </div>
    <form @submit.prevent="checkForm" method="post">
      <div class="form-group">
        <input 
          type="text"
          v-model.trim="form.street"
          class="form-control" 
          placeholder="Улица"
          :class="{'border-danger': ($v.form.street.$dirty && !$v.form.street.required)}"
        >
        <small v-if="$v.form.street.$dirty && !$v.form.street.required" class="form-text text-danger">Поле должно быть заполнено</small>
      </div>
      <div class="form-group">
        <input 
          type="text" 
          v-model.trim="form.number"
          class="form-control" 
          placeholder="Номер дома"
          :class="{'border-danger': ($v.form.number.$dirty && !$v.form.number.required) || ($v.form.number.$dirty && !$v.form.number.numeric)}"
        >
        <small v-if="$v.form.number.$dirty && !$v.form.number.required" class="form-text text-danger">Поле должно быть заполнено</small>
        <small v-if="$v.form.number.$dirty && !$v.form.number.numeric" class="form-text text-danger">Необходимо ввести число</small>
      </div>
      <div class="form-group">
        <input 
          type="text" 
          v-model.trim="form.number_floors"
          class="form-control" 
          placeholder="Количество этажей"
          :class="{'border-danger': ($v.form.number_floors.$dirty && !$v.form.number_floors.required) || ($v.form.number_floors.$dirty && !$v.form.number_floors.numeric)}"
        >
        <small v-if="$v.form.number_floors.$dirty && !$v.form.number_floors.required" class="form-text text-danger">Поле должно быть заполнено</small>
        <small v-if="$v.form.number_floors.$dirty && !$v.form.number_floors.numeric" class="form-text text-danger">Необходимо ввести число</small>
      </div>
      <div class="form-group">
        <input 
          type="text" 
          v-model.trim="form.area"
          class="form-control" 
          placeholder="Площадь"
          :class="{'border-danger': ($v.form.area.$dirty && !$v.form.area.required)}"
        >
        <small v-if="$v.form.area.$dirty && !$v.form.area.required" class="form-text text-danger">Поле должно быть заполнено</small>
      </div>
      <div class="form-group">
        <input 
          type="text" 
          v-model.trim="form.date_construction"
          class="form-control" 
          placeholder="Дата постройки"
          :class="{'border-danger': ($v.form.date_construction.$dirty && !$v.form.date_construction.required)}"
        >
        <small v-if="$v.form.date_construction.$dirty && !$v.form.date_construction.required" class="form-text text-danger">Поле должно быть заполнено</small>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      error: null,
      success: null,
      query: null,
      form: {
        street: null,
        number: null,
        number_floors: null,
        area: null,
        date_construction: null
      }
    }
  },
  validations: {
    form:{
      street: {required},
      number: {numeric, required},
      number_floors: {numeric, required},
      area: {required},
      date_construction: {required}
    }
  },
  methods:{
    checkForm(){
      this.$v.$touch();
      if(this.$v.form.$error) return false

      if(!this.query){
        this.form.actions = 'ADD'
      }

      this.axios
        .post('http://ce26282.tmweb.ru/', this.form)
        .then(response => {
          const res = response.data

          this.error = res.ERROR
          this.success = res.SUCCESS
        })
    }
  },
  created: function(){
    this.query = this.$route.query

    this.form = {
      id: this.query.item.ID,
      street: this.query.item.STREET,
      number: this.query.item.NUMBER,
      number_floors: this.query.item.NUMBER_FLOORS,
      area: this.query.item.AREA,
      date_construction: this.query.item.DATE_CONSTRUCTION,
      actions: 'UPDATE'
    }

    // this.axios
    //   .post('http://ce26282.tmweb.ru/', dataItems)
    //   .then(response => {
    //     // const res = response.data
    //   })

    
  }
}
</script>