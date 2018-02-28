<template>
  <section>
    <h1 class="title has-text-danger">Eliminar Articulo</h1>
    <div>
      <b-field label="Rubro">
        <b-input
          v-model="rubro"
          readonly>
        </b-input>
      </b-field>
      <b-field label="Descripción">
        <b-input
          v-model="articulo.descripcion"
          readonly>
        </b-input>
      </b-field>
      <b-field label="Precio">
        <b-input
          v-model="articulo.precio"
          type="number"
          readonly>
        </b-input>
      </b-field>

      <b-field grouped>
        <button class="control button is-danger" @click="guardar">Eliminar</button>
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
        rubro: '',
        errores: {},
      };
    },

    created() {
      this.fetchArticulo(this.$route.params.id);
    },

    methods: {
      fetchArticulo(id) {
        this.$http.get(`articulos/${id}`)
          .then(response => {
            console.log('resopnse', response);
            return response.json();
          })
          .then(respuestaJson => {
            console.log(respuestaJson);
            this.articulo = respuestaJson.data;
            this.rubro = respuestaJson.data.rubro.descripcion;
          });
      },

      guardar() {
        this.$http.delete(`articulos/${this.articulo.id}`)
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
