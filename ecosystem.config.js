module.exports = {
  apps: [
    {
      name: "bota-website",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "/home/bota/htdocs/bota.swiss",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
        RESEND_API_KEY: process.env.RESEND_API_KEY,
      },
    },
  ],
};
