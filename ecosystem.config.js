module.exports = {
    apps: [
      {
        name: "uatgplayer-user-portal",
        script: "http-server",
        args: "-p 3040 -c-1 build/",
        env: {
          NODE_ENV: "production"
        }
      }
    ]
  };
  