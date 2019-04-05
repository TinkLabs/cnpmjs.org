const path = require('path');
const fscnpm = require('fs-cnpm'); 

const dataDir = '/opt/data/cnpmjs';

module.exports = {
    debug: false,
    dataDir: dataDir,
    registryPort: 7001,
    webPort: 7002,
    bindingHost: '0.0.0.0',
    // enable cluster mode
    enableCluster: true,
    // enable private mode, only admin can publish, other use just can sync package from source npm
    enablePrivate: true,
    // enable gzip response or not
    enableCompress: false,
    // session secret
    sessionSecret: 'cnpmjs_secret',
    // log dir name
    logdir: path.join(dataDir, 'logs'),
    // update file template dir
    uploadDir: path.join(dataDir, 'downloads'),
    // package tarball store in local filesystem by default
    nfs: fscnpm({dir: path.join(dataDir, 'nfs')}),
    // default system admins
    admins: {
        // name: email
        admin:     'admin@hi.com',
        developer: 'developers@hi.com',
        jiangzm:   'denny.jiang@hi.com'
    },
    // cnpm logo image url
    logoURL: '/img/logo.png',
    // use `${name} install package
    npmClientName: 'npm',
    database: {
        db: 'cnpm',
        host: 'localhost',
        port: 3306,
        username: '',
        password: '',
        dialect: 'mysql',
    },
    // default badge subject
    badgeSubject: 'npm',
    // registry url name
    registryHost: 'handy-internal-registry.handy.travel',
    // enable private mode or not
    // private mode: only admins can publish, other users just can sync package from source npm
    // public mode: all users can publish
    enablePrivate: false,
    // registry scopes, if don't set, means do not support scopes
    scopes: [ '@hi', '@tinklabs', '@handy' ],
    sourceNpmRegistry: 'https://registry.npmjs.com/',
    sourceNpmWeb: 'https://www.npmjs.com',
    // upstream registry is base on cnpm/cnpmjs.org or not
    // if your upstream is official npm registry, please turn it off
    sourceNpmRegistryIsCNpm: false,
    syncModel: 'none'// 'none', 'all', 'exist'
};
