// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
var archive = require('../helpers/archive-helpers');

var downloadSites = function() {
  archive.readListOfUrls(function(sites) {
    archive.downloadUrls(sites);
  });
};

downloadSites();

