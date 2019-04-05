# cnpmjs: Private npm registry and web for Company

So `cnpm` is meaning: **Company npm**.

## Registry

- Our private registry: [handy-internal-registry](//handy-internal-registry.handy.travel), syncing from [registry.npmjs.com](https://registry.npmjs.com)
- [cnpmjs](/) version: <span id="app-version"></span>
- [Node.js](https://nodejs.org) version: <span id="node-version"></span>

<div class="ant-table">
<table class="downloads">
  <tbody>
    <tr>
      <td class="count" id="total-packages"></td><td>total packages</td>
      <td class="count" id="total-versions"></td><td>total package versions</td>
      <td class="count" id="total-deletes"></td><td>total delete packages</td>
    </tr>
    <tr>
      <td class="count"></td><td> downloads today</td>
      <td class="count"></td><td> downloads in this week</td>
      <td class="count"></td><td> downloads in this month</td>
    </tr>
    <tr>
      <td class="count"></td><td> downloads in the last day</td>
      <td class="count"></td><td> downloads in the last week</td>
      <td class="count"></td><td> downloads in the last month</td>
    </tr>
  </tbody>
</table>
</div>

<div class="sync" style="display:none;">
  <h3>Sync Status</h3>
  <p id="sync-model"></p>
  <p>Last sync time is <span id="last-sync-time"></span>. </p>
  <div class="ant-alert ant-alert-info syncing">
    <span class="anticon ant-alert-icon anticon-info-circle"></span>
    <span class="ant-alert-description">The sync worker is working in the backend now. </span>
  </div>
  <div class="ant-table">
  <table class="sync-status">
    <tbody>
      <tr>
        <td><span id="need-sync"></span> packages need to be sync</td>
        <td class="syncing"><span id="left-sync"></span> packages and dependencies waiting for sync</td>
        <td><span id="percent-sync"></span>% progress</td>
      </tr>
      <tr>
        <td><span id="success-sync"></span> packages and dependencies sync successed</td>
        <td><span id="fail-sync"></span> packages and dependencies sync failed</td>
        <td>last success: <span id="last-success-name"></span></td>
      </tr>
    </tbody>
  </table>
  </div>
</div>

<script src="/js/readme.js"></script>

## Badges

Default style is `flat-square`.

### Version

Badge URL: `https://handy-internal-npm.handy.travel/badge/v/@hi/cnpmjs.svg` ![@hi/cnpmjs-version-badge](/badge/v/@hi/cnpmjs.svg)

* `<0.1.0 & >=0.0.0`: ![red-badge](https://img.shields.io/badge/release-0.0.1-red.svg?style=flat-square)
* `<1.0.0 & >=0.1.0`: ![red-badge](https://img.shields.io/badge/release-0.1.0-green.svg?style=flat-square)
* `>=1.0.0`: ![red-badge](https://img.shields.io/badge/release-1.0.0-blue.svg?style=flat-square)

### Downloads

Badge URL: `https://handy-internal-npm.handy.travel/badge/d/@hi/cnpmjs.svg` ![@hi/cnpmjs-download-badge](/badge/d/@hi/cnpmjs.svg)

## Usage

### option Ⅰ

* Use `nrm` to register and switch our private npm registry.

```bash
$ npm install -g nrm
$ nrm ls
$ nrm add handy https://handy-internal-registry.handy.travel
$ nrm use handy
```
more nrm [usage examples](https://github.com/Pana/nrm#example) 

* Install a private package from handy-registry.

```
npm install @hi/[name]
npm install @handy/[name]
```

### option Ⅱ

Run the `npm install` command with a `registry` parameter.

```bash
$ npm install --registry=https://handy-internal-registry.handy.travel
```

### option Ⅲ

Or you can alias NPM to use it:

```bash
alias cnpm="npm --registry=https://handy-internal-registry.handy.travel \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://nodejs.org/dist \
--userconfig=$HOME/.cnpmrc"

#Or alias it in .bashrc or .zshrc
$ echo '\n#alias for cnpm\nalias cnpm="npm --registry=https://handy-internal-registry.handy.travel \
  --cache=$HOME/.npm/.cache/cnpm \
  --disturl=https://nodejs.org/dist \
  --userconfig=$HOME/.cnpmrc"' >> ~/.zshrc && source ~/.zshrc
```

### install

> Install package from [handy-internal-registry](//handy-internal-registry.handy.travel). When installing a package or version does not exist, it will try to install from the official registry([registry.npmjs.org](https://registry.npmjs.org)), and sync this package to cnpm in the backend.

```bash
$ npm install [name]     #from the official registry
$ npm install @hi/[name] #from the handy registry
```

### publish / unpublish

> Only `admin` user can publish / unpublish package to private registry.

* login or add user to the private registry.

```bash
$ npm adduser #or 'npm login'
$ Username: developer
$ Password: 
$ Email: (this IS public) developers@hi.com
```

* publish or unpublish scope package.

```bash
$ npm publish @scope/[name]
$ npm unpublish @scope/[name]
```

> The private scope name includes `@hi` `@handy` `@tinklabs`.

## Histories

Release [History](/history).
