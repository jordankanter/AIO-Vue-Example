<template>
  <div class="centery">
    <h1>Welcome to aio-vue!</h1>
    <div id="action-list">
      <h3>Backend Actions</h3>
      <ul>
        <li v-for="(url, name) in config" v-bind:key="name">
          <a :href="url">{{name}}</a><br/> <small>{{url}}</small>
        </li>
      </ul>
    </div>
    <h3>Next Steps</h3>
    <div id="doc-list">
      <ul>
        <li key="doc-readme">check <code>README.md</code> for more docs</li>
        <li key="doc-runtime">
          <a href="https://adobedocs.github.io/adobeio-runtime/"
            >Adobe I/O Runtime Documentation</a
          >
        </li>
        <li key="doc-target">
          <a href="http://developers.adobetarget.com/api/">Adobe Target API</a>
        </li>
        <li key="doc-analytics">
          <a
            href="https://www.adobe.io/apis/experiencecloud/analytics/docs.html"
            >Adobe Analytics API</a
          >
        </li>
        <li key="doc-campaign">
          <a
            href="https://final-docs.campaign.adobe.com/doc/standard/en/api/ACS_API.html"
            >Adobe Campaign Standard API</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
ul {
  padding:0;
  margin:0;
}
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.centery {
  text-align: center;
}
</style>
<script>
import config from "./config.json";
export default {
  data() {
    return {
      config
    }
  },
};
</script>
