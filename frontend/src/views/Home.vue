<template>
  <div>
    <b-card title="Select prescription to auto recognize">
      <b-card-text>
        <b-row align-h="center">
          <b-col align-h="center" cols="4" :key="index" v-for="(prescription, index) in prescriptions">
            <b-row align-h="center">
              <b-link :to="`/${index+1}/results`">
                <b-img
                  class="prescription-sample"
                  alt="prescriprion-sample"
                  :src="require(`@/assets/images/${prescription}/${prescription}.jpeg`)"
                ></b-img>
              </b-link>
            </b-row>
            <b-row align-h="center">
              <b>({{ index + 1 }})</b>
            </b-row>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>

export default {
  data: () => ({
    prescriptions: ['prescription1', 'prescription2', 'prescription3'],
  }),
}
</script>

<style>
.prescription-sample {
    max-width: 200px;
    max-height: 300px;
}

.horizontal-layout.navbar-floating .header-navbar-shadow {
    top: 0;
    display: none;
}
</style>
