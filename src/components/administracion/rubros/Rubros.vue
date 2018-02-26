<template>
  <section>
    <h1 class="title">Lista de Rubros</h1>
    <p>
      <router-link
        :to="{ name: 'crear_rubro' }"
        class="button field is-danger">Nuevo rubro
      </router-link>
    </p>
    <b-table
      :data="rubros">
      <template slot-scope="props">
          <b-table-column field="id" label="ID" width="40" numeric>
            {{ props.row.id }}
          </b-table-column>

          <b-table-column field="descripcion" label="Descripción">
            {{ props.row.descripcion }}
          </b-table-column>

          <b-table-column field="tipo" label="Tipo">
            {{ props.row.tipo }}
          </b-table-column>

          <b-table-column field="grupo" label="Grupo">
            {{ props.row.grupo }}
          </b-table-column>

          <b-table-column label="Acciones">
            <button class="button is-link" @click="edit(props.row)">
              Editar
            </button>
            <button class="button is-dark" @click="edit(props.row)">
              Eliminar
            </button>
          </b-table-column>
      </template>
    </b-table>
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
        this.$http.get('rubros/')
          .then(response => {
            console.log('resopnse', response);
            return response.json();
          })
          .then(respuestaJson => {
            console.log(respuestaJson);
            this.rubros = respuestaJson.data;
          });
      }
    },
  }
</script>
