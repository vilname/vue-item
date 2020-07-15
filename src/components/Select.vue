<template>
  <div>
    <div class="list-group-item d-flex">
      <div class="col-1">ID</div>
      <div class="col-2">Улица</div>
      <div class="col-2">Номер</div>
      <div class="col-2">Число этажей</div>
      <div class="col-2">Площадь</div>
      <div class="col-2">Дата постройки</div>
      <div class="col-1">Редактировать</div>
    </div>
    <div v-for="item in res" :key="item.ID" class="list-group-item d-flex">
      <div class="col-1">{{item.ID}}</div>
      <div class="col-2">{{item.STREET}}</div>
      <div class="col-2">{{item.NUMBER}}</div>
      <div class="col-2">{{item.NUMBER_FLOORS}}</div>
      <div class="col-2">{{item.AREA}}</div>
      <div class="col-2">{{item.DATE_CONSTRUCTION}}</div>
      <div class="col-1" @click="editItem(item)" role="button"><b-icon icon="pencil" aria-hidden="true"></b-icon></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      res: null
    }
  },
  methods: {
    editItem: function(item){
      this.$router.push({path: '/add', query: { item }})
    }
  },
  created: function(){
    const dataItem = {
      actions: 'SELECT'
    }

    this.axios
      .post('http://ce26282.tmweb.ru/api/', dataItem)
      .then(response => {
        this.res = response.data
      })
  }
}
</script>