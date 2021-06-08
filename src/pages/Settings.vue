<template>
<q-page class="flex column content-center">
  <div class="col q-pt-lg text-white text-center">

    <div class="text-h4 text-weight-thin">{{ $t('Settings') }}</div>
    <div class="q-pt-lg fixed-top-right">
      <q-btn to="/" flat>{{ $t('HOME') }}</q-btn>
    </div>

    <q-separator class="q-my-md" inset />

    <q-select
      v-model="lang"
      :options="langOptions"
      :label="$t('Language')"
      dense
      dark
      borderless
      emit-value
      map-options
      options-dense
    />

    <q-separator class="q-my-md" inset />

    <div class="q-py-xs">
      <q-toggle v-model="saveLocation" :label="$t('Save location')" left-label />
    </div>

    <div class="q-pa-md">
      <div class="q-py-xs">
        <q-toggle v-model="show.pressure" :label="$t('Show pressure')" left-label />
      </div>
      <div class="q-py-xs">
        <q-toggle v-model="show.humidity" :label="$t('Show humidity')" left-label />
      </div>
      <div class="q-py-xs">
        <q-toggle v-model="show.windSpeed" :label="$t('Show wind speed')" left-label />
      </div>

      <q-separator class="q-my-sm" inset />

      <div class="q-py-xs">
        <q-toggle v-model="backgroundOverlay" :label="$t('Background overlay')" left-label />
      </div>

      <div class="q-py-xs">
        <q-input
          filled
          v-model="backgroundColor"
          :label="$t('Background Color')"
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
  </div>

</q-page>
</template>

<script>
export default {
  //====================================================
  name: 'Settings',
  //====================================================
  data() {
    return {
      lang: this.$i18n.locale,
    }
  },
  //====================================================
  watch: {
    //==============
    lang(lang) {
      this.$i18n.locale = lang;
      this.$root.settings.language = lang;
    }
    //==============
  },
  //====================================================
  computed: {
    //==============
    langOptions() {
      return [
        { value: 'en', label: this.$t('English') },
        { value: 'pl', label: this.$t('Polish') }
      ]
    },
    //==============
    saveLocation: {
      get() {
        return this.$root.settings.saveLocation;
      },
      set(saveLocation) {
        this.$root.settings.saveLocation = saveLocation;
      }
    },
    //==============
    show: {
      get() {
        return this.$root.settings.show;
      },
      set(show) {
        this.$root.settings.show = show;
      }
    },
    //==============
    backgroundOverlay: {
      get() {
        return this.$root.settings.backgroundOverlay;
      },
      set(backgroundOverlay) {
        this.$root.settings.backgroundOverlay = backgroundOverlay;
      }
    },
    //==============
    backgroundColor: {
      get() {
        return this.$root.settings.backgroundColor;
      },
      set(backgroundColor) {
        this.$root.settings.backgroundColor = backgroundColor;
      }
    },
    //==============
  },
  //====================================================
}
</script>
