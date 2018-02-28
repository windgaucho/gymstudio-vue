<template>
  <section>
    <h1 class="title">Editar Articulo</h1>
    <div>
      <b-field label="Rubro">
        <b-select
          placeholder="Seleccione un Rubro"
          v-model="articulo.id_rubro">
          <option
            v-for="rubro in rubros"
            :value="rubro.id"
            :key="rubro.id">
            {{ rubro.descripcion }}
          </option>
        </b-select>
      </b-field>
      <template v-if="errores.id_rubro">
        <ul class="error-validacion">
          <li v-for="error in errores.id_rubro">
            <p class="help is-danger">{{ error }}</p>
          </li>
        </ul>
      </template>
      <b-field label="Descripción">
        <b-input
          v-model="articulo.descripcion"
          id="descripcion"
          placeholder="nombre del articulo">
        </b-input>
      </b-field>
      <template v-if="errores.descripcion">
        <ul class="error-validacion">
          <li v-for="error in errores.descripcion">
            <p class="help is-danger">{{ error }}</p>
          </li>
        </ul>
      </template>
      <b-field label="Precio">
        <b-input
          v-model="articulo.precio"
          placeholder="Precio"
          type="number"
          min="1">
        </b-input>
      </b-field>
      <template v-if="errores.precio">
        <ul class="error-validacion">
          <li v-for="error in errores.precio">
            <p class="help is-danger">{{ error }}</p>
          </li>
        </ul>
      </template>
      <b-field grouped>
        <button class="control button is-primary" @click="guardar">Guardar</button>
        <button class="control button is-dark" @click="cancelar">Cancelar</button>
      </b-field>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        articulo: {},
        rubros: [],
        errores: {},
      };
    },

    created() {
      this.fetchRubros()
      this.fetchArticulo(this.$route.params.id);
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
      },

      fetchArticulo(id) {
        this.$http.get(`articulos/${id}`)
          .then(response => {
            console.log('resopnse', response);
            return response.json();
          })
          .then(respuestaJson => {
            console.log(respuestaJson);
            this.articulo = respuestaJson.data;
          });
      },

      guardar() {
        this.$http.put(`articulos/${this.articulo.id}`, this.articulo)
          .then(response => {
            console.log('respuesta', response);
            this.$router.push({ name: 'articulos' });
          }, errorObject => {
            errorObject.json().then(errores => {
              this.errores = errores;
            });
          });
      },

      cancelar() {
        this.$router.go(-1);
      }
    },
  }
</script>
