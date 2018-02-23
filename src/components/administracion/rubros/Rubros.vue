<template>
  <section>
    <h1 class="title">Lista de Rubros</h1>
    <p>
      <router-link
        :to="{ name: 'create_rubro' }"
        class="button field is-danger">Nuevo rubro
      </router-link>
    </p>
    <b-table :data="rubros" :columns="columns"></b-table>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        rubros: [],
        columns: [
          {
            field: 'id',
            label: 'ID',
            width: '40',
            numeric: true
          },
          {
            field: 'descripcion',
            label: 'Descripción',
          },
          {
            field: 'tipo',
            label: 'Tipo',
          },
          {
            field: 'grupo',
            label: 'Grupo',
          },
        ]
      }
    },

    created() {
      this.fetchRubros();
    },

    methods: {
      fetchRubros() {
        this.rubros = [
          { id: 1, descripcion: 'RUBRO 1', tipo: 'EGRESO', grupo: ''},
          { id: 2, descripcion: 'RUBRO 2', tipo: 'INGRESO', grupo: ''},
          { id: 3, descripcion: 'RUBRO 3', tipo: 'EGRESO', grupo: ''},
          { id: 4, descripcion: 'RUBRO 4', tipo: 'INGRESO', grupo: 'ABONOS'},
        ]
      }
    }
  }
</script>
