<template>
  <section>
    <h1 class="title">Lista de Articulos</h1>
    <p>
      <router-link
        :to="{ name: 'crear_articulo' }"
        class="button field is-danger">Nuevo Articulo
      </router-link>
    </p>

    <div
      v-if="articulos.length < 1"
      class="container sin-articulos">
      <h5 class="title is-5">Sin articulos para mostrar</h5>
    </div>

    <b-table
      :data="articulos">
      <template slot-scope="props">
          <b-table-column field="id" label="ID" width="40" numeric>
            {{ props.row.id }}
          </b-table-column>

          <b-table-column field="descripcion" label="Descripción">
            {{ props.row.descripcion }}
          </b-table-column>

          <b-table-column field="precio" label="Precio">
            {{ props.row.precio }}
          </b-table-column>

          <b-table-column field="rubro" label="Rubro">
            {{ props.row.rubro.descripcion }}
          </b-table-column>

          <b-table-column label="Acciones">
            <button class="button is-link" @click="editar(props.row.id)">
              Editar
            </button>
            <button class="button is-dark" @click="eliminar(props.row.id)">
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
        articulos: [],
      }
    },

    created() {
      this.fetchArticulos();
    },

    methods: {
      fetchArticulos() {
        this.$http.get('articulos/')
          .then(response => {
            console.log('resopnse', response);
            return response.json();
          })
          .then(respuestaJson => {
            console.log(respuestaJson);
            this.articulos = respuestaJson.data;
          });
      },

      editar(id) {
        console.log('id', id)
        this.$router.push({ name: 'editar_articulo', params: { id } });
      },

      eliminar(id) {
        this.$router.push({ name: 'eliminar_articulo', params: { id } });
      }
    },
  }
</script>

<style lang="scss">
  .sin-articulos {
    margin-top: 40px;
    text-align: center;
  }
</style>
