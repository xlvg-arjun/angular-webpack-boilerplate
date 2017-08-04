import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

if(process.env.NODE_ENV === 'production'){
  // Production settings
} else {
  // Development and test settings
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}