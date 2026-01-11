module.exports = {
    apps: [
      {
        name: 'bota-website',
        script: 'node_modules/next/dist/bin/next',
        args: 'start',
        cwd: '/home/bota/htdocs/bota.swiss',
        instances: 'max',
        exec_mode: 'cluster',
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'production',
          PORT: 3002
        }
      }
    ]
  };