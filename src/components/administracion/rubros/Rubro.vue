<template>
  <section>
    <h1 class="title">Nuevo Rubro</h1>
    <div>
      <b-field label="Descripción">
        <b-input v-model="rubro.descripcion" id="descripcion"></b-input>
      </b-field>
      <b-field label="Tipo">
        <b-select placeholder="Seleccione el tipo" v-model="rubro.tipo">
          <option value="INGRESO">Ingreso</option>
          <option value="EGRESO">Egreso</option>
        </b-select>
      </b-field>
      <b-field label="Grupo">
        <b-input v-model="rubro.grupo" id="grupo"></b-input>
      </b-field>
      <b-field grouped>
        <button class="control button is-danger" @click="submit">Guardar</button>
        <button class="control button is-dark">Cancelar</button>
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
        }
      };
    },

    methods: {
      submit() {
        console.log('rubro', this.rubro);
      },
    }
  }
</script>
