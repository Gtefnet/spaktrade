<template>
    <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on }">
            <v-btn outlined="" color="white"  v-on="on" class="ml-2">Sign-Up</v-btn>
        </template>
        <v-card>
          <h1>Signup  interface Under development</h1>
          <v-btn @click="dialog = false">close</v-btn>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
        }
    }
}
</script>