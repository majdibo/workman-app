/*this fonction is used to load environment variables*/

(function(window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["service"] = "${gateway}";
})(this);
