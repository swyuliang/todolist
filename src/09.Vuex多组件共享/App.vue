<template>
<div id="root">
  <PageCount></PageCount>
  <hr>
  <PagePerson></PagePerson>
</div>
</template>

<script>
import PageCount from './components/PageCount'
import PagePerson from './components/PagePerson'
export default {
  name: 'App',
  data(){
    return {}
  },
  components: { PageCount,PagePerson },
  mounted(){},
  methods:{},
  watch: {}
}
</script>

<style scoped>

</style>
