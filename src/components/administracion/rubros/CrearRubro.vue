<template>
  <section>
    <h1 class="title">Nuevo Rubro</h1>
    <div>
      <b-field label="Descripción">
        <b-input v-model="rubro.descripcion" id="descripcion"></b-input>
      </b-field>
      <template v-if="errores.descripcion">
        <ul class="error-validacion">
          <li v-for="error in errores.descripcion">
            <p class="help is-danger">{{ error }}</p>
          </li>
        </ul>
      </template>
      <b-field label="Tipo">
        <b-select placeholder="Seleccione el tipo" v-model="rubro.tipo">
          <option value="INGRESO">Ingreso</option>
          <option value="EGRESO">Egreso</option>
        </b-select>
      </b-field>
      <template v-if="errores.descripcion">
        <ul class="error-validacion">
          <li v-for="error in errores.tipo">
            <p class="help is-danger">{{ error }}</p>
          </li>
        </ul>
      </template>
      <b-field label="Grupo">
        <b-input v-model="rubro.grupo" id="grupo"></b-input>
      </b-field>
      <b-field grouped>
        <button class="control button is-danger" @click="guardar">Guardar</button>
        <button class="control button is-dark" @click="cancelar">Cancelar</button>
      </b-field>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        rubro: {
          descripcion: '',
          tipo: '',
          grupo: '',
        },
        errores: {},
      };
    },

    methods: {
      guardar() {
        this.$http.post('rubros/', this.rubro)
          .then(response => {
            console.log('respuesta', response);
            this.$router.push({ name: 'rubros' });
          }, errorObject => {
            errorObject.json().then(errores => {
              this.errores = errores;
            });
          });
      },
      cancelar() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="scss">
  .error-validacion {
    margin-bottom: 10px,
  }
</style>
