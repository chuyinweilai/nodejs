module.exports = {
  apps : [{
    name: 'app',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    // args: 'one two',
    // instances: 1,
    // autorestart: true,
    // watch: false,
    // max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '111.231.189.112',
      ref  : 'origin/dev',
      repo : 'git@github.com:chuyinweilai/nodejs.git',
      path : '/opt/node/',
      "ssh_options": "StrictHostKeyChecking=no",
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
