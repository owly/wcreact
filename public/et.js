// This is an event tracking wrapper on top of GA tool
SHOW_EVENT_TRACKING_LOG     = false
PROVISION                   = 'provision'
NEW_PROJECT_BUTTON          = 'new-project-button'
PMO_BUTTOM                  = 'pmo-icon'
HOME_BUTTON                 = 'home-icon'
SELECT_CONFIG_BUTTON        = 'select-config-button'
LOAD_CONFIG_BUTTON          = 'load-config-button'
INFORMATION_BUTTON          = 'information-icon'
SHARING                     = 'sharing'
HOME_TILE_SELECTION         = 'home-tile-selection'
PMO_TILE_SELECTION          = 'pmo-tile-selection'
SEARCH_HOME                 = 'search-home'
UPDATE_SUMMARY_REPORT       = 'update-summary-report'
LAUNCH_BUTTON               = 'launch-button'
HOME_DELETE_BUTTON          = 'home-delete-button'
PMO_DELETE_BUTTON           = 'pmo-delete-button'
MANAGE_GLOBAL_UPDATES       = 'manage-global-updates-button'

BUILDER_EVENTS = {
  PMO_BUTTOM          : 'pmo-button',
  NEW_WORKSPACE       : 'new-workspace',
  NEW_FOLDER          : 'new-folder',
  TIPS                : 'tips',
  NEXT                : 'next',
  PREV                : 'prev',
  CANCEL_CREATE       : 'create-cancel',
  CANCEL_EDIT         : 'edit-cancel',
  NEW                 : 'new-view',
  EDIT                : 'edit-view',
  CREATE              : 'create',
  UPDATE              : 'update',
  DELETE              : 'delete',
  SEARCH_ENTER        : 'search-enter',
  SEARCH_BTN          : 'search-btn',
  LAUNCH              : 'launch',
  DONE                : 'treeview-ok',  
  REFRESH             : 'treeview-refresh',
  ADD_FIELD           : 'add-global-field',
  ADD_TEMPLATE_FIELD  : 'add-template-field'
}

GLOBAL_UPDATE_EVENTS = {
  CREATE_NEW_UPDATE         : 'create-new-update',
  PMO_BUTTOM                : 'pmo-button',
  LOGS                      : 'logs',
  EDIT                      : 'edit',
  DESTROY                   : 'destroy',
  VIEW_SUMMARY              : 'view-update-summary',
  FEEDBACK                  : 'feedback',
  NEW_COLUMN                : 'add-new-column',
  EDIT_COLUMN               : 'edit-column',
  NEW_METADATA              : 'new-metadata',
  FIND_REPLACE              : 'find-replace',
  NEXT_BUTTON               : 'next',
  PREVIOUS_BUTTON           : 'prev',
  CANCEL_BUTTOM             : 'cancel',
  HINKS                     : 'hinks',
  CREATE_AND_TEST           : 'create-and-test',
  UPDATE_AND_TEST           : 'update-and-test',
  APPLY_TEST                : 'apply-test',
  APPLY_UPDATE              : 'apply-update',
  OPEN_TEST_SHEET           : 'open-test-sheet',
  CONFIRM                   : 'confirm',
  NEED_CHANGES              : 'need-changes',
  UPDATE_REPORT             : 'update-report',
  UPDATE_SIGHT              : 'update-sight',
  SHOW_MATCHING_STATUS      : 'show-matching-status',
  REMAP_RELATIVE_SHEETS     : 'remap-relative-sheets',
  APPLY_REMAPING_RELATIVE_SHEETS: 'apply-remapping-relative-sheets',
  CHOOSE_REPORT             : 'choose-report',
  APPLY_SELECT_REPORT       : 'apply-select-report'
}

ARCHIVE_EVENTS = {
  CREATE                    : 'create',
  EDIT                      : 'edit',
  DESTROY                   : 'destroy',
  CANCEL_BUTTOM             : 'cancel',
  LOGS                      : 'logs',
  NEXT_BUTTON               : 'next',
  PREVIOUS_BUTTON           : 'prev',
  PERFORM_ARCHIVING         : 'perform-archiving',
  VIEW_SUMMARY              : 'view-archive-summary' 
}


GA_EVENTS = [
  PROVISION,
  NEW_PROJECT_BUTTON,
  PMO_BUTTOM,
  HOME_BUTTON,
  SELECT_CONFIG_BUTTON,
  LOAD_CONFIG_BUTTON,
  INFORMATION_BUTTON,
  SHARING,
  HOME_TILE_SELECTION,
  PMO_TILE_SELECTION,
  SEARCH_HOME,
  UPDATE_SUMMARY_REPORT,
  LAUNCH_BUTTON,
  HOME_DELETE_BUTTON,
  PMO_DELETE_BUTTON
]

function EventTracking(){
  var self = this
  self.counter = {}
}

EventTracking.prototype.ga = function(category, action, label){
  var str = category + ' ' + action + ' ' + label

  // Keep track of the counter
  if (!this.counter[ str ]) this.counter[ str ] = 0;
  this.counter[ str ]++;

  if (typeof ga != 'undefined' && App.isProductionEnv) {
    ga('send', 'event', category, action, label, this.counter[ str ]);
  } else {
    // console.log(category, action, label, this.counter[ str ])
  }

}

// The following function is a generic way to detect current location of an element
// This usually relies on the wizard active tab.
// WARNING: complicated logic, need to both test across different wizards when change
// including provision, builder, automation, global update wizards
// To add a generic label for an element, it needs to contain a name attribute (not data-name)
EventTracking.prototype.ga_el = function(category, event, tag){
  var label = '';
  var tab = $('.tab-pane.active').attr('id');
  var $el;

  if (tab) label +=  'tab' + ($('.tab-pane.active').index() + 1) + ' ';
  if (event) $el = $(event.currentTarget);

  if ($el && $el.length) {
    if ( $el.hasClass('bootstrap-tagsinput') ) {
      var $next = $el.next('input')   // This is for builder wizard

      if ($next.length) {
        if ($next.data('field')) {
          // This is mostly for builder wizard
          label += $next.data('field') + ' ';
        } else {
          // Pickup class data first
          // 'name' attr data exist in Advanced Sharing for sheet selection
          label += $next.attr('class') + ($next.attr('name') ? ' ' + $next.attr('name') : '') + ' ';
        }

      } else {
        $next = $el.next('div')     // Try next div for provision wizard
        // Add input details into the tracking label
        // In Sharing tab, need to collect 'access' atttribute
        label += $next.attr('class') + ($next.data('access') ? ' ' + $next.data('access') : '') + ' ';
      }
    } else {
      if ($el[0].tagName.toLowerCase() == 'label'){
        // for checkbox/radio button
        label += $el.text()
      } else {
        // take element data-field first, then name, then tag name & its class if defined
        label += ($el.data('field') || $el.attr('name') || (' ' + $el[0].tagName.toLowerCase() + ' ' + ($el.attr('class') || '') ) ) 
      }
    }
  } else if (tag) {
    label += tag
  }

  // Remove multiple spaces
  label = label.replace(/  +/g, ' ');

  if (SHOW_EVENT_TRACKING_LOG) {
    console.log('Event tracking: ', category, label);
  }
  
  this.ga(category, 'click', label)
}

EventTracking.prototype.builder = function (event, tag){
  this.ga_el('builder', event, tag)
}


EventTracking.prototype.automation = function (event, tag){
  this.ga_el('automation', event, tag)
}

EventTracking.prototype.provision = function (event, tag){
  this.ga_el('provision', event, tag)
}

EventTracking.prototype.global_update = function (event, tag){
  this.ga_el('global-update', event, tag)
}

EventTracking.prototype.archive = function (event, tag){
  this.ga_el('archive', event, tag)
}

EventTracking.prototype.newProject = function (){
  this.ga('home', 'click', NEW_PROJECT_BUTTON)
}

EventTracking.prototype.manageProgramView = function (){
  this.ga('home', 'click', PMO_BUTTOM)
}

EventTracking.prototype.homeButton = function (){
  this.ga('home', 'click', HOME_BUTTON)
}

EventTracking.prototype.selectConfiguration = function (){
  this.ga('home', 'click', SELECT_CONFIG_BUTTON)
}

EventTracking.prototype.loadConfiguration = function (){
  this.ga('home', 'click', LOAD_CONFIG_BUTTON)
}

EventTracking.prototype.showContactSupport = function (){
  this.ga('home', 'click', INFORMATION_BUTTON)
}

EventTracking.prototype.sharing = function (){
  this.ga('home', 'click', SHARING)
}

EventTracking.prototype.selectBoardHome = function (){
  this.ga('home', 'click', HOME_TILE_SELECTION)
}

EventTracking.prototype.selectBoardPmo = function (){
  this.ga('pmo', 'click', PMO_TILE_SELECTION)
}

EventTracking.prototype.searchHome = function (){
  this.ga('home', 'click', SEARCH_HOME)
}

EventTracking.prototype.deleteButtonHome = function (){
  this.ga('home', 'click', HOME_DELETE_BUTTON)
}

EventTracking.prototype.deleteButtonPMO = function (){
  this.ga('pmo', 'click', PMO_DELETE_BUTTON)
}

EventTracking.prototype.manageGlobalUpdatesButton = function () {
  this.ga('button', 'click', MANAGE_GLOBAL_UPDATES)
}

EventTracking.prototype.trialUsers = function (event, tag){
  this.ga_el('trialUsers', event, tag)
}

EventTracking.prototype.activations = function (event, tag){
  this.ga_el('activation', event, tag)
}


var eventTracking = new EventTracking()
