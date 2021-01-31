<template>
  <div>
    <b-row align-h="center" class="mb-3">
      <b-link :to="'/hamda'">
        <b-img
          class="prescription-sample"
          alt="prescriprion-sample"
          :src="require(`@/assets/images/prescription${$route.params.id}/prescription${$route.params.id}.jpeg`)"
        ></b-img>
      </b-link>
    </b-row>
    <b-card-actions title="Results" action-collapse>
      <b-card-text>
        <b-row align-h="center">
          <b-col align-h="center" cols="12">
            <b-table
              responsive
              :outlined="true"
              :items="data"
              :fields="fields"
              :head-variant="'light'"
            >
              <template #cell(image)="data">
                <b-img
                  class="prescription-sample"
                  alt="prescriprion-sample"
                  :src="require(`@/assets/images/prescription${$route.params.id}/${data.item.result}/${data.item.result} ${$route.params.id}.jpeg`)"
                ></b-img>
              </template>
            </b-table>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card-actions>
  </div>
</template>

<script>

export default {
  data: () => ({
    prescriptions: ['prescription1', 'prescription2', 'prescription3'],
    fields: [
      { key: 'index', label: '#' },
      { key: 'image', label: 'Pre Processing Result' },
      { key: 'result', label: 'Processing Result' },
    ],
    data: [
      { index: 1, result: 'aspocid' },
      { index: 2, result: 'ator' },
      { index: 3, result: 'concor' },
      { index: 4, result: 'nitromak' },
      { index: 5, result: 'plavix' },
    ],
  }),
}
</script>

<style>
.horizontal-layout.navbar-floating .header-navbar-shadow {
    top: 0;
    display: none;
}

.prescription-sample {
    max-width: 300px;
    max-height: 300px;
}
</style>
