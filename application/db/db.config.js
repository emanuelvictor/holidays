module.exports = {
  development: {
    HOST: "localhost",
    USER: "instruct",
    PASSWORD: "instruct",
    DB: "instruct",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  production: {
    HOST: "ec2-18-235-109-97.compute-1.amazonaws.com",
    USER: "edlwqacsuzjyqy",
    PASSWORD: "61e69efa473790b6886da7f4ce433fa8dc0156a7453b62643c6dfdb7780f6549",
    DB: "dbfu3urnfv066d",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },


  // Get enviromento from arguments
  getEnv: function () {

    let development = false;

    process.argv.forEach(function (val, index, array) {
      if(val === 'development')
        development = true
    });

    if (development)
      return this.development;
    else
      return this.production
  }
};
