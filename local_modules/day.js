
module.exports.getDay = function () {
  var date = new Date();
  return date.toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long"});

}
