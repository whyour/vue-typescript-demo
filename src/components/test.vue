<script>
export default {
  name: "missionProjectDetai",
  data: function() {
    return {
        projectName: "前头官卖你adsf撒旦法个",
    };
  },
  beforeRouteEnter: function(to, from, next) {
    wt.context.nav.setTitle("项目详情");
    next();
  },
  created: function() {
    // this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData: function() {
      let self = this;
    }
  }

};
</script>

<template>
    <div>
        <template>
            <div class="form-group-header">
                {{ projectName }}
            </div>
        </template>
    </div>
</template>
