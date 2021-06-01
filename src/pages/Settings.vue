<template>
<q-page class="flex column content-center">
  <div class="col q-pt-md text-white text-center">
    <div class="text-h4 text-weight-thin">Settings</div>
    <q-btn to="/" flat>Back</q-btn>

    <div class="q-pa-md">
      <q-input
        filled
        v-model="backgroundColor"
        label="Background Color"
        class="my-input"
        dark
      >
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-color v-model="backgroundColor" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
  </div>

</q-page>
</template>

<script>
export default {
  //====================================================
  name: 'Settings',
  //====================================================
  data() {
    return {}
  },
  //====================================================
  computed: {
    //==============
    backgroundColor: {
      get() {
        return this.$root.backgroundColor;
      },
      set(backgroundColor) {
        this.$root.backgroundColor = backgroundColor;
      }
    },
  },
  //====================================================
}
</script>
