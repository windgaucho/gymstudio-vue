<template>
  <section>
    <h1 class="title">Nuevo Rubro</h1>
    <form v-on:submit.prevent="createRubro">
      <b-field label="Descripción">
        <b-input v-model="descripcion" id="descripcion"></b-input>
      </b-field>
      <b-field label="Tipo">
        <b-select placeholder="Seleccione el tipo" v-model="tipo">
          <option value="INGRESO">Ingreso</option>
          <option value="EGRESO">Egreso</option>
        </b-select>
      </b-field>
      <b-field label="Grupo">
        <b-input v-model="grupo" id="grupo"></b-input>
      </b-field>
      <b-field grouped>
        <button class="control button is-danger">Guardar</button>
        <button class="control button is-dark">Cancelar</button>
      </b-field>
    </form>
  </section>
</template>

<script>
  export default {
    
  }
</script>
