import angular from 'angular';

const MODULE_NAME = 'hc';

angular
  .module(MODULE_NAME, [])
  .config(() => console.log(MODULE_NAME));

module.exports = MODULE_NAME;
