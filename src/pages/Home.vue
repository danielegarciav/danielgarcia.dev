<template>
  <main class="center-container full-screen">
    <div class="center-text">
      <h1 class="hero-title">Daniel Garcia – web developer</h1>
      <p>21-year-old University of Toronto student with one year of professional experience</p>
      <p></p>
      <section>
        <h2 class="header">Technologies I love</h2>
        <hr class="header-separator" />
        <ul class="bullet-points">
          <li>
            <b>
              <a target="_blank" href="https://typescriptlang.org">TypeScript</a>
            </b>
            <br />hands-down, my favourite language of all time
          </li>
          <li>
            <b>
              <a target="_blank" href="https://vuejs.org">Vue</a>
            </b>
            <br />my UI framework of choice (followed closely by
            <a
              target="_blank"
              href="https://reactjs.org/docs/hooks-intro.html"
            >React Hooks</a>)
          </li>
          <li>
            <b>
              <a target="_blank" href="https://graphql.org">GraphQL</a>
            </b>
            <br />graph-based API structure (with
            <a
              target="_blank"
              href="https://graphql-code-generator.com"
            >typing generation</a> and
            <a target="_blank" href="https://apollo.vuejs.org">Vue Apollo</a>)
          </li>
          <li>
            <b>
              <a target="_blank" href="https://parceljs.org">Parcel</a>
            </b>
            <br />no-nonsense zero-config web app bundler
          </li>
          <li>
            <b>
              <a target="_blank" href="https://expressjs.com">Express</a> and
              <a target="_blank" href="https://koajs.com">Koa</a>
            </b>
            <br />my go-tos for non-GraphQL unopinionated back-end frameworks
          </li>
          <li>
            <b>
              <a target="_blank" href="https://electronjs.org">Electron</a>
            </b>
            <br />makes building in-house desktop tools a breeze
          </li>
        </ul>
      </section>
      <section>
        <h2 class="header">Challenges I've faced</h2>
        <hr class="header-separator" />
        <ul class="bullet-points">
          <li>
            <b>Making native-like web apps</b>
            <br />
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers"
            >service workers</a>
            and
            <a
              target="_blank"
              href="https://developers.google.com/web/tools/workbox"
            >Workbox</a>
          </li>
          <li>
            <b>Scaling back-end capabilites</b>
            <br />
            <a target="_blank" href="https://www.docker.com">Docker</a>
            and
            <a
              target="_blank"
              href="https://azure.microsoft.com/en-ca"
            >Azure services</a>
          </li>
          <li>
            <b>Organizing a large codebase</b>
            <br />rigid separation of concerns,
            <a
              target="_blank"
              href="https://softwareengineering.stackexchange.com/questions/338597/folder-by-type-or-folder-by-feature"
            >grouping by domain/features</a>
          </li>
          <li>
            <b>Setting up continuous integration and deployment</b>
            <br />
            <a target="_blank" href="https://jestjs.io">Jest</a>,
            <a
              target="_blank"
              href="https://martinfowler.com/articles/feature-toggles.html"
            >feature flags</a>,
            <a
              target="_blank"
              href="https://azure.microsoft.com/en-ca/services/devops/pipelines"
            >Azure DevOps Pipelines</a>
          </li>
          <li>
            <b>Monitoring user experience and real-time bug alerts</b>
            <br />
            <a target="_blank" href="https://www.bugsnag.com">Bugsnag</a>,
            <a target="_blank" href="https://www.hotjar.com">Hotjar</a>
          </li>
          <li>
            <b>Managing multiple organization-private shared NPM modules</b>
            <br />
            <a
              target="_blank"
              href="https://azure.microsoft.com/en-ca/services/devops/artifacts"
            >Azure DevOps Artifacts</a>, strong use of
            <a target="_blank" href="https://semver.org">semantic versioning</a>
          </li>
        </ul>
      </section>
      <p>
        Feel free to check out my
        <a
          target="_blank"
          href="https://www.linkedin.com/in/danielegarciav"
        >LinkedIn profile</a> and
        <a target="_blank" href="https://github.com/danielegarciav">GitHub profile</a>.
      </p>
      <p>
        You can also
        <a href="mailto:daniel.garcia@mail.utoronto.ca">shoot me an email anytime 🙂</a>.
      </p>
    </div>
  </main>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
export default createComponent({});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Solway&display=swap');

.hero-title {
  font-family: 'Solway', serif;
}

.header {
  font-size: 1.15rem;
  margin-bottom: 0.75rem;
  font-weight: bold;
  &-separator {
    width: 90%;
    border-style: solid;
    border-color: #00000040;
  }
}

.bullet-points {
  columns: 2;
  column-gap: 1rem;
  max-width: calc(100vw - 1rem);
  list-style-type: '▪ ';
  li {
    text-align: left;
    margin-bottom: 0.25rem;
  }
  @media (max-width: 768px) {
    columns: unset;
  }
}

section {
  margin-bottom: 2rem;
}

a {
  color: #18336e;
  transition-duration: 0.4s;
  text-decoration-style: dashed;
  text-decoration-color: #00000040;

  &:hover {
    color: #3f4791;
    text-decoration-color: #3f4791;
  }
}
</style>
