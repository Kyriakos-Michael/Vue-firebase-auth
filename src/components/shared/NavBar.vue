<template>
  <b-navbar toggleable="md" type="dark" variant="dark" position="fixed">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    <i @click="logout" class="fas fa-power-off"></i>
  </b-navbar>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {};
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<style scoped>
</style>
