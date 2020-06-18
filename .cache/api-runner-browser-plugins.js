module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Makefolio","short_name":"Makefolio","start_url":"/","background_color":"#2980b9","theme_color":"#2980b9","display":"standalone","icon":"src/images/logo.png","orientation":"portrait","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"1c4eb38d0e46be62504461abe4c65967"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-XXXXXXXX-X","anonymize":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
