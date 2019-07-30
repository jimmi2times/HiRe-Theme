import $ from 'jquery';
import whatInput from 'what-input';
import fdatepicker from 'foundation-datepicker';

require( 'datatables.net-zf' )();
require( 'datatables.net-buttons-zf' )();
require( 'datatables.net-buttons/js/buttons.colVis.js' )();
require( 'datatables.net-buttons/js/buttons.html5.js' )();
require( 'datatables.net-buttons/js/buttons.print.js' )();
require( 'datatables.net-colreorder-zf' )();
require( 'datatables.net-fixedheader-zf' )();
require( 'datatables.net-responsive-zf' )();
require( 'datatables.net-scroller-zf' )();
require( 'datatables.net-select-zf' )();

window.$ = $;
import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();
