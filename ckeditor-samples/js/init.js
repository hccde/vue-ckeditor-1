/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** multi ckeditor ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./core/ckeditor_base.js */1);
	__webpack_require__(/*! ./core/loader.js */2);
	__webpack_require__(/*! ./core/event.js */3);
	__webpack_require__(/*! ./core/editor_basic.js */4);
	__webpack_require__(/*! ./core/env.js */5);
	__webpack_require__(/*! ./core/ckeditor_basic.js */6);
	__webpack_require__(/*! ./core/log.js */7);
	__webpack_require__(/*! ./core/dom.js */8);
	__webpack_require__(/*! ./core/tools.js */9);
	__webpack_require__(/*! ./core/dtd.js */10);
	__webpack_require__(/*! ./core/dom/event.js */11);
	__webpack_require__(/*! ./core/dom/domobject.js */12);
	__webpack_require__(/*! ./core/dom/node.js */13);
	__webpack_require__(/*! ./core/dom/window.js */14);
	__webpack_require__(/*! ./core/dom/document.js */15);
	__webpack_require__(/*! ./core/dom/nodelist.js */16);
	__webpack_require__(/*! ./core/dom/element.js */17);
	__webpack_require__(/*! ./core/dom/documentfragment.js */18);
	__webpack_require__(/*! ./core/dom/walker.js */19);
	__webpack_require__(/*! ./core/dom/range.js */20);
	__webpack_require__(/*! ./core/dom/iterator.js */21);
	__webpack_require__(/*! ./core/command.js */22);
	__webpack_require__(/*! ./core/config.js */23);
	__webpack_require__(/*! ./core/filter.js */24);
	__webpack_require__(/*! ./core/focusmanager.js */25);
	__webpack_require__(/*! ./core/keystrokehandler.js */26);
	__webpack_require__(/*! ./core/lang.js */27);
	__webpack_require__(/*! ./core/scriptloader.js */28);
	__webpack_require__(/*! ./core/resourcemanager.js */29);
	__webpack_require__(/*! ./core/plugins.js */30);
	__webpack_require__(/*! ./core/ui.js */31);
	__webpack_require__(/*! ./core/editor.js */32);
	__webpack_require__(/*! ./core/htmlparser.js */33);
	__webpack_require__(/*! ./core/htmlparser/basicwriter.js */34);
	__webpack_require__(/*! ./core/htmlparser/node.js */35);
	__webpack_require__(/*! ./core/htmlparser/comment.js */36);
	__webpack_require__(/*! ./core/htmlparser/text.js */37);
	__webpack_require__(/*! ./core/htmlparser/cdata.js */38);
	__webpack_require__(/*! ./core/htmlparser/fragment.js */39);
	__webpack_require__(/*! ./core/htmlparser/filter.js */40);
	__webpack_require__(/*! ./core/htmldataprocessor.js */41);
	__webpack_require__(/*! ./core/htmlparser/element.js */42);
	__webpack_require__(/*! ./core/template.js */43);
	__webpack_require__(/*! ./core/ckeditor.js */44);
	__webpack_require__(/*! ./core/creators/inline.js */45);
	__webpack_require__(/*! ./core/creators/themedui.js */46);
	__webpack_require__(/*! ./core/editable.js */47);
	__webpack_require__(/*! ./core/selection.js */48);
	__webpack_require__(/*! ./core/style.js */49);
	__webpack_require__(/*! ./core/dom/comment.js */50);
	__webpack_require__(/*! ./core/dom/elementpath.js */51);
	__webpack_require__(/*! ./core/dom/text.js */52);
	__webpack_require__(/*! ./core/dom/rangelist.js */53);
	__webpack_require__(/*! ./core/skin.js */54);
	module.exports = __webpack_require__(/*! ./core/_bootstrap.js */55);


/***/ },
/* 1 */
/*!*******************************!*\
  !*** ./core/ckeditor_base.js ***!
  \*******************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Contains the first and essential part of the {@link CKEDITOR}
	 *		object definition.
	 */
	
	// #### Compressed Code
	// Compressed code in ckeditor.js must be be updated on changes in the script.
	// The Closure Compiler online service should be used when updating this manually:
	// http://closure-compiler.appspot.com/
	
	// #### Raw code
	// ATTENTION: read the above "Compressed Code" notes when changing this code.
	
	if (!window.CKEDITOR) {
		/**
	  * This is the API entry point. The entire CKEditor code runs under this object.
	  * @class CKEDITOR
	  * @singleton
	  */
		window.CKEDITOR = function () {
			var basePathSrcPattern = /(^|.*[\\\/])ckeditor\.js(?:\?.*|;.*)?$/i;
	
			var CKEDITOR = {
	
				/**
	    * A constant string unique for each release of CKEditor. Its value
	    * is used, by default, to build the URL for all resources loaded
	    * by the editor code, guaranteeing clean cache results when
	    * upgrading.
	    *
	    * **Note:** There is [a known issue where "icons.png" does not include
	    * timestamp](http://dev.ckeditor.com/ticket/10685) and might get cached.
	    * We are working on having it fixed.
	    *
	    *		alert( CKEDITOR.timestamp ); // e.g. '87dm'
	    */
				timestamp: '', // %REMOVE_LINE%
				/*							// %REMOVE_LINE%
	   // The production implementation contains a fixed timestamp, unique
	   // for each release and generated by the releaser.
	   // (Base 36 value of each component of YYMMDDHH - 4 chars total - e.g. 87bm == 08071122)
	   timestamp: '%TIMESTAMP%',
	   // %REMOVE_LINE% */
	
				/**
	    * Contains the CKEditor version number.
	    *
	    *		alert( CKEDITOR.version ); // e.g. 'CKEditor 3.4.1'
	    */
				version: '%VERSION%',
	
				/**
	    * Contains the CKEditor revision number.
	    * The revision number is incremented automatically, following each
	    * modification to the CKEditor source code.
	    *
	    *		alert( CKEDITOR.revision ); // e.g. '3975'
	    */
				revision: '%REV%',
	
				/**
	    * A 3-digit random integer, valid for the entire life of the CKEDITOR object.
	    *
	    *		alert( CKEDITOR.rnd ); // e.g. 319
	    *
	    * @property {Number}
	    */
				rnd: Math.floor(Math.random() * (999 /*Max*/ - 100 /*Min*/ + 1)) + 100 /*Min*/
	
				, /**
	      * Private object used to hold core stuff. It should not be used outside of
	      * the API code as properties defined here may change at any time
	      * without notice.
	      *
	      * @private
	      */
				_: {
					pending: [],
					basePathSrcPattern: basePathSrcPattern
				},
	
				/**
	    * Indicates the API loading status. The following statuses are available:
	    *
	    * * **unloaded**: the API is not yet loaded.
	    * * **basic_loaded**: the basic API features are available.
	    * * **basic_ready**: the basic API is ready to load the full core code.
	    * * **loaded**: the API can be fully used.
	    *
	    * Example:
	    *
	    *		if ( CKEDITOR.status == 'loaded' ) {
	    *			// The API can now be fully used.
	    *			doSomething();
	    *		} else {
	    *			// Wait for the full core to be loaded and fire its loading.
	    *			CKEDITOR.on( 'load', doSomething );
	    *			CKEDITOR.loadFullCore && CKEDITOR.loadFullCore();
	    *		}
	    */
				status: 'unloaded',
	
				/**
	    * The full URL for the CKEditor installation directory.
	    * It is possible to manually provide the base path by setting a
	    * global variable named `CKEDITOR_BASEPATH`. This global variable
	    * must be set **before** the editor script loading.
	    *
	    *		alert( CKEDITOR.basePath ); // e.g. 'http://www.example.com/ckeditor/'
	    *
	    * @property {String}
	    */
				basePath: function () {
					// Find out the editor directory path, based on its <script> tag.
					var path = window.CKEDITOR_BASEPATH || '';
	
					if (!path) {
						var scripts = document.getElementsByTagName('script');
	
						for (var i = 0; i < scripts.length; i++) {
							var match = scripts[i].src.match(basePathSrcPattern);
	
							if (match) {
								path = match[1];
								break;
							}
						}
					}
	
					// In IE (only) the script.src string is the raw value entered in the
					// HTML source. Other browsers return the full resolved URL instead.
					if (path.indexOf(':/') == -1 && path.slice(0, 2) != '//') {
						// Absolute path.
						if (path.indexOf('/') === 0) path = location.href.match(/^.*?:\/\/[^\/]*/)[0] + path;
						// Relative path.
						else path = location.href.match(/^[^\?]*\/(?:)/)[0] + path;
					}
	
					if (!path) throw 'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.';
	
					return path;
				}(),
	
				/**
	    * Gets the full URL for CKEditor resources. By default, URLs
	    * returned by this function contain a querystring parameter ("t")
	    * set to the {@link CKEDITOR#timestamp} value.
	    *
	    * It is possible to provide a custom implementation of this
	    * function by setting a global variable named `CKEDITOR_GETURL`.
	    * This global variable must be set **before** the editor script
	    * loading. If the custom implementation returns nothing (`==null`), the
	    * default implementation is used.
	    *
	    *		// e.g. 'http://www.example.com/ckeditor/skins/default/editor.css?t=87dm'
	    *		alert( CKEDITOR.getUrl( 'skins/default/editor.css' ) );
	    *
	    *		// e.g. 'http://www.example.com/skins/default/editor.css?t=87dm'
	    *		alert( CKEDITOR.getUrl( '/skins/default/editor.css' ) );
	    *
	    *		// e.g. 'http://www.somesite.com/skins/default/editor.css?t=87dm'
	    *		alert( CKEDITOR.getUrl( 'http://www.somesite.com/skins/default/editor.css' ) );
	    *
	    * @param {String} resource The resource whose full URL we want to get.
	    * It may be a full, absolute, or relative URL.
	    * @returns {String} The full URL.
	    */
				getUrl: function (resource) {
					// If this is not a full or absolute path.
					if (resource.indexOf(':/') == -1 && resource.indexOf('/') !== 0) resource = this.basePath + resource;
	
					// Add the timestamp, except for directories.
					if (this.timestamp && resource.charAt(resource.length - 1) != '/' && !/[&?]t=/.test(resource)) resource += (resource.indexOf('?') >= 0 ? '&' : '?') + 't=' + this.timestamp;
	
					return resource;
				},
	
				/**
	    * Specify a function to execute when the DOM is fully loaded.
	    *
	    * If called after the DOM has been initialized, the function passed in will
	    * be executed immediately.
	    *
	    * @method
	    * @todo
	    */
				domReady: function () {
					// Based on the original jQuery code (available under the MIT license, see LICENSE.md).
	
					var callbacks = [];
	
					function onReady() {
						try {
							// Cleanup functions for the document ready method
							if (document.addEventListener) {
								document.removeEventListener('DOMContentLoaded', onReady, false);
								executeCallbacks();
							}
							// Make sure body exists, at least, in case IE gets a little overzealous.
							else if (document.attachEvent && document.readyState === 'complete') {
									document.detachEvent('onreadystatechange', onReady);
									executeCallbacks();
								}
						} catch (er) {}
					}
	
					function executeCallbacks() {
						var i;
						while (i = callbacks.shift()) i();
					}
	
					return function (fn) {
						callbacks.push(fn);
	
						// Catch cases where this is called after the
						// browser event has already occurred.
						if (document.readyState === 'complete')
							// Handle it asynchronously to allow scripts the opportunity to delay ready
							setTimeout(onReady, 1);
	
						// Run below once on demand only.
						if (callbacks.length != 1) return;
	
						// For IE>8, Firefox, Opera and Webkit.
						if (document.addEventListener) {
							// Use the handy event callback
							document.addEventListener('DOMContentLoaded', onReady, false);
	
							// A fallback to window.onload, that will always work
							window.addEventListener('load', onReady, false);
						}
						// If old IE event model is used
						else if (document.attachEvent) {
								// ensure firing before onload,
								// maybe late but safe also for iframes
								document.attachEvent('onreadystatechange', onReady);
	
								// A fallback to window.onload, that will always work
								window.attachEvent('onload', onReady);
	
								// If IE and not a frame
								// continually check to see if the document is ready
								// use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								var toplevel = false;
	
								try {
									toplevel = !window.frameElement;
								} catch (e) {}
	
								if (document.documentElement.doScroll && toplevel) {
									scrollCheck();
								}
							}
	
						function scrollCheck() {
							try {
								document.documentElement.doScroll('left');
							} catch (e) {
								setTimeout(scrollCheck, 1);
								return;
							}
							onReady();
						}
					};
				}()
			};
	
			// Make it possible to override the "url" function with a custom
			// implementation pointing to a global named CKEDITOR_GETURL.
			var newGetUrl = window.CKEDITOR_GETURL;
			if (newGetUrl) {
				var originalGetUrl = CKEDITOR.getUrl;
				CKEDITOR.getUrl = function (resource) {
					return newGetUrl.call(CKEDITOR, resource) || originalGetUrl.call(CKEDITOR, resource);
				};
			}
	
			return CKEDITOR;
		}();
	}
	
	/**
	 * Function called upon loading a custom configuration file that can
	 * modify the editor instance configuration ({@link CKEDITOR.editor#config}).
	 * It is usually defined inside the custom configuration files that can
	 * include developer defined settings.
	 *
	 *		// This is supposed to be placed in the config.js file.
	 *		CKEDITOR.editorConfig = function( config ) {
	 *			// Define changes to default configuration here. For example:
	 *			config.language = 'fr';
	 *			config.uiColor = '#AADC6E';
	 *		};
	 *
	 * @method editorConfig
	 * @param {CKEDITOR.config} config A configuration object containing the
	 * settings defined for a {@link CKEDITOR.editor} instance up to this
	 * function call. Note that not all settings may still be available. See
	 * [Configuration Loading Order](http://docs.cksource.com/CKEditor_3.x/Developers_Guide/Setting_Configurations#Configuration_Loading_Order)
	 * for details.
	 */
	
	// PACKAGER_RENAME( CKEDITOR )

/***/ },
/* 2 */
/*!************************!*\
  !*** ./core/loader.js ***!
  \************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.loader} objects, which is used to
	 *		load core scripts and their dependencies from _source.
	 */
	
	if (typeof CKEDITOR == 'undefined') CKEDITOR = {}; // jshint ignore:line
	
	if (!CKEDITOR.loader) {
		/**
	  * Load core scripts and their dependencies from _source.
	  *
	  * @class
	  * @singleton
	  */
		CKEDITOR.loader = function () {
			// Table of script names and their dependencies.
			var scripts = {
				'_bootstrap': ['config', 'creators/inline', 'creators/themedui', 'editable', 'ckeditor', 'plugins', 'scriptloader', 'style', 'tools',
				// The following are entries that we want to force loading at the end to avoid dependence recursion.
				'dom/comment', 'dom/elementpath', 'dom/text', 'dom/rangelist', 'skin'],
				'ckeditor': ['ckeditor_basic', 'log', 'dom', 'dtd', 'dom/document', 'dom/element', 'dom/iterator', 'editor', 'event', 'htmldataprocessor', 'htmlparser', 'htmlparser/element', 'htmlparser/fragment', 'htmlparser/filter', 'htmlparser/basicwriter', 'template', 'tools'],
				'ckeditor_base': [],
				'ckeditor_basic': ['editor_basic', 'env', 'event'],
				'command': [],
				'config': ['ckeditor_base'],
				'dom': [],
				'dom/comment': ['dom/node'],
				'dom/document': ['dom/node', 'dom/window'],
				'dom/documentfragment': ['dom/element'],
				'dom/element': ['dom', 'dom/document', 'dom/domobject', 'dom/node', 'dom/nodelist', 'tools'],
				'dom/elementpath': ['dom/element'],
				'dom/event': [],
				'dom/iterator': ['dom/range'],
				'dom/node': ['dom/domobject', 'tools'],
				'dom/nodelist': ['dom/node'],
				'dom/domobject': ['dom/event'],
				'dom/range': ['dom/document', 'dom/documentfragment', 'dom/element', 'dom/walker'],
				'dom/rangelist': ['dom/range'],
				'dom/text': ['dom/node', 'dom/domobject'],
				'dom/walker': ['dom/node'],
				'dom/window': ['dom/domobject'],
				'dtd': ['tools'],
				'editable': ['editor', 'tools'],
				'editor': ['command', 'config', 'editor_basic', 'filter', 'focusmanager', 'keystrokehandler', 'lang', 'plugins', 'tools', 'ui'],
				'editor_basic': ['event'],
				'env': [],
				'event': [],
				'filter': ['dtd', 'tools'],
				'focusmanager': [],
				'htmldataprocessor': ['htmlparser', 'htmlparser/basicwriter', 'htmlparser/fragment', 'htmlparser/filter'],
				'htmlparser': [],
				'htmlparser/comment': ['htmlparser', 'htmlparser/node'],
				'htmlparser/element': ['htmlparser', 'htmlparser/fragment', 'htmlparser/node'],
				'htmlparser/fragment': ['htmlparser', 'htmlparser/comment', 'htmlparser/text', 'htmlparser/cdata'],
				'htmlparser/text': ['htmlparser', 'htmlparser/node'],
				'htmlparser/cdata': ['htmlparser', 'htmlparser/node'],
				'htmlparser/filter': ['htmlparser'],
				'htmlparser/basicwriter': ['htmlparser'],
				'htmlparser/node': ['htmlparser'],
				'keystrokehandler': ['event'],
				'lang': [],
				'log': ['ckeditor_basic'],
				'plugins': ['resourcemanager'],
				'resourcemanager': ['scriptloader', 'tools'],
				'scriptloader': ['dom/element', 'env'],
				'selection': ['dom/range', 'dom/walker'],
				'skin': [],
				'style': ['selection'],
				'template': [],
				'tools': ['env'],
				'ui': [],
				'creators/themedui': [],
				'creators/inline': []
			};
	
			// The production implementation contains a fixed timestamp generated by the releaser.
			var timestamp = '%TIMESTAMP%';
			// The development implementation contains a current timestamp.					// %REMOVE_LINE%
			timestamp = CKEDITOR && CKEDITOR.timestamp || new Date().valueOf(); // %REMOVE_LINE%
	
			var getUrl = function (resource) {
				if (CKEDITOR && CKEDITOR.getUrl) return CKEDITOR.getUrl(resource);
	
				return CKEDITOR.basePath + resource + (resource.indexOf('?') >= 0 ? '&' : '?') + 't=' + timestamp;
			};
	
			var pendingLoad = [];
	
			return {
				/**
	    * The list of loaded scripts in their loading order.
	    *
	    *		// Alert the loaded script names.
	    *		alert( CKEDITOR.loader.loadedScripts );
	    */
				loadedScripts: [],
				/**
	    * Table of script names and their dependencies.
	    *
	    * @property {Array}
	    */
				scripts: scripts,
	
				/**
	    * @todo
	    */
				test: [],
				loadPending: function () {
					var scriptName = pendingLoad.shift();
	
					if (!scriptName) return;
	
					var scriptSrc = getUrl('core/' + scriptName + '.js');
	
					var script = document.createElement('script');
					script.type = 'text/javascript';
					script.src = scriptSrc;
	
					function onScriptLoaded() {
						// Append this script to the list of loaded scripts.
						CKEDITOR.loader.loadedScripts.push(scriptName);
	
						// Load the next.
						CKEDITOR.loader.loadPending();
					}
	
					// We must guarantee the execution order of the scripts, so we
					// need to load them one by one. (#4145)
					// The following if/else block has been taken from the scriptloader core code.
					if (typeof script.onreadystatechange !== 'undefined') {
						/** @ignore */
						script.onreadystatechange = function () {
							if (script.readyState == 'loaded' || script.readyState == 'complete') {
								script.onreadystatechange = null;
								onScriptLoaded();
							}
						};
					} else {
						/** @ignore */
						script.onload = function () {
							// Some browsers, such as Safari, may call the onLoad function
							// immediately. Which will break the loading sequence. (#3661)
							setTimeout(function () {
								onScriptLoaded(scriptName);
							}, 0);
						};
					}
	
					// document.body.appendChild( script );
				},
	
				/**
	    * Loads a specific script, including its dependencies. This is not a
	    * synchronous loading, which means that the code to be loaded will
	    * not necessarily be available after this call.
	    *
	    *		CKEDITOR.loader.load( 'dom/element' );
	    *
	    * @param {String} scriptName
	    * @param {Boolean} [defer=false]
	    * @todo params
	    */
				load: function (scriptName, defer) {
					// Check if the script has already been loaded.
					if ('s:' + scriptName in this.loadedScripts) return;
					// Get the script dependencies list.
					var dependencies = scripts[scriptName];
					if (!dependencies) throw 'The script name"' + scriptName + '" is not defined.';
	
					// Mark the script as loaded, even before really loading it, to
					// avoid cross references recursion.
					// Prepend script name with 's:' to avoid conflict with Array's methods.
					this.loadedScripts['s:' + scriptName] = true;
	
					// Load all dependencies first.
					for (var i = 0; i < dependencies.length; i++) this.load(dependencies[i], true);
	
					var scriptSrc = getUrl('core/' + scriptName + '.js');
	
					// Append the <script> element to the DOM.
					// If the page is fully loaded, we can't use document.write
					// but if the script is run while the body is loading then it's safe to use it
					// Unfortunately, Firefox <3.6 doesn't support document.readyState, so it won't get this improvement
					if (document.body && (!document.readyState || document.readyState == 'complete')) {
						pendingLoad.push(scriptName);
	
						if (!defer) this.loadPending();
					} else {
						// Append this script to the list of loaded scripts.
						this.loadedScripts.push(scriptName);
						// document.write( '<script src="' + scriptSrc + '" type="text/javascript"><\/script>' );
					}
				}
			};
		}();
	}
	
	// Check if any script has been defined for autoload.
	if (CKEDITOR._autoLoad) {
		CKEDITOR.loader.load(CKEDITOR._autoLoad);
		delete CKEDITOR._autoLoad;
	}

/***/ },
/* 3 */
/*!***********************!*\
  !*** ./core/event.js ***!
  \***********************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.event} class, which serves as the
	 *		base for classes and objects that require event handling features.
	 */
	
	if (!CKEDITOR.event) {
		/**
	  * Creates an event class instance. This constructor is rarely used, being
	  * the {@link #implementOn} function used in class prototypes directly
	  * instead.
	  *
	  * This is a base class for classes and objects that require event
	  * handling features.
	  *
	  * Do not confuse this class with {@link CKEDITOR.dom.event} which is
	  * instead used for DOM events. The CKEDITOR.event class implements the
	  * internal event system used by the CKEditor to fire API related events.
	  *
	  * @class
	  * @constructor Creates an event class instance.
	  */
		CKEDITOR.event = function () {};
	
		/**
	  * Implements the {@link CKEDITOR.event} features in an object.
	  *
	  *		var myObject = { message: 'Example' };
	  *		CKEDITOR.event.implementOn( myObject );
	  *
	  *		myObject.on( 'testEvent', function() {
	  *			alert( this.message );
	  *		} );
	  *		myObject.fire( 'testEvent' ); // 'Example'
	  *
	  * @static
	  * @param {Object} targetObject The object into which implement the features.
	  */
		CKEDITOR.event.implementOn = function (targetObject) {
			//相当于类的静态方法，但是实例无法调用
			var eventProto = CKEDITOR.event.prototype;
	
			for (var prop in eventProto) {
				if (targetObject[prop] == null) targetObject[prop] = eventProto[prop];
			}
		};
	
		CKEDITOR.event.prototype = function () {
			// Returns the private events object for a given object.
			var getPrivate = function (obj) {
				var _ = obj.getPrivate && obj.getPrivate() || obj._ || (obj._ = {});
				return _.events || (_.events = {});
			};
	
			var eventEntry = function (eventName) {
				this.name = eventName;
				this.listeners = [];
			};
	
			eventEntry.prototype = {
				// Get the listener index for a specified function.
				// Returns -1 if not found.
				getListenerIndex: function (listenerFunction) {
					for (var i = 0, listeners = this.listeners; i < listeners.length; i++) {
						if (listeners[i].fn == listenerFunction) return i;
					}
					return -1;
				}
			};
	
			// Retrieve the event entry on the event host (create it if needed).
			function getEntry(name) {
				// Get the event entry (create it if needed).
				var events = getPrivate(this);
				return events[name] || (events[name] = new eventEntry(name));
			}
	
			return {
				/**
	    * Predefine some intrinsic properties on a specific event name.
	    *
	    * @param {String} name The event name
	    * @param meta
	    * @param [meta.errorProof=false] Whether the event firing should catch error thrown from a per listener call.
	    */
				define: function (name, meta) {
					var entry = getEntry.call(this, name);
					CKEDITOR.tools.extend(entry, meta, true);
				},
	
				/**
	    * Registers a listener to a specific event in the current object.
	    *
	    *		someObject.on( 'someEvent', function() {
	    *			alert( this == someObject );		// true
	    *		} );
	    *
	    *		someObject.on( 'someEvent', function() {
	    *			alert( this == anotherObject );		// true
	    *		}, anotherObject );
	    *
	    *		someObject.on( 'someEvent', function( event ) {
	    *			alert( event.listenerData );		// 'Example'
	    *		}, null, 'Example' );
	    *
	    *		someObject.on( 'someEvent', function() { ... } );						// 2nd called
	    *		someObject.on( 'someEvent', function() { ... }, null, null, 100 );		// 3rd called
	    *		someObject.on( 'someEvent', function() { ... }, null, null, 1 );		// 1st called
	    *
	    * @param {String} eventName The event name to which listen.
	    * @param {Function} listenerFunction The function listening to the
	    * event. A single {@link CKEDITOR.eventInfo} object instanced
	    * is passed to this function containing all the event data.
	    * @param {Object} [scopeObj] The object used to scope the listener
	    * call (the `this` object). If omitted, the current object is used.
	    * @param {Object} [listenerData] Data to be sent as the
	    * {@link CKEDITOR.eventInfo#listenerData} when calling the
	    * listener.
	    * @param {Number} [priority=10] The listener priority. Lower priority
	    * listeners are called first. Listeners with the same priority
	    * value are called in registration order.
	    * @returns {Object} An object containing the `removeListener`
	    * function, which can be used to remove the listener at any time.
	    */
				on: function (eventName, listenerFunction, scopeObj, listenerData, priority) {
					// Create the function to be fired for this listener.
					function listenerFirer(editor, publisherData, stopFn, cancelFn) {
						var ev = {
							name: eventName,
							sender: this,
							editor: editor,
							data: publisherData,
							listenerData: listenerData,
							stop: stopFn,
							cancel: cancelFn,
							removeListener: removeListener
						};
	
						var ret = listenerFunction.call(scopeObj, ev);
	
						return ret === false ? false : ev.data;
					}
	
					function removeListener() {
						me.removeListener(eventName, listenerFunction);
					}
	
					var event = getEntry.call(this, eventName);
	
					if (event.getListenerIndex(listenerFunction) < 0) {
						// Get the listeners.
						var listeners = event.listeners;
	
						// Fill the scope.
						if (!scopeObj) scopeObj = this;
	
						// Default the priority, if needed.
						if (isNaN(priority)) priority = 10;
	
						var me = this;
	
						listenerFirer.fn = listenerFunction;
						listenerFirer.priority = priority;
	
						// Search for the right position for this new listener, based on its
						// priority.
						for (var i = listeners.length - 1; i >= 0; i--) {
							// Find the item which should be before the new one.
							if (listeners[i].priority <= priority) {
								// Insert the listener in the array.
								listeners.splice(i + 1, 0, listenerFirer);
								return { removeListener: removeListener };
							}
						}
	
						// If no position has been found (or zero length), put it in
						// the front of list.
						listeners.unshift(listenerFirer);
					}
	
					return { removeListener: removeListener };
				},
	
				/**
	    * Similiar with {@link #on} but the listener will be called only once upon the next event firing.
	    *
	    * @see CKEDITOR.event#on
	    */
				once: function () {
					var args = Array.prototype.slice.call(arguments),
					    fn = args[1];
	
					args[1] = function (evt) {
						evt.removeListener();
						return fn.apply(this, arguments);
					};
	
					return this.on.apply(this, args);
				},
	
				/**
	    * @static
	    * @property {Boolean} useCapture
	    * @todo
	    */
	
				/**
	    * Register event handler under the capturing stage on supported target.
	    */
				capture: function () {
					CKEDITOR.event.useCapture = 1;
					var retval = this.on.apply(this, arguments);
					CKEDITOR.event.useCapture = 0;
					return retval;
				},
	
				/**
	    * Fires an specific event in the object. All registered listeners are
	    * called at this point.
	    *
	    *		someObject.on( 'someEvent', function() { ... } );
	    *		someObject.on( 'someEvent', function() { ... } );
	    *		someObject.fire( 'someEvent' );				// Both listeners are called.
	    *
	    *		someObject.on( 'someEvent', function( event ) {
	    *			alert( event.data );					// 'Example'
	    *		} );
	    *		someObject.fire( 'someEvent', 'Example' );
	    *
	    * @method
	    * @param {String} eventName The event name to fire.
	    * @param {Object} [data] Data to be sent as the
	    * {@link CKEDITOR.eventInfo#data} when calling the listeners.
	    * @param {CKEDITOR.editor} [editor] The editor instance to send as the
	    * {@link CKEDITOR.eventInfo#editor} when calling the listener.
	    * @returns {Boolean/Object} A boolean indicating that the event is to be
	    * canceled, or data returned by one of the listeners.
	    */
				fire: function () {
					// Create the function that marks the event as stopped.
					var stopped = 0;
					var stopEvent = function () {
						stopped = 1;
					};
	
					// Create the function that marks the event as canceled.
					var canceled = 0;
					var cancelEvent = function () {
						canceled = 1;
					};
	
					return function (eventName, data, editor) {
						// Get the event entry.
						var event = getPrivate(this)[eventName];
	
						// Save the previous stopped and cancelled states. We may
						// be nesting fire() calls.
						var previousStopped = stopped,
						    previousCancelled = canceled;
	
						// Reset the stopped and canceled flags.
						stopped = canceled = 0;
	
						if (event) {
							var listeners = event.listeners;
	
							if (listeners.length) {
								// As some listeners may remove themselves from the
								// event, the original array length is dinamic. So,
								// let's make a copy of all listeners, so we are
								// sure we'll call all of them.
								listeners = listeners.slice(0);
	
								var retData;
								// Loop through all listeners.
								for (var i = 0; i < listeners.length; i++) {
									// Call the listener, passing the event data.
									if (event.errorProof) {
										try {
											retData = listeners[i].call(this, editor, data, stopEvent, cancelEvent);
										} catch (er) {}
									} else {
										retData = listeners[i].call(this, editor, data, stopEvent, cancelEvent);
									}
	
									if (retData === false) canceled = 1;else if (typeof retData != 'undefined') data = retData;
	
									// No further calls is stopped or canceled.
									if (stopped || canceled) break;
								}
							}
						}
	
						var ret = canceled ? false : typeof data == 'undefined' ? true : data;
	
						// Restore the previous stopped and canceled states.
						stopped = previousStopped;
						canceled = previousCancelled;
	
						return ret;
					};
				}(),
	
				/**
	    * Fires an specific event in the object, releasing all listeners
	    * registered to that event. The same listeners are not called again on
	    * successive calls of it or of {@link #fire}.
	    *
	    *		someObject.on( 'someEvent', function() { ... } );
	    *		someObject.fire( 'someEvent' );			// Above listener called.
	    *		someObject.fireOnce( 'someEvent' );		// Above listener called.
	    *		someObject.fire( 'someEvent' );			// No listeners called.
	    *
	    * @param {String} eventName The event name to fire.
	    * @param {Object} [data] Data to be sent as the
	    * {@link CKEDITOR.eventInfo#data} when calling the listeners.
	    * @param {CKEDITOR.editor} [editor] The editor instance to send as the
	    * {@link CKEDITOR.eventInfo#editor} when calling the listener.
	    * @returns {Boolean/Object} A booloan indicating that the event is to be
	    * canceled, or data returned by one of the listeners.
	    */
				fireOnce: function (eventName, data, editor) {
					var ret = this.fire(eventName, data, editor);
					delete getPrivate(this)[eventName];
					return ret;
				},
	
				/**
	    * Unregisters a listener function from being called at the specified
	    * event. No errors are thrown if the listener has not been registered previously.
	    *
	    *		var myListener = function() { ... };
	    *		someObject.on( 'someEvent', myListener );
	    *		someObject.fire( 'someEvent' );					// myListener called.
	    *		someObject.removeListener( 'someEvent', myListener );
	    *		someObject.fire( 'someEvent' );					// myListener not called.
	    *
	    * @param {String} eventName The event name.
	    * @param {Function} listenerFunction The listener function to unregister.
	    */
				removeListener: function (eventName, listenerFunction) {
					// Get the event entry.
					var event = getPrivate(this)[eventName];
	
					if (event) {
						var index = event.getListenerIndex(listenerFunction);
						if (index >= 0) event.listeners.splice(index, 1);
					}
				},
	
				/**
	    * Remove all existing listeners on this object, for cleanup purpose.
	    */
				removeAllListeners: function () {
					var events = getPrivate(this);
					for (var i in events) delete events[i];
				},
	
				/**
	    * Checks if there is any listener registered to a given event.
	    *
	    *		var myListener = function() { ... };
	    *		someObject.on( 'someEvent', myListener );
	    *		alert( someObject.hasListeners( 'someEvent' ) );	// true
	    *		alert( someObject.hasListeners( 'noEvent' ) );		// false
	    *
	    * @param {String} eventName The event name.
	    * @returns {Boolean}
	    */
				hasListeners: function (eventName) {
					var event = getPrivate(this)[eventName];
					return event && event.listeners.length > 0;
				}
			};
		}();
	}

/***/ },
/* 4 */
/*!******************************!*\
  !*** ./core/editor_basic.js ***!
  \******************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	if (!CKEDITOR.editor) {
		// Documented at editor.js.
		CKEDITOR.editor = function () {
			// Push this editor to the pending list. It'll be processed later once
			// the full editor code is loaded.
			CKEDITOR._.pending.push([this, arguments]);
	
			// Call the CKEDITOR.event constructor to initialize this instance.
			CKEDITOR.event.call(this);
		};
	
		// Both fire and fireOnce will always pass this editor instance as the
		// "editor" param in CKEDITOR.event.fire. So, we override it to do that
		// automaticaly.
		CKEDITOR.editor.prototype.fire = function (eventName, data) {
			if (eventName in { instanceReady: 1, loaded: 1 }) this[eventName] = true;
	
			return CKEDITOR.event.prototype.fire.call(this, eventName, data, this);
		};
	
		CKEDITOR.editor.prototype.fireOnce = function (eventName, data) {
			if (eventName in { instanceReady: 1, loaded: 1 }) this[eventName] = true;
	
			return CKEDITOR.event.prototype.fireOnce.call(this, eventName, data, this);
		};
	
		// "Inherit" (copy actually) from CKEDITOR.event.
		CKEDITOR.event.implementOn(CKEDITOR.editor.prototype);
	}

/***/ },
/* 5 */
/*!*********************!*\
  !*** ./core/env.js ***!
  \*********************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.env} object which contains
	 *		environment and browser information.
	 */
	
	if (!CKEDITOR.env) {
		/**
	  * Environment and browser information.
	  *
	  * @class CKEDITOR.env
	  * @singleton
	  */
		CKEDITOR.env = function () {
			var agent = navigator.userAgent.toLowerCase(),
			    edge = agent.match(/edge[ \/](\d+.?\d*)/),
			    trident = agent.indexOf('trident/') > -1,
			    ie = !!(edge || trident);
	
			var env = {
				/**
	    * Indicates that CKEditor is running in Internet Explorer.
	    *
	    *		if ( CKEDITOR.env.ie )
	    *			alert( 'I\'m running in IE!' );
	    *
	    * **Note:** This property is also set to `true` if CKEditor is running
	    * in {@link #edge Microsoft Edge}.
	    *
	    * @property {Boolean}
	    */
				ie: ie,
	
				/**
	    * Indicates that CKEditor is running in Microsoft Edge.
	    *
	    *		if ( CKEDITOR.env.edge )
	    *			alert( 'I\'m running in Edge!' );
	    *
	    * See also {@link #ie}.
	    *
	    * @since 4.5
	    * @property {Boolean}
	    */
				edge: !!edge,
	
				/**
	    * Indicates that CKEditor is running in a WebKit-based browser, like Safari,
	    * or Blink-based browser, like Chrome.
	    *
	    *		if ( CKEDITOR.env.webkit )
	    *			alert( 'I\'m running in a WebKit browser!' );
	    *
	    * @property {Boolean}
	    */
				webkit: !ie && agent.indexOf(' applewebkit/') > -1,
	
				/**
	    * Indicates that CKEditor is running in Adobe AIR.
	    *
	    *		if ( CKEDITOR.env.air )
	    *			alert( 'I\'m on AIR!' );
	    *
	    * @property {Boolean}
	    */
				air: agent.indexOf(' adobeair/') > -1,
	
				/**
	    * Indicates that CKEditor is running on Macintosh.
	    *
	    *		if ( CKEDITOR.env.mac )
	    *			alert( 'I love apples!'' );
	    *
	    * @property {Boolean}
	    */
				mac: agent.indexOf('macintosh') > -1,
	
				/**
	    * Indicates that CKEditor is running in a Quirks Mode environment.
	    *
	    *		if ( CKEDITOR.env.quirks )
	    *			alert( 'Nooooo!' );
	    *
	    * Internet Explorer 10 introduced the _New Quirks Mode_, which is similar to the _Quirks Mode_
	    * implemented in other modern browsers and defined in the HTML5 specification. It can be handled
	    * as the Standards mode, so the value of this property will be set to `false`.
	    *
	    * The _Internet Explorer 5 Quirks_ mode which is still available in Internet Explorer 10+
	    * sets this value to `true` and {@link #version} to `7`.
	    *
	    * Read more: [IEBlog](http://blogs.msdn.com/b/ie/archive/2011/12/14/interoperable-html5-quirks-mode-in-ie10.aspx)
	    *
	    * @property {Boolean}
	    */
				quirks: document.compatMode == 'BackCompat' && (!document.documentMode || document.documentMode < 10),
	
				/**
	    * Indicates that CKEditor is running in a mobile environemnt.
	    *
	    *		if ( CKEDITOR.env.mobile )
	    *			alert( 'I\'m running with CKEditor today!' );
	    *
	    * @deprecated
	    * @property {Boolean}
	    */
				mobile: agent.indexOf('mobile') > -1,
	
				/**
	    * Indicates that CKEditor is running on Apple iPhone/iPad/iPod devices.
	    *
	    *		if ( CKEDITOR.env.iOS )
	    *			alert( 'I like little apples!' );
	    *
	    * @property {Boolean}
	    */
				iOS: /(ipad|iphone|ipod)/.test(agent),
	
				/**
	    * Indicates that the browser has a custom domain enabled. This has
	    * been set with `document.domain`.
	    *
	    *		if ( CKEDITOR.env.isCustomDomain() )
	    *			alert( 'I\'m in a custom domain!' );
	    *
	    * @returns {Boolean} `true` if a custom domain is enabled.
	    * @deprecated
	    */
				isCustomDomain: function () {
					if (!this.ie) return false;
	
					var domain = document.domain,
					    hostname = window.location.hostname;
	
					return domain != hostname && domain != '[' + hostname + ']'; // IPv6 IP support (#5434)
				},
	
				/**
	    * Indicates that the page is running under an encrypted connection.
	    *
	    *		if ( CKEDITOR.env.secure )
	    *			alert( 'I\'m on SSL!' );
	    *
	    * @returns {Boolean} `true` if the page has an encrypted connection.
	    */
				secure: location.protocol == 'https:'
			};
	
			/**
	   * Indicates that CKEditor is running in a Gecko-based browser, like
	   * Firefox.
	   *
	   *		if ( CKEDITOR.env.gecko )
	   *			alert( 'I\'m riding a gecko!' );
	   *
	   * @property {Boolean}
	   */
			env.gecko = navigator.product == 'Gecko' && !env.webkit && !env.ie;
	
			/**
	   * Indicates that CKEditor is running in a Blink-based browser like Chrome.
	   *
	   *		if ( CKEDITOR.env.chrome )
	   *			alert( 'I\'m running in Chrome!' );
	   *
	   * @property {Boolean} chrome
	   */
	
			/**
	   * Indicates that CKEditor is running in Safari (including the mobile version).
	   *
	   *		if ( CKEDITOR.env.safari )
	   *			alert( 'I\'m on Safari!' );
	   *
	   * @property {Boolean} safari
	   */
			if (env.webkit) {
				if (agent.indexOf('chrome') > -1) env.chrome = true;else env.safari = true;
			}
	
			var version = 0;
	
			// Internet Explorer 6.0+
			if (env.ie) {
				// We use env.version for feature detection, so set it properly.
				if (edge) {
					version = parseFloat(edge[1]);
				} else if (env.quirks || !document.documentMode) {
					version = parseFloat(agent.match(/msie (\d+)/)[1]);
				} else {
					version = document.documentMode;
				}
	
				// Deprecated features available just for backwards compatibility.
				env.ie9Compat = version == 9;
				env.ie8Compat = version == 8;
				env.ie7Compat = version == 7;
				env.ie6Compat = version < 7 || env.quirks;
	
				/**
	    * Indicates that CKEditor is running in an IE6-like environment, which
	    * includes IE6 itself as well as IE7, IE8 and IE9 in Quirks Mode.
	    *
	    * @deprecated
	    * @property {Boolean} ie6Compat
	    */
	
				/**
	    * Indicates that CKEditor is running in an IE7-like environment, which
	    * includes IE7 itself and IE8's IE7 Document Mode.
	    *
	    * @deprecated
	    * @property {Boolean} ie7Compat
	    */
	
				/**
	    * Indicates that CKEditor is running in Internet Explorer 8 on
	    * Standards Mode.
	    *
	    * @deprecated
	    * @property {Boolean} ie8Compat
	    */
	
				/**
	    * Indicates that CKEditor is running in Internet Explorer 9 on
	    * Standards Mode.
	    *
	    * @deprecated
	    * @property {Boolean} ie9Compat
	    */
			}
	
			// Gecko.
			if (env.gecko) {
				var geckoRelease = agent.match(/rv:([\d\.]+)/);
				if (geckoRelease) {
					geckoRelease = geckoRelease[1].split('.');
					version = geckoRelease[0] * 10000 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;
				}
			}
	
			// Adobe AIR 1.0+
			// Checked before Safari because AIR have the WebKit rich text editor
			// features from Safari 3.0.4, but the version reported is 420.
			if (env.air) version = parseFloat(agent.match(/ adobeair\/(\d+)/)[1]);
	
			// WebKit 522+ (Safari 3+)
			if (env.webkit) version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);
	
			/**
	   * Contains the browser version.
	   *
	   * For Gecko-based browsers (like Firefox) it contains the revision
	   * number with first three parts concatenated with a padding zero
	   * (e.g. for revision 1.9.0.2 we have 10900).
	   *
	   * For WebKit-based browsers (like Safari and Chrome) it contains the
	   * WebKit build version (e.g. 522).
	   *
	   * For IE browsers, it matches the "Document Mode".
	   *
	   *		if ( CKEDITOR.env.ie && CKEDITOR.env.version <= 6 )
	   *			alert( 'Ouch!' );
	   *
	   * @property {Number}
	   */
			env.version = version;
	
			/**
	   * Since CKEditor 4.5 this property is a blacklist of browsers incompatible with CKEditor. It means that it is
	   * set to `false` only in browsers that are known to be incompatible. Before CKEditor 4.5 this
	   * property was a whitelist of browsers that were known to be compatible with CKEditor.
	   *
	   * The reason for this change is the rising fragmentation of the browser market (especially the mobile segment).
	   * It became too complicated to check in which new environments CKEditor is going to work.
	   *
	   * In order to enable CKEditor 4.4.x and below in unsupported environments see the
	   * [Enabling CKEditor in Unsupported Environments](#!/guide/dev_unsupported_environments) article.
	   *
	   *		if ( CKEDITOR.env.isCompatible )
	   *			alert( 'Your browser is not known to be incompatible with CKEditor!' );
	   *
	   * @property {Boolean}
	   */
			env.isCompatible =
			// IE 7+ (IE 7 is not supported, but IE Compat Mode is and it is recognized as IE7).
			!(env.ie && version < 7) &&
			// Firefox 4.0+.
			!(env.gecko && version < 40000) &&
			// Chrome 6+, Safari 5.1+, iOS 5+.
			!(env.webkit && version < 534);
	
			/**
	   * Indicates that CKEditor is running in the HiDPI environment.
	   *
	   *		if ( CKEDITOR.env.hidpi )
	   *			alert( 'You are using a screen with high pixel density.' );
	   *
	   * @property {Boolean}
	   */
			env.hidpi = window.devicePixelRatio >= 2;
	
			/**
	   * Indicates that CKEditor is running in a browser which uses a bogus
	   * `<br>` filler in order to correctly display caret in empty blocks.
	   *
	   * @since 4.3
	   * @property {Boolean}
	   */
			env.needsBrFiller = env.gecko || env.webkit || env.ie && version > 10;
	
			/**
	   * Indicates that CKEditor is running in a browser which needs a
	   * non-breaking space filler in order to correctly display caret in empty blocks.
	   *
	   * @since 4.3
	   * @property {Boolean}
	   */
			env.needsNbspFiller = env.ie && version < 11;
	
			/**
	   * A CSS class that denotes the browser where CKEditor runs and is appended
	   * to the HTML element that contains the editor. It makes it easier to apply
	   * browser-specific styles to editor instances.
	   *
	   *		myDiv.className = CKEDITOR.env.cssClass;
	   *
	   * @property {String}
	   */
			env.cssClass = 'cke_browser_' + (env.ie ? 'ie' : env.gecko ? 'gecko' : env.webkit ? 'webkit' : 'unknown');
	
			if (env.quirks) env.cssClass += ' cke_browser_quirks';
	
			if (env.ie) env.cssClass += ' cke_browser_ie' + (env.quirks ? '6 cke_browser_iequirks' : env.version);
	
			if (env.air) env.cssClass += ' cke_browser_air';
	
			if (env.iOS) env.cssClass += ' cke_browser_ios';
	
			if (env.hidpi) env.cssClass += ' cke_hidpi';
	
			return env;
		}();
	}
	
	// PACKAGER_RENAME( CKEDITOR.env )
	// PACKAGER_RENAME( CKEDITOR.env.ie )

/***/ },
/* 6 */
/*!********************************!*\
  !*** ./core/ckeditor_basic.js ***!
  \********************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Contains the second part of the {@link CKEDITOR} object
	 *		definition, which defines the basic editor features to be available in
	 *		the root ckeditor_basic.js file.
	 */
	
	if (CKEDITOR.status == 'unloaded') {
		(function () {
			CKEDITOR.event.implementOn(CKEDITOR);
	
			/**
	   * Forces the full CKEditor core code, in the case only the basic code has been
	   * loaded (`ckeditor_basic.js`). This method self-destroys (becomes undefined) in
	   * the first call or as soon as the full code is available.
	   *
	   *		// Check if the full core code has been loaded and load it.
	   *		if ( CKEDITOR.loadFullCore )
	   *			CKEDITOR.loadFullCore();
	   *
	   * @member CKEDITOR
	   */
			CKEDITOR.loadFullCore = function () {
				// If the basic code is not ready, just mark it to be loaded.
				if (CKEDITOR.status != 'basic_ready') {
					CKEDITOR.loadFullCore._load = 1;
					return;
				}
	
				// Destroy this function.
				delete CKEDITOR.loadFullCore;
	
				// Append the script to the head.
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = CKEDITOR.basePath + 'ckeditor.js';
				script.src = CKEDITOR.basePath + 'ckeditor_source.js'; // %REMOVE_LINE%
	
				document.getElementsByTagName('head')[0].appendChild(script);
			};
	
			/**
	   * The time to wait (in seconds) to load the full editor code after the
	   * page load, if the "ckeditor_basic" file is used. If set to zero, the
	   * editor is loaded on demand, as soon as an instance is created.
	   *
	   * This value must be set on the page before the page load completion.
	   *
	   *		// Loads the full source after five seconds.
	   *		CKEDITOR.loadFullCoreTimeout = 5;
	   *
	   * @property
	   * @member CKEDITOR
	   */
			CKEDITOR.loadFullCoreTimeout = 0;
	
			// Documented at ckeditor.js.
			CKEDITOR.add = function (editor) {
				// For now, just put the editor in the pending list. It will be
				// processed as soon as the full code gets loaded.
				var pending = this._.pending || (this._.pending = []);
				pending.push(editor);
			};
	
			(function () {
				var onload = function () {
					var loadFullCore = CKEDITOR.loadFullCore,
					    loadFullCoreTimeout = CKEDITOR.loadFullCoreTimeout;
	
					if (!loadFullCore) return;
	
					CKEDITOR.status = 'basic_ready';
	
					if (loadFullCore && loadFullCore._load) loadFullCore();else if (loadFullCoreTimeout) {
						setTimeout(function () {
							if (CKEDITOR.loadFullCore) CKEDITOR.loadFullCore();
						}, loadFullCoreTimeout * 1000);
					}
				};
	
				CKEDITOR.domReady(onload);
			})();
	
			CKEDITOR.status = 'basic_loaded';
		})();
	}

/***/ },
/* 7 */
/*!*********************!*\
  !*** ./core/log.js ***!
  \*********************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines {@link CKEDITOR#verbosity} and binary flags {@link CKEDITOR#VERBOSITY_WARN} and
	 * {@link CKEDITOR#VERBOSITY_ERROR}. Defines also the {@link CKEDITOR#error} and {@link CKEDITOR#warn} functions
	 * and the default handler for the {@link CKEDITOR#log} event.
	 */
	
	/* global console */
	
	'use strict';
	
	/**
	 * Warning reporting verbosity level. When {@link CKEDITOR#verbosity} is set to this value, only {@link CKEDITOR#warn}
	 * messages will be output to the console. It is a binary flag so it might be combined with
	 * the {@link CKEDITOR#VERBOSITY_ERROR} flag.
	 *
	 * @since 4.5.4
	 * @readonly
	 * @property {Number} [=1]
	 * @member CKEDITOR
	 */
	
	CKEDITOR.VERBOSITY_WARN = 1;
	
	/**
	 * Error reporting verbosity level. When {@link CKEDITOR#verbosity} is set to this value, only {@link CKEDITOR#error}
	 * messages will be output to the console. It is a binary flag so it might be combined with
	 * the {@link CKEDITOR#VERBOSITY_WARN} flag.
	 *
	 * @since 4.5.4
	 * @readonly
	 * @property {Number} [=2]
	 * @member CKEDITOR
	 */
	CKEDITOR.VERBOSITY_ERROR = 2;
	
	/**
	 * Verbosity of {@link CKEDITOR#error} and {@link CKEDITOR#warn} methods. Accepts binary flags
	 * {@link CKEDITOR#VERBOSITY_WARN} and {@link CKEDITOR#VERBOSITY_ERROR}.
	 *
	 * 			CKEDITOR.verbosity = 0; // No console output after CKEDITOR.warn and CKEDITOR.error methods.
	 * 			CKEDITOR.verbosity = CKEDITOR.VERBOSITY_WARN; // Console output after CKEDITOR.warn only.
	 * 			CKEDITOR.verbosity = CKEDITOR.VERBOSITY_ERROR; // Console output after CKEDITOR.error only.
	 * 			CKEDITOR.verbosity = CKEDITOR.VERBOSITY_WARN | CKEDITOR.VERBOSITY_ERROR; // Console output after both methods.
	 *
	 * Default value enables both {@link CKEDITOR#VERBOSITY_WARN} and {@link CKEDITOR#VERBOSITY_ERROR}.
	 *
	 * @since 4.5.4
	 * @member CKEDITOR
	 * @type {Number}
	 */
	CKEDITOR.verbosity = CKEDITOR.VERBOSITY_WARN | CKEDITOR.VERBOSITY_ERROR;
	
	/**
	 * Warning reporting function. When {@link CKEDITOR#verbosity} has the {@link CKEDITOR#VERBOSITY_WARN} flag set, it fires
	 * the {@link CKEDITOR#log} event with type set to `warn`. Fired event contains also provided `errorCode` and `additionalData`.
	 *
	 * @since 4.5.4
	 * @member CKEDITOR
	 * @param {String} errorCode Error code describing reported problem.
	 * @param {Object} [additionalData] Additional data associated with reported problem.
	 */
	CKEDITOR.warn = function (errorCode, additionalData) {
	  if (CKEDITOR.verbosity & CKEDITOR.VERBOSITY_WARN) {
	    CKEDITOR.fire('log', { type: 'warn', errorCode: errorCode, additionalData: additionalData });
	  }
	};
	
	/**
	 * Error reporting function. When {@link CKEDITOR#verbosity} has {@link CKEDITOR#VERBOSITY_ERROR} flag set, it fires
	 * {@link CKEDITOR#log} event with the type set to `error`. The fired event also contains the provided `errorCode` and
	 * `additionalData`.
	 *
	 * @since 4.5.4
	 * @member CKEDITOR
	 * @param {String} errorCode Error code describing the reported problem.
	 * @param {Object} [additionalData] Additional data associated with the reported problem.
	 */
	CKEDITOR.error = function (errorCode, additionalData) {
	  if (CKEDITOR.verbosity & CKEDITOR.VERBOSITY_ERROR) {
	    CKEDITOR.fire('log', { type: 'error', errorCode: errorCode, additionalData: additionalData });
	  }
	};
	
	/**
	 * Fired by {@link CKEDITOR#warn} and {@link CKEDITOR#error} methods.
	 * Default listener logs provided information to the console.
	 *
	 * This event can be used to provide a custom error/warning handler:
	 *
	 * 			CKEDTIOR.on( 'log', function( evt ) {
	 *			    	// Cancel default listener.
	 *					evt.cancel();
	 *					// Log event data.
	 *					console.log( evt.data.type, evt.data.errorCode, evt.data.additionalData );
	 * 			} );
	 *
	 * @since 4.5.4
	 * @event log
	 * @member CKEDITOR
	 * @param data
	 * @param {String} data.type Log type. Can be `error` or `warn`.
	 * @param {String} data.errorCode Error code describing the reported problem.
	 * @param {Object} [data.additionalData] Additional data associated with this log event.
	 */
	CKEDITOR.on('log', function (evt) {
	  if (!window.console || !window.console.log) {
	    return;
	  }
	
	  var type = console[evt.data.type] ? evt.data.type : 'log',
	      errorCode = evt.data.errorCode,
	      additionalData = evt.data.additionalData,
	      prefix = '[CKEDITOR] ',
	      errorCodeLabel = 'Error code: ';
	
	  if (additionalData) {
	    console[type](prefix + errorCodeLabel + errorCode + '.', additionalData);
	  } else {
	    console[type](prefix + errorCodeLabel + errorCode + '.');
	  }
	
	  console[type](prefix + 'For more information about this error go to http://docs.ckeditor.com/#!/guide/dev_errors-section-' + errorCode);
	}, null, null, 999);

/***/ },
/* 8 */
/*!*********************!*\
  !*** ./core/dom.js ***!
  \*********************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.dom} object, which contains DOM
	 *		manipulation objects and function.
	 */
	
	CKEDITOR.dom = {};
	
	// PACKAGER_RENAME( CKEDITOR.dom )

/***/ },
/* 9 */
/*!***********************!*\
  !*** ./core/tools.js ***!
  \***********************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.tools} object that contains
	 *		utility functions.
	 */
	
	(function () {
		var functions = [],
		    cssVendorPrefix = CKEDITOR.env.gecko ? '-moz-' : CKEDITOR.env.webkit ? '-webkit-' : CKEDITOR.env.ie ? '-ms-' : '',
		    ampRegex = /&/g,
		    gtRegex = />/g,
		    ltRegex = /</g,
		    quoteRegex = /"/g,
		    tokenCharset = 'abcdefghijklmnopqrstuvwxyz0123456789',
		    TOKEN_COOKIE_NAME = 'ckCsrfToken',
		    TOKEN_LENGTH = 40,
		    allEscRegex = /&(lt|gt|amp|quot|nbsp|shy|#\d{1,5});/g,
		    namedEntities = {
			lt: '<',
			gt: '>',
			amp: '&',
			quot: '"',
			nbsp: '\u00a0',
			shy: '\u00ad'
		},
		    allEscDecode = function (match, code) {
			if (code[0] == '#') {
				return String.fromCharCode(parseInt(code.slice(1), 10));
			} else {
				return namedEntities[code];
			}
		};
	
		CKEDITOR.on('reset', function () {
			functions = [];
		});
	
		/**
	  * Utility functions.
	  *
	  * @class
	  * @singleton
	  */
		CKEDITOR.tools = {
			/**
	   * Compares the elements of two arrays.
	   *
	   *		var a = [ 1, 'a', 3 ];
	   *		var b = [ 1, 3, 'a' ];
	   *		var c = [ 1, 'a', 3 ];
	   *		var d = [ 1, 'a', 3, 4 ];
	   *
	   *		alert( CKEDITOR.tools.arrayCompare( a, b ) );  // false
	   *		alert( CKEDITOR.tools.arrayCompare( a, c ) );  // true
	   *		alert( CKEDITOR.tools.arrayCompare( a, d ) );  // false
	   *
	   * @param {Array} arrayA An array to be compared.
	   * @param {Array} arrayB The other array to be compared.
	   * @returns {Boolean} `true` if the arrays have the same length and
	   * their elements match.
	   */
			arrayCompare: function (arrayA, arrayB) {
				if (!arrayA && !arrayB) return true;
	
				if (!arrayA || !arrayB || arrayA.length != arrayB.length) return false;
	
				for (var i = 0; i < arrayA.length; i++) {
					if (arrayA[i] != arrayB[i]) return false;
				}
	
				return true;
			},
	
			/**
	   * Finds the index of the first element in an array for which the `compareFunction` returns `true`.
	   *
	   *		CKEDITOR.tools.getIndex( [ 1, 2, 4, 3, 5 ], function( el ) {
	   *			return el >= 3;
	   *		} ); // 2
	   *
	   * @since 4.5
	   * @param {Array} array Array to search in.
	   * @param {Function} compareFunction Compare function.
	   * @returns {Number} The index of the first matching element or `-1` if none matches.
	   */
			getIndex: function (arr, compareFunction) {
				for (var i = 0; i < arr.length; ++i) {
					if (compareFunction(arr[i])) return i;
				}
				return -1;
			},
	
			/**
	   * Creates a deep copy of an object.
	   *
	   * **Note**: Recursive references are not supported.
	   *
	   *		var obj = {
	   *			name: 'John',
	   *			cars: {
	   *				Mercedes: { color: 'blue' },
	   *				Porsche: { color: 'red' }
	   *			}
	   *		};
	   *		var clone = CKEDITOR.tools.clone( obj );
	   *		clone.name = 'Paul';
	   *		clone.cars.Porsche.color = 'silver';
	   *
	   *		alert( obj.name );					// 'John'
	   *		alert( clone.name );				// 'Paul'
	   *		alert( obj.cars.Porsche.color );	// 'red'
	   *		alert( clone.cars.Porsche.color );	// 'silver'
	   *
	   * @param {Object} object The object to be cloned.
	   * @returns {Object} The object clone.
	   */
			clone: function (obj) {
				var clone;
	
				// Array.
				if (obj && obj instanceof Array) {
					clone = [];
	
					for (var i = 0; i < obj.length; i++) clone[i] = CKEDITOR.tools.clone(obj[i]);
	
					return clone;
				}
	
				// "Static" types.
				if (obj === null || typeof obj != 'object' || obj instanceof String || obj instanceof Number || obj instanceof Boolean || obj instanceof Date || obj instanceof RegExp) return obj;
	
				// DOM objects and window.
				if (obj.nodeType || obj.window === obj) return obj;
	
				// Objects.
				clone = new obj.constructor();
	
				for (var propertyName in obj) {
					var property = obj[propertyName];
					clone[propertyName] = CKEDITOR.tools.clone(property);
				}
	
				return clone;
			},
	
			/**
	   * Turns the first letter of a string to upper-case.
	   *
	   * @param {String} str
	   * @param {Boolean} [keepCase] Keep the case of 2nd to last letter.
	   * @returns {String}
	   */
			capitalize: function (str, keepCase) {
				return str.charAt(0).toUpperCase() + (keepCase ? str.slice(1) : str.slice(1).toLowerCase());
			},
	
			/**
	   * Copies the properties from one object to another. By default, properties
	   * already present in the target object **are not** overwritten.
	   *
	   *		// Create the sample object.
	   *		var myObject = {
	   *			prop1: true
	   *		};
	   *
	   *		// Extend the above object with two properties.
	   *		CKEDITOR.tools.extend( myObject, {
	   *			prop2: true,
	   *			prop3: true
	   *		} );
	   *
	   *		// Alert 'prop1', 'prop2' and 'prop3'.
	   *		for ( var p in myObject )
	   *			alert( p );
	   *
	   * @param {Object} target The object to be extended.
	   * @param {Object...} source The object(s) from properties will be
	   * copied. Any number of objects can be passed to this function.
	   * @param {Boolean} [overwrite] If `true` is specified, it indicates that
	   * properties already present in the target object could be
	   * overwritten by subsequent objects.
	   * @param {Object} [properties] Only properties within the specified names
	   * list will be received from the source object.
	   * @returns {Object} The extended object (target).
	   */
			extend: function (target) {
				var argsLength = arguments.length,
				    overwrite,
				    propertiesList;
	
				if (typeof (overwrite = arguments[argsLength - 1]) == 'boolean') argsLength--;else if (typeof (overwrite = arguments[argsLength - 2]) == 'boolean') {
					propertiesList = arguments[argsLength - 1];
					argsLength -= 2;
				}
				for (var i = 1; i < argsLength; i++) {
					var source = arguments[i];
					for (var propertyName in source) {
						// Only copy existed fields if in overwrite mode.
						if (overwrite === true || target[propertyName] == null) {
							// Only copy  specified fields if list is provided.
							if (!propertiesList || propertyName in propertiesList) target[propertyName] = source[propertyName];
						}
					}
				}
	
				return target;
			},
	
			/**
	   * Creates an object which is an instance of a class whose prototype is a
	   * predefined object. All properties defined in the source object are
	   * automatically inherited by the resulting object, including future
	   * changes to it.
	   *
	   * @param {Object} source The source object to be used as the prototype for
	   * the final object.
	   * @returns {Object} The resulting copy.
	   */
			prototypedCopy: function (source) {
				var copy = function () {};
				copy.prototype = source;
				return new copy();
			},
	
			/**
	   * Makes fast (shallow) copy of an object.
	   * This method is faster than {@link #clone} which does
	   * a deep copy of an object (including arrays).
	   *
	   * @since 4.1
	   * @param {Object} source The object to be copied.
	   * @returns {Object} Copy of `source`.
	   */
			copy: function (source) {
				var obj = {},
				    name;
	
				for (name in source) obj[name] = source[name];
	
				return obj;
			},
	
			/**
	   * Checks if an object is an Array.
	   *
	   *		alert( CKEDITOR.tools.isArray( [] ) );		// true
	   *		alert( CKEDITOR.tools.isArray( 'Test' ) );	// false
	   *
	   * @param {Object} object The object to be checked.
	   * @returns {Boolean} `true` if the object is an Array, otherwise `false`.
	   */
			isArray: function (object) {
				return Object.prototype.toString.call(object) == '[object Array]';
			},
	
			/**
	   * Whether the object contains no properties of its own.
	   *
	   * @param object
	   * @returns {Boolean}
	   */
			isEmpty: function (object) {
				for (var i in object) {
					if (object.hasOwnProperty(i)) return false;
				}
				return true;
			},
	
			/**
	   * Generates an object or a string containing vendor-specific and vendor-free CSS properties.
	   *
	   *		CKEDITOR.tools.cssVendorPrefix( 'border-radius', '0', true );
	   *		// On Firefox: '-moz-border-radius:0;border-radius:0'
	   *		// On Chrome: '-webkit-border-radius:0;border-radius:0'
	   *
	   * @param {String} property The CSS property name.
	   * @param {String} value The CSS value.
	   * @param {Boolean} [asString=false] If `true`, then the returned value will be a CSS string.
	   * @returns {Object/String} The object containing CSS properties or its stringified version.
	   */
			cssVendorPrefix: function (property, value, asString) {
				if (asString) return cssVendorPrefix + property + ':' + value + ';' + property + ':' + value;
	
				var ret = {};
				ret[property] = value;
				ret[cssVendorPrefix + property] = value;
	
				return ret;
			},
	
			/**
	   * Transforms a CSS property name to its relative DOM style name.
	   *
	   *		alert( CKEDITOR.tools.cssStyleToDomStyle( 'background-color' ) );	// 'backgroundColor'
	   *		alert( CKEDITOR.tools.cssStyleToDomStyle( 'float' ) );				// 'cssFloat'
	   *
	   * @method
	   * @param {String} cssName The CSS property name.
	   * @returns {String} The transformed name.
	   */
			cssStyleToDomStyle: function () {
				var test = document.createElement('div').style;
	
				var cssFloat = typeof test.cssFloat != 'undefined' ? 'cssFloat' : typeof test.styleFloat != 'undefined' ? 'styleFloat' : 'float';
	
				return function (cssName) {
					if (cssName == 'float') return cssFloat;else {
						return cssName.replace(/-./g, function (match) {
							return match.substr(1).toUpperCase();
						});
					}
				};
			}(),
	
			/**
	   * Builds a HTML snippet from a set of `<style>/<link>`.
	   *
	   * @param {String/Array} css Each of which are URLs (absolute) of a CSS file or
	   * a trunk of style text.
	   * @returns {String}
	   */
			buildStyleHtml: function (css) {
				css = [].concat(css);
				var item,
				    retval = [];
				for (var i = 0; i < css.length; i++) {
					if (item = css[i]) {
						// Is CSS style text ?
						if (/@import|[{}]/.test(item)) retval.push('<style>' + item + '</style>');else retval.push('<link type="text/css" rel=stylesheet href="' + item + '">');
					}
				}
				return retval.join('');
			},
	
			/**
	   * Replaces special HTML characters in a string with their relative HTML
	   * entity values.
	   *
	   *		alert( CKEDITOR.tools.htmlEncode( 'A > B & C < D' ) ); // 'A &gt; B &amp; C &lt; D'
	   *
	   * @param {String} text The string to be encoded.
	   * @returns {String} The encoded string.
	   */
			htmlEncode: function (text) {
				// Backwards compatibility - accept also non-string values (casting is done below).
				// Since 4.4.8 we return empty string for null and undefined because these values make no sense.
				if (text === undefined || text === null) {
					return '';
				}
	
				return String(text).replace(ampRegex, '&amp;').replace(gtRegex, '&gt;').replace(ltRegex, '&lt;');
			},
	
			/**
	   * Decodes HTML entities that browsers tend to encode when used in text nodes.
	   *
	   *		alert( CKEDITOR.tools.htmlDecode( '&lt;a &amp; b &gt;' ) ); // '<a & b >'
	   *
	   * Read more about chosen entities in the [research](http://dev.ckeditor.com/ticket/13105#comment:8).
	   *
	   * @param {String} The string to be decoded.
	   * @returns {String} The decoded string.
	   */
			htmlDecode: function (text) {
				// See:
				// * http://dev.ckeditor.com/ticket/13105#comment:8 and comment:9,
				// * http://jsperf.com/wth-is-going-on-with-jsperf JSPerf has some serious problems, but you can observe
				// that combined regexp tends to be quicker (except on V8). It will also not be prone to fail on '&amp;lt;'
				// (see http://dev.ckeditor.com/ticket/13105#DXWTF:CKEDITOR.tools.htmlEnDecodeAttr).
				return text.replace(allEscRegex, allEscDecode);
			},
	
			/**
	   * Replaces special HTML characters in HTMLElement attribute with their relative HTML entity values.
	   *
	   *		alert( CKEDITOR.tools.htmlEncodeAttr( '<a " b >' ) ); // '&lt;a &quot; b &gt;'
	   *
	   * @param {String} The attribute value to be encoded.
	   * @returns {String} The encoded value.
	   */
			htmlEncodeAttr: function (text) {
				return CKEDITOR.tools.htmlEncode(text).replace(quoteRegex, '&quot;');
			},
	
			/**
	   * Decodes HTML entities that browsers tend to encode when used in attributes.
	   *
	   *		alert( CKEDITOR.tools.htmlDecodeAttr( '&lt;a &quot; b&gt;' ) ); // '<a " b>'
	   *
	   * Since CKEditor 4.5 this method simply executes {@link #htmlDecode} which covers
	   * all necessary entities.
	   *
	   * @param {String} text The text to be decoded.
	   * @returns {String} The decoded text.
	   */
			htmlDecodeAttr: function (text) {
				return CKEDITOR.tools.htmlDecode(text);
			},
	
			/**
	   * Transforms text to valid HTML: creates paragraphs, replaces tabs with non-breaking spaces etc.
	   *
	   * @since 4.5
	   * @param {String} text Text to transform.
	   * @param {Number} enterMode Editor {@link CKEDITOR.config#enterMode Enter mode}.
	   * @returns {String} HTML generated from the text.
	   */
			transformPlainTextToHtml: function (text, enterMode) {
				var isEnterBrMode = enterMode == CKEDITOR.ENTER_BR,
	
				// CRLF -> LF
				html = this.htmlEncode(text.replace(/\r\n/g, '\n'));
	
				// Tab -> &nbsp x 4;
				html = html.replace(/\t/g, '&nbsp;&nbsp; &nbsp;');
	
				var paragraphTag = enterMode == CKEDITOR.ENTER_P ? 'p' : 'div';
	
				// Two line-breaks create one paragraphing block.
				if (!isEnterBrMode) {
					var duoLF = /\n{2}/g;
					if (duoLF.test(html)) {
						var openTag = '<' + paragraphTag + '>',
						    endTag = '</' + paragraphTag + '>';
						html = openTag + html.replace(duoLF, function () {
							return endTag + openTag;
						}) + endTag;
					}
				}
	
				// One <br> per line-break.
				html = html.replace(/\n/g, '<br>');
	
				// Compensate padding <br> at the end of block, avoid loosing them during insertion.
				if (!isEnterBrMode) {
					html = html.replace(new RegExp('<br>(?=</' + paragraphTag + '>)'), function (match) {
						return CKEDITOR.tools.repeat(match, 2);
					});
				}
	
				// Preserve spaces at the ends, so they won't be lost after insertion (merged with adjacent ones).
				html = html.replace(/^ | $/g, '&nbsp;');
	
				// Finally, preserve whitespaces that are to be lost.
				html = html.replace(/(>|\s) /g, function (match, before) {
					return before + '&nbsp;';
				}).replace(/ (?=<)/g, '&nbsp;');
	
				return html;
			},
	
			/**
	   * Gets a unique number for this CKEDITOR execution session. It returns
	   * consecutive numbers starting from 1.
	   *
	   *		alert( CKEDITOR.tools.getNextNumber() ); // (e.g.) 1
	   *		alert( CKEDITOR.tools.getNextNumber() ); // 2
	   *
	   * @method
	   * @returns {Number} A unique number.
	   */
			getNextNumber: function () {
				var last = 0;
				return function () {
					return ++last;
				};
			}(),
	
			/**
	   * Gets a unique ID for CKEditor interface elements. It returns a
	   * string with the "cke_" prefix and a consecutive number.
	   *
	   *		alert( CKEDITOR.tools.getNextId() ); // (e.g.) 'cke_1'
	   *		alert( CKEDITOR.tools.getNextId() ); // 'cke_2'
	   *
	   * @returns {String} A unique ID.
	   */
			getNextId: function () {
				return 'cke_' + this.getNextNumber();
			},
	
			/**
	   * Gets a universally unique ID. It returns a random string
	   * compliant with ISO/IEC 11578:1996, without dashes, with the "e" prefix to
	   * make sure that the ID does not start with a number.
	   *
	   * @returns {String} A global unique ID.
	   */
			getUniqueId: function () {
				var uuid = 'e'; // Make sure that id does not start with number.
				for (var i = 0; i < 8; i++) {
					uuid += Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
				}
				return uuid;
			},
	
			/**
	   * Creates a function override.
	   *
	   *		var obj = {
	   *			myFunction: function( name ) {
	   *				alert( 'Name: ' + name );
	   *			}
	   *		};
	   *
	   *		obj.myFunction = CKEDITOR.tools.override( obj.myFunction, function( myFunctionOriginal ) {
	   *			return function( name ) {
	   *				alert( 'Overriden name: ' + name );
	   *				myFunctionOriginal.call( this, name );
	   *			};
	   *		} );
	   *
	   * @param {Function} originalFunction The function to be overridden.
	   * @param {Function} functionBuilder A function that returns the new
	   * function. The original function reference will be passed to this function.
	   * @returns {Function} The new function.
	   */
			override: function (originalFunction, functionBuilder) {
				var newFn = functionBuilder(originalFunction);
				newFn.prototype = originalFunction.prototype;
				return newFn;
			},
	
			/**
	   * Executes a function after a specified delay.
	   *
	   *		CKEDITOR.tools.setTimeout( function() {
	   *			alert( 'Executed after 2 seconds' );
	   *		}, 2000 );
	   *
	   * @param {Function} func The function to be executed.
	   * @param {Number} [milliseconds=0] The amount of time (in milliseconds) to wait
	   * to fire the function execution.
	   * @param {Object} [scope=window] The object to store the function execution scope
	   * (the `this` object).
	   * @param {Object/Array} [args] A single object, or an array of objects, to
	   * pass as argument to the function.
	   * @param {Object} [ownerWindow=window] The window that will be used to set the
	   * timeout.
	   * @returns {Object} A value that can be used to cancel the function execution.
	   */
			setTimeout: function (func, milliseconds, scope, args, ownerWindow) {
				if (!ownerWindow) ownerWindow = window;
	
				if (!scope) scope = ownerWindow;
	
				return ownerWindow.setTimeout(function () {
					if (args) func.apply(scope, [].concat(args));else func.apply(scope);
				}, milliseconds || 0);
			},
	
			/**
	   * Removes spaces from the start and the end of a string. The following
	   * characters are removed: space, tab, line break, line feed.
	   *
	   *		alert( CKEDITOR.tools.trim( '  example ' ); // 'example'
	   *
	   * @method
	   * @param {String} str The text from which the spaces will be removed.
	   * @returns {String} The modified string without the boundary spaces.
	   */
			trim: function () {
				// We are not using \s because we don't want "non-breaking spaces" to be caught.
				var trimRegex = /(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g;
				return function (str) {
					return str.replace(trimRegex, '');
				};
			}(),
	
			/**
	   * Removes spaces from the start (left) of a string. The following
	   * characters are removed: space, tab, line break, line feed.
	   *
	   *		alert( CKEDITOR.tools.ltrim( '  example ' ); // 'example '
	   *
	   * @method
	   * @param {String} str The text from which the spaces will be removed.
	   * @returns {String} The modified string excluding the removed spaces.
	   */
			ltrim: function () {
				// We are not using \s because we don't want "non-breaking spaces" to be caught.
				var trimRegex = /^[ \t\n\r]+/g;
				return function (str) {
					return str.replace(trimRegex, '');
				};
			}(),
	
			/**
	   * Removes spaces from the end (right) of a string. The following
	   * characters are removed: space, tab, line break, line feed.
	   *
	   *		alert( CKEDITOR.tools.ltrim( '  example ' ); // '  example'
	   *
	   * @method
	   * @param {String} str The text from which spaces will be removed.
	   * @returns {String} The modified string excluding the removed spaces.
	   */
			rtrim: function () {
				// We are not using \s because we don't want "non-breaking spaces" to be caught.
				var trimRegex = /[ \t\n\r]+$/g;
				return function (str) {
					return str.replace(trimRegex, '');
				};
			}(),
	
			/**
	   * Returns the index of an element in an array.
	   *
	   *		var letters = [ 'a', 'b', 0, 'c', false ];
	   *		alert( CKEDITOR.tools.indexOf( letters, '0' ) );		// -1 because 0 !== '0'
	   *		alert( CKEDITOR.tools.indexOf( letters, false ) );		// 4 because 0 !== false
	   *
	   * @param {Array} array The array to be searched.
	   * @param {Object/Function} value The element to be found. This can be an
	   * evaluation function which receives a single parameter call for
	   * each entry in the array, returning `true` if the entry matches.
	   * @returns {Number} The (zero-based) index of the first entry that matches
	   * the entry, or `-1` if not found.
	   */
			indexOf: function (array, value) {
				if (typeof value == 'function') {
					for (var i = 0, len = array.length; i < len; i++) {
						if (value(array[i])) return i;
					}
				} else if (array.indexOf) return array.indexOf(value);else {
					for (i = 0, len = array.length; i < len; i++) {
						if (array[i] === value) return i;
					}
				}
				return -1;
			},
	
			/**
	   * Returns the index of an element in an array.
	   *
	   *		var obj = { prop: true };
	   *		var letters = [ 'a', 'b', 0, obj, false ];
	   *
	   *		alert( CKEDITOR.tools.indexOf( letters, '0' ) ); // null
	   *		alert( CKEDITOR.tools.indexOf( letters, function( value ) {
	   *			// Return true when passed value has property 'prop'.
	   *			return value && 'prop' in value;
	   *		} ) );											// obj
	   *
	   * @param {Array} array The array to be searched.
	   * @param {Object/Function} value The element to be found. Can be an
	   * evaluation function which receives a single parameter call for
	   * each entry in the array, returning `true` if the entry matches.
	   * @returns Object The value that was found in an array.
	   */
			search: function (array, value) {
				var index = CKEDITOR.tools.indexOf(array, value);
				return index >= 0 ? array[index] : null;
			},
	
			/**
	   * Creates a function that will always execute in the context of a
	   * specified object.
	   *
	   *		var obj = { text: 'My Object' };
	   *
	   *		function alertText() {
	   *			alert( this.text );
	   *		}
	   *
	   *		var newFunc = CKEDITOR.tools.bind( alertText, obj );
	   *		newFunc(); // Alerts 'My Object'.
	   *
	   * @param {Function} func The function to be executed.
	   * @param {Object} obj The object to which the execution context will be bound.
	   * @returns {Function} The function that can be used to execute the
	   * `func` function in the context of `obj`.
	   */
			bind: function (func, obj) {
				return function () {
					return func.apply(obj, arguments);
				};
			},
	
			/**
	   * Class creation based on prototype inheritance which supports of the
	   * following features:
	   *
	   * * Static fields
	   * * Private fields
	   * * Public (prototype) fields
	   * * Chainable base class constructor
	   *
	   * @param {Object} definition The class definition object.
	   * @returns {Function} A class-like JavaScript function.
	   */
			createClass: function (definition) {
				var $ = definition.$,
				    baseClass = definition.base,
				    privates = definition.privates || definition._,
				    proto = definition.proto,
				    statics = definition.statics;
	
				// Create the constructor, if not present in the definition.
				!$ && ($ = function () {
					baseClass && this.base.apply(this, arguments);
				});
	
				if (privates) {
					var originalConstructor = $;
					$ = function () {
						// Create (and get) the private namespace.
						var _ = this._ || (this._ = {});
	
						// Make some magic so "this" will refer to the main
						// instance when coding private functions.
						for (var privateName in privates) {
							var priv = privates[privateName];
	
							_[privateName] = typeof priv == 'function' ? CKEDITOR.tools.bind(priv, this) : priv;
						}
	
						originalConstructor.apply(this, arguments);
					};
				}
	
				if (baseClass) {
					$.prototype = this.prototypedCopy(baseClass.prototype);
					$.prototype.constructor = $;
					// Super references.
					$.base = baseClass;
					$.baseProto = baseClass.prototype;
					// Super constructor.
					$.prototype.base = function () {
						this.base = baseClass.prototype.base;
						baseClass.apply(this, arguments);
						this.base = arguments.callee;
					};
				}
	
				if (proto) this.extend($.prototype, proto, true);
	
				if (statics) this.extend($, statics, true);
	
				return $;
			},
	
			/**
	   * Creates a function reference that can be called later using
	   * {@link #callFunction}. This approach is especially useful to
	   * make DOM attribute function calls to JavaScript-defined functions.
	   *
	   *		var ref = CKEDITOR.tools.addFunction( function() {
	   *			alert( 'Hello!');
	   *		} );
	   *		CKEDITOR.tools.callFunction( ref ); // 'Hello!'
	   *
	   * @param {Function} fn The function to be executed on call.
	   * @param {Object} [scope] The object to have the context on `fn` execution.
	   * @returns {Number} A unique reference to be used in conjuction with
	   * {@link #callFunction}.
	   */
			addFunction: function (fn, scope) {
				return functions.push(function () {
					return fn.apply(scope || this, arguments);
				}) - 1;
			},
	
			/**
	   * Removes the function reference created with {@link #addFunction}.
	   *
	   * @param {Number} ref The function reference created with
	   * {@link #addFunction}.
	   */
			removeFunction: function (ref) {
				functions[ref] = null;
			},
	
			/**
	   * Executes a function based on the reference created with {@link #addFunction}.
	   *
	   *		var ref = CKEDITOR.tools.addFunction( function() {
	   *			alert( 'Hello!');
	   *		} );
	   *		CKEDITOR.tools.callFunction( ref ); // 'Hello!'
	   *
	   * @param {Number} ref The function reference created with {@link #addFunction}.
	   * @param {Mixed} params Any number of parameters to be passed to the executed function.
	   * @returns {Mixed} The return value of the function.
	   */
			callFunction: function (ref) {
				var fn = functions[ref];
				return fn && fn.apply(window, Array.prototype.slice.call(arguments, 1));
			},
	
			/**
	   * Appends the `px` length unit to the size value if it is missing.
	   *
	   *		var cssLength = CKEDITOR.tools.cssLength;
	   *		cssLength( 42 );		// '42px'
	   *		cssLength( '42' );		// '42px'
	   *		cssLength( '42px' );	// '42px'
	   *		cssLength( '42%' );		// '42%'
	   *		cssLength( 'bold' );	// 'bold'
	   *		cssLength( false );		// ''
	   *		cssLength( NaN );		// ''
	   *
	   * @method
	   * @param {Number/String/Boolean} length
	   */
			cssLength: function () {
				var pixelRegex = /^-?\d+\.?\d*px$/,
				    lengthTrimmed;
	
				return function (length) {
					lengthTrimmed = CKEDITOR.tools.trim(length + '') + 'px';
	
					if (pixelRegex.test(lengthTrimmed)) return lengthTrimmed;else return length || '';
				};
			}(),
	
			/**
	   * Converts the specified CSS length value to the calculated pixel length inside this page.
	   *
	   * **Note:** Percentage-based value is left intact.
	   *
	   * @method
	   * @param {String} cssLength CSS length value.
	   */
			convertToPx: function () {
				var calculator;
	
				return function (cssLength) {
					if (!calculator) {
						calculator = CKEDITOR.dom.element.createFromHtml('<div style="position:absolute;left:-9999px;' + 'top:-9999px;margin:0px;padding:0px;border:0px;"' + '></div>', CKEDITOR.document);
						CKEDITOR.document.getBody().append(calculator);
					}
	
					if (!/%$/.test(cssLength)) {
						calculator.setStyle('width', cssLength);
						return calculator.$.clientWidth;
					}
	
					return cssLength;
				};
			}(),
	
			/**
	   * String specified by `str` repeats `times` times.
	   *
	   * @param {String} str
	   * @param {Number} times
	   * @returns {String}
	   */
			repeat: function (str, times) {
				return new Array(times + 1).join(str);
			},
	
			/**
	   * Returns the first successfully executed return value of a function that
	   * does not throw any exception.
	   *
	   * @param {Function...} fn
	   * @returns {Mixed}
	   */
			tryThese: function () {
				var returnValue;
				for (var i = 0, length = arguments.length; i < length; i++) {
					var lambda = arguments[i];
					try {
						returnValue = lambda();
						break;
					} catch (e) {}
				}
				return returnValue;
			},
	
			/**
	   * Generates a combined key from a series of params.
	   *
	   *		var key = CKEDITOR.tools.genKey( 'key1', 'key2', 'key3' );
	   *		alert( key ); // 'key1-key2-key3'.
	   *
	   * @param {String} subKey One or more strings used as subkeys.
	   * @returns {String}
	   */
			genKey: function () {
				return Array.prototype.slice.call(arguments).join('-');
			},
	
			/**
	   * Creates a "deferred" function which will not run immediately,
	   * but rather runs as soon as the interpreter’s call stack is empty.
	   * Behaves much like `window.setTimeout` with a delay.
	   *
	   * **Note:** The return value of the original function will be lost.
	   *
	   * @param {Function} fn The callee function.
	   * @returns {Function} The new deferred function.
	   */
			defer: function (fn) {
				return function () {
					var args = arguments,
					    self = this;
					window.setTimeout(function () {
						fn.apply(self, args);
					}, 0);
				};
			},
	
			/**
	   * Normalizes CSS data in order to avoid differences in the style attribute.
	   *
	   * @param {String} styleText The style data to be normalized.
	   * @param {Boolean} [nativeNormalize=false] Parse the data using the browser.
	   * @returns {String} The normalized value.
	   */
			normalizeCssText: function (styleText, nativeNormalize) {
				var props = [],
				    name,
				    parsedProps = CKEDITOR.tools.parseCssText(styleText, true, nativeNormalize);
	
				for (name in parsedProps) props.push(name + ':' + parsedProps[name]);
	
				props.sort();
	
				return props.length ? props.join(';') + ';' : '';
			},
	
			/**
	   * Finds and converts `rgb(x,x,x)` color definition to hexadecimal notation.
	   *
	   * @param {String} styleText The style data (or just a string containing RGB colors) to be converted.
	   * @returns {String} The style data with RGB colors converted to hexadecimal equivalents.
	   */
			convertRgbToHex: function (styleText) {
				return styleText.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi, function (match, red, green, blue) {
					var color = [red, green, blue];
					// Add padding zeros if the hex value is less than 0x10.
					for (var i = 0; i < 3; i++) color[i] = ('0' + parseInt(color[i], 10).toString(16)).slice(-2);
					return '#' + color.join('');
				});
			},
	
			/**
	   * Normalizes hexadecimal notation so that the color string is always 6 characters long and lowercase.
	   *
	   * @param {String} styleText The style data (or just a string containing hex colors) to be converted.
	   * @returns {String} The style data with hex colors normalized.
	   */
			normalizeHex: function (styleText) {
				return styleText.replace(/#(([0-9a-f]{3}){1,2})($|;|\s+)/gi, function (match, hexColor, hexColorPart, separator) {
					var normalizedHexColor = hexColor.toLowerCase();
					if (normalizedHexColor.length == 3) {
						var parts = normalizedHexColor.split('');
						normalizedHexColor = [parts[0], parts[0], parts[1], parts[1], parts[2], parts[2]].join('');
					}
					return '#' + normalizedHexColor + separator;
				});
			},
	
			/**
	   * Turns inline style text properties into one hash.
	   *
	   * @param {String} styleText The style data to be parsed.
	   * @param {Boolean} [normalize=false] Normalize properties and values
	   * (e.g. trim spaces, convert to lower case).
	   * @param {Boolean} [nativeNormalize=false] Parse the data using the browser.
	   * @returns {Object} The object containing parsed properties.
	   */
			parseCssText: function (styleText, normalize, nativeNormalize) {
				var retval = {};
	
				if (nativeNormalize) {
					// Injects the style in a temporary span object, so the browser parses it,
					// retrieving its final format.
					var temp = new CKEDITOR.dom.element('span');
					styleText = temp.setAttribute('style', styleText).getAttribute('style') || '';
				}
	
				// Normalize colors.
				if (styleText) {
					styleText = CKEDITOR.tools.normalizeHex(CKEDITOR.tools.convertRgbToHex(styleText));
				}
	
				// IE will leave a single semicolon when failed to parse the style text. (#3891)
				if (!styleText || styleText == ';') return retval;
	
				styleText.replace(/&quot;/g, '"').replace(/\s*([^:;\s]+)\s*:\s*([^;]+)\s*(?=;|$)/g, function (match, name, value) {
					if (normalize) {
						name = name.toLowerCase();
						// Drop extra whitespacing from font-family.
						if (name == 'font-family') value = value.replace(/\s*,\s*/g, ',');
						value = CKEDITOR.tools.trim(value);
					}
	
					retval[name] = value;
				});
				return retval;
			},
	
			/**
	   * Serializes the `style name => value` hash to a style text.
	   *
	   *		var styleObj = CKEDITOR.tools.parseCssText( 'color: red; border: none' );
	   *		console.log( styleObj.color ); // -> 'red'
	   *		CKEDITOR.tools.writeCssText( styleObj ); // -> 'color:red; border:none'
	   *		CKEDITOR.tools.writeCssText( styleObj, true ); // -> 'border:none; color:red'
	   *
	   * @since 4.1
	   * @param {Object} styles The object contaning style properties.
	   * @param {Boolean} [sort] Whether to sort CSS properties.
	   * @returns {String} The serialized style text.
	   */
			writeCssText: function (styles, sort) {
				var name,
				    stylesArr = [];
	
				for (name in styles) stylesArr.push(name + ':' + styles[name]);
	
				if (sort) stylesArr.sort();
	
				return stylesArr.join('; ');
			},
	
			/**
	   * Compares two objects.
	   *
	   * **Note:** This method performs shallow, non-strict comparison.
	   *
	   * @since 4.1
	   * @param {Object} left
	   * @param {Object} right
	   * @param {Boolean} [onlyLeft] Check only the properties that are present in the `left` object.
	   * @returns {Boolean} Whether objects are identical.
	   */
			objectCompare: function (left, right, onlyLeft) {
				var name;
	
				if (!left && !right) return true;
				if (!left || !right) return false;
	
				for (name in left) {
					if (left[name] != right[name]) return false;
				}
	
				if (!onlyLeft) {
					for (name in right) {
						if (left[name] != right[name]) return false;
					}
				}
	
				return true;
			},
	
			/**
	   * Returns an array of passed object's keys.
	   *
	   *		console.log( CKEDITOR.tools.objectKeys( { foo: 1, bar: false } );
	   *		// -> [ 'foo', 'bar' ]
	   *
	   * @since 4.1
	   * @param {Object} obj
	   * @returns {Array} Object's keys.
	   */
			objectKeys: function (obj) {
				var keys = [];
				for (var i in obj) keys.push(i);
	
				return keys;
			},
	
			/**
	   * Converts an array to an object by rewriting array items
	   * to object properties.
	   *
	   *		var arr = [ 'foo', 'bar', 'foo' ];
	   *		console.log( CKEDITOR.tools.convertArrayToObject( arr ) );
	   *		// -> { foo: true, bar: true }
	   *		console.log( CKEDITOR.tools.convertArrayToObject( arr, 1 ) );
	   *		// -> { foo: 1, bar: 1 }
	   *
	   * @since 4.1
	   * @param {Array} arr The array to be converted to an object.
	   * @param [fillWith=true] Set each property of an object to `fillWith` value.
	   */
			convertArrayToObject: function (arr, fillWith) {
				var obj = {};
	
				if (arguments.length == 1) fillWith = true;
	
				for (var i = 0, l = arr.length; i < l; ++i) obj[arr[i]] = fillWith;
	
				return obj;
			},
	
			/**
	   * Tries to fix the `document.domain` of the current document to match the
	   * parent window domain, avoiding "Same Origin" policy issues.
	   * This is an Internet Explorer only requirement.
	   *
	   * @since 4.1.2
	   * @returns {Boolean} `true` if the current domain is already good or if
	   * it has been fixed successfully.
	   */
			fixDomain: function () {
				var domain;
	
				while (1) {
					try {
						// Try to access the parent document. It throws
						// "access denied" if restricted by the "Same Origin" policy.
						domain = window.parent.document.domain;
						break;
					} catch (e) {
						// Calculate the value to set to document.domain.
						domain = domain ?
	
						// If it is not the first pass, strip one part of the
						// name. E.g.  "test.example.com"  => "example.com"
						domain.replace(/.+?(?:\.|$)/, '') :
	
						// In the first pass, we'll handle the
						// "document.domain = document.domain" case.
						document.domain;
	
						// Stop here if there is no more domain parts available.
						if (!domain) break;
	
						document.domain = domain;
					}
				}
	
				return !!domain;
			},
	
			/**
	   * Buffers `input` events (or any `input` calls)
	   * and triggers `output` not more often than once per `minInterval`.
	   *
	   *		var buffer = CKEDITOR.tools.eventsBuffer( 200, function() {
	   *			console.log( 'foo!' );
	   *		} );
	   *
	   *		buffer.input();
	   *		// 'foo!' logged immediately.
	   *		buffer.input();
	   *		// Nothing logged.
	   *		buffer.input();
	   *		// Nothing logged.
	   *		// ... after 200ms a single 'foo!' will be logged.
	   *
	   * Can be easily used with events:
	   *
	   *		var buffer = CKEDITOR.tools.eventsBuffer( 200, function() {
	   *			console.log( 'foo!' );
	   *		} );
	   *
	   *		editor.on( 'key', buffer.input );
	   *		// Note: There is no need to bind buffer as a context.
	   *
	   * @since 4.2.1
	   * @param {Number} minInterval Minimum interval between `output` calls in milliseconds.
	   * @param {Function} output Function that will be executed as `output`.
	   * @param {Object} [scopeObj] The object used to scope the listener call (the `this` object).
	   * @returns {Object}
	   * @returns {Function} return.input Buffer's input method.
	   * @returns {Function} return.reset Resets buffered events &mdash; `output` will not be executed
	   * until next `input` is triggered.
	   */
			eventsBuffer: function (minInterval, output, scopeObj) {
				var scheduled,
				    lastOutput = 0;
	
				function triggerOutput() {
					lastOutput = new Date().getTime();
					scheduled = false;
					if (scopeObj) {
						output.call(scopeObj);
					} else {
						output();
					}
				}
	
				return {
					input: function () {
						if (scheduled) return;
	
						var diff = new Date().getTime() - lastOutput;
	
						// If less than minInterval passed after last check,
						// schedule next for minInterval after previous one.
						if (diff < minInterval) scheduled = setTimeout(triggerOutput, minInterval - diff);else triggerOutput();
					},
	
					reset: function () {
						if (scheduled) clearTimeout(scheduled);
	
						scheduled = lastOutput = 0;
					}
				};
			},
	
			/**
	   * Enables HTML5 elements for older browsers (IE8) in the passed document.
	   *
	   * In IE8 this method can also be executed on a document fragment.
	   *
	   * **Note:** This method has to be used in the `<head>` section of the document.
	   *
	   * @since 4.3
	   * @param {Object} doc Native `Document` or `DocumentFragment` in which the elements will be enabled.
	   * @param {Boolean} [withAppend] Whether to append created elements to the `doc`.
	   */
			enableHtml5Elements: function (doc, withAppend) {
				var els = 'abbr,article,aside,audio,bdi,canvas,data,datalist,details,figcaption,figure,footer,header,hgroup,main,mark,meter,nav,output,progress,section,summary,time,video'.split(','),
				    i = els.length,
				    el;
	
				while (i--) {
					el = doc.createElement(els[i]);
					if (withAppend) doc.appendChild(el);
				}
			},
	
			/**
	   * Checks if any of the `arr` items match the provided regular expression.
	   *
	   * @param {Array} arr The array whose items will be checked.
	   * @param {RegExp} regexp The regular expression.
	   * @returns {Boolean} Returns `true` for the first occurrence of the search pattern.
	   * @since 4.4
	   */
			checkIfAnyArrayItemMatches: function (arr, regexp) {
				for (var i = 0, l = arr.length; i < l; ++i) {
					if (arr[i].match(regexp)) return true;
				}
				return false;
			},
	
			/**
	   * Checks if any of the `obj` properties match the provided regular expression.
	   *
	   * @param obj The object whose properties will be checked.
	   * @param {RegExp} regexp The regular expression.
	   * @returns {Boolean} Returns `true` for the first occurrence of the search pattern.
	   * @since 4.4
	   */
			checkIfAnyObjectPropertyMatches: function (obj, regexp) {
				for (var i in obj) {
					if (i.match(regexp)) return true;
				}
				return false;
			},
	
			/**
	   * The data URI of a transparent image. May be used e.g. in HTML as an image source or in CSS in `url()`.
	   *
	   * @since 4.4
	   * @readonly
	   */
			transparentImageData: 'data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==',
	
			/**
	   * Returns the value of the cookie with a given name or `null` if the cookie is not found.
	   *
	   * @since 4.5.6
	   * @param {String} name
	   * @returns {String}
	   */
			getCookie: function (name) {
				name = name.toLowerCase();
				var parts = document.cookie.split(';');
				var pair, key;
	
				for (var i = 0; i < parts.length; i++) {
					pair = parts[i].split('=');
					key = decodeURIComponent(CKEDITOR.tools.trim(pair[0]).toLowerCase());
	
					if (key === name) {
						return decodeURIComponent(pair.length > 1 ? pair[1] : '');
					}
				}
	
				return null;
			},
	
			/**
	   * Sets the value of the cookie with a given name.
	   *
	   * @since 4.5.6
	   * @param {String} name
	   * @param {String} value
	   */
			setCookie: function (name, value) {
				document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';path=/';
			},
	
			/**
	   * Returns the CSRF token value. The value is a hash stored in `document.cookie`
	   * under the `ckCsrfToken` key. The CSRF token can be used to secure the communication
	   * between the web browser and the server, i.e. for the file upload feature in the editor.
	   *
	   * @since 4.5.6
	   * @returns {String}
	   */
			getCsrfToken: function () {
				var token = CKEDITOR.tools.getCookie(TOKEN_COOKIE_NAME);
	
				if (!token || token.length != TOKEN_LENGTH) {
					token = generateToken(TOKEN_LENGTH);
					CKEDITOR.tools.setCookie(TOKEN_COOKIE_NAME, token);
				}
	
				return token;
			},
	
			/**
	   * Returns an escaped CSS selector. `CSS.escape()` is used if defined, leading digit is escaped otherwise.
	   *
	   * @since 4.5.10
	   * @param {String} selector A CSS selector to escape.
	   * @returns {String} An escaped selector.
	   */
			escapeCss: function (selector) {
				// Invalid input.
				if (!selector) {
					return '';
				}
	
				// CSS.escape() can be used.
				if (window.CSS && CSS.escape) {
					return CSS.escape(selector);
				}
	
				// Simple leading digit escape.
				if (!isNaN(parseInt(selector.charAt(0), 10))) {
					return '\\3' + selector.charAt(0) + ' ' + selector.substring(1, selector.length);
				}
	
				return selector;
			}
		};
	
		// Generates a CSRF token with a given length.
		//
		// @since 4.5.6
		// @param {Number} length
		// @returns {string}
		function generateToken(length) {
			var randValues = [];
			var result = '';
	
			if (window.crypto && window.crypto.getRandomValues) {
				randValues = new Uint8Array(length);
				window.crypto.getRandomValues(randValues);
			} else {
				for (var i = 0; i < length; i++) {
					randValues.push(Math.floor(Math.random() * 256));
				}
			}
	
			for (var j = 0; j < randValues.length; j++) {
				var character = tokenCharset.charAt(randValues[j] % tokenCharset.length);
				result += Math.random() > 0.5 ? character.toUpperCase() : character;
			}
	
			return result;
		}
	})();
	
	// PACKAGER_RENAME( CKEDITOR.tools )

/***/ },
/* 10 */
/*!*********************!*\
  !*** ./core/dtd.js ***!
  \*********************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.dtd} object, which holds the DTD
	 *		mapping for XHTML 1.0 Transitional. This file was automatically
	 *		generated from the file: xhtml1-transitional.dtd.
	 */
	
	/**
	 * Holds and object representation of the HTML DTD to be used by the
	 * editor in its internal operations.
	 *
	 * Each element in the DTD is represented by a property in this object. Each
	 * property contains the list of elements that can be contained by the element.
	 * Text is represented by the `#` property.
	 *
	 * Several special grouping properties are also available. Their names start
	 * with the `$` character.
	 *
	 *		// Check if <div> can be contained in a <p> element.
	 *		alert( !!CKEDITOR.dtd[ 'p' ][ 'div' ] ); // false
	 *
	 *		// Check if <p> can be contained in a <div> element.
	 *		alert( !!CKEDITOR.dtd[ 'div' ][ 'p' ] ); // true
	 *
	 *		// Check if <p> is a block element.
	 *		alert( !!CKEDITOR.dtd.$block[ 'p' ] ); // true
	 *
	 * @class CKEDITOR.dtd
	 * @singleton
	 */
	CKEDITOR.dtd = function () {
		'use strict';
	
		var X = CKEDITOR.tools.extend,
	
		// Subtraction rest of sets, from the first set.
		Y = function (source, removed) {
			var substracted = CKEDITOR.tools.clone(source);
			for (var i = 1; i < arguments.length; i++) {
				removed = arguments[i];
				for (var name in removed) delete substracted[name];
			}
			return substracted;
		};
	
		// Phrasing elements.
		// P = { a: 1, em: 1, strong: 1, small: 1, abbr: 1, dfn: 1, i: 1, b: 1, s: 1,
		//		u: 1, code: 1, 'var': 1, samp: 1, kbd: 1, sup: 1, sub: 1, q: 1, cite: 1,
		//		span: 1, bdo: 1, bdi: 1, br: 1, wbr: 1, ins: 1, del: 1, img: 1, embed: 1,
		//		object: 1, iframe: 1, map: 1, area: 1, script: 1, noscript: 1, ruby: 1,
		//		video: 1, audio: 1, input: 1, textarea: 1, select: 1, button: 1, label: 1,
		//		output: 1, keygen: 1, progress: 1, command: 1, canvas: 1, time: 1,
		//		meter: 1, detalist: 1 },
	
		// Flow elements.
		// F = { a: 1, p: 1, hr: 1, pre: 1, ul: 1, ol: 1, dl: 1, div: 1, h1: 1, h2: 1,
		//		h3: 1, h4: 1, h5: 1, h6: 1, hgroup: 1, address: 1, blockquote: 1, ins: 1,
		//		del: 1, object: 1, map: 1, noscript: 1, section: 1, nav: 1, article: 1,
		//		aside: 1, header: 1, footer: 1, video: 1, audio: 1, figure: 1, table: 1,
		//		form: 1, fieldset: 1, menu: 1, canvas: 1, details:1 },
	
		// Text can be everywhere.
		// X( P, T );
		// Flow elements set consists of phrasing elements set.
		// X( F, P );
	
		var P = {},
		    F = {},
	
		// Intersection of flow elements set and phrasing elements set.
		PF = {
			a: 1, abbr: 1, area: 1, audio: 1, b: 1, bdi: 1, bdo: 1, br: 1, button: 1, canvas: 1, cite: 1,
			code: 1, command: 1, datalist: 1, del: 1, dfn: 1, em: 1, embed: 1, i: 1, iframe: 1, img: 1,
			input: 1, ins: 1, kbd: 1, keygen: 1, label: 1, map: 1, mark: 1, meter: 1, noscript: 1, object: 1,
			output: 1, progress: 1, q: 1, ruby: 1, s: 1, samp: 1, script: 1, select: 1, small: 1, span: 1,
			strong: 1, sub: 1, sup: 1, textarea: 1, time: 1, u: 1, 'var': 1, video: 1, wbr: 1
		},
	
		// F - PF (Flow Only).
		FO = {
			address: 1, article: 1, aside: 1, blockquote: 1, details: 1, div: 1, dl: 1, fieldset: 1,
			figure: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1,
			hr: 1, main: 1, menu: 1, nav: 1, ol: 1, p: 1, pre: 1, section: 1, table: 1, ul: 1
		},
	
		// Metadata elements.
		M = { command: 1, link: 1, meta: 1, noscript: 1, script: 1, style: 1 },
	
		// Empty.
		E = {},
	
		// Text.
		T = { '#': 1 },
	
	
		// Deprecated phrasing elements.
		DP = { acronym: 1, applet: 1, basefont: 1, big: 1, font: 1, isindex: 1, strike: 1, style: 1, tt: 1 },
		    // TODO remove "style".
		// Deprecated flow only elements.
		DFO = { center: 1, dir: 1, noframes: 1 };
	
		// Phrasing elements := PF + T + DP
		X(P, PF, T, DP);
		// Flow elements := FO + P + DFO
		X(F, FO, P, DFO);
	
		var dtd = {
			a: Y(P, { a: 1, button: 1 }), // Treat as normal inline element (not a transparent one).
			abbr: P,
			address: F,
			area: E,
			article: F,
			aside: F,
			audio: X({ source: 1, track: 1 }, F),
			b: P,
			base: E,
			bdi: P,
			bdo: P,
			blockquote: F,
			body: F,
			br: E,
			button: Y(P, { a: 1, button: 1 }),
			canvas: P, // Treat as normal inline element (not a transparent one).
			caption: F,
			cite: P,
			code: P,
			col: E,
			colgroup: { col: 1 },
			command: E,
			datalist: X({ option: 1 }, P),
			dd: F,
			del: P, // Treat as normal inline element (not a transparent one).
			details: X({ summary: 1 }, F),
			dfn: P,
			div: F,
			dl: { dt: 1, dd: 1 },
			dt: F,
			em: P,
			embed: E,
			fieldset: X({ legend: 1 }, F),
			figcaption: F,
			figure: X({ figcaption: 1 }, F),
			footer: F,
			form: F,
			h1: P,
			h2: P,
			h3: P,
			h4: P,
			h5: P,
			h6: P,
			head: X({ title: 1, base: 1 }, M),
			header: F,
			hgroup: { h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 },
			hr: E,
			html: X({ head: 1, body: 1 }, F, M), // Head and body are optional...
			i: P,
			iframe: T,
			img: E,
			input: E,
			ins: P, // Treat as normal inline element (not a transparent one).
			kbd: P,
			keygen: E,
			label: P,
			legend: P,
			li: F,
			link: E,
			// Can't be a descendant of article, aside, footer, header, nav, but we don't need this
			// complication. As well as checking if it's used only once.
			main: F,
			map: F,
			mark: P, // Treat as normal inline element (not a transparent one).
			menu: X({ li: 1 }, F),
			meta: E,
			meter: Y(P, { meter: 1 }),
			nav: F,
			noscript: X({ link: 1, meta: 1, style: 1 }, P), // Treat as normal inline element (not a transparent one).
			object: X({ param: 1 }, P), // Treat as normal inline element (not a transparent one).
			ol: { li: 1 },
			optgroup: { option: 1 },
			option: T,
			output: P,
			p: P,
			param: E,
			pre: P,
			progress: Y(P, { progress: 1 }),
			q: P,
			rp: P,
			rt: P,
			ruby: X({ rp: 1, rt: 1 }, P),
			s: P,
			samp: P,
			script: T,
			section: F,
			select: { optgroup: 1, option: 1 },
			small: P,
			source: E,
			span: P,
			strong: P,
			style: T,
			sub: P,
			summary: X({ h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 }, P),
			sup: P,
			table: { caption: 1, colgroup: 1, thead: 1, tfoot: 1, tbody: 1, tr: 1 },
			tbody: { tr: 1 },
			td: F,
			textarea: T,
			tfoot: { tr: 1 },
			th: F,
			thead: { tr: 1 },
			time: Y(P, { time: 1 }),
			title: T,
			tr: { th: 1, td: 1 },
			track: E,
			u: P,
			ul: { li: 1 },
			'var': P,
			video: X({ source: 1, track: 1 }, F),
			wbr: E,
	
			// Deprecated tags.
			acronym: P,
			applet: X({ param: 1 }, F),
			basefont: E,
			big: P,
			center: F,
			dialog: E,
			dir: { li: 1 },
			font: P,
			isindex: E,
			noframes: F,
			strike: P,
			tt: P
		};
	
		X(dtd, {
			/**
	   * List of block elements, like `<p>` or `<div>`.
	   */
			$block: X({ audio: 1, dd: 1, dt: 1, figcaption: 1, li: 1, video: 1 }, FO, DFO),
	
			/**
	   * List of elements that contain other blocks, in which block-level operations should be limited,
	   * this property is not intended to be checked directly, use {@link CKEDITOR.dom.elementPath#blockLimit} instead.
	   *
	   * Some examples of editor behaviors that are impacted by block limits:
	   *
	   * * Enter key never split a block-limit element;
	   * * Style application is constraint by the block limit of the current selection.
	   * * Pasted html will be inserted into the block limit of the current selection.
	   *
	   * **Note:** As an exception `<li>` is not considered as a block limit, as it's generally used as a text block.
	   */
			$blockLimit: {
				article: 1, aside: 1, audio: 1, body: 1, caption: 1, details: 1, dir: 1, div: 1, dl: 1,
				fieldset: 1, figcaption: 1, figure: 1, footer: 1, form: 1, header: 1, hgroup: 1, main: 1, menu: 1, nav: 1,
				ol: 1, section: 1, table: 1, td: 1, th: 1, tr: 1, ul: 1, video: 1
			},
	
			/**
	   * List of elements that contain character data.
	   */
			$cdata: { script: 1, style: 1 },
	
			/**
	   * List of elements that are accepted as inline editing hosts.
	   */
			$editable: {
				address: 1, article: 1, aside: 1, blockquote: 1, body: 1, details: 1, div: 1, fieldset: 1,
				figcaption: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1,
				main: 1, nav: 1, p: 1, pre: 1, section: 1
			},
	
			/**
	   * List of empty (self-closing) elements, like `<br>` or `<img>`.
	   */
			$empty: {
				area: 1, base: 1, basefont: 1, br: 1, col: 1, command: 1, dialog: 1, embed: 1, hr: 1, img: 1,
				input: 1, isindex: 1, keygen: 1, link: 1, meta: 1, param: 1, source: 1, track: 1, wbr: 1
			},
	
			/**
	   * List of inline (`<span>` like) elements.
	   */
			$inline: P,
	
			/**
	   * List of list root elements.
	   */
			$list: { dl: 1, ol: 1, ul: 1 },
	
			/**
	   * List of list item elements, like `<li>` or `<dd>`.
	   */
			$listItem: { dd: 1, dt: 1, li: 1 },
	
			/**
	   * List of elements which may live outside body.
	   */
			$nonBodyContent: X({ body: 1, head: 1, html: 1 }, dtd.head),
	
			/**
	   * Elements that accept text nodes, but are not possible to edit into the browser.
	   */
			$nonEditable: {
				applet: 1, audio: 1, button: 1, embed: 1, iframe: 1, map: 1, object: 1, option: 1,
				param: 1, script: 1, textarea: 1, video: 1
			},
	
			/**
	   * Elements that are considered objects, therefore selected as a whole in the editor.
	   */
			$object: {
				applet: 1, audio: 1, button: 1, hr: 1, iframe: 1, img: 1, input: 1, object: 1, select: 1,
				table: 1, textarea: 1, video: 1
			},
	
			/**
	   * List of elements that can be ignored if empty, like `<b>` or `<span>`.
	   */
			$removeEmpty: {
				abbr: 1, acronym: 1, b: 1, bdi: 1, bdo: 1, big: 1, cite: 1, code: 1, del: 1, dfn: 1,
				em: 1, font: 1, i: 1, ins: 1, label: 1, kbd: 1, mark: 1, meter: 1, output: 1, q: 1, ruby: 1, s: 1,
				samp: 1, small: 1, span: 1, strike: 1, strong: 1, sub: 1, sup: 1, time: 1, tt: 1, u: 1, 'var': 1
			},
	
			/**
	   * List of elements that have tabindex set to zero by default.
	   */
			$tabIndex: { a: 1, area: 1, button: 1, input: 1, object: 1, select: 1, textarea: 1 },
	
			/**
	   * List of elements used inside the `<table>` element, like `<tbody>` or `<td>`.
	   */
			$tableContent: { caption: 1, col: 1, colgroup: 1, tbody: 1, td: 1, tfoot: 1, th: 1, thead: 1, tr: 1 },
	
			/**
	   * List of "transparent" elements. See [W3C's definition of "transparent" element](http://dev.w3.org/html5/markup/terminology.html#transparent).
	   */
			$transparent: { a: 1, audio: 1, canvas: 1, del: 1, ins: 1, map: 1, noscript: 1, object: 1, video: 1 },
	
			/**
	   * List of elements that are not to exist standalone that must live under it's parent element.
	   */
			$intermediate: {
				caption: 1, colgroup: 1, dd: 1, dt: 1, figcaption: 1, legend: 1, li: 1, optgroup: 1,
				option: 1, rp: 1, rt: 1, summary: 1, tbody: 1, td: 1, tfoot: 1, th: 1, thead: 1, tr: 1
			}
		});
	
		return dtd;
	}();
	
	// PACKAGER_RENAME( CKEDITOR.dtd )

/***/ },
/* 11 */
/*!***************************!*\
  !*** ./core/dom/event.js ***!
  \***************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.dom.event} class, which
	 *		represents the a native DOM event object.
	 */
	
	/**
	 * Represents a native DOM event object.
	 *
	 * @class
	 * @constructor Creates an event class instance.
	 * @param {Object} domEvent A native DOM event object.
	 */
	CKEDITOR.dom.event = function (domEvent) {
		/**
	  * The native DOM event object represented by this class instance.
	  *
	  * @readonly
	  */
		this.$ = domEvent;
	};
	
	CKEDITOR.dom.event.prototype = {
		/**
	  * Gets the key code associated to the event.
	  *
	  *		alert( event.getKey() ); // '65' is 'a' has been pressed
	  *
	  * @returns {Number} The key code.
	  */
		getKey: function () {
			return this.$.keyCode || this.$.which;
		},
	
		/**
	  * Gets a number represeting the combination of the keys pressed during the
	  * event. It is the sum with the current key code and the {@link CKEDITOR#CTRL},
	  * {@link CKEDITOR#SHIFT} and {@link CKEDITOR#ALT} constants.
	  *
	  *		alert( event.getKeystroke() == 65 );									// 'a' key
	  *		alert( event.getKeystroke() == CKEDITOR.CTRL + 65 );					// CTRL + 'a' key
	  *		alert( event.getKeystroke() == CKEDITOR.CTRL + CKEDITOR.SHIFT + 65 );	// CTRL + SHIFT + 'a' key
	  *
	  * @returns {Number} The number representing the keys combination.
	  */
		getKeystroke: function () {
			var keystroke = this.getKey();
	
			if (this.$.ctrlKey || this.$.metaKey) keystroke += CKEDITOR.CTRL;
	
			if (this.$.shiftKey) keystroke += CKEDITOR.SHIFT;
	
			if (this.$.altKey) keystroke += CKEDITOR.ALT;
	
			return keystroke;
		},
	
		/**
	  * Prevents the original behavior of the event to happen. It can optionally
	  * stop propagating the event in the event chain.
	  *
	  *		var element = CKEDITOR.document.getById( 'myElement' );
	  *		element.on( 'click', function( ev ) {
	  *			// The DOM event object is passed by the 'data' property.
	  *			var domEvent = ev.data;
	  *			// Prevent the click to chave any effect in the element.
	  *			domEvent.preventDefault();
	  *		} );
	  *
	  * @param {Boolean} [stopPropagation=false] Stop propagating this event in the
	  * event chain.
	  */
		preventDefault: function (stopPropagation) {
			var $ = this.$;
			if ($.preventDefault) $.preventDefault();else $.returnValue = false;
	
			if (stopPropagation) this.stopPropagation();
		},
	
		/**
	  * Stops this event propagation in the event chain.
	  */
		stopPropagation: function () {
			var $ = this.$;
			if ($.stopPropagation) $.stopPropagation();else $.cancelBubble = true;
		},
	
		/**
	  * Returns the DOM node where the event was targeted to.
	  *
	  *		var element = CKEDITOR.document.getById( 'myElement' );
	  *		element.on( 'click', function( ev ) {
	  *			// The DOM event object is passed by the 'data' property.
	  *			var domEvent = ev.data;
	  *			// Add a CSS class to the event target.
	  *			domEvent.getTarget().addClass( 'clicked' );
	  *		} );
	  *
	  * @returns {CKEDITOR.dom.node} The target DOM node.
	  */
		getTarget: function () {
			var rawNode = this.$.target || this.$.srcElement;
			return rawNode ? new CKEDITOR.dom.node(rawNode) : null;
		},
	
		/**
	  * Returns an integer value that indicates the current processing phase of an event.
	  * For browsers that doesn't support event phase, {@link CKEDITOR#EVENT_PHASE_AT_TARGET} is always returned.
	  *
	  * @returns {Number} One of {@link CKEDITOR#EVENT_PHASE_CAPTURING},
	  * {@link CKEDITOR#EVENT_PHASE_AT_TARGET}, or {@link CKEDITOR#EVENT_PHASE_BUBBLING}.
	  */
		getPhase: function () {
			return this.$.eventPhase || 2;
		},
	
		/**
	  * Retrieves the coordinates of the mouse pointer relative to the top-left
	  * corner of the document, in mouse related event.
	  *
	  *		element.on( 'mousemouse', function( ev ) {
	  *			var pageOffset = ev.data.getPageOffset();
	  *			alert( pageOffset.x );			// page offset X
	  *			alert( pageOffset.y );			// page offset Y
	  *     } );
	  *
	  * @returns {Object} The object contains the position.
	  * @returns {Number} return.x
	  * @returns {Number} return.y
	  */
		getPageOffset: function () {
			var doc = this.getTarget().getDocument().$;
			var pageX = this.$.pageX || this.$.clientX + (doc.documentElement.scrollLeft || doc.body.scrollLeft);
			var pageY = this.$.pageY || this.$.clientY + (doc.documentElement.scrollTop || doc.body.scrollTop);
			return { x: pageX, y: pageY };
		}
	};
	
	// For the followind constants, we need to go over the Unicode boundaries
	// (0x10FFFF) to avoid collision.
	
	/**
	 * CTRL key (0x110000).
	 *
	 * @readonly
	 * @property {Number} [=0x110000]
	 * @member CKEDITOR
	 */
	CKEDITOR.CTRL = 0x110000;
	
	/**
	 * SHIFT key (0x220000).
	 *
	 * @readonly
	 * @property {Number} [=0x220000]
	 * @member CKEDITOR
	 */
	CKEDITOR.SHIFT = 0x220000;
	
	/**
	 * ALT key (0x440000).
	 *
	 * @readonly
	 * @property {Number} [=0x440000]
	 * @member CKEDITOR
	 */
	CKEDITOR.ALT = 0x440000;
	
	/**
	 * Capturing phase.
	 *
	 * @readonly
	 * @property {Number} [=1]
	 * @member CKEDITOR
	 */
	CKEDITOR.EVENT_PHASE_CAPTURING = 1;
	
	/**
	 * Event at target.
	 *
	 * @readonly
	 * @property {Number} [=2]
	 * @member CKEDITOR
	 */
	CKEDITOR.EVENT_PHASE_AT_TARGET = 2;
	
	/**
	 * Bubbling phase.
	 *
	 * @readonly
	 * @property {Number} [=3]
	 * @member CKEDITOR
	 */
	CKEDITOR.EVENT_PHASE_BUBBLING = 3;

/***/ },
/* 12 */
/*!*******************************!*\
  !*** ./core/dom/domobject.js ***!
  \*******************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.editor} class, which is the base
	 *		for other classes representing DOM objects.
	 */
	
	/**
	 * Represents a DOM object. This class is not intended to be used directly. It
	 * serves as the base class for other classes representing specific DOM
	 * objects.
	 *
	 * @class
	 * @mixins CKEDITOR.event
	 * @constructor Creates a domObject class instance.
	 * @param {Object} nativeDomObject A native DOM object.
	 */
	CKEDITOR.dom.domObject = function (nativeDomObject) {
		if (nativeDomObject) {
			/**
	   * The native DOM object represented by this class instance.
	   *
	   *		var element = new CKEDITOR.dom.element( 'span' );
	   *		alert( element.$.nodeType ); // '1'
	   *
	   * @readonly
	   * @property {Object}
	   */
			this.$ = nativeDomObject;
		}
	};
	
	CKEDITOR.dom.domObject.prototype = function () {
		// Do not define other local variables here. We want to keep the native
		// listener closures as clean as possible.
	
		var getNativeListener = function (domObject, eventName) {
			return function (domEvent) {
				// In FF, when reloading the page with the editor focused, it may
				// throw an error because the CKEDITOR global is not anymore
				// available. So, we check it here first. (#2923)
				if (typeof CKEDITOR != 'undefined') domObject.fire(eventName, new CKEDITOR.dom.event(domEvent));
			};
		};
	
		return {
	
			/**
	   * Gets the private `_` object which is bound to the native
	   * DOM object using {@link #getCustomData}.
	   *
	   *		var elementA = new CKEDITOR.dom.element( nativeElement );
	   *		elementA.getPrivate().value = 1;
	   *		...
	   *		var elementB = new CKEDITOR.dom.element( nativeElement );
	   *		elementB.getPrivate().value; // 1
	   *
	   * @returns {Object} The private object.
	   */
			getPrivate: function () {
				var priv;
	
				// Get the main private object from the custom data. Create it if not defined.
				if (!(priv = this.getCustomData('_'))) this.setCustomData('_', priv = {});
	
				return priv;
			},
	
			// Docs inherited from event.
			on: function (eventName) {
				// We customize the "on" function here. The basic idea is that we'll have
				// only one listener for a native event, which will then call all listeners
				// set to the event.
	
				// Get the listeners holder object.
				var nativeListeners = this.getCustomData('_cke_nativeListeners');
	
				if (!nativeListeners) {
					nativeListeners = {};
					this.setCustomData('_cke_nativeListeners', nativeListeners);
				}
	
				// Check if we have a listener for that event.
				if (!nativeListeners[eventName]) {
					var listener = nativeListeners[eventName] = getNativeListener(this, eventName);
	
					if (this.$.addEventListener) this.$.addEventListener(eventName, listener, !!CKEDITOR.event.useCapture);else if (this.$.attachEvent) this.$.attachEvent('on' + eventName, listener);
				}
	
				// Call the original implementation.
				return CKEDITOR.event.prototype.on.apply(this, arguments);
			},
	
			// Docs inherited from event.
			removeListener: function (eventName) {
				// Call the original implementation.
				CKEDITOR.event.prototype.removeListener.apply(this, arguments);
	
				// If we don't have listeners for this event, clean the DOM up.
				if (!this.hasListeners(eventName)) {
					var nativeListeners = this.getCustomData('_cke_nativeListeners');
					var listener = nativeListeners && nativeListeners[eventName];
					if (listener) {
						if (this.$.removeEventListener) this.$.removeEventListener(eventName, listener, false);else if (this.$.detachEvent) this.$.detachEvent('on' + eventName, listener);
	
						delete nativeListeners[eventName];
					}
				}
			},
	
			/**
	   * Removes any listener set on this object.
	   *
	   * To avoid memory leaks we must assure that there are no
	   * references left after the object is no longer needed.
	   */
			removeAllListeners: function () {
				var nativeListeners = this.getCustomData('_cke_nativeListeners');
				for (var eventName in nativeListeners) {
					var listener = nativeListeners[eventName];
					if (this.$.detachEvent) this.$.detachEvent('on' + eventName, listener);else if (this.$.removeEventListener) this.$.removeEventListener(eventName, listener, false);
	
					delete nativeListeners[eventName];
				}
	
				// Remove events from events object so fire() method will not call
				// listeners (#11400).
				CKEDITOR.event.prototype.removeAllListeners.call(this);
			}
		};
	}();
	
	(function (domObjectProto) {
		var customData = {};
	
		CKEDITOR.on('reset', function () {
			customData = {};
		});
	
		/**
	  * Determines whether the specified object is equal to the current object.
	  *
	  *		var doc = new CKEDITOR.dom.document( document );
	  *		alert( doc.equals( CKEDITOR.document ) );	// true
	  *		alert( doc == CKEDITOR.document );			// false
	  *
	  * @param {Object} object The object to compare with the current object.
	  * @returns {Boolean} `true` if the object is equal.
	  */
		domObjectProto.equals = function (object) {
			// Try/Catch to avoid IE permission error when object is from different document.
			try {
				return object && object.$ === this.$;
			} catch (er) {
				return false;
			}
		};
	
		/**
	  * Sets a data slot value for this object. These values are shared by all
	  * instances pointing to that same DOM object.
	  *
	  * **Note:** The created data slot is only guaranteed to be available on this unique DOM node,
	  * thus any wish to continue access to it from other element clones (either created by
	  * clone node or from `innerHtml`) will fail. For such usage please use
	  * {@link CKEDITOR.dom.element#setAttribute} instead.
	  *
	  * **Note**: This method does not work on text nodes prior to Internet Explorer 9.
	  *
	  *		var element = new CKEDITOR.dom.element( 'span' );
	  *		element.setCustomData( 'hasCustomData', true );
	  *
	  * @param {String} key A key used to identify the data slot.
	  * @param {Object} value The value to set to the data slot.
	  * @returns {CKEDITOR.dom.domObject} This DOM object instance.
	  * @chainable
	  */
		domObjectProto.setCustomData = function (key, value) {
			var expandoNumber = this.getUniqueId(),
			    dataSlot = customData[expandoNumber] || (customData[expandoNumber] = {});
	
			dataSlot[key] = value;
	
			return this;
		};
	
		/**
	  * Gets the value set to a data slot in this object.
	  *
	  *		var element = new CKEDITOR.dom.element( 'span' );
	  *		alert( element.getCustomData( 'hasCustomData' ) );		// e.g. 'true'
	  *		alert( element.getCustomData( 'nonExistingKey' ) );		// null
	  *
	  * @param {String} key The key used to identify the data slot.
	  * @returns {Object} This value set to the data slot.
	  */
		domObjectProto.getCustomData = function (key) {
			var expandoNumber = this.$['data-cke-expando'],
			    dataSlot = expandoNumber && customData[expandoNumber];
	
			return dataSlot && key in dataSlot ? dataSlot[key] : null;
		};
	
		/**
	  * Removes the value in the data slot under the given `key`.
	  *
	  * @param {String} key
	  * @returns {Object} Removed value or `null` if not found.
	  */
		domObjectProto.removeCustomData = function (key) {
			var expandoNumber = this.$['data-cke-expando'],
			    dataSlot = expandoNumber && customData[expandoNumber],
			    retval,
			    hadKey;
	
			if (dataSlot) {
				retval = dataSlot[key];
				hadKey = key in dataSlot;
				delete dataSlot[key];
			}
	
			return hadKey ? retval : null;
		};
	
		/**
	  * Removes any data stored in this object.
	  * To avoid memory leaks we must assure that there are no
	  * references left after the object is no longer needed.
	  */
		domObjectProto.clearCustomData = function () {
			// Clear all event listeners
			this.removeAllListeners();
	
			var expandoNumber = this.$['data-cke-expando'];
			expandoNumber && delete customData[expandoNumber];
		};
	
		/**
	  * Gets an ID that can be used to identify this DOM object in
	  * the running session.
	  *
	  * **Note**: This method does not work on text nodes prior to Internet Explorer 9.
	  *
	  * @returns {Number} A unique ID.
	  */
		domObjectProto.getUniqueId = function () {
			return this.$['data-cke-expando'] || (this.$['data-cke-expando'] = CKEDITOR.tools.getNextNumber());
		};
	
		// Implement CKEDITOR.event.
		CKEDITOR.event.implementOn(domObjectProto);
	})(CKEDITOR.dom.domObject.prototype);

/***/ },
/* 13 */
/*!**************************!*\
  !*** ./core/dom/node.js ***!
  \**************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.dom.node} class which is the base
	 *		class for classes that represent DOM nodes.
	 */
	
	/**
	 * Base class for classes representing DOM nodes. This constructor may return
	 * an instance of a class that inherits from this class, like
	 * {@link CKEDITOR.dom.element} or {@link CKEDITOR.dom.text}.
	 *
	 * @class
	 * @extends CKEDITOR.dom.domObject
	 * @constructor Creates a node class instance.
	 * @param {Object} domNode A native DOM node.
	 * @see CKEDITOR.dom.element
	 * @see CKEDITOR.dom.text
	 */
	CKEDITOR.dom.node = function (domNode) {
		if (domNode) {
			var type = domNode.nodeType == CKEDITOR.NODE_DOCUMENT ? 'document' : domNode.nodeType == CKEDITOR.NODE_ELEMENT ? 'element' : domNode.nodeType == CKEDITOR.NODE_TEXT ? 'text' : domNode.nodeType == CKEDITOR.NODE_COMMENT ? 'comment' : domNode.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT ? 'documentFragment' : 'domObject'; // Call the base constructor otherwise.
	
			return new CKEDITOR.dom[type](domNode);
		}
	
		return this;
	};
	
	CKEDITOR.dom.node.prototype = new CKEDITOR.dom.domObject();
	
	/**
	 * Element node type.
	 *
	 * @readonly
	 * @property {Number} [=1]
	 * @member CKEDITOR
	 */
	CKEDITOR.NODE_ELEMENT = 1;
	
	/**
	 * Document node type.
	 *
	 * @readonly
	 * @property {Number} [=9]
	 * @member CKEDITOR
	 */
	CKEDITOR.NODE_DOCUMENT = 9;
	
	/**
	 * Text node type.
	 *
	 * @readonly
	 * @property {Number} [=3]
	 * @member CKEDITOR
	 */
	CKEDITOR.NODE_TEXT = 3;
	
	/**
	 * Comment node type.
	 *
	 * @readonly
	 * @property {Number} [=8]
	 * @member CKEDITOR
	 */
	CKEDITOR.NODE_COMMENT = 8;
	
	/**
	 * Document fragment node type.
	 *
	 * @readonly
	 * @property {Number} [=11]
	 * @member CKEDITOR
	 */
	CKEDITOR.NODE_DOCUMENT_FRAGMENT = 11;
	
	/**
	 * Indicates that positions of both nodes are identical (this is the same node). See {@link CKEDITOR.dom.node#getPosition}.
	 *
	 * @readonly
	 * @property {Number} [=0]
	 * @member CKEDITOR
	 */
	CKEDITOR.POSITION_IDENTICAL = 0;
	
	/**
	 * Indicates that nodes are in different (detached) trees. See {@link CKEDITOR.dom.node#getPosition}.
	 *
	 * @readonly
	 * @property {Number} [=1]
	 * @member CKEDITOR
	 */
	CKEDITOR.POSITION_DISCONNECTED = 1;
	
	/**
	 * Indicates that the context node follows the other node. See {@link CKEDITOR.dom.node#getPosition}.
	 *
	 * @readonly
	 * @property {Number} [=2]
	 * @member CKEDITOR
	 */
	CKEDITOR.POSITION_FOLLOWING = 2;
	
	/**
	 * Indicates that the context node precedes the other node. See {@link CKEDITOR.dom.node#getPosition}.
	 *
	 * @readonly
	 * @property {Number} [=4]
	 * @member CKEDITOR
	 */
	CKEDITOR.POSITION_PRECEDING = 4;
	
	/**
	 * Indicates that the context node is a descendant of the other node. See {@link CKEDITOR.dom.node#getPosition}.
	 *
	 * @readonly
	 * @property {Number} [=8]
	 * @member CKEDITOR
	 */
	CKEDITOR.POSITION_IS_CONTAINED = 8;
	
	/**
	 * Indicates that the context node contains the other node. See {@link CKEDITOR.dom.node#getPosition}.
	 *
	 * @readonly
	 * @property {Number} [=16]
	 * @member CKEDITOR
	 */
	CKEDITOR.POSITION_CONTAINS = 16;
	
	CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype, {
		/**
	  * Makes this node a child of another element.
	  *
	  *		var p = new CKEDITOR.dom.element( 'p' );
	  *		var strong = new CKEDITOR.dom.element( 'strong' );
	  *		strong.appendTo( p );
	  *
	  *		// Result: '<p><strong></strong></p>'.
	  *
	  * @param {CKEDITOR.dom.element} element The target element to which this node will be appended.
	  * @returns {CKEDITOR.dom.element} The target element.
	  */
		appendTo: function (element, toStart) {
			element.append(this, toStart);
			return element;
		},
	
		/**
	  * Clones this node.
	  *
	  * **Note**: Values set by {#setCustomData} will not be available in the clone.
	  *
	  * @param {Boolean} [includeChildren=false] If `true` then all node's
	  * children will be cloned recursively.
	  * @param {Boolean} [cloneId=false] Whether ID attributes should be cloned, too.
	  * @returns {CKEDITOR.dom.node} Clone of this node.
	  */
		clone: function (includeChildren, cloneId) {
			var $clone = this.$.cloneNode(includeChildren);
	
			// The "id" attribute should never be cloned to avoid duplication.
			removeIds($clone);
	
			var node = new CKEDITOR.dom.node($clone);
	
			// On IE8 we need to fixed HTML5 node name, see details below.
			if (CKEDITOR.env.ie && CKEDITOR.env.version < 9 && (this.type == CKEDITOR.NODE_ELEMENT || this.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT)) {
				renameNodes(node);
			}
	
			return node;
	
			function removeIds(node) {
				// Reset data-cke-expando only when has been cloned (IE and only for some types of objects).
				if (node['data-cke-expando']) node['data-cke-expando'] = false;
	
				if (node.nodeType != CKEDITOR.NODE_ELEMENT && node.nodeType != CKEDITOR.NODE_DOCUMENT_FRAGMENT) return;
	
				if (!cloneId && node.nodeType == CKEDITOR.NODE_ELEMENT) node.removeAttribute('id', false);
	
				if (includeChildren) {
					var childs = node.childNodes;
					for (var i = 0; i < childs.length; i++) removeIds(childs[i]);
				}
			}
	
			// IE8 rename HTML5 nodes by adding `:` at the begging of the tag name when the node is cloned,
			// so `<figure>` will be `<:figure>` after 'cloneNode'. We need to fix it (#13101).
			function renameNodes(node) {
				if (node.type != CKEDITOR.NODE_ELEMENT && node.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) return;
	
				if (node.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) {
					var name = node.getName();
					if (name[0] == ':') {
						node.renameNode(name.substring(1));
					}
				}
	
				if (includeChildren) {
					for (var i = 0; i < node.getChildCount(); i++) renameNodes(node.getChild(i));
				}
			}
		},
	
		/**
	  * Checks if the node is preceded by any sibling.
	  *
	  * @returns {Boolean}
	  */
		hasPrevious: function () {
			return !!this.$.previousSibling;
		},
	
		/**
	  * Checks if the node is succeeded by any sibling.
	  *
	  * @returns {Boolean}
	  */
		hasNext: function () {
			return !!this.$.nextSibling;
		},
	
		/**
	  * Inserts this element after a node.
	  *
	  *		var em = new CKEDITOR.dom.element( 'em' );
	  *		var strong = new CKEDITOR.dom.element( 'strong' );
	  *		strong.insertAfter( em );
	  *
	  *		// Result: '<em></em><strong></strong>'
	  *
	  * @param {CKEDITOR.dom.node} node The node that will precede this element.
	  * @returns {CKEDITOR.dom.node} The node preceding this one after insertion.
	  */
		insertAfter: function (node) {
			node.$.parentNode.insertBefore(this.$, node.$.nextSibling);
			return node;
		},
	
		/**
	  * Inserts this element before a node.
	  *
	  *		var em = new CKEDITOR.dom.element( 'em' );
	  *		var strong = new CKEDITOR.dom.element( 'strong' );
	  *		strong.insertBefore( em );
	  *
	  *		// result: '<strong></strong><em></em>'
	  *
	  * @param {CKEDITOR.dom.node} node The node that will succeed this element.
	  * @returns {CKEDITOR.dom.node} The node being inserted.
	  */
		insertBefore: function (node) {
			node.$.parentNode.insertBefore(this.$, node.$);
			return node;
		},
	
		/**
	  * Inserts a node before this node.
	  *
	  *		var em = new CKEDITOR.dom.element( 'em' );
	  *		var strong = new CKEDITOR.dom.element( 'strong' );
	  *		strong.insertBeforeMe( em );
	  *
	  *		// result: '<em></em><strong></strong>'
	  *
	  * @param {CKEDITOR.dom.node} node The node that will preceed this element.
	  * @returns {CKEDITOR.dom.node} The node being inserted.
	  */
		insertBeforeMe: function (node) {
			this.$.parentNode.insertBefore(node.$, this.$);
			return node;
		},
	
		/**
	  * Retrieves a uniquely identifiable tree address for this node.
	  * The tree address returned is an array of integers, with each integer
	  * indicating a child index of a DOM node, starting from
	  * `document.documentElement`.
	  *
	  * For example, assuming `<body>` is the second child
	  * of `<html>` (`<head>` being the first),
	  * and we would like to address the third child under the
	  * fourth child of `<body>`, the tree address returned would be:
	  * `[1, 3, 2]`.
	  *
	  * The tree address cannot be used for finding back the DOM tree node once
	  * the DOM tree structure has been modified.
	  *
	  * @param {Boolean} [normalized=false] See {@link #getIndex}.
	  * @returns {Array} The address.
	  */
		getAddress: function (normalized) {
			var address = [];
			var $documentElement = this.getDocument().$.documentElement;
			var node = this.$;
	
			while (node && node != $documentElement) {
				var parentNode = node.parentNode;
	
				if (parentNode) {
					// Get the node index. For performance, call getIndex
					// directly, instead of creating a new node object.
					address.unshift(this.getIndex.call({ $: node }, normalized));
				}
	
				node = parentNode;
			}
	
			return address;
		},
	
		/**
	  * Gets the document containing this element.
	  *
	  *		var element = CKEDITOR.document.getById( 'example' );
	  *		alert( element.getDocument().equals( CKEDITOR.document ) ); // true
	  *
	  * @returns {CKEDITOR.dom.document} The document.
	  */
		getDocument: function () {
			return new CKEDITOR.dom.document(this.$.ownerDocument || this.$.parentNode.ownerDocument);
		},
	
		/**
	  * Gets the index of a node in an array of its `parent.childNodes`.
	  * Returns `-1` if a node does not have a parent or when the `normalized` argument is set to `true`
	  * and the text node is empty and will be removed during the normalization.
	  *
	  * Let us assume having the following `childNodes` array:
	  *
	  *		[ emptyText, element1, text, text, element2, emptyText2 ]
	  *
	  *		emptyText.getIndex()			// 0
	  *		emptyText.getIndex( true )		// -1
	  *		element1.getIndex();			// 1
	  *		element1.getIndex( true );		// 0
	  *		element2.getIndex();			// 4
	  *		element2.getIndex( true );		// 2
	  *		emptyText2.getIndex();			// 5
	  *		emptyText2.getIndex( true );	// -1
	  *
	  * @param {Boolean} normalized When `true`, adjacent text nodes are merged and empty text nodes are removed.
	  * @returns {Number} Index of a node or `-1` if a node does not have a parent or is removed during the normalization.
	  */
		getIndex: function (normalized) {
			// Attention: getAddress depends on this.$
			// getIndex is called on a plain object: { $ : node }
	
			var current = this.$,
			    index = -1,
			    isNormalizing;
	
			if (!this.$.parentNode) return -1;
	
			// The idea is - all empty text nodes will be virtually merged into their adjacent text nodes.
			// If an empty text node does not have an adjacent non-empty text node we can return -1 straight away,
			// because it and all its sibling text nodes will be merged into an empty text node and then totally ignored.
			if (normalized && current.nodeType == CKEDITOR.NODE_TEXT && isEmpty(current)) {
				var adjacent = getAdjacentNonEmptyTextNode(current) || getAdjacentNonEmptyTextNode(current, true);
	
				if (!adjacent) return -1;
			}
	
			do {
				// Bypass blank node and adjacent text nodes.
				if (normalized && current != this.$ && current.nodeType == CKEDITOR.NODE_TEXT && (isNormalizing || isEmpty(current))) continue;
	
				index++;
				isNormalizing = current.nodeType == CKEDITOR.NODE_TEXT;
			} while (current = current.previousSibling);
	
			return index;
	
			function getAdjacentNonEmptyTextNode(node, lookForward) {
				var sibling = lookForward ? node.nextSibling : node.previousSibling;
	
				if (!sibling || sibling.nodeType != CKEDITOR.NODE_TEXT) {
					return null;
				}
	
				// If found a non-empty text node, then return it.
				// If not, then continue search.
				return isEmpty(sibling) ? getAdjacentNonEmptyTextNode(sibling, lookForward) : sibling;
			}
	
			// Checks whether a text node is empty or is FCSeq string (which will be totally removed when normalizing).
			function isEmpty(textNode) {
				return !textNode.nodeValue || textNode.nodeValue == CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE;
			}
		},
	
		/**
	  * @todo
	  */
		getNextSourceNode: function (startFromSibling, nodeType, guard) {
			// If "guard" is a node, transform it in a function.
			if (guard && !guard.call) {
				var guardNode = guard;
				guard = function (node) {
					return !node.equals(guardNode);
				};
			}
	
			var node = !startFromSibling && this.getFirst && this.getFirst(),
			    parent;
	
			// Guarding when we're skipping the current element( no children or 'startFromSibling' ).
			// send the 'moving out' signal even we don't actually dive into.
			if (!node) {
				if (this.type == CKEDITOR.NODE_ELEMENT && guard && guard(this, true) === false) return null;
				node = this.getNext();
			}
	
			while (!node && (parent = (parent || this).getParent())) {
				// The guard check sends the "true" paramenter to indicate that
				// we are moving "out" of the element.
				if (guard && guard(parent, true) === false) return null;
	
				node = parent.getNext();
			}
	
			if (!node) return null;
	
			if (guard && guard(node) === false) return null;
	
			if (nodeType && nodeType != node.type) return node.getNextSourceNode(false, nodeType, guard);
	
			return node;
		},
	
		/**
	  * @todo
	  */
		getPreviousSourceNode: function (startFromSibling, nodeType, guard) {
			if (guard && !guard.call) {
				var guardNode = guard;
				guard = function (node) {
					return !node.equals(guardNode);
				};
			}
	
			var node = !startFromSibling && this.getLast && this.getLast(),
			    parent;
	
			// Guarding when we're skipping the current element( no children or 'startFromSibling' ).
			// send the 'moving out' signal even we don't actually dive into.
			if (!node) {
				if (this.type == CKEDITOR.NODE_ELEMENT && guard && guard(this, true) === false) return null;
				node = this.getPrevious();
			}
	
			while (!node && (parent = (parent || this).getParent())) {
				// The guard check sends the "true" paramenter to indicate that
				// we are moving "out" of the element.
				if (guard && guard(parent, true) === false) return null;
	
				node = parent.getPrevious();
			}
	
			if (!node) return null;
	
			if (guard && guard(node) === false) return null;
	
			if (nodeType && node.type != nodeType) return node.getPreviousSourceNode(false, nodeType, guard);
	
			return node;
		},
	
		/**
	  * Gets the node that preceeds this element in its parent's child list.
	  *
	  *		var element = CKEDITOR.dom.element.createFromHtml( '<div><i>prev</i><b>Example</b></div>' );
	  *		var first = element.getLast().getPrev();
	  *		alert( first.getName() ); // 'i'
	  *
	  * @param {Function} [evaluator] Filtering the result node.
	  * @returns {CKEDITOR.dom.node} The previous node or null if not available.
	  */
		getPrevious: function (evaluator) {
			var previous = this.$,
			    retval;
			do {
				previous = previous.previousSibling;
	
				// Avoid returning the doc type node.
				// http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-412266927
				retval = previous && previous.nodeType != 10 && new CKEDITOR.dom.node(previous);
			} while (retval && evaluator && !evaluator(retval));
			return retval;
		},
	
		/**
	  * Gets the node that follows this element in its parent's child list.
	  *
	  *		var element = CKEDITOR.dom.element.createFromHtml( '<div><b>Example</b><i>next</i></div>' );
	  *		var last = element.getFirst().getNext();
	  *		alert( last.getName() ); // 'i'
	  *
	  * @param {Function} [evaluator] Filtering the result node.
	  * @returns {CKEDITOR.dom.node} The next node or null if not available.
	  */
		getNext: function (evaluator) {
			var next = this.$,
			    retval;
			do {
				next = next.nextSibling;
				retval = next && new CKEDITOR.dom.node(next);
			} while (retval && evaluator && !evaluator(retval));
			return retval;
		},
	
		/**
	  * Gets the parent element for this node.
	  *
	  *		var node = editor.document.getBody().getFirst();
	  *		var parent = node.getParent();
	  *		alert( parent.getName() ); // 'body'
	  *
	  * @param {Boolean} [allowFragmentParent=false] Consider also parent node that is of
	  * fragment type {@link CKEDITOR#NODE_DOCUMENT_FRAGMENT}.
	  * @returns {CKEDITOR.dom.element} The parent element.
	  */
		getParent: function (allowFragmentParent) {
			var parent = this.$.parentNode;
			return parent && (parent.nodeType == CKEDITOR.NODE_ELEMENT || allowFragmentParent && parent.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT) ? new CKEDITOR.dom.node(parent) : null;
		},
	
		/**
	  * Returns an array containing node parents and the node itself. By default nodes are in _descending_ order.
	  *
	  *		// Assuming that body has paragraph as the first child.
	  *		var node = editor.document.getBody().getFirst();
	  *		var parents = node.getParents();
	  *		alert( parents[ 0 ].getName() + ',' + parents[ 2 ].getName() ); // 'html,p'
	  *
	  * @param {Boolean} [closerFirst=false] Determines the order of returned nodes.
	  * @returns {Array} Returns an array of {@link CKEDITOR.dom.node}.
	  */
		getParents: function (closerFirst) {
			var node = this;
			var parents = [];
	
			do {
				parents[closerFirst ? 'push' : 'unshift'](node);
			} while (node = node.getParent());
	
			return parents;
		},
	
		/**
	  * @todo
	  */
		getCommonAncestor: function (node) {
			if (node.equals(this)) return this;
	
			if (node.contains && node.contains(this)) return node;
	
			var start = this.contains ? this : this.getParent();
	
			do {
				if (start.contains(node)) return start;
			} while (start = start.getParent());
	
			return null;
		},
	
		/**
	  * Determines the position relation between this node and the given {@link CKEDITOR.dom.node} in the document.
	  * This node can be preceding ({@link CKEDITOR#POSITION_PRECEDING}) or following ({@link CKEDITOR#POSITION_FOLLOWING})
	  * the given node. This node can also contain ({@link CKEDITOR#POSITION_CONTAINS}) or be contained by
	  * ({@link CKEDITOR#POSITION_IS_CONTAINED}) the given node. The function returns a bitmask of constants
	  * listed above or {@link CKEDITOR#POSITION_IDENTICAL} if the given node is the same as this node.
	  *
	  * @param {CKEDITOR.dom.node} otherNode A node to check relation with.
	  * @returns {Number} Position relation between this node and given node.
	  */
		getPosition: function (otherNode) {
			var $ = this.$;
			var $other = otherNode.$;
	
			if ($.compareDocumentPosition) return $.compareDocumentPosition($other);
	
			// IE and Safari have no support for compareDocumentPosition.
	
			if ($ == $other) return CKEDITOR.POSITION_IDENTICAL;
	
			// Only element nodes support contains and sourceIndex.
			if (this.type == CKEDITOR.NODE_ELEMENT && otherNode.type == CKEDITOR.NODE_ELEMENT) {
				if ($.contains) {
					if ($.contains($other)) return CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_PRECEDING;
	
					if ($other.contains($)) return CKEDITOR.POSITION_IS_CONTAINED + CKEDITOR.POSITION_FOLLOWING;
				}
	
				if ('sourceIndex' in $) return $.sourceIndex < 0 || $other.sourceIndex < 0 ? CKEDITOR.POSITION_DISCONNECTED : $.sourceIndex < $other.sourceIndex ? CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_FOLLOWING;
			}
	
			// For nodes that don't support compareDocumentPosition, contains
			// or sourceIndex, their "address" is compared.
	
			var addressOfThis = this.getAddress(),
			    addressOfOther = otherNode.getAddress(),
			    minLevel = Math.min(addressOfThis.length, addressOfOther.length);
	
			// Determinate preceding/following relationship.
			for (var i = 0; i < minLevel; i++) {
				if (addressOfThis[i] != addressOfOther[i]) {
					return addressOfThis[i] < addressOfOther[i] ? CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_FOLLOWING;
				}
			}
	
			// Determinate contains/contained relationship.
			return addressOfThis.length < addressOfOther.length ? CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_IS_CONTAINED + CKEDITOR.POSITION_FOLLOWING;
		},
	
		/**
	  * Gets the closest ancestor node of this node, specified by its name or using an evaluator function.
	  *
	  *		// Suppose we have the following HTML structure:
	  *		// <div id="outer"><div id="inner"><p><b>Some text</b></p></div></div>
	  *		// If node == <b>
	  *		ascendant = node.getAscendant( 'div' );				// ascendant == <div id="inner">
	  *		ascendant = node.getAscendant( 'b' );				// ascendant == null
	  *		ascendant = node.getAscendant( 'b', true );			// ascendant == <b>
	  *		ascendant = node.getAscendant( { div:1, p:1 } );	// Searches for the first 'div' or 'p': ascendant == <div id="inner">
	  *
	  *		// Using custom evaluator:
	  *		ascendant = node.getAscendant( function( el ) {
	  *			return el.getId() == 'inner';
	  *		} );
	  *		// ascendant == <div id="inner">
	  *
	  * @since 3.6.1
	  * @param {String/Function/Object} query The name of the ancestor node to search or
	  * an object with the node names to search for or an evaluator function.
	  * @param {Boolean} [includeSelf] Whether to include the current
	  * node in the search.
	  * @returns {CKEDITOR.dom.node} The located ancestor node or `null` if not found.
	  */
		getAscendant: function (query, includeSelf) {
			var $ = this.$,
			    evaluator,
			    isCustomEvaluator;
	
			if (!includeSelf) {
				$ = $.parentNode;
			}
	
			// Custom checker provided in an argument.
			if (typeof query == 'function') {
				isCustomEvaluator = true;
				evaluator = query;
			} else {
				// Predefined tag name checker.
				isCustomEvaluator = false;
				evaluator = function ($) {
					var name = typeof $.nodeName == 'string' ? $.nodeName.toLowerCase() : '';
	
					return typeof query == 'string' ? name == query : name in query;
				};
			}
	
			while ($) {
				// For user provided checker we use CKEDITOR.dom.node.
				if (evaluator(isCustomEvaluator ? new CKEDITOR.dom.node($) : $)) {
					return new CKEDITOR.dom.node($);
				}
	
				try {
					$ = $.parentNode;
				} catch (e) {
					$ = null;
				}
			}
	
			return null;
		},
	
		/**
	  * @todo
	  */
		hasAscendant: function (name, includeSelf) {
			var $ = this.$;
	
			if (!includeSelf) $ = $.parentNode;
	
			while ($) {
				if ($.nodeName && $.nodeName.toLowerCase() == name) return true;
	
				$ = $.parentNode;
			}
			return false;
		},
	
		/**
	  * @todo
	  */
		move: function (target, toStart) {
			target.append(this.remove(), toStart);
		},
	
		/**
	  * Removes this node from the document DOM.
	  *
	  *		var element = CKEDITOR.document.getById( 'MyElement' );
	  *		element.remove();
	  *
	  * @param {Boolean} [preserveChildren=false] Indicates that the children
	  * elements must remain in the document, removing only the outer tags.
	  */
		remove: function (preserveChildren) {
			var $ = this.$;
			var parent = $.parentNode;
	
			if (parent) {
				if (preserveChildren) {
					// Move all children before the node.
					for (var child; child = $.firstChild;) {
						parent.insertBefore($.removeChild(child), $);
					}
				}
	
				parent.removeChild($);
			}
	
			return this;
		},
	
		/**
	  * @todo
	  */
		replace: function (nodeToReplace) {
			this.insertBefore(nodeToReplace);
			nodeToReplace.remove();
		},
	
		/**
	  * @todo
	  */
		trim: function () {
			this.ltrim();
			this.rtrim();
		},
	
		/**
	  * @todo
	  */
		ltrim: function () {
			var child;
			while (this.getFirst && (child = this.getFirst())) {
				if (child.type == CKEDITOR.NODE_TEXT) {
					var trimmed = CKEDITOR.tools.ltrim(child.getText()),
					    originalLength = child.getLength();
	
					if (!trimmed) {
						child.remove();
						continue;
					} else if (trimmed.length < originalLength) {
						child.split(originalLength - trimmed.length);
	
						// IE BUG: child.remove() may raise JavaScript errors here. (#81)
						this.$.removeChild(this.$.firstChild);
					}
				}
				break;
			}
		},
	
		/**
	  * @todo
	  */
		rtrim: function () {
			var child;
			while (this.getLast && (child = this.getLast())) {
				if (child.type == CKEDITOR.NODE_TEXT) {
					var trimmed = CKEDITOR.tools.rtrim(child.getText()),
					    originalLength = child.getLength();
	
					if (!trimmed) {
						child.remove();
						continue;
					} else if (trimmed.length < originalLength) {
						child.split(trimmed.length);
	
						// IE BUG: child.getNext().remove() may raise JavaScript errors here.
						// (#81)
						this.$.lastChild.parentNode.removeChild(this.$.lastChild);
					}
				}
				break;
			}
	
			if (CKEDITOR.env.needsBrFiller) {
				child = this.$.lastChild;
	
				if (child && child.type == 1 && child.nodeName.toLowerCase() == 'br') {
					// Use "eChildNode.parentNode" instead of "node" to avoid IE bug (#324).
					child.parentNode.removeChild(child);
				}
			}
		},
	
		/**
	  * Checks if this node is read-only (should not be changed).
	  *
	  *		// For the following HTML:
	  *		// <b>foo</b><div contenteditable="false"><i>bar</i></div>
	  *
	  *		elB.isReadOnly(); // -> false
	  *		foo.isReadOnly(); // -> false
	  *		elDiv.isReadOnly(); // -> true
	  *		elI.isReadOnly(); // -> true
	  *
	  * This method works in two modes depending on browser support for the `element.isContentEditable` property and
	  * the value of the `checkOnlyAttributes` parameter. The `element.isContentEditable` check is faster, but it is known
	  * to malfunction in hidden or detached nodes. Additionally, when processing some detached DOM tree you may want to imitate
	  * that this happens inside an editable container (like it would happen inside the {@link CKEDITOR.editable}). To do so,
	  * you can temporarily attach this tree to an element with the `data-cke-editable` attribute and use the
	  * `checkOnlyAttributes` mode.
	  *
	  * @since 3.5
	  * @param {Boolean} [checkOnlyAttributes=false] If `true`, only attributes will be checked, native methods will not
	  * be used. This parameter needs to be `true` to check hidden or detached elements. Introduced in 4.5.
	  * @returns {Boolean}
	  */
		isReadOnly: function (checkOnlyAttributes) {
			var element = this;
			if (this.type != CKEDITOR.NODE_ELEMENT) element = this.getParent();
	
			// Prevent Edge crash (#13609, #13919).
			if (CKEDITOR.env.edge && element && element.is('textarea', 'input')) {
				checkOnlyAttributes = true;
			}
	
			if (!checkOnlyAttributes && element && typeof element.$.isContentEditable != 'undefined') {
				return !(element.$.isContentEditable || element.data('cke-editable'));
			} else {
				// Degrade for old browsers which don't support "isContentEditable", e.g. FF3
	
				while (element) {
					if (element.data('cke-editable')) {
						return false;
					} else if (element.hasAttribute('contenteditable')) {
						return element.getAttribute('contenteditable') == 'false';
					}
	
					element = element.getParent();
				}
	
				// Reached the root of DOM tree, no editable found.
				return true;
			}
		}
	});

/***/ },
/* 14 */
/*!****************************!*\
  !*** ./core/dom/window.js ***!
  \****************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.dom.document} class, which
	 *		represents a DOM document.
	 */
	
	/**
	 * Represents a DOM window.
	 *
	 *		var document = new CKEDITOR.dom.window( window );
	 *
	 * @class
	 * @extends CKEDITOR.dom.domObject
	 * @constructor Creates a window class instance.
	 * @param {Object} domWindow A native DOM window.
	 */
	CKEDITOR.dom.window = function (domWindow) {
		CKEDITOR.dom.domObject.call(this, domWindow);
	};
	
	CKEDITOR.dom.window.prototype = new CKEDITOR.dom.domObject();
	
	CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype, {
		/**
	  * Moves the selection focus to this window.
	  *
	  *		var win = new CKEDITOR.dom.window( window );
	  *		win.focus();
	  */
		focus: function () {
			this.$.focus();
		},
	
		/**
	  * Gets the width and height of this window's viewable area.
	  *
	  *		var win = new CKEDITOR.dom.window( window );
	  *		var size = win.getViewPaneSize();
	  *		alert( size.width );
	  *		alert( size.height );
	  *
	  * @returns {Object} An object with the `width` and `height`
	  * properties containing the size.
	  */
		getViewPaneSize: function () {
			var doc = this.$.document,
			    stdMode = doc.compatMode == 'CSS1Compat';
			return {
				width: (stdMode ? doc.documentElement.clientWidth : doc.body.clientWidth) || 0,
				height: (stdMode ? doc.documentElement.clientHeight : doc.body.clientHeight) || 0
			};
		},
	
		/**
	  * Gets the current position of the window's scroll.
	  *
	  *		var win = new CKEDITOR.dom.window( window );
	  *		var pos = win.getScrollPosition();
	  *		alert( pos.x );
	  *		alert( pos.y );
	  *
	  * @returns {Object} An object with the `x` and `y` properties
	  * containing the scroll position.
	  */
		getScrollPosition: function () {
			var $ = this.$;
	
			if ('pageXOffset' in $) {
				return {
					x: $.pageXOffset || 0,
					y: $.pageYOffset || 0
				};
			} else {
				var doc = $.document;
				return {
					x: doc.documentElement.scrollLeft || doc.body.scrollLeft || 0,
					y: doc.documentElement.scrollTop || doc.body.scrollTop || 0
				};
			}
		},
	
		/**
	  * Gets the frame element containing this window context.
	  *
	  * @returns {CKEDITOR.dom.element} The frame element or `null` if not in a frame context.
	  */
		getFrame: function () {
			var iframe = this.$.frameElement;
			return iframe ? new CKEDITOR.dom.element.get(iframe) : null;
		}
	});

/***/ },
/* 15 */
/*!******************************!*\
  !*** ./core/dom/document.js ***!
  \******************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.dom.document} class which
	 *		represents a DOM document.
	 */
	
	/**
	 * Represents a DOM document.
	 *
	 *		var document = new CKEDITOR.dom.document( document );
	 *
	 * @class
	 * @extends CKEDITOR.dom.domObject
	 * @constructor Creates a document class instance.
	 * @param {Object} domDocument A native DOM document.
	 */
	CKEDITOR.dom.document = function (domDocument) {
		CKEDITOR.dom.domObject.call(this, domDocument);
	};
	
	// PACKAGER_RENAME( CKEDITOR.dom.document )
	
	CKEDITOR.dom.document.prototype = new CKEDITOR.dom.domObject();
	
	CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype, {
		/**
	  * The node type. This is a constant value set to {@link CKEDITOR#NODE_DOCUMENT}.
	  *
	  * @readonly
	  * @property {Number} [=CKEDITOR.NODE_DOCUMENT]
	  */
		type: CKEDITOR.NODE_DOCUMENT,
	
		/**
	  * Appends a CSS file to the document.
	  *
	  *		CKEDITOR.document.appendStyleSheet( '/mystyles.css' );
	  *
	  * @param {String} cssFileUrl The CSS file URL.
	  */
		appendStyleSheet: function (cssFileUrl) {
			if (this.$.createStyleSheet) this.$.createStyleSheet(cssFileUrl);else {
				var link = new CKEDITOR.dom.element('link');
				link.setAttributes({
					rel: 'stylesheet',
					type: 'text/css',
					href: cssFileUrl
				});
	
				this.getHead().append(link);
			}
		},
	
		/**
	  * Creates a CSS stylesheet and inserts it into the document.
	  *
	  * @param cssStyleText {String} CSS style text.
	  * @returns {Object} The created DOM native stylesheet object.
	  */
		appendStyleText: function (cssStyleText) {
			if (this.$.createStyleSheet) {
				var styleSheet = this.$.createStyleSheet('');
				styleSheet.cssText = cssStyleText;
			} else {
				var style = new CKEDITOR.dom.element('style', this);
				style.append(new CKEDITOR.dom.text(cssStyleText, this));
				this.getHead().append(style);
			}
	
			return styleSheet || style.$.sheet;
		},
	
		/**
	  * Creates a {@link CKEDITOR.dom.element} instance in this document.
	  *
	  * @param {String} name The name of the element.
	  * @param {Object} [attributesAndStyles]
	  * @param {Object} [attributesAndStyles.attributes] Attributes that will be set.
	  * @param {Object} [attributesAndStyles.styles] Styles that will be set.
	  * @returns {CKEDITOR.dom.element}
	  */
		createElement: function (name, attribsAndStyles) {
			var element = new CKEDITOR.dom.element(name, this);
	
			if (attribsAndStyles) {
				if (attribsAndStyles.attributes) element.setAttributes(attribsAndStyles.attributes);
	
				if (attribsAndStyles.styles) element.setStyles(attribsAndStyles.styles);
			}
	
			return element;
		},
	
		/**
	  * Creates a {@link CKEDITOR.dom.text} instance in this document.
	  *
	  * @param {String} text Value of the text node.
	  * @returns {CKEDITOR.dom.element}
	  */
		createText: function (text) {
			return new CKEDITOR.dom.text(text, this);
		},
	
		/**
	  * Moves the selection focus to this document's window.
	  */
		focus: function () {
			this.getWindow().focus();
		},
	
		/**
	  * Returns the element that is currently designated as the active element in the document.
	  *
	  * **Note:** Only one element can be active at a time in a document.
	  * An active element does not necessarily have focus,
	  * but an element with focus is always the active element in a document.
	  *
	  * @returns {CKEDITOR.dom.element} Active element or `null` if an IE8-9 bug is encountered.
	  * See [#10030](http://dev.ckeditor.com/ticket/10030).
	  */
		getActive: function () {
			var $active;
			try {
				$active = this.$.activeElement;
			} catch (e) {
				return null;
			}
			return new CKEDITOR.dom.element($active);
		},
	
		/**
	  * Gets an element based on its ID.
	  *
	  *		var element = CKEDITOR.document.getById( 'myElement' );
	  *		alert( element.getId() ); // 'myElement'
	  *
	  * @param {String} elementId The element ID.
	  * @returns {CKEDITOR.dom.element} The element instance, or `null` if not found.
	  */
		getById: function (elementId) {
			var $ = this.$.getElementById(elementId);
			return $ ? new CKEDITOR.dom.element($) : null;
		},
	
		/**
	  * Gets a node based on its address. See {@link CKEDITOR.dom.node#getAddress}.
	  *
	  * @param {Array} address
	  * @param {Boolean} [normalized=false]
	  */
		getByAddress: function (address, normalized) {
			var $ = this.$.documentElement;
	
			for (var i = 0; $ && i < address.length; i++) {
				var target = address[i];
	
				if (!normalized) {
					$ = $.childNodes[target];
					continue;
				}
	
				var currentIndex = -1;
	
				for (var j = 0; j < $.childNodes.length; j++) {
					var candidate = $.childNodes[j];
	
					if (normalized === true && candidate.nodeType == 3 && candidate.previousSibling && candidate.previousSibling.nodeType == 3) continue;
	
					currentIndex++;
	
					if (currentIndex == target) {
						$ = candidate;
						break;
					}
				}
			}
	
			return $ ? new CKEDITOR.dom.node($) : null;
		},
	
		/**
	  * Gets elements list based on a given tag name.
	  *
	  * @param {String} tagName The element tag name.
	  * @returns {CKEDITOR.dom.nodeList} The nodes list.
	  */
		getElementsByTag: function (tagName, namespace) {
			if (!(CKEDITOR.env.ie && document.documentMode <= 8) && namespace) tagName = namespace + ':' + tagName;
			return new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(tagName));
		},
	
		/**
	  * Gets the `<head>` element for this document.
	  *
	  *		var element = CKEDITOR.document.getHead();
	  *		alert( element.getName() ); // 'head'
	  *
	  * @returns {CKEDITOR.dom.element} The `<head>` element.
	  */
		getHead: function () {
			var head = this.$.getElementsByTagName('head')[0];
			if (!head) head = this.getDocumentElement().append(new CKEDITOR.dom.element('head'), true);else head = new CKEDITOR.dom.element(head);
	
			return head;
		},
	
		/**
	  * Gets the `<body>` element for this document.
	  *
	  *		var element = CKEDITOR.document.getBody();
	  *		alert( element.getName() ); // 'body'
	  *
	  * @returns {CKEDITOR.dom.element} The `<body>` element.
	  */
		getBody: function () {
			return new CKEDITOR.dom.element(this.$.body);
		},
	
		/**
	  * Gets the DOM document element for this document.
	  *
	  * @returns {CKEDITOR.dom.element} The DOM document element.
	  */
		getDocumentElement: function () {
			return new CKEDITOR.dom.element(this.$.documentElement);
		},
	
		/**
	  * Gets the window object that stores this document.
	  *
	  * @returns {CKEDITOR.dom.window} The window object.
	  */
		getWindow: function () {
			return new CKEDITOR.dom.window(this.$.parentWindow || this.$.defaultView);
		},
	
		/**
	  * Defines the document content through `document.write`. Note that the
	  * previous document content will be lost (cleaned).
	  *
	  *		document.write(
	  *			'<html>' +
	  *				'<head><title>Sample Document</title></head>' +
	  *				'<body>Document content created by code.</body>' +
	  *			'</html>'
	  *		);
	  *
	  * @since 3.5
	  * @param {String} html The HTML defining the document content.
	  */
		write: function (html) {
			// Don't leave any history log in IE. (#5657)
			this.$.open('text/html', 'replace');
	
			// Support for custom document.domain in IE.
			//
			// The script must be appended because if placed before the
			// doctype, IE will go into quirks mode and mess with
			// the editable, e.g. by changing its default height.
			if (CKEDITOR.env.ie) html = html.replace(/(?:^\s*<!DOCTYPE[^>]*?>)|^/i, '$&\n<script data-cke-temp="1">(' + CKEDITOR.tools.fixDomain + ')();</script>');
	
			this.$.write(html);
			this.$.close();
		},
	
		/**
	  * Wrapper for `querySelectorAll`. Returns a list of elements within this document that match
	  * the specified `selector`.
	  *
	  * **Note:** The returned list is not a live collection (like the result of native `querySelectorAll`).
	  *
	  * @since 4.3
	  * @param {String} selector
	  * @returns {CKEDITOR.dom.nodeList}
	  */
		find: function (selector) {
			return new CKEDITOR.dom.nodeList(this.$.querySelectorAll(selector));
		},
	
		/**
	  * Wrapper for `querySelector`. Returns the first element within this document that matches
	  * the specified `selector`.
	  *
	  * @since 4.3
	  * @param {String} selector
	  * @returns {CKEDITOR.dom.element}
	  */
		findOne: function (selector) {
			var el = this.$.querySelector(selector);
	
			return el ? new CKEDITOR.dom.element(el) : null;
		},
	
		/**
	  * Internet Explorer 8 only method. It returns a document fragment which has all HTML5 elements enabled.
	  *
	  * @since 4.3
	  * @private
	  * @returns DocumentFragment
	  */
		_getHtml5ShivFrag: function () {
			var $frag = this.getCustomData('html5ShivFrag');
	
			if (!$frag) {
				$frag = this.$.createDocumentFragment();
				CKEDITOR.tools.enableHtml5Elements($frag, true);
				this.setCustomData('html5ShivFrag', $frag);
			}
	
			return $frag;
		}
	});

/***/ },
/* 16 */
/*!******************************!*\
  !*** ./core/dom/nodelist.js ***!
  \******************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * Represents a list of {@link CKEDITOR.dom.node} objects.
	 * It's a wrapper for native nodes list.
	 *
	 *		var nodeList = CKEDITOR.document.getBody().getChildren();
	 *		alert( nodeList.count() ); // number [0;N]
	 *
	 * @class
	 * @constructor Creates a document class instance.
	 * @param {Object} nativeList
	 */
	CKEDITOR.dom.nodeList = function (nativeList) {
		this.$ = nativeList;
	};
	
	CKEDITOR.dom.nodeList.prototype = {
		/**
	  * Get count of nodes in this list.
	  *
	  * @returns {Number}
	  */
		count: function () {
			return this.$.length;
		},
	
		/**
	  * Get node from the list.
	  *
	  * @returns {CKEDITOR.dom.node}
	  */
		getItem: function (index) {
			if (index < 0 || index >= this.$.length) return null;
	
			var $node = this.$[index];
			return $node ? new CKEDITOR.dom.node($node) : null;
		}
	};

/***/ },
/* 17 */
/*!*****************************!*\
  !*** ./core/dom/element.js ***!
  \*****************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.dom.element} class, which
	 *		represents a DOM element.
	 */
	
	/**
	 * Represents a DOM element.
	 *
	 *		// Create a new <span> element.
	 *		var element = new CKEDITOR.dom.element( 'span' );
	 *
	 *		// Create an element based on a native DOM element.
	 *		var element = new CKEDITOR.dom.element( document.getElementById( 'myId' ) );
	 *
	 * @class
	 * @extends CKEDITOR.dom.node
	 * @constructor Creates an element class instance.
	 * @param {Object/String} element A native DOM element or the element name for
	 * new elements.
	 * @param {CKEDITOR.dom.document} [ownerDocument] The document that will contain
	 * the element in case of element creation.
	 */
	CKEDITOR.dom.element = function (element, ownerDocument) {
		if (typeof element == 'string') element = (ownerDocument ? ownerDocument.$ : document).createElement(element);
	
		// Call the base constructor (we must not call CKEDITOR.dom.node).
		CKEDITOR.dom.domObject.call(this, element);
	};
	
	// PACKAGER_RENAME( CKEDITOR.dom.element )
	/**
	 * The the {@link CKEDITOR.dom.element} representing and element. If the
	 * element is a native DOM element, it will be transformed into a valid
	 * CKEDITOR.dom.element object.
	 *
	 *		var element = new CKEDITOR.dom.element( 'span' );
	 *		alert( element == CKEDITOR.dom.element.get( element ) ); // true
	 *
	 *		var element = document.getElementById( 'myElement' );
	 *		alert( CKEDITOR.dom.element.get( element ).getName() ); // (e.g.) 'p'
	 *
	 * @static
	 * @param {String/Object} element Element's id or name or native DOM element.
	 * @returns {CKEDITOR.dom.element} The transformed element.
	 */
	CKEDITOR.dom.element.get = function (element) {
		var el = typeof element == 'string' ? document.getElementById(element) || document.getElementsByName(element)[0] : element;
	
		return el && (el.$ ? el : new CKEDITOR.dom.element(el));
	};
	
	CKEDITOR.dom.element.prototype = new CKEDITOR.dom.node();
	
	/**
	 * Creates an instance of the {@link CKEDITOR.dom.element} class based on the
	 * HTML representation of an element.
	 *
	 *		var element = CKEDITOR.dom.element.createFromHtml( '<strong class="anyclass">My element</strong>' );
	 *		alert( element.getName() ); // 'strong'
	 *
	 * @static
	 * @param {String} html The element HTML. It should define only one element in
	 * the "root" level. The "root" element can have child nodes, but not siblings.
	 * @returns {CKEDITOR.dom.element} The element instance.
	 */
	CKEDITOR.dom.element.createFromHtml = function (html, ownerDocument) {
		var temp = new CKEDITOR.dom.element('div', ownerDocument);
		temp.setHtml(html);
	
		// When returning the node, remove it from its parent to detach it.
		return temp.getFirst().remove();
	};
	
	/**
	 * Sets {@link CKEDITOR.dom.element#setCustomData custom data} on an element in a way that it is later
	 * possible to {@link #clearAllMarkers clear all data} set on all elements sharing the same database.
	 *
	 * This mechanism is very useful when processing some portion of DOM. All markers can later be removed
	 * by calling the {@link #clearAllMarkers} method, hence markers will not leak to second pass of this algorithm.
	 *
	 *		var database = {};
	 *		CKEDITOR.dom.element.setMarker( database, element1, 'foo', 'bar' );
	 *		CKEDITOR.dom.element.setMarker( database, element2, 'oof', [ 1, 2, 3 ] );
	 *
	 *		element1.getCustomData( 'foo' ); // 'bar'
	 *		element2.getCustomData( 'oof' ); // [ 1, 2, 3 ]
	 *
	 *		CKEDITOR.dom.element.clearAllMarkers( database );
	 *
	 *		element1.getCustomData( 'foo' ); // null
	 *
	 * @static
	 * @param {Object} database
	 * @param {CKEDITOR.dom.element} element
	 * @param {String} name
	 * @param {Object} value
	 * @returns {CKEDITOR.dom.element} The element.
	 */
	CKEDITOR.dom.element.setMarker = function (database, element, name, value) {
		var id = element.getCustomData('list_marker_id') || element.setCustomData('list_marker_id', CKEDITOR.tools.getNextNumber()).getCustomData('list_marker_id'),
		    markerNames = element.getCustomData('list_marker_names') || element.setCustomData('list_marker_names', {}).getCustomData('list_marker_names');
		database[id] = element;
		markerNames[name] = 1;
	
		return element.setCustomData(name, value);
	};
	
	/**
	 * Removes all markers added using this database. See the {@link #setMarker} method for more information.
	 *
	 * @param {Object} database
	 * @static
	 */
	CKEDITOR.dom.element.clearAllMarkers = function (database) {
		for (var i in database) CKEDITOR.dom.element.clearMarkers(database, database[i], 1);
	};
	
	/**
	 * Removes all markers added to this element and removes it from the database if
	 * `removeFromDatabase` was passed. See the {@link #setMarker} method for more information.
	 *
	 *		var database = {};
	 *		CKEDITOR.dom.element.setMarker( database, element1, 'foo', 'bar' );
	 *		CKEDITOR.dom.element.setMarker( database, element2, 'oof', [ 1, 2, 3 ] );
	 *
	 *		element1.getCustomData( 'foo' ); // 'bar'
	 *		element2.getCustomData( 'oof' ); // [ 1, 2, 3 ]
	 *
	 *		CKEDITOR.dom.element.clearMarkers( database, element1, true );
	 *
	 *		element1.getCustomData( 'foo' ); // null
	 *		element2.getCustomData( 'oof' ); // [ 1, 2, 3 ]
	 *
	 * @param {Object} database
	 * @static
	 */
	CKEDITOR.dom.element.clearMarkers = function (database, element, removeFromDatabase) {
		var names = element.getCustomData('list_marker_names'),
		    id = element.getCustomData('list_marker_id');
		for (var i in names) element.removeCustomData(i);
		element.removeCustomData('list_marker_names');
		if (removeFromDatabase) {
			element.removeCustomData('list_marker_id');
			delete database[id];
		}
	};
	
	(function () {
		var elementsClassList = document.createElement('_').classList,
		    supportsClassLists = typeof elementsClassList !== 'undefined' && String(elementsClassList.add).match(/\[Native code\]/gi) !== null,
		    rclass = /[\n\t\r]/g;
	
		function hasClass(classNames, className) {
			// Source: jQuery.
			return (' ' + classNames + ' ').replace(rclass, ' ').indexOf(' ' + className + ' ') > -1;
		}
	
		CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype, {
			/**
	   * The node type. This is a constant value set to {@link CKEDITOR#NODE_ELEMENT}.
	   *
	   * @readonly
	   * @property {Number} [=CKEDITOR.NODE_ELEMENT]
	   */
			type: CKEDITOR.NODE_ELEMENT,
	
			/**
	   * Adds a CSS class to the element. It appends the class to the
	   * already existing names.
	   *
	   *		var element = new CKEDITOR.dom.element( 'div' );
	   *		element.addClass( 'classA' ); // <div class="classA">
	   *		element.addClass( 'classB' ); // <div class="classA classB">
	   *		element.addClass( 'classA' ); // <div class="classA classB">
	   *
	   * **Note:** Since CKEditor 4.5 this method cannot be used with multiple classes (`'classA classB'`).
	   *
	   * @chainable
	   * @method addClass
	   * @param {String} className The name of the class to be added.
	   */
			addClass: supportsClassLists ? function (className) {
				this.$.classList.add(className);
	
				return this;
			} : function (className) {
				var c = this.$.className;
				if (c) {
					if (!hasClass(c, className)) c += ' ' + className;
				}
				this.$.className = c || className;
	
				return this;
			},
	
			/**
	   * Removes a CSS class name from the elements classes. Other classes
	   * remain untouched.
	   *
	   *		var element = new CKEDITOR.dom.element( 'div' );
	   *		element.addClass( 'classA' );		// <div class="classA">
	   *		element.addClass( 'classB' );		// <div class="classA classB">
	   *		element.removeClass( 'classA' );	// <div class="classB">
	   *		element.removeClass( 'classB' );	// <div>
	   *
	   * @chainable
	   * @method removeClass
	   * @param {String} className The name of the class to remove.
	   */
			removeClass: supportsClassLists ? function (className) {
				var $ = this.$;
				$.classList.remove(className);
	
				if (!$.className) $.removeAttribute('class');
	
				return this;
			} : function (className) {
				var c = this.getAttribute('class');
				if (c && hasClass(c, className)) {
					c = c.replace(new RegExp('(?:^|\\s+)' + className + '(?=\\s|$)'), '').replace(/^\s+/, '');
	
					if (c) this.setAttribute('class', c);else this.removeAttribute('class');
				}
	
				return this;
			},
	
			/**
	   * Checks if element has class name.
	   *
	   * @param {String} className
	   * @returns {Boolean}
	   */
			hasClass: function (className) {
				return hasClass(this.$.className, className);
			},
	
			/**
	   * Append a node as a child of this element.
	   *
	   *		var p = new CKEDITOR.dom.element( 'p' );
	   *
	   *		var strong = new CKEDITOR.dom.element( 'strong' );
	   *		p.append( strong );
	   *
	   *		var em = p.append( 'em' );
	   *
	   *		// Result: '<p><strong></strong><em></em></p>'
	   *
	   * @param {CKEDITOR.dom.node/String} node The node or element name to be appended.
	   * @param {Boolean} [toStart=false] Indicates that the element is to be appended at the start.
	   * @returns {CKEDITOR.dom.node} The appended node.
	   */
			append: function (node, toStart) {
				if (typeof node == 'string') node = this.getDocument().createElement(node);
	
				if (toStart) this.$.insertBefore(node.$, this.$.firstChild);else this.$.appendChild(node.$);
	
				return node;
			},
	
			/**
	   * Append HTML as a child(ren) of this element.
	   *
	   * @param {String} html
	   */
			appendHtml: function (html) {
				if (!this.$.childNodes.length) this.setHtml(html);else {
					var temp = new CKEDITOR.dom.element('div', this.getDocument());
					temp.setHtml(html);
					temp.moveChildren(this);
				}
			},
	
			/**
	   * Append text to this element.
	   *
	   *		var p = new CKEDITOR.dom.element( 'p' );
	   *		p.appendText( 'This is' );
	   *		p.appendText( ' some text' );
	   *
	   *		// Result: '<p>This is some text</p>'
	   *
	   * @param {String} text The text to be appended.
	   */
			appendText: function (text) {
				// On IE8 it is impossible to append node to script tag, so we use its text.
				// On the contrary, on Safari the text property is unpredictable in links. (#13232)
				if (this.$.text != null && CKEDITOR.env.ie && CKEDITOR.env.version < 9) this.$.text += text;else this.append(new CKEDITOR.dom.text(text));
			},
	
			/**
	   * Appends a `<br>` filler element to this element if the filler is not present already.
	   * By default filler is appended only if {@link CKEDITOR.env#needsBrFiller} is `true`,
	   * however when `force` is set to `true` filler will be appended regardless of the environment.
	   *
	   * @param {Boolean} [force] Append filler regardless of the environment.
	   */
			appendBogus: function (force) {
				if (!force && !CKEDITOR.env.needsBrFiller) return;
	
				var lastChild = this.getLast();
	
				// Ignore empty/spaces text.
				while (lastChild && lastChild.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.rtrim(lastChild.getText())) lastChild = lastChild.getPrevious();
				if (!lastChild || !lastChild.is || !lastChild.is('br')) {
					var bogus = this.getDocument().createElement('br');
	
					CKEDITOR.env.gecko && bogus.setAttribute('type', '_moz');
	
					this.append(bogus);
				}
			},
	
			/**
	   * Breaks one of the ancestor element in the element position, moving
	   * this element between the broken parts.
	   *
	   *		// Before breaking:
	   *		//		<b>This <i>is some<span /> sample</i> test text</b>
	   *		// If "element" is <span /> and "parent" is <i>:
	   *		//		<b>This <i>is some</i><span /><i> sample</i> test text</b>
	   *		element.breakParent( parent );
	   *
	   *		// Before breaking:
	   *		//		<b>This <i>is some<span /> sample</i> test text</b>
	   *		// If "element" is <span /> and "parent" is <b>:
	   *		//		<b>This <i>is some</i></b><span /><b><i> sample</i> test text</b>
	   *		element.breakParent( parent );
	   *
	   * @param {CKEDITOR.dom.element} parent The anscestor element to get broken.
	   * @param {Boolean} [cloneId=false] Whether to preserve ancestor ID attributes while breaking.
	   */
			breakParent: function (parent, cloneId) {
				var range = new CKEDITOR.dom.range(this.getDocument());
	
				// We'll be extracting part of this element, so let's use our
				// range to get the correct piece.
				range.setStartAfter(this);
				range.setEndAfter(parent);
	
				// Extract it.
				var docFrag = range.extractContents(false, cloneId || false),
				    tmpElement,
				    current;
	
				// Move the element outside the broken element.
				range.insertNode(this.remove());
	
				// In case of Internet Explorer, we must check if there is no background-color
				// added to the element. In such case, we have to overwrite it to prevent "switching it off"
				// by a browser (#14667).
				if (CKEDITOR.env.ie && !CKEDITOR.env.edge) {
					tmpElement = new CKEDITOR.dom.element('div');
	
					while (current = docFrag.getFirst()) {
						if (current.$.style.backgroundColor) {
							// This is a necessary hack to make sure that IE will track backgroundColor CSS property, see
							// http://dev.ckeditor.com/ticket/14667#comment:8 for more details.
							current.$.style.backgroundColor = current.$.style.backgroundColor;
						}
	
						tmpElement.append(current);
					}
	
					// Re-insert the extracted piece after the element.
					tmpElement.insertAfter(this);
					tmpElement.remove(true);
				} else {
					// Re-insert the extracted piece after the element.
					docFrag.insertAfterNode(this);
				}
			},
	
			/**
	   * Checks if this element contains given node.
	   *
	   * @method
	   * @param {CKEDITOR.dom.node} node
	   * @returns {Boolean}
	   */
			contains: !document.compareDocumentPosition ? function (node) {
				var $ = this.$;
	
				return node.type != CKEDITOR.NODE_ELEMENT ? $.contains(node.getParent().$) : $ != node.$ && $.contains(node.$);
			} : function (node) {
				return !!(this.$.compareDocumentPosition(node.$) & 16);
			},
	
			/**
	   * Moves the selection focus to this element.
	   *
	   *		var element = CKEDITOR.document.getById( 'myTextarea' );
	   *		element.focus();
	   *
	   * @method
	   * @param  {Boolean} defer Whether to asynchronously defer the
	   * execution by 100 ms.
	   */
			focus: function () {
				function exec() {
					// IE throws error if the element is not visible.
					try {
						this.$.focus();
					} catch (e) {}
				}
	
				return function (defer) {
					if (defer) CKEDITOR.tools.setTimeout(exec, 100, this);else exec.call(this);
				};
			}(),
	
			/**
	   * Gets the inner HTML of this element.
	   *
	   *		var element = CKEDITOR.dom.element.createFromHtml( '<div><b>Example</b></div>' );
	   *		alert( element.getHtml() ); // '<b>Example</b>'
	   *
	   * @returns {String} The inner HTML of this element.
	   */
			getHtml: function () {
				var retval = this.$.innerHTML;
				// Strip <?xml:namespace> tags in IE. (#3341).
				return CKEDITOR.env.ie ? retval.replace(/<\?[^>]*>/g, '') : retval;
			},
	
			/**
	   * Gets the outer (inner plus tags) HTML of this element.
	   *
	   *		var element = CKEDITOR.dom.element.createFromHtml( '<div class="bold"><b>Example</b></div>' );
	   *		alert( element.getOuterHtml() ); // '<div class="bold"><b>Example</b></div>'
	   *
	   * @returns {String} The outer HTML of this element.
	   */
			getOuterHtml: function () {
				if (this.$.outerHTML) {
					// IE includes the <?xml:namespace> tag in the outerHTML of
					// namespaced element. So, we must strip it here. (#3341)
					return this.$.outerHTML.replace(/<\?[^>]*>/, '');
				}
	
				var tmpDiv = this.$.ownerDocument.createElement('div');
				tmpDiv.appendChild(this.$.cloneNode(true));
				return tmpDiv.innerHTML;
			},
	
			/**
	   * Retrieve the bounding rectangle of the current element, in pixels,
	   * relative to the upper-left corner of the browser's client area.
	   *
	   * @returns {Object} The dimensions of the DOM element including
	   * `left`, `top`, `right`, `bottom`, `width` and `height`.
	   */
			getClientRect: function () {
				// http://help.dottoro.com/ljvmcrrn.php
				var rect = CKEDITOR.tools.extend({}, this.$.getBoundingClientRect());
	
				!rect.width && (rect.width = rect.right - rect.left);
				!rect.height && (rect.height = rect.bottom - rect.top);
	
				return rect;
			},
	
			/**
	   * Sets the inner HTML of this element.
	   *
	   *		var p = new CKEDITOR.dom.element( 'p' );
	   *		p.setHtml( '<b>Inner</b> HTML' );
	   *
	   *		// Result: '<p><b>Inner</b> HTML</p>'
	   *
	   * @method
	   * @param {String} html The HTML to be set for this element.
	   * @returns {String} The inserted HTML.
	   */
			setHtml: CKEDITOR.env.ie && CKEDITOR.env.version < 9 ?
			// old IEs throws error on HTML manipulation (through the "innerHTML" property)
			// on the element which resides in an DTD invalid position,  e.g. <span><div></div></span>
			// fortunately it can be worked around with DOM manipulation.
			function (html) {
				try {
					var $ = this.$;
	
					// Fix the case when setHtml is called on detached element.
					// HTML5 shiv used for document in which this element was created
					// won't affect that detached element. So get document fragment with
					// all HTML5 elements enabled and set innerHTML while this element is appended to it.
					if (this.getParent()) return $.innerHTML = html;else {
						var $frag = this.getDocument()._getHtml5ShivFrag();
						$frag.appendChild($);
						$.innerHTML = html;
						$frag.removeChild($);
	
						return html;
					}
				} catch (e) {
					this.$.innerHTML = '';
	
					var temp = new CKEDITOR.dom.element('body', this.getDocument());
					temp.$.innerHTML = html;
	
					var children = temp.getChildren();
					while (children.count()) this.append(children.getItem(0));
	
					return html;
				}
			} : function (html) {
				return this.$.innerHTML = html;
			},
	
			/**
	   * Sets the element contents as plain text.
	   *
	   *		var element = new CKEDITOR.dom.element( 'div' );
	   *		element.setText( 'A > B & C < D' );
	   *		alert( element.innerHTML ); // 'A &gt; B &amp; C &lt; D'
	   *
	   * @param {String} text The text to be set.
	   * @returns {String} The inserted text.
	   */
			setText: function () {
				var supportsTextContent = document.createElement('p');
				supportsTextContent.innerHTML = 'x';
				supportsTextContent = supportsTextContent.textContent;
	
				return function (text) {
					this.$[supportsTextContent ? 'textContent' : 'innerText'] = text;
				};
			}(),
	
			/**
	   * Gets the value of an element attribute.
	   *
	   *		var element = CKEDITOR.dom.element.createFromHtml( '<input type="text" />' );
	   *		alert( element.getAttribute( 'type' ) ); // 'text'
	   *
	   * @method
	   * @param {String} name The attribute name.
	   * @returns {String} The attribute value or null if not defined.
	   */
			getAttribute: function () {
				var standard = function (name) {
					return this.$.getAttribute(name, 2);
				};
	
				if (CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks)) {
					return function (name) {
						switch (name) {
							case 'class':
								name = 'className';
								break;
	
							case 'http-equiv':
								name = 'httpEquiv';
								break;
	
							case 'name':
								return this.$.name;
	
							case 'tabindex':
								var tabIndex = standard.call(this, name);
	
								// IE returns tabIndex=0 by default for all
								// elements. For those elements,
								// getAtrribute( 'tabindex', 2 ) returns 32768
								// instead. So, we must make this check to give a
								// uniform result among all browsers.
								if (tabIndex !== 0 && this.$.tabIndex === 0) tabIndex = null;
	
								return tabIndex;
	
							case 'checked':
								var attr = this.$.attributes.getNamedItem(name),
								    attrValue = attr.specified ? attr.nodeValue // For value given by parser.
								: this.$.checked; // For value created via DOM interface.
	
								return attrValue ? 'checked' : null;
	
							case 'hspace':
							case 'value':
								return this.$[name];
	
							case 'style':
								// IE does not return inline styles via getAttribute(). See #2947.
								return this.$.style.cssText;
	
							case 'contenteditable':
							case 'contentEditable':
								return this.$.attributes.getNamedItem('contentEditable').specified ? this.$.getAttribute('contentEditable') : null;
						}
	
						return standard.call(this, name);
					};
				} else {
					return standard;
				}
			}(),
	
			/**
	   * Gets the values of all element attributes.
	   *
	   * @param {Array} exclude The names of attributes to be excluded from the returned object.
	   * @return {Object} An object containing all element attributes with their values.
	   */
			getAttributes: function (exclude) {
				var attributes = {},
				    attrDefs = this.$.attributes,
				    i;
	
				exclude = CKEDITOR.tools.isArray(exclude) ? exclude : [];
	
				for (i = 0; i < attrDefs.length; i++) {
					if (CKEDITOR.tools.indexOf(exclude, attrDefs[i].name) === -1) {
						attributes[attrDefs[i].name] = attrDefs[i].value;
					}
				}
	
				return attributes;
			},
	
			/**
	   * Gets the nodes list containing all children of this element.
	   *
	   * @returns {CKEDITOR.dom.nodeList}
	   */
			getChildren: function () {
				return new CKEDITOR.dom.nodeList(this.$.childNodes);
			},
	
			/**
	   * Gets the current computed value of one of the element CSS style
	   * properties.
	   *
	   *		var element = new CKEDITOR.dom.element( 'span' );
	   *		alert( element.getComputedStyle( 'display' ) ); // 'inline'
	   *
	   * @method
	   * @param {String} propertyName The style property name.
	   * @returns {String} The property value.
	   */
			getComputedStyle: document.defaultView && document.defaultView.getComputedStyle ? function (propertyName) {
				var style = this.getWindow().$.getComputedStyle(this.$, null);
	
				// Firefox may return null if we call the above on a hidden iframe. (#9117)
				return style ? style.getPropertyValue(propertyName) : '';
			} : function (propertyName) {
				return this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(propertyName)];
			},
	
			/**
	   * Gets the DTD entries for this element.
	   *
	   * @returns {Object} An object containing the list of elements accepted
	   * by this element.
	   */
			getDtd: function () {
				var dtd = CKEDITOR.dtd[this.getName()];
	
				this.getDtd = function () {
					return dtd;
				};
	
				return dtd;
			},
	
			/**
	   * Gets all this element's descendants having given tag name.
	   *
	   * @method
	   * @param {String} tagName
	   */
			getElementsByTag: CKEDITOR.dom.document.prototype.getElementsByTag,
	
			/**
	   * Gets the computed tabindex for this element.
	   *
	   *		var element = CKEDITOR.document.getById( 'myDiv' );
	   *		alert( element.getTabIndex() ); // (e.g.) '-1'
	   *
	   * @method
	   * @returns {Number} The tabindex value.
	   */
			getTabIndex: function () {
				var tabIndex = this.$.tabIndex;
	
				// IE returns tabIndex=0 by default for all elements. In
				// those cases we must check that the element really has
				// the tabindex attribute set to zero, or it is one of
				// those element that should have zero by default.
				if (tabIndex === 0 && !CKEDITOR.dtd.$tabIndex[this.getName()] && parseInt(this.getAttribute('tabindex'), 10) !== 0) return -1;
	
				return tabIndex;
			},
	
			/**
	   * Gets the text value of this element.
	   *
	   * Only in IE (which uses innerText), `<br>` will cause linebreaks,
	   * and sucessive whitespaces (including line breaks) will be reduced to
	   * a single space. This behavior is ok for us, for now. It may change
	   * in the future.
	   *
	   *		var element = CKEDITOR.dom.element.createFromHtml( '<div>Sample <i>text</i>.</div>' );
	   *		alert( <b>element.getText()</b> ); // 'Sample text.'
	   *
	   * @returns {String} The text value.
	   */
			getText: function () {
				return this.$.textContent || this.$.innerText || '';
			},
	
			/**
	   * Gets the window object that contains this element.
	   *
	   * @returns {CKEDITOR.dom.window} The window object.
	   */
			getWindow: function () {
				return this.getDocument().getWindow();
			},
	
			/**
	   * Gets the value of the `id` attribute of this element.
	   *
	   *		var element = CKEDITOR.dom.element.createFromHtml( '<p id="myId"></p>' );
	   *		alert( element.getId() ); // 'myId'
	   *
	   * @returns {String} The element id, or null if not available.
	   */
			getId: function () {
				return this.$.id || null;
			},
	
			/**
	   * Gets the value of the `name` attribute of this element.
	   *
	   *		var element = CKEDITOR.dom.element.createFromHtml( '<input name="myName"></input>' );
	   *		alert( <b>element.getNameAtt()</b> ); // 'myName'
	   *
	   * @returns {String} The element name, or null if not available.
	   */
			getNameAtt: function () {
				return this.$.name || null;
			},
	
			/**
	   * Gets the element name (tag name). The returned name is guaranteed to
	   * be always full lowercased.
	   *
	   *		var element = new CKEDITOR.dom.element( 'span' );
	   *		alert( element.getName() ); // 'span'
	   *
	   * @returns {String} The element name.
	   */
			getName: function () {
				// Cache the lowercased name inside a closure.
				var nodeName = this.$.nodeName.toLowerCase();
	
				if (CKEDITOR.env.ie && document.documentMode <= 8) {
					var scopeName = this.$.scopeName;
					if (scopeName != 'HTML') nodeName = scopeName.toLowerCase() + ':' + nodeName;
				}
	
				this.getName = function () {
					return nodeName;
				};
	
				return this.getName();
			},
	
			/**
	   * Gets the value set to this element. This value is usually available
	   * for form field elements.
	   *
	   * @returns {String} The element value.
	   */
			getValue: function () {
				return this.$.value;
			},
	
			/**
	   * Gets the first child node of this element.
	   *
	   *		var element = CKEDITOR.dom.element.createFromHtml( '<div><b>Example</b></div>' );
	   *		var first = element.getFirst();
	   *		alert( first.getName() ); // 'b'
	   *
	   * @param {Function} evaluator Filtering the result node.
	   * @returns {CKEDITOR.dom.node} The first child node or null if not available.
	   */
			getFirst: function (evaluator) {
				var first = this.$.firstChild,
				    retval = first && new CKEDITOR.dom.node(first);
				if (retval && evaluator && !evaluator(retval)) retval = retval.getNext(evaluator);
	
				return retval;
			},
	
			/**
	   * See {@link #getFirst}.
	   *
	   * @param {Function} evaluator Filtering the result node.
	   * @returns {CKEDITOR.dom.node}
	   */
			getLast: function (evaluator) {
				var last = this.$.lastChild,
				    retval = last && new CKEDITOR.dom.node(last);
				if (retval && evaluator && !evaluator(retval)) retval = retval.getPrevious(evaluator);
	
				return retval;
			},
	
			/**
	   * Gets CSS style value.
	   *
	   * @param {String} name The CSS property name.
	   * @returns {String} Style value.
	   */
			getStyle: function (name) {
				return this.$.style[CKEDITOR.tools.cssStyleToDomStyle(name)];
			},
	
			/**
	   * Checks if the element name matches the specified criteria.
	   *
	   *		var element = new CKEDITOR.element( 'span' );
	   *		alert( element.is( 'span' ) );			// true
	   *		alert( element.is( 'p', 'span' ) );		// true
	   *		alert( element.is( 'p' ) );				// false
	   *		alert( element.is( 'p', 'div' ) );		// false
	   *		alert( element.is( { p:1,span:1 } ) );	// true
	   *
	   * @param {String.../Object} name One or more names to be checked, or a {@link CKEDITOR.dtd} object.
	   * @returns {Boolean} `true` if the element name matches any of the names.
	   */
			is: function () {
				var name = this.getName();
	
				// Check against the specified DTD liternal.
				if (typeof arguments[0] == 'object') return !!arguments[0][name];
	
				// Check for tag names
				for (var i = 0; i < arguments.length; i++) {
					if (arguments[i] == name) return true;
				}
				return false;
			},
	
			/**
	   * Decide whether one element is able to receive cursor.
	   *
	   * @param {Boolean} [textCursor=true] Only consider element that could receive text child.
	   */
			isEditable: function (textCursor) {
				var name = this.getName();
	
				if (this.isReadOnly() || this.getComputedStyle('display') == 'none' || this.getComputedStyle('visibility') == 'hidden' || CKEDITOR.dtd.$nonEditable[name] || CKEDITOR.dtd.$empty[name] || this.is('a') && (this.data('cke-saved-name') || this.hasAttribute('name')) && !this.getChildCount()) {
					return false;
				}
	
				if (textCursor !== false) {
					// Get the element DTD (defaults to span for unknown elements).
					var dtd = CKEDITOR.dtd[name] || CKEDITOR.dtd.span;
					// In the DTD # == text node.
					return !!(dtd && dtd['#']);
				}
	
				return true;
			},
	
			/**
	   * Compare this element's inner html, tag name, attributes, etc. with other one.
	   *
	   * See [W3C's DOM Level 3 spec - node#isEqualNode](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-isEqualNode)
	   * for more details.
	   *
	   * @param {CKEDITOR.dom.element} otherElement Element to compare.
	   * @returns {Boolean}
	   */
			isIdentical: function (otherElement) {
				// do shallow clones, but with IDs
				var thisEl = this.clone(0, 1),
				    otherEl = otherElement.clone(0, 1);
	
				// Remove distractions.
				thisEl.removeAttributes(['_moz_dirty', 'data-cke-expando', 'data-cke-saved-href', 'data-cke-saved-name']);
				otherEl.removeAttributes(['_moz_dirty', 'data-cke-expando', 'data-cke-saved-href', 'data-cke-saved-name']);
	
				// Native comparison available.
				if (thisEl.$.isEqualNode) {
					// Styles order matters.
					thisEl.$.style.cssText = CKEDITOR.tools.normalizeCssText(thisEl.$.style.cssText);
					otherEl.$.style.cssText = CKEDITOR.tools.normalizeCssText(otherEl.$.style.cssText);
					return thisEl.$.isEqualNode(otherEl.$);
				} else {
					thisEl = thisEl.getOuterHtml();
					otherEl = otherEl.getOuterHtml();
	
					// Fix tiny difference between link href in older IEs.
					if (CKEDITOR.env.ie && CKEDITOR.env.version < 9 && this.is('a')) {
						var parent = this.getParent();
						if (parent.type == CKEDITOR.NODE_ELEMENT) {
							var el = parent.clone();
							el.setHtml(thisEl), thisEl = el.getHtml();
							el.setHtml(otherEl), otherEl = el.getHtml();
						}
					}
	
					return thisEl == otherEl;
				}
			},
	
			/**
	   * Checks if this element is visible. May not work if the element is
	   * child of an element with visibility set to `hidden`, but works well
	   * on the great majority of cases.
	   *
	   * @returns {Boolean} True if the element is visible.
	   */
			isVisible: function () {
				var isVisible = (this.$.offsetHeight || this.$.offsetWidth) && this.getComputedStyle('visibility') != 'hidden',
				    elementWindow,
				    elementWindowFrame;
	
				// Webkit and Opera report non-zero offsetHeight despite that
				// element is inside an invisible iframe. (#4542)
				if (isVisible && CKEDITOR.env.webkit) {
					elementWindow = this.getWindow();
	
					if (!elementWindow.equals(CKEDITOR.document.getWindow()) && (elementWindowFrame = elementWindow.$.frameElement)) isVisible = new CKEDITOR.dom.element(elementWindowFrame).isVisible();
				}
	
				return !!isVisible;
			},
	
			/**
	   * Whether it's an empty inline elements which has no visual impact when removed.
	   *
	   * @returns {Boolean}
	   */
			isEmptyInlineRemoveable: function () {
				if (!CKEDITOR.dtd.$removeEmpty[this.getName()]) return false;
	
				var children = this.getChildren();
				for (var i = 0, count = children.count(); i < count; i++) {
					var child = children.getItem(i);
	
					if (child.type == CKEDITOR.NODE_ELEMENT && child.data('cke-bookmark')) continue;
	
					if (child.type == CKEDITOR.NODE_ELEMENT && !child.isEmptyInlineRemoveable() || child.type == CKEDITOR.NODE_TEXT && CKEDITOR.tools.trim(child.getText())) return false;
				}
				return true;
			},
	
			/**
	   * Checks if the element has any defined attributes.
	   *
	   *		var element = CKEDITOR.dom.element.createFromHtml( '<div title="Test">Example</div>' );
	   *		alert( element.hasAttributes() ); // true
	   *
	   *		var element = CKEDITOR.dom.element.createFromHtml( '<div>Example</div>' );
	   *		alert( element.hasAttributes() ); // false
	   *
	   * @method
	   * @returns {Boolean} True if the element has attributes.
	   */
			hasAttributes: CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function () {
				var attributes = this.$.attributes;
	
				for (var i = 0; i < attributes.length; i++) {
					var attribute = attributes[i];
	
					switch (attribute.nodeName) {
						case 'class':
							// IE has a strange bug. If calling removeAttribute('className'),
							// the attributes collection will still contain the "class"
							// attribute, which will be marked as "specified", even if the
							// outerHTML of the element is not displaying the class attribute.
							// Note : I was not able to reproduce it outside the editor,
							// but I've faced it while working on the TC of #1391.
							if (this.getAttribute('class')) {
								return true;
							}
	
						// Attributes to be ignored.
						/* falls through */
						case 'data-cke-expando':
							continue;
	
						/* falls through */
						default:
							if (attribute.specified) {
								return true;
							}
					}
				}
	
				return false;
			} : function () {
				var attrs = this.$.attributes,
				    attrsNum = attrs.length;
	
				// The _moz_dirty attribute might get into the element after pasting (#5455)
				var execludeAttrs = { 'data-cke-expando': 1, _moz_dirty: 1 };
	
				return attrsNum > 0 && (attrsNum > 2 || !execludeAttrs[attrs[0].nodeName] || attrsNum == 2 && !execludeAttrs[attrs[1].nodeName]);
			},
	
			/**
	   * Checks if the specified attribute is defined for this element.
	   *
	   * @method
	   * @param {String} name The attribute name.
	   * @returns {Boolean} `true` if the specified attribute is defined.
	   */
			hasAttribute: function () {
				function ieHasAttribute(name) {
					var $attr = this.$.attributes.getNamedItem(name);
	
					if (this.getName() == 'input') {
						switch (name) {
							case 'class':
								return this.$.className.length > 0;
							case 'checked':
								return !!this.$.checked;
							case 'value':
								var type = this.getAttribute('type');
								return type == 'checkbox' || type == 'radio' ? this.$.value != 'on' : !!this.$.value;
						}
					}
	
					if (!$attr) return false;
	
					return $attr.specified;
				}
	
				if (CKEDITOR.env.ie) {
					if (CKEDITOR.env.version < 8) {
						return function (name) {
							// On IE < 8 the name attribute cannot be retrieved
							// right after the element creation and setting the
							// name with setAttribute.
							if (name == 'name') return !!this.$.name;
	
							return ieHasAttribute.call(this, name);
						};
					} else {
						return ieHasAttribute;
					}
				} else {
					return function (name) {
						// On other browsers specified property is deprecated and return always true,
						// but fortunately $.attributes contains only specified attributes.
						return !!this.$.attributes.getNamedItem(name);
					};
				}
			}(),
	
			/**
	   * Hides this element (sets `display: none`).
	   *
	   *		var element = CKEDITOR.document.getById( 'myElement' );
	   *		element.hide();
	   */
			hide: function () {
				this.setStyle('display', 'none');
			},
	
			/**
	   * Moves this element's children to the target element.
	   *
	   * @param {CKEDITOR.dom.element} target
	   * @param {Boolean} [toStart=false] Insert moved children at the
	   * beginning of the target element.
	   */
			moveChildren: function (target, toStart) {
				var $ = this.$;
				target = target.$;
	
				if ($ == target) return;
	
				var child;
	
				if (toStart) {
					while (child = $.lastChild) target.insertBefore($.removeChild(child), target.firstChild);
				} else {
					while (child = $.firstChild) target.appendChild($.removeChild(child));
				}
			},
	
			/**
	   * Merges sibling elements that are identical to this one.
	   *
	   * Identical child elements are also merged. For example:
	   *
	   *		<b><i></i></b><b><i></i></b> => <b><i></i></b>
	   *
	   * @method
	   * @param {Boolean} [inlineOnly=true] Allow only inline elements to be merged.
	   */
			mergeSiblings: function () {
				function mergeElements(element, sibling, isNext) {
					if (sibling && sibling.type == CKEDITOR.NODE_ELEMENT) {
						// Jumping over bookmark nodes and empty inline elements, e.g. <b><i></i></b>,
						// queuing them to be moved later. (#5567)
						var pendingNodes = [];
	
						while (sibling.data('cke-bookmark') || sibling.isEmptyInlineRemoveable()) {
							pendingNodes.push(sibling);
							sibling = isNext ? sibling.getNext() : sibling.getPrevious();
							if (!sibling || sibling.type != CKEDITOR.NODE_ELEMENT) return;
						}
	
						if (element.isIdentical(sibling)) {
							// Save the last child to be checked too, to merge things like
							// <b><i></i></b><b><i></i></b> => <b><i></i></b>
							var innerSibling = isNext ? element.getLast() : element.getFirst();
	
							// Move pending nodes first into the target element.
							while (pendingNodes.length) pendingNodes.shift().move(element, !isNext);
	
							sibling.moveChildren(element, !isNext);
							sibling.remove();
	
							// Now check the last inner child (see two comments above).
							if (innerSibling && innerSibling.type == CKEDITOR.NODE_ELEMENT) innerSibling.mergeSiblings();
						}
					}
				}
	
				return function (inlineOnly) {
					// Merge empty links and anchors also. (#5567)
					if (!(inlineOnly === false || CKEDITOR.dtd.$removeEmpty[this.getName()] || this.is('a'))) {
						return;
					}
	
					mergeElements(this, this.getNext(), true);
					mergeElements(this, this.getPrevious());
				};
			}(),
	
			/**
	   * Shows this element (displays it).
	   *
	   *		var element = CKEDITOR.document.getById( 'myElement' );
	   *		element.show();
	   */
			show: function () {
				this.setStyles({
					display: '',
					visibility: ''
				});
			},
	
			/**
	   * Sets the value of an element attribute.
	   *
	   *		var element = CKEDITOR.document.getById( 'myElement' );
	   *		element.setAttribute( 'class', 'myClass' );
	   *		element.setAttribute( 'title', 'This is an example' );
	   *
	   * @method
	   * @param {String} name The name of the attribute.
	   * @param {String} value The value to be set to the attribute.
	   * @returns {CKEDITOR.dom.element} This element instance.
	   */
			setAttribute: function () {
				var standard = function (name, value) {
					this.$.setAttribute(name, value);
					return this;
				};
	
				if (CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks)) {
					return function (name, value) {
						if (name == 'class') this.$.className = value;else if (name == 'style') this.$.style.cssText = value;else if (name == 'tabindex') // Case sensitive.
							this.$.tabIndex = value;else if (name == 'checked') this.$.checked = value;else if (name == 'contenteditable') standard.call(this, 'contentEditable', value);else standard.apply(this, arguments);
						return this;
					};
				} else if (CKEDITOR.env.ie8Compat && CKEDITOR.env.secure) {
					return function (name, value) {
						// IE8 throws error when setting src attribute to non-ssl value. (#7847)
						if (name == 'src' && value.match(/^http:\/\//)) {
							try {
								standard.apply(this, arguments);
							} catch (e) {}
						} else {
							standard.apply(this, arguments);
						}
						return this;
					};
				} else {
					return standard;
				}
			}(),
	
			/**
	   * Sets the value of several element attributes.
	   *
	   *		var element = CKEDITOR.document.getById( 'myElement' );
	   *		element.setAttributes( {
	   *			'class':	'myClass',
	   *			title:		'This is an example'
	   *		} );
	   *
	   * @chainable
	   * @param {Object} attributesPairs An object containing the names and
	   * values of the attributes.
	   * @returns {CKEDITOR.dom.element} This element instance.
	   */
			setAttributes: function (attributesPairs) {
				for (var name in attributesPairs) this.setAttribute(name, attributesPairs[name]);
				return this;
			},
	
			/**
	   * Sets the element value. This function is usually used with form
	   * field element.
	   *
	   * @chainable
	   * @param {String} value The element value.
	   * @returns {CKEDITOR.dom.element} This element instance.
	   */
			setValue: function (value) {
				this.$.value = value;
				return this;
			},
	
			/**
	   * Removes an attribute from the element.
	   *
	   *		var element = CKEDITOR.dom.element.createFromHtml( '<div class="classA"></div>' );
	   *		element.removeAttribute( 'class' );
	   *
	   * @method
	   * @param {String} name The attribute name.
	   */
			removeAttribute: function () {
				var standard = function (name) {
					this.$.removeAttribute(name);
				};
	
				if (CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks)) {
					return function (name) {
						if (name == 'class') name = 'className';else if (name == 'tabindex') name = 'tabIndex';else if (name == 'contenteditable') name = 'contentEditable';
						standard.call(this, name);
					};
				} else {
					return standard;
				}
			}(),
	
			/**
	   * Removes all element's attributes or just given ones.
	   *
	   * @param {Array} [attributes] The array with attributes names.
	   */
			removeAttributes: function (attributes) {
				if (CKEDITOR.tools.isArray(attributes)) {
					for (var i = 0; i < attributes.length; i++) {
						this.removeAttribute(attributes[i]);
					}
				} else {
					attributes = attributes || this.getAttributes();
	
					for (var attr in attributes) {
						attributes.hasOwnProperty(attr) && this.removeAttribute(attr);
					}
				}
			},
	
			/**
	   * Removes a style from the element.
	   *
	   *		var element = CKEDITOR.dom.element.createFromHtml( '<div style="display:none"></div>' );
	   *		element.removeStyle( 'display' );
	   *
	   * @method
	   * @param {String} name The style name.
	   */
			removeStyle: function (name) {
				// Removes the specified property from the current style object.
				var $ = this.$.style;
	
				// "removeProperty" need to be specific on the following styles.
				if (!$.removeProperty && (name == 'border' || name == 'margin' || name == 'padding')) {
					var names = expandedRules(name);
					for (var i = 0; i < names.length; i++) this.removeStyle(names[i]);
					return;
				}
	
				$.removeProperty ? $.removeProperty(name) : $.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(name));
	
				// Eventually remove empty style attribute.
				if (!this.$.style.cssText) this.removeAttribute('style');
			},
	
			/**
	   * Sets the value of an element style.
	   *
	   *		var element = CKEDITOR.document.getById( 'myElement' );
	   *		element.setStyle( 'background-color', '#ff0000' );
	   *		element.setStyle( 'margin-top', '10px' );
	   *		element.setStyle( 'float', 'right' );
	   *
	   * @param {String} name The name of the style. The CSS naming notation
	   * must be used (e.g. `background-color`).
	   * @param {String} value The value to be set to the style.
	   * @returns {CKEDITOR.dom.element} This element instance.
	   */
			setStyle: function (name, value) {
				this.$.style[CKEDITOR.tools.cssStyleToDomStyle(name)] = value;
				return this;
			},
	
			/**
	   * Sets the value of several element styles.
	   *
	   *		var element = CKEDITOR.document.getById( 'myElement' );
	   *		element.setStyles( {
	   *			position:	'absolute',
	   *			float:		'right'
	   *		} );
	   *
	   * @param {Object} stylesPairs An object containing the names and
	   * values of the styles.
	   * @returns {CKEDITOR.dom.element} This element instance.
	   */
			setStyles: function (stylesPairs) {
				for (var name in stylesPairs) this.setStyle(name, stylesPairs[name]);
				return this;
			},
	
			/**
	   * Sets the opacity of an element.
	   *
	   *		var element = CKEDITOR.document.getById( 'myElement' );
	   *		element.setOpacity( 0.75 );
	   *
	   * @param {Number} opacity A number within the range `[0.0, 1.0]`.
	   */
			setOpacity: function (opacity) {
				if (CKEDITOR.env.ie && CKEDITOR.env.version < 9) {
					opacity = Math.round(opacity * 100);
					this.setStyle('filter', opacity >= 100 ? '' : 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + opacity + ')');
				} else {
					this.setStyle('opacity', opacity);
				}
			},
	
			/**
	   * Makes the element and its children unselectable.
	   *
	   *		var element = CKEDITOR.document.getById( 'myElement' );
	   *		element.unselectable();
	   *
	   * @method
	   */
			unselectable: function () {
				// CSS unselectable.
				this.setStyles(CKEDITOR.tools.cssVendorPrefix('user-select', 'none'));
	
				// For IE/Opera which doesn't support for the above CSS style,
				// the unselectable="on" attribute only specifies the selection
				// process cannot start in the element itself, and it doesn't inherit.
				if (CKEDITOR.env.ie) {
					this.setAttribute('unselectable', 'on');
	
					var element,
					    elements = this.getElementsByTag('*');
	
					for (var i = 0, count = elements.count(); i < count; i++) {
						element = elements.getItem(i);
						element.setAttribute('unselectable', 'on');
					}
				}
			},
	
			/**
	   * Gets closest positioned (`position != static`) ancestor.
	   *
	   * @returns {CKEDITOR.dom.element} Positioned ancestor or `null`.
	   */
			getPositionedAncestor: function () {
				var current = this;
				while (current.getName() != 'html') {
					if (current.getComputedStyle('position') != 'static') return current;
	
					current = current.getParent();
				}
				return null;
			},
	
			/**
	   * Gets this element's position in document.
	   *
	   * @param {CKEDITOR.dom.document} [refDocument]
	   * @returns {Object} Element's position.
	   * @returns {Number} return.x
	   * @returns {Number} return.y
	   * @todo refDocument
	   */
			getDocumentPosition: function (refDocument) {
				var x = 0,
				    y = 0,
				    doc = this.getDocument(),
				    body = doc.getBody(),
				    quirks = doc.$.compatMode == 'BackCompat';
	
				if (document.documentElement.getBoundingClientRect && (CKEDITOR.env.ie ? CKEDITOR.env.version !== 8 : true)) {
					var box = this.$.getBoundingClientRect(),
					    $doc = doc.$,
					    $docElem = $doc.documentElement;
	
					var clientTop = $docElem.clientTop || body.$.clientTop || 0,
					    clientLeft = $docElem.clientLeft || body.$.clientLeft || 0,
					    needAdjustScrollAndBorders = true;
	
					// #3804: getBoundingClientRect() works differently on IE and non-IE
					// browsers, regarding scroll positions.
					//
					// On IE, the top position of the <html> element is always 0, no matter
					// how much you scrolled down.
					//
					// On other browsers, the top position of the <html> element is negative
					// scrollTop.
					if (CKEDITOR.env.ie) {
						var inDocElem = doc.getDocumentElement().contains(this),
						    inBody = doc.getBody().contains(this);
	
						needAdjustScrollAndBorders = quirks && inBody || !quirks && inDocElem;
					}
	
					// #12747.
					if (needAdjustScrollAndBorders) {
						var scrollRelativeLeft, scrollRelativeTop;
	
						// See #12758 to know more about document.(documentElement|body).scroll(Left|Top) in Webkit.
						if (CKEDITOR.env.webkit || CKEDITOR.env.ie && CKEDITOR.env.version >= 12) {
							scrollRelativeLeft = body.$.scrollLeft || $docElem.scrollLeft;
							scrollRelativeTop = body.$.scrollTop || $docElem.scrollTop;
						} else {
							var scrollRelativeElement = quirks ? body.$ : $docElem;
	
							scrollRelativeLeft = scrollRelativeElement.scrollLeft;
							scrollRelativeTop = scrollRelativeElement.scrollTop;
						}
	
						x = box.left + scrollRelativeLeft - clientLeft;
						y = box.top + scrollRelativeTop - clientTop;
					}
				} else {
					var current = this,
					    previous = null,
					    offsetParent;
					while (current && !(current.getName() == 'body' || current.getName() == 'html')) {
						x += current.$.offsetLeft - current.$.scrollLeft;
						y += current.$.offsetTop - current.$.scrollTop;
	
						// Opera includes clientTop|Left into offsetTop|Left.
						if (!current.equals(this)) {
							x += current.$.clientLeft || 0;
							y += current.$.clientTop || 0;
						}
	
						var scrollElement = previous;
						while (scrollElement && !scrollElement.equals(current)) {
							x -= scrollElement.$.scrollLeft;
							y -= scrollElement.$.scrollTop;
							scrollElement = scrollElement.getParent();
						}
	
						previous = current;
						current = (offsetParent = current.$.offsetParent) ? new CKEDITOR.dom.element(offsetParent) : null;
					}
				}
	
				if (refDocument) {
					var currentWindow = this.getWindow(),
					    refWindow = refDocument.getWindow();
	
					if (!currentWindow.equals(refWindow) && currentWindow.$.frameElement) {
						var iframePosition = new CKEDITOR.dom.element(currentWindow.$.frameElement).getDocumentPosition(refDocument);
	
						x += iframePosition.x;
						y += iframePosition.y;
					}
				}
	
				if (!document.documentElement.getBoundingClientRect) {
					// In Firefox, we'll endup one pixel before the element positions,
					// so we must add it here.
					if (CKEDITOR.env.gecko && !quirks) {
						x += this.$.clientLeft ? 1 : 0;
						y += this.$.clientTop ? 1 : 0;
					}
				}
	
				return { x: x, y: y };
			},
	
			/**
	   * Make any page element visible inside the browser viewport.
	   *
	   * @param {Boolean} [alignToTop=false]
	   */
			scrollIntoView: function (alignToTop) {
				var parent = this.getParent();
				if (!parent) return;
	
				// Scroll the element into parent container from the inner out.
				do {
					// Check ancestors that overflows.
					var overflowed = parent.$.clientWidth && parent.$.clientWidth < parent.$.scrollWidth || parent.$.clientHeight && parent.$.clientHeight < parent.$.scrollHeight;
	
					// Skip body element, which will report wrong clientHeight when containing
					// floated content. (#9523)
					if (overflowed && !parent.is('body')) this.scrollIntoParent(parent, alignToTop, 1);
	
					// Walk across the frame.
					if (parent.is('html')) {
						var win = parent.getWindow();
	
						// Avoid security error.
						try {
							var iframe = win.$.frameElement;
							iframe && (parent = new CKEDITOR.dom.element(iframe));
						} catch (er) {}
					}
				} while (parent = parent.getParent());
			},
	
			/**
	   * Make any page element visible inside one of the ancestors by scrolling the parent.
	   *
	   * @param {CKEDITOR.dom.element/CKEDITOR.dom.window} parent The container to scroll into.
	   * @param {Boolean} [alignToTop] Align the element's top side with the container's
	   * when `true` is specified; align the bottom with viewport bottom when
	   * `false` is specified. Otherwise scroll on either side with the minimum
	   * amount to show the element.
	   * @param {Boolean} [hscroll] Whether horizontal overflow should be considered.
	   */
			scrollIntoParent: function (parent, alignToTop, hscroll) {
				!parent && (parent = this.getWindow());
	
				var doc = parent.getDocument();
				var isQuirks = doc.$.compatMode == 'BackCompat';
	
				// On window <html> is scrolled while quirks scrolls <body>.
				if (parent instanceof CKEDITOR.dom.window) parent = isQuirks ? doc.getBody() : doc.getDocumentElement();
	
				// Scroll the parent by the specified amount.
				function scrollBy(x, y) {
					// Webkit doesn't support "scrollTop/scrollLeft"
					// on documentElement/body element.
					if (/body|html/.test(parent.getName())) parent.getWindow().$.scrollBy(x, y);else {
						parent.$.scrollLeft += x;
						parent.$.scrollTop += y;
					}
				}
	
				// Figure out the element position relative to the specified window.
				function screenPos(element, refWin) {
					var pos = { x: 0, y: 0 };
	
					if (!element.is(isQuirks ? 'body' : 'html')) {
						var box = element.$.getBoundingClientRect();
						pos.x = box.left, pos.y = box.top;
					}
	
					var win = element.getWindow();
					if (!win.equals(refWin)) {
						var outerPos = screenPos(CKEDITOR.dom.element.get(win.$.frameElement), refWin);
						pos.x += outerPos.x, pos.y += outerPos.y;
					}
	
					return pos;
				}
	
				// calculated margin size.
				function margin(element, side) {
					return parseInt(element.getComputedStyle('margin-' + side) || 0, 10) || 0;
				}
	
				var win = parent.getWindow();
	
				var thisPos = screenPos(this, win),
				    parentPos = screenPos(parent, win),
				    eh = this.$.offsetHeight,
				    ew = this.$.offsetWidth,
				    ch = parent.$.clientHeight,
				    cw = parent.$.clientWidth,
				    lt,
				    br;
	
				// Left-top margins.
				lt = {
					x: thisPos.x - margin(this, 'left') - parentPos.x || 0,
					y: thisPos.y - margin(this, 'top') - parentPos.y || 0
				};
	
				// Bottom-right margins.
				br = {
					x: thisPos.x + ew + margin(this, 'right') - (parentPos.x + cw) || 0,
					y: thisPos.y + eh + margin(this, 'bottom') - (parentPos.y + ch) || 0
				};
	
				// 1. Do the specified alignment as much as possible;
				// 2. Otherwise be smart to scroll only the minimum amount;
				// 3. Never cut at the top;
				// 4. DO NOT scroll when already visible.
				if (lt.y < 0 || br.y > 0) scrollBy(0, alignToTop === true ? lt.y : alignToTop === false ? br.y : lt.y < 0 ? lt.y : br.y);
	
				if (hscroll && (lt.x < 0 || br.x > 0)) scrollBy(lt.x < 0 ? lt.x : br.x, 0);
			},
	
			/**
	   * Switch the `class` attribute to reflect one of the triple states of an
	   * element in one of {@link CKEDITOR#TRISTATE_ON}, {@link CKEDITOR#TRISTATE_OFF}
	   * or {@link CKEDITOR#TRISTATE_DISABLED}.
	   *
	   *		link.setState( CKEDITOR.TRISTATE_ON );
	   *		// <a class="cke_on" aria-pressed="true">...</a>
	   *		link.setState( CKEDITOR.TRISTATE_OFF );
	   *		// <a class="cke_off">...</a>
	   *		link.setState( CKEDITOR.TRISTATE_DISABLED );
	   *		// <a class="cke_disabled" aria-disabled="true">...</a>
	   *
	   *		span.setState( CKEDITOR.TRISTATE_ON, 'cke_button' );
	   *		// <span class="cke_button_on">...</span>
	   *
	   * @param {Number} state Indicate the element state. One of {@link CKEDITOR#TRISTATE_ON},
	   * {@link CKEDITOR#TRISTATE_OFF}, {@link CKEDITOR#TRISTATE_DISABLED}.
	   * @param [base='cke'] The prefix apply to each of the state class name.
	   * @param [useAria=true] Whether toggle the ARIA state attributes besides of class name change.
	   */
			setState: function (state, base, useAria) {
				base = base || 'cke';
	
				switch (state) {
					case CKEDITOR.TRISTATE_ON:
						this.addClass(base + '_on');
						this.removeClass(base + '_off');
						this.removeClass(base + '_disabled');
						useAria && this.setAttribute('aria-pressed', true);
						useAria && this.removeAttribute('aria-disabled');
						break;
	
					case CKEDITOR.TRISTATE_DISABLED:
						this.addClass(base + '_disabled');
						this.removeClass(base + '_off');
						this.removeClass(base + '_on');
						useAria && this.setAttribute('aria-disabled', true);
						useAria && this.removeAttribute('aria-pressed');
						break;
	
					default:
						this.addClass(base + '_off');
						this.removeClass(base + '_on');
						this.removeClass(base + '_disabled');
						useAria && this.removeAttribute('aria-pressed');
						useAria && this.removeAttribute('aria-disabled');
						break;
				}
			},
	
			/**
	   * Returns the inner document of this `<iframe>` element.
	   *
	   * @returns {CKEDITOR.dom.document} The inner document.
	   */
			getFrameDocument: function () {
				var $ = this.$;
	
				try {
					// In IE, with custom document.domain, it may happen that
					// the iframe is not yet available, resulting in "Access
					// Denied" for the following property access.
					$.contentWindow.document;
				} catch (e) {
					// Trick to solve this issue, forcing the iframe to get ready
					// by simply setting its "src" property.
					$.src = $.src;
				}
	
				return $ && new CKEDITOR.dom.document($.contentWindow.document);
			},
	
			/**
	   * Copy all the attributes from one node to the other, kinda like a clone
	   * skipAttributes is an object with the attributes that must **not** be copied.
	   *
	   * @param {CKEDITOR.dom.element} dest The destination element.
	   * @param {Object} skipAttributes A dictionary of attributes to skip.
	   */
			copyAttributes: function (dest, skipAttributes) {
				var attributes = this.$.attributes;
				skipAttributes = skipAttributes || {};
	
				for (var n = 0; n < attributes.length; n++) {
					var attribute = attributes[n];
	
					// Lowercase attribute name hard rule is broken for
					// some attribute on IE, e.g. CHECKED.
					var attrName = attribute.nodeName.toLowerCase(),
					    attrValue;
	
					// We can set the type only once, so do it with the proper value, not copying it.
					if (attrName in skipAttributes) continue;
	
					if (attrName == 'checked' && (attrValue = this.getAttribute(attrName))) dest.setAttribute(attrName, attrValue);
					// IE contains not specified attributes in $.attributes so we need to check
					// if elements attribute is specified using hasAttribute.
					else if (!CKEDITOR.env.ie || this.hasAttribute(attrName)) {
							attrValue = this.getAttribute(attrName);
							if (attrValue === null) attrValue = attribute.nodeValue;
	
							dest.setAttribute(attrName, attrValue);
						}
				}
	
				// The style:
				if (this.$.style.cssText !== '') dest.$.style.cssText = this.$.style.cssText;
			},
	
			/**
	   * Changes the tag name of the current element.
	   *
	   * @param {String} newTag The new tag for the element.
	   */
			renameNode: function (newTag) {
				// If it's already correct exit here.
				if (this.getName() == newTag) return;
	
				var doc = this.getDocument();
	
				// Create the new node.
				var newNode = new CKEDITOR.dom.element(newTag, doc);
	
				// Copy all attributes.
				this.copyAttributes(newNode);
	
				// Move children to the new node.
				this.moveChildren(newNode);
	
				// Replace the node.
				this.getParent(true) && this.$.parentNode.replaceChild(newNode.$, this.$);
				newNode.$['data-cke-expando'] = this.$['data-cke-expando'];
				this.$ = newNode.$;
				// Bust getName's cache. (#8663)
				delete this.getName;
			},
	
			/**
	   * Gets a DOM tree descendant under the current node.
	   *
	   *		var strong = p.getChild( 0 );
	   *
	   * @method
	   * @param {Array/Number} indices The child index or array of child indices under the node.
	   * @returns {CKEDITOR.dom.node} The specified DOM child under the current node. Null if child does not exist.
	   */
			getChild: function () {
				function getChild(rawNode, index) {
					var childNodes = rawNode.childNodes;
	
					if (index >= 0 && index < childNodes.length) return childNodes[index];
				}
	
				return function (indices) {
					var rawNode = this.$;
	
					if (!indices.slice) rawNode = getChild(rawNode, indices);else {
						indices = indices.slice();
						while (indices.length > 0 && rawNode) rawNode = getChild(rawNode, indices.shift());
					}
	
					return rawNode ? new CKEDITOR.dom.node(rawNode) : null;
				};
			}(),
	
			/**
	   * Gets number of element's children.
	   *
	   * @returns {Number}
	   */
			getChildCount: function () {
				return this.$.childNodes.length;
			},
	
			/**
	   * Disables browser's context menu in this element.
	   */
			disableContextMenu: function () {
				this.on('contextmenu', function (evt) {
					// Cancel the browser context menu.
					if (!evt.data.getTarget().getAscendant(enablesContextMenu, true)) evt.data.preventDefault();
				});
	
				function enablesContextMenu(node) {
					return node.type == CKEDITOR.NODE_ELEMENT && node.hasClass('cke_enable_context_menu');
				}
			},
	
			/**
	   * Gets element's direction. Supports both CSS `direction` prop and `dir` attr.
	   */
			getDirection: function (useComputed) {
				if (useComputed) {
					return this.getComputedStyle('direction') || this.getDirection() || this.getParent() && this.getParent().getDirection(1) || this.getDocument().$.dir || 'ltr';
				} else {
					return this.getStyle('direction') || this.getAttribute('dir');
				}
			},
	
			/**
	   * Gets, sets and removes custom data to be stored as HTML5 data-* attributes.
	   *
	   *		element.data( 'extra-info', 'test' );	// Appended the attribute data-extra-info="test" to the element.
	   *		alert( element.data( 'extra-info' ) );	// 'test'
	   *		element.data( 'extra-info', false );	// Remove the data-extra-info attribute from the element.
	   *
	   * @param {String} name The name of the attribute, excluding the `data-` part.
	   * @param {String} [value] The value to set. If set to false, the attribute will be removed.
	   */
			data: function (name, value) {
				name = 'data-' + name;
				if (value === undefined) return this.getAttribute(name);else if (value === false) this.removeAttribute(name);else this.setAttribute(name, value);
	
				return null;
			},
	
			/**
	   * Retrieves an editor instance which is based on this element (if any).
	   * It basically loops over {@link CKEDITOR#instances} in search for an instance
	   * that uses the element.
	   *
	   *		var element = new CKEDITOR.dom.element( 'div' );
	   *		element.appendTo( CKEDITOR.document.getBody() );
	   *		CKEDITOR.replace( element );
	   *		alert( element.getEditor().name ); // 'editor1'
	   *
	   * @returns {CKEDITOR.editor} An editor instance or null if nothing has been found.
	   */
			getEditor: function () {
				var instances = CKEDITOR.instances,
				    name,
				    instance;
	
				for (name in instances) {
					instance = instances[name];
	
					if (instance.element.equals(this) && instance.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO) return instance;
				}
	
				return null;
			},
	
			/**
	   * Returns list of elements within this element that match specified `selector`.
	   *
	   * **Notes:**
	   *
	   *	* Not available in IE7.
	   *	* Returned list is not a live collection (like a result of native `querySelectorAll`).
	   *	* Unlike native `querySelectorAll` this method ensures selector contextualization. This is:
	   *
	   *			HTML:		'<body><div><i>foo</i></div></body>'
	   *			Native:		div.querySelectorAll( 'body i' ) // ->		[ <i>foo</i> ]
	   *			Method:		div.find( 'body i' ) // ->					[]
	   *						div.find( 'i' ) // ->						[ <i>foo</i> ]
	   *
	   * @since 4.3
	   * @param {String} selector
	   * @returns {CKEDITOR.dom.nodeList}
	   */
			find: function (selector) {
				var removeTmpId = createTmpId(this),
				    list = new CKEDITOR.dom.nodeList(this.$.querySelectorAll(getContextualizedSelector(this, selector)));
	
				removeTmpId();
	
				return list;
			},
	
			/**
	   * Returns first element within this element that matches specified `selector`.
	   *
	   * **Notes:**
	   *
	   *	* Not available in IE7.
	   *	* Unlike native `querySelectorAll` this method ensures selector contextualization. This is:
	   *
	   *			HTML:		'<body><div><i>foo</i></div></body>'
	   *			Native:		div.querySelector( 'body i' ) // ->			<i>foo</i>
	   *			Method:		div.findOne( 'body i' ) // ->				null
	   *						div.findOne( 'i' ) // ->					<i>foo</i>
	   *
	   * @since 4.3
	   * @param {String} selector
	   * @returns {CKEDITOR.dom.element}
	   */
			findOne: function (selector) {
				var removeTmpId = createTmpId(this),
				    found = this.$.querySelector(getContextualizedSelector(this, selector));
	
				removeTmpId();
	
				return found ? new CKEDITOR.dom.element(found) : null;
			},
	
			/**
	   * Traverse the DOM of this element (inclusive), executing a callback for
	   * each node.
	   *
	   *		var element = CKEDITOR.dom.element.createFromHtml( '<div><p>foo<b>bar</b>bom</p></div>' );
	   *		element.forEach( function( node ) {
	   *			console.log( node );
	   *		} );
	   *		// Will log:
	   *		// 1. <div> element,
	   *		// 2. <p> element,
	   *		// 3. "foo" text node,
	   *		// 4. <b> element,
	   *		// 5. "bar" text node,
	   *		// 6. "bom" text node.
	   *
	   * @since 4.3
	   * @param {Function} callback Function to be executed on every node.
	   * If `callback` returns `false` descendants of the node will be ignored.
	   * @param {CKEDITOR.htmlParser.node} callback.node Node passed as argument.
	   * @param {Number} [type] If specified `callback` will be executed only on
	   * nodes of this type.
	   * @param {Boolean} [skipRoot] Don't execute `callback` on this element.
	   */
			forEach: function (callback, type, skipRoot) {
				if (!skipRoot && (!type || this.type == type)) var ret = callback(this);
	
				// Do not filter children if callback returned false.
				if (ret === false) return;
	
				var children = this.getChildren(),
				    node,
				    i = 0;
	
				// We do not cache the size, because the live list of nodes may be changed by the callback.
				for (; i < children.count(); i++) {
					node = children.getItem(i);
					if (node.type == CKEDITOR.NODE_ELEMENT) node.forEach(callback, type);else if (!type || node.type == type) callback(node);
				}
			}
		});
	
		function createTmpId(element) {
			var hadId = true;
	
			if (!element.$.id) {
				element.$.id = 'cke_tmp_' + CKEDITOR.tools.getNextNumber();
				hadId = false;
			}
	
			return function () {
				if (!hadId) element.removeAttribute('id');
			};
		}
	
		function getContextualizedSelector(element, selector) {
			var id = CKEDITOR.tools.escapeCss(element.$.id);
			return '#' + id + ' ' + selector.split(/,\s*/).join(', #' + id + ' ');
		}
	
		var sides = {
			width: ['border-left-width', 'border-right-width', 'padding-left', 'padding-right'],
			height: ['border-top-width', 'border-bottom-width', 'padding-top', 'padding-bottom']
		};
	
		// Generate list of specific style rules, applicable to margin/padding/border.
		function expandedRules(style) {
			var sides = ['top', 'left', 'right', 'bottom'],
			    components;
	
			if (style == 'border') components = ['color', 'style', 'width'];
	
			var styles = [];
			for (var i = 0; i < sides.length; i++) {
	
				if (components) {
					for (var j = 0; j < components.length; j++) styles.push([style, sides[i], components[j]].join('-'));
				} else {
					styles.push([style, sides[i]].join('-'));
				}
			}
	
			return styles;
		}
	
		function marginAndPaddingSize(type) {
			var adjustment = 0;
			for (var i = 0, len = sides[type].length; i < len; i++) adjustment += parseInt(this.getComputedStyle(sides[type][i]) || 0, 10) || 0;
			return adjustment;
		}
	
		/**
	  * Sets the element size considering the box model.
	  *
	  * @param {'width'/'height'} type The dimension to set.
	  * @param {Number} size The length unit in px.
	  * @param {Boolean} isBorderBox Apply the size based on the border box model.
	  */
		CKEDITOR.dom.element.prototype.setSize = function (type, size, isBorderBox) {
			if (typeof size == 'number') {
				if (isBorderBox && !(CKEDITOR.env.ie && CKEDITOR.env.quirks)) size -= marginAndPaddingSize.call(this, type);
	
				this.setStyle(type, size + 'px');
			}
		};
	
		/**
	  * Gets the element size, possibly considering the box model.
	  *
	  * @param {'width'/'height'} type The dimension to get.
	  * @param {Boolean} isBorderBox Get the size based on the border box model.
	  */
		CKEDITOR.dom.element.prototype.getSize = function (type, isBorderBox) {
			var size = Math.max(this.$['offset' + CKEDITOR.tools.capitalize(type)], this.$['client' + CKEDITOR.tools.capitalize(type)]) || 0;
	
			if (isBorderBox) size -= marginAndPaddingSize.call(this, type);
	
			return size;
		};
	})();

/***/ },
/* 18 */
/*!**************************************!*\
  !*** ./core/dom/documentfragment.js ***!
  \**************************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * DocumentFragment is a "lightweight" or "minimal" Document object. It is
	 * commonly used to extract a portion of a document's tree or to create a new
	 * fragment of a document. Various operations may take document fragment objects
	 * as arguments and result in all the child nodes of the document fragment being
	 * moved to the child list of this node.
	 *
	 * @class
	 * @constructor Creates a document fragment class instance.
	 * @param {CKEDITOR.dom.document/DocumentFragment} [nodeOrDoc=CKEDITOR.document]
	 */
	CKEDITOR.dom.documentFragment = function (nodeOrDoc) {
		nodeOrDoc = nodeOrDoc || CKEDITOR.document;
	
		if (nodeOrDoc.type == CKEDITOR.NODE_DOCUMENT) this.$ = nodeOrDoc.$.createDocumentFragment();else this.$ = nodeOrDoc;
	};
	
	CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype, CKEDITOR.dom.element.prototype, {
		/**
	  * The node type. This is a constant value set to {@link CKEDITOR#NODE_DOCUMENT_FRAGMENT}.
	  *
	  * @readonly
	  * @property {Number} [=CKEDITOR.NODE_DOCUMENT_FRAGMENT]
	  */
		type: CKEDITOR.NODE_DOCUMENT_FRAGMENT,
	
		/**
	  * Inserts the document fragment content after the specified node.
	  *
	  * @param {CKEDITOR.dom.node} node
	  */
		insertAfterNode: function (node) {
			node = node.$;
			node.parentNode.insertBefore(this.$, node.nextSibling);
		},
	
		/**
	  * Gets HTML of this document fragment's children.
	  *
	  * @since 4.5
	  * @returns {String} The HTML of this document fragment's children.
	  */
		getHtml: function () {
			var container = new CKEDITOR.dom.element('div');
	
			this.clone(1, 1).appendTo(container);
	
			return container.getHtml().replace(/\s*data-cke-expando=".*?"/g, '');
		}
	}, true, {
		'append': 1, 'appendBogus': 1, 'clone': 1, 'getFirst': 1, 'getHtml': 1, 'getLast': 1, 'getParent': 1, 'getNext': 1, 'getPrevious': 1,
		'appendTo': 1, 'moveChildren': 1, 'insertBefore': 1, 'insertAfterNode': 1, 'replace': 1, 'trim': 1, 'type': 1,
		'ltrim': 1, 'rtrim': 1, 'getDocument': 1, 'getChildCount': 1, 'getChild': 1, 'getChildren': 1
	});

/***/ },
/* 19 */
/*!****************************!*\
  !*** ./core/dom/walker.js ***!
  \****************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	(function () {
		// This function is to be called under a "walker" instance scope.
		function iterate(rtl, breakOnFalse) {
			var range = this.range;
	
			// Return null if we have reached the end.
			if (this._.end) return null;
	
			// This is the first call. Initialize it.
			if (!this._.start) {
				this._.start = 1;
	
				// A collapsed range must return null at first call.
				if (range.collapsed) {
					this.end();
					return null;
				}
	
				// Move outside of text node edges.
				range.optimize();
			}
	
			var node,
			    startCt = range.startContainer,
			    endCt = range.endContainer,
			    startOffset = range.startOffset,
			    endOffset = range.endOffset,
			    guard,
			    userGuard = this.guard,
			    type = this.type,
			    getSourceNodeFn = rtl ? 'getPreviousSourceNode' : 'getNextSourceNode';
	
			// Create the LTR guard function, if necessary.
			if (!rtl && !this._.guardLTR) {
				// The node that stops walker from moving up.
				var limitLTR = endCt.type == CKEDITOR.NODE_ELEMENT ? endCt : endCt.getParent();
	
				// The node that stops the walker from going to next.
				var blockerLTR = endCt.type == CKEDITOR.NODE_ELEMENT ? endCt.getChild(endOffset) : endCt.getNext();
	
				this._.guardLTR = function (node, movingOut) {
					return (!movingOut || !limitLTR.equals(node)) && (!blockerLTR || !node.equals(blockerLTR)) && (node.type != CKEDITOR.NODE_ELEMENT || !movingOut || !node.equals(range.root));
				};
			}
	
			// Create the RTL guard function, if necessary.
			if (rtl && !this._.guardRTL) {
				// The node that stops walker from moving up.
				var limitRTL = startCt.type == CKEDITOR.NODE_ELEMENT ? startCt : startCt.getParent();
	
				// The node that stops the walker from going to next.
				var blockerRTL = startCt.type == CKEDITOR.NODE_ELEMENT ? startOffset ? startCt.getChild(startOffset - 1) : null : startCt.getPrevious();
	
				this._.guardRTL = function (node, movingOut) {
					return (!movingOut || !limitRTL.equals(node)) && (!blockerRTL || !node.equals(blockerRTL)) && (node.type != CKEDITOR.NODE_ELEMENT || !movingOut || !node.equals(range.root));
				};
			}
	
			// Define which guard function to use.
			var stopGuard = rtl ? this._.guardRTL : this._.guardLTR;
	
			// Make the user defined guard function participate in the process,
			// otherwise simply use the boundary guard.
			if (userGuard) {
				guard = function (node, movingOut) {
					if (stopGuard(node, movingOut) === false) return false;
	
					return userGuard(node, movingOut);
				};
			} else {
				guard = stopGuard;
			}
	
			if (this.current) node = this.current[getSourceNodeFn](false, type, guard);else {
				// Get the first node to be returned.
				if (rtl) {
					node = endCt;
	
					if (node.type == CKEDITOR.NODE_ELEMENT) {
						if (endOffset > 0) node = node.getChild(endOffset - 1);else node = guard(node, true) === false ? null : node.getPreviousSourceNode(true, type, guard);
					}
				} else {
					node = startCt;
	
					if (node.type == CKEDITOR.NODE_ELEMENT) {
						if (!(node = node.getChild(startOffset))) node = guard(startCt, true) === false ? null : startCt.getNextSourceNode(true, type, guard);
					}
				}
	
				if (node && guard(node) === false) node = null;
			}
	
			while (node && !this._.end) {
				this.current = node;
	
				if (!this.evaluator || this.evaluator(node) !== false) {
					if (!breakOnFalse) return node;
				} else if (breakOnFalse && this.evaluator) {
					return false;
				}
	
				node = node[getSourceNodeFn](false, type, guard);
			}
	
			this.end();
			return this.current = null;
		}
	
		function iterateToLast(rtl) {
			var node,
			    last = null;
	
			while (node = iterate.call(this, rtl)) last = node;
	
			return last;
		}
	
		/**
	  * Utility class to "walk" the DOM inside range boundaries. If the
	  * range starts or ends in the middle of the text node, this node will
	  * be included as a whole. Outside changes to the range may break the walker.
	  *
	  * The walker may return nodes that are not totally included in the
	  * range boundaries. Let us take the following range representation,
	  * where the square brackets indicate the boundaries:
	  *
	  *		[<p>Some <b>sample] text</b>
	  *
	  * While walking forward into the above range, the following nodes are
	  * returned: `<p>`, `"Some "`, `<b>` and `"sample"`. Going
	  * backwards instead we have: `"sample"` and `"Some "`. So note that the
	  * walker always returns nodes when "entering" them, but not when
	  * "leaving" them. The {@link #guard} function is instead called both when
	  * entering and when leaving nodes.
	  *
	  * @class
	  */
		CKEDITOR.dom.walker = CKEDITOR.tools.createClass({
			/**
	   * Creates a walker class instance.
	   *
	   * @constructor
	   * @param {CKEDITOR.dom.range} range The range within which to walk.
	   */
			$: function (range) {
				this.range = range;
	
				/**
	    * A function executed for every matched node to check whether
	    * it is to be considered in the walk or not. If not provided, all
	    * matched nodes are considered good.
	    *
	    * If the function returns `false`, the node is ignored.
	    *
	    * @property {Function} evaluator
	    */
				// this.evaluator = null;
	
				/**
	    * A function executed for every node the walk passes by to check
	    * whether the walk is to be finished. It is called both when
	    * entering and when exiting nodes, as well as for the matched nodes.
	    *
	    * If this function returns `false`, the walking ends and no more
	    * nodes are evaluated.
	   	 * @property {Function} guard
	    */
				// this.guard = null;
	
				/** @private */
				this._ = {};
			},
	
			//		statics :
			//		{
			//			/* Creates a CKEDITOR.dom.walker instance to walk inside DOM boundaries set by nodes.
			//			 * @param {CKEDITOR.dom.node} startNode The node from which the walk
			//			 *		will start.
			//			 * @param {CKEDITOR.dom.node} [endNode] The last node to be considered
			//			 *		in the walk. No more nodes are retrieved after touching or
			//			 *		passing it. If not provided, the walker stops at the
			//			 *		&lt;body&gt; closing boundary.
			//			 * @returns {CKEDITOR.dom.walker} A DOM walker for the nodes between the
			//			 *		provided nodes.
			//			 */
			//			createOnNodes : function( startNode, endNode, startInclusive, endInclusive )
			//			{
			//				var range = new CKEDITOR.dom.range();
			//				if ( startNode )
			//					range.setStartAt( startNode, startInclusive ? CKEDITOR.POSITION_BEFORE_START : CKEDITOR.POSITION_AFTER_END ) ;
			//				else
			//					range.setStartAt( startNode.getDocument().getBody(), CKEDITOR.POSITION_AFTER_START ) ;
			//
			//				if ( endNode )
			//					range.setEndAt( endNode, endInclusive ? CKEDITOR.POSITION_AFTER_END : CKEDITOR.POSITION_BEFORE_START ) ;
			//				else
			//					range.setEndAt( startNode.getDocument().getBody(), CKEDITOR.POSITION_BEFORE_END ) ;
			//
			//				return new CKEDITOR.dom.walker( range );
			//			}
			//		},
			//
			proto: {
				/**
	    * Stops walking. No more nodes are retrieved if this function is called.
	    */
				end: function () {
					this._.end = 1;
				},
	
				/**
	    * Retrieves the next node (on the right).
	    *
	    * @returns {CKEDITOR.dom.node} The next node or `null` if no more
	    * nodes are available.
	    */
				next: function () {
					return iterate.call(this);
				},
	
				/**
	    * Retrieves the previous node (on the left).
	    *
	    * @returns {CKEDITOR.dom.node} The previous node or `null` if no more
	    * nodes are available.
	    */
				previous: function () {
					return iterate.call(this, 1);
				},
	
				/**
	    * Checks all nodes on the right, executing the evaluation function.
	    *
	    * @returns {Boolean} `false` if the evaluator function returned
	    * `false` for any of the matched nodes. Otherwise `true`.
	    */
				checkForward: function () {
					return iterate.call(this, 0, 1) !== false;
				},
	
				/**
	    * Check all nodes on the left, executing the evaluation function.
	    *
	    * @returns {Boolean} `false` if the evaluator function returned
	    * `false` for any of the matched nodes. Otherwise `true`.
	    */
				checkBackward: function () {
					return iterate.call(this, 1, 1) !== false;
				},
	
				/**
	    * Executes a full walk forward (to the right), until no more nodes
	    * are available, returning the last valid node.
	    *
	    * @returns {CKEDITOR.dom.node} The last node on the right or `null`
	    * if no valid nodes are available.
	    */
				lastForward: function () {
					return iterateToLast.call(this);
				},
	
				/**
	    * Executes a full walk backwards (to the left), until no more nodes
	    * are available, returning the last valid node.
	    *
	    * @returns {CKEDITOR.dom.node} The last node on the left or `null`
	    * if no valid nodes are available.
	    */
				lastBackward: function () {
					return iterateToLast.call(this, 1);
				},
	
				/**
	    * Resets the walker.
	    */
				reset: function () {
					delete this.current;
					this._ = {};
				}
	
			}
		});
	
		// Anything whose display computed style is block, list-item, table,
		// table-row-group, table-header-group, table-footer-group, table-row,
		// table-column-group, table-column, table-cell, table-caption, or whose node
		// name is hr, br (when enterMode is br only) is a block boundary.
		var blockBoundaryDisplayMatch = {
			block: 1, 'list-item': 1, table: 1, 'table-row-group': 1,
			'table-header-group': 1, 'table-footer-group': 1, 'table-row': 1, 'table-column-group': 1,
			'table-column': 1, 'table-cell': 1, 'table-caption': 1
		},
		    outOfFlowPositions = { absolute: 1, fixed: 1 };
	
		/**
	  * Checks whether an element is displayed as a block.
	  *
	  * @member CKEDITOR.dom.element
	  * @param [customNodeNames] Custom list of nodes which will extend
	  * the default {@link CKEDITOR.dtd#$block} list.
	  * @returns {Boolean}
	  */
		CKEDITOR.dom.element.prototype.isBlockBoundary = function (customNodeNames) {
			// Whether element is in normal page flow. Floated or positioned elements are out of page flow.
			// Don't consider floated or positioned formatting as block boundary, fall back to dtd check in that case. (#6297)
			var inPageFlow = this.getComputedStyle('float') == 'none' && !(this.getComputedStyle('position') in outOfFlowPositions);
	
			if (inPageFlow && blockBoundaryDisplayMatch[this.getComputedStyle('display')]) return true;
	
			// Either in $block or in customNodeNames if defined.
			return !!(this.is(CKEDITOR.dtd.$block) || customNodeNames && this.is(customNodeNames));
		};
	
		/**
	  * Returns a function which checks whether the node is a block boundary.
	  * See {@link CKEDITOR.dom.element#isBlockBoundary}.
	  *
	  * @static
	  * @param customNodeNames
	  * @returns {Function}
	  */
		CKEDITOR.dom.walker.blockBoundary = function (customNodeNames) {
			return function (node) {
				return !(node.type == CKEDITOR.NODE_ELEMENT && node.isBlockBoundary(customNodeNames));
			};
		};
	
		/**
	  * @static
	  * @todo
	  */
		CKEDITOR.dom.walker.listItemBoundary = function () {
			return this.blockBoundary({ br: 1 });
		};
	
		/**
	  * Returns a function which checks whether the node is a bookmark node or the bookmark node
	  * inner content.
	  *
	  * @static
	  * @param {Boolean} [contentOnly=false] Whether only test against the text content of
	  * a bookmark node instead of the element itself (default).
	  * @param {Boolean} [isReject=false] Whether to return `false` for the bookmark
	  * node instead of `true` (default).
	  * @returns {Function}
	  */
		CKEDITOR.dom.walker.bookmark = function (contentOnly, isReject) {
			function isBookmarkNode(node) {
				return node && node.getName && node.getName() == 'span' && node.data('cke-bookmark');
			}
	
			return function (node) {
				var isBookmark, parent;
				// Is bookmark inner text node?
				isBookmark = node && node.type != CKEDITOR.NODE_ELEMENT && (parent = node.getParent()) && isBookmarkNode(parent);
				// Is bookmark node?
				isBookmark = contentOnly ? isBookmark : isBookmark || isBookmarkNode(node);
				return !!(isReject ^ isBookmark);
			};
		};
	
		/**
	  * Returns a function which checks whether the node is a text node containing only whitespace characters.
	  *
	  * @static
	  * @param {Boolean} [isReject=false]
	  * @returns {Function}
	  */
		CKEDITOR.dom.walker.whitespaces = function (isReject) {
			return function (node) {
				var isWhitespace;
				if (node && node.type == CKEDITOR.NODE_TEXT) {
					// Whitespace, as well as the Filling Char Sequence text node used in Webkit. (#9384, #13816)
					isWhitespace = !CKEDITOR.tools.trim(node.getText()) || CKEDITOR.env.webkit && node.getText() == CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE;
				}
	
				return !!(isReject ^ isWhitespace);
			};
		};
	
		/**
	  * Returns a function which checks whether the node is invisible in the WYSIWYG mode.
	  *
	  * @static
	  * @param {Boolean} [isReject=false]
	  * @returns {Function}
	  */
		CKEDITOR.dom.walker.invisible = function (isReject) {
			var whitespace = CKEDITOR.dom.walker.whitespaces(),
	
			// #12221 (Chrome) plus #11111 (Safari).
			offsetWidth0 = CKEDITOR.env.webkit ? 1 : 0;
	
			return function (node) {
				var invisible;
	
				if (whitespace(node)) invisible = 1;else {
					// Visibility should be checked on element.
					if (node.type == CKEDITOR.NODE_TEXT) node = node.getParent();
	
					// Nodes that take no spaces in wysiwyg:
					// 1. White-spaces but not including NBSP.
					// 2. Empty inline elements, e.g. <b></b>.
					// 3. <br> elements (bogus, surrounded by text) (#12423).
					invisible = node.$.offsetWidth <= offsetWidth0;
				}
	
				return !!(isReject ^ invisible);
			};
		};
	
		/**
	  * Returns a function which checks whether the node type is equal to the passed one.
	  *
	  * @static
	  * @param {Number} type
	  * @param {Boolean} [isReject=false]
	  * @returns {Function}
	  */
		CKEDITOR.dom.walker.nodeType = function (type, isReject) {
			return function (node) {
				return !!(isReject ^ node.type == type);
			};
		};
	
		/**
	  * Returns a function which checks whether the node is a bogus (filler) node from
	  * `contenteditable` element's point of view.
	  *
	  * @static
	  * @param {Boolean} [isReject=false]
	  * @returns {Function}
	  */
		CKEDITOR.dom.walker.bogus = function (isReject) {
			function nonEmpty(node) {
				return !isWhitespaces(node) && !isBookmark(node);
			}
	
			return function (node) {
				var isBogus = CKEDITOR.env.needsBrFiller ? node.is && node.is('br') : node.getText && tailNbspRegex.test(node.getText());
	
				if (isBogus) {
					var parent = node.getParent(),
					    next = node.getNext(nonEmpty);
	
					isBogus = parent.isBlockBoundary() && (!next || next.type == CKEDITOR.NODE_ELEMENT && next.isBlockBoundary());
				}
	
				return !!(isReject ^ isBogus);
			};
		};
	
		/**
	  * Returns a function which checks whether the node is a temporary element
	  * (element with the `data-cke-temp` attribute) or its child.
	  *
	  * @since 4.3
	  * @static
	  * @param {Boolean} [isReject=false] Whether to return `false` for the
	  * temporary element instead of `true` (default).
	  * @returns {Function}
	  */
		CKEDITOR.dom.walker.temp = function (isReject) {
			return function (node) {
				if (node.type != CKEDITOR.NODE_ELEMENT) node = node.getParent();
	
				var isTemp = node && node.hasAttribute('data-cke-temp');
	
				return !!(isReject ^ isTemp);
			};
		};
	
		var tailNbspRegex = /^[\t\r\n ]*(?:&nbsp;|\xa0)$/,
		    isWhitespaces = CKEDITOR.dom.walker.whitespaces(),
		    isBookmark = CKEDITOR.dom.walker.bookmark(),
		    isTemp = CKEDITOR.dom.walker.temp(),
		    toSkip = function (node) {
			return isBookmark(node) || isWhitespaces(node) || node.type == CKEDITOR.NODE_ELEMENT && node.is(CKEDITOR.dtd.$inline) && !node.is(CKEDITOR.dtd.$empty);
		};
	
		/**
	  * Returns a function which checks whether the node should be ignored in terms of "editability".
	  *
	  * This includes:
	  *
	  * * whitespaces (see {@link CKEDITOR.dom.walker#whitespaces}),
	  * * bookmarks (see {@link CKEDITOR.dom.walker#bookmark}),
	  * * temporary elements (see {@link CKEDITOR.dom.walker#temp}).
	  *
	  * @since 4.3
	  * @static
	  * @param {Boolean} [isReject=false] Whether to return `false` for the
	  * ignored element instead of `true` (default).
	  * @returns {Function}
	  */
		CKEDITOR.dom.walker.ignored = function (isReject) {
			return function (node) {
				var isIgnored = isWhitespaces(node) || isBookmark(node) || isTemp(node);
	
				return !!(isReject ^ isIgnored);
			};
		};
	
		var isIgnored = CKEDITOR.dom.walker.ignored();
	
		/**
	  * Returns a function which checks whether the node is empty.
	  *
	  * @since 4.5
	  * @static
	  * @param {Boolean} [isReject=false] Whether to return `false` for the
	  * ignored element instead of `true` (default).
	  * @returns {Function}
	  */
		CKEDITOR.dom.walker.empty = function (isReject) {
			return function (node) {
				var i = 0,
				    l = node.getChildCount();
	
				for (; i < l; ++i) {
					if (!isIgnored(node.getChild(i))) {
						return !!isReject;
					}
				}
	
				return !isReject;
			};
		};
	
		var isEmpty = CKEDITOR.dom.walker.empty();
	
		function filterTextContainers(dtd) {
			var hash = {},
			    name;
	
			for (name in dtd) {
				if (CKEDITOR.dtd[name]['#']) hash[name] = 1;
			}
			return hash;
		}
	
		/**
	  * A hash of element names which in browsers that {@link CKEDITOR.env#needsBrFiller do not need `<br>` fillers}
	  * can be selection containers despite being empty.
	  *
	  * @since 4.5
	  * @static
	  * @property {Object} validEmptyBlockContainers
	  */
		var validEmptyBlocks = CKEDITOR.dom.walker.validEmptyBlockContainers = CKEDITOR.tools.extend(filterTextContainers(CKEDITOR.dtd.$block), { caption: 1, td: 1, th: 1 });
	
		function isEditable(node) {
			// Skip temporary elements, bookmarks and whitespaces.
			if (isIgnored(node)) return false;
	
			if (node.type == CKEDITOR.NODE_TEXT) return true;
	
			if (node.type == CKEDITOR.NODE_ELEMENT) {
				// All inline and non-editable elements are valid editable places.
				// Note: the <hr> is currently the only element in CKEDITOR.dtd.$empty and CKEDITOR.dtd.$block,
				// but generally speaking we need an intersection of these two sets.
				// Note: non-editable block has to be treated differently (should be selected entirely).
				if (node.is(CKEDITOR.dtd.$inline) || node.is('hr') || node.getAttribute('contenteditable') == 'false') return true;
	
				// Empty blocks are editable on IE.
				if (!CKEDITOR.env.needsBrFiller && node.is(validEmptyBlocks) && isEmpty(node)) return true;
			}
	
			// Skip all other nodes.
			return false;
		}
	
		/**
	  * Returns a function which checks whether the node can be a container or a sibling
	  * of the selection end.
	  *
	  * This includes:
	  *
	  * * text nodes (but not whitespaces),
	  * * inline elements,
	  * * intersection of {@link CKEDITOR.dtd#$empty} and {@link CKEDITOR.dtd#$block} (currently
	  * it is only `<hr>`),
	  * * non-editable blocks (special case &mdash; such blocks cannot be containers nor
	  * siblings, they need to be selected entirely),
	  * * empty {@link #validEmptyBlockContainers blocks} which can contain text
	  * ({@link CKEDITOR.env#needsBrFiller old IEs only}).
	  *
	  * @since 4.3
	  * @static
	  * @param {Boolean} [isReject=false] Whether to return `false` for the
	  * ignored element instead of `true` (default).
	  * @returns {Function}
	  */
		CKEDITOR.dom.walker.editable = function (isReject) {
			return function (node) {
				return !!(isReject ^ isEditable(node));
			};
		};
	
		/**
	  * Checks if there is a filler node at the end of an element, and returns it.
	  *
	  * @member CKEDITOR.dom.element
	  * @returns {CKEDITOR.dom.node/Boolean} Bogus node or `false`.
	  */
		CKEDITOR.dom.element.prototype.getBogus = function () {
			// Bogus are not always at the end, e.g. <p><a>text<br /></a></p> (#7070).
			var tail = this;
			do {
				tail = tail.getPreviousSourceNode();
			} while (toSkip(tail));
	
			if (tail && (CKEDITOR.env.needsBrFiller ? tail.is && tail.is('br') : tail.getText && tailNbspRegex.test(tail.getText()))) return tail;
	
			return false;
		};
	})();

/***/ },
/* 20 */
/*!***************************!*\
  !*** ./core/dom/range.js ***!
  \***************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 *//**
	 * Represents a delimited piece of content in a DOM Document.
	 * It is contiguous in the sense that it can be characterized as selecting all
	 * of the content between a pair of boundary-points.
	 *
	 * This class shares much of the W3C
	 * [Document Object Model Range](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html)
	 * ideas and features, adding several range manipulation tools to it, but it's
	 * not intended to be compatible with it.
	 *
	 *		// Create a range for the entire contents of the editor document body.
	 *		var range = new CKEDITOR.dom.range( editor.document );
	 *		range.selectNodeContents( editor.document.getBody() );
	 *		// Delete the contents.
	 *		range.deleteContents();
	 *
	 * Usually you will want to work on a ranges rooted in the editor's {@link CKEDITOR.editable editable}
	 * element. Such ranges can be created with a shorthand method &ndash; {@link CKEDITOR.editor#createRange editor.createRange}.
	 *
	 *		var range = editor.createRange();
	 *		range.root.equals( editor.editable() ); // -> true
	 *
	 * Note that the {@link #root} of a range is an important property, which limits many
	 * algorithms implemented in range's methods. Therefore it is crucial, especially
	 * when using ranges inside inline editors, to specify correct root, so using
	 * the {@link CKEDITOR.editor#createRange} method is highly recommended.
	 *
	 * ### Selection
	 *
	 * Range is only a logical representation of a piece of content in a DOM. It should not
	 * be confused with a {@link CKEDITOR.dom.selection selection} which represents "physically
	 * marked" content. It is possible to create unlimited number of various ranges, when
	 * only one real selection may exist at a time in a document. Ranges are used to read position
	 * of selection in the DOM and to move selection to new positions.
	 *
	 * The editor selection may be retrieved using the {@link CKEDITOR.editor#getSelection} method:
	 *
	 *		var sel = editor.getSelection(),
	 *			ranges = sel.getRanges(); // CKEDITOR.dom.rangeList instance.
	 *
	 *		var range = ranges[ 0 ];
	 *		range.root; // -> editor's editable element.
	 *
	 * A range can also be selected:
	 *
	 *		var range = editor.createRange();
	 *		range.selectNodeContents( editor.editable() );
	 *		sel.selectRanges( [ range ] );
	 *
	 * @class
	 * @constructor Creates a {@link CKEDITOR.dom.range} instance that can be used inside a specific DOM Document.
	 * @param {CKEDITOR.dom.document/CKEDITOR.dom.element} root The document or element
	 * within which the range will be scoped.
	 * @todo global "TODO" - precise algorithms descriptions needed for the most complex methods like #enlarge.
	 */CKEDITOR.dom.range=function(root){/**
		 * Node within which the range begins.
		 *
		 *		var range = new CKEDITOR.dom.range( editor.document );
		 *		range.selectNodeContents( editor.document.getBody() );
		 *		alert( range.startContainer.getName() ); // 'body'
		 *
		 * @readonly
		 * @property {CKEDITOR.dom.element/CKEDITOR.dom.text}
		 */this.startContainer=null;/**
		 * Offset within the starting node of the range.
		 *
		 *		var range = new CKEDITOR.dom.range( editor.document );
		 *		range.selectNodeContents( editor.document.getBody() );
		 *		alert( range.startOffset ); // 0
		 *
		 * @readonly
		 * @property {Number}
		 */this.startOffset=null;/**
		 * Node within which the range ends.
		 *
		 *		var range = new CKEDITOR.dom.range( editor.document );
		 *		range.selectNodeContents( editor.document.getBody() );
		 *		alert( range.endContainer.getName() ); // 'body'
		 *
		 * @readonly
		 * @property {CKEDITOR.dom.element/CKEDITOR.dom.text}
		 */this.endContainer=null;/**
		 * Offset within the ending node of the range.
		 *
		 *		var range = new CKEDITOR.dom.range( editor.document );
		 *		range.selectNodeContents( editor.document.getBody() );
		 *		alert( range.endOffset ); // == editor.document.getBody().getChildCount()
		 *
		 * @readonly
		 * @property {Number}
		 */this.endOffset=null;/**
		 * Indicates that this is a collapsed range. A collapsed range has its
		 * start and end boundaries at the very same point so nothing is contained
		 * in it.
		 *
		 *		var range = new CKEDITOR.dom.range( editor.document );
		 *		range.selectNodeContents( editor.document.getBody() );
		 *		alert( range.collapsed ); // false
		 *		range.collapse();
		 *		alert( range.collapsed ); // true
		 *
		 * @readonly
		 */this.collapsed=true;var isDocRoot=root instanceof CKEDITOR.dom.document;/**
		 * The document within which the range can be used.
		 *
		 *		// Selects the body contents of the range document.
		 *		range.selectNodeContents( range.document.getBody() );
		 *
		 * @readonly
		 * @property {CKEDITOR.dom.document}
		 */this.document=isDocRoot?root:root.getDocument();/**
		 * The ancestor DOM element within which the range manipulation are limited.
		 *
		 * @readonly
		 * @property {CKEDITOR.dom.element}
		 */this.root=isDocRoot?root.getBody():root;};(function(){// Updates the "collapsed" property for the given range object.
	function updateCollapsed(range){range.collapsed=range.startContainer&&range.endContainer&&range.startContainer.equals(range.endContainer)&&range.startOffset==range.endOffset;}// This is a shared function used to delete, extract and clone the range content.
	//
	// The outline of the algorithm:
	//
	// 1. Normalization. We handle special cases, split text nodes if we can, find boundary nodes (startNode and endNode).
	// 2. Gathering data.
	//   * We start by creating two arrays of boundary nodes parents. You can imagine these arrays as lines limiting
	//   the tree from the left and right and thus marking the part which is selected by the range. The both lines
	//   start in the same node which is the range.root and end in startNode and endNode.
	//   * Then we find min level and max levels. Level represents all nodes which are equally far from the range.root.
	//   Min level is the level at which the left and right boundaries diverged (the first diverged level). And max levels
	//   are how deep the start and end nodes are nested.
	// 3. Cloning/extraction.
	//   * We start iterating over start node parents (left branch) from min level and clone the parent (usually shallow clone,
	//   because we know that it's not fully selected) and its right siblings (deep clone, because they are fully selected).
	//   We iterate over siblings up to meeting end node parent or end of the siblings chain.
	//   * We clone level after level down to the startNode.
	//   * Then we do the same with end node parents (right branch), because it may contains notes we omit during the previous
	//   step, for example if the right branch is deeper then left branch. Things are more complicated here because we have to
	//   watch out for nodes that were already cloned.
	//   * ***Note:** Setting `cloneId` option to `false` for **extraction** works for partially selected elements only.
	//   See range.extractContents to know more.
	// 4. Clean up.
	//   * There are two things we need to do - updating the range position and perform the action of the "mergeThen"
	//   param (see range.deleteContents or range.extractContents).
	//   See comments in mergeAndUpdate because this is lots of fun too.
	function execContentsAction(range,action,docFrag,mergeThen,cloneId){'use strict';range.optimizeBookmark();var isDelete=action===0;var isExtract=action==1;var isClone=action==2;var doClone=isClone||isExtract;var startNode=range.startContainer;var endNode=range.endContainer;var startOffset=range.startOffset;var endOffset=range.endOffset;var cloneStartNode;var cloneEndNode;var doNotRemoveStartNode;var doNotRemoveEndNode;var cloneStartText;var cloneEndText;// Handle here an edge case where we clone a range which is located in one text node.
	// This allows us to not think about startNode == endNode case later on.
	// We do that only when cloning, because in other cases we can safely split this text node
	// and hence we can easily handle this case as many others.
	if(isClone&&endNode.type==CKEDITOR.NODE_TEXT&&startNode.equals(endNode)){startNode=range.document.createText(startNode.substring(startOffset,endOffset));docFrag.append(startNode);return;}// For text containers, we must simply split the node and point to the
	// second part. The removal will be handled by the rest of the code.
	if(endNode.type==CKEDITOR.NODE_TEXT){// If Extract or Delete we can split the text node,
	// but if Clone (2), then we cannot modify the DOM (#11586) so we mark the text node for cloning.
	if(!isClone){endNode=endNode.split(endOffset);}else{cloneEndText=true;}}else{// If there's no node after the range boundary we set endNode to the previous node
	// and mark it to be cloned.
	if(endNode.getChildCount()>0){// If the offset points after the last node.
	if(endOffset>=endNode.getChildCount()){endNode=endNode.getChild(endOffset-1);cloneEndNode=true;}else{endNode=endNode.getChild(endOffset);}}// The end container is empty (<h1>]</h1>), but we want to clone it, although not remove.
	else{cloneEndNode=true;doNotRemoveEndNode=true;}}// For text containers, we must simply split the node. The removal will
	// be handled by the rest of the code .
	if(startNode.type==CKEDITOR.NODE_TEXT){// If Extract or Delete we can split the text node,
	// but if Clone (2), then we cannot modify the DOM (#11586) so we mark
	// the text node for cloning.
	if(!isClone){startNode.split(startOffset);}else{cloneStartText=true;}}else{// If there's no node before the range boundary we set startNode to the next node
	// and mark it to be cloned.
	if(startNode.getChildCount()>0){if(startOffset===0){startNode=startNode.getChild(startOffset);cloneStartNode=true;}else{startNode=startNode.getChild(startOffset-1);}}// The start container is empty (<h1>[</h1>), but we want to clone it, although not remove.
	else{cloneStartNode=true;doNotRemoveStartNode=true;}}// Get the parent nodes tree for the start and end boundaries.
	var startParents=startNode.getParents(),endParents=endNode.getParents(),// Level at which start and end boundaries diverged.
	minLevel=findMinLevel(),maxLevelLeft=startParents.length-1,maxLevelRight=endParents.length-1,// Keeps the frag/element which is parent of the level that we are currently cloning.
	levelParent=docFrag,nextLevelParent,leftNode,rightNode,nextSibling,// Keeps track of the last connected level (on which left and right branches are connected)
	// Usually this is minLevel, but not always.
	lastConnectedLevel=-1;// THE LEFT BRANCH.
	for(var level=minLevel;level<=maxLevelLeft;level++){leftNode=startParents[level];nextSibling=leftNode.getNext();// 1.
	// The first step is to handle partial selection of the left branch.
	// Max depth of the left branch. It means that ( leftSibling == endNode ).
	// We also check if the leftNode isn't only partially selected, because in this case
	// we want to make a shallow clone of it (the else part).
	if(level==maxLevelLeft&&!(leftNode.equals(endParents[level])&&maxLevelLeft<maxLevelRight)){if(cloneStartNode){consume(leftNode,levelParent,false,doNotRemoveStartNode);}else if(cloneStartText){levelParent.append(range.document.createText(leftNode.substring(startOffset)));}}else if(doClone){nextLevelParent=levelParent.append(leftNode.clone(0,cloneId));}// 2.
	// The second step is to handle full selection of the content between the left branch and the right branch.
	while(nextSibling){// We can't clone entire endParent just like we can't clone entire startParent -
	// - they are not fully selected with the range. Partial endParent selection
	// will be cloned in the next loop.
	if(nextSibling.equals(endParents[level])){lastConnectedLevel=level;break;}nextSibling=consume(nextSibling,levelParent);}levelParent=nextLevelParent;}// Reset levelParent, because we reset the level.
	levelParent=docFrag;// THE RIGHT BRANCH.
	for(level=minLevel;level<=maxLevelRight;level++){rightNode=endParents[level];nextSibling=rightNode.getPrevious();// Do not process this node if it is shared with the left branch
	// because it was already processed.
	//
	// Note: Don't worry about text nodes selection - if the entire range was placed in a single text node
	// it was handled as a special case at the beginning. In other cases when startNode == endNode
	// or when on this level leftNode == rightNode (so rightNode.equals( startParents[ level ] ))
	// this node was handled by the previous loop.
	if(!rightNode.equals(startParents[level])){// 1.
	// The first step is to handle partial selection of the right branch.
	// Max depth of the right branch. It means that ( rightNode == endNode ).
	// We also check if the rightNode isn't only partially selected, because in this case
	// we want to make a shallow clone of it (the else part).
	if(level==maxLevelRight&&!(rightNode.equals(startParents[level])&&maxLevelRight<maxLevelLeft)){if(cloneEndNode){consume(rightNode,levelParent,false,doNotRemoveEndNode);}else if(cloneEndText){levelParent.append(range.document.createText(rightNode.substring(0,endOffset)));}}else if(doClone){nextLevelParent=levelParent.append(rightNode.clone(0,cloneId));}// 2.
	// The second step is to handle all left (selected) siblings of the rightNode which
	// have not yet been handled. If the level branches were connected, the previous loop
	// already copied all siblings (except the current rightNode).
	if(level>lastConnectedLevel){while(nextSibling){nextSibling=consume(nextSibling,levelParent,true);}}levelParent=nextLevelParent;}else if(doClone){// If this is "shared" node and we are in cloning mode we have to update levelParent to
	// reflect that we visited the node (even though we didn't process it).
	// If we don't do that, in next iterations nodes will be appended to wrong parent.
	//
	// We can just take first child because the algorithm guarantees
	// that this will be the only child on this level. (#13568)
	levelParent=levelParent.getChild(0);}}// Delete or Extract.
	// We need to update the range and if mergeThen was passed do it.
	if(!isClone){mergeAndUpdate();}// Depending on an action:
	// * clones node and adds to new parent,
	// * removes node,
	// * moves node to the new parent.
	function consume(node,newParent,toStart,forceClone){var nextSibling=toStart?node.getPrevious():node.getNext();// We do not clone if we are only deleting, so do nothing.
	if(forceClone&&isDelete){return nextSibling;}// If cloning, just clone it.
	if(isClone||forceClone){newParent.append(node.clone(true,cloneId),toStart);}else{// Both Delete and Extract will remove the node.
	node.remove();// When Extracting, move the removed node to the docFrag.
	if(isExtract){newParent.append(node);}}return nextSibling;}// Finds a level number on which both branches starts diverging.
	// If such level does not exist, return the last on which both branches have nodes.
	function findMinLevel(){// Compare them, to find the top most siblings.
	var i,topStart,topEnd,maxLevel=Math.min(startParents.length,endParents.length);for(i=0;i<maxLevel;i++){topStart=startParents[i];topEnd=endParents[i];// The compared nodes will match until we find the top most siblings (different nodes that have the same parent).
	// "i" will hold the index in the parents array for the top most element.
	if(!topStart.equals(topEnd)){return i;}}// When startNode == endNode.
	return i-1;}// Executed only when deleting or extracting to update range position
	// and perform the merge operation.
	function mergeAndUpdate(){var commonLevel=minLevel-1,boundariesInEmptyNode=doNotRemoveStartNode&&doNotRemoveEndNode&&!startNode.equals(endNode);// If a node has been partially selected, collapse the range between
	// startParents[ minLevel + 1 ] and endParents[ minLevel + 1 ] (the first diverged elements).
	// Otherwise, simply collapse it to the start. (W3C specs).
	//
	// All clear, right?
	//
	// It took me few hours to truly understand a previous version of this condition.
	// Mine seems to be more straightforward (even if it doesn't look so) and I could leave you here
	// without additional comments, but I'm not that mean so here goes the explanation.
	//
	// We want to know if both ends of the range are anchored in the same element. Really. It's this simple.
	// But why? Because we need to differentiate situations like:
	//
	// <p>foo[<b>x</b>bar]y</p>		(commonLevel = p, maxLL = "foo", maxLR = "y")
	// from:
	// <p>foo<b>x[</b>bar]y</p>		(commonLevel = p, maxLL = "x", maxLR = "y")
	//
	// In the first case we can collapse the range to the left, because simply everything between range's
	// boundaries was removed.
	// In the second case we must place the range after </b>, because <b> was only **partially selected**.
	//
	// * <b> is our startParents[ commonLevel + 1 ]
	// * "y" is our endParents[ commonLevel + 1 ].
	//
	// By now "bar" is removed from the DOM so <b> is a direct sibling of "y":
	// <p>foo<b>x</b>y</p>
	//
	// Therefore it's enough to place the range between <b> and "y".
	//
	// Now, what does the comparison mean? Why not just taking startNode and endNode and checking
	// their parents? Because the tree is already changed and they may be gone. Plus, thanks to
	// cloneStartNode and cloneEndNode, that would be reaaaaly tricky.
	//
	// So we play with levels which can give us the same information:
	// * commonLevel - the level of common ancestor,
	// * maxLevel - 1 - the level of range boundary parent (range boundary is here like a bookmark span).
	// * commonLevel < maxLevel - 1 - whether the range boundary is not a child of common ancestor.
	//
	// There's also an edge case in which both range boundaries were placed in empty nodes like:
	// <p>[</p><p>]</p>
	// Those boundaries were not removed, but in this case start and end nodes are child of the common ancestor.
	// We handle this edge case separately.
	if(commonLevel<maxLevelLeft-1||commonLevel<maxLevelRight-1||boundariesInEmptyNode){if(boundariesInEmptyNode){range.moveToPosition(endNode,CKEDITOR.POSITION_BEFORE_START);}else if(maxLevelRight==commonLevel+1&&cloneEndNode){// The maxLevelRight + 1 element could be already removed so we use the fact that
	// we know that it was the last element in its parent.
	range.moveToPosition(endParents[commonLevel],CKEDITOR.POSITION_BEFORE_END);}else{range.moveToPosition(endParents[commonLevel+1],CKEDITOR.POSITION_BEFORE_START);}// Merge split parents.
	if(mergeThen){// Find the first diverged node in the left branch.
	var topLeft=startParents[commonLevel+1];// TopLeft may simply not exist if commonLevel == maxLevel or may be a text node.
	if(topLeft&&topLeft.type==CKEDITOR.NODE_ELEMENT){var span=CKEDITOR.dom.element.createFromHtml('<span '+'data-cke-bookmark="1" style="display:none">&nbsp;</span>',range.document);span.insertAfter(topLeft);topLeft.mergeSiblings(false);range.moveToBookmark({startNode:span});}}}else{// Collapse it to the start.
	range.collapse(true);}}}var inlineChildReqElements={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,'var':1};// Creates the appropriate node evaluator for the dom walker used inside
	// check(Start|End)OfBlock.
	function getCheckStartEndBlockEvalFunction(){var skipBogus=false,whitespaces=CKEDITOR.dom.walker.whitespaces(),bookmarkEvaluator=CKEDITOR.dom.walker.bookmark(true),isBogus=CKEDITOR.dom.walker.bogus();return function(node){// First skip empty nodes
	if(bookmarkEvaluator(node)||whitespaces(node))return true;// Skip the bogus node at the end of block.
	if(isBogus(node)&&!skipBogus){skipBogus=true;return true;}// If there's any visible text, then we're not at the start.
	if(node.type==CKEDITOR.NODE_TEXT&&(node.hasAscendant('pre')||CKEDITOR.tools.trim(node.getText()).length)){return false;}// If there are non-empty inline elements (e.g. <img />), then we're not
	// at the start.
	if(node.type==CKEDITOR.NODE_ELEMENT&&!node.is(inlineChildReqElements))return false;return true;};}var isBogus=CKEDITOR.dom.walker.bogus(),nbspRegExp=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,editableEval=CKEDITOR.dom.walker.editable(),notIgnoredEval=CKEDITOR.dom.walker.ignored(true);// Evaluator for CKEDITOR.dom.element::checkBoundaryOfElement, reject any
	// text node and non-empty elements unless it's being bookmark text.
	function elementBoundaryEval(checkStart){var whitespaces=CKEDITOR.dom.walker.whitespaces(),bookmark=CKEDITOR.dom.walker.bookmark(1);return function(node){// First skip empty nodes.
	if(bookmark(node)||whitespaces(node))return true;// Tolerant bogus br when checking at the end of block.
	// Reject any text node unless it's being bookmark
	// OR it's spaces.
	// Reject any element unless it's being invisible empty. (#3883)
	return!checkStart&&isBogus(node)||node.type==CKEDITOR.NODE_ELEMENT&&node.is(CKEDITOR.dtd.$removeEmpty);};}function getNextEditableNode(isPrevious){return function(){var first;return this[isPrevious?'getPreviousNode':'getNextNode'](function(node){// Cache first not ignorable node.
	if(!first&&notIgnoredEval(node))first=node;// Return true if found editable node, but not a bogus next to start of our lookup (first != bogus).
	return editableEval(node)&&!(isBogus(node)&&node.equals(first));});};}CKEDITOR.dom.range.prototype={/**
			 * Clones this range.
			 *
			 * @returns {CKEDITOR.dom.range}
			 */clone:function(){var clone=new CKEDITOR.dom.range(this.root);clone._setStartContainer(this.startContainer);clone.startOffset=this.startOffset;clone._setEndContainer(this.endContainer);clone.endOffset=this.endOffset;clone.collapsed=this.collapsed;return clone;},/**
			 * Makes the range collapsed by moving its start point (or end point if `toStart==true`)
			 * to the second end.
			 *
			 * @param {Boolean} toStart Collapse range "to start".
			 */collapse:function(toStart){if(toStart){this._setEndContainer(this.startContainer);this.endOffset=this.startOffset;}else{this._setStartContainer(this.endContainer);this.startOffset=this.endOffset;}this.collapsed=true;},/**
			 * Clones content nodes of the range and adds them to a document fragment, which is returned.
			 *
			 * @param {Boolean} [cloneId=true] Whether to preserve ID attributes in the clone.
			 * @returns {CKEDITOR.dom.documentFragment} Document fragment containing a clone of range's content.
			 */cloneContents:function(cloneId){var docFrag=new CKEDITOR.dom.documentFragment(this.document);cloneId=typeof cloneId=='undefined'?true:cloneId;if(!this.collapsed)execContentsAction(this,2,docFrag,false,cloneId);return docFrag;},/**
			 * Deletes the content nodes of the range permanently from the DOM tree.
			 *
			 * @param {Boolean} [mergeThen] Merge any split elements result in DOM true due to partial selection.
			 */deleteContents:function(mergeThen){if(this.collapsed)return;execContentsAction(this,0,null,mergeThen);},/**
			 * The content nodes of the range are cloned and added to a document fragment,
			 * meanwhile they are removed permanently from the DOM tree.
			 *
			 * **Note:** Setting the `cloneId` parameter to `false` works for **partially** selected elements only.
			 * If an element with an ID attribute is **fully enclosed** in a range, it will keep the ID attribute
			 * regardless of the `cloneId` parameter value, because it is not cloned &mdash; it is moved to the returned
			 * document fragment.
			 *
			 * @param {Boolean} [mergeThen] Merge any split elements result in DOM true due to partial selection.
			 * @param {Boolean} [cloneId=true] Whether to preserve ID attributes in the extracted content.
			 * @returns {CKEDITOR.dom.documentFragment} Document fragment containing extracted content.
			 */extractContents:function(mergeThen,cloneId){var docFrag=new CKEDITOR.dom.documentFragment(this.document);cloneId=typeof cloneId=='undefined'?true:cloneId;if(!this.collapsed)execContentsAction(this,1,docFrag,mergeThen,cloneId);return docFrag;},/**
			 * Creates a bookmark object, which can be later used to restore the
			 * range by using the {@link #moveToBookmark} function.
			 *
			 * This is an "intrusive" way to create a bookmark. It includes `<span>` tags
			 * in the range boundaries. The advantage of it is that it is possible to
			 * handle DOM mutations when moving back to the bookmark.
			 *
			 * **Note:** The inclusion of nodes in the DOM is a design choice and
			 * should not be changed as there are other points in the code that may be
			 * using those nodes to perform operations.
			 *
			 * @param {Boolean} [serializable] Indicates that the bookmark nodes
			 * must contain IDs, which can be used to restore the range even
			 * when these nodes suffer mutations (like cloning or `innerHTML` change).
			 * @returns {Object} And object representing a bookmark.
			 * @returns {CKEDITOR.dom.node/String} return.startNode Node or element ID.
			 * @returns {CKEDITOR.dom.node/String} return.endNode Node or element ID.
			 * @returns {Boolean} return.serializable
			 * @returns {Boolean} return.collapsed
			 */createBookmark:function(serializable){var startNode,endNode;var baseId;var clone;var collapsed=this.collapsed;startNode=this.document.createElement('span');startNode.data('cke-bookmark',1);startNode.setStyle('display','none');// For IE, it must have something inside, otherwise it may be
	// removed during DOM operations.
	startNode.setHtml('&nbsp;');if(serializable){baseId='cke_bm_'+CKEDITOR.tools.getNextNumber();startNode.setAttribute('id',baseId+(collapsed?'C':'S'));}// If collapsed, the endNode will not be created.
	if(!collapsed){endNode=startNode.clone();endNode.setHtml('&nbsp;');if(serializable)endNode.setAttribute('id',baseId+'E');clone=this.clone();clone.collapse();clone.insertNode(endNode);}clone=this.clone();clone.collapse(true);clone.insertNode(startNode);// Update the range position.
	if(endNode){this.setStartAfter(startNode);this.setEndBefore(endNode);}else{this.moveToPosition(startNode,CKEDITOR.POSITION_AFTER_END);}return{startNode:serializable?baseId+(collapsed?'C':'S'):startNode,endNode:serializable?baseId+'E':endNode,serializable:serializable,collapsed:collapsed};},/**
			 * Creates a "non intrusive" and "mutation sensible" bookmark. This
			 * kind of bookmark should be used only when the DOM is supposed to
			 * remain stable after its creation.
			 *
			 * @param {Boolean} [normalized] Indicates that the bookmark must
			 * be normalized. When normalized, the successive text nodes are
			 * considered a single node. To successfully load a normalized
			 * bookmark, the DOM tree must also be normalized before calling
			 * {@link #moveToBookmark}.
			 * @returns {Object} An object representing the bookmark.
			 * @returns {Array} return.start Start container's address (see {@link CKEDITOR.dom.node#getAddress}).
			 * @returns {Array} return.end Start container's address.
			 * @returns {Number} return.startOffset
			 * @returns {Number} return.endOffset
			 * @returns {Boolean} return.collapsed
			 * @returns {Boolean} return.normalized
			 * @returns {Boolean} return.is2 This is "bookmark2".
			 */createBookmark2:function(){var isNotText=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_TEXT,true);// Returns true for limit anchored in element and placed between text nodes.
	//
	//               v
	// <p>[text node] [text node]</p> -> true
	//
	//    v
	// <p> [text node]</p> -> false
	//
	//              v
	// <p>[text node][text node]</p> -> false (limit is anchored in text node)
	function betweenTextNodes(container,offset){// Not anchored in element or limit is on the edge.
	if(container.type!=CKEDITOR.NODE_ELEMENT||offset===0||offset==container.getChildCount())return 0;return container.getChild(offset-1).type==CKEDITOR.NODE_TEXT&&container.getChild(offset).type==CKEDITOR.NODE_TEXT;}// Sums lengths of all preceding text nodes.
	function getLengthOfPrecedingTextNodes(node){var sum=0;while((node=node.getPrevious())&&node.type==CKEDITOR.NODE_TEXT)sum+=node.getText().replace(CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE,'').length;return sum;}function normalizeTextNodes(limit){var container=limit.container,offset=limit.offset;// If limit is between text nodes move it to the end of preceding one,
	// because they will be merged.
	if(betweenTextNodes(container,offset)){container=container.getChild(offset-1);offset=container.getLength();}// Now, if limit is anchored in element and has at least one node before it,
	// it may happen that some of them will be merged. Normalize the offset
	// by setting it to normalized index of its preceding, safe node.
	// (safe == one for which getIndex(true) does not return -1, so one which won't disappear).
	if(container.type==CKEDITOR.NODE_ELEMENT&&offset>0){offset=getPrecedingSafeNodeIndex(container,offset)+1;}// The last step - fix the offset inside text node by adding
	// lengths of preceding text nodes which will be merged with container.
	if(container.type==CKEDITOR.NODE_TEXT){var precedingLength=getLengthOfPrecedingTextNodes(container);// Normal case - text node is not empty.
	if(container.getText()){offset+=precedingLength;// Awful case - the text node is empty and thus will be totally lost.
	// In this case we are trying to normalize the limit to the left:
	// * either to the preceding text node,
	// * or to the "gap" after the preceding element.
	}else{// Find the closest non-text sibling.
	var precedingContainer=container.getPrevious(isNotText);// If there are any characters on the left, that means that we can anchor
	// there, because this text node will not be lost.
	if(precedingLength){offset=precedingLength;if(precedingContainer){// The text node is the first node after the closest non-text sibling.
	container=precedingContainer.getNext();}else{// But if there was no non-text sibling, then the text node is the first child.
	container=container.getParent().getFirst();}// If there are no characters on the left, then anchor after the previous non-text node.
	// E.g. (see tests for a legend :D):
	// <b>x</b>(foo)({}bar) -> <b>x</b>[](foo)(bar)
	}else{container=container.getParent();offset=precedingContainer?precedingContainer.getIndex(true)+1:0;}}}limit.container=container;limit.offset=offset;}function normalizeFCSeq(limit,root){var fcseq=root.getCustomData('cke-fillingChar');if(!fcseq){return;}var container=limit.container;if(fcseq.equals(container)){limit.offset-=CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE.length;// == 0		handles case when limit was at the end of FCS.
	//  < 0		handles all cases where limit was somewhere in the middle or at the beginning.
	//  > 0		(the "else" case) means cases where there are some more characters in the FCS node (FCSabc^def).
	if(limit.offset<=0){limit.offset=container.getIndex();limit.container=container.getParent();}return;}// And here goes the funny part - all other cases are handled inside node.getAddress() and getIndex() thanks to
	// node.getIndex() being aware of FCS (handling it as an empty node).
	}// Finds a normalized index of a safe node preceding this one.
	// Safe == one that will not disappear, so one for which getIndex( true ) does not return -1.
	// Return -1 if there's no safe preceding node.
	function getPrecedingSafeNodeIndex(container,offset){var index;while(offset--){index=container.getChild(offset).getIndex(true);if(index>=0)return index;}return-1;}return function(normalized){var collapsed=this.collapsed,bmStart={container:this.startContainer,offset:this.startOffset},bmEnd={container:this.endContainer,offset:this.endOffset};if(normalized){normalizeTextNodes(bmStart);normalizeFCSeq(bmStart,this.root);if(!collapsed){normalizeTextNodes(bmEnd);normalizeFCSeq(bmEnd,this.root);}}return{start:bmStart.container.getAddress(normalized),end:collapsed?null:bmEnd.container.getAddress(normalized),startOffset:bmStart.offset,endOffset:bmEnd.offset,normalized:normalized,collapsed:collapsed,is2:true// It's a createBookmark2 bookmark.
	};};}(),/**
			 * Moves this range to the given bookmark. See {@link #createBookmark} and {@link #createBookmark2}.
			 *
			 * If serializable bookmark passed, then its `<span>` markers will be removed.
			 *
			 * @param {Object} bookmark
			 */moveToBookmark:function(bookmark){// Created with createBookmark2().
	if(bookmark.is2){// Get the start information.
	var startContainer=this.document.getByAddress(bookmark.start,bookmark.normalized),startOffset=bookmark.startOffset;// Get the end information.
	var endContainer=bookmark.end&&this.document.getByAddress(bookmark.end,bookmark.normalized),endOffset=bookmark.endOffset;// Set the start boundary.
	this.setStart(startContainer,startOffset);// Set the end boundary. If not available, collapse it.
	if(endContainer)this.setEnd(endContainer,endOffset);else this.collapse(true);}// Created with createBookmark().
	else{var serializable=bookmark.serializable,startNode=serializable?this.document.getById(bookmark.startNode):bookmark.startNode,endNode=serializable?this.document.getById(bookmark.endNode):bookmark.endNode;// Set the range start at the bookmark start node position.
	this.setStartBefore(startNode);// Remove it, because it may interfere in the setEndBefore call.
	startNode.remove();// Set the range end at the bookmark end node position, or simply
	// collapse it if it is not available.
	if(endNode){this.setEndBefore(endNode);endNode.remove();}else{this.collapse(true);}}},/**
			 * Returns two nodes which are on the boundaries of this range.
			 *
			 * @returns {Object}
			 * @returns {CKEDITOR.dom.node} return.startNode
			 * @returns {CKEDITOR.dom.node} return.endNode
			 * @todo precise desc/algorithm
			 */getBoundaryNodes:function(){var startNode=this.startContainer,endNode=this.endContainer,startOffset=this.startOffset,endOffset=this.endOffset,childCount;if(startNode.type==CKEDITOR.NODE_ELEMENT){childCount=startNode.getChildCount();if(childCount>startOffset){startNode=startNode.getChild(startOffset);}else if(childCount<1){startNode=startNode.getPreviousSourceNode();}// startOffset > childCount but childCount is not 0
	else{// Try to take the node just after the current position.
	startNode=startNode.$;while(startNode.lastChild)startNode=startNode.lastChild;startNode=new CKEDITOR.dom.node(startNode);// Normally we should take the next node in DFS order. But it
	// is also possible that we've already reached the end of
	// document.
	startNode=startNode.getNextSourceNode()||startNode;}}if(endNode.type==CKEDITOR.NODE_ELEMENT){childCount=endNode.getChildCount();if(childCount>endOffset){endNode=endNode.getChild(endOffset).getPreviousSourceNode(true);}else if(childCount<1){endNode=endNode.getPreviousSourceNode();}// endOffset > childCount but childCount is not 0.
	else{// Try to take the node just before the current position.
	endNode=endNode.$;while(endNode.lastChild)endNode=endNode.lastChild;endNode=new CKEDITOR.dom.node(endNode);}}// Sometimes the endNode will come right before startNode for collapsed
	// ranges. Fix it. (#3780)
	if(startNode.getPosition(endNode)&CKEDITOR.POSITION_FOLLOWING)startNode=endNode;return{startNode:startNode,endNode:endNode};},/**
			 * Find the node which fully contains the range.
			 *
			 * @param {Boolean} [includeSelf=false]
			 * @param {Boolean} [ignoreTextNode=false] Whether ignore {@link CKEDITOR#NODE_TEXT} type.
			 * @returns {CKEDITOR.dom.element}
			 */getCommonAncestor:function(includeSelf,ignoreTextNode){var start=this.startContainer,end=this.endContainer,ancestor;if(start.equals(end)){if(includeSelf&&start.type==CKEDITOR.NODE_ELEMENT&&this.startOffset==this.endOffset-1)ancestor=start.getChild(this.startOffset);else ancestor=start;}else{ancestor=start.getCommonAncestor(end);}return ignoreTextNode&&!ancestor.is?ancestor.getParent():ancestor;},/**
			 * Transforms the {@link #startContainer} and {@link #endContainer} properties from text
			 * nodes to element nodes, whenever possible. This is actually possible
			 * if either of the boundary containers point to a text node, and its
			 * offset is set to zero, or after the last char in the node.
			 */optimize:function(){var container=this.startContainer;var offset=this.startOffset;if(container.type!=CKEDITOR.NODE_ELEMENT){if(!offset)this.setStartBefore(container);else if(offset>=container.getLength())this.setStartAfter(container);}container=this.endContainer;offset=this.endOffset;if(container.type!=CKEDITOR.NODE_ELEMENT){if(!offset)this.setEndBefore(container);else if(offset>=container.getLength())this.setEndAfter(container);}},/**
			 * Move the range out of bookmark nodes if they'd been the container.
			 */optimizeBookmark:function(){var startNode=this.startContainer,endNode=this.endContainer;if(startNode.is&&startNode.is('span')&&startNode.data('cke-bookmark'))this.setStartAt(startNode,CKEDITOR.POSITION_BEFORE_START);if(endNode&&endNode.is&&endNode.is('span')&&endNode.data('cke-bookmark'))this.setEndAt(endNode,CKEDITOR.POSITION_AFTER_END);},/**
			 * @param {Boolean} [ignoreStart=false]
			 * @param {Boolean} [ignoreEnd=false]
			 * @todo precise desc/algorithm
			 */trim:function(ignoreStart,ignoreEnd){var startContainer=this.startContainer,startOffset=this.startOffset,collapsed=this.collapsed;if((!ignoreStart||collapsed)&&startContainer&&startContainer.type==CKEDITOR.NODE_TEXT){// If the offset is zero, we just insert the new node before
	// the start.
	if(!startOffset){startOffset=startContainer.getIndex();startContainer=startContainer.getParent();}// If the offset is at the end, we'll insert it after the text
	// node.
	else if(startOffset>=startContainer.getLength()){startOffset=startContainer.getIndex()+1;startContainer=startContainer.getParent();}// In other case, we split the text node and insert the new
	// node at the split point.
	else{var nextText=startContainer.split(startOffset);startOffset=startContainer.getIndex()+1;startContainer=startContainer.getParent();// Check all necessity of updating the end boundary.
	if(this.startContainer.equals(this.endContainer))this.setEnd(nextText,this.endOffset-this.startOffset);else if(startContainer.equals(this.endContainer))this.endOffset+=1;}this.setStart(startContainer,startOffset);if(collapsed){this.collapse(true);return;}}var endContainer=this.endContainer;var endOffset=this.endOffset;if(!(ignoreEnd||collapsed)&&endContainer&&endContainer.type==CKEDITOR.NODE_TEXT){// If the offset is zero, we just insert the new node before
	// the start.
	if(!endOffset){endOffset=endContainer.getIndex();endContainer=endContainer.getParent();}// If the offset is at the end, we'll insert it after the text
	// node.
	else if(endOffset>=endContainer.getLength()){endOffset=endContainer.getIndex()+1;endContainer=endContainer.getParent();}// In other case, we split the text node and insert the new
	// node at the split point.
	else{endContainer.split(endOffset);endOffset=endContainer.getIndex()+1;endContainer=endContainer.getParent();}this.setEnd(endContainer,endOffset);}},/**
			 * Expands the range so that partial units are completely contained.
			 *
			 * @param unit {Number} The unit type to expand with.
			 * @param {Boolean} [excludeBrs=false] Whether include line-breaks when expanding.
			 */enlarge:function(unit,excludeBrs){var leadingWhitespaceRegex=new RegExp(/[^\s\ufeff]/);switch(unit){case CKEDITOR.ENLARGE_INLINE:var enlargeInlineOnly=1;/* falls through */case CKEDITOR.ENLARGE_ELEMENT:if(this.collapsed)return;// Get the common ancestor.
	var commonAncestor=this.getCommonAncestor();var boundary=this.root;// For each boundary
	//		a. Depending on its position, find out the first node to be checked (a sibling) or,
	//			if not available, to be enlarge.
	//		b. Go ahead checking siblings and enlarging the boundary as much as possible until the
	//			common ancestor is not reached. After reaching the common ancestor, just save the
	//			enlargeable node to be used later.
	var startTop,endTop;var enlargeable,sibling,commonReached;// Indicates that the node can be added only if whitespace
	// is available before it.
	var needsWhiteSpace=false;var isWhiteSpace;var siblingText;// Process the start boundary.
	var container=this.startContainer;var offset=this.startOffset;if(container.type==CKEDITOR.NODE_TEXT){if(offset){// Check if there is any non-space text before the
	// offset. Otherwise, container is null.
	container=!CKEDITOR.tools.trim(container.substring(0,offset)).length&&container;// If we found only whitespace in the node, it
	// means that we'll need more whitespace to be able
	// to expand. For example, <i> can be expanded in
	// "A <i> [B]</i>", but not in "A<i> [B]</i>".
	needsWhiteSpace=!!container;}if(container){if(!(sibling=container.getPrevious()))enlargeable=container.getParent();}}else{// If we have offset, get the node preceeding it as the
	// first sibling to be checked.
	if(offset)sibling=container.getChild(offset-1)||container.getLast();// If there is no sibling, mark the container to be
	// enlarged.
	if(!sibling)enlargeable=container;}// Ensures that enlargeable can be indeed enlarged, if not it will be nulled.
	enlargeable=getValidEnlargeable(enlargeable);while(enlargeable||sibling){if(enlargeable&&!sibling){// If we reached the common ancestor, mark the flag
	// for it.
	if(!commonReached&&enlargeable.equals(commonAncestor))commonReached=true;if(enlargeInlineOnly?enlargeable.isBlockBoundary():!boundary.contains(enlargeable))break;// If we don't need space or this element breaks
	// the line, then enlarge it.
	if(!needsWhiteSpace||enlargeable.getComputedStyle('display')!='inline'){needsWhiteSpace=false;// If the common ancestor has been reached,
	// we'll not enlarge it immediately, but just
	// mark it to be enlarged later if the end
	// boundary also enlarges it.
	if(commonReached)startTop=enlargeable;else this.setStartBefore(enlargeable);}sibling=enlargeable.getPrevious();}// Check all sibling nodes preceeding the enlargeable
	// node. The node wil lbe enlarged only if none of them
	// blocks it.
	while(sibling){// This flag indicates that this node has
	// whitespaces at the end.
	isWhiteSpace=false;if(sibling.type==CKEDITOR.NODE_COMMENT){sibling=sibling.getPrevious();continue;}else if(sibling.type==CKEDITOR.NODE_TEXT){siblingText=sibling.getText();if(leadingWhitespaceRegex.test(siblingText))sibling=null;isWhiteSpace=/[\s\ufeff]$/.test(siblingText);}else{// #12221 (Chrome) plus #11111 (Safari).
	var offsetWidth0=CKEDITOR.env.webkit?1:0;// If this is a visible element.
	// We need to check for the bookmark attribute because IE insists on
	// rendering the display:none nodes we use for bookmarks. (#3363)
	// Line-breaks (br) are rendered with zero width, which we don't want to include. (#7041)
	if((sibling.$.offsetWidth>offsetWidth0||excludeBrs&&sibling.is('br'))&&!sibling.data('cke-bookmark')){// We'll accept it only if we need
	// whitespace, and this is an inline
	// element with whitespace only.
	if(needsWhiteSpace&&CKEDITOR.dtd.$removeEmpty[sibling.getName()]){// It must contains spaces and inline elements only.
	siblingText=sibling.getText();if(leadingWhitespaceRegex.test(siblingText))// Spaces + Zero Width No-Break Space (U+FEFF)
	sibling=null;else{var allChildren=sibling.$.getElementsByTagName('*');for(var i=0,child;child=allChildren[i++];){if(!CKEDITOR.dtd.$removeEmpty[child.nodeName.toLowerCase()]){sibling=null;break;}}}if(sibling)isWhiteSpace=!!siblingText.length;}else{sibling=null;}}}// A node with whitespaces has been found.
	if(isWhiteSpace){// Enlarge the last enlargeable node, if we
	// were waiting for spaces.
	if(needsWhiteSpace){if(commonReached)startTop=enlargeable;else if(enlargeable)this.setStartBefore(enlargeable);}else{needsWhiteSpace=true;}}if(sibling){var next=sibling.getPrevious();if(!enlargeable&&!next){// Set the sibling as enlargeable, so it's
	// parent will be get later outside this while.
	enlargeable=sibling;sibling=null;break;}sibling=next;}else{// If sibling has been set to null, then we
	// need to stop enlarging.
	enlargeable=null;}}if(enlargeable)enlargeable=getValidEnlargeable(enlargeable.getParent());}// Process the end boundary. This is basically the same
	// code used for the start boundary, with small changes to
	// make it work in the oposite side (to the right). This
	// makes it difficult to reuse the code here. So, fixes to
	// the above code are likely to be replicated here.
	container=this.endContainer;offset=this.endOffset;// Reset the common variables.
	enlargeable=sibling=null;commonReached=needsWhiteSpace=false;// Function check if there are only whitespaces from the given starting point
	// (startContainer and startOffset) till the end on block.
	// Examples ("[" is the start point):
	//  - <p>foo[ </p>           - will return true,
	//  - <p><b>foo[ </b> </p>   - will return true,
	//  - <p>foo[ bar</p>        - will return false,
	//  - <p><b>foo[ </b>bar</p> - will return false,
	//  - <p>foo[ <b></b></p>    - will return false.
	function onlyWhiteSpaces(startContainer,startOffset){// We need to enlarge range if there is white space at the end of the block,
	// because it is not displayed in WYSIWYG mode and user can not select it. So
	// "<p>foo[bar] </p>" should be changed to "<p>foo[bar ]</p>". On the other hand
	// we should do nothing if we are not at the end of the block, so this should not
	// be changed: "<p><i>[foo] </i>bar</p>".
	var walkerRange=new CKEDITOR.dom.range(boundary);walkerRange.setStart(startContainer,startOffset);// The guard will find the end of range so I put boundary here.
	walkerRange.setEndAt(boundary,CKEDITOR.POSITION_BEFORE_END);var walker=new CKEDITOR.dom.walker(walkerRange),node;walker.guard=function(node){// Stop if you exit block.
	return!(node.type==CKEDITOR.NODE_ELEMENT&&node.isBlockBoundary());};while(node=walker.next()){if(node.type!=CKEDITOR.NODE_TEXT){// Stop if you enter to any node (walker.next() will return node only
	// it goes out, not if it is go into node).
	return false;}else{// Trim the first node to startOffset.
	if(node!=startContainer)siblingText=node.getText();else siblingText=node.substring(startOffset);// Check if it is white space.
	if(leadingWhitespaceRegex.test(siblingText))return false;}}return true;}if(container.type==CKEDITOR.NODE_TEXT){// Check if there is only white space after the offset.
	if(CKEDITOR.tools.trim(container.substring(offset)).length){// If we found only whitespace in the node, it
	// means that we'll need more whitespace to be able
	// to expand. For example, <i> can be expanded in
	// "A <i> [B]</i>", but not in "A<i> [B]</i>".
	needsWhiteSpace=true;}else{needsWhiteSpace=!container.getLength();if(offset==container.getLength()){// If we are at the end of container and this is the last text node,
	// we should enlarge end to the parent.
	if(!(sibling=container.getNext()))enlargeable=container.getParent();}else{// If we are in the middle on text node and there are only whitespaces
	// till the end of block, we should enlarge element.
	if(onlyWhiteSpaces(container,offset))enlargeable=container.getParent();}}}else{// Get the node right after the boudary to be checked
	// first.
	sibling=container.getChild(offset);if(!sibling)enlargeable=container;}while(enlargeable||sibling){if(enlargeable&&!sibling){if(!commonReached&&enlargeable.equals(commonAncestor))commonReached=true;if(enlargeInlineOnly?enlargeable.isBlockBoundary():!boundary.contains(enlargeable))break;if(!needsWhiteSpace||enlargeable.getComputedStyle('display')!='inline'){needsWhiteSpace=false;if(commonReached)endTop=enlargeable;else if(enlargeable)this.setEndAfter(enlargeable);}sibling=enlargeable.getNext();}while(sibling){isWhiteSpace=false;if(sibling.type==CKEDITOR.NODE_TEXT){siblingText=sibling.getText();// Check if there are not whitespace characters till the end of editable.
	// If so stop expanding.
	if(!onlyWhiteSpaces(sibling,0))sibling=null;isWhiteSpace=/^[\s\ufeff]/.test(siblingText);}else if(sibling.type==CKEDITOR.NODE_ELEMENT){// If this is a visible element.
	// We need to check for the bookmark attribute because IE insists on
	// rendering the display:none nodes we use for bookmarks. (#3363)
	// Line-breaks (br) are rendered with zero width, which we don't want to include. (#7041)
	if((sibling.$.offsetWidth>0||excludeBrs&&sibling.is('br'))&&!sibling.data('cke-bookmark')){// We'll accept it only if we need
	// whitespace, and this is an inline
	// element with whitespace only.
	if(needsWhiteSpace&&CKEDITOR.dtd.$removeEmpty[sibling.getName()]){// It must contains spaces and inline elements only.
	siblingText=sibling.getText();if(leadingWhitespaceRegex.test(siblingText))sibling=null;else{allChildren=sibling.$.getElementsByTagName('*');for(i=0;child=allChildren[i++];){if(!CKEDITOR.dtd.$removeEmpty[child.nodeName.toLowerCase()]){sibling=null;break;}}}if(sibling)isWhiteSpace=!!siblingText.length;}else{sibling=null;}}}else{isWhiteSpace=1;}if(isWhiteSpace){if(needsWhiteSpace){if(commonReached)endTop=enlargeable;else this.setEndAfter(enlargeable);}}if(sibling){next=sibling.getNext();if(!enlargeable&&!next){enlargeable=sibling;sibling=null;break;}sibling=next;}else{// If sibling has been set to null, then we
	// need to stop enlarging.
	enlargeable=null;}}if(enlargeable)enlargeable=getValidEnlargeable(enlargeable.getParent());}// If the common ancestor can be enlarged by both boundaries, then include it also.
	if(startTop&&endTop){commonAncestor=startTop.contains(endTop)?endTop:startTop;this.setStartBefore(commonAncestor);this.setEndAfter(commonAncestor);}break;case CKEDITOR.ENLARGE_BLOCK_CONTENTS:case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:// Enlarging the start boundary.
	var walkerRange=new CKEDITOR.dom.range(this.root);boundary=this.root;walkerRange.setStartAt(boundary,CKEDITOR.POSITION_AFTER_START);walkerRange.setEnd(this.startContainer,this.startOffset);var walker=new CKEDITOR.dom.walker(walkerRange),blockBoundary,// The node on which the enlarging should stop.
	tailBr,// In case BR as block boundary.
	notBlockBoundary=CKEDITOR.dom.walker.blockBoundary(unit==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?{br:1}:null),inNonEditable=null,// Record the encountered 'blockBoundary' for later use.
	boundaryGuard=function(node){// We should not check contents of non-editable elements. It may happen
	// that inline widget has display:table child which should not block range#enlarge.
	// When encoutered non-editable element...
	if(node.type==CKEDITOR.NODE_ELEMENT&&node.getAttribute('contenteditable')=='false'){if(inNonEditable){// ... in which we already were, reset it (because we're leaving it) and return.
	if(inNonEditable.equals(node)){inNonEditable=null;return;}// ... which we're entering, remember it but check it (no return).
	}else{inNonEditable=node;}// When we are in non-editable element, do not check if current node is a block boundary.
	}else if(inNonEditable){return;}var retval=notBlockBoundary(node);if(!retval)blockBoundary=node;return retval;},// Record the encounted 'tailBr' for later use.
	tailBrGuard=function(node){var retval=boundaryGuard(node);if(!retval&&node.is&&node.is('br'))tailBr=node;return retval;};walker.guard=boundaryGuard;enlargeable=walker.lastBackward();// It's the body which stop the enlarging if no block boundary found.
	blockBoundary=blockBoundary||boundary;// Start the range either after the end of found block (<p>...</p>[text)
	// or at the start of block (<p>[text...), by comparing the document position
	// with 'enlargeable' node.
	this.setStartAt(blockBoundary,!blockBoundary.is('br')&&(!enlargeable&&this.checkStartOfBlock()||enlargeable&&blockBoundary.contains(enlargeable))?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_AFTER_END);// Avoid enlarging the range further when end boundary spans right after the BR. (#7490)
	if(unit==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS){var theRange=this.clone();walker=new CKEDITOR.dom.walker(theRange);var whitespaces=CKEDITOR.dom.walker.whitespaces(),bookmark=CKEDITOR.dom.walker.bookmark();walker.evaluator=function(node){return!whitespaces(node)&&!bookmark(node);};var previous=walker.previous();if(previous&&previous.type==CKEDITOR.NODE_ELEMENT&&previous.is('br'))return;}// Enlarging the end boundary.
	// Set up new range and reset all flags (blockBoundary, inNonEditable, tailBr).
	walkerRange=this.clone();walkerRange.collapse();walkerRange.setEndAt(boundary,CKEDITOR.POSITION_BEFORE_END);walker=new CKEDITOR.dom.walker(walkerRange);// tailBrGuard only used for on range end.
	walker.guard=unit==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?tailBrGuard:boundaryGuard;blockBoundary=inNonEditable=tailBr=null;// End the range right before the block boundary node.
	enlargeable=walker.lastForward();// It's the body which stop the enlarging if no block boundary found.
	blockBoundary=blockBoundary||boundary;// Close the range either before the found block start (text]<p>...</p>) or at the block end (...text]</p>)
	// by comparing the document position with 'enlargeable' node.
	this.setEndAt(blockBoundary,!enlargeable&&this.checkEndOfBlock()||enlargeable&&blockBoundary.contains(enlargeable)?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_BEFORE_START);// We must include the <br> at the end of range if there's
	// one and we're expanding list item contents
	if(tailBr){this.setEndAfter(tailBr);}}// Ensures that returned element can be enlarged by selection, null otherwise.
	// @param {CKEDITOR.dom.element} enlargeable
	// @returns {CKEDITOR.dom.element/null}
	function getValidEnlargeable(enlargeable){return enlargeable&&enlargeable.type==CKEDITOR.NODE_ELEMENT&&enlargeable.hasAttribute('contenteditable')?null:enlargeable;}},/**
			 * Descrease the range to make sure that boundaries
			 * always anchor beside text nodes or innermost element.
			 *
			 * @param {Number} mode The shrinking mode ({@link CKEDITOR#SHRINK_ELEMENT} or {@link CKEDITOR#SHRINK_TEXT}).
			 *
			 * * {@link CKEDITOR#SHRINK_ELEMENT} - Shrink the range boundaries to the edge of the innermost element.
			 * * {@link CKEDITOR#SHRINK_TEXT} - Shrink the range boudaries to anchor by the side of enclosed text
			 *     node, range remains if there's no text nodes on boundaries at all.
			 *
			 * @param {Boolean} selectContents Whether result range anchors at the inner OR outer boundary of the node.
			 */shrink:function(mode,selectContents,shrinkOnBlockBoundary){// Unable to shrink a collapsed range.
	if(!this.collapsed){mode=mode||CKEDITOR.SHRINK_TEXT;var walkerRange=this.clone();var startContainer=this.startContainer,endContainer=this.endContainer,startOffset=this.startOffset,endOffset=this.endOffset;// Whether the start/end boundary is moveable.
	var moveStart=1,moveEnd=1;if(startContainer&&startContainer.type==CKEDITOR.NODE_TEXT){if(!startOffset)walkerRange.setStartBefore(startContainer);else if(startOffset>=startContainer.getLength())walkerRange.setStartAfter(startContainer);else{// Enlarge the range properly to avoid walker making
	// DOM changes caused by triming the text nodes later.
	walkerRange.setStartBefore(startContainer);moveStart=0;}}if(endContainer&&endContainer.type==CKEDITOR.NODE_TEXT){if(!endOffset)walkerRange.setEndBefore(endContainer);else if(endOffset>=endContainer.getLength())walkerRange.setEndAfter(endContainer);else{walkerRange.setEndAfter(endContainer);moveEnd=0;}}var walker=new CKEDITOR.dom.walker(walkerRange),isBookmark=CKEDITOR.dom.walker.bookmark();walker.evaluator=function(node){return node.type==(mode==CKEDITOR.SHRINK_ELEMENT?CKEDITOR.NODE_ELEMENT:CKEDITOR.NODE_TEXT);};var currentElement;walker.guard=function(node,movingOut){if(isBookmark(node))return true;// Stop when we're shrink in element mode while encountering a text node.
	if(mode==CKEDITOR.SHRINK_ELEMENT&&node.type==CKEDITOR.NODE_TEXT)return false;// Stop when we've already walked "through" an element.
	if(movingOut&&node.equals(currentElement))return false;if(shrinkOnBlockBoundary===false&&node.type==CKEDITOR.NODE_ELEMENT&&node.isBlockBoundary())return false;// Stop shrinking when encountering an editable border.
	if(node.type==CKEDITOR.NODE_ELEMENT&&node.hasAttribute('contenteditable'))return false;if(!movingOut&&node.type==CKEDITOR.NODE_ELEMENT)currentElement=node;return true;};if(moveStart){var textStart=walker[mode==CKEDITOR.SHRINK_ELEMENT?'lastForward':'next']();textStart&&this.setStartAt(textStart,selectContents?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_START);}if(moveEnd){walker.reset();var textEnd=walker[mode==CKEDITOR.SHRINK_ELEMENT?'lastBackward':'previous']();textEnd&&this.setEndAt(textEnd,selectContents?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_END);}return!!(moveStart||moveEnd);}},/**
			 * Inserts a node at the start of the range. The range will be expanded
			 * the contain the node.
			 *
			 * @param {CKEDITOR.dom.node} node
			 */insertNode:function(node){this.optimizeBookmark();this.trim(false,true);var startContainer=this.startContainer;var startOffset=this.startOffset;var nextNode=startContainer.getChild(startOffset);if(nextNode)node.insertBefore(nextNode);else startContainer.append(node);// Check if we need to update the end boundary.
	if(node.getParent()&&node.getParent().equals(this.endContainer))this.endOffset++;// Expand the range to embrace the new node.
	this.setStartBefore(node);},/**
			 * Moves the range to given position according to specified node.
			 *
			 *		// HTML: <p>Foo <b>bar</b></p>
			 *		range.moveToPosition( elB, CKEDITOR.POSITION_BEFORE_START );
			 *		// Range will be moved to: <p>Foo ^<b>bar</b></p>
			 *
			 * See also {@link #setStartAt} and {@link #setEndAt}.
			 *
			 * @param {CKEDITOR.dom.node} node The node according to which position will be set.
			 * @param {Number} position One of {@link CKEDITOR#POSITION_BEFORE_START},
			 * {@link CKEDITOR#POSITION_AFTER_START}, {@link CKEDITOR#POSITION_BEFORE_END},
			 * {@link CKEDITOR#POSITION_AFTER_END}.
			 */moveToPosition:function(node,position){this.setStartAt(node,position);this.collapse(true);},/**
			 * Moves the range to the exact position of the specified range.
			 *
			 * @param {CKEDITOR.dom.range} range
			 */moveToRange:function(range){this.setStart(range.startContainer,range.startOffset);this.setEnd(range.endContainer,range.endOffset);},/**
			 * Select nodes content. Range will start and end inside this node.
			 *
			 * @param {CKEDITOR.dom.node} node
			 */selectNodeContents:function(node){this.setStart(node,0);this.setEnd(node,node.type==CKEDITOR.NODE_TEXT?node.getLength():node.getChildCount());},/**
			 * Sets the start position of a range.
			 *
			 * @param {CKEDITOR.dom.node} startNode The node to start the range.
			 * @param {Number} startOffset An integer greater than or equal to zero
			 * representing the offset for the start of the range from the start
			 * of `startNode`.
			 */setStart:function(startNode,startOffset){// W3C requires a check for the new position. If it is after the end
	// boundary, the range should be collapsed to the new start. It seams
	// we will not need this check for our use of this class so we can
	// ignore it for now.
	// Fixing invalid range start inside dtd empty elements.
	if(startNode.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[startNode.getName()])startOffset=startNode.getIndex(),startNode=startNode.getParent();this._setStartContainer(startNode);this.startOffset=startOffset;if(!this.endContainer){this._setEndContainer(startNode);this.endOffset=startOffset;}updateCollapsed(this);},/**
			 * Sets the end position of a Range.
			 *
			 * @param {CKEDITOR.dom.node} endNode The node to end the range.
			 * @param {Number} endOffset An integer greater than or equal to zero
			 * representing the offset for the end of the range from the start
			 * of `endNode`.
			 */setEnd:function(endNode,endOffset){// W3C requires a check for the new position. If it is before the start
	// boundary, the range should be collapsed to the new end. It seams we
	// will not need this check for our use of this class so we can ignore
	// it for now.
	// Fixing invalid range end inside dtd empty elements.
	if(endNode.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[endNode.getName()])endOffset=endNode.getIndex()+1,endNode=endNode.getParent();this._setEndContainer(endNode);this.endOffset=endOffset;if(!this.startContainer){this._setStartContainer(endNode);this.startOffset=endOffset;}updateCollapsed(this);},/**
			 * Sets start of this range after the specified node.
			 *
			 *		// Range: <p>foo<b>bar</b>^</p>
			 *		range.setStartAfter( textFoo );
			 *		// The range will be changed to:
			 *		// <p>foo[<b>bar</b>]</p>
			 *
			 * @param {CKEDITOR.dom.node} node
			 */setStartAfter:function(node){this.setStart(node.getParent(),node.getIndex()+1);},/**
			 * Sets start of this range after the specified node.
			 *
			 *		// Range: <p>foo<b>bar</b>^</p>
			 *		range.setStartBefore( elB );
			 *		// The range will be changed to:
			 *		// <p>foo[<b>bar</b>]</p>
			 *
			 * @param {CKEDITOR.dom.node} node
			 */setStartBefore:function(node){this.setStart(node.getParent(),node.getIndex());},/**
			 * Sets end of this range after the specified node.
			 *
			 *		// Range: <p>foo^<b>bar</b></p>
			 *		range.setEndAfter( elB );
			 *		// The range will be changed to:
			 *		// <p>foo[<b>bar</b>]</p>
			 *
			 * @param {CKEDITOR.dom.node} node
			 */setEndAfter:function(node){this.setEnd(node.getParent(),node.getIndex()+1);},/**
			 * Sets end of this range before the specified node.
			 *
			 *		// Range: <p>^foo<b>bar</b></p>
			 *		range.setStartAfter( textBar );
			 *		// The range will be changed to:
			 *		// <p>[foo<b>]bar</b></p>
			 *
			 * @param {CKEDITOR.dom.node} node
			 */setEndBefore:function(node){this.setEnd(node.getParent(),node.getIndex());},/**
			 * Moves the start of this range to given position according to specified node.
			 *
			 *		// HTML: <p>Foo <b>bar</b>^</p>
			 *		range.setStartAt( elB, CKEDITOR.POSITION_AFTER_START );
			 *		// The range will be changed to:
			 *		// <p>Foo <b>[bar</b>]</p>
			 *
			 * See also {@link #setEndAt} and {@link #moveToPosition}.
			 *
			 * @param {CKEDITOR.dom.node} node The node according to which position will be set.
			 * @param {Number} position One of {@link CKEDITOR#POSITION_BEFORE_START},
			 * {@link CKEDITOR#POSITION_AFTER_START}, {@link CKEDITOR#POSITION_BEFORE_END},
			 * {@link CKEDITOR#POSITION_AFTER_END}.
			 */setStartAt:function(node,position){switch(position){case CKEDITOR.POSITION_AFTER_START:this.setStart(node,0);break;case CKEDITOR.POSITION_BEFORE_END:if(node.type==CKEDITOR.NODE_TEXT)this.setStart(node,node.getLength());else this.setStart(node,node.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setStartBefore(node);break;case CKEDITOR.POSITION_AFTER_END:this.setStartAfter(node);}updateCollapsed(this);},/**
			 * Moves the end of this range to given position according to specified node.
			 *
			 *		// HTML: <p>^Foo <b>bar</b></p>
			 *		range.setEndAt( textBar, CKEDITOR.POSITION_BEFORE_START );
			 *		// The range will be changed to:
			 *		// <p>[Foo <b>]bar</b></p>
			 *
			 * See also {@link #setStartAt} and {@link #moveToPosition}.
			 *
			 * @param {CKEDITOR.dom.node} node The node according to which position will be set.
			 * @param {Number} position One of {@link CKEDITOR#POSITION_BEFORE_START},
			 * {@link CKEDITOR#POSITION_AFTER_START}, {@link CKEDITOR#POSITION_BEFORE_END},
			 * {@link CKEDITOR#POSITION_AFTER_END}.
			 */setEndAt:function(node,position){switch(position){case CKEDITOR.POSITION_AFTER_START:this.setEnd(node,0);break;case CKEDITOR.POSITION_BEFORE_END:if(node.type==CKEDITOR.NODE_TEXT)this.setEnd(node,node.getLength());else this.setEnd(node,node.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setEndBefore(node);break;case CKEDITOR.POSITION_AFTER_END:this.setEndAfter(node);}updateCollapsed(this);},/**
			 * Wraps inline content found around the range's start or end boundary
			 * with a block element.
			 *
			 *		// Assuming the following range:
			 *		// <h1>foo</h1>ba^r<br />bom<p>foo</p>
			 *		// The result of executing:
			 *		range.fixBlock( true, 'p' );
			 *		// will be:
			 *		// <h1>foo</h1><p>ba^r<br />bom</p><p>foo</p>
			 *
			 * Non-collapsed range:
			 *
			 *		// Assuming the following range:
			 *		// ba[r<p>foo</p>bo]m
			 *		// The result of executing:
			 *		range.fixBlock( false, 'p' );
			 *		// will be:
			 *		// ba[r<p>foo</p><p>bo]m</p>
			 *
			 * @param {Boolean} isStart Whether the start or end boundary of a range should be checked.
			 * @param {String} blockTag The name of a block element in which content will be wrapped.
			 * For example: `'p'`.
			 * @returns {CKEDITOR.dom.element} Created block wrapper.
			 */fixBlock:function(isStart,blockTag){var bookmark=this.createBookmark(),fixedBlock=this.document.createElement(blockTag);this.collapse(isStart);this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS);this.extractContents().appendTo(fixedBlock);fixedBlock.trim();this.insertNode(fixedBlock);// Bogus <br> could already exist in the range's container before fixBlock() was called. In such case it was
	// extracted and appended to the fixBlock. However, we are not sure that it's at the end of
	// the fixedBlock, because of FF's terrible bug. When creating a bookmark in an empty editable
	// FF moves the bogus <br> before that bookmark (<editable><br /><bm />[]</editable>).
	// So even if the initial range was placed before the bogus <br>, after creating the bookmark it
	// is placed before the bookmark.
	// Fortunately, getBogus() is able to skip the bookmark so it finds the bogus <br> in this case.
	// We remove incorrectly placed one and add a brand new one. (#13001)
	var bogus=fixedBlock.getBogus();if(bogus){bogus.remove();}fixedBlock.appendBogus();this.moveToBookmark(bookmark);return fixedBlock;},/**
			 * @todo
			 * @param {Boolean} [cloneId=false] Whether to preserve ID attributes in the result blocks.
			 */splitBlock:function(blockTag,cloneId){var startPath=new CKEDITOR.dom.elementPath(this.startContainer,this.root),endPath=new CKEDITOR.dom.elementPath(this.endContainer,this.root);var startBlockLimit=startPath.blockLimit,endBlockLimit=endPath.blockLimit;var startBlock=startPath.block,endBlock=endPath.block;var elementPath=null;// Do nothing if the boundaries are in different block limits.
	if(!startBlockLimit.equals(endBlockLimit))return null;// Get or fix current blocks.
	if(blockTag!='br'){if(!startBlock){startBlock=this.fixBlock(true,blockTag);endBlock=new CKEDITOR.dom.elementPath(this.endContainer,this.root).block;}if(!endBlock)endBlock=this.fixBlock(false,blockTag);}// Get the range position.
	var isStartOfBlock=startBlock&&this.checkStartOfBlock(),isEndOfBlock=endBlock&&this.checkEndOfBlock();// Delete the current contents.
	// TODO: Why is 2.x doing CheckIsEmpty()?
	this.deleteContents();if(startBlock&&startBlock.equals(endBlock)){if(isEndOfBlock){elementPath=new CKEDITOR.dom.elementPath(this.startContainer,this.root);this.moveToPosition(endBlock,CKEDITOR.POSITION_AFTER_END);endBlock=null;}else if(isStartOfBlock){elementPath=new CKEDITOR.dom.elementPath(this.startContainer,this.root);this.moveToPosition(startBlock,CKEDITOR.POSITION_BEFORE_START);startBlock=null;}else{endBlock=this.splitElement(startBlock,cloneId||false);// In Gecko, the last child node must be a bogus <br>.
	// Note: bogus <br> added under <ul> or <ol> would cause
	// lists to be incorrectly rendered.
	if(!startBlock.is('ul','ol'))startBlock.appendBogus();}}return{previousBlock:startBlock,nextBlock:endBlock,wasStartOfBlock:isStartOfBlock,wasEndOfBlock:isEndOfBlock,elementPath:elementPath};},/**
			 * Branch the specified element from the collapsed range position and
			 * place the caret between the two result branches.
			 *
			 * **Note:** The range must be collapsed and been enclosed by this element.
			 *
			 * @param {CKEDITOR.dom.element} element
			 * @param {Boolean} [cloneId=false] Whether to preserve ID attributes in the result elements.
			 * @returns {CKEDITOR.dom.element} Root element of the new branch after the split.
			 */splitElement:function(toSplit,cloneId){if(!this.collapsed)return null;// Extract the contents of the block from the selection point to the end
	// of its contents.
	this.setEndAt(toSplit,CKEDITOR.POSITION_BEFORE_END);var documentFragment=this.extractContents(false,cloneId||false);// Duplicate the element after it.
	var clone=toSplit.clone(false,cloneId||false);// Place the extracted contents into the duplicated element.
	documentFragment.appendTo(clone);clone.insertAfter(toSplit);this.moveToPosition(toSplit,CKEDITOR.POSITION_AFTER_END);return clone;},/**
			 * Recursively remove any empty path blocks at the range boundary.
			 *
			 * @method
			 * @param {Boolean} atEnd Removal to perform at the end boundary,
			 * otherwise to perform at the start.
			 */removeEmptyBlocksAtEnd:function(){var whitespace=CKEDITOR.dom.walker.whitespaces(),bookmark=CKEDITOR.dom.walker.bookmark(false);function childEval(parent){return function(node){// Whitespace, bookmarks, empty inlines.
	if(whitespace(node)||bookmark(node)||node.type==CKEDITOR.NODE_ELEMENT&&node.isEmptyInlineRemoveable()){return false;}else if(parent.is('table')&&node.is('caption')){return false;}return true;};}return function(atEnd){var bm=this.createBookmark();var path=this[atEnd?'endPath':'startPath']();var block=path.block||path.blockLimit,parent;// Remove any childless block, including list and table.
	while(block&&!block.equals(path.root)&&!block.getFirst(childEval(block))){parent=block.getParent();this[atEnd?'setEndAt':'setStartAt'](block,CKEDITOR.POSITION_AFTER_END);block.remove(1);block=parent;}this.moveToBookmark(bm);};}(),/**
			 * Gets {@link CKEDITOR.dom.elementPath} for the {@link #startContainer}.
			 *
			 * @returns {CKEDITOR.dom.elementPath}
			 */startPath:function(){return new CKEDITOR.dom.elementPath(this.startContainer,this.root);},/**
			 * Gets {@link CKEDITOR.dom.elementPath} for the {@link #endContainer}.
			 *
			 * @returns {CKEDITOR.dom.elementPath}
			 */endPath:function(){return new CKEDITOR.dom.elementPath(this.endContainer,this.root);},/**
			 * Check whether a range boundary is at the inner boundary of a given
			 * element.
			 *
			 * @param {CKEDITOR.dom.element} element The target element to check.
			 * @param {Number} checkType The boundary to check for both the range
			 * and the element. It can be {@link CKEDITOR#START} or {@link CKEDITOR#END}.
			 * @returns {Boolean} `true` if the range boundary is at the inner
			 * boundary of the element.
			 */checkBoundaryOfElement:function(element,checkType){var checkStart=checkType==CKEDITOR.START;// Create a copy of this range, so we can manipulate it for our checks.
	var walkerRange=this.clone();// Collapse the range at the proper size.
	walkerRange.collapse(checkStart);// Expand the range to element boundary.
	walkerRange[checkStart?'setStartAt':'setEndAt'](element,checkStart?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END);// Create the walker, which will check if we have anything useful
	// in the range.
	var walker=new CKEDITOR.dom.walker(walkerRange);walker.evaluator=elementBoundaryEval(checkStart);return walker[checkStart?'checkBackward':'checkForward']();},/**
			 * **Note:** Calls to this function may produce changes to the DOM. The range may
			 * be updated to reflect such changes.
			 *
			 * @returns {Boolean}
			 * @todo
			 */checkStartOfBlock:function(){var startContainer=this.startContainer,startOffset=this.startOffset;// [IE] Special handling for range start in text with a leading NBSP,
	// we it to be isolated, for bogus check.
	if(CKEDITOR.env.ie&&startOffset&&startContainer.type==CKEDITOR.NODE_TEXT){var textBefore=CKEDITOR.tools.ltrim(startContainer.substring(0,startOffset));if(nbspRegExp.test(textBefore))this.trim(0,1);}// Antecipate the trim() call here, so the walker will not make
	// changes to the DOM, which would not get reflected into this
	// range otherwise.
	this.trim();// We need to grab the block element holding the start boundary, so
	// let's use an element path for it.
	var path=new CKEDITOR.dom.elementPath(this.startContainer,this.root);// Creates a range starting at the block start until the range start.
	var walkerRange=this.clone();walkerRange.collapse(true);walkerRange.setStartAt(path.block||path.blockLimit,CKEDITOR.POSITION_AFTER_START);var walker=new CKEDITOR.dom.walker(walkerRange);walker.evaluator=getCheckStartEndBlockEvalFunction();return walker.checkBackward();},/**
			 * **Note:** Calls to this function may produce changes to the DOM. The range may
			 * be updated to reflect such changes.
			 *
			 * @returns {Boolean}
			 * @todo
			 */checkEndOfBlock:function(){var endContainer=this.endContainer,endOffset=this.endOffset;// [IE] Special handling for range end in text with a following NBSP,
	// we it to be isolated, for bogus check.
	if(CKEDITOR.env.ie&&endContainer.type==CKEDITOR.NODE_TEXT){var textAfter=CKEDITOR.tools.rtrim(endContainer.substring(endOffset));if(nbspRegExp.test(textAfter))this.trim(1,0);}// Antecipate the trim() call here, so the walker will not make
	// changes to the DOM, which would not get reflected into this
	// range otherwise.
	this.trim();// We need to grab the block element holding the start boundary, so
	// let's use an element path for it.
	var path=new CKEDITOR.dom.elementPath(this.endContainer,this.root);// Creates a range starting at the block start until the range start.
	var walkerRange=this.clone();walkerRange.collapse(false);walkerRange.setEndAt(path.block||path.blockLimit,CKEDITOR.POSITION_BEFORE_END);var walker=new CKEDITOR.dom.walker(walkerRange);walker.evaluator=getCheckStartEndBlockEvalFunction();return walker.checkForward();},/**
			 * Traverse with {@link CKEDITOR.dom.walker} to retrieve the previous element before the range start.
			 *
			 * @param {Function} evaluator Function used as the walker's evaluator.
			 * @param {Function} [guard] Function used as the walker's guard.
			 * @param {CKEDITOR.dom.element} [boundary] A range ancestor element in which the traversal is limited,
			 * default to the root editable if not defined.
			 * @returns {CKEDITOR.dom.element/null} The returned node from the traversal.
			 */getPreviousNode:function(evaluator,guard,boundary){var walkerRange=this.clone();walkerRange.collapse(1);walkerRange.setStartAt(boundary||this.root,CKEDITOR.POSITION_AFTER_START);var walker=new CKEDITOR.dom.walker(walkerRange);walker.evaluator=evaluator;walker.guard=guard;return walker.previous();},/**
			 * Traverse with {@link CKEDITOR.dom.walker} to retrieve the next element before the range start.
			 *
			 * @param {Function} evaluator Function used as the walker's evaluator.
			 * @param {Function} [guard] Function used as the walker's guard.
			 * @param {CKEDITOR.dom.element} [boundary] A range ancestor element in which the traversal is limited,
			 * default to the root editable if not defined.
			 * @returns {CKEDITOR.dom.element/null} The returned node from the traversal.
			 */getNextNode:function(evaluator,guard,boundary){var walkerRange=this.clone();walkerRange.collapse();walkerRange.setEndAt(boundary||this.root,CKEDITOR.POSITION_BEFORE_END);var walker=new CKEDITOR.dom.walker(walkerRange);walker.evaluator=evaluator;walker.guard=guard;return walker.next();},/**
			 * Check if elements at which the range boundaries anchor are read-only,
			 * with respect to `contenteditable` attribute.
			 *
			 * @returns {Boolean}
			 */checkReadOnly:function(){function checkNodesEditable(node,anotherEnd){while(node){if(node.type==CKEDITOR.NODE_ELEMENT){if(node.getAttribute('contentEditable')=='false'&&!node.data('cke-editable'))return 0;// Range enclosed entirely in an editable element.
	else if(node.is('html')||node.getAttribute('contentEditable')=='true'&&(node.contains(anotherEnd)||node.equals(anotherEnd)))break;}node=node.getParent();}return 1;}return function(){var startNode=this.startContainer,endNode=this.endContainer;// Check if elements path at both boundaries are editable.
	return!(checkNodesEditable(startNode,endNode)&&checkNodesEditable(endNode,startNode));};}(),/**
			 * Moves the range boundaries to the first/end editing point inside an
			 * element.
			 *
			 * For example, in an element tree like
			 * `<p><b><i></i></b> Text</p>`, the start editing point is
			 * `<p><b><i>^</i></b> Text</p>` (inside `<i>`).
			 *
			 * @param {CKEDITOR.dom.element} el The element into which look for the
			 * editing spot.
			 * @param {Boolean} isMoveToEnd Whether move to the end editable position.
			 * @returns {Boolean} Whether range was moved.
			 */moveToElementEditablePosition:function(el,isMoveToEnd){function nextDFS(node,childOnly){var next;if(node.type==CKEDITOR.NODE_ELEMENT&&node.isEditable(false))next=node[isMoveToEnd?'getLast':'getFirst'](notIgnoredEval);if(!childOnly&&!next)next=node[isMoveToEnd?'getPrevious':'getNext'](notIgnoredEval);return next;}// Handle non-editable element e.g. HR.
	if(el.type==CKEDITOR.NODE_ELEMENT&&!el.isEditable(false)){this.moveToPosition(el,isMoveToEnd?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START);return true;}var found=0;while(el){// Stop immediately if we've found a text node.
	if(el.type==CKEDITOR.NODE_TEXT){// Put cursor before block filler.
	if(isMoveToEnd&&this.endContainer&&this.checkEndOfBlock()&&nbspRegExp.test(el.getText()))this.moveToPosition(el,CKEDITOR.POSITION_BEFORE_START);else this.moveToPosition(el,isMoveToEnd?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START);found=1;break;}// If an editable element is found, move inside it, but not stop the searching.
	if(el.type==CKEDITOR.NODE_ELEMENT){if(el.isEditable()){this.moveToPosition(el,isMoveToEnd?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_START);found=1;}// Put cursor before padding block br.
	else if(isMoveToEnd&&el.is('br')&&this.endContainer&&this.checkEndOfBlock())this.moveToPosition(el,CKEDITOR.POSITION_BEFORE_START);// Special case - non-editable block. Select entire element, because it does not make sense
	// to place collapsed selection next to it, because browsers can't handle that.
	else if(el.getAttribute('contenteditable')=='false'&&el.is(CKEDITOR.dtd.$block)){this.setStartBefore(el);this.setEndAfter(el);return true;}}el=nextDFS(el,found);}return!!found;},/**
			 * Moves the range boundaries to the closest editing point after/before an
			 * element or the current range position (depends on whether the element was specified).
			 *
			 * For example, if the start element has `id="start"`,
			 * `<p><b>foo</b><span id="start">start</start></p>`, the closest previous editing point is
			 * `<p><b>foo</b>^<span id="start">start</start></p>` (between `<b>` and `<span>`).
			 *
			 * See also: {@link #moveToElementEditablePosition}.
			 *
			 * @since 4.3
			 * @param {CKEDITOR.dom.element} [element] The starting element. If not specified, the current range
			 * position will be used.
			 * @param {Boolean} [isMoveForward] Whether move to the end of editable. Otherwise, look back.
			 * @returns {Boolean} Whether the range was moved.
			 */moveToClosestEditablePosition:function(element,isMoveForward){// We don't want to modify original range if there's no editable position.
	var range,found=0,sibling,isElement,positions=[CKEDITOR.POSITION_AFTER_END,CKEDITOR.POSITION_BEFORE_START];if(element){// Set collapsed range at one of ends of element.
	// Can't clone this range, because this range might not be yet positioned (no containers => errors).
	range=new CKEDITOR.dom.range(this.root);range.moveToPosition(element,positions[isMoveForward?0:1]);}else{range=this.clone();}// Start element isn't a block, so we can automatically place range
	// next to it.
	if(element&&!element.is(CKEDITOR.dtd.$block))found=1;else{// Look for first node that fulfills eval function and place range next to it.
	sibling=range[isMoveForward?'getNextEditableNode':'getPreviousEditableNode']();if(sibling){found=1;isElement=sibling.type==CKEDITOR.NODE_ELEMENT;// Special case - eval accepts block element only if it's a non-editable block,
	// which we want to select, not place collapsed selection next to it (which browsers
	// can't handle).
	if(isElement&&sibling.is(CKEDITOR.dtd.$block)&&sibling.getAttribute('contenteditable')=='false'){range.setStartAt(sibling,CKEDITOR.POSITION_BEFORE_START);range.setEndAt(sibling,CKEDITOR.POSITION_AFTER_END);}// Handle empty blocks which can be selection containers on old IEs.
	else if(!CKEDITOR.env.needsBrFiller&&isElement&&sibling.is(CKEDITOR.dom.walker.validEmptyBlockContainers)){range.setEnd(sibling,0);range.collapse();}else{range.moveToPosition(sibling,positions[isMoveForward?1:0]);}}}if(found)this.moveToRange(range);return!!found;},/**
			 * See {@link #moveToElementEditablePosition}.
			 *
			 * @returns {Boolean} Whether range was moved.
			 */moveToElementEditStart:function(target){return this.moveToElementEditablePosition(target);},/**
			 * See {@link #moveToElementEditablePosition}.
			 *
			 * @returns {Boolean} Whether range was moved.
			 */moveToElementEditEnd:function(target){return this.moveToElementEditablePosition(target,true);},/**
			 * Get the single node enclosed within the range if there's one.
			 *
			 * @returns {CKEDITOR.dom.node}
			 */getEnclosedNode:function(){var walkerRange=this.clone();// Optimize and analyze the range to avoid DOM destructive nature of walker. (#5780)
	walkerRange.optimize();if(walkerRange.startContainer.type!=CKEDITOR.NODE_ELEMENT||walkerRange.endContainer.type!=CKEDITOR.NODE_ELEMENT)return null;var walker=new CKEDITOR.dom.walker(walkerRange),isNotBookmarks=CKEDITOR.dom.walker.bookmark(false,true),isNotWhitespaces=CKEDITOR.dom.walker.whitespaces(true);walker.evaluator=function(node){return isNotWhitespaces(node)&&isNotBookmarks(node);};var node=walker.next();walker.reset();return node&&node.equals(walker.previous())?node:null;},/**
			 * Get the node adjacent to the range start or {@link #startContainer}.
			 *
			 * @returns {CKEDITOR.dom.node}
			 */getTouchedStartNode:function(){var container=this.startContainer;if(this.collapsed||container.type!=CKEDITOR.NODE_ELEMENT)return container;return container.getChild(this.startOffset)||container;},/**
			 * Get the node adjacent to the range end or {@link #endContainer}.
			 *
			 * @returns {CKEDITOR.dom.node}
			 */getTouchedEndNode:function(){var container=this.endContainer;if(this.collapsed||container.type!=CKEDITOR.NODE_ELEMENT)return container;return container.getChild(this.endOffset-1)||container;},/**
			 * Gets next node which can be a container of a selection.
			 * This methods mimics a behavior of right/left arrow keys in case of
			 * collapsed selection. It does not return an exact position (with offset) though,
			 * but just a selection's container.
			 *
			 * Note: use this method on a collapsed range.
			 *
			 * @since 4.3
			 * @returns {CKEDITOR.dom.element/CKEDITOR.dom.text}
			 */getNextEditableNode:getNextEditableNode(),/**
			 * See {@link #getNextEditableNode}.
			 *
			 * @since 4.3
			 * @returns {CKEDITOR.dom.element/CKEDITOR.dom.text}
			 */getPreviousEditableNode:getNextEditableNode(1),/**
			 * Scrolls the start of current range into view.
			 */scrollIntoView:function(){// The reference element contains a zero-width space to avoid
	// a premature removal. The view is to be scrolled with respect
	// to this element.
	var reference=new CKEDITOR.dom.element.createFromHtml('<span>&nbsp;</span>',this.document),afterCaretNode,startContainerText,isStartText;var range=this.clone();// Work with the range to obtain a proper caret position.
	range.optimize();// Currently in a text node, so we need to split it into two
	// halves and put the reference between.
	if(isStartText=range.startContainer.type==CKEDITOR.NODE_TEXT){// Keep the original content. It will be restored.
	startContainerText=range.startContainer.getText();// Split the startContainer at the this position.
	afterCaretNode=range.startContainer.split(range.startOffset);// Insert the reference between two text nodes.
	reference.insertAfter(range.startContainer);}// If not in a text node, simply insert the reference into the range.
	else{range.insertNode(reference);}// Scroll with respect to the reference element.
	reference.scrollIntoView();// Get rid of split parts if "in a text node" case.
	// Revert the original text of the startContainer.
	if(isStartText){range.startContainer.setText(startContainerText);afterCaretNode.remove();}// Get rid of the reference node. It is no longer necessary.
	reference.remove();},/**
			 * Setter for the {@link #startContainer}.
			 *
			 * @since 4.4.6
			 * @private
			 * @param {CKEDITOR.dom.element} startContainer
			 */_setStartContainer:function(startContainer){// %REMOVE_START%
	var isRootAscendantOrSelf=this.root.equals(startContainer)||this.root.contains(startContainer);if(!isRootAscendantOrSelf){CKEDITOR.warn('range-startcontainer',{startContainer:startContainer,root:this.root});}// %REMOVE_END%
	this.startContainer=startContainer;},/**
			 * Setter for the {@link #endContainer}.
			 *
			 * @since 4.4.6
			 * @private
			 * @param {CKEDITOR.dom.element} endContainer
			 */_setEndContainer:function(endContainer){// %REMOVE_START%
	var isRootAscendantOrSelf=this.root.equals(endContainer)||this.root.contains(endContainer);if(!isRootAscendantOrSelf){CKEDITOR.warn('range-endcontainer',{endContainer:endContainer,root:this.root});}// %REMOVE_END%
	this.endContainer=endContainer;}};})();/**
	 * Indicates a position after start of a node.
	 *
	 *		// When used according to an element:
	 *		// <element>^contents</element>
	 *
	 *		// When used according to a text node:
	 *		// "^text" (range is anchored in the text node)
	 *
	 * It is used as a parameter of methods like: {@link CKEDITOR.dom.range#moveToPosition},
	 * {@link CKEDITOR.dom.range#setStartAt} and {@link CKEDITOR.dom.range#setEndAt}.
	 *
	 * @readonly
	 * @member CKEDITOR
	 * @property {Number} [=1]
	 */CKEDITOR.POSITION_AFTER_START=1;/**
	 * Indicates a position before end of a node.
	 *
	 *		// When used according to an element:
	 *		// <element>contents^</element>
	 *
	 *		// When used according to a text node:
	 *		// "text^" (range is anchored in the text node)
	 *
	 * It is used as a parameter of methods like: {@link CKEDITOR.dom.range#moveToPosition},
	 * {@link CKEDITOR.dom.range#setStartAt} and {@link CKEDITOR.dom.range#setEndAt}.
	 *
	 * @readonly
	 * @member CKEDITOR
	 * @property {Number} [=2]
	 */CKEDITOR.POSITION_BEFORE_END=2;/**
	 * Indicates a position before start of a node.
	 *
	 *		// When used according to an element:
	 *		// ^<element>contents</element> (range is anchored in element's parent)
	 *
	 *		// When used according to a text node:
	 *		// ^"text" (range is anchored in text node's parent)
	 *
	 * It is used as a parameter of methods like: {@link CKEDITOR.dom.range#moveToPosition},
	 * {@link CKEDITOR.dom.range#setStartAt} and {@link CKEDITOR.dom.range#setEndAt}.
	 *
	 * @readonly
	 * @member CKEDITOR
	 * @property {Number} [=3]
	 */CKEDITOR.POSITION_BEFORE_START=3;/**
	 * Indicates a position after end of a node.
	 *
	 *		// When used according to an element:
	 *		// <element>contents</element>^ (range is anchored in element's parent)
	 *
	 *		// When used according to a text node:
	 *		// "text"^ (range is anchored in text node's parent)
	 *
	 * It is used as a parameter of methods like: {@link CKEDITOR.dom.range#moveToPosition},
	 * {@link CKEDITOR.dom.range#setStartAt} and {@link CKEDITOR.dom.range#setEndAt}.
	 *
	 * @readonly
	 * @member CKEDITOR
	 * @property {Number} [=4]
	 */CKEDITOR.POSITION_AFTER_END=4;CKEDITOR.ENLARGE_ELEMENT=1;CKEDITOR.ENLARGE_BLOCK_CONTENTS=2;CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS=3;CKEDITOR.ENLARGE_INLINE=4;// Check boundary types.
	/**
	 * See {@link CKEDITOR.dom.range#checkBoundaryOfElement}.
	 *
	 * @readonly
	 * @member CKEDITOR
	 * @property {Number} [=1]
	 */CKEDITOR.START=1;/**
	 * See {@link CKEDITOR.dom.range#checkBoundaryOfElement}.
	 *
	 * @readonly
	 * @member CKEDITOR
	 * @property {Number} [=2]
	 */CKEDITOR.END=2;// Shrink range types.
	/**
	 * See {@link CKEDITOR.dom.range#shrink}.
	 *
	 * @readonly
	 * @member CKEDITOR
	 * @property {Number} [=1]
	 */CKEDITOR.SHRINK_ELEMENT=1;/**
	 * See {@link CKEDITOR.dom.range#shrink}.
	 *
	 * @readonly
	 * @member CKEDITOR
	 * @property {Number} [=2]
	 */CKEDITOR.SHRINK_TEXT=2;

/***/ },
/* 21 */
/*!******************************!*\
  !*** ./core/dom/iterator.js ***!
  \******************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @ignore
	 * File overview: DOM iterator which iterates over list items, lines and paragraphs.
	 */
	
	'use strict';
	
	(function () {
		/**
	  * Represents the iterator class. It can be used to iterate
	  * over all elements (or even text nodes in case of {@link #enlargeBr} set to `false`)
	  * which establish "paragraph-like" spaces within the passed range.
	  *
	  *		// <h1>[foo</h1><p>bar]</p>
	  *		var iterator = range.createIterator();
	  *		iterator.getNextParagraph(); // h1 element
	  *		iterator.getNextParagraph(); // p element
	  *
	  *		// <ul><li>[foo</li><li>bar]</li>
	  *		// With enforceRealBlocks set to false the iterator will return two list item elements.
	  *		// With enforceRealBlocks set to true the iterator will return two paragraphs and the DOM will be changed to:
	  *		// <ul><li><p>foo</p></li><li><p>bar</p></li>
	  *
	  * @class CKEDITOR.dom.iterator
	  * @constructor Creates an iterator class instance.
	  * @param {CKEDITOR.dom.range} range
	  */
		function iterator(range) {
			if (arguments.length < 1) return;
	
			/**
	   * @readonly
	   * @property {CKEDITOR.dom.range}
	   */
			this.range = range;
	
			/**
	   * @property {Boolean} [forceBrBreak=false]
	   */
			this.forceBrBreak = 0;
	
			// (#3730).
			/**
	   * Whether to include `<br>` elements in the enlarged range. Should be
	   * set to `false` when using the iterator in the {@link CKEDITOR#ENTER_BR} mode.
	   *
	   * @property {Boolean} [enlargeBr=true]
	   */
			this.enlargeBr = 1;
	
			/**
	   * Whether the iterator should create a transformable block
	   * if the current one contains text and cannot be transformed.
	   * For example new blocks will be established in elements like
	   * `<li>` or `<td>`.
	   *
	   * @property {Boolean} [enforceRealBlocks=false]
	   */
			this.enforceRealBlocks = 0;
	
			this._ || (this._ = {});
		}
	
		/**
	  * Default iterator's filter. It is set only for nested iterators.
	  *
	  * @since 4.3
	  * @readonly
	  * @property {CKEDITOR.filter} filter
	  */
	
		/**
	  * Iterator's active filter. It is set by the {@link #getNextParagraph} method
	  * when it enters a nested editable.
	  *
	  * @since 4.3
	  * @readonly
	  * @property {CKEDITOR.filter} activeFilter
	  */
	
		var beginWhitespaceRegex = /^[\r\n\t ]+$/,
	
		// Ignore bookmark nodes.(#3783)
		bookmarkGuard = CKEDITOR.dom.walker.bookmark(false, true),
		    whitespacesGuard = CKEDITOR.dom.walker.whitespaces(true),
		    skipGuard = function (node) {
			return bookmarkGuard(node) && whitespacesGuard(node);
		},
		    listItemNames = { dd: 1, dt: 1, li: 1 };
	
		iterator.prototype = {
			/**
	   * Returns the next paragraph-like element or `null` if the end of a range is reached.
	   *
	   * @param {String} [blockTag='p'] Name of a block element which will be established by
	   * the iterator in block-less elements (see {@link #enforceRealBlocks}).
	   */
			getNextParagraph: function (blockTag) {
				// The block element to be returned.
				var block;
	
				// The range object used to identify the paragraph contents.
				var range;
	
				// Indicats that the current element in the loop is the last one.
				var isLast;
	
				// Instructs to cleanup remaining BRs.
				var removePreviousBr, removeLastBr;
	
				blockTag = blockTag || 'p';
	
				// We're iterating over nested editable.
				if (this._.nestedEditable) {
					// Get next block from nested iterator and returns it if was found.
					block = this._.nestedEditable.iterator.getNextParagraph(blockTag);
					if (block) {
						// Inherit activeFilter from the nested iterator.
						this.activeFilter = this._.nestedEditable.iterator.activeFilter;
						return block;
					}
	
					// No block in nested iterator means that we reached the end of the nested editable.
					// Reset the active filter to the default filter (or undefined if this iterator didn't have it).
					this.activeFilter = this.filter;
	
					// Try to find next nested editable or get back to parent (this) iterator.
					if (startNestedEditableIterator(this, blockTag, this._.nestedEditable.container, this._.nestedEditable.remaining)) {
						// Inherit activeFilter from the nested iterator.
						this.activeFilter = this._.nestedEditable.iterator.activeFilter;
						return this._.nestedEditable.iterator.getNextParagraph(blockTag);
					} else {
						this._.nestedEditable = null;
					}
				}
	
				// Block-less range should be checked first.
				if (!this.range.root.getDtd()[blockTag]) return null;
	
				// This is the first iteration. Let's initialize it.
				if (!this._.started) range = startIterator.call(this);
	
				var currentNode = this._.nextNode,
				    lastNode = this._.lastNode;
	
				this._.nextNode = null;
				while (currentNode) {
					// closeRange indicates that a paragraph boundary has been found,
					// so the range can be closed.
					var closeRange = 0,
					    parentPre = currentNode.hasAscendant('pre');
	
					// includeNode indicates that the current node is good to be part
					// of the range. By default, any non-element node is ok for it.
					var includeNode = currentNode.type != CKEDITOR.NODE_ELEMENT,
					    continueFromSibling = 0;
	
					// If it is an element node, let's check if it can be part of the range.
					if (!includeNode) {
						var nodeName = currentNode.getName();
	
						// Non-editable block was found - return it and move to processing
						// its nested editables if they exist.
						if (CKEDITOR.dtd.$block[nodeName] && currentNode.getAttribute('contenteditable') == 'false') {
							block = currentNode;
	
							// Setup iterator for first of nested editables.
							// If there's no editable, then algorithm will move to next element after current block.
							startNestedEditableIterator(this, blockTag, block);
	
							// Gets us straight to the end of getParagraph() because block variable is set.
							break;
						} else if (currentNode.isBlockBoundary(this.forceBrBreak && !parentPre && { br: 1 })) {
							// <br> boundaries must be part of the range. It will
							// happen only if ForceBrBreak.
							if (nodeName == 'br') includeNode = 1;else if (!range && !currentNode.getChildCount() && nodeName != 'hr') {
								// If we have found an empty block, and haven't started
								// the range yet, it means we must return this block.
								block = currentNode;
								isLast = currentNode.equals(lastNode);
								break;
							}
	
							// The range must finish right before the boundary,
							// including possibly skipped empty spaces. (#1603)
							if (range) {
								range.setEndAt(currentNode, CKEDITOR.POSITION_BEFORE_START);
	
								// The found boundary must be set as the next one at this
								// point. (#1717)
								if (nodeName != 'br') {
									this._.nextNode = currentNode;
								}
							}
	
							closeRange = 1;
						} else {
							// If we have child nodes, let's check them.
							if (currentNode.getFirst()) {
								// If we don't have a range yet, let's start it.
								if (!range) {
									range = this.range.clone();
									range.setStartAt(currentNode, CKEDITOR.POSITION_BEFORE_START);
								}
	
								currentNode = currentNode.getFirst();
								continue;
							}
							includeNode = 1;
						}
					} else if (currentNode.type == CKEDITOR.NODE_TEXT) {
						// Ignore normal whitespaces (i.e. not including &nbsp; or
						// other unicode whitespaces) before/after a block node.
						if (beginWhitespaceRegex.test(currentNode.getText())) includeNode = 0;
					}
	
					// The current node is good to be part of the range and we are
					// starting a new range, initialize it first.
					if (includeNode && !range) {
						range = this.range.clone();
						range.setStartAt(currentNode, CKEDITOR.POSITION_BEFORE_START);
					}
	
					// The last node has been found.
					isLast = (!closeRange || includeNode) && currentNode.equals(lastNode);
	
					// If we are in an element boundary, let's check if it is time
					// to close the range, otherwise we include the parent within it.
					if (range && !closeRange) {
						while (!currentNode.getNext(skipGuard) && !isLast) {
							var parentNode = currentNode.getParent();
	
							if (parentNode.isBlockBoundary(this.forceBrBreak && !parentPre && { br: 1 })) {
								closeRange = 1;
								includeNode = 0;
								isLast = isLast || parentNode.equals(lastNode);
								// Make sure range includes bookmarks at the end of the block. (#7359)
								range.setEndAt(parentNode, CKEDITOR.POSITION_BEFORE_END);
								break;
							}
	
							currentNode = parentNode;
							includeNode = 1;
							isLast = currentNode.equals(lastNode);
							continueFromSibling = 1;
						}
					}
	
					// Now finally include the node.
					if (includeNode) range.setEndAt(currentNode, CKEDITOR.POSITION_AFTER_END);
	
					currentNode = this._getNextSourceNode(currentNode, continueFromSibling, lastNode);
					isLast = !currentNode;
	
					// We have found a block boundary. Let's close the range and move out of the
					// loop.
					if (isLast || closeRange && range) break;
				}
	
				// Now, based on the processed range, look for (or create) the block to be returned.
				if (!block) {
					// If no range has been found, this is the end.
					if (!range) {
						this._.docEndMarker && this._.docEndMarker.remove();
						this._.nextNode = null;
						return null;
					}
	
					var startPath = new CKEDITOR.dom.elementPath(range.startContainer, range.root);
					var startBlockLimit = startPath.blockLimit,
					    checkLimits = { div: 1, th: 1, td: 1 };
					block = startPath.block;
	
					if (!block && startBlockLimit && !this.enforceRealBlocks && checkLimits[startBlockLimit.getName()] && range.checkStartOfBlock() && range.checkEndOfBlock() && !startBlockLimit.equals(range.root)) {
						block = startBlockLimit;
					} else if (!block || this.enforceRealBlocks && block.is(listItemNames)) {
						// Create the fixed block.
						block = this.range.document.createElement(blockTag);
	
						// Move the contents of the temporary range to the fixed block.
						range.extractContents().appendTo(block);
						block.trim();
	
						// Insert the fixed block into the DOM.
						range.insertNode(block);
	
						removePreviousBr = removeLastBr = true;
					} else if (block.getName() != 'li') {
						// If the range doesn't includes the entire contents of the
						// block, we must split it, isolating the range in a dedicated
						// block.
						if (!range.checkStartOfBlock() || !range.checkEndOfBlock()) {
							// The resulting block will be a clone of the current one.
							block = block.clone(false);
	
							// Extract the range contents, moving it to the new block.
							range.extractContents().appendTo(block);
							block.trim();
	
							// Split the block. At this point, the range will be in the
							// right position for our intents.
							var splitInfo = range.splitBlock();
	
							removePreviousBr = !splitInfo.wasStartOfBlock;
							removeLastBr = !splitInfo.wasEndOfBlock;
	
							// Insert the new block into the DOM.
							range.insertNode(block);
						}
					} else if (!isLast) {
						// LIs are returned as is, with all their children (due to the
						// nested lists). But, the next node is the node right after
						// the current range, which could be an <li> child (nested
						// lists) or the next sibling <li>.
	
						this._.nextNode = block.equals(lastNode) ? null : this._getNextSourceNode(range.getBoundaryNodes().endNode, 1, lastNode);
					}
				}
	
				if (removePreviousBr) {
					var previousSibling = block.getPrevious();
					if (previousSibling && previousSibling.type == CKEDITOR.NODE_ELEMENT) {
						if (previousSibling.getName() == 'br') previousSibling.remove();else if (previousSibling.getLast() && previousSibling.getLast().$.nodeName.toLowerCase() == 'br') previousSibling.getLast().remove();
					}
				}
	
				if (removeLastBr) {
					var lastChild = block.getLast();
					if (lastChild && lastChild.type == CKEDITOR.NODE_ELEMENT && lastChild.getName() == 'br') {
						// Remove br filler on browser which do not need it.
						if (!CKEDITOR.env.needsBrFiller || lastChild.getPrevious(bookmarkGuard) || lastChild.getNext(bookmarkGuard)) lastChild.remove();
					}
				}
	
				// Get a reference for the next element. This is important because the
				// above block can be removed or changed, so we can rely on it for the
				// next interation.
				if (!this._.nextNode) {
					this._.nextNode = isLast || block.equals(lastNode) || !lastNode ? null : this._getNextSourceNode(block, 1, lastNode);
				}
	
				return block;
			},
	
			/**
	   * Gets the next element to check or `null` when the `lastNode` or the
	   * {@link #range}'s {@link CKEDITOR.dom.range#root root} is reached. Bookmarks are skipped.
	   *
	   * @since 4.4.6
	   * @private
	   * @param {CKEDITOR.dom.node} node
	   * @param {Boolean} startFromSibling
	   * @param {CKEDITOR.dom.node} lastNode
	   * @returns {CKEDITOR.dom.node}
	   */
			_getNextSourceNode: function (node, startFromSibling, lastNode) {
				var rootNode = this.range.root,
				    next;
	
				// Here we are checking in guard function whether current element
				// reach lastNode(default behaviour) and root node to prevent against
				// getting out of editor instance root DOM object.
				// #12484
				function guardFunction(node) {
					return !(node.equals(lastNode) || node.equals(rootNode));
				}
	
				next = node.getNextSourceNode(startFromSibling, null, guardFunction);
				while (!bookmarkGuard(next)) {
					next = next.getNextSourceNode(startFromSibling, null, guardFunction);
				}
				return next;
			}
		};
	
		// @context CKEDITOR.dom.iterator
		// @returns Collapsed range which will be reused when during furter processing.
		function startIterator() {
			var range = this.range.clone(),
	
			// Indicate at least one of the range boundaries is inside a preformat block.
			touchPre,
	
	
			// (#12178)
			// Remember if following situation takes place:
			// * startAtInnerBoundary: <p>foo[</p>...
			// * endAtInnerBoundary: ...<p>]bar</p>
			// Because information about line break will be lost when shrinking range.
			// Note that we test only if path block exist, because we must properly shrink
			// range containing table and/or table cells.
			// Note: When range is collapsed there's no way it can be shrinked.
			// By checking if range is collapsed we also prevent #12308.
			startPath = range.startPath(),
			    endPath = range.endPath(),
			    startAtInnerBoundary = !range.collapsed && rangeAtInnerBlockBoundary(range, startPath.block),
			    endAtInnerBoundary = !range.collapsed && rangeAtInnerBlockBoundary(range, endPath.block, 1);
	
			// Shrink the range to exclude harmful "noises" (#4087, #4450, #5435).
			range.shrink(CKEDITOR.SHRINK_ELEMENT, true);
	
			if (startAtInnerBoundary) range.setStartAt(startPath.block, CKEDITOR.POSITION_BEFORE_END);
			if (endAtInnerBoundary) range.setEndAt(endPath.block, CKEDITOR.POSITION_AFTER_START);
	
			touchPre = range.endContainer.hasAscendant('pre', true) || range.startContainer.hasAscendant('pre', true);
	
			range.enlarge(this.forceBrBreak && !touchPre || !this.enlargeBr ? CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS : CKEDITOR.ENLARGE_BLOCK_CONTENTS);
	
			if (!range.collapsed) {
				var walker = new CKEDITOR.dom.walker(range.clone()),
				    ignoreBookmarkTextEvaluator = CKEDITOR.dom.walker.bookmark(true, true);
				// Avoid anchor inside bookmark inner text.
				walker.evaluator = ignoreBookmarkTextEvaluator;
				this._.nextNode = walker.next();
				// TODO: It's better to have walker.reset() used here.
				walker = new CKEDITOR.dom.walker(range.clone());
				walker.evaluator = ignoreBookmarkTextEvaluator;
				var lastNode = walker.previous();
				this._.lastNode = lastNode.getNextSourceNode(true, null, range.root);
	
				// We may have an empty text node at the end of block due to [3770].
				// If that node is the lastNode, it would cause our logic to leak to the
				// next block.(#3887)
				if (this._.lastNode && this._.lastNode.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.trim(this._.lastNode.getText()) && this._.lastNode.getParent().isBlockBoundary()) {
					var testRange = this.range.clone();
					testRange.moveToPosition(this._.lastNode, CKEDITOR.POSITION_AFTER_END);
					if (testRange.checkEndOfBlock()) {
						var path = new CKEDITOR.dom.elementPath(testRange.endContainer, testRange.root),
						    lastBlock = path.block || path.blockLimit;
						this._.lastNode = lastBlock.getNextSourceNode(true);
					}
				}
	
				// The end of document or range.root was reached, so we need a marker node inside.
				if (!this._.lastNode || !range.root.contains(this._.lastNode)) {
					this._.lastNode = this._.docEndMarker = range.document.createText('');
					this._.lastNode.insertAfter(lastNode);
				}
	
				// Let's reuse this variable.
				range = null;
			}
	
			this._.started = 1;
	
			return range;
		}
	
		// Does a nested editables lookup inside editablesContainer.
		// If remainingEditables is set will lookup inside this array.
		// @param {CKEDITOR.dom.element} editablesContainer
		// @param {CKEDITOR.dom.element[]} [remainingEditables]
		function getNestedEditableIn(editablesContainer, remainingEditables) {
			if (remainingEditables == null) remainingEditables = findNestedEditables(editablesContainer);
	
			var editable;
	
			while (editable = remainingEditables.shift()) {
				if (isIterableEditable(editable)) return { element: editable, remaining: remainingEditables };
			}
	
			return null;
		}
	
		// Checkes whether we can iterate over this editable.
		function isIterableEditable(editable) {
			// Reject blockless editables.
			return editable.getDtd().p;
		}
	
		// Finds nested editables within container. Does not return
		// editables nested in another editable (twice).
		function findNestedEditables(container) {
			var editables = [];
	
			container.forEach(function (element) {
				if (element.getAttribute('contenteditable') == 'true') {
					editables.push(element);
					return false; // Skip children.
				}
			}, CKEDITOR.NODE_ELEMENT, true);
	
			return editables;
		}
	
		// Looks for a first nested editable after previousEditable (if passed) and creates
		// nested iterator for it.
		function startNestedEditableIterator(parentIterator, blockTag, editablesContainer, remainingEditables) {
			var editable = getNestedEditableIn(editablesContainer, remainingEditables);
	
			if (!editable) return 0;
	
			var filter = CKEDITOR.filter.instances[editable.element.data('cke-filter')];
	
			// If current editable has a filter and this filter does not allow for block tag,
			// search for next nested editable in remaining ones.
			if (filter && !filter.check(blockTag)) return startNestedEditableIterator(parentIterator, blockTag, editablesContainer, editable.remaining);
	
			var range = new CKEDITOR.dom.range(editable.element);
			range.selectNodeContents(editable.element);
	
			var iterator = range.createIterator();
			// This setting actually does not change anything in this case,
			// because entire range contents is selected, so there're no <br>s to be included.
			// But it seems right to copy it too.
			iterator.enlargeBr = parentIterator.enlargeBr;
			// Inherit configuration from parent iterator.
			iterator.enforceRealBlocks = parentIterator.enforceRealBlocks;
			// Set the activeFilter (which can be overriden when this iteator will start nested iterator)
			// and the default filter, which will make it possible to reset to
			// current iterator's activeFilter after leaving nested editable.
			iterator.activeFilter = iterator.filter = filter;
	
			parentIterator._.nestedEditable = {
				element: editable.element,
				container: editablesContainer,
				remaining: editable.remaining,
				iterator: iterator
			};
	
			return 1;
		}
	
		// Checks whether range starts or ends at inner block boundary.
		// See usage comments to learn more.
		function rangeAtInnerBlockBoundary(range, block, checkEnd) {
			if (!block) return false;
	
			var testRange = range.clone();
			testRange.collapse(!checkEnd);
			return testRange.checkBoundaryOfElement(block, checkEnd ? CKEDITOR.START : CKEDITOR.END);
		}
	
		/**
	  * Creates a {@link CKEDITOR.dom.iterator} instance for this range.
	  *
	  * @member CKEDITOR.dom.range
	  * @returns {CKEDITOR.dom.iterator}
	  */
		CKEDITOR.dom.range.prototype.createIterator = function () {
			return new iterator(this);
		};
	})();

/***/ },
/* 22 */
/*!*************************!*\
  !*** ./core/command.js ***!
  \*************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * Represents a command that can be executed on an editor instance.
	 *
	 *		var command = new CKEDITOR.command( editor, {
	 *			exec: function( editor ) {
	 *				alert( editor.document.getBody().getHtml() );
	 *			}
	 *		} );
	 *
	 * @class
	 * @extends CKEDITOR.commandDefinition
	 * @mixins CKEDITOR.event
	 * @constructor Creates a command class instance.
	 * @param {CKEDITOR.editor} editor The editor instance this command will be
	 * related to.
	 * @param {CKEDITOR.commandDefinition} commandDefinition The command
	 * definition.
	 */
	CKEDITOR.command = function (editor, commandDefinition) {
		/**
	  * Lists UI items that are associated to this command. This list can be
	  * used to interact with the UI on command execution (by the execution code
	  * itself, for example).
	  *
	  *		alert( 'Number of UI items associated to this command: ' + command.uiItems.length );
	  */
		this.uiItems = [];
	
		/**
	  * Executes the command.
	  *
	  *		command.exec(); // The command gets executed.
	  *
	  * **Note:** You should use the {@link CKEDITOR.editor#execCommand} method instead of calling
	  * `command.exec()` directly.
	  *
	  * @param {Object} [data] Any data to pass to the command. Depends on the
	  * command implementation and requirements.
	  * @returns {Boolean} A boolean indicating that the command has been successfully executed.
	  */
		this.exec = function (data) {
			if (this.state == CKEDITOR.TRISTATE_DISABLED || !this.checkAllowed()) return false;
	
			if (this.editorFocus) // Give editor focus if necessary (#4355).
				editor.focus();
	
			if (this.fire('exec') === false) return true;
	
			return commandDefinition.exec.call(this, editor, data) !== false;
		};
	
		/**
	  * Explicitly update the status of the command, by firing the {@link CKEDITOR.command#event-refresh} event,
	  * as well as invoke the {@link CKEDITOR.commandDefinition#refresh} method if defined, this method
	  * is to allow different parts of the editor code to contribute in command status resolution.
	  *
	  * @param {CKEDITOR.editor} editor The editor instance.
	  * @param {CKEDITOR.dom.elementPath} path
	  */
		this.refresh = function (editor, path) {
			// Do nothing is we're on read-only and this command doesn't support it.
			// We don't need to disabled the command explicitely here, because this
			// is already done by the "readOnly" event listener.
			if (!this.readOnly && editor.readOnly) return true;
	
			// Disable commands that are not allowed in the current selection path context.
			if (this.context && !path.isContextFor(this.context)) {
				this.disable();
				return true;
			}
	
			// Disable commands that are not allowed by the active filter.
			if (!this.checkAllowed(true)) {
				this.disable();
				return true;
			}
	
			// Make the "enabled" state a default for commands enabled from start.
			if (!this.startDisabled) this.enable();
	
			// Disable commands which shouldn't be enabled in this mode.
			if (this.modes && !this.modes[editor.mode]) this.disable();
	
			if (this.fire('refresh', { editor: editor, path: path }) === false) return true;
	
			return commandDefinition.refresh && commandDefinition.refresh.apply(this, arguments) !== false;
		};
	
		var allowed;
	
		/**
	  * Checks whether this command is allowed by the active allowed
	  * content filter ({@link CKEDITOR.editor#activeFilter}). This means
	  * that if command implements {@link CKEDITOR.feature} interface it will be tested
	  * by the {@link CKEDITOR.filter#checkFeature} method.
	  *
	  * @since 4.1
	  * @param {Boolean} [noCache] Skip cache for example due to active filter change. Since CKEditor 4.2.
	  * @returns {Boolean} Whether this command is allowed.
	  */
		this.checkAllowed = function (noCache) {
			if (!noCache && typeof allowed == 'boolean') return allowed;
	
			return allowed = editor.activeFilter.checkFeature(this);
		};
	
		CKEDITOR.tools.extend(this, commandDefinition, {
			/**
	   * The editor modes within which the command can be executed. The
	   * execution will have no action if the current mode is not listed
	   * in this property.
	   *
	   *		// Enable the command in both WYSIWYG and Source modes.
	   *		command.modes = { wysiwyg:1,source:1 };
	   *
	   *		// Enable the command in Source mode only.
	   *		command.modes = { source:1 };
	   *
	   * @see CKEDITOR.editor#mode
	   */
			modes: { wysiwyg: 1 },
	
			/**
	   * Indicates that the editor will get the focus before executing
	   * the command.
	   *
	   *		// Do not force the editor to have focus when executing the command.
	   *		command.editorFocus = false;
	   *
	   * @property {Boolean} [=true]
	   */
			editorFocus: 1,
	
			/**
	   * Indicates that this command is sensible to the selection context.
	   * If `true`, the {@link CKEDITOR.command#method-refresh} method will be
	   * called for this command on the {@link CKEDITOR.editor#event-selectionChange} event.
	   *
	   * @property {Boolean} [=false]
	   */
			contextSensitive: !!commandDefinition.context,
	
			/**
	   * Indicates the editor state. Possible values are:
	   *
	   * * {@link CKEDITOR#TRISTATE_DISABLED}: the command is
	   *     disabled. It's execution will have no effect. Same as {@link #disable}.
	   * * {@link CKEDITOR#TRISTATE_ON}: the command is enabled
	   *     and currently active in the editor (for context sensitive commands,	for example).
	   * * {@link CKEDITOR#TRISTATE_OFF}: the command is enabled
	   *     and currently inactive in the editor (for context sensitive	commands, for example).
	   *
	   * Do not set this property directly, using the {@link #setState} method instead.
	   *
	   *		if ( command.state == CKEDITOR.TRISTATE_DISABLED )
	   *			alert( 'This command is disabled' );
	   *
	   * @property {Number} [=CKEDITOR.TRISTATE_DISABLED]
	   */
			state: CKEDITOR.TRISTATE_DISABLED
		});
	
		// Call the CKEDITOR.event constructor to initialize this instance.
		CKEDITOR.event.call(this);
	};
	
	CKEDITOR.command.prototype = {
		/**
	  * Enables the command for execution. The command state (see
	  * {@link CKEDITOR.command#property-state}) available before disabling it is restored.
	  *
	  *		command.enable();
	  *		command.exec(); // Execute the command.
	  */
		enable: function () {
			if (this.state == CKEDITOR.TRISTATE_DISABLED && this.checkAllowed()) this.setState(!this.preserveState || typeof this.previousState == 'undefined' ? CKEDITOR.TRISTATE_OFF : this.previousState);
		},
	
		/**
	  * Disables the command for execution. The command state (see
	  * {@link CKEDITOR.command#property-state}) will be set to {@link CKEDITOR#TRISTATE_DISABLED}.
	  *
	  *		command.disable();
	  *		command.exec(); // "false" - Nothing happens.
	  */
		disable: function () {
			this.setState(CKEDITOR.TRISTATE_DISABLED);
		},
	
		/**
	  * Sets the command state.
	  *
	  *		command.setState( CKEDITOR.TRISTATE_ON );
	  *		command.exec(); // Execute the command.
	  *		command.setState( CKEDITOR.TRISTATE_DISABLED );
	  *		command.exec(); // 'false' - Nothing happens.
	  *		command.setState( CKEDITOR.TRISTATE_OFF );
	  *		command.exec(); // Execute the command.
	  *
	  * @param {Number} newState The new state. See {@link #property-state}.
	  * @returns {Boolean} Returns `true` if the command state changed.
	  */
		setState: function (newState) {
			// Do nothing if there is no state change.
			if (this.state == newState) return false;
	
			if (newState != CKEDITOR.TRISTATE_DISABLED && !this.checkAllowed()) return false;
	
			this.previousState = this.state;
	
			// Set the new state.
			this.state = newState;
	
			// Fire the "state" event, so other parts of the code can react to the
			// change.
			this.fire('state');
	
			return true;
		},
	
		/**
	  * Toggles the on/off (active/inactive) state of the command. This is
	  * mainly used internally by context sensitive commands.
	  *
	  *		command.toggleState();
	  */
		toggleState: function () {
			if (this.state == CKEDITOR.TRISTATE_OFF) this.setState(CKEDITOR.TRISTATE_ON);else if (this.state == CKEDITOR.TRISTATE_ON) this.setState(CKEDITOR.TRISTATE_OFF);
		}
	};
	
	CKEDITOR.event.implementOn(CKEDITOR.command.prototype);
	
	/**
	 * Indicates the previous command state.
	 *
	 *		alert( command.previousState );
	 *
	 * @property {Number} previousState
	 * @see #state
	 */
	
	/**
	 * Fired when the command state changes.
	 *
	 *		command.on( 'state', function() {
	 *			// Alerts the new state.
	 *			alert( this.state );
	 *		} );
	 *
	 * @event state
	 */
	
	/**
	* @event refresh
	* @todo
	*/

/***/ },
/* 23 */
/*!************************!*\
  !*** ./core/config.js ***!
  \************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.config} object that stores the
	 * default configuration settings.
	 */
	
	/**
	 * Used in conjunction with the {@link CKEDITOR.config#enterMode}
	 * and {@link CKEDITOR.config#shiftEnterMode} configuration
	 * settings to make the editor produce `<p>` tags when
	 * using the <kbd>Enter</kbd> key.
	 *
	 * Read more in the [documentation](#!/guide/dev_enterkey) and see the
	 * [SDK sample](http://sdk.ckeditor.com/samples/enterkey.html).
	 *
	 * @readonly
	 * @property {Number} [=1]
	 * @member CKEDITOR
	 */
	CKEDITOR.ENTER_P = 1;
	
	/**
	 * Used in conjunction with the {@link CKEDITOR.config#enterMode}
	 * and {@link CKEDITOR.config#shiftEnterMode} configuration
	 * settings to make the editor produce `<br>` tags when
	 * using the <kbd>Enter</kbd> key.
	 *
	 * Read more in the [documentation](#!/guide/dev_enterkey) and see the
	 * [SDK sample](http://sdk.ckeditor.com/samples/enterkey.html).
	 *
	 * @readonly
	 * @property {Number} [=2]
	 * @member CKEDITOR
	 */
	CKEDITOR.ENTER_BR = 2;
	
	/**
	 * Used in conjunction with the {@link CKEDITOR.config#enterMode}
	 * and {@link CKEDITOR.config#shiftEnterMode} configuration
	 * settings to make the editor produce `<div>` tags when
	 * using the <kbd>Enter</kbd> key.
	 *
	 * Read more in the [documentation](#!/guide/dev_enterkey) and see the
	 * [SDK sample](http://sdk.ckeditor.com/samples/enterkey.html).
	 *
	 * @readonly
	 * @property {Number} [=3]
	 * @member CKEDITOR
	 */
	CKEDITOR.ENTER_DIV = 3;
	
	/**
	 * Stores default configuration settings. Changes to this object are
	 * reflected in all editor instances, if not specified otherwise for a particular
	 * instance.
	 *
	 * Read more about setting CKEditor configuration in the
	 * [documentation](#!/guide/dev_configuration).
	 *
	 * @class
	 * @singleton
	 */
	CKEDITOR.config = {
		/**
	  * The URL path to the custom configuration file to be loaded. If not
	  * overwritten with inline configuration, it defaults to the `config.js`
	  * file present in the root of the CKEditor installation directory.
	  *
	  * CKEditor will recursively load custom configuration files defined inside
	  * other custom configuration files.
	  *
	  * Read more about setting CKEditor configuration in the
	  * [documentation](#!/guide/dev_configuration).
	  *
	  *		// Load a specific configuration file.
	  *		CKEDITOR.replace( 'myfield', { customConfig: '/myconfig.js' } );
	  *
	  *		// Do not load any custom configuration file.
	  *		CKEDITOR.replace( 'myfield', { customConfig: '' } );
	  *
	  * @cfg {String} [="<CKEditor folder>/config.js"]
	  */
		customConfig: 'config.js',
	
		/**
	  * Whether the element replaced by the editor (usually a `<textarea>`)
	  * is to be updated automatically when posting the form containing the editor.
	  *
	  * @cfg
	  */
		autoUpdateElement: true,
	
		/**
	  * The user interface language localization to use. If left empty, the editor
	  * will automatically be localized to the user language. If the user language is not supported,
	  * the language specified in the {@link CKEDITOR.config#defaultLanguage}
	  * configuration setting is used.
	  *
	  * Read more in the [documentation](#!/guide/dev_uilanguage) and see the
	  * [SDK sample](http://sdk.ckeditor.com/samples/uilanguages.html).
	  *
	  *		// Load the German interface.
	  *		config.language = 'de';
	  *
	  * @cfg
	  */
		language: '',
	
		/**
	  * The language to be used if the {@link CKEDITOR.config#language}
	  * setting is left empty and it is not possible to localize the editor to the user language.
	  *
	  * Read more in the [documentation](#!/guide/dev_uilanguage) and see the
	  * [SDK sample](http://sdk.ckeditor.com/samples/uilanguages.html).
	  *
	  *		config.defaultLanguage = 'it';
	  *
	  * @cfg
	  */
		defaultLanguage: 'en',
	
		/**
	  * The writing direction of the language which is used to create editor content.
	  * Allowed values are:
	  *
	  * * `''` (an empty string) &ndash; Indicates that content direction will be the same as either
	  *      the editor UI direction or the page element direction depending on the editor type:
	  *     * [Classic editor](#!/guide/dev_framed) &ndash; The same as the user interface language direction.
	  *     * [Inline editor](#!/guide/dev_inline)&ndash; The same as the editable element text direction.
	  * * `'ltr'` &ndash; Indicates a Left-To-Right text direction (like in English).
	  * * `'rtl'` &ndash; Indicates a Right-To-Left text direction (like in Arabic).
	  *
	  * See the [SDK sample](http://sdk.ckeditor.com/samples/language.html).
	  *
	  * Example:
	  *
	  *		config.contentsLangDirection = 'rtl';
	  *
	  * @cfg
	  */
		contentsLangDirection: '',
	
		/**
	  * Sets the behavior of the <kbd>Enter</kbd> key. It also determines other behavior
	  * rules of the editor, like whether the `<br>` element is to be used
	  * as a paragraph separator when indenting text.
	  * The allowed values are the following constants that cause the behavior outlined below:
	  *
	  * * {@link CKEDITOR#ENTER_P} (1) &ndash; New `<p>` paragraphs are created.
	  * * {@link CKEDITOR#ENTER_BR} (2) &ndash; Lines are broken with `<br>` elements.
	  * * {@link CKEDITOR#ENTER_DIV} (3) &ndash; New `<div>` blocks are created.
	  *
	  * **Note**: It is recommended to use the {@link CKEDITOR#ENTER_P} setting because of
	  * its semantic value and correctness. The editor is optimized for this setting.
	  *
	  * Read more in the [documentation](#!/guide/dev_enterkey) and see the
	  * [SDK sample](http://sdk.ckeditor.com/samples/enterkey.html).
	  *
	  *		// Not recommended.
	  *		config.enterMode = CKEDITOR.ENTER_BR;
	  *
	  * @cfg {Number} [=CKEDITOR.ENTER_P]
	  */
		enterMode: CKEDITOR.ENTER_P,
	
		/**
	  * Forces the use of {@link CKEDITOR.config#enterMode} as line break regardless
	  * of the context. If, for example, {@link CKEDITOR.config#enterMode} is set
	  * to {@link CKEDITOR#ENTER_P}, pressing the <kbd>Enter</kbd> key inside a
	  * `<div>` element will create a new paragraph with a `<p>`
	  * instead of a `<div>`.
	  *
	  * Read more in the [documentation](#!/guide/dev_enterkey) and see the
	  * [SDK sample](http://sdk.ckeditor.com/samples/enterkey.html).
	  *
	  *		// Not recommended.
	  *		config.forceEnterMode = true;
	  *
	  * @since 3.2.1
	  * @cfg
	  */
		forceEnterMode: false,
	
		/**
	  * Similarly to the {@link CKEDITOR.config#enterMode} setting, it defines the behavior
	  * of the <kbd>Shift+Enter</kbd> key combination.
	  *
	  * The allowed values are the following constants that cause the behavior outlined below:
	  *
	  * * {@link CKEDITOR#ENTER_P} (1) &ndash; New `<p>` paragraphs are created.
	  * * {@link CKEDITOR#ENTER_BR} (2) &ndash; Lines are broken with `<br>` elements.
	  * * {@link CKEDITOR#ENTER_DIV} (3) &ndash; New `<div>` blocks are created.
	  *
	  * Read more in the [documentation](#!/guide/dev_enterkey) and see the
	  * [SDK sample](http://sdk.ckeditor.com/samples/enterkey.html).
	  *
	  * Example:
	  *
	  *		config.shiftEnterMode = CKEDITOR.ENTER_P;
	  *
	  * @cfg {Number} [=CKEDITOR.ENTER_BR]
	  */
		shiftEnterMode: CKEDITOR.ENTER_BR,
	
		/**
	  * Sets the `DOCTYPE` to be used when loading the editor content as HTML.
	  *
	  *		// Set the DOCTYPE to the HTML 4 (Quirks) mode.
	  *		config.docType = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">';
	  *
	  * @cfg
	  */
		docType: '<!DOCTYPE html>',
	
		/**
	  * Sets the `id` attribute to be used on the `body` element
	  * of the editing area. This can be useful when you intend to reuse the original CSS
	  * file you are using on your live website and want to assign the editor the same ID
	  * as the section that will include the contents. In this way ID-specific CSS rules will
	  * be enabled.
	  *
	  *		config.bodyId = 'contents_id';
	  *
	  * @since 3.1
	  * @cfg
	  */
		bodyId: '',
	
		/**
	  * Sets the `class` attribute to be used on the `body` element
	  * of the editing area. This can be useful when you intend to reuse the original CSS
	  * file you are using on your live website and want to assign the editor the same class
	  * as the section that will include the contents. In this way class-specific CSS rules will
	  * be enabled.
	  *
	  *		config.bodyClass = 'contents';
	  *
	  * **Note:** The editor needs to load stylesheets containing contents styles. You can either
	  * copy them to the `contents.css` file that the editor loads by default or set the {@link #contentsCss}
	  * option.
	  *
	  * **Note:** This setting only applies to [classic editor](#!/guide/dev_framed) (the one that uses `iframe`).
	  *
	  * @since 3.1
	  * @cfg
	  */
		bodyClass: '',
	
		/**
	  * Indicates whether the content to be edited is being input as a full HTML page.
	  * A full page includes the `<html>`, `<head>`, and `<body>` elements.
	  * The final output will also reflect this setting, including the
	  * `<body>` content only if this setting is disabled.
	  *
	  * Read more in the [documentation](#!/guide/dev_fullpage) and see the
	  * [SDK sample](http://sdk.ckeditor.com/samples/fullpage.html).
	  *
	  *		config.fullPage = true;
	  *
	  * @since 3.1
	  * @cfg
	  */
		fullPage: false,
	
		/**
	  * The height of the editing area that includes the editor content. This configuration
	  * option accepts an integer (to denote a value in pixels) or any CSS-defined length unit
	  * except percent (`%`) values which are not supported.
	  *
	  * **Note:** This configuration option is ignored by [inline editor](#!/guide/dev_inline).
	  *
	  * Read more in the [documentation](#!/guide/dev_size) and see the
	  * [SDK sample](http://sdk.ckeditor.com/samples/size.html).
	  *
	  *		config.height = 500;		// 500 pixels.
	  *		config.height = '25em';		// CSS length.
	  *		config.height = '300px';	// CSS length.
	  *
	  * @cfg {Number/String}
	  */
		height: 200,
	
		/**
	  * The CSS file(s) to be used to apply style to editor content. It should
	  * reflect the CSS used in the target pages where the content is to be
	  * displayed.
	  *
	  * **Note:** This configuration value is ignored by [inline editor](#!/guide/dev_inline)
	  * as it uses the styles that come directly from the page that CKEditor is
	  * rendered on. It is also ignored in the {@link #fullPage full page mode} in
	  * which the developer has full control over the page HTML code.
	  *
	  * Read more in the [documentation](#!/guide/dev_styles) and see the
	  * [SDK sample](http://sdk.ckeditor.com/samples/styles.html).
	  *
	  *		config.contentsCss = '/css/mysitestyles.css';
	  *		config.contentsCss = [ '/css/mysitestyles.css', '/css/anotherfile.css' ];
	  *
	  * @cfg {String/Array} [contentsCss=CKEDITOR.getUrl( 'contents.css' )]
	  */
		contentsCss: CKEDITOR.getUrl('contents.css'),
	
		/**
	  * Comma-separated list of plugins to be used in an editor instance. Note that
	  * the actual plugins that are to be loaded could still be affected by two other settings:
	  * {@link CKEDITOR.config#extraPlugins} and {@link CKEDITOR.config#removePlugins}.
	  *
	  * @cfg {String} [="<default list of plugins>"]
	  */
		plugins: '', // %REMOVE_LINE%
	
		/**
	  * A list of additional plugins to be loaded. This setting makes it easier
	  * to add new plugins without having to touch the {@link CKEDITOR.config#plugins} setting.
	  *
	  * **Note:** The most recommended way to
	  * [add CKEditor plugins](http://docs.ckeditor.com/#!/guide/dev_plugins) is through
	  * [CKEditor Builder](http://ckeditor.com/builder). Read more in the
	  * [documentation](#!/guide/dev_plugins).
	  *
	  *		config.extraPlugins = 'myplugin,anotherplugin';
	  *
	  * @cfg
	  */
		extraPlugins: '',
	
		/**
	  * A list of plugins that must not be loaded. This setting makes it possible
	  * to avoid loading some plugins defined in the {@link CKEDITOR.config#plugins}
	  * setting without having to touch it.
	  *
	  * **Note:** A plugin required by another plugin cannot be removed and will cause
	  * an error to be thrown. So for example if `contextmenu` is required by `tabletools`,
	  * it can only be removed if `tabletools` is not loaded.
	  *
	  *		config.removePlugins = 'elementspath,save,font';
	  *
	  * @cfg
	  */
		removePlugins: '',
	
		/**
	  * A list of regular expressions to be executed on input HTML,
	  * indicating HTML source code that when matched, must **not** be available in the WYSIWYG
	  * mode for editing.
	  *
	  *		config.protectedSource.push( /<\?[\s\S]*?\?>/g );											// PHP code
	  *		config.protectedSource.push( /<%[\s\S]*?%>/g );												// ASP code
	  *		config.protectedSource.push( /(<asp:[^\>]+>[\s|\S]*?<\/asp:[^\>]+>)|(<asp:[^\>]+\/>)/gi );	// ASP.NET code
	  *
	  * @cfg
	  */
		protectedSource: [],
	
		/**
	  * The editor `tabindex` value.
	  *
	  * Read more in the [documentation](#!/guide/dev_tabindex) and see the
	  * [SDK sample](http://sdk.ckeditor.com/samples/tabindex.html).
	  *
	  *		config.tabIndex = 1;
	  *
	  * @cfg
	  */
		tabIndex: 0,
	
		/**
	  * The editor UI outer width. This configuration option accepts an integer
	  * (to denote a value in pixels) or any CSS-defined length unit.
	  *
	  * Unlike the {@link CKEDITOR.config#height} setting, this
	  * one will set the outer width of the entire editor UI, not for the
	  * editing area only.
	  *
	  * **Note:** This configuration option is ignored by [inline editor](#!/guide/dev_inline).
	  *
	  * Read more in the [documentation](#!/guide/dev_size) and see the
	  * [SDK sample](http://sdk.ckeditor.com/samples/size.html).
	  *
	  *		config.width = 850;		// 850 pixels wide.
	  *		config.width = '75%';	// CSS unit.
	  *
	  * @cfg {String/Number}
	  */
		width: '',
	
		/**
	  * The base Z-index for floating dialog windows and popups.
	  *
	  *		config.baseFloatZIndex = 2000;
	  *
	  * @cfg
	  */
		baseFloatZIndex: 10000,
	
		/**
	  * The keystrokes that are blocked by default as the browser implementation
	  * is buggy. These default keystrokes are handled by the editor.
	  *
	  *		// Default setting.
	  *		config.blockedKeystrokes = [
	  *			CKEDITOR.CTRL + 66, // Ctrl+B
	  *			CKEDITOR.CTRL + 73, // Ctrl+I
	  *			CKEDITOR.CTRL + 85 // Ctrl+U
	  *		];
	  *
	  * @cfg {Array} [blockedKeystrokes=see example]
	  */
		blockedKeystrokes: [CKEDITOR.CTRL + 66, // Ctrl+B
		CKEDITOR.CTRL + 73, // Ctrl+I
		CKEDITOR.CTRL + 85 // Ctrl+U
		]
	};
	
	/**
	 * Indicates that some of the editor features, like alignment and text
	 * direction, should use the "computed value" of the feature to indicate its
	 * on/off state instead of using the "real value".
	 *
	 * If enabled in a Left-To-Right written document, the "Left Justify"
	 * alignment button will be shown as active, even if the alignment style is not
	 * explicitly applied to the current paragraph in the editor.
	 *
	 *		config.useComputedState = false;
	 *
	 * @since 3.4
	 * @cfg {Boolean} [useComputedState=true]
	 */
	
	/**
	 * The base user interface color to be used by the editor. Not all skins are
	 * [compatible with this setting](#!/guide/skin_sdk_chameleon).
	 *
	 * Read more in the [documentation](#!/guide/dev_uicolor) and see the
	 * [SDK sample](http://sdk.ckeditor.com/samples/uicolor.html).
	 *
	 *		// Using a color code.
	 *		config.uiColor = '#AADC6E';
	 *
	 *		// Using an HTML color name.
	 *		config.uiColor = 'Gold';
	 *
	 * @cfg {String} uiColor
	 */
	
	// PACKAGER_RENAME( CKEDITOR.config )

/***/ },
/* 24 */
/*!************************!*\
  !*** ./core/filter.js ***!
  \************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	(function () {
		'use strict';
	
		var DTD = CKEDITOR.dtd,
	
		// processElement flag - means that element has been somehow modified.
		FILTER_ELEMENT_MODIFIED = 1,
	
		// processElement flag - meaning explained in CKEDITOR.FILTER_SKIP_TREE doc.
		FILTER_SKIP_TREE = 2,
		    copy = CKEDITOR.tools.copy,
		    trim = CKEDITOR.tools.trim,
		    TEST_VALUE = 'cke-test',
		    enterModeTags = ['', 'p', 'br', 'div'];
	
		/**
	  * A flag indicating that the current element and all its ancestors
	  * should not be filtered.
	  *
	  * See {@link CKEDITOR.filter#addElementCallback} for more details.
	  *
	  * @since 4.4
	  * @readonly
	  * @property {Number} [=2]
	  * @member CKEDITOR
	  */
		CKEDITOR.FILTER_SKIP_TREE = FILTER_SKIP_TREE;
	
		/**
	  * Highly configurable class which implements input data filtering mechanisms
	  * and core functions used for the activation of editor features.
	  *
	  * A filter instance is always available under the {@link CKEDITOR.editor#filter}
	  * property and is used by the editor in its core features like filtering input data,
	  * applying data transformations, validating whether a feature may be enabled for
	  * the current setup. It may be configured in two ways:
	  *
	  *	* By the user, with the {@link CKEDITOR.config#allowedContent} setting.
	  *	* Automatically, by loaded features (toolbar items, commands, etc.).
	  *
	  * In both cases additional allowed content rules may be added by
	  * setting the {@link CKEDITOR.config#extraAllowedContent}
	  * configuration option.
	  *
	  * **Note**: Filter rules will be extended with the following elements
	  * depending on the {@link CKEDITOR.config#enterMode} and
	  * {@link CKEDITOR.config#shiftEnterMode} settings:
	  *
	  *	* `'p'` &ndash; for {@link CKEDITOR#ENTER_P},
	  *	* `'div'` &ndash; for {@link CKEDITOR#ENTER_DIV},
	  *	* `'br'` &ndash; for {@link CKEDITOR#ENTER_BR}.
	  *
	  * **Read more** about the Advanced Content Filter in [guides](#!/guide/dev_advanced_content_filter).
	  *
	  * Filter may also be used as a standalone instance by passing
	  * {@link CKEDITOR.filter.allowedContentRules} instead of {@link CKEDITOR.editor}
	  * to the constructor:
	  *
	  *		var filter = new CKEDITOR.filter( 'b' );
	  *
	  *		filter.check( 'b' ); // -> true
	  *		filter.check( 'i' ); // -> false
	  *		filter.allow( 'i' );
	  *		filter.check( 'i' ); // -> true
	  *
	  * @since 4.1
	  * @class
	  * @constructor Creates a filter class instance.
	  * @param {CKEDITOR.editor/CKEDITOR.filter.allowedContentRules} editorOrRules
	  */
		CKEDITOR.filter = function (editorOrRules) {
			/**
	   * Whether custom {@link CKEDITOR.config#allowedContent} was set.
	   *
	   * This property does not apply to the standalone filter.
	   *
	   * @readonly
	   * @property {Boolean} customConfig
	   */
	
			/**
	   * Array of rules added by the {@link #allow} method (including those
	   * loaded from {@link CKEDITOR.config#allowedContent} and
	   * {@link CKEDITOR.config#extraAllowedContent}).
	   *
	   * Rules in this array are in unified allowed content rules format.
	   *
	   * This property is useful for debugging issues with rules string parsing
	   * or for checking which rules were automatically added by editor features.
	   *
	   * @readonly
	   */
			this.allowedContent = [];
	
			/**
	   * Array of rules added by the {@link #disallow} method (including those
	   * loaded from {@link CKEDITOR.config#disallowedContent}).
	   *
	   * Rules in this array are in unified disallowed content rules format.
	   *
	   * This property is useful for debugging issues with rules string parsing
	   * or for checking which rules were automatically added by editor features.
	   *
	   * @since 4.4
	   * @readonly
	   */
			this.disallowedContent = [];
	
			/**
	   * Array of element callbacks. See {@link #addElementCallback}.
	   *
	   * @readonly
	   * @property {Function[]} [=null]
	   */
			this.elementCallbacks = null;
	
			/**
	   * Whether the filter is disabled.
	   *
	   * To disable the filter, set {@link CKEDITOR.config#allowedContent} to `true`
	   * or use the {@link #disable} method.
	   *
	   * @readonly
	   */
			this.disabled = false;
	
			/**
	   * Editor instance if not a standalone filter.
	   *
	   * @readonly
	   * @property {CKEDITOR.editor} [=null]
	   */
			this.editor = null;
	
			/**
	   * Filter's unique id. It can be used to find filter instance in
	   * {@link CKEDITOR.filter#instances CKEDITOR.filter.instance} object.
	   *
	   * @since 4.3
	   * @readonly
	   * @property {Number} id
	   */
			this.id = CKEDITOR.tools.getNextNumber();
	
			this._ = {
				// Optimized allowed content rules.
				allowedRules: {
					elements: {},
					generic: []
				},
				// Optimized disallowed content rules.
				disallowedRules: {
					elements: {},
					generic: []
				},
				// Object: element name => array of transformations groups.
				transformations: {},
				cachedTests: {}
			};
	
			// Register filter instance.
			CKEDITOR.filter.instances[this.id] = this;
	
			if (editorOrRules instanceof CKEDITOR.editor) {
				var editor = this.editor = editorOrRules;
				this.customConfig = true;
	
				var allowedContent = editor.config.allowedContent;
	
				// Disable filter completely by setting config.allowedContent = true.
				if (allowedContent === true) {
					this.disabled = true;
					return;
				}
	
				if (!allowedContent) this.customConfig = false;
	
				this.allow(allowedContent, 'config', 1);
				this.allow(editor.config.extraAllowedContent, 'extra', 1);
	
				// Enter modes should extend filter rules (ENTER_P adds 'p' rule, etc.).
				this.allow(enterModeTags[editor.enterMode] + ' ' + enterModeTags[editor.shiftEnterMode], 'default', 1);
	
				this.disallow(editor.config.disallowedContent);
			}
			// Rules object passed in editorOrRules argument - initialize standalone filter.
			else {
					this.customConfig = false;
					this.allow(editorOrRules, 'default', 1);
				}
		};
	
		/**
	  * Object containing all filter instances stored under their
	  * {@link #id} properties.
	  *
	  *		var filter = new CKEDITOR.filter( 'p' );
	  *		filter === CKEDITOR.filter.instances[ filter.id ];
	  *
	  * @since 4.3
	  * @static
	  * @property instances
	  */
		CKEDITOR.filter.instances = {};
	
		CKEDITOR.filter.prototype = {
			/**
	   * Adds allowed content rules to the filter.
	   *
	   * Read about rules formats in [Allowed Content Rules guide](#!/guide/dev_allowed_content_rules).
	   *
	   *		// Add a basic rule for custom image feature (e.g. 'MyImage' button).
	   *		editor.filter.allow( 'img[!src,alt]', 'MyImage' );
	   *
	   *		// Add rules for two header styles allowed by 'HeadersCombo'.
	   *		var header1Style = new CKEDITOR.style( { element: 'h1' } ),
	   *			header2Style = new CKEDITOR.style( { element: 'h2' } );
	   *		editor.filter.allow( [ header1Style, header2Style ], 'HeadersCombo' );
	   *
	   * @param {CKEDITOR.filter.allowedContentRules} newRules Rule(s) to be added.
	   * @param {String} [featureName] Name of a feature that allows this content (most often plugin/button/command name).
	   * @param {Boolean} [overrideCustom] By default this method will reject any rules
	   * if {@link CKEDITOR.config#allowedContent} is defined to avoid overriding it.
	   * Pass `true` to force rules addition.
	   * @returns {Boolean} Whether the rules were accepted.
	   */
			allow: function (newRules, featureName, overrideCustom) {
				// Check arguments and constraints. Clear cache.
				if (!beforeAddingRule(this, newRules, overrideCustom)) return false;
	
				var i, ret;
	
				if (typeof newRules == 'string') newRules = parseRulesString(newRules);else if (newRules instanceof CKEDITOR.style) {
					// If style has the cast method defined, use it and abort.
					if (newRules.toAllowedContentRules) return this.allow(newRules.toAllowedContentRules(this.editor), featureName, overrideCustom);
	
					newRules = convertStyleToRules(newRules);
				} else if (CKEDITOR.tools.isArray(newRules)) {
					for (i = 0; i < newRules.length; ++i) ret = this.allow(newRules[i], featureName, overrideCustom);
					return ret; // Return last status.
				}
	
				addAndOptimizeRules(this, newRules, featureName, this.allowedContent, this._.allowedRules);
	
				return true;
			},
	
			/**
	   * Applies this filter to passed {@link CKEDITOR.htmlParser.fragment} or {@link CKEDITOR.htmlParser.element}.
	   * The result of filtering is a DOM tree without disallowed content.
	   *
	   *			// Create standalone filter passing 'p' and 'b' elements.
	   *		var filter = new CKEDITOR.filter( 'p b' ),
	   *			// Parse HTML string to pseudo DOM structure.
	   *			fragment = CKEDITOR.htmlParser.fragment.fromHtml( '<p><b>foo</b> <i>bar</i></p>' ),
	   *			writer = new CKEDITOR.htmlParser.basicWriter();
	   *
	   *		filter.applyTo( fragment );
	   *		fragment.writeHtml( writer );
	   *		writer.getHtml(); // -> '<p><b>foo</b> bar</p>'
	   *
	   * @param {CKEDITOR.htmlParser.fragment/CKEDITOR.htmlParser.element} fragment Node to be filtered.
	   * @param {Boolean} [toHtml] Set to `true` if the filter is used together with {@link CKEDITOR.htmlDataProcessor#toHtml}.
	   * @param {Boolean} [transformOnly] If set to `true` only transformations will be applied. Content
	   * will not be filtered with allowed content rules.
	   * @param {Number} [enterMode] Enter mode used by the filter when deciding how to strip disallowed element.
	   * Defaults to {@link CKEDITOR.editor#activeEnterMode} for a editor's filter or to {@link CKEDITOR#ENTER_P} for standalone filter.
	   * @returns {Boolean} Whether some part of the `fragment` was removed by the filter.
	   */
			applyTo: function (fragment, toHtml, transformOnly, enterMode) {
				if (this.disabled) return false;
	
				var that = this,
				    toBeRemoved = [],
				    protectedRegexs = this.editor && this.editor.config.protectedSource,
				    processRetVal,
				    isModified = false,
				    filterOpts = {
					doFilter: !transformOnly,
					doTransform: true,
					doCallbacks: true,
					toHtml: toHtml
				};
	
				// Filter all children, skip root (fragment or editable-like wrapper used by data processor).
				fragment.forEach(function (el) {
					if (el.type == CKEDITOR.NODE_ELEMENT) {
						// Do not filter element with data-cke-filter="off" and all their descendants.
						if (el.attributes['data-cke-filter'] == 'off') return false;
	
						// (#10260) Don't touch elements like spans with data-cke-* attribute since they're
						// responsible e.g. for placing markers, bookmarks, odds and stuff.
						// We love 'em and we don't wanna lose anything during the filtering.
						// '|' is to avoid tricky joints like data-="foo" + cke-="bar". Yes, they're possible.
						//
						// NOTE: data-cke-* assigned elements are preserved only when filter is used with
						//       htmlDataProcessor.toHtml because we don't want to protect them when outputting data
						//       (toDataFormat).
						if (toHtml && el.name == 'span' && ~CKEDITOR.tools.objectKeys(el.attributes).join('|').indexOf('data-cke-')) return;
	
						processRetVal = processElement(that, el, toBeRemoved, filterOpts);
						if (processRetVal & FILTER_ELEMENT_MODIFIED) isModified = true;else if (processRetVal & FILTER_SKIP_TREE) return false;
					} else if (el.type == CKEDITOR.NODE_COMMENT && el.value.match(/^\{cke_protected\}(?!\{C\})/)) {
						if (!processProtectedElement(that, el, protectedRegexs, filterOpts)) toBeRemoved.push(el);
					}
				}, null, true);
	
				if (toBeRemoved.length) isModified = true;
	
				var node,
				    element,
				    check,
				    toBeChecked = [],
				    enterTag = enterModeTags[enterMode || (this.editor ? this.editor.enterMode : CKEDITOR.ENTER_P)],
				    parentDtd;
	
				// Remove elements in reverse order - from leaves to root, to avoid conflicts.
				while (node = toBeRemoved.pop()) {
					if (node.type == CKEDITOR.NODE_ELEMENT) removeElement(node, enterTag, toBeChecked);
					// This is a comment securing rejected element - remove it completely.
					else node.remove();
				}
	
				// Check elements that have been marked as possibly invalid.
				while (check = toBeChecked.pop()) {
					element = check.el;
					// Element has been already removed.
					if (!element.parent) continue;
	
					// Handle custom elements as inline elements (#12683).
					parentDtd = DTD[element.parent.name] || DTD.span;
	
					switch (check.check) {
						// Check if element itself is correct.
						case 'it':
							// Check if element included in $removeEmpty has no children.
							if (DTD.$removeEmpty[element.name] && !element.children.length) removeElement(element, enterTag, toBeChecked);
							// Check if that is invalid element.
							else if (!validateElement(element)) removeElement(element, enterTag, toBeChecked);
							break;
	
						// Check if element is in correct context. If not - remove element.
						case 'el-up':
							// Check if e.g. li is a child of body after ul has been removed.
							if (element.parent.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT && !parentDtd[element.name]) removeElement(element, enterTag, toBeChecked);
							break;
	
						// Check if element is in correct context. If not - remove parent.
						case 'parent-down':
							if (element.parent.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT && !parentDtd[element.name]) removeElement(element.parent, enterTag, toBeChecked);
							break;
					}
				}
	
				return isModified;
			},
	
			/**
	   * Checks whether a {@link CKEDITOR.feature} can be enabled. Unlike {@link #addFeature},
	   * this method always checks the feature, even when the default configuration
	   * for {@link CKEDITOR.config#allowedContent} is used.
	   *
	   *		// TODO example
	   *
	   * @param {CKEDITOR.feature} feature The feature to be tested.
	   * @returns {Boolean} Whether this feature can be enabled.
	   */
			checkFeature: function (feature) {
				if (this.disabled) return true;
	
				if (!feature) return true;
	
				// Some features may want to register other features.
				// E.g. a button may return a command bound to it.
				if (feature.toFeature) feature = feature.toFeature(this.editor);
	
				return !feature.requiredContent || this.check(feature.requiredContent);
			},
	
			/**
	   * Disables Advanced Content Filter.
	   *
	   * This method is meant to be used by plugins which are not
	   * compatible with the filter and in other cases in which the filter
	   * has to be disabled during the initialization phase or runtime.
	   *
	   * In other cases the filter can be disabled by setting
	   * {@link CKEDITOR.config#allowedContent} to `true`.
	   */
			disable: function () {
				this.disabled = true;
			},
	
			/**
	   * Adds disallowed content rules to the filter.
	   *
	   * Read about rules formats in the [Allowed Content Rules guide](#!/guide/dev_allowed_content_rules).
	   *
	   *		// Disallow all styles on the image elements.
	   *		editor.filter.disallow( 'img{*}' );
	   *
	   *		// Disallow all span and div elements.
	   *		editor.filter.disallow( 'span div' );
	   *
	   * @since 4.4
	   * @param {CKEDITOR.filter.disallowedContentRules} newRules Rule(s) to be added.
	   */
			disallow: function (newRules) {
				// Check arguments and constraints. Clear cache.
				// Note: we pass true in the 3rd argument, because disallow() should never
				// be blocked by custom configuration.
				if (!beforeAddingRule(this, newRules, true)) return false;
	
				if (typeof newRules == 'string') newRules = parseRulesString(newRules);
	
				addAndOptimizeRules(this, newRules, null, this.disallowedContent, this._.disallowedRules);
	
				return true;
			},
	
			/**
	   * Adds an array of {@link CKEDITOR.feature} content forms. All forms
	   * will then be transformed to the first form which is allowed by the filter.
	   *
	   *		editor.filter.allow( 'i; span{!font-style}' );
	   *		editor.filter.addContentForms( [
	   *			'em',
	   *			'i',
	   *			[ 'span', function( el ) {
	   *				return el.styles[ 'font-style' ] == 'italic';
	   *			} ]
	   *		] );
	   *		// Now <em> and <span style="font-style:italic"> will be replaced with <i>
	   *		// because this is the first allowed form.
	   *		// <span> is allowed too, but it is the last form and
	   *		// additionaly, the editor cannot transform an element based on
	   *		// the array+function form).
	   *
	   * This method is used by the editor to register {@link CKEDITOR.feature#contentForms}
	   * when adding a feature with {@link #addFeature} or {@link CKEDITOR.editor#addFeature}.
	   *
	   * @param {Array} forms The content forms of a feature.
	   */
			addContentForms: function (forms) {
				if (this.disabled) return;
	
				if (!forms) return;
	
				var i,
				    form,
				    transfGroups = [],
				    preferredForm;
	
				// First, find preferred form - this is, first allowed.
				for (i = 0; i < forms.length && !preferredForm; ++i) {
					form = forms[i];
	
					// Check only strings and styles - array format isn't supported by #check().
					if ((typeof form == 'string' || form instanceof CKEDITOR.style) && this.check(form)) preferredForm = form;
				}
	
				// This feature doesn't have preferredForm, so ignore it.
				if (!preferredForm) return;
	
				for (i = 0; i < forms.length; ++i) transfGroups.push(getContentFormTransformationGroup(forms[i], preferredForm));
	
				this.addTransformations(transfGroups);
			},
	
			/**
	   * Adds a callback which will be executed on every element
	   * that the filter reaches when filtering, before the element is filtered.
	   *
	   * By returning {@link CKEDITOR#FILTER_SKIP_TREE} it is possible to
	   * skip filtering of the current element and all its ancestors.
	   *
	   *		editor.filter.addElementCallback( function( el ) {
	   *			if ( el.hasClass( 'protected' ) )
	   *				return CKEDITOR.FILTER_SKIP_TREE;
	   *		} );
	   *
	   * **Note:** At this stage the element passed to the callback does not
	   * contain `attributes`, `classes`, and `styles` properties which are available
	   * temporarily on later stages of the filtering process. Therefore you need to
	   *  use the pure {@link CKEDITOR.htmlParser.element} interface.
	   *
	   * @since 4.4
	   * @param {Function} callback The callback to be executed.
	   */
			addElementCallback: function (callback) {
				// We want to keep it a falsy value, to speed up finding whether there are any callbacks.
				if (!this.elementCallbacks) this.elementCallbacks = [];
	
				this.elementCallbacks.push(callback);
			},
	
			/**
	   * Checks whether a feature can be enabled for the HTML restrictions in place
	   * for the current CKEditor instance, based on the HTML code the feature might
	   * generate and the minimal HTML code the feature needs to be able to generate.
	   *
	   *		// TODO example
	   *
	   * @param {CKEDITOR.feature} feature
	   * @returns {Boolean} Whether this feature can be enabled.
	   */
			addFeature: function (feature) {
				if (this.disabled) return true;
	
				if (!feature) return true;
	
				// Some features may want to register other features.
				// E.g. a button may return a command bound to it.
				if (feature.toFeature) feature = feature.toFeature(this.editor);
	
				// If default configuration (will be checked inside #allow()),
				// then add allowed content rules.
				this.allow(feature.allowedContent, feature.name);
	
				this.addTransformations(feature.contentTransformations);
				this.addContentForms(feature.contentForms);
	
				// If custom configuration or any DACRs, then check if required content is allowed.
				if (feature.requiredContent && (this.customConfig || this.disallowedContent.length)) return this.check(feature.requiredContent);
	
				return true;
			},
	
			/**
	   * Adds an array of content transformation groups. One group
	   * may contain many transformation rules, but only the first
	   * matching rule in a group is executed.
	   *
	   * A single transformation rule is an object with four properties:
	   *
	   *	* `check` (optional) &ndash; if set and {@link CKEDITOR.filter} does
	   *		not accept this {@link CKEDITOR.filter.contentRule}, this transformation rule
	   *		will not be executed (it does not *match*). This value is passed
	   *		to {@link #check}.
	   *	* `element` (optional) &ndash; this string property tells the filter on which
	   *		element this transformation can be run. It is optional, because
	   *		the element name can be obtained from `check` (if it is a String format)
	   *		or `left` (if it is a {@link CKEDITOR.style} instance).
	   *	* `left` (optional) &ndash; a function accepting an element or a {@link CKEDITOR.style}
	   *		instance verifying whether the transformation should be
	   *		executed on this specific element. If it returns `false` or if an element
	   *		does not match this style, this transformation rule does not *match*.
	   *	* `right` &ndash; a function accepting an element and {@link CKEDITOR.filter.transformationsTools}
	   *		or a string containing the name of the {@link CKEDITOR.filter.transformationsTools} method
	   *		that should be called on an element.
	   *
	   * A shorthand format is also available. A transformation rule can be defined by
	   * a single string `'check:right'`. The string before `':'` will be used as
	   * the `check` property and the second part as the `right` property.
	   *
	   * Transformation rules can be grouped. The filter will try to apply
	   * the first rule in a group. If it *matches*, the filter will ignore subsequent rules and
	   * will move to the next group. If it does not *match*, the next rule will be checked.
	   *
	   * Examples:
	   *
	   *		editor.filter.addTransformations( [
	   *			// First group.
	   *			[
	   *				// First rule. If table{width} is allowed, it
	   *				// executes {@link CKEDITOR.filter.transformationsTools#sizeToStyle} on a table element.
	   *				'table{width}: sizeToStyle',
	   *				// Second rule should not be executed if the first was.
	   *				'table[width]: sizeToAttribute'
	   *			],
	   *			// Second group.
	   *			[
	   *				// This rule will add the foo="1" attribute to all images that
	   *				// do not have it.
	   *				{
	   *					element: 'img',
	   *					left: function( el ) {
	   *						return !el.attributes.foo;
	   *					},
	   *					right: function( el, tools ) {
	   *						el.attributes.foo = '1';
	   *					}
	   *				}
	   *			]
	   *		] );
	   *
	   *		// Case 1:
	   *		// config.allowedContent = 'table{height,width}; tr td'.
	   *		//
	   *		// '<table style="height:100px; width:200px">...</table>'		-> '<table style="height:100px; width:200px">...</table>'
	   *		// '<table height="100" width="200">...</table>'				-> '<table style="height:100px; width:200px">...</table>'
	   *
	   *		// Case 2:
	   *		// config.allowedContent = 'table[height,width]; tr td'.
	   *		//
	   *		// '<table style="height:100px; width:200px">...</table>'		-> '<table height="100" width="200">...</table>'
	   *		// '<table height="100" width="200">...</table>'				-> '<table height="100" width="200"">...</table>'
	   *
	   *		// Case 3:
	   *		// config.allowedContent = 'table{width,height}[height,width]; tr td'.
	   *		//
	   *		// '<table style="height:100px; width:200px">...</table>'		-> '<table style="height:100px; width:200px">...</table>'
	   *		// '<table height="100" width="200">...</table>'				-> '<table style="height:100px; width:200px">...</table>'
	   *		//
	   *		// Note: Both forms are allowed (size set by style and by attributes), but only
	   *		// the first transformation is applied &mdash; the size is always transformed to a style.
	   *		// This is because only the first transformation matching allowed content rules is applied.
	   *
	   * This method is used by the editor to add {@link CKEDITOR.feature#contentTransformations}
	   * when adding a feature by {@link #addFeature} or {@link CKEDITOR.editor#addFeature}.
	   *
	   * @param {Array} transformations
	   */
			addTransformations: function (transformations) {
				if (this.disabled) return;
	
				if (!transformations) return;
	
				var optimized = this._.transformations,
				    group,
				    i;
	
				for (i = 0; i < transformations.length; ++i) {
					group = optimizeTransformationsGroup(transformations[i]);
	
					if (!optimized[group.name]) optimized[group.name] = [];
	
					optimized[group.name].push(group.rules);
				}
			},
	
			/**
	   * Checks whether the content defined in the `test` argument is allowed
	   * by this filter.
	   *
	   * If `strictCheck` is set to `false` (default value), this method checks
	   * if all parts of the `test` (styles, attributes, and classes) are
	   * accepted by the filter. If `strictCheck` is set to `true`, the test
	   * must also contain the required attributes, styles, and classes.
	   *
	   * For example:
	   *
	   *		// Rule: 'img[!src,alt]'.
	   *		filter.check( 'img[alt]' ); // -> true
	   *		filter.check( 'img[alt]', true, true ); // -> false
	   *
	   * Second `check()` call returned `false` because `src` is required.
	   *
	   * **Note:** The `test` argument is of {@link CKEDITOR.filter.contentRule} type, which is
	   * a limited version of {@link CKEDITOR.filter.allowedContentRules}. Read more about it
	   * in the {@link CKEDITOR.filter.contentRule}'s documentation.
	   *
	   * @param {CKEDITOR.filter.contentRule} test
	   * @param {Boolean} [applyTransformations=true] Whether to use registered transformations.
	   * @param {Boolean} [strictCheck] Whether the filter should check if an element with exactly
	   * these properties is allowed.
	   * @returns {Boolean} Returns `true` if the content is allowed.
	   */
			check: function (test, applyTransformations, strictCheck) {
				if (this.disabled) return true;
	
				// If rules are an array, expand it and return the logical OR value of
				// the rules.
				if (CKEDITOR.tools.isArray(test)) {
					for (var i = test.length; i--;) {
						if (this.check(test[i], applyTransformations, strictCheck)) return true;
					}
					return false;
				}
	
				var element, result, cacheKey;
	
				if (typeof test == 'string') {
					cacheKey = test + '<' + (applyTransformations === false ? '0' : '1') + (strictCheck ? '1' : '0') + '>';
	
					// Check if result of this check hasn't been already cached.
					if (cacheKey in this._.cachedChecks) return this._.cachedChecks[cacheKey];
	
					// Create test element from string.
					element = mockElementFromString(test);
				} else {
					// Create test element from CKEDITOR.style.
					element = mockElementFromStyle(test);
				}
	
				// Make a deep copy.
				var clone = CKEDITOR.tools.clone(element),
				    toBeRemoved = [],
				    transformations;
	
				// Apply transformations to original element.
				// Transformations will be applied to clone by the filter function.
				if (applyTransformations !== false && (transformations = this._.transformations[element.name])) {
					for (i = 0; i < transformations.length; ++i) applyTransformationsGroup(this, element, transformations[i]);
	
					// Transformations could modify styles or classes, so they need to be copied
					// to attributes object.
					updateAttributes(element);
				}
	
				// Filter clone of mocked element.
				processElement(this, clone, toBeRemoved, {
					doFilter: true,
					doTransform: applyTransformations !== false,
					skipRequired: !strictCheck,
					skipFinalValidation: !strictCheck
				});
	
				// Element has been marked for removal.
				if (toBeRemoved.length > 0) {
					result = false;
					// Compare only left to right, because clone may be only trimmed version of original element.
				} else if (!CKEDITOR.tools.objectCompare(element.attributes, clone.attributes, true)) {
					result = false;
				} else {
					result = true;
				}
	
				// Cache result of this test - we can build cache only for string tests.
				if (typeof test == 'string') this._.cachedChecks[cacheKey] = result;
	
				return result;
			},
	
			/**
	   * Returns first enter mode allowed by this filter rules. Modes are checked in `p`, `div`, `br` order.
	   * If none of tags is allowed this method will return {@link CKEDITOR#ENTER_BR}.
	   *
	   * @since 4.3
	   * @param {Number} defaultMode The default mode which will be checked as the first one.
	   * @param {Boolean} [reverse] Whether to check modes in reverse order (used for shift enter mode).
	   * @returns {Number} Allowed enter mode.
	   */
			getAllowedEnterMode: function () {
				var tagsToCheck = ['p', 'div', 'br'],
				    enterModes = {
					p: CKEDITOR.ENTER_P,
					div: CKEDITOR.ENTER_DIV,
					br: CKEDITOR.ENTER_BR
				};
	
				return function (defaultMode, reverse) {
					// Clone the array first.
					var tags = tagsToCheck.slice(),
					    tag;
	
					// Check the default mode first.
					if (this.check(enterModeTags[defaultMode])) return defaultMode;
	
					// If not reverse order, reverse array so we can pop() from it.
					if (!reverse) tags = tags.reverse();
	
					while (tag = tags.pop()) {
						if (this.check(tag)) return enterModes[tag];
					}
	
					return CKEDITOR.ENTER_BR;
				};
			}(),
	
			/**
	   * Destroys the filter instance and removes it from the global {@link CKEDITOR.filter#instances} object.
	   *
	   * @since 4.4.5
	   */
			destroy: function () {
				delete CKEDITOR.filter.instances[this.id];
				// Deleting reference to filter instance should be enough,
				// but since these are big objects it's safe to clean them up too.
				delete this._;
				delete this.allowedContent;
				delete this.disallowedContent;
			}
		};
	
		function addAndOptimizeRules(that, newRules, featureName, standardizedRules, optimizedRules) {
			var groupName,
			    rule,
			    rulesToOptimize = [];
	
			for (groupName in newRules) {
				rule = newRules[groupName];
	
				// { 'p h1': true } => { 'p h1': {} }.
				if (typeof rule == 'boolean') rule = {};
				// { 'p h1': func } => { 'p h1': { match: func } }.
				else if (typeof rule == 'function') rule = { match: rule };
					// Clone (shallow) rule, because we'll modify it later.
					else rule = copy(rule);
	
				// If this is not an unnamed rule ({ '$1' => { ... } })
				// move elements list to property.
				if (groupName.charAt(0) != '$') rule.elements = groupName;
	
				if (featureName) rule.featureName = featureName.toLowerCase();
	
				standardizeRule(rule);
	
				// Save rule and remember to optimize it.
				standardizedRules.push(rule);
				rulesToOptimize.push(rule);
			}
	
			optimizeRules(optimizedRules, rulesToOptimize);
		}
	
		// Apply ACR to an element.
		// @param rule
		// @param element
		// @param status Object containing status of element's filtering.
		// @param {Boolean} skipRequired If true don't check if element has all required properties.
		function applyAllowedRule(rule, element, status, skipRequired) {
			// This rule doesn't match this element - skip it.
			if (rule.match && !rule.match(element)) return;
	
			// If element doesn't have all required styles/attrs/classes
			// this rule doesn't match it.
			if (!skipRequired && !hasAllRequired(rule, element)) return;
	
			// If this rule doesn't validate properties only mark element as valid.
			if (!rule.propertiesOnly) status.valid = true;
	
			// Apply rule only when all attrs/styles/classes haven't been marked as valid.
			if (!status.allAttributes) status.allAttributes = applyAllowedRuleToHash(rule.attributes, element.attributes, status.validAttributes);
	
			if (!status.allStyles) status.allStyles = applyAllowedRuleToHash(rule.styles, element.styles, status.validStyles);
	
			if (!status.allClasses) status.allClasses = applyAllowedRuleToArray(rule.classes, element.classes, status.validClasses);
		}
	
		// Apply itemsRule to items (only classes are kept in array).
		// Push accepted items to validItems array.
		// Return true when all items are valid.
		function applyAllowedRuleToArray(itemsRule, items, validItems) {
			if (!itemsRule) return false;
	
			// True means that all elements of array are accepted (the asterix was used for classes).
			if (itemsRule === true) return true;
	
			for (var i = 0, l = items.length, item; i < l; ++i) {
				item = items[i];
				if (!validItems[item]) validItems[item] = itemsRule(item);
			}
	
			return false;
		}
	
		function applyAllowedRuleToHash(itemsRule, items, validItems) {
			if (!itemsRule) return false;
	
			if (itemsRule === true) return true;
	
			for (var name in items) {
				if (!validItems[name]) validItems[name] = itemsRule(name);
			}
	
			return false;
		}
	
		// Apply DACR rule to an element.
		function applyDisallowedRule(rule, element, status) {
			// This rule doesn't match this element - skip it.
			if (rule.match && !rule.match(element)) return;
	
			// No properties - it's an element only rule so it disallows entire element.
			// Early return is handled in filterElement.
			if (rule.noProperties) return false;
	
			// Apply rule to attributes, styles and classes. Switch hadInvalid* to true if method returned true.
			status.hadInvalidAttribute = applyDisallowedRuleToHash(rule.attributes, element.attributes) || status.hadInvalidAttribute;
			status.hadInvalidStyle = applyDisallowedRuleToHash(rule.styles, element.styles) || status.hadInvalidStyle;
			status.hadInvalidClass = applyDisallowedRuleToArray(rule.classes, element.classes) || status.hadInvalidClass;
		}
	
		// Apply DACR to items (only classes are kept in array).
		// @returns {Boolean} True if at least one of items was invalid (disallowed).
		function applyDisallowedRuleToArray(itemsRule, items) {
			if (!itemsRule) return false;
	
			var hadInvalid = false,
			    allDisallowed = itemsRule === true;
	
			for (var i = items.length; i--;) {
				if (allDisallowed || itemsRule(items[i])) {
					items.splice(i, 1);
					hadInvalid = true;
				}
			}
	
			return hadInvalid;
		}
	
		// Apply DACR to items (styles and attributes).
		// @returns {Boolean} True if at least one of items was invalid (disallowed).
		function applyDisallowedRuleToHash(itemsRule, items) {
			if (!itemsRule) return false;
	
			var hadInvalid = false,
			    allDisallowed = itemsRule === true;
	
			for (var name in items) {
				if (allDisallowed || itemsRule(name)) {
					delete items[name];
					hadInvalid = true;
				}
			}
	
			return hadInvalid;
		}
	
		function beforeAddingRule(that, newRules, overrideCustom) {
			if (that.disabled) return false;
	
			// Don't override custom user's configuration if not explicitly requested.
			if (that.customConfig && !overrideCustom) return false;
	
			if (!newRules) return false;
	
			// Clear cache, because new rules could change results of checks.
			that._.cachedChecks = {};
	
			return true;
		}
	
		// Convert CKEDITOR.style to filter's rule.
		function convertStyleToRules(style) {
			var styleDef = style.getDefinition(),
			    rules = {},
			    rule,
			    attrs = styleDef.attributes;
	
			rules[styleDef.element] = rule = {
				styles: styleDef.styles,
				requiredStyles: styleDef.styles && CKEDITOR.tools.objectKeys(styleDef.styles)
			};
	
			if (attrs) {
				attrs = copy(attrs);
				rule.classes = attrs['class'] ? attrs['class'].split(/\s+/) : null;
				rule.requiredClasses = rule.classes;
				delete attrs['class'];
				rule.attributes = attrs;
				rule.requiredAttributes = attrs && CKEDITOR.tools.objectKeys(attrs);
			}
	
			return rules;
		}
	
		// Convert all validator formats (string, array, object, boolean) to hash or boolean:
		// * true is returned for '*'/true validator,
		// * false is returned for empty validator (no validator at all (false/null) or e.g. empty array),
		// * object is returned in other cases.
		function convertValidatorToHash(validator, delimiter) {
			if (!validator) return false;
	
			if (validator === true) return validator;
	
			if (typeof validator == 'string') {
				validator = trim(validator);
				if (validator == '*') return true;else return CKEDITOR.tools.convertArrayToObject(validator.split(delimiter));
			} else if (CKEDITOR.tools.isArray(validator)) {
				if (validator.length) return CKEDITOR.tools.convertArrayToObject(validator);else return false;
			}
			// If object.
			else {
					var obj = {},
					    len = 0;
	
					for (var i in validator) {
						obj[i] = validator[i];
						len++;
					}
	
					return len ? obj : false;
				}
		}
	
		function executeElementCallbacks(element, callbacks) {
			for (var i = 0, l = callbacks.length, retVal; i < l; ++i) {
				if (retVal = callbacks[i](element)) return retVal;
			}
		}
	
		// Extract required properties from "required" validator and "all" properties.
		// Remove exclamation marks from "all" properties.
		//
		// E.g.:
		// requiredClasses = { cl1: true }
		// (all) classes = { cl1: true, cl2: true, '!cl3': true }
		//
		// result:
		// returned = { cl1: true, cl3: true }
		// all = { cl1: true, cl2: true, cl3: true }
		//
		// This function returns false if nothing is required.
		function extractRequired(required, all) {
			var unbang = [],
			    empty = true,
			    i;
	
			if (required) empty = false;else required = {};
	
			for (i in all) {
				if (i.charAt(0) == '!') {
					i = i.slice(1);
					unbang.push(i);
					required[i] = true;
					empty = false;
				}
			}
	
			while (i = unbang.pop()) {
				all[i] = all['!' + i];
				delete all['!' + i];
			}
	
			return empty ? false : required;
		}
	
		// Does the actual filtering by appling allowed content rules
		// to the element.
		//
		// @param {CKEDITOR.filter} that The context.
		// @param {CKEDITOR.htmlParser.element} element
		// @param {Object} opts The same as in processElement.
		function filterElement(that, element, opts) {
			var name = element.name,
			    privObj = that._,
			    allowedRules = privObj.allowedRules.elements[name],
			    genericAllowedRules = privObj.allowedRules.generic,
			    disallowedRules = privObj.disallowedRules.elements[name],
			    genericDisallowedRules = privObj.disallowedRules.generic,
			    skipRequired = opts.skipRequired,
			    status = {
				// Whether any of rules accepted element.
				// If not - it will be stripped.
				valid: false,
				// Objects containing accepted attributes, classes and styles.
				validAttributes: {},
				validClasses: {},
				validStyles: {},
				// Whether all are valid.
				// If we know that all element's attrs/classes/styles are valid
				// we can skip their validation, to improve performance.
				allAttributes: false,
				allClasses: false,
				allStyles: false,
				// Whether element had (before applying DACRs) at least one invalid attribute/class/style.
				hadInvalidAttribute: false,
				hadInvalidClass: false,
				hadInvalidStyle: false
			},
			    i,
			    l;
	
			// Early return - if there are no rules for this element (specific or generic), remove it.
			if (!allowedRules && !genericAllowedRules) return null;
	
			// Could not be done yet if there were no transformations and if this
			// is real (not mocked) object.
			populateProperties(element);
	
			// Note - this step modifies element's styles, classes and attributes.
			if (disallowedRules) {
				for (i = 0, l = disallowedRules.length; i < l; ++i) {
					// Apply rule and make an early return if false is returned what means
					// that element is completely disallowed.
					if (applyDisallowedRule(disallowedRules[i], element, status) === false) return null;
				}
			}
	
			// Note - this step modifies element's styles, classes and attributes.
			if (genericDisallowedRules) {
				for (i = 0, l = genericDisallowedRules.length; i < l; ++i) applyDisallowedRule(genericDisallowedRules[i], element, status);
			}
	
			if (allowedRules) {
				for (i = 0, l = allowedRules.length; i < l; ++i) applyAllowedRule(allowedRules[i], element, status, skipRequired);
			}
	
			if (genericAllowedRules) {
				for (i = 0, l = genericAllowedRules.length; i < l; ++i) applyAllowedRule(genericAllowedRules[i], element, status, skipRequired);
			}
	
			return status;
		}
	
		// Check whether element has all properties (styles,classes,attrs) required by a rule.
		function hasAllRequired(rule, element) {
			if (rule.nothingRequired) return true;
	
			var i, req, reqs, existing;
	
			if (reqs = rule.requiredClasses) {
				existing = element.classes;
				for (i = 0; i < reqs.length; ++i) {
					req = reqs[i];
					if (typeof req == 'string') {
						if (CKEDITOR.tools.indexOf(existing, req) == -1) return false;
					}
					// This means regexp.
					else {
							if (!CKEDITOR.tools.checkIfAnyArrayItemMatches(existing, req)) return false;
						}
				}
			}
	
			return hasAllRequiredInHash(element.styles, rule.requiredStyles) && hasAllRequiredInHash(element.attributes, rule.requiredAttributes);
		}
	
		// Check whether all items in required (array) exist in existing (object).
		function hasAllRequiredInHash(existing, required) {
			if (!required) return true;
	
			for (var i = 0, req; i < required.length; ++i) {
				req = required[i];
				if (typeof req == 'string') {
					if (!(req in existing)) return false;
				}
				// This means regexp.
				else {
						if (!CKEDITOR.tools.checkIfAnyObjectPropertyMatches(existing, req)) return false;
					}
			}
	
			return true;
		}
	
		// Create pseudo element that will be passed through filter
		// to check if tested string is allowed.
		function mockElementFromString(str) {
			var element = parseRulesString(str).$1,
			    styles = element.styles,
			    classes = element.classes;
	
			element.name = element.elements;
			element.classes = classes = classes ? classes.split(/\s*,\s*/) : [];
			element.styles = mockHash(styles);
			element.attributes = mockHash(element.attributes);
			element.children = [];
	
			if (classes.length) element.attributes['class'] = classes.join(' ');
			if (styles) element.attributes.style = CKEDITOR.tools.writeCssText(element.styles);
	
			return element;
		}
	
		// Create pseudo element that will be passed through filter
		// to check if tested style is allowed.
		function mockElementFromStyle(style) {
			var styleDef = style.getDefinition(),
			    styles = styleDef.styles,
			    attrs = styleDef.attributes || {};
	
			if (styles && !CKEDITOR.tools.isEmpty(styles)) {
				styles = copy(styles);
				attrs.style = CKEDITOR.tools.writeCssText(styles, true);
			} else {
				styles = {};
			}
	
			return {
				name: styleDef.element,
				attributes: attrs,
				classes: attrs['class'] ? attrs['class'].split(/\s+/) : [],
				styles: styles,
				children: []
			};
		}
	
		// Mock hash based on string.
		// 'a,b,c' => { a: 'cke-test', b: 'cke-test', c: 'cke-test' }
		// Used to mock styles and attributes objects.
		function mockHash(str) {
			// It may be a null or empty string.
			if (!str) return {};
	
			var keys = str.split(/\s*,\s*/).sort(),
			    obj = {};
	
			while (keys.length) obj[keys.shift()] = TEST_VALUE;
	
			return obj;
		}
	
		// Extract properties names from the object
		// and replace those containing wildcards with regexps.
		// Note: there's a room for performance improvement. Array of mixed types
		// breaks JIT-compiler optiomization what may invalidate compilation of pretty a lot of code.
		//
		// @returns An array of strings and regexps.
		function optimizeRequiredProperties(requiredProperties) {
			var arr = [];
			for (var propertyName in requiredProperties) {
				if (propertyName.indexOf('*') > -1) arr.push(new RegExp('^' + propertyName.replace(/\*/g, '.*') + '$'));else arr.push(propertyName);
			}
			return arr;
		}
	
		var validators = { styles: 1, attributes: 1, classes: 1 },
		    validatorsRequired = {
			styles: 'requiredStyles',
			attributes: 'requiredAttributes',
			classes: 'requiredClasses'
		};
	
		// Optimize a rule by replacing validators with functions
		// and rewriting requiredXXX validators to arrays.
		function optimizeRule(rule) {
			var validatorName, requiredProperties, i;
	
			for (validatorName in validators) rule[validatorName] = validatorFunction(rule[validatorName]);
	
			var nothingRequired = true;
			for (i in validatorsRequired) {
				validatorName = validatorsRequired[i];
				requiredProperties = optimizeRequiredProperties(rule[validatorName]);
				// Don't set anything if there are no required properties. This will allow to
				// save some memory by GCing all empty arrays (requiredProperties).
				if (requiredProperties.length) {
					rule[validatorName] = requiredProperties;
					nothingRequired = false;
				}
			}
	
			rule.nothingRequired = nothingRequired;
			rule.noProperties = !(rule.attributes || rule.classes || rule.styles);
		}
	
		// Add optimized version of rule to optimizedRules object.
		function optimizeRules(optimizedRules, rules) {
			var elementsRules = optimizedRules.elements,
			    genericRules = optimizedRules.generic,
			    i,
			    l,
			    rule,
			    element,
			    priority;
	
			for (i = 0, l = rules.length; i < l; ++i) {
				// Shallow copy. Do not modify original rule.
				rule = copy(rules[i]);
				priority = rule.classes === true || rule.styles === true || rule.attributes === true;
				optimizeRule(rule);
	
				// E.g. "*(xxx)[xxx]" - it's a generic rule that
				// validates properties only.
				// Or '$1': { match: function() {...} }
				if (rule.elements === true || rule.elements === null) {
					// Add priority rules at the beginning.
					genericRules[priority ? 'unshift' : 'push'](rule);
				}
				// If elements list was explicitly defined,
				// add this rule for every defined element.
				else {
						// We don't need elements validator for this kind of rule.
						var elements = rule.elements;
						delete rule.elements;
	
						for (element in elements) {
							if (!elementsRules[element]) elementsRules[element] = [rule];else elementsRules[element][priority ? 'unshift' : 'push'](rule);
						}
					}
			}
		}
	
		//                  <   elements   ><                       styles, attributes and classes                        >< separator >
		var rulePattern = /^([a-z0-9\-*\s]+)((?:\s*\{[!\w\-,\s\*]+\}\s*|\s*\[[!\w\-,\s\*]+\]\s*|\s*\([!\w\-,\s\*]+\)\s*){0,3})(?:;\s*|$)/i,
		    groupsPatterns = {
			styles: /{([^}]+)}/,
			attrs: /\[([^\]]+)\]/,
			classes: /\(([^\)]+)\)/
		};
	
		function parseRulesString(input) {
			var match,
			    props,
			    styles,
			    attrs,
			    classes,
			    rules = {},
			    groupNum = 1;
	
			input = trim(input);
	
			while (match = input.match(rulePattern)) {
				if (props = match[2]) {
					styles = parseProperties(props, 'styles');
					attrs = parseProperties(props, 'attrs');
					classes = parseProperties(props, 'classes');
				} else {
					styles = attrs = classes = null;
				}
	
				// Add as an unnamed rule, because there can be two rules
				// for one elements set defined in string format.
				rules['$' + groupNum++] = {
					elements: match[1],
					classes: classes,
					styles: styles,
					attributes: attrs
				};
	
				// Move to the next group.
				input = input.slice(match[0].length);
			}
	
			return rules;
		}
	
		// Extract specified properties group (styles, attrs, classes) from
		// what stands after the elements list in string format of allowedContent.
		function parseProperties(properties, groupName) {
			var group = properties.match(groupsPatterns[groupName]);
			return group ? trim(group[1]) : null;
		}
	
		function populateProperties(element) {
			// Backup styles and classes, because they may be removed by DACRs.
			// We'll need them in updateElement().
			var styles = element.styleBackup = element.attributes.style,
			    classes = element.classBackup = element.attributes['class'];
	
			// Parse classes and styles if that hasn't been done before.
			if (!element.styles) element.styles = CKEDITOR.tools.parseCssText(styles || '', 1);
			if (!element.classes) element.classes = classes ? classes.split(/\s+/) : [];
		}
	
		// Filter element protected with a comment.
		// Returns true if protected content is ok, false otherwise.
		function processProtectedElement(that, comment, protectedRegexs, filterOpts) {
			var source = decodeURIComponent(comment.value.replace(/^\{cke_protected\}/, '')),
			    protectedFrag,
			    toBeRemoved = [],
			    node,
			    i,
			    match;
	
			// Protected element's and protected source's comments look exactly the same.
			// Check if what we have isn't a protected source instead of protected script/noscript.
			if (protectedRegexs) {
				for (i = 0; i < protectedRegexs.length; ++i) {
					if ((match = source.match(protectedRegexs[i])) && match[0].length == source.length // Check whether this pattern matches entire source
					// to avoid '<script>alert("<? 1 ?>")</script>' matching
					// the PHP's protectedSource regexp.
					) return true;
				}
			}
	
			protectedFrag = CKEDITOR.htmlParser.fragment.fromHtml(source);
	
			if (protectedFrag.children.length == 1 && (node = protectedFrag.children[0]).type == CKEDITOR.NODE_ELEMENT) processElement(that, node, toBeRemoved, filterOpts);
	
			// If protected element has been marked to be removed, return 'false' - comment was rejected.
			return !toBeRemoved.length;
		}
	
		var unprotectElementsNamesRegexp = /^cke:(object|embed|param)$/,
		    protectElementsNamesRegexp = /^(object|embed|param)$/;
	
		// The actual function which filters, transforms and does other funny things with an element.
		//
		// @param {CKEDITOR.filter} that Context.
		// @param {CKEDITOR.htmlParser.element} element The element to be processed.
		// @param {Array} toBeRemoved Array into which elements rejected by the filter will be pushed.
		// @param {Boolean} [opts.doFilter] Whether element should be filtered.
		// @param {Boolean} [opts.doTransform] Whether transformations should be applied.
		// @param {Boolean} [opts.doCallbacks] Whether to execute element callbacks.
		// @param {Boolean} [opts.toHtml] Set to true if filter used together with htmlDP#toHtml
		// @param {Boolean} [opts.skipRequired] Whether element's required properties shouldn't be verified.
		// @param {Boolean} [opts.skipFinalValidation] Whether to not perform final element validation (a,img).
		// @returns {Number} Possible flags:
		//  * FILTER_ELEMENT_MODIFIED,
		//  * FILTER_SKIP_TREE.
		function processElement(that, element, toBeRemoved, opts) {
			var status,
			    retVal = 0,
			    callbacksRetVal;
	
			// Unprotect elements names previously protected by htmlDataProcessor
			// (see protectElementNames and protectSelfClosingElements functions).
			// Note: body, title, etc. are not protected by htmlDataP (or are protected and then unprotected).
			if (opts.toHtml) element.name = element.name.replace(unprotectElementsNamesRegexp, '$1');
	
			// Execute element callbacks and return if one of them returned any value.
			if (opts.doCallbacks && that.elementCallbacks) {
				// For now we only support here FILTER_SKIP_TREE, so we can early return if retVal is truly value.
				if (callbacksRetVal = executeElementCallbacks(element, that.elementCallbacks)) return callbacksRetVal;
			}
	
			// If transformations are set apply all groups.
			if (opts.doTransform) transformElement(that, element);
	
			if (opts.doFilter) {
				// Apply all filters.
				status = filterElement(that, element, opts);
	
				// Handle early return from filterElement.
				if (!status) {
					toBeRemoved.push(element);
					return FILTER_ELEMENT_MODIFIED;
				}
	
				// Finally, if after running all filter rules it still hasn't been allowed - remove it.
				if (!status.valid) {
					toBeRemoved.push(element);
					return FILTER_ELEMENT_MODIFIED;
				}
	
				// Update element's attributes based on status of filtering.
				if (updateElement(element, status)) retVal = FILTER_ELEMENT_MODIFIED;
	
				if (!opts.skipFinalValidation && !validateElement(element)) {
					toBeRemoved.push(element);
					return FILTER_ELEMENT_MODIFIED;
				}
			}
	
			// Protect previously unprotected elements.
			if (opts.toHtml) element.name = element.name.replace(protectElementsNamesRegexp, 'cke:$1');
	
			return retVal;
		}
	
		// Returns a regexp object which can be used to test if a property
		// matches one of wildcard validators.
		function regexifyPropertiesWithWildcards(validators) {
			var patterns = [],
			    i;
	
			for (i in validators) {
				if (i.indexOf('*') > -1) patterns.push(i.replace(/\*/g, '.*'));
			}
	
			if (patterns.length) return new RegExp('^(?:' + patterns.join('|') + ')$');else return null;
		}
	
		// Standardize a rule by converting all validators to hashes.
		function standardizeRule(rule) {
			rule.elements = convertValidatorToHash(rule.elements, /\s+/) || null;
			rule.propertiesOnly = rule.propertiesOnly || rule.elements === true;
	
			var delim = /\s*,\s*/,
			    i;
	
			for (i in validators) {
				rule[i] = convertValidatorToHash(rule[i], delim) || null;
				rule[validatorsRequired[i]] = extractRequired(convertValidatorToHash(rule[validatorsRequired[i]], delim), rule[i]) || null;
			}
	
			rule.match = rule.match || null;
		}
	
		// Does the element transformation by applying registered
		// transformation rules.
		function transformElement(that, element) {
			var transformations = that._.transformations[element.name],
			    i;
	
			if (!transformations) return;
	
			populateProperties(element);
	
			for (i = 0; i < transformations.length; ++i) applyTransformationsGroup(that, element, transformations[i]);
	
			// Do not count on updateElement() which is called in processElement, because it:
			// * may not be called,
			// * may skip some properties when all are marked as valid.
			updateAttributes(element);
		}
	
		// Copy element's styles and classes back to attributes array.
		function updateAttributes(element) {
			var attrs = element.attributes,
			    styles;
	
			// Will be recreated later if any of styles/classes exists.
			delete attrs.style;
			delete attrs['class'];
	
			if (styles = CKEDITOR.tools.writeCssText(element.styles, true)) attrs.style = styles;
	
			if (element.classes.length) attrs['class'] = element.classes.sort().join(' ');
		}
	
		// Update element object based on status of filtering.
		// @returns Whether element was modified.
		function updateElement(element, status) {
			var validAttrs = status.validAttributes,
			    validStyles = status.validStyles,
			    validClasses = status.validClasses,
			    attrs = element.attributes,
			    styles = element.styles,
			    classes = element.classes,
			    origClasses = element.classBackup,
			    origStyles = element.styleBackup,
			    name,
			    origName,
			    i,
			    stylesArr = [],
			    classesArr = [],
			    internalAttr = /^data-cke-/,
			    isModified = false;
	
			// Will be recreated later if any of styles/classes were passed.
			delete attrs.style;
			delete attrs['class'];
			// Clean up.
			delete element.classBackup;
			delete element.styleBackup;
	
			if (!status.allAttributes) {
				for (name in attrs) {
					// If not valid and not internal attribute delete it.
					if (!validAttrs[name]) {
						// Allow all internal attibutes...
						if (internalAttr.test(name)) {
							// ... unless this is a saved attribute and the original one isn't allowed.
							if (name != (origName = name.replace(/^data-cke-saved-/, '')) && !validAttrs[origName]) {
								delete attrs[name];
								isModified = true;
							}
						} else {
							delete attrs[name];
							isModified = true;
						}
					}
				}
			}
	
			if (!status.allStyles || status.hadInvalidStyle) {
				for (name in styles) {
					// We check status.allStyles because when there was a '*' ACR and some
					// DACR we have now both properties true - status.allStyles and status.hadInvalidStyle.
					// However unlike in the case when we only have '*' ACR, in which we can just copy original
					// styles, in this case we must copy only those styles which were not removed by DACRs.
					if (status.allStyles || validStyles[name]) stylesArr.push(name + ':' + styles[name]);else isModified = true;
				}
				if (stylesArr.length) attrs.style = stylesArr.sort().join('; ');
			} else if (origStyles) {
				attrs.style = origStyles;
			}
	
			if (!status.allClasses || status.hadInvalidClass) {
				for (i = 0; i < classes.length; ++i) {
					// See comment for styles.
					if (status.allClasses || validClasses[classes[i]]) classesArr.push(classes[i]);
				}
				if (classesArr.length) attrs['class'] = classesArr.sort().join(' ');
	
				if (origClasses && classesArr.length < origClasses.split(/\s+/).length) isModified = true;
			} else if (origClasses) {
				attrs['class'] = origClasses;
			}
	
			return isModified;
		}
	
		function validateElement(element) {
			switch (element.name) {
				case 'a':
					// Code borrowed from htmlDataProcessor, so ACF does the same clean up.
					if (!(element.children.length || element.attributes.name || element.attributes.id)) return false;
					break;
				case 'img':
					if (!element.attributes.src) return false;
					break;
			}
	
			return true;
		}
	
		function validatorFunction(validator) {
			if (!validator) return false;
			if (validator === true) return true;
	
			// Note: We don't need to remove properties with wildcards from the validator object.
			// E.g. data-* is actually an edge case of /^data-.*$/, so when it's accepted
			// by `value in validator` it's ok.
			var regexp = regexifyPropertiesWithWildcards(validator);
	
			return function (value) {
				return value in validator || regexp && value.match(regexp);
			};
		}
	
		//
		// REMOVE ELEMENT ---------------------------------------------------------
		//
	
		// Check whether all children will be valid in new context.
		// Note: it doesn't verify if text node is valid, because
		// new parent should accept them.
		function checkChildren(children, newParentName) {
			var allowed = DTD[newParentName];
	
			for (var i = 0, l = children.length, child; i < l; ++i) {
				child = children[i];
				if (child.type == CKEDITOR.NODE_ELEMENT && !allowed[child.name]) return false;
			}
	
			return true;
		}
	
		function createBr() {
			return new CKEDITOR.htmlParser.element('br');
		}
	
		// Whether this is an inline element or text.
		function inlineNode(node) {
			return node.type == CKEDITOR.NODE_TEXT || node.type == CKEDITOR.NODE_ELEMENT && DTD.$inline[node.name];
		}
	
		function isBrOrBlock(node) {
			return node.type == CKEDITOR.NODE_ELEMENT && (node.name == 'br' || DTD.$block[node.name]);
		}
	
		// Try to remove element in the best possible way.
		//
		// @param {Array} toBeChecked After executing this function
		// this array will contain elements that should be checked
		// because they were marked as potentially:
		// * in wrong context (e.g. li in body),
		// * empty elements from $removeEmpty,
		// * incorrect img/a/other element validated by validateElement().
		function removeElement(element, enterTag, toBeChecked) {
			var name = element.name;
	
			if (DTD.$empty[name] || !element.children.length) {
				// Special case - hr in br mode should be replaced with br, not removed.
				if (name == 'hr' && enterTag == 'br') element.replaceWith(createBr());else {
					// Parent might become an empty inline specified in $removeEmpty or empty a[href].
					if (element.parent) toBeChecked.push({ check: 'it', el: element.parent });
	
					element.remove();
				}
			} else if (DTD.$block[name] || name == 'tr') {
				if (enterTag == 'br') stripBlockBr(element, toBeChecked);else stripBlock(element, enterTag, toBeChecked);
			}
			// Special case - elements that may contain CDATA should be removed completely.
			else if (name in { style: 1, script: 1 }) element.remove();
				// The rest of inline elements. May also be the last resort
				// for some special elements.
				else {
						// Parent might become an empty inline specified in $removeEmpty or empty a[href].
						if (element.parent) toBeChecked.push({ check: 'it', el: element.parent });
						element.replaceWithChildren();
					}
		}
	
		// Strip element block, but leave its content.
		// Works in 'div' and 'p' enter modes.
		function stripBlock(element, enterTag, toBeChecked) {
			var children = element.children;
	
			// First, check if element's children may be wrapped with <p/div>.
			// Ignore that <p/div> may not be allowed in element.parent.
			// This will be fixed when removing parent or by toBeChecked rule.
			if (checkChildren(children, enterTag)) {
				element.name = enterTag;
				element.attributes = {};
				// Check if this p/div was put in correct context.
				// If not - strip parent.
				toBeChecked.push({ check: 'parent-down', el: element });
				return;
			}
	
			var parent = element.parent,
			    shouldAutoP = parent.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || parent.name == 'body',
			    i,
			    child,
			    p,
			    parentDtd;
	
			for (i = children.length; i > 0;) {
				child = children[--i];
	
				// If parent requires auto paragraphing and child is inline node,
				// insert this child into newly created paragraph.
				if (shouldAutoP && inlineNode(child)) {
					if (!p) {
						p = new CKEDITOR.htmlParser.element(enterTag);
						p.insertAfter(element);
	
						// Check if this p/div was put in correct context.
						// If not - strip parent.
						toBeChecked.push({ check: 'parent-down', el: p });
					}
					p.add(child, 0);
				}
				// Child which doesn't need to be auto paragraphed.
				else {
						p = null;
						parentDtd = DTD[parent.name] || DTD.span;
	
						child.insertAfter(element);
						// If inserted into invalid context, mark it and check
						// after removing all elements.
						if (parent.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT && child.type == CKEDITOR.NODE_ELEMENT && !parentDtd[child.name]) toBeChecked.push({ check: 'el-up', el: child });
					}
			}
	
			// All children have been moved to element's parent, so remove it.
			element.remove();
		}
	
		// Prepend/append block with <br> if isn't
		// already prepended/appended with <br> or block and
		// isn't first/last child of its parent.
		// Then replace element with its children.
		// <p>a</p><p>b</p> => <p>a</p><br>b => a<br>b
		function stripBlockBr(element) {
			var br;
	
			if (element.previous && !isBrOrBlock(element.previous)) {
				br = createBr();
				br.insertBefore(element);
			}
	
			if (element.next && !isBrOrBlock(element.next)) {
				br = createBr();
				br.insertAfter(element);
			}
	
			element.replaceWithChildren();
		}
	
		//
		// TRANSFORMATIONS --------------------------------------------------------
		//
		var transformationsTools;
	
		// Apply given transformations group to the element.
		function applyTransformationsGroup(filter, element, group) {
			var i, rule;
	
			for (i = 0; i < group.length; ++i) {
				rule = group[i];
	
				// Test with #check or #left only if it's set.
				// Do not apply transformations because that creates infinite loop.
				if ((!rule.check || filter.check(rule.check, false)) && (!rule.left || rule.left(element))) {
					rule.right(element, transformationsTools);
					return; // Only first matching rule in a group is executed.
				}
			}
		}
	
		// Check whether element matches CKEDITOR.style.
		// The element can be a "superset" of style,
		// e.g. it may have more classes, but need to have
		// at least those defined in style.
		function elementMatchesStyle(element, style) {
			var def = style.getDefinition(),
			    defAttrs = def.attributes,
			    defStyles = def.styles,
			    attrName,
			    styleName,
			    classes,
			    classPattern,
			    cl;
	
			if (element.name != def.element) return false;
	
			for (attrName in defAttrs) {
				if (attrName == 'class') {
					classes = defAttrs[attrName].split(/\s+/);
					classPattern = element.classes.join('|');
					while (cl = classes.pop()) {
						if (classPattern.indexOf(cl) == -1) return false;
					}
				} else {
					if (element.attributes[attrName] != defAttrs[attrName]) return false;
				}
			}
	
			for (styleName in defStyles) {
				if (element.styles[styleName] != defStyles[styleName]) return false;
			}
	
			return true;
		}
	
		// Return transformation group for content form.
		// One content form makes one transformation rule in one group.
		function getContentFormTransformationGroup(form, preferredForm) {
			var element, left;
	
			if (typeof form == 'string') element = form;else if (form instanceof CKEDITOR.style) left = form;else {
				element = form[0];
				left = form[1];
			}
	
			return [{
				element: element,
				left: left,
				right: function (el, tools) {
					tools.transform(el, preferredForm);
				}
			}];
		}
	
		// Obtain element's name from transformation rule.
		// It will be defined by #element, or #check or #left (styleDef.element).
		function getElementNameForTransformation(rule, check) {
			if (rule.element) return rule.element;
			if (check) return check.match(/^([a-z0-9]+)/i)[0];
			return rule.left.getDefinition().element;
		}
	
		function getMatchStyleFn(style) {
			return function (el) {
				return elementMatchesStyle(el, style);
			};
		}
	
		function getTransformationFn(toolName) {
			return function (el, tools) {
				tools[toolName](el);
			};
		}
	
		function optimizeTransformationsGroup(rules) {
			var groupName,
			    i,
			    rule,
			    check,
			    left,
			    right,
			    optimizedRules = [];
	
			for (i = 0; i < rules.length; ++i) {
				rule = rules[i];
	
				if (typeof rule == 'string') {
					rule = rule.split(/\s*:\s*/);
					check = rule[0];
					left = null;
					right = rule[1];
				} else {
					check = rule.check;
					left = rule.left;
					right = rule.right;
				}
	
				// Extract element name.
				if (!groupName) groupName = getElementNameForTransformation(rule, check);
	
				if (left instanceof CKEDITOR.style) left = getMatchStyleFn(left);
	
				optimizedRules.push({
					// It doesn't make sense to test against name rule (e.g. 'table'), so don't save it.
					check: check == groupName ? null : check,
	
					left: left,
	
					// Handle shorthand format. E.g.: 'table[width]:sizeToAttribute'.
					right: typeof right == 'string' ? getTransformationFn(right) : right
				});
			}
	
			return {
				name: groupName,
				rules: optimizedRules
			};
		}
	
		/**
	  * Singleton containing tools useful for transformation rules.
	  *
	  * @class CKEDITOR.filter.transformationsTools
	  * @singleton
	  */
		transformationsTools = CKEDITOR.filter.transformationsTools = {
			/**
	   * Converts `width` and `height` attributes to styles.
	   *
	   * @param {CKEDITOR.htmlParser.element} element
	   */
			sizeToStyle: function (element) {
				this.lengthToStyle(element, 'width');
				this.lengthToStyle(element, 'height');
			},
	
			/**
	   * Converts `width` and `height` styles to attributes.
	   *
	   * @param {CKEDITOR.htmlParser.element} element
	   */
			sizeToAttribute: function (element) {
				this.lengthToAttribute(element, 'width');
				this.lengthToAttribute(element, 'height');
			},
	
			/**
	   * Converts length in the `attrName` attribute to a valid CSS length (like `width` or `height`).
	   *
	   * @param {CKEDITOR.htmlParser.element} element
	   * @param {String} attrName Name of the attribute that will be converted.
	   * @param {String} [styleName=attrName] Name of the style into which the attribute will be converted.
	   */
			lengthToStyle: function (element, attrName, styleName) {
				styleName = styleName || attrName;
	
				if (!(styleName in element.styles)) {
					var value = element.attributes[attrName];
	
					if (value) {
						if (/^\d+$/.test(value)) value += 'px';
	
						element.styles[styleName] = value;
					}
				}
	
				delete element.attributes[attrName];
			},
	
			/**
	   * Converts length in the `styleName` style to a valid length attribute (like `width` or `height`).
	   *
	   * @param {CKEDITOR.htmlParser.element} element
	   * @param {String} styleName Name of the style that will be converted.
	   * @param {String} [attrName=styleName] Name of the attribute into which the style will be converted.
	   */
			lengthToAttribute: function (element, styleName, attrName) {
				attrName = attrName || styleName;
	
				if (!(attrName in element.attributes)) {
					var value = element.styles[styleName],
					    match = value && value.match(/^(\d+)(?:\.\d*)?px$/);
	
					if (match) element.attributes[attrName] = match[1];
					// Pass the TEST_VALUE used by filter#check when mocking element.
					else if (value == TEST_VALUE) element.attributes[attrName] = TEST_VALUE;
				}
	
				delete element.styles[styleName];
			},
	
			/**
	   * Converts the `align` attribute to the `float` style if not set. Attribute
	   * is always removed.
	   *
	   * @param {CKEDITOR.htmlParser.element} element
	   */
			alignmentToStyle: function (element) {
				if (!('float' in element.styles)) {
					var value = element.attributes.align;
	
					if (value == 'left' || value == 'right') element.styles['float'] = value; // Uh... GCC doesn't like the 'float' prop name.
				}
	
				delete element.attributes.align;
			},
	
			/**
	   * Converts the `float` style to the `align` attribute if not set.
	   * Style is always removed.
	   *
	   * @param {CKEDITOR.htmlParser.element} element
	   */
			alignmentToAttribute: function (element) {
				if (!('align' in element.attributes)) {
					var value = element.styles['float'];
	
					if (value == 'left' || value == 'right') element.attributes.align = value;
				}
	
				delete element.styles['float']; // Uh... GCC doesn't like the 'float' prop name.
			},
	
			/**
	   * Checks whether an element matches a given {@link CKEDITOR.style}.
	   * The element can be a "superset" of a style, e.g. it may have
	   * more classes, but needs to have at least those defined in the style.
	   *
	   * @param {CKEDITOR.htmlParser.element} element
	   * @param {CKEDITOR.style} style
	   */
			matchesStyle: elementMatchesStyle,
	
			/**
	   * Transforms element to given form.
	   *
	   * Form may be a:
	   *
	   *	* {@link CKEDITOR.style},
	   *	* string &ndash; the new name of an element.
	   *
	   * @param {CKEDITOR.htmlParser.element} el
	   * @param {CKEDITOR.style/String} form
	   */
			transform: function (el, form) {
				if (typeof form == 'string') el.name = form;
				// Form is an instance of CKEDITOR.style.
				else {
						var def = form.getDefinition(),
						    defStyles = def.styles,
						    defAttrs = def.attributes,
						    attrName,
						    styleName,
						    existingClassesPattern,
						    defClasses,
						    cl;
	
						el.name = def.element;
	
						for (attrName in defAttrs) {
							if (attrName == 'class') {
								existingClassesPattern = el.classes.join('|');
								defClasses = defAttrs[attrName].split(/\s+/);
	
								while (cl = defClasses.pop()) {
									if (existingClassesPattern.indexOf(cl) == -1) el.classes.push(cl);
								}
							} else {
								el.attributes[attrName] = defAttrs[attrName];
							}
						}
	
						for (styleName in defStyles) {
							el.styles[styleName] = defStyles[styleName];
						}
					}
			}
		};
	})();
	
	/**
	 * Allowed content rules. This setting is used when
	 * instantiating {@link CKEDITOR.editor#filter}.
	 *
	 * The following values are accepted:
	 *
	 *	* {@link CKEDITOR.filter.allowedContentRules} &ndash; defined rules will be added
	 *	to the {@link CKEDITOR.editor#filter}.
	 *	* `true` &ndash; will disable the filter (data will not be filtered,
	 *	all features will be activated).
	 *	* default &ndash; the filter will be configured by loaded features
	 *	(toolbar items, commands, etc.).
	 *
	 * In all cases filter configuration may be extended by
	 * {@link CKEDITOR.config#extraAllowedContent}. This option may be especially
	 * useful when you want to use the default `allowedContent` value
	 * along with some additional rules.
	 *
	 *		CKEDITOR.replace( 'textarea_id', {
	 *			allowedContent: 'p b i; a[!href]',
	 *			on: {
	 *				instanceReady: function( evt ) {
	 *					var editor = evt.editor;
	 *
	 *					editor.filter.check( 'h1' ); // -> false
	 *					editor.setData( '<h1><i>Foo</i></h1><p class="left"><span>Bar</span> <a href="http://foo.bar">foo</a></p>' );
	 *					// Editor contents will be:
	 *					'<p><i>Foo</i></p><p>Bar <a href="http://foo.bar">foo</a></p>'
	 *				}
	 *			}
	 *		} );
	 *
	 * It is also possible to disallow some already allowed content. It is especially
	 * useful when you want to "trim down" the content allowed by default by
	 * editor features. To do that, use the {@link #disallowedContent} option.
	 *
	 * Read more in the [documentation](#!/guide/dev_acf)
	 * and see the [SDK sample](http://sdk.ckeditor.com/samples/acf.html).
	 *
	 * @since 4.1
	 * @cfg {CKEDITOR.filter.allowedContentRules/Boolean} [allowedContent=null]
	 * @member CKEDITOR.config
	 */
	
	/**
	 * This option makes it possible to set additional allowed
	 * content rules for {@link CKEDITOR.editor#filter}.
	 *
	 * It is especially useful in combination with the default
	 * {@link CKEDITOR.config#allowedContent} value:
	 *
	 *		CKEDITOR.replace( 'textarea_id', {
	 *			plugins: 'wysiwygarea,toolbar,format',
	 *			extraAllowedContent: 'b i',
	 *			on: {
	 *				instanceReady: function( evt ) {
	 *					var editor = evt.editor;
	 *
	 *					editor.filter.check( 'h1' ); // -> true (thanks to Format combo)
	 *					editor.filter.check( 'b' ); // -> true (thanks to extraAllowedContent)
	 *					editor.setData( '<h1><i>Foo</i></h1><p class="left"><b>Bar</b> <a href="http://foo.bar">foo</a></p>' );
	 *					// Editor contents will be:
	 *					'<h1><i>Foo</i></h1><p><b>Bar</b> foo</p>'
	 *				}
	 *			}
	 *		} );
	 *
	 * Read more in the [documentation](#!/guide/dev_acf-section-automatic-mode-and-allow-additional-tags%2Fproperties)
	 * and see the [SDK sample](http://sdk.ckeditor.com/samples/acf.html).
	 * See also {@link CKEDITOR.config#allowedContent} for more details.
	 *
	 * @since 4.1
	 * @cfg {Object/String} extraAllowedContent
	 * @member CKEDITOR.config
	 */
	
	/**
	 * Disallowed content rules. They have precedence over {@link #allowedContent allowed content rules}.
	 * Read more in the [Disallowed Content guide](#!/guide/dev_disallowed_content).
	 *
	 * Read more in the [documentation](#!/guide/dev_acf-section-automatic-mode-but-disallow-certain-tags%2Fproperties)
	 * and see the [SDK sample](http://sdk.ckeditor.com/samples/acf.html).
	 * See also {@link CKEDITOR.config#allowedContent} and {@link CKEDITOR.config#extraAllowedContent}.
	 *
	 * @since 4.4
	 * @cfg {CKEDITOR.filter.disallowedContentRules} disallowedContent
	 * @member CKEDITOR.config
	 */
	
	/**
	 * This event is fired when {@link CKEDITOR.filter} has stripped some
	 * content from the data that was loaded (e.g. by {@link CKEDITOR.editor#method-setData}
	 * method or in the source mode) or inserted (e.g. when pasting or using the
	 * {@link CKEDITOR.editor#method-insertHtml} method).
	 *
	 * This event is useful when testing whether the {@link CKEDITOR.config#allowedContent}
	 * setting is sufficient and correct for a system that is migrating to CKEditor 4.1
	 * (where the [Advanced Content Filter](#!/guide/dev_advanced_content_filter) was introduced).
	 *
	 * @since 4.1
	 * @event dataFiltered
	 * @member CKEDITOR.editor
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Virtual class which is the [Allowed Content Rules](#!/guide/dev_allowed_content_rules) formats type.
	 *
	 * Possible formats are:
	 *
	 *	* the [string format](#!/guide/dev_allowed_content_rules-section-2),
	 *	* the [object format](#!/guide/dev_allowed_content_rules-section-3),
	 *	* a {@link CKEDITOR.style} instance &ndash; used mainly for integrating plugins with Advanced Content Filter,
	 *	* an array of the above formats.
	 *
	 * @since 4.1
	 * @class CKEDITOR.filter.allowedContentRules
	 * @abstract
	 */
	
	/**
	 * Virtual class representing the {@link CKEDITOR.filter#disallow} argument and a type of
	 * the {@link CKEDITOR.config#disallowedContent} option.
	 *
	 * This is a simplified version of the {@link CKEDITOR.filter.allowedContentRules} type.
	 * Only the string format and object format are accepted. Required properties
	 * are not allowed in this format.
	 *
	 * Read more in the [Disallowed Content guide](#!/guide/dev_disallowed_content).
	 *
	 * @since 4.4
	 * @class CKEDITOR.filter.disallowedContentRules
	 * @abstract
	 */
	
	/**
	 * Virtual class representing {@link CKEDITOR.filter#check} argument.
	 *
	 * This is a simplified version of the {@link CKEDITOR.filter.allowedContentRules} type.
	 * It may contain only one element and its styles, classes, and attributes. Only the
	 * string format and a {@link CKEDITOR.style} instances are accepted. Required properties
	 * are not allowed in this format.
	 *
	 * Example:
	 *
	 *		'img[src,alt](foo)'	// Correct rule.
	 *		'ol, ul(!foo)'		// Incorrect rule. Multiple elements and required
	 *							// properties are not supported.
	 *
	 * @since 4.1
	 * @class CKEDITOR.filter.contentRule
	 * @abstract
	 */
	
	/**
	 * Interface that may be automatically implemented by any
	 * instance of any class which has at least the `name` property and
	 * can be meant as an editor feature.
	 *
	 * For example:
	 *
	 *	* "Bold" command, button, and keystroke &ndash; it does not mean exactly
	 * `<strong>` or `<b>` but just the ability to create bold text.
	 *	* "Format" drop-down list &ndash; it also does not imply any HTML tag.
	 *	* "Link" command, button, and keystroke.
	 *	* "Image" command, button, and dialog window.
	 *
	 * Thus most often a feature is an instance of one of the following classes:
	 *
	 *	* {@link CKEDITOR.command}
	 *	* {@link CKEDITOR.ui.button}
	 *	* {@link CKEDITOR.ui.richCombo}
	 *
	 * None of them have a `name` property explicitly defined, but
	 * it is set by {@link CKEDITOR.editor#addCommand} and {@link CKEDITOR.ui#add}.
	 *
	 * During editor initialization all features that the editor should activate
	 * should be passed to {@link CKEDITOR.editor#addFeature} (shorthand for {@link CKEDITOR.filter#addFeature}).
	 *
	 * This method checks if a feature can be activated (see {@link #requiredContent}) and if yes,
	 * then it registers allowed content rules required by this feature (see {@link #allowedContent}) along
	 * with two kinds of transformations: {@link #contentForms} and {@link #contentTransformations}.
	 *
	 * By default all buttons that are included in [toolbar layout configuration](#!/guide/dev_toolbar)
	 * are checked and registered with {@link CKEDITOR.editor#addFeature}, all styles available in the
	 * 'Format' and 'Styles' drop-down lists are checked and registered too and so on.
	 *
	 * @since 4.1
	 * @class CKEDITOR.feature
	 * @abstract
	 */
	
	/**
	 * HTML code that can be generated by this feature.
	 *
	 * For example a basic image feature (image button displaying the image dialog window)
	 * may allow `'img[!src,alt,width,height]'`.
	 *
	 * During the feature activation this value is passed to {@link CKEDITOR.filter#allow}.
	 *
	 * @property {CKEDITOR.filter.allowedContentRules} [allowedContent=null]
	 */
	
	/**
	 * Minimal HTML code that this feature must be allowed to
	 * generate in order to work.
	 *
	 * For example a basic image feature (image button displaying the image dialog window)
	 * needs `'img[src,alt]'` in order to be activated.
	 *
	 * During the feature validation this value is passed to {@link CKEDITOR.filter#check}.
	 *
	 * If this value is not provided, a feature will be always activated.
	 *
	 * @property {CKEDITOR.filter.contentRule} [requiredContent=null]
	 */
	
	/**
	 * The name of the feature.
	 *
	 * It is used for example to identify which {@link CKEDITOR.filter#allowedContent}
	 * rule was added for which feature.
	 *
	 * @property {String} name
	 */
	
	/**
	 * Feature content forms to be registered in the {@link CKEDITOR.editor#filter}
	 * during the feature activation.
	 *
	 * See {@link CKEDITOR.filter#addContentForms} for more details.
	 *
	 * @property [contentForms=null]
	 */
	
	/**
	 * Transformations (usually for content generated by this feature, but not necessarily)
	 * that will be registered in the {@link CKEDITOR.editor#filter} during the feature activation.
	 *
	 * See {@link CKEDITOR.filter#addTransformations} for more details.
	 *
	 * @property [contentTransformations=null]
	 */
	
	/**
	 * Returns a feature that this feature needs to register.
	 *
	 * In some cases, during activation, one feature may need to register
	 * another feature. For example a {@link CKEDITOR.ui.button} often registers
	 * a related command. See {@link CKEDITOR.ui.button#toFeature}.
	 *
	 * This method is executed when a feature is passed to the {@link CKEDITOR.editor#addFeature}.
	 *
	 * @method toFeature
	 * @returns {CKEDITOR.feature}
	 */

/***/ },
/* 25 */
/*!******************************!*\
  !*** ./core/focusmanager.js ***!
  \******************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.focusManager} class, which is used
	 *		to handle the focus in editor instances.
	 */
	
	(function () {
		/**
	  * Manages the focus activity in an editor instance. This class is to be
	  * used mainly by UI element coders when adding interface elements that need
	  * to set the focus state of the editor.
	  *
	  *		var focusManager = new CKEDITOR.focusManager( editor );
	  *		focusManager.focus();
	  *
	  * @class
	  * @constructor Creates a focusManager class instance.
	  * @param {CKEDITOR.editor} editor The editor instance.
	  */
		CKEDITOR.focusManager = function (editor) {
			if (editor.focusManager) return editor.focusManager;
	
			/**
	   * Indicates that the editor instance has focus.
	   *
	   *		alert( CKEDITOR.instances.editor1.focusManager.hasFocus ); // e.g. true
	   */
			this.hasFocus = false;
	
			/**
	   * Indicates the currently focused DOM element that makes the editor activated.
	   *
	   * @property {CKEDITOR.dom.domObject}
	   */
			this.currentActive = null;
	
			/**
	   * Object used to store private stuff.
	   *
	   * @private
	   */
			this._ = {
				editor: editor
			};
	
			return this;
		};
	
		var SLOT_NAME = 'focusmanager',
		    SLOT_NAME_LISTENERS = 'focusmanager_handlers';
	
		/**
	  * Object used to store private stuff.
	  *
	  * @private
	  * @class
	  * @singleton
	  */
		CKEDITOR.focusManager._ = {
			/**
	   * The delay (in milliseconds) to deactivate the editor when a UI DOM element has lost focus.
	   *
	   * @private
	   * @property {Number} [blurDelay=200]
	   * @member CKEDITOR.focusManager._
	   */
			blurDelay: 200
		};
	
		CKEDITOR.focusManager.prototype = {
	
			/**
	   * Indicates that this editor instance is activated (due to a DOM focus change).
	   * The `activated` state is a symbolic indicator of an active user
	   * interaction session.
	   *
	   * **Note:** This method will not introduce UI focus
	   * impact on DOM, it is here to record the editor UI focus state internally.
	   * If you want to make the cursor blink inside the editable, use
	   * {@link CKEDITOR.editor#method-focus} instead.
	   *
	   *		var editor = CKEDITOR.instances.editor1;
	   *		editor.focusManage.focus( editor.editable() );
	   *
	   * @param {CKEDITOR.dom.element} [currentActive] The new value of the {@link #currentActive} property.
	   * @member CKEDITOR.focusManager
	   */
			focus: function (currentActive) {
				if (this._.timer) clearTimeout(this._.timer);
	
				if (currentActive) this.currentActive = currentActive;
	
				if (!(this.hasFocus || this._.locked)) {
					// If another editor has the current focus, we first "blur" it. In
					// this way the events happen in a more logical sequence, like:
					//		"focus 1" > "blur 1" > "focus 2"
					// ... instead of:
					//		"focus 1" > "focus 2" > "blur 1"
					var current = CKEDITOR.currentInstance;
					current && current.focusManager.blur(1);
	
					this.hasFocus = true;
	
					var ct = this._.editor.container;
					ct && ct.addClass('cke_focus');
					this._.editor.fire('focus');
				}
			},
	
			/**
	   * Prevents from changing the focus manager state until the next {@link #unlock} is called.
	   *
	   * @member CKEDITOR.focusManager
	   */
			lock: function () {
				this._.locked = 1;
			},
	
			/**
	   * Restores the automatic focus management if {@link #lock} is called.
	   *
	   * @member CKEDITOR.focusManager
	   */
			unlock: function () {
				delete this._.locked;
			},
	
			/**
	   * Used to indicate that the editor instance has been deactivated by the specified
	   * element which has just lost focus.
	   *
	   * **Note:** This function acts asynchronously with a delay of 100ms to
	   * avoid temporary deactivation. Use the `noDelay` parameter instead
	   * to deactivate immediately.
	   *
	   *		var editor = CKEDITOR.instances.editor1;
	   *		editor.focusManager.blur();
	   *
	   * @param {Boolean} [noDelay=false] Immediately deactivate the editor instance synchronously.
	   * @member CKEDITOR.focusManager
	   */
			blur: function (noDelay) {
				if (this._.locked) return;
	
				function doBlur() {
					if (this.hasFocus) {
						this.hasFocus = false;
	
						var ct = this._.editor.container;
						ct && ct.removeClass('cke_focus');
						this._.editor.fire('blur');
					}
				}
	
				if (this._.timer) clearTimeout(this._.timer);
	
				var delay = CKEDITOR.focusManager._.blurDelay;
				if (noDelay || !delay) doBlur.call(this);else {
					this._.timer = CKEDITOR.tools.setTimeout(function () {
						delete this._.timer;
						doBlur.call(this);
					}, delay, this);
				}
			},
	
			/**
	   * Registers a UI DOM element to the focus manager, which will make the focus manager "hasFocus"
	   * once the input focus is relieved on the element.
	   * This method is designed to be used by plugins to expand the jurisdiction of the editor focus.
	   *
	   * @param {CKEDITOR.dom.element} element The container (topmost) element of one UI part.
	   * @param {Boolean} isCapture If specified, {@link CKEDITOR.event#useCapture} will be used when listening to the focus event.
	   * @member CKEDITOR.focusManager
	   */
			add: function (element, isCapture) {
				var fm = element.getCustomData(SLOT_NAME);
				if (!fm || fm != this) {
					// If this element is already taken by another instance, dismiss it first.
					fm && fm.remove(element);
	
					var focusEvent = 'focus',
					    blurEvent = 'blur';
	
					// Bypass the element's internal DOM focus change.
					if (isCapture) {
	
						// Use "focusin/focusout" events instead of capture phase in IEs,
						// which fires synchronously.
						if (CKEDITOR.env.ie) {
							focusEvent = 'focusin';
							blurEvent = 'focusout';
						} else {
							CKEDITOR.event.useCapture = 1;
						}
					}
	
					var listeners = {
						blur: function () {
							if (element.equals(this.currentActive)) this.blur();
						},
						focus: function () {
							this.focus(element);
						}
					};
	
					element.on(focusEvent, listeners.focus, this);
					element.on(blurEvent, listeners.blur, this);
	
					if (isCapture) CKEDITOR.event.useCapture = 0;
	
					element.setCustomData(SLOT_NAME, this);
					element.setCustomData(SLOT_NAME_LISTENERS, listeners);
				}
			},
	
			/**
	   * Dismisses an element from the focus manager delegations added by {@link #add}.
	   *
	   * @param {CKEDITOR.dom.element} element The element to be removed from the focus manager.
	   * @member CKEDITOR.focusManager
	   */
			remove: function (element) {
				element.removeCustomData(SLOT_NAME);
				var listeners = element.removeCustomData(SLOT_NAME_LISTENERS);
				element.removeListener('blur', listeners.blur);
				element.removeListener('focus', listeners.focus);
			}
	
		};
	})();
	
	/**
	 * Fired when the editor instance receives the input focus.
	 *
	 *		editor.on( 'focus', function( e ) {
	 *			alert( 'The editor named ' + e.editor.name + ' is now focused' );
	 *		} );
	 *
	 * @event focus
	 * @member CKEDITOR.editor
	 * @param {CKEDITOR.editor} editor The editor instance.
	 */
	
	/**
	 * Fired when the editor instance loses the input focus.
	 *
	 * **Note:** This event will **NOT** be triggered when focus is moved internally, e.g. from
	 * an editable to another part of the editor UI like a dialog window.
	 * If you are interested only in the focus state of the editable, listen to the `focus`
	 * and `blur` events of the {@link CKEDITOR.editable} instead.
	 *
	 *		editor.on( 'blur', function( e ) {
	 *			alert( 'The editor named ' + e.editor.name + ' lost the focus' );
	 *		} );
	 *
	 * @event blur
	 * @member CKEDITOR.editor
	 * @param {CKEDITOR.editor} editor The editor instance.
	 */

/***/ },
/* 26 */
/*!**********************************!*\
  !*** ./core/keystrokehandler.js ***!
  \**********************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * Controls keystrokes typing in an editor instance.
	 *
	 * @class
	 * @constructor Creates a keystrokeHandler class instance.
	 * @param {CKEDITOR.editor} editor The editor instance.
	 */
	CKEDITOR.keystrokeHandler = function (editor) {
	  if (editor.keystrokeHandler) return editor.keystrokeHandler;
	
	  /**
	   * A list of keystrokes associated with commands. Each entry points to the
	   * command to be executed.
	   *
	   * Since CKEditor 4 there is no need to modify this property directly during the runtime.
	   * Use {@link CKEDITOR.editor#setKeystroke} instead.
	   */
	  this.keystrokes = {};
	
	  /**
	   * A list of keystrokes that should be blocked if not defined in
	   * {@link #keystrokes}. In this way it is possible to block the default
	   * browser behavior for those keystrokes.
	   */
	  this.blockedKeystrokes = {};
	
	  this._ = {
	    editor: editor
	  };
	
	  return this;
	};
	
	(function () {
	  var cancel;
	
	  var onKeyDown = function (event) {
	    // The DOM event object is passed by the "data" property.
	    event = event.data;
	
	    var keyCombination = event.getKeystroke();
	    var command = this.keystrokes[keyCombination];
	    var editor = this._.editor;
	
	    cancel = editor.fire('key', { keyCode: keyCombination, domEvent: event }) === false;
	
	    if (!cancel) {
	      if (command) {
	        var data = { from: 'keystrokeHandler' };
	        cancel = editor.execCommand(command, data) !== false;
	      }
	
	      if (!cancel) cancel = !!this.blockedKeystrokes[keyCombination];
	    }
	
	    if (cancel) event.preventDefault(true);
	
	    return !cancel;
	  };
	
	  var onKeyPress = function (event) {
	    if (cancel) {
	      cancel = false;
	      event.data.preventDefault(true);
	    }
	  };
	
	  CKEDITOR.keystrokeHandler.prototype = {
	    /**
	     * Attaches this keystroke handle to a DOM object. Keystrokes typed
	     * over this object will be handled by this keystrokeHandler.
	     *
	     * @param {CKEDITOR.dom.domObject} domObject The DOM object to attach to.
	     */
	    attach: function (domObject) {
	      // For most browsers, it is enough to listen to the keydown event
	      // only.
	      domObject.on('keydown', onKeyDown, this);
	
	      // Some browsers instead, don't cancel key events in the keydown, but in the
	      // keypress. So we must do a longer trip in those cases.
	      if (CKEDITOR.env.gecko && CKEDITOR.env.mac) domObject.on('keypress', onKeyPress, this);
	    }
	  };
	})();
	
	/**
	 * A list associating keystrokes with editor commands. Each element in the list
	 * is an array where the first item is the keystroke, and the second is the
	 * name of the command to be executed.
	 *
	 * This setting should be used to define (as well as to overwrite or remove) keystrokes
	 * set by plugins (like `link` and `basicstyles`). If you want to set a keystroke
	 * for your plugin or during the runtime, use {@link CKEDITOR.editor#setKeystroke} instead.
	 *
	 * Since default keystrokes are set by the {@link CKEDITOR.editor#setKeystroke}
	 * method, by default `config.keystrokes` is an empty array.
	 *
	 * See {@link CKEDITOR.editor#setKeystroke} documentation for more details
	 * regarding the start up order.
	 *
	 *		// Change default Ctrl+L keystroke for 'link' command to Ctrl+Shift+L.
	 *		config.keystrokes = [
	 *			...
	 *			[ CKEDITOR.CTRL + CKEDITOR.SHIFT + 76, 'link' ],	// Ctrl+Shift+L
	 *			...
	 *		];
	 *
	 * To reset a particular keystroke, the following approach can be used:
	 *
	 *		// Disable default Ctrl+L keystroke which executes the 'link' command by default.
	 *		config.keystrokes = [
	 *			...
	 *			[ CKEDITOR.CTRL + 76, null ],						// Ctrl+L
	 *			...
	 *		];
	 *
	 * In order to reset all default keystrokes, a {@link CKEDITOR#instanceReady} callback should be
	 * used. This is since editor defaults are merged rather than overwritten by
	 * user keystrokes.
	 *
	 * **Note**: This can be potentially harmful for the editor. Avoid this unless you are
	 * aware of the consequences.
	 *
	 *		// Reset all default keystrokes.
	 *		config.on.instanceReady = function() {
	 *			this.keystrokeHandler.keystrokes = [];
	 *		};
	 *
	 * @cfg {Array} [keystrokes=[]]
	 * @member CKEDITOR.config
	 */
	
	/**
	 * Fired when any keyboard key (or a combination thereof) is pressed in the editing area.
	 *
	 *		editor.on( 'key', function( evt ) {
	 *			if ( evt.data.keyCode == CKEDITOR.CTRL + 90 ) {
	 *				// Do something...
	 *
	 *				// Cancel the event, so other listeners will not be executed and
	 *				// the keydown's default behavior will be prevented.
	 *				evt.cancel();
	 *			}
	 *		} );
	 *
	 * Usually you will want to use the {@link CKEDITOR.editor#setKeystroke} method or
	 * the {@link CKEDITOR.config#keystrokes} option to attach a keystroke to some {@link CKEDITOR.command command}.
	 * Key event listeners are usuful when some action should be executed conditionally, based
	 * for example on precise selection location.
	 *
	 * @event key
	 * @member CKEDITOR.editor
	 * @param data
	 * @param {Number} data.keyCode A number representing the key code (or a combination thereof).
	 * It is the sum of the current key code and the {@link CKEDITOR#CTRL}, {@link CKEDITOR#SHIFT}
	 * and {@link CKEDITOR#ALT} constants, if those are pressed.
	 * @param {CKEDITOR.dom.event} data.domEvent A `keydown` DOM event instance. Available since CKEditor 4.4.1.
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */

/***/ },
/* 27 */
/*!**********************!*\
  !*** ./core/lang.js ***!
  \**********************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	(function () {
		/**
	  * Stores language-related functions.
	  *
	  * @class
	  * @singleton
	  */
		CKEDITOR.lang = {
			/**
	   * The list of languages available in the editor core.
	   *
	   *		alert( CKEDITOR.lang.languages.en ); // 1
	   */
			languages: {
				af: 1, ar: 1, bg: 1, bn: 1, bs: 1, ca: 1, cs: 1, cy: 1, da: 1, de: 1, 'de-ch': 1, el: 1,
				'en-au': 1, 'en-ca': 1, 'en-gb': 1, en: 1, eo: 1, es: 1, et: 1, eu: 1, fa: 1, fi: 1, fo: 1,
				'fr-ca': 1, fr: 1, gl: 1, gu: 1, he: 1, hi: 1, hr: 1, hu: 1, id: 1, is: 1, it: 1, ja: 1, ka: 1,
				km: 1, ko: 1, ku: 1, lt: 1, lv: 1, mk: 1, mn: 1, ms: 1, nb: 1, nl: 1, no: 1, pl: 1, 'pt-br': 1,
				pt: 1, ro: 1, ru: 1, si: 1, sk: 1, sl: 1, sq: 1, 'sr-latn': 1, sr: 1, sv: 1, th: 1, tr: 1, tt: 1, ug: 1,
				uk: 1, vi: 1, 'zh-cn': 1, zh: 1
			},
	
			/**
	   * The list of languages that are written Right-To-Left (RTL) and are supported by the editor.
	   */
			rtl: { ar: 1, fa: 1, he: 1, ku: 1, ug: 1 },
	
			/**
	   * Loads a specific language file, or auto detects it. A callback is
	   * then called when the file gets loaded.
	   *
	   * @param {String} languageCode The code of the language file to be
	   * loaded. If null or empty, autodetection will be performed. The
	   * same happens if the language is not supported.
	   * @param {String} defaultLanguage The language to be used if
	   * `languageCode` is not supported or if the autodetection fails.
	   * @param {Function} callback A function to be called once the
	   * language file is loaded. Two parameters are passed to this
	   * function: the language code and the loaded language entries.
	   */
			load: function (languageCode, defaultLanguage, callback) {
				// If no languageCode - fallback to browser or default.
				// If languageCode - fallback to no-localized version or default.
				if (!languageCode || !CKEDITOR.lang.languages[languageCode]) languageCode = this.detect(defaultLanguage, languageCode);
	
				var that = this,
				    loadedCallback = function () {
					that[languageCode].dir = that.rtl[languageCode] ? 'rtl' : 'ltr';
					callback(languageCode, that[languageCode]);
				};
	
				if (!this[languageCode]) CKEDITOR.scriptLoader.load(CKEDITOR.getUrl('lang/' + languageCode + '.js'), loadedCallback, this);else loadedCallback();
			},
	
			/**
	   * Returns the language that best fits the user language. For example,
	   * suppose that the user language is "pt-br". If this language is
	   * supported by the editor, it is returned. Otherwise, if only "pt" is
	   * supported, it is returned instead. If none of the previous are
	   * supported, a default language is then returned.
	   *
	   *		alert( CKEDITOR.lang.detect( 'en' ) ); // e.g., in a German browser: 'de'
	   *
	   * @param {String} defaultLanguage The default language to be returned
	   * if the user language is not supported.
	   * @param {String} [probeLanguage] A language code to try to use,
	   * instead of the browser-based autodetection.
	   * @returns {String} The detected language code.
	   */
			detect: function (defaultLanguage, probeLanguage) {
				var languages = this.languages;
				probeLanguage = probeLanguage || navigator.userLanguage || navigator.language || defaultLanguage;
	
				var parts = probeLanguage.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/),
				    lang = parts[1],
				    locale = parts[2];
	
				if (languages[lang + '-' + locale]) lang = lang + '-' + locale;else if (!languages[lang]) lang = null;
	
				CKEDITOR.lang.detect = lang ? function () {
					return lang;
				} : function (defaultLanguage) {
					return defaultLanguage;
				};
	
				return lang || defaultLanguage;
			}
		};
	})();

/***/ },
/* 28 */
/*!******************************!*\
  !*** ./core/scriptloader.js ***!
  \******************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.scriptLoader} object, used to load scripts
	 *		asynchronously.
	 */
	
	/**
	 * Load scripts asynchronously.
	 *
	 * @class
	 * @singleton
	 */
	CKEDITOR.scriptLoader = function () {
		var uniqueScripts = {},
		    waitingList = {};
	
		return {
			/**
	   * Loads one or more external script checking if not already loaded
	   * previously by this function.
	   *
	   *		CKEDITOR.scriptLoader.load( '/myscript.js' );
	   *
	   *		CKEDITOR.scriptLoader.load( '/myscript.js', function( success ) {
	   *			// Alerts true if the script has been properly loaded.
	   *			// HTTP error 404 should return false.
	   *			alert( success );
	   *		} );
	   *
	   *		CKEDITOR.scriptLoader.load( [ '/myscript1.js', '/myscript2.js' ], function( completed, failed ) {
	   *			alert( 'Number of scripts loaded: ' + completed.length );
	   *			alert( 'Number of failures: ' + failed.length );
	   *		} );
	   *
	   * @param {String/Array} scriptUrl One or more URLs pointing to the
	   * scripts to be loaded.
	   * @param {Function} [callback] A function to be called when the script
	   * is loaded and executed. If a string is passed to `scriptUrl`, a
	   * boolean parameter is passed to the callback, indicating the
	   * success of the load. If an array is passed instead, two arrays
	   * parameters are passed to the callback - the first contains the
	   * URLs that have been properly loaded and the second the failed ones.
	   * @param {Object} [scope] The scope (`this` reference) to be used for
	   * the callback call. Defaults to {@link CKEDITOR}.
	   * @param {Boolean} [showBusy] Changes the cursor of the document while
	   * the script is loaded.
	   */
			load: function (scriptUrl, callback, scope, showBusy) {
				var isString = typeof scriptUrl == 'string';
	
				if (isString) scriptUrl = [scriptUrl];
	
				if (!scope) scope = CKEDITOR;
	
				var scriptCount = scriptUrl.length,
				    completed = [],
				    failed = [];
	
				var doCallback = function (success) {
					if (callback) {
						if (isString) callback.call(scope, success);else callback.call(scope, completed, failed);
					}
				};
	
				if (scriptCount === 0) {
					doCallback(true);
					return;
				}
	
				var checkLoaded = function (url, success) {
					(success ? completed : failed).push(url);
	
					if (--scriptCount <= 0) {
						showBusy && CKEDITOR.document.getDocumentElement().removeStyle('cursor');
						doCallback(success);
					}
				};
	
				var onLoad = function (url, success) {
					// Mark this script as loaded.
					uniqueScripts[url] = 1;
	
					// Get the list of callback checks waiting for this file.
					var waitingInfo = waitingList[url];
					delete waitingList[url];
	
					// Check all callbacks waiting for this file.
					for (var i = 0; i < waitingInfo.length; i++) waitingInfo[i](url, success);
				};
	
				var loadScript = function (url) {
					if (uniqueScripts[url]) {
						checkLoaded(url, true);
						return;
					}
	
					var waitingInfo = waitingList[url] || (waitingList[url] = []);
					waitingInfo.push(checkLoaded);
	
					// Load it only for the first request.
					if (waitingInfo.length > 1) return;
	
					// Create the <script> element.
					var script = new CKEDITOR.dom.element('script');
					script.setAttributes({
						type: 'text/javascript',
						src: url
					});
	
					if (callback) {
						// The onload or onerror event does not fire in IE8.
						if (CKEDITOR.env.ie && CKEDITOR.env.version <= 8) {
	
							script.$.onreadystatechange = function () {
								if (script.$.readyState == 'loaded' || script.$.readyState == 'complete') {
									script.$.onreadystatechange = null;
									onLoad(url, true);
								}
							};
						} else {
							script.$.onload = function () {
								// Some browsers, such as Safari, may call the onLoad function
								// immediately. Which will break the loading sequence. (#3661)
								setTimeout(function () {
									onLoad(url, true);
								}, 0);
							};
	
							script.$.onerror = function () {
								onLoad(url, false);
							};
						}
					}
	
					// Append it to <head>.
					script.appendTo(CKEDITOR.document.getHead());
	
					CKEDITOR.fire('download', url); // %REMOVE_LINE%
				};
	
				showBusy && CKEDITOR.document.getDocumentElement().setStyle('cursor', 'wait');
				for (var i = 0; i < scriptCount; i++) {
					loadScript(scriptUrl[i]);
				}
			},
	
			/**
	   * Loads a script in a queue, so only one is loaded at the same time.
	   *
	   * @since 4.1.2
	   * @param {String} scriptUrl URL pointing to the script to be loaded.
	   * @param {Function} [callback] A function to be called when the script
	   * is loaded and executed. A boolean parameter is passed to the callback,
	   * indicating the success of the load.
	   *
	   * @see CKEDITOR.scriptLoader#load
	   */
			queue: function () {
				var pending = [];
	
				// Loads the very first script from queue and removes it.
				function loadNext() {
					var script;
	
					if (script = pending[0]) this.load(script.scriptUrl, script.callback, CKEDITOR, 0);
				}
	
				return function (scriptUrl, callback) {
					var that = this;
	
					// This callback calls the standard callback for the script
					// and loads the very next script from pending list.
					function callbackWrapper() {
						callback && callback.apply(this, arguments);
	
						// Removed the just loaded script from the queue.
						pending.shift();
	
						loadNext.call(that);
					}
	
					// Let's add this script to the queue
					pending.push({ scriptUrl: scriptUrl, callback: callbackWrapper });
	
					// If the queue was empty, then start loading.
					if (pending.length == 1) loadNext.call(this);
				};
			}()
		};
	}();

/***/ },
/* 29 */
/*!*********************************!*\
  !*** ./core/resourcemanager.js ***!
  \*********************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.resourceManager} class, which is
	 *		the base for resource managers, like plugins.
	 */
	
	/**
	 * Base class for resource managers, like plugins. This class is not
	 * intended to be used out of the CKEditor core code.
	 *
	 * @class
	 * @constructor Creates a resourceManager class instance.
	 * @param {String} basePath The path for the resources folder.
	 * @param {String} fileName The name used for resource files.
	 */
	CKEDITOR.resourceManager = function (basePath, fileName) {
		/**
	  * The base directory containing all resources.
	  *
	  * @property {String}
	  */
		this.basePath = basePath;
	
		/**
	  * The name used for resource files.
	  *
	  * @property {String}
	  */
		this.fileName = fileName;
	
		/**
	  * Contains references to all resources that have already been registered
	  * with {@link #add}.
	  */
		this.registered = {};
	
		/**
	  * Contains references to all resources that have already been loaded
	  * with {@link #load}.
	  */
		this.loaded = {};
	
		/**
	  * Contains references to all resources that have already been registered
	  * with {@link #addExternal}.
	  */
		this.externals = {};
	
		/**
	  * @private
	  */
		this._ = {
			// List of callbacks waiting for plugins to be loaded.
			waitingList: {}
		};
	};
	
	CKEDITOR.resourceManager.prototype = {
		/**
	  * Registers a resource.
	  *
	  *		CKEDITOR.plugins.add( 'sample', { ... plugin definition ... } );
	  *
	  * @param {String} name The resource name.
	  * @param {Object} [definition] The resource definition.
	  * @see CKEDITOR.pluginDefinition
	  */
		add: function (name, definition) {
			if (this.registered[name]) throw new Error('[CKEDITOR.resourceManager.add] The resource name "' + name + '" is already registered.');
	
			var resource = this.registered[name] = definition || {};
			resource.name = name;
			resource.path = this.getPath(name);
	
			CKEDITOR.fire(name + CKEDITOR.tools.capitalize(this.fileName) + 'Ready', resource);
	
			return this.get(name);
		},
	
		/**
	  * Gets the definition of a specific resource.
	  *
	  *		var definition = CKEDITOR.plugins.get( 'sample' );
	  *
	  * @param {String} name The resource name.
	  * @returns {Object} The registered object.
	  */
		get: function (name) {
			return this.registered[name] || null;
		},
	
		/**
	  * Get the folder path for a specific loaded resource.
	  *
	  *		alert( CKEDITOR.plugins.getPath( 'sample' ) ); // '<editor path>/plugins/sample/'
	  *
	  * @param {String} name The resource name.
	  * @returns {String}
	  */
		getPath: function (name) {
			var external = this.externals[name];
			return CKEDITOR.getUrl(external && external.dir || this.basePath + name + '/');
		},
	
		/**
	  * Get the file path for a specific loaded resource.
	  *
	  *		alert( CKEDITOR.plugins.getFilePath( 'sample' ) ); // '<editor path>/plugins/sample/plugin.js'
	  *
	  * @param {String} name The resource name.
	  * @returns {String}
	  */
		getFilePath: function (name) {
			var external = this.externals[name];
			return CKEDITOR.getUrl(this.getPath(name) + (external ? external.file : this.fileName + '.js'));
		},
	
		/**
	  * Registers one or more resources to be loaded from an external path
	  * instead of the core base path.
	  *
	  *		// Loads a plugin from '/myplugin/samples/plugin.js'.
	  *		CKEDITOR.plugins.addExternal( 'sample', '/myplugins/sample/' );
	  *
	  *		// Loads a plugin from '/myplugin/samples/my_plugin.js'.
	  *		CKEDITOR.plugins.addExternal( 'sample', '/myplugins/sample/', 'my_plugin.js' );
	  *
	  *		// Loads a plugin from '/myplugin/samples/my_plugin.js'.
	  *		CKEDITOR.plugins.addExternal( 'sample', '/myplugins/sample/my_plugin.js', '' );
	  *
	  * @param {String} names The resource names, separated by commas.
	  * @param {String} path The path of the folder containing the resource.
	  * @param {String} [fileName] The resource file name. If not provided, the
	  * default name is used. If provided with a empty string, will implicitly indicates that `path` argument
	  * is already the full path.
	  */
		addExternal: function (names, path, fileName) {
			names = names.split(',');
			for (var i = 0; i < names.length; i++) {
				var name = names[i];
	
				// If "fileName" is not provided, we assume that it may be available
				// in "path". Try to extract it in this case.
				if (!fileName) {
					path = path.replace(/[^\/]+$/, function (match) {
						fileName = match;
						return '';
					});
				}
	
				this.externals[name] = {
					dir: path,
	
					// Use the default file name if there is no "fileName" and it
					// was not found in "path".
					file: fileName || this.fileName + '.js'
				};
			}
		},
	
		/**
	  * Loads one or more resources.
	  *
	  *		CKEDITOR.plugins.load( 'myplugin', function( plugins ) {
	  *			alert( plugins[ 'myplugin' ] ); // object
	  *		} );
	  *
	  * @param {String/Array} name The name of the resource to load. It may be a
	  * string with a single resource name, or an array with several names.
	  * @param {Function} callback A function to be called when all resources
	  * are loaded. The callback will receive an array containing all loaded names.
	  * @param {Object} [scope] The scope object to be used for the callback call.
	  */
		load: function (names, callback, scope) {
			// Ensure that we have an array of names.
			if (!CKEDITOR.tools.isArray(names)) names = names ? [names] : [];
	
			var loaded = this.loaded,
			    registered = this.registered,
			    urls = [],
			    urlsNames = {},
			    resources = {};
	
			// Loop through all names.
			for (var i = 0; i < names.length; i++) {
				var name = names[i];
	
				if (!name) continue;
	
				// If not available yet.
				if (!loaded[name] && !registered[name]) {
					var url = this.getFilePath(name);
					urls.push(url);
					if (!(url in urlsNames)) urlsNames[url] = [];
					urlsNames[url].push(name);
				} else {
					resources[name] = this.get(name);
				}
			}
	
			CKEDITOR.scriptLoader.load(urls, function (completed, failed) {
				if (failed.length) {
					throw new Error('[CKEDITOR.resourceManager.load] Resource name "' + urlsNames[failed[0]].join(',') + '" was not found at "' + failed[0] + '".');
				}
	
				for (var i = 0; i < completed.length; i++) {
					var nameList = urlsNames[completed[i]];
					for (var j = 0; j < nameList.length; j++) {
						var name = nameList[j];
						resources[name] = this.get(name);
	
						loaded[name] = 1;
					}
				}
	
				callback.call(scope, resources);
			}, this);
		}
	};

/***/ },
/* 30 */
/*!*************************!*\
  !*** ./core/plugins.js ***!
  \*************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.plugins} object, which is used to
	 *		manage plugins registration and loading.
	 */
	
	/**
	 * Manages plugins registration and loading.
	 *
	 * @class
	 * @extends CKEDITOR.resourceManager
	 * @singleton
	 */
	CKEDITOR.plugins = new CKEDITOR.resourceManager('plugins/', 'plugin');
	
	// PACKAGER_RENAME( CKEDITOR.plugins )
	
	CKEDITOR.plugins.load = CKEDITOR.tools.override(CKEDITOR.plugins.load, function (originalLoad) {
		var initialized = {};
	
		return function (name, callback, scope) {
			var allPlugins = {};
	
			var loadPlugins = function (names) {
				originalLoad.call(this, names, function (plugins) {
					CKEDITOR.tools.extend(allPlugins, plugins);
	
					var requiredPlugins = [];
					for (var pluginName in plugins) {
						var plugin = plugins[pluginName],
						    requires = plugin && plugin.requires;
	
						if (!initialized[pluginName]) {
							// Register all icons eventually defined by this plugin.
							if (plugin.icons) {
								var icons = plugin.icons.split(',');
								for (var ic = icons.length; ic--;) {
									CKEDITOR.skin.addIcon(icons[ic], plugin.path + 'icons/' + (CKEDITOR.env.hidpi && plugin.hidpi ? 'hidpi/' : '') + icons[ic] + '.png');
								}
							}
							initialized[pluginName] = 1;
						}
	
						if (requires) {
							// Trasnform it into an array, if it's not one.
							if (requires.split) requires = requires.split(',');
	
							for (var i = 0; i < requires.length; i++) {
								if (!allPlugins[requires[i]]) requiredPlugins.push(requires[i]);
							}
						}
					}
	
					if (requiredPlugins.length) loadPlugins.call(this, requiredPlugins);else {
						// Call the "onLoad" function for all plugins.
						for (pluginName in allPlugins) {
							plugin = allPlugins[pluginName];
							if (plugin.onLoad && !plugin.onLoad._called) {
								// Make it possible to return false from plugin::onLoad to disable it.
								if (plugin.onLoad() === false) delete allPlugins[pluginName];
	
								plugin.onLoad._called = 1;
							}
						}
	
						// Call the callback.
						if (callback) callback.call(scope || window, allPlugins);
					}
				}, this);
			};
	
			loadPlugins.call(this, name);
		};
	});
	
	/**
	 * Loads a specific language file, or auto detect it. A callback is
	 * then called when the file gets loaded.
	 *
	 *		CKEDITOR.plugins.setLang( 'myPlugin', 'en', {
	 *			title: 'My plugin',
	 *			selectOption: 'Please select an option'
	 *		} );
	 *
	 * @param {String} pluginName The name of the plugin to which the provided translation
	 * should be attached.
	 * @param {String} languageCode The code of the language translation provided.
	 * @param {Object} languageEntries An object that contains pairs of label and
	 * the respective translation.
	 */
	CKEDITOR.plugins.setLang = function (pluginName, languageCode, languageEntries) {
		var plugin = this.get(pluginName),
		    pluginLangEntries = plugin.langEntries || (plugin.langEntries = {}),
		    pluginLang = plugin.lang || (plugin.lang = []);
	
		if (pluginLang.split) pluginLang = pluginLang.split(',');
	
		if (CKEDITOR.tools.indexOf(pluginLang, languageCode) == -1) pluginLang.push(languageCode);
	
		pluginLangEntries[languageCode] = languageEntries;
	};

/***/ },
/* 31 */
/*!********************!*\
  !*** ./core/ui.js ***!
  \********************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * Contains UI features related to an editor instance.
	 *
	 * @class
	 * @mixins CKEDITOR.event
	 * @constructor Creates a `ui` class instance.
	 * @param {CKEDITOR.editor} editor The editor instance.
	 */
	CKEDITOR.ui = function (editor) {
		if (editor.ui) return editor.ui;
	
		this.items = {};
		this.instances = {};
		this.editor = editor;
	
		/**
	  * Object used to store private stuff.
	  *
	  * @private
	  */
		this._ = {
			handlers: {}
		};
	
		return this;
	};
	
	// PACKAGER_RENAME( CKEDITOR.ui )
	
	CKEDITOR.ui.prototype = {
		/**
	  * Adds a UI item to the items collection. These items can be later used in
	  * the interface.
	  *
	  *		// Add a new button named 'MyBold'.
	  *		editorInstance.ui.add( 'MyBold', CKEDITOR.UI_BUTTON, {
	  *			label: 'My Bold',
	  *			command: 'bold'
	  *		} );
	  *
	  * @param {String} name The UI item name.
	  * @param {Object} type The item type.
	  * @param {Object} definition The item definition. The properties of this
	  * object depend on the item type.
	  */
		add: function (name, type, definition) {
			// Compensate the unique name of this ui item to definition.
			definition.name = name.toLowerCase();
	
			var item = this.items[name] = {
				type: type,
				// The name of {@link CKEDITOR.command} which associate with this UI.
				command: definition.command || null,
				args: Array.prototype.slice.call(arguments, 2)
			};
	
			CKEDITOR.tools.extend(item, definition);
		},
	
		/**
	  * Retrieves the created UI objects by name.
	  *
	  * @param {String} name The name of the UI definition.
	  */
		get: function (name) {
			return this.instances[name];
		},
	
		/**
	  * Gets a UI object.
	  *
	  * @param {String} name The UI item name.
	  * @returns {Object} The UI element.
	  */
		create: function (name) {
			var item = this.items[name],
			    handler = item && this._.handlers[item.type],
			    command = item && item.command && this.editor.getCommand(item.command);
	
			var result = handler && handler.create.apply(this, item.args);
	
			this.instances[name] = result;
	
			// Add reference inside command object.
			if (command) command.uiItems.push(result);
	
			if (result && !result.type) result.type = item.type;
	
			return result;
		},
	
		/**
	  * Adds a handler for a UI item type. The handler is responsible for
	  * transforming UI item definitions into UI objects.
	  *
	  * @param {Object} type The item type.
	  * @param {Object} handler The handler definition.
	  */
		addHandler: function (type, handler) {
			this._.handlers[type] = handler;
		},
	
		/**
	  * Returns the unique DOM element that represents one editor's UI part, also known as "space".
	  * There are 3 main editor spaces available: `top`, `contents` and `bottom`
	  * and their availability depends on editor type.
	  *
	  *		// Hide the bottom space in the UI.
	  *		var bottom = editor.ui.space( 'bottom' );
	  *		bottom.setStyle( 'display', 'none' );
	  *
	  * @param {String} name The name of the space.
	  * @returns {CKEDITOR.dom.element} The element that represents the space.
	  */
		space: function (name) {
			return CKEDITOR.document.getById(this.spaceId(name));
		},
	
		/**
	  * Returns the HTML ID for a specific UI space name.
	  *
	  * @param {String} name The name of the space.
	  * @returns {String} The ID of an element representing this space in the DOM.
	  */
		spaceId: function (name) {
			return this.editor.id + '_' + name;
		}
	};
	
	CKEDITOR.event.implementOn(CKEDITOR.ui);
	
	/**
	 * Internal event fired when a new UI element is ready.
	 *
	 * @event ready
	 * @param {Object} data The new UI element.
	 */
	
	/**
	 * Virtual class which just illustrates the features of handler objects to be
	 * passed to the {@link CKEDITOR.ui#addHandler} function.
	 * This class is not really a part of the API, so do not call its constructor.
	 *
	 * @class CKEDITOR.ui.handlerDefinition
	 */
	
	/**
	 * Transforms an item definition into a UI item object.
	 *
	 *		editorInstance.ui.addHandler( CKEDITOR.UI_BUTTON, {
	 *			create: function( definition ) {
	 *				return new CKEDITOR.ui.button( definition );
	 *			}
	 *		} );
	 *
	 * @method create
	 * @param {Object} definition The item definition.
	 * @returns {Object} The UI element.
	 * @todo We lack the "UI element" abstract super class.
	 */
	
	/**
	 * The element in the {@link CKEDITOR#document host page's document} that contains the editor content.
	 * If the [fixed editor UI](#!/guide/dev_uitypes-section-fixed-user-interface) is used, then it will be set to
	 * `editor.ui.space( 'contents' )` &mdash; i.e. the `<div>` which contains the editor `<iframe>` (in case of classic editor)
	 * or {@link CKEDITOR.editable} (in case of inline editor). Otherwise it is set to the {@link CKEDITOR.editable} itself.
	 *
	 * Use the position of this element if you need to position elements placed in the host page's document relatively to the
	 * editor content.
	 *
	 *		var editor = CKEDITOR.instances.editor1;
	 *		console.log( editor.ui.contentsElement.getName() ); // 'div'
	 *
	 * @since 4.5
	 * @readonly
	 * @property {CKEDITOR.dom.element} contentsElement
	 */

/***/ },
/* 32 */
/*!************************!*\
  !*** ./core/editor.js ***!
  \************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.editor} class that represents an
	 *		editor instance.
	 */
	
	(function () {
		// Override the basic constructor defined at editor_basic.js.
		Editor.prototype = CKEDITOR.editor.prototype;
		CKEDITOR.editor = Editor;
	
		/**
	  * Represents an editor instance. This constructor should be rarely
	  * used in favor of the {@link CKEDITOR} editor creation functions.
	  *
	  * @class CKEDITOR.editor
	  * @mixins CKEDITOR.event
	  * @constructor Creates an editor class instance.
	  * @param {Object} [instanceConfig] Configuration values for this specific instance.
	  * @param {CKEDITOR.dom.element} [element] The DOM element upon which this editor
	  * will be created.
	  * @param {Number} [mode] The element creation mode to be used by this editor.
	  */
		function Editor(instanceConfig, element, mode) {
			// Call the CKEDITOR.event constructor to initialize this instance.
			CKEDITOR.event.call(this); //有两个类，一个是editor类 一个是event类，这里将event类的构造函数的执行环境改为editor类
			// Make a clone of the config object, to avoid having it touched by our code. (#9636)
			instanceConfig = instanceConfig && CKEDITOR.tools.clone(instanceConfig);
			// if editor is created off one page element.
			if (element !== undefined) {
				// Asserting element and mode not null.
				if (!(element instanceof CKEDITOR.dom.element)) throw new Error('Expect element of type CKEDITOR.dom.element.');else if (!mode) throw new Error('One of the element modes must be specified.');
	
				if (CKEDITOR.env.ie && CKEDITOR.env.quirks && mode == CKEDITOR.ELEMENT_MODE_INLINE) throw new Error('Inline element mode is not supported on IE quirks.');
	
				if (!isSupportedElement(element, mode)) throw new Error('The specified element mode is not supported on element: "' + element.getName() + '".');
	
				/**
	    * The original host page element upon which the editor is created. It is only
	    * supposed to be provided by the particular editor creator and is not subject to
	    * be modified.
	    *
	    * @readonly
	    * @property {CKEDITOR.dom.element}
	    */
				this.element = element;
	
				/**
	    * This property indicates the way this instance is associated with the {@link #element}.
	    * See also {@link CKEDITOR#ELEMENT_MODE_INLINE} and {@link CKEDITOR#ELEMENT_MODE_REPLACE}.
	    *
	    * @readonly
	    * @property {Number}
	    */
				this.elementMode = mode;
	
				this.name = this.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO && (element.getId() || element.getNameAtt());
			} else {
				this.elementMode = CKEDITOR.ELEMENT_MODE_NONE;
			}
	
			// Declare the private namespace.
			this._ = {};
	
			this.commands = {};
	
			/**
	   * Contains all UI templates created for this editor instance.
	   *
	   * @readonly
	   * @property {Object}
	   */
			this.templates = {};
	
			/**
	   * A unique identifier of this editor instance.
	   *
	   * **Note:** It will be originated from the `id` or `name`
	   * attribute of the {@link #element}, otherwise a name pattern of
	   * `'editor{n}'` will be used.
	   *
	   * @readonly
	   * @property {String}
	   */
			this.name = this.name || genEditorName();
	
			/**
	   * A unique random string assigned to each editor instance on the page.
	   *
	   * @readonly
	   * @property {String}
	   */
			this.id = CKEDITOR.tools.getNextId();
	
			/**
	   * Indicates editor initialization status. The following statuses are available:
	   *
	   *	* **unloaded**: The initial state &mdash; the editor instance was initialized,
	   *	but its components (configuration, plugins, language files) are not loaded yet.
	   *	* **loaded**: The editor components were loaded &mdash; see the {@link CKEDITOR.editor#loaded} event.
	   *	* **ready**: The editor is fully initialized and ready &mdash; see the {@link CKEDITOR.editor#instanceReady} event.
	   *	* **destroyed**: The editor was destroyed &mdash; see the {@link CKEDITOR.editor#method-destroy} method.
	   *
	   * @since 4.1
	   * @readonly
	   * @property {String}
	   */
			this.status = 'unloaded';
	
			/**
	   * The configuration for this editor instance. It inherits all
	   * settings defined in {@link CKEDITOR.config}, combined with settings
	   * loaded from custom configuration files and those defined inline in
	   * the page when creating the editor.
	   *
	   *		var editor = CKEDITOR.instances.editor1;
	   *		alert( editor.config.skin ); // e.g. 'moono'
	   *
	   * @readonly
	   * @property {CKEDITOR.config}
	   */
			this.config = CKEDITOR.tools.prototypedCopy(CKEDITOR.config);
	
			/**
	   * The namespace containing UI features related to this editor instance.
	   *
	   * @readonly
	   * @property {CKEDITOR.ui}
	   */
			this.ui = new CKEDITOR.ui(this);
	
			/**
	   * Controls the focus state of this editor instance. This property
	   * is rarely used for normal API operations. It is mainly
	   * targeted at developers adding UI elements to the editor interface.
	   *
	   * @readonly
	   * @property {CKEDITOR.focusManager}
	   */
			this.focusManager = new CKEDITOR.focusManager(this);
	
			/**
	   * Controls keystroke typing in this editor instance.
	   *
	   * @readonly
	   * @property {CKEDITOR.keystrokeHandler}
	   */
			this.keystrokeHandler = new CKEDITOR.keystrokeHandler(this);
	
			// Make the editor update its command states on mode change.
			this.on('readOnly', updateCommands);
			this.on('selectionChange', function (evt) {
				updateCommandsContext(this, evt.data.path);
			});
			this.on('activeFilterChange', function () {
				updateCommandsContext(this, this.elementPath(), true);
			});
			this.on('mode', updateCommands);
	
			// Handle startup focus.
			this.on('instanceReady', function () {
				this.config.startupFocus && this.focus();
			});
	
			CKEDITOR.fire('instanceCreated', null, this);
	
			// Add this new editor to the CKEDITOR.instances collections.
			CKEDITOR.add(this);
	
			// Return the editor instance immediately to enable early stage event registrations.
			CKEDITOR.tools.setTimeout(function () {
				//罪魁祸首
				if (this.status !== 'destroyed') {
					initConfig(this, instanceConfig);
				} else {
					CKEDITOR.warn('editor-incorrect-destroy');
				}
			}, 0, this);
			// console.log(this.config);
			// return;
		}
	
		var nameCounter = 0;
	
		function genEditorName() {
			do {
				var name = 'editor' + ++nameCounter;
			} while (CKEDITOR.instances[name]);
	
			return name;
		}
	
		// Asserting element DTD depending on mode.
		function isSupportedElement(element, mode) {
			if (mode == CKEDITOR.ELEMENT_MODE_INLINE) return element.is(CKEDITOR.dtd.$editable) || element.is('textarea');else if (mode == CKEDITOR.ELEMENT_MODE_REPLACE) return !element.is(CKEDITOR.dtd.$nonBodyContent);
			return 1;
		}
	
		function updateCommands() {
			var commands = this.commands,
			    name;
	
			for (name in commands) updateCommand(this, commands[name]);
		}
	
		function updateCommand(editor, cmd) {
			cmd[cmd.startDisabled ? 'disable' : editor.readOnly && !cmd.readOnly ? 'disable' : cmd.modes[editor.mode] ? 'enable' : 'disable']();
		}
	
		function updateCommandsContext(editor, path, forceRefresh) {
			// Commands cannot be refreshed without a path. In edge cases
			// it may happen that there's no selection when this function is executed.
			// For example when active filter is changed in #10877.
			if (!path) return;
	
			var command,
			    name,
			    commands = editor.commands;
	
			for (name in commands) {
				command = commands[name];
	
				if (forceRefresh || command.contextSensitive) command.refresh(editor, path);
			}
		}
	
		// ##### START: Config Privates
	
		// These function loads custom configuration files and cache the
		// CKEDITOR.editorConfig functions defined on them, so there is no need to
		// download them more than once for several instances.
		var loadConfigLoaded = {};
	
		function loadConfig(editor) {
			var customConfig = editor.config.customConfig;
			// Check if there is a custom config to load.
			if (!customConfig) return false;
	
			customConfig = CKEDITOR.getUrl(customConfig);
	
			var loadedConfig = loadConfigLoaded[customConfig] || (loadConfigLoaded[customConfig] = {});
	
			// If the custom config has already been downloaded, reuse it.
			if (loadedConfig.fn) {
				// Call the cached CKEDITOR.editorConfig defined in the custom
				// config file for the editor instance depending on it.
				loadedConfig.fn.call(editor, editor.config);
	
				// If there is no other customConfig in the chain, fire the
				// "configLoaded" event.
				if (CKEDITOR.getUrl(editor.config.customConfig) == customConfig || !loadConfig(editor)) editor.fireOnce('customConfigLoaded');
			} else {
				// Load the custom configuration file.
				// To resolve customConfig race conflicts, use scriptLoader#queue
				// instead of scriptLoader#load (#6504).
				CKEDITOR.scriptLoader.queue(customConfig, function () {
					//这里去拿了配置
					// If the CKEDITOR.editorConfig function has been properly
					// defined in the custom configuration file, cache it.
					if (CKEDITOR.editorConfig) loadedConfig.fn = CKEDITOR.editorConfig;else loadedConfig.fn = function () {};
	
					// Call the load config again. This time the custom
					// config is already cached and so it will get loaded.
					loadConfig(editor);
				});
			}
	
			return true;
		}
	
		function initConfig(editor, instanceConfig) {
	
			// Setup the lister for the "customConfigLoaded" event.
			editor.on('customConfigLoaded', function () {
	
				if (instanceConfig) {
					// Register the events that may have been set at the instance
					// configuration object.
					if (instanceConfig.on) {
						for (var eventName in instanceConfig.on) {
							editor.on(eventName, instanceConfig.on[eventName]);
						}
					}
	
					// Overwrite the settings from the in-page config.
					CKEDITOR.tools.extend(editor.config, instanceConfig, true);
	
					delete editor.config.on;
				}
	
				onConfigLoaded(editor);
			});
	
			// The instance config may override the customConfig setting to avoid
			// loading the default ~/config.js file.
			if (instanceConfig && instanceConfig.customConfig != null) editor.config.customConfig = instanceConfig.customConfig;
	
			// Load configs from the custom configuration files.
			if (!loadConfig(editor)) editor.fireOnce('customConfigLoaded');
		}
	
		// ##### END: Config Privates
	
		// Set config related properties.
		function onConfigLoaded(editor) {
	
			var config = editor.config;
	
			/**
	   * Indicates the read-only state of this editor. This is a read-only property.
	   * See also {@link CKEDITOR.editor#setReadOnly}.
	   *
	   * @since 3.6
	   * @readonly
	   * @property {Boolean}
	   */
			editor.readOnly = isEditorReadOnly();
	
			function isEditorReadOnly() {
				if (config.readOnly) {
					return true;
				}
	
				if (editor.elementMode == CKEDITOR.ELEMENT_MODE_INLINE) {
					if (editor.element.is('textarea')) {
						return editor.element.hasAttribute('disabled') || editor.element.hasAttribute('readonly');
					} else {
						return editor.element.isReadOnly();
					}
				} else if (editor.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE) {
					return editor.element.hasAttribute('disabled') || editor.element.hasAttribute('readonly');
				}
	
				return false;
			}
	
			/**
	   * Indicates that the editor is running in an environment where
	   * no block elements are accepted inside the content.
	   *
	   * This can be for example inline editor based on an `<h1>` element.
	   *
	   * @readonly
	   * @property {Boolean}
	   */
			editor.blockless = editor.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? !(editor.element.is('textarea') || CKEDITOR.dtd[editor.element.getName()].p) : false;
	
			/**
	   * The [tabbing navigation](http://en.wikipedia.org/wiki/Tabbing_navigation) order determined for this editor instance.
	   * This can be set by the <code>{@link CKEDITOR.config#tabIndex}</code>
	   * setting or taken from the `tabindex` attribute of the
	   * {@link #element} associated with the editor.
	   *
	   *		alert( editor.tabIndex ); // e.g. 0
	   *
	   * @readonly
	   * @property {Number} [=0]
	   */
			editor.tabIndex = config.tabIndex || editor.element && editor.element.getAttribute('tabindex') || 0;
	
			editor.activeEnterMode = editor.enterMode = validateEnterMode(editor, config.enterMode);
			editor.activeShiftEnterMode = editor.shiftEnterMode = validateEnterMode(editor, config.shiftEnterMode);
	
			// Set CKEDITOR.skinName. Note that it is not possible to have
			// different skins on the same page, so the last one to set it "wins".
			if (config.skin) CKEDITOR.skinName = config.skin;
	
			// Fire the "configLoaded" event.
			editor.fireOnce('configLoaded');
	
			initComponents(editor);
		}
	
		// Various other core components that read editor configuration.
		function initComponents(editor) {
			// Documented in dataprocessor.js.
			editor.dataProcessor = new CKEDITOR.htmlDataProcessor(editor);
	
			// Set activeFilter directly to avoid firing event.
			editor.filter = editor.activeFilter = new CKEDITOR.filter(editor);
	
			loadSkin(editor);
		}
	
		function loadSkin(editor) {
			CKEDITOR.skin.loadPart('editor', function () {
				loadLang(editor);
			});
		}
	
		function loadLang(editor) {
			CKEDITOR.lang.load(editor.config.language, editor.config.defaultLanguage, function (languageCode, lang) {
				var configTitle = editor.config.title;
	
				/**
	    * The code for the language resources that have been loaded
	    * for the user interface elements of this editor instance.
	    *
	    *		alert( editor.langCode ); // e.g. 'en'
	    *
	    * @readonly
	    * @property {String}
	    */
				editor.langCode = languageCode;
	
				/**
	    * An object that contains all language strings used by the editor interface.
	    *
	    *		alert( editor.lang.basicstyles.bold ); // e.g. 'Negrito' (if the language is set to Portuguese)
	    *
	    * @readonly
	    * @property {Object} lang
	    */
				// As we'll be adding plugin specific entries that could come
				// from different language code files, we need a copy of lang,
				// not a direct reference to it.
				editor.lang = CKEDITOR.tools.prototypedCopy(lang);
	
				/**
	    * Indicates the human-readable title of this editor. Although this is a read-only property,
	    * it can be initialized with {@link CKEDITOR.config#title}.
	    *
	    * **Note:** Please do not confuse this property with {@link CKEDITOR.editor#name editor.name}
	    * which identifies the instance in the {@link CKEDITOR#instances} literal.
	    *
	    * @since 4.2
	    * @readonly
	    * @property {String/Boolean}
	    */
				editor.title = typeof configTitle == 'string' || configTitle === false ? configTitle : [editor.lang.editor, editor.name].join(', ');
	
				if (!editor.config.contentsLangDirection) {
					// Fallback to either the editable element direction or editor UI direction depending on creators.
					editor.config.contentsLangDirection = editor.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? editor.element.getDirection(1) : editor.lang.dir;
				}
	
				editor.fire('langLoaded');
	
				preloadStylesSet(editor);
			});
		}
	
		// Preloads styles set file (config.stylesSet).
		// If stylesSet was defined directly (by an array)
		// this function will call loadPlugins fully synchronously.
		// If stylesSet is a string (path) loadPlugins will
		// be called asynchronously.
		// In both cases - styles will be preload before plugins initialization.
		function preloadStylesSet(editor) {
			editor.getStylesSet(function (styles) {
				// Wait for editor#loaded, so plugins could add their listeners.
				// But listen with high priority to fire editor#stylesSet before editor#uiReady and editor#setData.
				editor.once('loaded', function () {
					// Note: we can't use fireOnce because this event may canceled and fired again.
					editor.fire('stylesSet', { styles: styles });
				}, null, null, 1);
	
				loadPlugins(editor);
			});
		}
	
		function loadPlugins(editor) {
			var config = editor.config,
			    plugins = config.plugins,
			    extraPlugins = config.extraPlugins,
			    removePlugins = config.removePlugins;
			if (extraPlugins) {
				// Remove them first to avoid duplications.
				var extraRegex = new RegExp('(?:^|,)(?:' + extraPlugins.replace(/\s*,\s*/g, '|') + ')(?=,|$)', 'g');
				plugins = plugins.replace(extraRegex, '');
	
				plugins += ',' + extraPlugins;
			}
	
			if (removePlugins) {
				var removeRegex = new RegExp('(?:^|,)(?:' + removePlugins.replace(/\s*,\s*/g, '|') + ')(?=,|$)', 'g');
				plugins = plugins.replace(removeRegex, '');
			}
	
			// Load the Adobe AIR plugin conditionally.
			CKEDITOR.env.air && (plugins += ',adobeair');
	
			// Load all plugins defined in the "plugins" setting.
			CKEDITOR.plugins.load(plugins.split(','), function (plugins) {
				// The list of plugins.
				var pluginsArray = [];
	
				// The language code to get loaded for each plugin. Null
				// entries will be appended for plugins with no language files.
				var languageCodes = [];
	
				// The list of URLs to language files.
				var languageFiles = [];
	
				/**
	    * An object that contains references to all plugins used by this
	    * editor instance.
	    *
	    *		alert( editor.plugins.dialog.path ); // e.g. 'http://example.com/ckeditor/plugins/dialog/'
	    *
	    *		// Check if a plugin is available.
	    *		if ( editor.plugins.image ) {
	    *			...
	    *		}
	    *
	    * @readonly
	    * @property {Object}
	    */
	
				editor.plugins = plugins;
	
				// Loop through all plugins, to build the list of language
				// files to get loaded.
				//
				// Check also whether any of loaded plugins doesn't require plugins
				// defined in config.removePlugins. Throw non-blocking error if this happens.
				for (var pluginName in plugins) {
					var plugin = plugins[pluginName],
					    pluginLangs = plugin.lang,
					    lang = null,
					    requires = plugin.requires,
					    match,
					    name;
	
					// Transform it into a string, if it's not one.
					if (CKEDITOR.tools.isArray(requires)) requires = requires.join(',');
	
					if (requires && (match = requires.match(removeRegex))) {
						while (name = match.pop()) {
							CKEDITOR.error('editor-plugin-required', { plugin: name.replace(',', ''), requiredBy: pluginName });
						}
					}
	
					// If the plugin has "lang".
					if (pluginLangs && !editor.lang[pluginName]) {
						// Trasnform the plugin langs into an array, if it's not one.
						if (pluginLangs.split) pluginLangs = pluginLangs.split(',');
	
						// Resolve the plugin language. If the current language
						// is not available, get English or the first one.
						if (CKEDITOR.tools.indexOf(pluginLangs, editor.langCode) >= 0) lang = editor.langCode;else {
							// The language code may have the locale information (zh-cn).
							// Fall back to locale-less in that case (zh).
							var langPart = editor.langCode.replace(/-.*/, '');
							if (langPart != editor.langCode && CKEDITOR.tools.indexOf(pluginLangs, langPart) >= 0) lang = langPart;
							// Try the only "generic" option we have: English.
							else if (CKEDITOR.tools.indexOf(pluginLangs, 'en') >= 0) lang = 'en';else lang = pluginLangs[0];
						}
	
						if (!plugin.langEntries || !plugin.langEntries[lang]) {
							// Put the language file URL into the list of files to
							// get downloaded.
							languageFiles.push(CKEDITOR.getUrl(plugin.path + 'lang/' + lang + '.js'));
						} else {
							editor.lang[pluginName] = plugin.langEntries[lang];
							lang = null;
						}
					}
	
					// Save the language code, so we know later which
					// language has been resolved to this plugin.
					languageCodes.push(lang);
	
					pluginsArray.push(plugin);
				}
	
				// Load all plugin specific language files in a row.
				CKEDITOR.scriptLoader.load(languageFiles, function () {
					// Initialize all plugins that have the "beforeInit" and "init" methods defined.
					var methods = ['beforeInit', 'init', 'afterInit'];
					for (var m = 0; m < methods.length; m++) {
						for (var i = 0; i < pluginsArray.length; i++) {
							var plugin = pluginsArray[i];
	
							// Uses the first loop to update the language entries also.
							if (m === 0 && languageCodes[i] && plugin.lang && plugin.langEntries) editor.lang[plugin.name] = plugin.langEntries[languageCodes[i]];
	
							// Call the plugin method (beforeInit and init).
							if (plugin[methods[m]]) plugin[methods[m]](editor);
						}
					}
	
					editor.fireOnce('pluginsLoaded');
	
					// Setup the configured keystrokes.
					config.keystrokes && editor.setKeystroke(editor.config.keystrokes);
	
					// Setup the configured blocked keystrokes.
					for (i = 0; i < editor.config.blockedKeystrokes.length; i++) editor.keystrokeHandler.blockedKeystrokes[editor.config.blockedKeystrokes[i]] = 1;
	
					editor.status = 'loaded';
					editor.fireOnce('loaded');
					CKEDITOR.fire('instanceLoaded', null, editor);
				});
			});
		}
	
		// Send to data output back to editor's associated element.
		function updateEditorElement() {
			var element = this.element;
	
			// Some editor creation mode will not have the
			// associated element.
			if (element && this.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO) {
				var data = this.getData();
	
				if (this.config.htmlEncodeOutput) data = CKEDITOR.tools.htmlEncode(data);
	
				if (element.is('textarea')) element.setValue(data);else element.setHtml(data);
	
				return true;
			}
			return false;
		}
	
		// Always returns ENTER_BR in case of blockless editor.
		function validateEnterMode(editor, enterMode) {
			return editor.blockless ? CKEDITOR.ENTER_BR : enterMode;
		}
	
		// Create DocumentFragment from specified ranges. For now it handles only tables in Firefox
		// and returns DocumentFragment from the 1. range for other cases. (#13884)
		function createDocumentFragmentFromRanges(ranges, editable) {
			var docFragment = new CKEDITOR.dom.documentFragment(),
			    tableClone,
			    currentRow,
			    currentRowClone;
	
			for (var i = 0; i < ranges.length; i++) {
				var range = ranges[i],
				    container = range.startContainer;
	
				if (container.getName && container.getName() == 'tr') {
					if (!tableClone) {
						tableClone = container.getAscendant('table').clone();
						tableClone.append(container.getAscendant('tbody').clone());
						docFragment.append(tableClone);
						tableClone = tableClone.findOne('tbody');
					}
	
					if (!(currentRow && currentRow.equals(container))) {
						currentRow = container;
						currentRowClone = container.clone();
						tableClone.append(currentRowClone);
					}
	
					currentRowClone.append(range.cloneContents());
				} else {
					// If there was something else copied with table,
					// append it to DocumentFragment.
					docFragment.append(range.cloneContents());
				}
			}
	
			if (!tableClone) {
				return editable.getHtmlFromRange(ranges[0]);
			}
	
			return docFragment;
		}
	
		CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
			/**
	   * Adds a command definition to the editor instance. Commands added with
	   * this function can be executed later with the <code>{@link #execCommand}</code> method.
	   *
	   * 		editorInstance.addCommand( 'sample', {
	   * 			exec: function( editor ) {
	   * 				alert( 'Executing a command for the editor name "' + editor.name + '"!' );
	   * 			}
	   * 		} );
	   *
	   * @param {String} commandName The indentifier name of the command.
	   * @param {CKEDITOR.commandDefinition} commandDefinition The command definition.
	   */
			addCommand: function (commandName, commandDefinition) {
				commandDefinition.name = commandName.toLowerCase();
				var cmd = new CKEDITOR.command(this, commandDefinition);
	
				// Update command when mode is set.
				// This guarantees that commands added before first editor#mode
				// aren't immediately updated, but waits for editor#mode and that
				// commands added later are immediately refreshed, even when added
				// before instanceReady. #10103, #10249
				if (this.mode) updateCommand(this, cmd);
	
				return this.commands[commandName] = cmd;
			},
	
			/**
	   * Attaches the editor to a form to call {@link #updateElement} before form submission.
	   * This method is called by both creators ({@link CKEDITOR#replace replace} and
	   * {@link CKEDITOR#inline inline}), so there is no reason to call it manually.
	   *
	   * @private
	   */
			_attachToForm: function () {
				var editor = this,
				    element = editor.element,
				    form = new CKEDITOR.dom.element(element.$.form);
	
				// If are replacing a textarea, we must
				if (element.is('textarea')) {
					if (form) {
						form.on('submit', onSubmit);
	
						// Check if there is no element/elements input with name == "submit".
						// If they exists they will overwrite form submit function (form.$.submit).
						// If form.$.submit is overwritten we can not do anything with it.
						if (isFunction(form.$.submit)) {
							// Setup the submit function because it doesn't fire the
							// "submit" event.
							form.$.submit = CKEDITOR.tools.override(form.$.submit, function (originalSubmit) {
								return function () {
									onSubmit();
	
									// For IE, the DOM submit function is not a
									// function, so we need third check.
									if (originalSubmit.apply) originalSubmit.apply(this);else originalSubmit();
								};
							});
						}
	
						// Remove 'submit' events registered on form element before destroying.(#3988)
						editor.on('destroy', function () {
							form.removeListener('submit', onSubmit);
						});
					}
				}
	
				function onSubmit(evt) {
					editor.updateElement();
	
					// #8031 If textarea had required attribute and editor is empty fire 'required' event and if
					// it was cancelled, prevent submitting the form.
					if (editor._.required && !element.getValue() && editor.fire('required') === false) {
						// When user press save button event (evt) is undefined (see save plugin).
						// This method works because it throws error so originalSubmit won't be called.
						// Also this error won't be shown because it will be caught in save plugin.
						evt.data.preventDefault();
					}
				}
	
				function isFunction(f) {
					// For IE8 typeof fun == object so we cannot use it.
					return !!(f && f.call && f.apply);
				}
			},
	
			/**
	   * Destroys the editor instance, releasing all resources used by it.
	   * If the editor replaced an element, the element will be recovered.
	   *
	   *		alert( CKEDITOR.instances.editor1 ); // e.g. object
	   *		CKEDITOR.instances.editor1.destroy();
	   *		alert( CKEDITOR.instances.editor1 ); // undefined
	   *
	   * @param {Boolean} [noUpdate] If the instance is replacing a DOM
	   * element, this parameter indicates whether or not to update the
	   * element with the instance content.
	   */
			destroy: function (noUpdate) {
				this.fire('beforeDestroy');
	
				!noUpdate && updateEditorElement.call(this);
	
				this.editable(null);
	
				if (this.filter) {
					this.filter.destroy();
					delete this.filter;
				}
	
				delete this.activeFilter;
	
				this.status = 'destroyed';
	
				this.fire('destroy');
	
				// Plug off all listeners to prevent any further events firing.
				this.removeAllListeners();
	
				CKEDITOR.remove(this);
				CKEDITOR.fire('instanceDestroyed', null, this);
			},
	
			/**
	   * Returns an {@link CKEDITOR.dom.elementPath element path} for the selection in the editor.
	   *
	   * @param {CKEDITOR.dom.node} [startNode] From which the path should start,
	   * if not specified defaults to editor selection's
	   * start element yielded by {@link CKEDITOR.dom.selection#getStartElement}.
	   * @returns {CKEDITOR.dom.elementPath}
	   */
			elementPath: function (startNode) {
				if (!startNode) {
					var sel = this.getSelection();
					if (!sel) return null;
	
					startNode = sel.getStartElement();
				}
	
				return startNode ? new CKEDITOR.dom.elementPath(startNode, this.editable()) : null;
			},
	
			/**
	   * Shortcut to create a {@link CKEDITOR.dom.range} instance from the editable element.
	   *
	   * @returns {CKEDITOR.dom.range} The DOM range created if the editable has presented.
	   * @see CKEDITOR.dom.range
	   */
			createRange: function () {
				var editable = this.editable();
				return editable ? new CKEDITOR.dom.range(editable) : null;
			},
	
			/**
	   * Executes a command associated with the editor.
	   *
	   *		editorInstance.execCommand( 'bold' );
	   *
	   * @param {String} commandName The indentifier name of the command.
	   * @param {Object} [data] The data to be passed to the command.
	   * @returns {Boolean} `true` if the command was executed
	   * successfully, otherwise `false`.
	   * @see CKEDITOR.editor#addCommand
	   */
			execCommand: function (commandName, data) {
				var command = this.getCommand(commandName);
	
				var eventData = {
					name: commandName,
					commandData: data,
					command: command
				};
	
				if (command && command.state != CKEDITOR.TRISTATE_DISABLED) {
					if (this.fire('beforeCommandExec', eventData) !== false) {
						eventData.returnValue = command.exec(eventData.commandData);
	
						// Fire the 'afterCommandExec' immediately if command is synchronous.
						if (!command.async && this.fire('afterCommandExec', eventData) !== false) return eventData.returnValue;
					}
				}
	
				// throw 'Unknown command name "' + commandName + '"';
				return false;
			},
	
			/**
	   * Gets one of the registered commands. Note that after registering a
	   * command definition with {@link #addCommand}, it is
	   * transformed internally into an instance of
	   * {@link CKEDITOR.command}, which will then be returned by this function.
	   *
	   * @param {String} commandName The name of the command to be returned.
	   * This is the same name that is used to register the command with `addCommand`.
	   * @returns {CKEDITOR.command} The command object identified by the provided name.
	   */
			getCommand: function (commandName) {
				return this.commands[commandName];
			},
	
			/**
	   * Gets the editor data. The data will be in "raw" format. It is the same
	   * data that is posted by the editor.
	   *
	   *		if ( CKEDITOR.instances.editor1.getData() == '' )
	   *			alert( 'There is no data available.' );
	   *
	   * @param {Boolean} internal If set to `true`, it will prevent firing the
	   * {@link CKEDITOR.editor#beforeGetData} and {@link CKEDITOR.editor#event-getData} events, so
	   * the real content of the editor will not be read and cached data will be returned. The method will work
	   * much faster, but this may result in the editor returning the data that is not up to date. This parameter
	   * should thus only be set to `true` when you are certain that the cached data is up to date.
	   *
	   * @returns {String} The editor data.
	   */
			getData: function (internal) {
				!internal && this.fire('beforeGetData');
	
				var eventData = this._.data;
	
				if (typeof eventData != 'string') {
					var element = this.element;
					if (element && this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE) eventData = element.is('textarea') ? element.getValue() : element.getHtml();else eventData = '';
				}
	
				eventData = { dataValue: eventData };
	
				// Fire "getData" so data manipulation may happen.
				!internal && this.fire('getData', eventData);
	
				return eventData.dataValue;
			},
	
			/**
	   * Gets the "raw data" currently available in the editor. This is a
	   * fast method which returns the data as is, without processing, so it is
	   * not recommended to use it on resulting pages. Instead it can be used
	   * combined with the {@link #method-loadSnapshot} method in order
	   * to automatically save the editor data from time to time
	   * while the user is using the editor, to avoid data loss, without risking
	   * performance issues.
	   *
	   *		alert( editor.getSnapshot() );
	   *
	   * See also:
	   *
	   * * {@link CKEDITOR.editor#method-getData}.
	   *
	   * @returns {String} Editor "raw data".
	   */
			getSnapshot: function () {
				var data = this.fire('getSnapshot');
	
				if (typeof data != 'string') {
					var element = this.element;
	
					if (element && this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE) {
						data = element.is('textarea') ? element.getValue() : element.getHtml();
					} else {
						// If we don't have a proper element, set data to an empty string,
						// as this method is expected to return a string. (#13385)
						data = '';
					}
				}
	
				return data;
			},
	
			/**
	   * Loads "raw data" into the editor. The data is loaded with processing
	   * straight to the editing area. It should not be used as a way to load
	   * any kind of data, but instead in combination with
	   * {@link #method-getSnapshot}-produced data.
	   *
	   *		var data = editor.getSnapshot();
	   *		editor.loadSnapshot( data );
	   *
	   * @see CKEDITOR.editor#setData
	   */
			loadSnapshot: function (snapshot) {
				this.fire('loadSnapshot', snapshot);
			},
	
			/**
	   * Sets the editor data. The data must be provided in the "raw" format (HTML).
	   *
	   * Note that this method is asynchronous. The `callback` parameter must
	   * be used if interaction with the editor is needed after setting the data.
	   *
	   *		CKEDITOR.instances.editor1.setData( '<p>This is the editor data.</p>' );
	   *
	   *		CKEDITOR.instances.editor1.setData( '<p>Some other editor data.</p>', {
	   *			callback: function() {
	   *				this.checkDirty(); // true
	   *			}
	   *		} );
	   *
	   * Note: In **CKEditor 4.4.2** the signature of this method has changed. All arguments
	   * except `data` were wrapped into the `options` object. However, backward compatibility
	   * was preserved and it is still possible to use the `data, callback, internal` arguments.
	   *
	   *
	   * @param {String} data The HTML code to replace current editor content.
	   * @param {Object} [options]
	   * @param {Boolean} [options.internal=false] Whether to suppress any event firing when copying data internally inside the editor.
	   * @param {Function} [options.callback] Function to be called after `setData` is completed (on {@link #dataReady}).
	   * @param {Boolean} [options.noSnapshot=false] If set to `true`, it will prevent recording an undo snapshot.
	   * Introduced in CKEditor 4.4.2.
	   */
			setData: function (data, options, internal) {
				var fireSnapshot = true,
	
				// Backward compatibility.
				callback = options,
				    eventData;
	
				if (options && typeof options == 'object') {
					internal = options.internal;
					callback = options.callback;
					fireSnapshot = !options.noSnapshot;
				}
	
				if (!internal && fireSnapshot) this.fire('saveSnapshot');
	
				if (callback || !internal) {
					this.once('dataReady', function (evt) {
						if (!internal && fireSnapshot) this.fire('saveSnapshot');
	
						if (callback) callback.call(evt.editor);
					});
				}
	
				// Fire "setData" so data manipulation may happen.
				eventData = { dataValue: data };
				!internal && this.fire('setData', eventData);
	
				this._.data = eventData.dataValue;
	
				!internal && this.fire('afterSetData', eventData);
			},
	
			/**
	   * Puts or restores the editor into the read-only state. When in read-only,
	   * the user is not able to change the editor content, but can still use
	   * some editor features. This function sets the {@link #property-readOnly}
	   * property of the editor, firing the {@link #event-readOnly} event.
	   *
	   * **Note:** The current editing area will be reloaded.
	   *
	   * @since 3.6
	   * @param {Boolean} [isReadOnly] Indicates that the editor must go
	   * read-only (`true`, default) or be restored and made editable (`false`).
	   */
			setReadOnly: function (isReadOnly) {
				isReadOnly = isReadOnly == null || isReadOnly;
	
				if (this.readOnly != isReadOnly) {
					this.readOnly = isReadOnly;
	
					// Block or release BACKSPACE key according to current read-only
					// state to prevent browser's history navigation (#9761).
					this.keystrokeHandler.blockedKeystrokes[8] = +isReadOnly;
	
					this.editable().setReadOnly(isReadOnly);
	
					// Fire the readOnly event so the editor features can update
					// their state accordingly.
					this.fire('readOnly');
				}
			},
	
			/**
	   * Inserts HTML code into the currently selected position in the editor in WYSIWYG mode.
	   *
	   * Example:
	   *
	   *		CKEDITOR.instances.editor1.insertHtml( '<p>This is a new paragraph.</p>' );
	   *
	   * Fires the {@link #event-insertHtml} and {@link #event-afterInsertHtml} events. The HTML is inserted
	   * in the {@link #event-insertHtml} event's listener with a default priority (10) so you can add listeners with
	   * lower or higher priorities in order to execute some code before or after the HTML is inserted.
	   *
	   * @param {String} html HTML code to be inserted into the editor.
	   * @param {String} [mode='html'] The mode in which the HTML code will be inserted. One of the following:
	   *
	   * * `'html'` &ndash; The inserted content  will completely override the styles at the selected position.
	   * * `'unfiltered_html'` &ndash; Like `'html'` but the content is not filtered with {@link CKEDITOR.filter}.
	   * * `'text'` &ndash; The inserted content will inherit the styles applied in
	   *    the selected position. This mode should be used when inserting "htmlified" plain text
	   *    (HTML without inline styles and styling elements like `<b>`, `<strong>`, `<span style="...">`).
	   *
	   * @param {CKEDITOR.dom.range} [range] If specified, the HTML will be inserted into the range
	   * instead of into the selection. The selection will be placed at the end of the insertion (like in the normal case).
	   * Introduced in CKEditor 4.5.
	   */
			insertHtml: function (html, mode, range) {
				this.fire('insertHtml', { dataValue: html, mode: mode, range: range });
			},
	
			/**
	   * Inserts text content into the currently selected position in the
	   * editor in WYSIWYG mode. The styles of the selected element will be applied to the inserted text.
	   * Spaces around the text will be left untouched.
	   *
	   *		CKEDITOR.instances.editor1.insertText( ' line1 \n\n line2' );
	   *
	   * Fires the {@link #event-insertText} and {@link #event-afterInsertHtml} events. The text is inserted
	   * in the {@link #event-insertText} event's listener with a default priority (10) so you can add listeners with
	   * lower or higher priorities in order to execute some code before or after the text is inserted.
	   *
	   * @since 3.5
	   * @param {String} text Text to be inserted into the editor.
	   */
			insertText: function (text) {
				this.fire('insertText', text);
			},
	
			/**
	   * Inserts an element into the currently selected position in the editor in WYSIWYG mode.
	   *
	   *		var element = CKEDITOR.dom.element.createFromHtml( '<img src="hello.png" border="0" title="Hello" />' );
	   *		CKEDITOR.instances.editor1.insertElement( element );
	   *
	   * Fires the {@link #event-insertElement} event. The element is inserted in the listener with a default priority (10),
	   * so you can add listeners with lower or higher priorities in order to execute some code before or after
	   * the element is inserted.
	   *
	   * @param {CKEDITOR.dom.element} element The element to be inserted into the editor.
	   */
			insertElement: function (element) {
				this.fire('insertElement', element);
			},
	
			/**
	   * Gets the selected HTML (it is returned as a {@link CKEDITOR.dom.documentFragment document fragment}
	   * or a string). This method is designed to work as the user would expect the copy functionality to work.
	   * For instance, if the following selection was made:
	   *
	   *		<p>a<b>b{c}d</b>e</p>
	   *
	   * The following HTML will be returned:
	   *
	   *		<b>c</b>
	   *
	   * As you can see, the information about the bold formatting was preserved, even though the selection was
	   * anchored inside the `<b>` element.
	   *
	   * See also:
	   *
	   * * the {@link #extractSelectedHtml} method,
	   * * the {@link CKEDITOR.editable#getHtmlFromRange} method.
	   *
	   * @since 4.5
	   * @param {Boolean} [toString] If `true`, then stringified HTML will be returned.
	   * @returns {CKEDITOR.dom.documentFragment/String}
	   */
			getSelectedHtml: function (toString) {
				var editable = this.editable(),
				    selection = this.getSelection(),
				    ranges = selection && selection.getRanges();
	
				if (!editable || !ranges || ranges.length === 0) {
					return null;
				}
	
				var docFragment = createDocumentFragmentFromRanges(ranges, editable);
	
				return toString ? docFragment.getHtml() : docFragment;
			},
	
			/**
	   * Gets the selected HTML (it is returned as a {@link CKEDITOR.dom.documentFragment document fragment}
	   * or a string) and removes the selected part of the DOM. This method is designed to work as the user would
	   * expect the cut and delete functionalities to work.
	   *
	   * See also:
	   *
	   * * the {@link #getSelectedHtml} method,
	   * * the {@link CKEDITOR.editable#extractHtmlFromRange} method.
	   *
	   * @since 4.5
	   * @param {Boolean} [toString] If `true`, then stringified HTML will be returned.
	   * @param {Boolean} [removeEmptyBlock=false] Default `false` means that the function will keep an empty block (if the
	   * entire content was removed) or it will create it (if a block element was removed) and set the selection in that block.
	   * If `true`, the empty block will be removed or not created. In this case the function will not handle the selection.
	   * @returns {CKEDITOR.dom.documentFragment/String/null}
	   */
			extractSelectedHtml: function (toString, removeEmptyBlock) {
				var editable = this.editable(),
				    ranges = this.getSelection().getRanges();
	
				if (!editable || ranges.length === 0) {
					return null;
				}
	
				var range = ranges[0],
				    docFragment = editable.extractHtmlFromRange(range, removeEmptyBlock);
	
				if (!removeEmptyBlock) {
					this.getSelection().selectRanges([range]);
				}
	
				return toString ? docFragment.getHtml() : docFragment;
			},
	
			/**
	   * Moves the selection focus to the editing area space in the editor.
	   */
			focus: function () {
				this.fire('beforeFocus');
			},
	
			/**
	   * Checks whether the current editor content contains changes when
	   * compared to the content loaded into the editor at startup, or to
	   * the content available in the editor when {@link #resetDirty}
	   * was called.
	   *
	   *		function beforeUnload( evt ) {
	   *			if ( CKEDITOR.instances.editor1.checkDirty() )
	   *				return evt.returnValue = "You will lose the changes made in the editor.";
	   *		}
	   *
	   *		if ( window.addEventListener )
	   *			window.addEventListener( 'beforeunload', beforeUnload, false );
	   *		else
	   *			window.attachEvent( 'onbeforeunload', beforeUnload );
	   *
	   * @returns {Boolean} `true` if the content contains changes.
	   */
			checkDirty: function () {
				return this.status == 'ready' && this._.previousValue !== this.getSnapshot();
			},
	
			/**
	   * Resets the "dirty state" of the editor so subsequent calls to
	   * {@link #checkDirty} will return `false` if the user will not
	   * have made further changes to the content.
	   *
	   *		alert( editor.checkDirty() ); // e.g. true
	   *		editor.resetDirty();
	   *		alert( editor.checkDirty() ); // false
	   */
			resetDirty: function () {
				this._.previousValue = this.getSnapshot();
			},
	
			/**
	   * Updates the `<textarea>` element that was replaced by the editor with
	   * the current data available in the editor.
	   *
	   * **Note:** This method will only affect those editor instances created
	   * with the {@link CKEDITOR#ELEMENT_MODE_REPLACE} element mode or inline instances
	   * bound to `<textarea>` elements.
	   *
	   *		CKEDITOR.instances.editor1.updateElement();
	   *		alert( document.getElementById( 'editor1' ).value ); // The current editor data.
	   *
	   * @see CKEDITOR.editor#element
	   */
			updateElement: function () {
				return updateEditorElement.call(this);
			},
	
			/**
	   * Assigns keystrokes associated with editor commands.
	   *
	   *		editor.setKeystroke( CKEDITOR.CTRL + 115, 'save' );	// Assigned Ctrl+S to the "save" command.
	   *		editor.setKeystroke( CKEDITOR.CTRL + 115, false );	// Disabled Ctrl+S keystroke assignment.
	   *		editor.setKeystroke( [
	   *			[ CKEDITOR.ALT + 122, false ],
	   *			[ CKEDITOR.CTRL + 121, 'link' ],
	   *			[ CKEDITOR.SHIFT + 120, 'bold' ]
	   *		] );
	   *
	   * This method may be used in the following cases:
	   *
	   * * By plugins (like `link` or `basicstyles`) to set their keystrokes when plugins are being loaded.
	   * * During the runtime to modify existing keystrokes.
	   *
	   * The editor handles keystroke configuration in the following order:
	   *
	   * 1. Plugins use this method to define default keystrokes.
	   * 2. Editor extends default keystrokes with {@link CKEDITOR.config#keystrokes}.
	   * 3. Editor blocks keystrokes defined in {@link CKEDITOR.config#blockedKeystrokes}.
	   *
	   * You can then set new keystrokes using this method during the runtime.
	   *
	   * @since 4.0
	   * @param {Number/Array} keystroke A keystroke or an array of keystroke definitions.
	   * @param {String/Boolean} [behavior] A command to be executed on the keystroke.
	   */
			setKeystroke: function () {
				var keystrokes = this.keystrokeHandler.keystrokes,
				    newKeystrokes = CKEDITOR.tools.isArray(arguments[0]) ? arguments[0] : [[].slice.call(arguments, 0)],
				    keystroke,
				    behavior;
	
				for (var i = newKeystrokes.length; i--;) {
					keystroke = newKeystrokes[i];
					behavior = 0;
	
					// It may be a pair of: [ key, command ]
					if (CKEDITOR.tools.isArray(keystroke)) {
						behavior = keystroke[1];
						keystroke = keystroke[0];
					}
	
					if (behavior) keystrokes[keystroke] = behavior;else delete keystrokes[keystroke];
				}
			},
	
			/**
	   * Shorthand for {@link CKEDITOR.filter#addFeature}.
	   *
	   * @since 4.1
	   * @param {CKEDITOR.feature} feature See {@link CKEDITOR.filter#addFeature}.
	   * @returns {Boolean} See {@link CKEDITOR.filter#addFeature}.
	   */
			addFeature: function (feature) {
				return this.filter.addFeature(feature);
			},
	
			/**
	   * Sets the active filter ({@link #activeFilter}). Fires the {@link #activeFilterChange} event.
	   *
	   *		// Set active filter which allows only 4 elements.
	   *		// Buttons like Bold, Italic will be disabled.
	   *		var filter = new CKEDITOR.filter( 'p strong em br' );
	   *		editor.setActiveFilter( filter );
	   *
	   * Setting a new filter will also change the {@link #setActiveEnterMode active Enter modes} to the first values
	   * allowed by the new filter (see {@link CKEDITOR.filter#getAllowedEnterMode}).
	   *
	   * @since 4.3
	   * @param {CKEDITOR.filter} filter Filter instance or a falsy value (e.g. `null`) to reset to the default one.
	   */
			setActiveFilter: function (filter) {
				if (!filter) filter = this.filter;
	
				if (this.activeFilter !== filter) {
					this.activeFilter = filter;
					this.fire('activeFilterChange');
	
					// Reset active filter to the main one - it resets enter modes, too.
					if (filter === this.filter) this.setActiveEnterMode(null, null);else this.setActiveEnterMode(filter.getAllowedEnterMode(this.enterMode), filter.getAllowedEnterMode(this.shiftEnterMode, true));
				}
			},
	
			/**
	   * Sets the active Enter modes: ({@link #enterMode} and {@link #shiftEnterMode}).
	   * Fires the {@link #activeEnterModeChange} event.
	   *
	   * Prior to CKEditor 4.3 Enter modes were static and it was enough to check {@link CKEDITOR.config#enterMode}
	   * and {@link CKEDITOR.config#shiftEnterMode} when implementing a feature which should depend on the Enter modes.
	   * Since CKEditor 4.3 these options are source of initial:
	   *
	   * * static {@link #enterMode} and {@link #shiftEnterMode} values,
	   * * dynamic {@link #activeEnterMode} and {@link #activeShiftEnterMode} values.
	   *
	   * However, the dynamic Enter modes can be changed during runtime by using this method, to reflect the selection context.
	   * For example, if selection is moved to the {@link CKEDITOR.plugins.widget widget}'s nested editable which
	   * is a {@link #blockless blockless one}, then the active Enter modes should be changed to {@link CKEDITOR#ENTER_BR}
	   * (in this case [Widget System](#!/guide/dev_widgets) takes care of that).
	   *
	   * **Note:** This method should not be used to configure the editor &ndash; use {@link CKEDITOR.config#enterMode} and
	   * {@link CKEDITOR.config#shiftEnterMode} instead. This method should only be used to dynamically change
	   * Enter modes during runtime based on selection changes.
	   * Keep in mind that changed Enter mode may be overwritten by another plugin/feature when it decided that
	   * the changed context requires this.
	   *
	   * **Note:** In case of blockless editor (inline editor based on an element which cannot contain block elements
	   * &mdash; see {@link CKEDITOR.editor#blockless}) only {@link CKEDITOR#ENTER_BR} is a valid Enter mode. Therefore
	   * this method will not allow to set other values.
	   *
	   * **Note:** Changing the {@link #activeFilter active filter} may cause the Enter mode to change if default Enter modes
	   * are not allowed by the new filter.
	   *
	   * @since 4.3
	   * @param {Number} enterMode One of {@link CKEDITOR#ENTER_P}, {@link CKEDITOR#ENTER_DIV}, {@link CKEDITOR#ENTER_BR}.
	   * Pass falsy value (e.g. `null`) to reset the Enter mode to the default value ({@link #enterMode} and/or {@link #shiftEnterMode}).
	   * @param {Number} shiftEnterMode See the `enterMode` argument.
	   */
			setActiveEnterMode: function (enterMode, shiftEnterMode) {
				// Validate passed modes or use default ones (validated on init).
				enterMode = enterMode ? validateEnterMode(this, enterMode) : this.enterMode;
				shiftEnterMode = shiftEnterMode ? validateEnterMode(this, shiftEnterMode) : this.shiftEnterMode;
	
				if (this.activeEnterMode != enterMode || this.activeShiftEnterMode != shiftEnterMode) {
					this.activeEnterMode = enterMode;
					this.activeShiftEnterMode = shiftEnterMode;
					this.fire('activeEnterModeChange');
				}
			},
	
			/**
	   * Shows a notification to the user.
	   *
	   * If the [Notification](http://ckeditor.com/addons/notification) plugin is not enabled, this function shows
	   * a normal alert with the given `message`. The `type` and `progressOrDuration` parameters are supported
	   * only by the Notification plugin.
	   *
	   * If the Notification plugin is enabled, this method creates and shows a new notification.
	   * By default the notification is shown over the editor content, in the viewport if it is possible.
	   *
	   * See {@link CKEDITOR.plugins.notification}.
	   *
	   * @since 4.5
	   * @member CKEDITOR.editor
	   * @param {String} message The message displayed in the notification.
	   * @param {String} [type='info'] The type of the notification. Can be `'info'`, `'warning'`, `'success'` or `'progress'`.
	   * @param {Number} [progressOrDuration] If the type is `progress`, the third parameter may be a progress from `0` to `1`
	   * (defaults to `0`). Otherwise the third parameter may be a notification duration denoting after how many milliseconds
	   * the notification should be closed automatically. `0` means that the notification will not close automatically and the user
	   * needs to close it manually. See {@link CKEDITOR.plugins.notification#duration}.
	   * Note that `warning` notifications will not be closed automatically.
	   * @returns {CKEDITOR.plugins.notification} Created and shown notification.
	   */
			showNotification: function (message) {
				alert(message); // jshint ignore:line
			}
		});
	})();
	
	/**
	 * The editor has no associated element.
	 *
	 * @readonly
	 * @property {Number} [=0]
	 * @member CKEDITOR
	 */
	CKEDITOR.ELEMENT_MODE_NONE = 0;
	
	/**
	 * The element is to be replaced by the editor instance.
	 *
	 * @readonly
	 * @property {Number} [=1]
	 * @member CKEDITOR
	 */
	CKEDITOR.ELEMENT_MODE_REPLACE = 1;
	
	/**
	 * The editor is to be created inside the element.
	 *
	 * @readonly
	 * @property {Number} [=2]
	 * @member CKEDITOR
	 */
	CKEDITOR.ELEMENT_MODE_APPENDTO = 2;
	
	/**
	 * The editor is to be attached to the element, using it as the editing block.
	 *
	 * @readonly
	 * @property {Number} [=3]
	 * @member CKEDITOR
	 */
	CKEDITOR.ELEMENT_MODE_INLINE = 3;
	
	/**
	 * Whether to escape HTML when the editor updates the original input element.
	 *
	 *		config.htmlEncodeOutput = true;
	 *
	 * @since 3.1
	 * @cfg {Boolean} [htmlEncodeOutput=false]
	 * @member CKEDITOR.config
	 */
	
	/**
	 * If `true`, makes the editor start in read-only state. Otherwise, it will check
	 * if the linked `<textarea>` element has the `disabled` attribute.
	 *
	 * Read more in the [documentation](#!/guide/dev_readonly)
	 * and see the [SDK sample](http://sdk.ckeditor.com/samples/readonly.html).
	 *
	 *		config.readOnly = true;
	 *
	 * @since 3.6
	 * @cfg {Boolean} [readOnly=false]
	 * @member CKEDITOR.config
	 * @see CKEDITOR.editor#setReadOnly
	 */
	
	/**
	 * Whether an editable element should have focus when the editor is loading for the first time.
	 *
	 *		config.startupFocus = true;
	 *
	 * @cfg {Boolean} [startupFocus=false]
	 * @member CKEDITOR.config
	 */
	
	/**
	* Customizes the {@link CKEDITOR.editor#title human-readable title} of this editor. This title is displayed in
	* tooltips and impacts various [accessibility aspects](#!/guide/dev_a11y-section-announcing-the-editor-on-the-page),
	* e.g. it is commonly used by screen readers for distinguishing editor instances and for navigation.
	* Accepted values are a string or `false`.
	*
	* **Note:** When `config.title` is set globally, the same value will be applied to all editor instances
	* loaded with this config. This may adversely affect accessibility as screen reader users will be unable
	* to distinguish particular editor instances and navigate between them.
	*
	* **Note:** Setting `config.title = false` may also impair accessibility in a similar way.
	*
	* **Note:** Please do not confuse this property with {@link CKEDITOR.editor#name}
	* which identifies the instance in the {@link CKEDITOR#instances} literal.
	*
	*		// Sets the title to 'My WYSIWYG editor.'. The original title of the element (if it exists)
	*		// will be restored once the editor instance is destroyed.
	*		config.title = 'My WYSIWYG editor.';
	*
	*		// Do not touch the title. If the element already has a title, it remains unchanged.
	*		// Also if no `title` attribute exists, nothing new will be added.
	*		config.title = false;
	*
	* See also:
	*
	* * CKEDITOR.editor#name
	* * CKEDITOR.editor#title
	*
	* @since 4.2
	* @cfg {String/Boolean} [title=based on editor.name]
	* @member CKEDITOR.config
	*/
	
	/**
	 * Sets listeners on editor events.
	 *
	 * **Note:** This property can only be set in the `config` object passed directly
	 * to {@link CKEDITOR#replace}, {@link CKEDITOR#inline}, and other creators.
	 *
	 *		CKEDITOR.replace( 'editor1', {
	 *			on: {
	 *				instanceReady: function() {
	 *					alert( this.name ); // 'editor1'
	 *				},
	 *
	 *				key: function() {
	 *					// ...
	 *				}
	 *			}
	 *		} );
	 *
	 * @cfg {Object} on
	 * @member CKEDITOR.config
	 */
	
	/**
	 * The outermost element in the DOM tree in which the editable element resides. It is provided
	 * by a specific editor creator after the editor UI is created and is not intended to
	 * be modified.
	 *
	 *		var editor = CKEDITOR.instances.editor1;
	 *		alert( editor.container.getName() ); // 'span'
	 *
	 * @readonly
	 * @property {CKEDITOR.dom.element} container
	 */
	
	/**
	 * The document that stores the editor content.
	 *
	 * * For the classic (`iframe`-based) editor it is equal to the document inside the
	 * `iframe` containing the editable element.
	 * * For the inline editor it is equal to {@link CKEDITOR#document}.
	 *
	 * The document object is available after the {@link #contentDom} event is fired
	 * and may be invalidated when the {@link #contentDomUnload} event is fired
	 * (classic editor only).
	 *
	 *		editor.on( 'contentDom', function() {
	 *			console.log( editor.document );
	 *		} );
	 *
	 * @readonly
	 * @property {CKEDITOR.dom.document} document
	 */
	
	/**
	 * The window instance related to the {@link #document} property.
	 *
	 * It is always equal to the `editor.document.getWindow()`.
	 *
	 * See the {@link #document} property documentation.
	 *
	 * @readonly
	 * @property {CKEDITOR.dom.window} window
	 */
	
	/**
	 * The main filter instance used for input data filtering, data
	 * transformations, and activation of features.
	 *
	 * It points to a {@link CKEDITOR.filter} instance set up based on
	 * editor configuration.
	 *
	 * @since 4.1
	 * @readonly
	 * @property {CKEDITOR.filter} filter
	 */
	
	/**
	 * The active filter instance which should be used in the current context (location selection).
	 * This instance will be used to make a decision which commands, buttons and other
	 * {@link CKEDITOR.feature features} can be enabled.
	 *
	 * By default it equals the {@link #filter} and it can be changed by the {@link #setActiveFilter} method.
	 *
	 *		editor.on( 'activeFilterChange', function() {
	 *			if ( editor.activeFilter.check( 'cite' ) )
	 *				// Do something when <cite> was enabled - e.g. enable a button.
	 *			else
	 *				// Otherwise do something else.
	 *		} );
	 *
	 * See also the {@link #setActiveEnterMode} method for an explanation of dynamic settings.
	 *
	 * @since 4.3
	 * @readonly
	 * @property {CKEDITOR.filter} activeFilter
	 */
	
	/**
	 * The main (static) Enter mode which is a validated version of the {@link CKEDITOR.config#enterMode} setting.
	 * Currently only one rule exists &mdash; {@link #blockless blockless editors} may have
	 * Enter modes set only to {@link CKEDITOR#ENTER_BR}.
	 *
	 * @since 4.3
	 * @readonly
	 * @property {Number} enterMode
	 */
	
	/**
	 * See the {@link #enterMode} property.
	 *
	 * @since 4.3
	 * @readonly
	 * @property {Number} shiftEnterMode
	 */
	
	/**
	 * The dynamic Enter mode which should be used in the current context (selection location).
	 * By default it equals the {@link #enterMode} and it can be changed by the {@link #setActiveEnterMode} method.
	 *
	 * See also the {@link #setActiveEnterMode} method for an explanation of dynamic settings.
	 *
	 * @since 4.3
	 * @readonly
	 * @property {Number} activeEnterMode
	 */
	
	/**
	 * See the {@link #activeEnterMode} property.
	 *
	 * @since 4.3
	 * @readonly
	 * @property {Number} activeShiftEnterMode
	 */
	
	/**
	 * Event fired by the {@link #setActiveFilter} method when the {@link #activeFilter} is changed.
	 *
	 * @since 4.3
	 * @event activeFilterChange
	 */
	
	/**
	 * Event fired by the {@link #setActiveEnterMode} method when any of the active Enter modes is changed.
	 * See also the {@link #activeEnterMode} and {@link #activeShiftEnterMode} properties.
	 *
	 * @since 4.3
	 * @event activeEnterModeChange
	 */
	
	/**
	 * Event fired when a CKEDITOR instance is created, but still before initializing it.
	 * To interact with a fully initialized instance, use the
	 * {@link CKEDITOR#instanceReady} event instead.
	 *
	 * @event instanceCreated
	 * @member CKEDITOR
	 * @param {CKEDITOR.editor} editor The editor instance that has been created.
	 */
	
	/**
	 * Event fired when CKEDITOR instance's components (configuration, languages and plugins) are fully
	 * loaded and initialized. However, the editor will be fully ready for interaction
	 * on {@link CKEDITOR#instanceReady}.
	 *
	 * @event instanceLoaded
	 * @member CKEDITOR
	 * @param {CKEDITOR.editor} editor This editor instance that has been loaded.
	 */
	
	/**
	 * Event fired when a CKEDITOR instance is destroyed.
	 *
	 * @event instanceDestroyed
	 * @member CKEDITOR
	 * @param {CKEDITOR.editor} editor The editor instance that has been destroyed.
	 */
	
	/**
	 * Event fired when a CKEDITOR instance is created, fully initialized and ready for interaction.
	 *
	 * @event instanceReady
	 * @member CKEDITOR
	 * @param {CKEDITOR.editor} editor The editor instance that has been created.
	 */
	
	/**
	 * Event fired when the language is loaded into the editor instance.
	 *
	 * @since 3.6.1
	 * @event langLoaded
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Event fired when all plugins are loaded and initialized into the editor instance.
	 *
	 * @event pluginsLoaded
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Event fired when the styles set is loaded. During the editor initialization
	 * phase the {@link #getStylesSet} method returns only styles that
	 * are already loaded, which may not include e.g. styles parsed
	 * by the `stylesheetparser` plugin. Thus, to be notified when all
	 * styles are ready, you can listen on this event.
	 *
	 * @since 4.1
	 * @event stylesSet
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param {Array} styles An array of styles definitions.
	 */
	
	/**
	 * Event fired before the command execution when {@link #execCommand} is called.
	 *
	 * @event beforeCommandExec
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param data
	 * @param {String} data.name The command name.
	 * @param {Object} data.commandData The data to be sent to the command. This
	 * can be manipulated by the event listener.
	 * @param {CKEDITOR.command} data.command The command itself.
	 */
	
	/**
	 * Event fired after the command execution when {@link #execCommand} is called.
	 *
	 * @event afterCommandExec
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param data
	 * @param {String} data.name The command name.
	 * @param {Object} data.commandData The data sent to the command.
	 * @param {CKEDITOR.command} data.command The command itself.
	 * @param {Object} data.returnValue The value returned by the command execution.
	 */
	
	/**
	 * Event fired when a custom configuration file is loaded, before the final
	 * configuration initialization.
	 *
	 * Custom configuration files can be loaded thorugh the
	 * {@link CKEDITOR.config#customConfig} setting. Several files can be loaded
	 * by changing this setting.
	 *
	 * @event customConfigLoaded
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Event fired once the editor configuration is ready (loaded and processed).
	 *
	 * @event configLoaded
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Event fired when this editor instance is destroyed. The editor at this
	 * point is not usable and this event should be used to perform the clean-up
	 * in any plugin.
	 *
	 * @event destroy
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Internal event to get the current data.
	 *
	 * @event beforeGetData
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Internal event to perform the {@link #method-getSnapshot} call.
	 *
	 * @event getSnapshot
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Internal event to perform the {@link #method-loadSnapshot} call.
	 *
	 * @event loadSnapshot
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param {String} data The data that will be used.
	 */
	
	/**
	 * Event fired before the {@link #method-getData} call returns, allowing for additional manipulation.
	 *
	 * @event getData
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param data
	 * @param {String} data.dataValue The data that will be returned.
	 */
	
	/**
	 * Event fired before the {@link #method-setData} call is executed, allowing for additional manipulation.
	 *
	 * @event setData
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param data
	 * @param {String} data.dataValue The data that will be used.
	 */
	
	/**
	 * Event fired at the end of the {@link #method-setData} call execution. Usually it is better to use the
	 * {@link #dataReady} event.
	 *
	 * @event afterSetData
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param data
	 * @param {String} data.dataValue The data that has been set.
	 */
	
	/**
	 * Event fired as an indicator of the editor data loading. It may be the result of
	 * calling {@link #method-setData} explicitly or an internal
	 * editor function, like the editor editing mode switching (move to Source and back).
	 *
	 * @event dataReady
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Event fired when the CKEDITOR instance is completely created, fully initialized
	 * and ready for interaction.
	 *
	 * @event instanceReady
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Event fired when editor components (configuration, languages and plugins) are fully
	 * loaded and initialized. However, the editor will be fully ready to for interaction
	 * on {@link #instanceReady}.
	 *
	 * @event loaded
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Event fired by the {@link #method-insertHtml} method. See the method documentation for more information
	 * about how this event can be used.
	 *
	 * @event insertHtml
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param data
	 * @param {String} data.mode The mode in which the data is inserted (see {@link #method-insertHtml}).
	 * @param {String} data.dataValue The HTML code to insert.
	 * @param {CKEDITOR.dom.range} [data.range] See {@link #method-insertHtml}'s `range` parameter.
	 */
	
	/**
	 * Event fired by the {@link #method-insertText} method. See the method documentation for more information
	 * about how this event can be used.
	 *
	 * @event insertText
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param {String} data The text to insert.
	 */
	
	/**
	 * Event fired by the {@link #method-insertElement} method. See the method documentation for more information
	 * about how this event can be used.
	 *
	 * @event insertElement
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param {CKEDITOR.dom.element} data The element to insert.
	 */
	
	/**
	 * Event fired after data insertion using the {@link #method-insertHtml}, {@link CKEDITOR.editable#insertHtml},
	 * or {@link CKEDITOR.editable#insertHtmlIntoRange} methods.
	 *
	 * @since 4.5
	 * @event afterInsertHtml
	 * @param data
	 * @param {CKEDITOR.dom.range} [data.intoRange] If set, the HTML was not inserted into the current selection, but into
	 * the specified range. This property is set if the {@link CKEDITOR.editable#insertHtmlIntoRange} method was used,
	 * but not if for the {@link CKEDITOR.editable#insertHtml} method.
	 */
	
	/**
	 * Event fired after the {@link #property-readOnly} property changes.
	 *
	 * @since 3.6
	 * @event readOnly
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Event fired when a UI template is added to the editor instance. It makes
	 * it possible to bring customizations to the template source.
	 *
	 * @event template
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param data
	 * @param {String} data.name The template name.
	 * @param {String} data.source The source data for this template.
	 */
	
	/**
	 * Event fired when the editor content (its DOM structure) is ready.
	 * It is similar to the native `DOMContentLoaded` event, but it applies to
	 * the editor content. It is also the first event fired after
	 * the {@link CKEDITOR.editable} is initialized.
	 *
	 * This event is particularly important for classic (`iframe`-based)
	 * editor, because on editor initialization and every time the data are set
	 * (by {@link CKEDITOR.editor#method-setData}) content DOM structure
	 * is rebuilt. Thus, e.g. you need to attach DOM event listeners
	 * on editable one more time.
	 *
	 * For inline editor this event is fired only once &mdash; when the
	 * editor is initialized for the first time. This is because setting
	 * editor content does not cause editable destruction and creation.
	 *
	 * The {@link #contentDom} event goes along with {@link #contentDomUnload}
	 * which is fired before the content DOM structure is destroyed. This is the
	 * right moment to detach content DOM event listener. Otherwise
	 * browsers like IE or Opera may throw exceptions when accessing
	 * elements from the detached document.
	 *
	 * **Note:** {@link CKEDITOR.editable#attachListener} is a convenient
	 * way to attach listeners that will be detached on {@link #contentDomUnload}.
	 *
	 *		editor.on( 'contentDom', function() {
	 *			var editable = editor.editable();
	 *
	 *			editable.attachListener( editable, 'click', function() {
	 *				console.log( 'The editable was clicked.' );
	 *			});
	 *		});
	 *
	 * @event contentDom
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Event fired before the content DOM structure is destroyed.
	 * See {@link #contentDom} documentation for more details.
	 *
	 * @event contentDomUnload
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Event fired when the content DOM changes and some of the references as well as
	 * the native DOM event listeners could be lost.
	 * This event is useful when it is important to keep track of references
	 * to elements in the editable content from code.
	 *
	 * @since 4.3
	 * @event contentDomInvalidated
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */

/***/ },
/* 33 */
/*!****************************!*\
  !*** ./core/htmlparser.js ***!
  \****************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * Provides an "event like" system to parse strings of HTML data.
	 *
	 *		var parser = new CKEDITOR.htmlParser();
	 *		parser.onTagOpen = function( tagName, attributes, selfClosing ) {
	 *			alert( tagName );
	 *		};
	 *		parser.parse( '<p>Some <b>text</b>.</p>' ); // Alerts 'p', 'b'.
	 *
	 * @class
	 * @constructor Creates a htmlParser class instance.
	 */
	CKEDITOR.htmlParser = function () {
		this._ = {
			htmlPartsRegex: /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)-->)|(?:([^\/\s>]+)((?:\s+[\w\-:.]+(?:\s*=\s*?(?:(?:"[^"]*")|(?:'[^']*')|[^\s"'\/>]+))?)*)[\S\s]*?(\/?)>))/g
		};
	};
	
	(function () {
		var attribsRegex = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,
		    emptyAttribs = { checked: 1, compact: 1, declare: 1, defer: 1, disabled: 1, ismap: 1, multiple: 1, nohref: 1, noresize: 1, noshade: 1, nowrap: 1, readonly: 1, selected: 1 };
	
		CKEDITOR.htmlParser.prototype = {
			/**
	   * Function to be fired when a tag opener is found. This function
	   * should be overriden when using this class.
	   *
	   *		var parser = new CKEDITOR.htmlParser();
	   *		parser.onTagOpen = function( tagName, attributes, selfClosing ) {
	   *			alert( tagName ); // e.g. 'b'
	   *		} );
	   *		parser.parse( '<!-- Example --><b>Hello</b>' );
	   *
	   * @param {String} tagName The tag name. The name is guarantted to be lowercased.
	   * @param {Object} attributes An object containing all tag attributes. Each
	   * property in this object represent and attribute name and its value is the attribute value.
	   * @param {Boolean} selfClosing `true` if the tag closes itself, false if the tag doesn't.
	   */
			onTagOpen: function () {},
	
			/**
	   * Function to be fired when a tag closer is found. This function
	   * should be overriden when using this class.
	   *
	   *		var parser = new CKEDITOR.htmlParser();
	   *		parser.onTagClose = function( tagName ) {
	   *			alert( tagName ); // 'b'
	   *		} );
	   *		parser.parse( '<!-- Example --><b>Hello</b>' );
	   *
	   * @param {String} tagName The tag name. The name is guarantted to be lowercased.
	   */
			onTagClose: function () {},
	
			/**
	   * Function to be fired when text is found. This function
	   * should be overriden when using this class.
	   *
	   *		var parser = new CKEDITOR.htmlParser();
	   *		parser.onText = function( text ) {
	   *			alert( text ); // 'Hello'
	   *		} );
	   *		parser.parse( '<!-- Example --><b>Hello</b>' );
	   *
	   * @param {String} text The text found.
	   */
			onText: function () {},
	
			/**
	   * Function to be fired when CDATA section is found. This function
	   * should be overriden when using this class.
	   *
	   *		var parser = new CKEDITOR.htmlParser();
	   *		parser.onCDATA = function( cdata ) {
	   *			alert( cdata ); // 'var hello;'
	   *		} );
	   *		parser.parse( '<script>var hello;</script>' );
	   *
	   * @param {String} cdata The CDATA been found.
	   */
			onCDATA: function () {},
	
			/**
	   * Function to be fired when a commend is found. This function
	   * should be overriden when using this class.
	   *
	   *		var parser = new CKEDITOR.htmlParser();
	   *		parser.onComment = function( comment ) {
	   *			alert( comment ); // ' Example '
	   *		} );
	   *		parser.parse( '<!-- Example --><b>Hello</b>' );
	   *
	   * @param {String} comment The comment text.
	   */
			onComment: function () {},
	
			/**
	   * Parses text, looking for HTML tokens, like tag openers or closers,
	   * or comments. This function fires the onTagOpen, onTagClose, onText
	   * and onComment function during its execution.
	   *
	   *		var parser = new CKEDITOR.htmlParser();
	   *		// The onTagOpen, onTagClose, onText and onComment should be overriden
	   *		// at this point.
	   *		parser.parse( '<!-- Example --><b>Hello</b>' );
	   *
	   * @param {String} html The HTML to be parsed.
	   */
			parse: function (html) {
				var parts,
				    tagName,
				    nextIndex = 0,
				    cdata; // The collected data inside a CDATA section.
	
				while (parts = this._.htmlPartsRegex.exec(html)) {
					var tagIndex = parts.index;
					if (tagIndex > nextIndex) {
						var text = html.substring(nextIndex, tagIndex);
	
						if (cdata) cdata.push(text);else this.onText(text);
					}
	
					nextIndex = this._.htmlPartsRegex.lastIndex;
	
					// "parts" is an array with the following items:
					//		0 : The entire match for opening/closing tags and comments.
					//		  : Group filled with the tag name for closing tags.
					//		2 : Group filled with the comment text.
					//		3 : Group filled with the tag name for opening tags.
					//		4 : Group filled with the attributes part of opening tags.
	
					// Closing tag
					if (tagName = parts[1]) {
						tagName = tagName.toLowerCase();
	
						if (cdata && CKEDITOR.dtd.$cdata[tagName]) {
							// Send the CDATA data.
							this.onCDATA(cdata.join(''));
							cdata = null;
						}
	
						if (!cdata) {
							this.onTagClose(tagName);
							continue;
						}
					}
	
					// If CDATA is enabled, just save the raw match.
					if (cdata) {
						cdata.push(parts[0]);
						continue;
					}
	
					// Opening tag
					if (tagName = parts[3]) {
						tagName = tagName.toLowerCase();
	
						// There are some tag names that can break things, so let's
						// simply ignore them when parsing. (#5224)
						if (/="/.test(tagName)) continue;
	
						var attribs = {},
						    attribMatch,
						    attribsPart = parts[4],
						    selfClosing = !!parts[5];
	
						if (attribsPart) {
							while (attribMatch = attribsRegex.exec(attribsPart)) {
								var attName = attribMatch[1].toLowerCase(),
								    attValue = attribMatch[2] || attribMatch[3] || attribMatch[4] || '';
	
								if (!attValue && emptyAttribs[attName]) attribs[attName] = attName;else attribs[attName] = CKEDITOR.tools.htmlDecodeAttr(attValue);
							}
						}
	
						this.onTagOpen(tagName, attribs, selfClosing);
	
						// Open CDATA mode when finding the appropriate tags.
						if (!cdata && CKEDITOR.dtd.$cdata[tagName]) cdata = [];
	
						continue;
					}
	
					// Comment
					if (tagName = parts[2]) this.onComment(tagName);
				}
	
				if (html.length > nextIndex) this.onText(html.substring(nextIndex, html.length));
			}
		};
	})();

/***/ },
/* 34 */
/*!****************************************!*\
  !*** ./core/htmlparser/basicwriter.js ***!
  \****************************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * TODO
	 *
	 * @class
	 * @todo
	 */
	CKEDITOR.htmlParser.basicWriter = CKEDITOR.tools.createClass({
		/**
	  * Creates a basicWriter class instance.
	  *
	  * @constructor
	  */
		$: function () {
			this._ = {
				output: []
			};
		},
	
		proto: {
			/**
	   * Writes the tag opening part for a opener tag.
	   *
	   *		// Writes '<p'.
	   *		writer.openTag( 'p', { class : 'MyClass', id : 'MyId' } );
	   *
	   * @param {String} tagName The element name for this tag.
	   * @param {Object} attributes The attributes defined for this tag. The
	   * attributes could be used to inspect the tag.
	   */
			openTag: function (tagName) {
				this._.output.push('<', tagName);
			},
	
			/**
	   * Writes the tag closing part for a opener tag.
	   *
	   *		// Writes '>'.
	   *		writer.openTagClose( 'p', false );
	   *
	   *		// Writes ' />'.
	   *		writer.openTagClose( 'br', true );
	   *
	   * @param {String} tagName The element name for this tag.
	   * @param {Boolean} isSelfClose Indicates that this is a self-closing tag,
	   * like `<br>` or `<img>`.
	   */
			openTagClose: function (tagName, isSelfClose) {
				if (isSelfClose) this._.output.push(' />');else this._.output.push('>');
			},
	
			/**
	   * Writes an attribute. This function should be called after opening the
	   * tag with {@link #openTagClose}.
	   *
	   *		// Writes ' class="MyClass"'.
	   *		writer.attribute( 'class', 'MyClass' );
	   *
	   * @param {String} attName The attribute name.
	   * @param {String} attValue The attribute value.
	   */
			attribute: function (attName, attValue) {
				// Browsers don't always escape special character in attribute values. (#4683, #4719).
				if (typeof attValue == 'string') attValue = CKEDITOR.tools.htmlEncodeAttr(attValue);
	
				this._.output.push(' ', attName, '="', attValue, '"');
			},
	
			/**
	   * Writes a closer tag.
	   *
	   *		// Writes '</p>'.
	   *		writer.closeTag( 'p' );
	   *
	   * @param {String} tagName The element name for this tag.
	   */
			closeTag: function (tagName) {
				this._.output.push('</', tagName, '>');
			},
	
			/**
	   * Writes text.
	   *
	   *		// Writes 'Hello Word'.
	   *		writer.text( 'Hello Word' );
	   *
	   * @param {String} text The text value.
	   */
			text: function (text) {
				this._.output.push(text);
			},
	
			/**
	   * Writes a comment.
	   *
	   *		// Writes '<!-- My comment -->'.
	   *		writer.comment( ' My comment ' );
	   *
	   * @param {String} comment The comment text.
	   */
			comment: function (comment) {
				this._.output.push('<!--', comment, '-->');
			},
	
			/**
	   * Writes any kind of data to the ouput.
	   *
	   *		writer.write( 'This is an <b>example</b>.' );
	   *
	   * @param {String} data
	   */
			write: function (data) {
				this._.output.push(data);
			},
	
			/**
	   * Empties the current output buffer.
	   *
	   *		writer.reset();
	   */
			reset: function () {
				this._.output = [];
				this._.indent = false;
			},
	
			/**
	   * Empties the current output buffer.
	   *
	   *		var html = writer.getHtml();
	   *
	   * @param {Boolean} reset Indicates that the {@link #reset} method is to
	   * be automatically called after retrieving the HTML.
	   * @returns {String} The HTML written to the writer so far.
	   */
			getHtml: function (reset) {
				var html = this._.output.join('');
	
				if (reset) this.reset();
	
				return html;
			}
		}
	});

/***/ },
/* 35 */
/*!*********************************!*\
  !*** ./core/htmlparser/node.js ***!
  \*********************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	'use strict';
	
	(function () {
		/**
	  * A lightweight representation of HTML node.
	  *
	  * @since 4.1
	  * @class
	  * @constructor Creates a node class instance.
	  */
		CKEDITOR.htmlParser.node = function () {};
	
		CKEDITOR.htmlParser.node.prototype = {
			/**
	   * Remove this node from a tree.
	   *
	   * @since 4.1
	   */
			remove: function () {
				var children = this.parent.children,
				    index = CKEDITOR.tools.indexOf(children, this),
				    previous = this.previous,
				    next = this.next;
	
				previous && (previous.next = next);
				next && (next.previous = previous);
				children.splice(index, 1);
				this.parent = null;
			},
	
			/**
	   * Replace this node with given one.
	   *
	   * @since 4.1
	   * @param {CKEDITOR.htmlParser.node} node The node that will replace this one.
	   */
			replaceWith: function (node) {
				var children = this.parent.children,
				    index = CKEDITOR.tools.indexOf(children, this),
				    previous = node.previous = this.previous,
				    next = node.next = this.next;
	
				previous && (previous.next = node);
				next && (next.previous = node);
	
				children[index] = node;
	
				node.parent = this.parent;
				this.parent = null;
			},
	
			/**
	   * Insert this node after given one.
	   *
	   * @since 4.1
	   * @param {CKEDITOR.htmlParser.node} node The node that will precede this element.
	   */
			insertAfter: function (node) {
				var children = node.parent.children,
				    index = CKEDITOR.tools.indexOf(children, node),
				    next = node.next;
	
				children.splice(index + 1, 0, this);
	
				this.next = node.next;
				this.previous = node;
				node.next = this;
				next && (next.previous = this);
	
				this.parent = node.parent;
			},
	
			/**
	   * Insert this node before given one.
	   *
	   * @since 4.1
	   * @param {CKEDITOR.htmlParser.node} node The node that will follow this element.
	   */
			insertBefore: function (node) {
				var children = node.parent.children,
				    index = CKEDITOR.tools.indexOf(children, node);
	
				children.splice(index, 0, this);
	
				this.next = node;
				this.previous = node.previous;
				node.previous && (node.previous.next = this);
				node.previous = this;
	
				this.parent = node.parent;
			},
	
			/**
	   * Gets the closest ancestor element of this element which satisfies given condition
	   *
	   * @since 4.3
	   * @param {String/Object/Function} condition Name of an ancestor, hash of names or validator function.
	   * @returns {CKEDITOR.htmlParser.element} The closest ancestor which satisfies given condition or `null`.
	   */
			getAscendant: function (condition) {
				var checkFn = typeof condition == 'function' ? condition : typeof condition == 'string' ? function (el) {
					return el.name == condition;
				} : function (el) {
					return el.name in condition;
				};
	
				var parent = this.parent;
	
				// Parent has to be an element - don't check doc fragment.
				while (parent && parent.type == CKEDITOR.NODE_ELEMENT) {
					if (checkFn(parent)) return parent;
					parent = parent.parent;
				}
	
				return null;
			},
	
			/**
	   * Wraps this element with given `wrapper`.
	   *
	   * @since 4.3
	   * @param {CKEDITOR.htmlParser.element} wrapper The element which will be this element's new parent.
	   * @returns {CKEDITOR.htmlParser.element} Wrapper.
	   */
			wrapWith: function (wrapper) {
				this.replaceWith(wrapper);
				wrapper.add(this);
				return wrapper;
			},
	
			/**
	   * Gets this node's index in its parent's children array.
	   *
	   * @since 4.3
	   * @returns {Number}
	   */
			getIndex: function () {
				return CKEDITOR.tools.indexOf(this.parent.children, this);
			},
	
			getFilterContext: function (context) {
				return context || {};
			}
		};
	})();

/***/ },
/* 36 */
/*!************************************!*\
  !*** ./core/htmlparser/comment.js ***!
  \************************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	'use strict';
	
	/**
	 * A lightweight representation of an HTML comment.
	 *
	 * @class
	 * @extends CKEDITOR.htmlParser.node
	 * @constructor Creates a comment class instance.
	 * @param {String} value The comment text value.
	 */
	
	CKEDITOR.htmlParser.comment = function (value) {
		/**
	  * The comment text.
	  *
	  * @property {String}
	  */
		this.value = value;
	
		/** @private */
		this._ = {
			isBlockLike: false
		};
	};
	
	CKEDITOR.htmlParser.comment.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node(), {
		/**
	  * The node type. This is a constant value set to {@link CKEDITOR#NODE_COMMENT}.
	  *
	  * @readonly
	  * @property {Number} [=CKEDITOR.NODE_COMMENT]
	  */
		type: CKEDITOR.NODE_COMMENT,
	
		/**
	  * Filter this comment with given filter.
	  *
	  * @since 4.1
	  * @param {CKEDITOR.htmlParser.filter} filter
	  * @returns {Boolean} Method returns `false` when this comment has
	  * been removed or replaced with other node. This is an information for
	  * {@link CKEDITOR.htmlParser.element#filterChildren} that it has
	  * to repeat filter on current position in parent's children array.
	  */
		filter: function (filter, context) {
			var comment = this.value;
	
			if (!(comment = filter.onComment(context, comment, this))) {
				this.remove();
				return false;
			}
	
			if (typeof comment != 'string') {
				this.replaceWith(comment);
				return false;
			}
	
			this.value = comment;
	
			return true;
		},
	
		/**
	  * Writes the HTML representation of this comment to a CKEDITOR.htmlWriter.
	  *
	  * @param {CKEDITOR.htmlParser.basicWriter} writer The writer to which write the HTML.
	  * @param {CKEDITOR.htmlParser.filter} [filter] The filter to be applied to this node.
	  * **Note:** it's unsafe to filter offline (not appended) node.
	  */
		writeHtml: function (writer, filter) {
			if (filter) this.filter(filter);
	
			writer.comment(this.value);
		}
	});

/***/ },
/* 37 */
/*!*********************************!*\
  !*** ./core/htmlparser/text.js ***!
  \*********************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	'use strict';
	
	(function () {
		/**
	  * A lightweight representation of HTML text.
	  *
	  * @class
	  * @extends CKEDITOR.htmlParser.node
	  * @constructor Creates a text class instance.
	  * @param {String} value The text node value.
	  */
		CKEDITOR.htmlParser.text = function (value) {
			/**
	   * The text value.
	   *
	   * @property {String}
	   */
			this.value = value;
	
			/** @private */
			this._ = {
				isBlockLike: false
			};
		};
	
		CKEDITOR.htmlParser.text.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node(), {
			/**
	   * The node type. This is a constant value set to {@link CKEDITOR#NODE_TEXT}.
	   *
	   * @readonly
	   * @property {Number} [=CKEDITOR.NODE_TEXT]
	   */
			type: CKEDITOR.NODE_TEXT,
	
			/**
	   * Filter this text node with given filter.
	   *
	   * @since 4.1
	   * @param {CKEDITOR.htmlParser.filter} filter
	   * @returns {Boolean} Method returns `false` when this text node has
	   * been removed. This is an information for {@link CKEDITOR.htmlParser.element#filterChildren}
	   * that it has to repeat filter on current position in parent's children array.
	   */
			filter: function (filter, context) {
				if (!(this.value = filter.onText(context, this.value, this))) {
					this.remove();
					return false;
				}
			},
	
			/**
	   * Writes the HTML representation of this text to a {CKEDITOR.htmlParser.basicWriter}.
	   *
	   * @param {CKEDITOR.htmlParser.basicWriter} writer The writer to which write the HTML.
	   * @param {CKEDITOR.htmlParser.filter} [filter] The filter to be applied to this node.
	   * **Note:** it's unsafe to filter offline (not appended) node.
	   */
			writeHtml: function (writer, filter) {
				if (filter) this.filter(filter);
	
				writer.text(this.value);
			}
		});
	})();

/***/ },
/* 38 */
/*!**********************************!*\
  !*** ./core/htmlparser/cdata.js ***!
  \**********************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	'use strict';
	
	(function () {
	
		/**
	  * A lightweight representation of HTML CDATA.
	  *
	  * @class
	  * @extends CKEDITOR.htmlParser.node
	  * @constructor Creates a cdata class instance.
	  * @param {String} value The CDATA section value.
	  */
		CKEDITOR.htmlParser.cdata = function (value) {
			/**
	   * The CDATA value.
	   *
	   * @property {String}
	   */
			this.value = value;
		};
	
		CKEDITOR.htmlParser.cdata.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node(), {
			/**
	   * CDATA has the same type as {@link CKEDITOR.htmlParser.text} This is
	   * a constant value set to {@link CKEDITOR#NODE_TEXT}.
	   *
	   * @readonly
	   * @property {Number} [=CKEDITOR.NODE_TEXT]
	   */
			type: CKEDITOR.NODE_TEXT,
	
			filter: function () {},
	
			/**
	   * Writes the CDATA with no special manipulations.
	   *
	   * @param {CKEDITOR.htmlParser.basicWriter} writer The writer to which write the HTML.
	   */
			writeHtml: function (writer) {
				writer.write(this.value);
			}
		});
	})();

/***/ },
/* 39 */
/*!*************************************!*\
  !*** ./core/htmlparser/fragment.js ***!
  \*************************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	'use strict';
	
	/**
	 * A lightweight representation of an HTML DOM structure.
	 *
	 * @class
	 * @constructor Creates a fragment class instance.
	 */
	
	CKEDITOR.htmlParser.fragment = function () {
		/**
	  * The nodes contained in the root of this fragment.
	  *
	  *		var fragment = CKEDITOR.htmlParser.fragment.fromHtml( '<b>Sample</b> Text' );
	  *		alert( fragment.children.length ); // 2
	  */
		this.children = [];
	
		/**
	  * Get the fragment parent. Should always be null.
	  *
	  * @property {Object} [=null]
	  */
		this.parent = null;
	
		/** @private */
		this._ = {
			isBlockLike: true,
			hasInlineStarted: false
		};
	};
	
	(function () {
		// Block-level elements whose internal structure should be respected during
		// parser fixing.
		var nonBreakingBlocks = CKEDITOR.tools.extend({ table: 1, ul: 1, ol: 1, dl: 1 }, CKEDITOR.dtd.table, CKEDITOR.dtd.ul, CKEDITOR.dtd.ol, CKEDITOR.dtd.dl);
	
		var listBlocks = { ol: 1, ul: 1 };
	
		// Dtd of the fragment element, basically it accept anything except for intermediate structure, e.g. orphan <li>.
		var rootDtd = CKEDITOR.tools.extend({}, { html: 1 }, CKEDITOR.dtd.html, CKEDITOR.dtd.body, CKEDITOR.dtd.head, { style: 1, script: 1 });
	
		// Which element to create when encountered not allowed content.
		var structureFixes = {
			ul: 'li',
			ol: 'li',
			dl: 'dd',
			table: 'tbody',
			tbody: 'tr',
			thead: 'tr',
			tfoot: 'tr',
			tr: 'td'
		};
	
		function isRemoveEmpty(node) {
			// Keep marked element event if it is empty.
			if (node.attributes['data-cke-survive']) return false;
	
			// Empty link is to be removed when empty but not anchor. (#7894)
			return node.name == 'a' && node.attributes.href || CKEDITOR.dtd.$removeEmpty[node.name];
		}
	
		/**
	  * Creates a {@link CKEDITOR.htmlParser.fragment} from an HTML string.
	  *
	  *		var fragment = CKEDITOR.htmlParser.fragment.fromHtml( '<b>Sample</b> Text' );
	  *		alert( fragment.children[ 0 ].name );		// 'b'
	  *		alert( fragment.children[ 1 ].value );	// ' Text'
	  *
	  * @static
	  * @param {String} fragmentHtml The HTML to be parsed, filling the fragment.
	  * @param {CKEDITOR.htmlParser.element/String} [parent] Optional contextual
	  * element which makes the content been parsed as the content of this element and fix
	  * to match it.
	  * If not provided, then {@link CKEDITOR.htmlParser.fragment} will be used
	  * as the parent and it will be returned.
	  * @param {String/Boolean} [fixingBlock] When `parent` is a block limit element,
	  * and the param is a string value other than `false`, it is to
	  * avoid having block-less content as the direct children of parent by wrapping
	  * the content with a block element of the specified tag, e.g.
	  * when `fixingBlock` specified as `p`, the content `<body><i>foo</i></body>`
	  * will be fixed into `<body><p><i>foo</i></p></body>`.
	  * @returns {CKEDITOR.htmlParser.fragment/CKEDITOR.htmlParser.element} The created fragment or passed `parent`.
	  */
		CKEDITOR.htmlParser.fragment.fromHtml = function (fragmentHtml, parent, fixingBlock) {
			var parser = new CKEDITOR.htmlParser();
	
			var root = parent instanceof CKEDITOR.htmlParser.element ? parent : typeof parent == 'string' ? new CKEDITOR.htmlParser.element(parent) : new CKEDITOR.htmlParser.fragment();
	
			var pendingInline = [],
			    pendingBRs = [],
			    currentNode = root,
	
			// Indicate we're inside a <textarea> element, spaces should be touched differently.
			inTextarea = root.name == 'textarea',
	
			// Indicate we're inside a <pre> element, spaces should be touched differently.
			inPre = root.name == 'pre';
	
			function checkPending(newTagName) {
				var pendingBRsSent;
	
				if (pendingInline.length > 0) {
					for (var i = 0; i < pendingInline.length; i++) {
						var pendingElement = pendingInline[i],
						    pendingName = pendingElement.name,
						    pendingDtd = CKEDITOR.dtd[pendingName],
						    currentDtd = currentNode.name && CKEDITOR.dtd[currentNode.name];
	
						if ((!currentDtd || currentDtd[pendingName]) && (!newTagName || !pendingDtd || pendingDtd[newTagName] || !CKEDITOR.dtd[newTagName])) {
							if (!pendingBRsSent) {
								sendPendingBRs();
								pendingBRsSent = 1;
							}
	
							// Get a clone for the pending element.
							pendingElement = pendingElement.clone();
	
							// Add it to the current node and make it the current,
							// so the new element will be added inside of it.
							pendingElement.parent = currentNode;
							currentNode = pendingElement;
	
							// Remove the pending element (back the index by one
							// to properly process the next entry).
							pendingInline.splice(i, 1);
							i--;
						} else {
							// Some element of the same type cannot be nested, flat them,
							// e.g. <a href="#">foo<a href="#">bar</a></a>. (#7894)
							if (pendingName == currentNode.name) addElement(currentNode, currentNode.parent, 1), i--;
						}
					}
				}
			}
	
			function sendPendingBRs() {
				while (pendingBRs.length) addElement(pendingBRs.shift(), currentNode);
			}
	
			// Rtrim empty spaces on block end boundary. (#3585)
			function removeTailWhitespace(element) {
				if (element._.isBlockLike && element.name != 'pre' && element.name != 'textarea') {
	
					var length = element.children.length,
					    lastChild = element.children[length - 1],
					    text;
					if (lastChild && lastChild.type == CKEDITOR.NODE_TEXT) {
						if (!(text = CKEDITOR.tools.rtrim(lastChild.value))) element.children.length = length - 1;else lastChild.value = text;
					}
				}
			}
	
			// Beside of simply append specified element to target, this function also takes
			// care of other dirty lifts like forcing block in body, trimming spaces at
			// the block boundaries etc.
			//
			// @param {Element} element  The element to be added as the last child of {@link target}.
			// @param {Element} target The parent element to relieve the new node.
			// @param {Boolean} [moveCurrent=false] Don't change the "currentNode" global unless
			// there's a return point node specified on the element, otherwise move current onto {@link target} node.
			//
			function addElement(element, target, moveCurrent) {
				target = target || currentNode || root;
	
				// Current element might be mangled by fix body below,
				// save it for restore later.
				var savedCurrent = currentNode;
	
				// Ignore any element that has already been added.
				if (element.previous === undefined) {
					if (checkAutoParagraphing(target, element)) {
						// Create a <p> in the fragment.
						currentNode = target;
						parser.onTagOpen(fixingBlock, {});
	
						// The new target now is the <p>.
						element.returnPoint = target = currentNode;
					}
	
					removeTailWhitespace(element);
	
					// Avoid adding empty inline.
					if (!(isRemoveEmpty(element) && !element.children.length)) target.add(element);
	
					if (element.name == 'pre') inPre = false;
	
					if (element.name == 'textarea') inTextarea = false;
				}
	
				if (element.returnPoint) {
					currentNode = element.returnPoint;
					delete element.returnPoint;
				} else {
					currentNode = moveCurrent ? target : savedCurrent;
				}
			}
	
			// Auto paragraphing should happen when inline content enters the root element.
			function checkAutoParagraphing(parent, node) {
	
				// Check for parent that can contain block.
				if ((parent == root || parent.name == 'body') && fixingBlock && (!parent.name || CKEDITOR.dtd[parent.name][fixingBlock])) {
					var name, realName;
	
					if (node.attributes && (realName = node.attributes['data-cke-real-element-type'])) name = realName;else name = node.name;
	
					// Text node, inline elements are subjected, except for <script>/<style>.
					return name && name in CKEDITOR.dtd.$inline && !(name in CKEDITOR.dtd.head) && !node.isOrphan || node.type == CKEDITOR.NODE_TEXT;
				}
			}
	
			// Judge whether two element tag names are likely the siblings from the same
			// structural element.
			function possiblySibling(tag1, tag2) {
	
				if (tag1 in CKEDITOR.dtd.$listItem || tag1 in CKEDITOR.dtd.$tableContent) return tag1 == tag2 || tag1 == 'dt' && tag2 == 'dd' || tag1 == 'dd' && tag2 == 'dt';
	
				return false;
			}
	
			parser.onTagOpen = function (tagName, attributes, selfClosing, optionalClose) {
				var element = new CKEDITOR.htmlParser.element(tagName, attributes);
	
				// "isEmpty" will be always "false" for unknown elements, so we
				// must force it if the parser has identified it as a selfClosing tag.
				if (element.isUnknown && selfClosing) element.isEmpty = true;
	
				// Check for optional closed elements, including browser quirks and manually opened blocks.
				element.isOptionalClose = optionalClose;
	
				// This is a tag to be removed if empty, so do not add it immediately.
				if (isRemoveEmpty(element)) {
					pendingInline.push(element);
					return;
				} else if (tagName == 'pre') inPre = true;else if (tagName == 'br' && inPre) {
					currentNode.add(new CKEDITOR.htmlParser.text('\n'));
					return;
				} else if (tagName == 'textarea') {
					inTextarea = true;
				}
	
				if (tagName == 'br') {
					pendingBRs.push(element);
					return;
				}
	
				while (1) {
					var currentName = currentNode.name;
	
					var currentDtd = currentName ? CKEDITOR.dtd[currentName] || (currentNode._.isBlockLike ? CKEDITOR.dtd.div : CKEDITOR.dtd.span) : rootDtd;
	
					// If the element cannot be child of the current element.
					if (!element.isUnknown && !currentNode.isUnknown && !currentDtd[tagName]) {
						// Current node doesn't have a close tag, time for a close
						// as this element isn't fit in. (#7497)
						if (currentNode.isOptionalClose) parser.onTagClose(currentName);
						// Fixing malformed nested lists by moving it into a previous list item. (#3828)
						else if (tagName in listBlocks && currentName in listBlocks) {
								var children = currentNode.children,
								    lastChild = children[children.length - 1];
	
								// Establish the list item if it's not existed.
								if (!(lastChild && lastChild.name == 'li')) addElement(lastChild = new CKEDITOR.htmlParser.element('li'), currentNode);
	
								!element.returnPoint && (element.returnPoint = currentNode);
								currentNode = lastChild;
							}
							// Establish new list root for orphan list items, but NOT to create
							// new list for the following ones, fix them instead. (#6975)
							// <dl><dt>foo<dd>bar</dl>
							// <ul><li>foo<li>bar</ul>
							else if (tagName in CKEDITOR.dtd.$listItem && !possiblySibling(tagName, currentName)) {
									parser.onTagOpen(tagName == 'li' ? 'ul' : 'dl', {}, 0, 1);
								}
								// We're inside a structural block like table and list, AND the incoming element
								// is not of the same type (e.g. <td>td1<td>td2</td>), we simply add this new one before it,
								// and most importantly, return back to here once this element is added,
								// e.g. <table><tr><td>td1</td><p>p1</p><td>td2</td></tr></table>
								else if (currentName in nonBreakingBlocks && !possiblySibling(tagName, currentName)) {
										!element.returnPoint && (element.returnPoint = currentNode);
										currentNode = currentNode.parent;
									} else {
										// The current element is an inline element, which
										// need to be continued even after the close, so put
										// it in the pending list.
										if (currentName in CKEDITOR.dtd.$inline) pendingInline.unshift(currentNode);
	
										// The most common case where we just need to close the
										// current one and append the new one to the parent.
										if (currentNode.parent) addElement(currentNode, currentNode.parent, 1);
										// We've tried our best to fix the embarrassment here, while
										// this element still doesn't find it's parent, mark it as
										// orphan and show our tolerance to it.
										else {
												element.isOrphan = 1;
												break;
											}
									}
					} else {
						break;
					}
				}
	
				checkPending(tagName);
				sendPendingBRs();
	
				element.parent = currentNode;
	
				if (element.isEmpty) addElement(element);else currentNode = element;
			};
	
			parser.onTagClose = function (tagName) {
				// Check if there is any pending tag to be closed.
				for (var i = pendingInline.length - 1; i >= 0; i--) {
					// If found, just remove it from the list.
					if (tagName == pendingInline[i].name) {
						pendingInline.splice(i, 1);
						return;
					}
				}
	
				var pendingAdd = [],
				    newPendingInline = [],
				    candidate = currentNode;
	
				while (candidate != root && candidate.name != tagName) {
					// If this is an inline element, add it to the pending list, if we're
					// really closing one of the parents element later, they will continue
					// after it.
					if (!candidate._.isBlockLike) newPendingInline.unshift(candidate);
	
					// This node should be added to it's parent at this point. But,
					// it should happen only if the closing tag is really closing
					// one of the nodes. So, for now, we just cache it.
					pendingAdd.push(candidate);
	
					// Make sure return point is properly restored.
					candidate = candidate.returnPoint || candidate.parent;
				}
	
				if (candidate != root) {
					// Add all elements that have been found in the above loop.
					for (i = 0; i < pendingAdd.length; i++) {
						var node = pendingAdd[i];
						addElement(node, node.parent);
					}
	
					currentNode = candidate;
	
					if (candidate._.isBlockLike) sendPendingBRs();
	
					addElement(candidate, candidate.parent);
	
					// The parent should start receiving new nodes now, except if
					// addElement changed the currentNode.
					if (candidate == currentNode) currentNode = currentNode.parent;
	
					pendingInline = pendingInline.concat(newPendingInline);
				}
	
				if (tagName == 'body') fixingBlock = false;
			};
	
			parser.onText = function (text) {
				// Trim empty spaces at beginning of text contents except <pre> and <textarea>.
				if ((!currentNode._.hasInlineStarted || pendingBRs.length) && !inPre && !inTextarea) {
					text = CKEDITOR.tools.ltrim(text);
	
					if (text.length === 0) return;
				}
	
				var currentName = currentNode.name,
				    currentDtd = currentName ? CKEDITOR.dtd[currentName] || (currentNode._.isBlockLike ? CKEDITOR.dtd.div : CKEDITOR.dtd.span) : rootDtd;
	
				// Fix orphan text in list/table. (#8540) (#8870)
				if (!inTextarea && !currentDtd['#'] && currentName in nonBreakingBlocks) {
					parser.onTagOpen(structureFixes[currentName] || '');
					parser.onText(text);
					return;
				}
	
				sendPendingBRs();
				checkPending();
	
				// Shrinking consequential spaces into one single for all elements
				// text contents.
				if (!inPre && !inTextarea) text = text.replace(/[\t\r\n ]{2,}|[\t\r\n]/g, ' ');
	
				text = new CKEDITOR.htmlParser.text(text);
	
				if (checkAutoParagraphing(currentNode, text)) this.onTagOpen(fixingBlock, {}, 0, 1);
	
				currentNode.add(text);
			};
	
			parser.onCDATA = function (cdata) {
				currentNode.add(new CKEDITOR.htmlParser.cdata(cdata));
			};
	
			parser.onComment = function (comment) {
				sendPendingBRs();
				checkPending();
				currentNode.add(new CKEDITOR.htmlParser.comment(comment));
			};
	
			// Parse it.
			parser.parse(fragmentHtml);
	
			sendPendingBRs();
	
			// Close all pending nodes, make sure return point is properly restored.
			while (currentNode != root) addElement(currentNode, currentNode.parent, 1);
	
			removeTailWhitespace(root);
	
			return root;
		};
	
		CKEDITOR.htmlParser.fragment.prototype = {
	
			/**
	   * The node type. This is a constant value set to {@link CKEDITOR#NODE_DOCUMENT_FRAGMENT}.
	   *
	   * @readonly
	   * @property {Number} [=CKEDITOR.NODE_DOCUMENT_FRAGMENT]
	   */
			type: CKEDITOR.NODE_DOCUMENT_FRAGMENT,
	
			/**
	   * Adds a node to this fragment.
	   *
	   * @param {CKEDITOR.htmlParser.node} node The node to be added.
	   * @param {Number} [index] From where the insertion happens.
	   */
			add: function (node, index) {
				isNaN(index) && (index = this.children.length);
	
				var previous = index > 0 ? this.children[index - 1] : null;
				if (previous) {
					// If the block to be appended is following text, trim spaces at
					// the right of it.
					if (node._.isBlockLike && previous.type == CKEDITOR.NODE_TEXT) {
						previous.value = CKEDITOR.tools.rtrim(previous.value);
	
						// If we have completely cleared the previous node.
						if (previous.value.length === 0) {
							// Remove it from the list and add the node again.
							this.children.pop();
							this.add(node);
							return;
						}
					}
	
					previous.next = node;
				}
	
				node.previous = previous;
				node.parent = this;
	
				this.children.splice(index, 0, node);
	
				if (!this._.hasInlineStarted) this._.hasInlineStarted = node.type == CKEDITOR.NODE_TEXT || node.type == CKEDITOR.NODE_ELEMENT && !node._.isBlockLike;
			},
	
			/**
	   * Filter this fragment's content with given filter.
	   *
	   * @since 4.1
	   * @param {CKEDITOR.htmlParser.filter} filter
	   */
			filter: function (filter, context) {
				context = this.getFilterContext(context);
	
				// Apply the root filter.
				filter.onRoot(context, this);
	
				this.filterChildren(filter, false, context);
			},
	
			/**
	   * Filter this fragment's children with given filter.
	   *
	   * Element's children may only be filtered once by one
	   * instance of filter.
	   *
	   * @since 4.1
	   * @param {CKEDITOR.htmlParser.filter} filter
	   * @param {Boolean} [filterRoot] Whether to apply the "root" filter rule specified in the `filter`.
	   */
			filterChildren: function (filter, filterRoot, context) {
				// If this element's children were already filtered
				// by current filter, don't filter them 2nd time.
				// This situation may occur when filtering bottom-up
				// (filterChildren() called manually in element's filter),
				// or in unpredictable edge cases when filter
				// is manipulating DOM structure.
				if (this.childrenFilteredBy == filter.id) return;
	
				context = this.getFilterContext(context);
	
				// Filtering root if enforced.
				if (filterRoot && !this.parent) filter.onRoot(context, this);
	
				this.childrenFilteredBy = filter.id;
	
				// Don't cache anything, children array may be modified by filter rule.
				for (var i = 0; i < this.children.length; i++) {
					// Stay in place if filter returned false, what means
					// that node has been removed.
					if (this.children[i].filter(filter, context) === false) i--;
				}
			},
	
			/**
	   * Writes the fragment HTML to a {@link CKEDITOR.htmlParser.basicWriter}.
	   *
	   *		var writer = new CKEDITOR.htmlWriter();
	   *		var fragment = CKEDITOR.htmlParser.fragment.fromHtml( '<P><B>Example' );
	   *		fragment.writeHtml( writer );
	   *		alert( writer.getHtml() ); // '<p><b>Example</b></p>'
	   *
	   * @param {CKEDITOR.htmlParser.basicWriter} writer The writer to which write the HTML.
	   * @param {CKEDITOR.htmlParser.filter} [filter] The filter to use when writing the HTML.
	   */
			writeHtml: function (writer, filter) {
				if (filter) this.filter(filter);
	
				this.writeChildrenHtml(writer);
			},
	
			/**
	   * Write and filtering the child nodes of this fragment.
	   *
	   * @param {CKEDITOR.htmlParser.basicWriter} writer The writer to which write the HTML.
	   * @param {CKEDITOR.htmlParser.filter} [filter] The filter to use when writing the HTML.
	   * @param {Boolean} [filterRoot] Whether to apply the "root" filter rule specified in the `filter`.
	   */
			writeChildrenHtml: function (writer, filter, filterRoot) {
				var context = this.getFilterContext();
	
				// Filtering root if enforced.
				if (filterRoot && !this.parent && filter) filter.onRoot(context, this);
	
				if (filter) this.filterChildren(filter, false, context);
	
				for (var i = 0, children = this.children, l = children.length; i < l; i++) children[i].writeHtml(writer);
			},
	
			/**
	   * Execute callback on each node (of given type) in this document fragment.
	   *
	   *		var fragment = CKEDITOR.htmlParser.fragment.fromHtml( '<p>foo<b>bar</b>bom</p>' );
	   *		fragment.forEach( function( node ) {
	   *			console.log( node );
	   *		} );
	   *		// Will log:
	   *		// 1. document fragment,
	   *		// 2. <p> element,
	   *		// 3. "foo" text node,
	   *		// 4. <b> element,
	   *		// 5. "bar" text node,
	   *		// 6. "bom" text node.
	   *
	   * @since 4.1
	   * @param {Function} callback Function to be executed on every node.
	   * **Since 4.3** if `callback` returned `false` descendants of current node will be ignored.
	   * @param {CKEDITOR.htmlParser.node} callback.node Node passed as argument.
	   * @param {Number} [type] If specified `callback` will be executed only on nodes of this type.
	   * @param {Boolean} [skipRoot] Don't execute `callback` on this fragment.
	   */
			forEach: function (callback, type, skipRoot) {
				if (!skipRoot && (!type || this.type == type)) var ret = callback(this);
	
				// Do not filter children if callback returned false.
				if (ret === false) return;
	
				var children = this.children,
				    node,
				    i = 0;
	
				// We do not cache the size, because the list of nodes may be changed by the callback.
				for (; i < children.length; i++) {
					node = children[i];
					if (node.type == CKEDITOR.NODE_ELEMENT) node.forEach(callback, type);else if (!type || node.type == type) callback(node);
				}
			},
	
			getFilterContext: function (context) {
				return context || {};
			}
		};
	})();

/***/ },
/* 40 */
/*!***********************************!*\
  !*** ./core/htmlparser/filter.js ***!
  \***********************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	'use strict';
	
	(function () {
		/**
	  * Filter is a configurable tool for transforming and filtering {@link CKEDITOR.htmlParser.node nodes}.
	  * It is mainly used during data processing phase which is done not on real DOM nodes,
	  * but on their simplified form represented by {@link CKEDITOR.htmlParser.node} class and its subclasses.
	  *
	  *		var filter = new CKEDITOR.htmlParser.filter( {
	  *			text: function( value ) {
	  *				return '@' + value + '@';
	  *			},
	  *			elements: {
	  *				p: function( element ) {
	  *					element.attributes.foo = '1';
	  *				}
	  *			}
	  *		} );
	  *
	  *		var fragment = CKEDITOR.htmlParser.fragment.fromHtml( '<p>Foo<b>bar!</b></p>' ),
	  *			writer = new CKEDITOR.htmlParser.basicWriter();
	  *		filter.applyTo( fragment );
	  *		fragment.writeHtml( writer );
	  *		writer.getHtml(); // '<p foo="1">@Foo@<b>@bar!@</b></p>'
	  *
	  * @class
	  */
		CKEDITOR.htmlParser.filter = CKEDITOR.tools.createClass({
			/**
	   * @constructor Creates a filter class instance.
	   * @param {CKEDITOR.htmlParser.filterRulesDefinition} [rules]
	   */
			$: function (rules) {
				/**
	    * ID of filter instance, which is used to mark elements
	    * to which this filter has been already applied.
	    *
	    * @property {Number} id
	    * @readonly
	    */
				this.id = CKEDITOR.tools.getNextNumber();
	
				/**
	    * Rules for element names.
	    *
	    * @property {CKEDITOR.htmlParser.filterRulesGroup}
	    * @readonly
	    */
				this.elementNameRules = new filterRulesGroup();
	
				/**
	    * Rules for attribute names.
	    *
	    * @property {CKEDITOR.htmlParser.filterRulesGroup}
	    * @readonly
	    */
				this.attributeNameRules = new filterRulesGroup();
	
				/**
	    * Hash of elementName => {@link CKEDITOR.htmlParser.filterRulesGroup rules for elements}.
	    *
	    * @readonly
	    */
				this.elementsRules = {};
	
				/**
	    * Hash of attributeName => {@link CKEDITOR.htmlParser.filterRulesGroup rules for attributes}.
	    *
	    * @readonly
	    */
				this.attributesRules = {};
	
				/**
	    * Rules for text nodes.
	    *
	    * @property {CKEDITOR.htmlParser.filterRulesGroup}
	    * @readonly
	    */
				this.textRules = new filterRulesGroup();
	
				/**
	    * Rules for comment nodes.
	    *
	    * @property {CKEDITOR.htmlParser.filterRulesGroup}
	    * @readonly
	    */
				this.commentRules = new filterRulesGroup();
	
				/**
	    * Rules for a root node.
	    *
	    * @property {CKEDITOR.htmlParser.filterRulesGroup}
	    * @readonly
	    */
				this.rootRules = new filterRulesGroup();
	
				if (rules) this.addRules(rules, 10);
			},
	
			proto: {
				/**
	    * Add rules to this filter.
	    *
	    * @param {CKEDITOR.htmlParser.filterRulesDefinition} rules Object containing filter rules.
	    * @param {Object/Number} [options] Object containing rules' options or a priority
	    * (for a backward compatibility with CKEditor versions up to 4.2.x).
	    * @param {Number} [options.priority=10] The priority of a rule.
	    * @param {Boolean} [options.applyToAll=false] Whether to apply rule to non-editable
	    * elements and their descendants too.
	    */
				addRules: function (rules, options) {
					var priority;
	
					// Backward compatibility.
					if (typeof options == 'number') priority = options;
					// New version - try reading from options.
					else if (options && 'priority' in options) priority = options.priority;
	
					// Defaults.
					if (typeof priority != 'number') priority = 10;
					if (typeof options != 'object') options = {};
	
					// Add the elementNames.
					if (rules.elementNames) this.elementNameRules.addMany(rules.elementNames, priority, options);
	
					// Add the attributeNames.
					if (rules.attributeNames) this.attributeNameRules.addMany(rules.attributeNames, priority, options);
	
					// Add the elements.
					if (rules.elements) addNamedRules(this.elementsRules, rules.elements, priority, options);
	
					// Add the attributes.
					if (rules.attributes) addNamedRules(this.attributesRules, rules.attributes, priority, options);
	
					// Add the text.
					if (rules.text) this.textRules.add(rules.text, priority, options);
	
					// Add the comment.
					if (rules.comment) this.commentRules.add(rules.comment, priority, options);
	
					// Add root node rules.
					if (rules.root) this.rootRules.add(rules.root, priority, options);
				},
	
				/**
	    * Apply this filter to given node.
	    *
	    * @param {CKEDITOR.htmlParser.node} node The node to be filtered.
	    */
				applyTo: function (node) {
					node.filter(this);
				},
	
				onElementName: function (context, name) {
					return this.elementNameRules.execOnName(context, name);
				},
	
				onAttributeName: function (context, name) {
					return this.attributeNameRules.execOnName(context, name);
				},
	
				onText: function (context, text, node) {
					return this.textRules.exec(context, text, node);
				},
	
				onComment: function (context, commentText, comment) {
					return this.commentRules.exec(context, commentText, comment);
				},
	
				onRoot: function (context, element) {
					return this.rootRules.exec(context, element);
				},
	
				onElement: function (context, element) {
					// We must apply filters set to the specific element name as
					// well as those set to the generic ^/$ name. So, add both to an
					// array and process them in a small loop.
					var rulesGroups = [this.elementsRules['^'], this.elementsRules[element.name], this.elementsRules.$],
					    rulesGroup,
					    ret;
	
					for (var i = 0; i < 3; i++) {
						rulesGroup = rulesGroups[i];
						if (rulesGroup) {
							ret = rulesGroup.exec(context, element, this);
	
							if (ret === false) return null;
	
							if (ret && ret != element) return this.onNode(context, ret);
	
							// The non-root element has been dismissed by one of the filters.
							if (element.parent && !element.name) break;
						}
					}
	
					return element;
				},
	
				onNode: function (context, node) {
					var type = node.type;
	
					return type == CKEDITOR.NODE_ELEMENT ? this.onElement(context, node) : type == CKEDITOR.NODE_TEXT ? new CKEDITOR.htmlParser.text(this.onText(context, node.value)) : type == CKEDITOR.NODE_COMMENT ? new CKEDITOR.htmlParser.comment(this.onComment(context, node.value)) : null;
				},
	
				onAttribute: function (context, element, name, value) {
					var rulesGroup = this.attributesRules[name];
	
					if (rulesGroup) return rulesGroup.exec(context, value, element, this);
					return value;
				}
			}
		});
	
		/**
	  * Class grouping filter rules for one subject (like element or attribute names).
	  *
	  * @class CKEDITOR.htmlParser.filterRulesGroup
	  */
		function filterRulesGroup() {
			/**
	   * Array of objects containing rule, priority and options.
	   *
	   * @property {Object[]}
	   * @readonly
	   */
			this.rules = [];
		}
	
		CKEDITOR.htmlParser.filterRulesGroup = filterRulesGroup;
	
		filterRulesGroup.prototype = {
			/**
	   * Adds specified rule to this group.
	   *
	   * @param {Function/Array} rule Function for function based rule or [ pattern, replacement ] array for
	   * rule applicable to names.
	   * @param {Number} priority
	   * @param options
	   */
			add: function (rule, priority, options) {
				this.rules.splice(this.findIndex(priority), 0, {
					value: rule,
					priority: priority,
					options: options
				});
			},
	
			/**
	   * Adds specified rules to this group.
	   *
	   * @param {Array} rules Array of rules - see {@link #add}.
	   * @param {Number} priority
	   * @param options
	   */
			addMany: function (rules, priority, options) {
				var args = [this.findIndex(priority), 0];
	
				for (var i = 0, len = rules.length; i < len; i++) {
					args.push({
						value: rules[i],
						priority: priority,
						options: options
					});
				}
	
				this.rules.splice.apply(this.rules, args);
			},
	
			/**
	   * Finds an index at which rule with given priority should be inserted.
	   *
	   * @param {Number} priority
	   * @returns {Number} Index.
	   */
			findIndex: function (priority) {
				var rules = this.rules,
				    len = rules.length,
				    i = len - 1;
	
				// Search from the end, because usually rules will be added with default priority, so
				// we will be able to stop loop quickly.
				while (i >= 0 && priority < rules[i].priority) i--;
	
				return i + 1;
			},
	
			/**
	   * Executes this rules group on given value. Applicable only if function based rules were added.
	   *
	   * All arguments passed to this function will be forwarded to rules' functions.
	   *
	   * @param {CKEDITOR.htmlParser.node/CKEDITOR.htmlParser.fragment/String} currentValue The value to be filtered.
	   * @returns {CKEDITOR.htmlParser.node/CKEDITOR.htmlParser.fragment/String} Filtered value.
	   */
			exec: function (context, currentValue) {
				var isNode = currentValue instanceof CKEDITOR.htmlParser.node || currentValue instanceof CKEDITOR.htmlParser.fragment,
	
				// Splice '1' to remove context, which we don't want to pass to filter rules.
				args = Array.prototype.slice.call(arguments, 1),
				    rules = this.rules,
				    len = rules.length,
				    orgType,
				    orgName,
				    ret,
				    i,
				    rule;
	
				for (i = 0; i < len; i++) {
					// Backup the node info before filtering.
					if (isNode) {
						orgType = currentValue.type;
						orgName = currentValue.name;
					}
	
					rule = rules[i];
					if (isRuleApplicable(context, rule)) {
						ret = rule.value.apply(null, args);
	
						if (ret === false) return ret;
	
						// We're filtering node (element/fragment).
						// No further filtering if it's not anymore fitable for the subsequent filters.
						if (isNode && ret && (ret.name != orgName || ret.type != orgType)) return ret;
	
						// Update currentValue and corresponding argument in args array.
						// Updated values will be used in next for-loop step.
						if (ret != null) args[0] = currentValue = ret;
	
						// ret == undefined will continue loop as nothing has happened.
					}
				}
	
				return currentValue;
			},
	
			/**
	   * Executes this rules group on name. Applicable only if filter rules for names were added.
	   *
	   * @param {String} currentName The name to be filtered.
	   * @returns {String} Filtered name.
	   */
			execOnName: function (context, currentName) {
				var i = 0,
				    rules = this.rules,
				    len = rules.length,
				    rule;
	
				for (; currentName && i < len; i++) {
					rule = rules[i];
					if (isRuleApplicable(context, rule)) currentName = currentName.replace(rule.value[0], rule.value[1]);
				}
	
				return currentName;
			}
		};
	
		function addNamedRules(rulesGroups, newRules, priority, options) {
			var ruleName, rulesGroup;
	
			for (ruleName in newRules) {
				rulesGroup = rulesGroups[ruleName];
	
				if (!rulesGroup) rulesGroup = rulesGroups[ruleName] = new filterRulesGroup();
	
				rulesGroup.add(newRules[ruleName], priority, options);
			}
		}
	
		function isRuleApplicable(context, rule) {
			if (context.nonEditable && !rule.options.applyToAll) return false;
	
			if (context.nestedEditable && rule.options.excludeNestedEditable) return false;
	
			return true;
		}
	})();
	
	/**
	 * @class CKEDITOR.htmlParser.filterRulesDefinition
	 * @abstract
	 */

/***/ },
/* 41 */
/*!***********************************!*\
  !*** ./core/htmldataprocessor.js ***!
  \***********************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	(function () {
		/**
	  * Represents an HTML data processor, which is responsible for translating and
	  * transforming the editor data on input and output.
	  *
	  * @class
	  * @extends CKEDITOR.dataProcessor
	  * @constructor Creates an htmlDataProcessor class instance.
	  * @param {CKEDITOR.editor} editor
	  */
		CKEDITOR.htmlDataProcessor = function (editor) {
			var dataFilter,
			    htmlFilter,
			    that = this;
	
			this.editor = editor;
	
			/**
	   * Data filter used when processing input by {@link #toHtml}.
	   *
	   * @property {CKEDITOR.htmlParser.filter}
	   */
			this.dataFilter = dataFilter = new CKEDITOR.htmlParser.filter();
	
			/**
	   * HTML filter used when processing output by {@link #toDataFormat}.
	   *
	   * @property {CKEDITOR.htmlParser.filter}
	   */
			this.htmlFilter = htmlFilter = new CKEDITOR.htmlParser.filter();
	
			/**
	   * The HTML writer used by this data processor to format the output.
	   *
	   * @property {CKEDITOR.htmlParser.basicWriter}
	   */
			this.writer = new CKEDITOR.htmlParser.basicWriter();
	
			dataFilter.addRules(defaultDataFilterRulesEditableOnly);
			dataFilter.addRules(defaultDataFilterRulesForAll, { applyToAll: true });
			dataFilter.addRules(createBogusAndFillerRules(editor, 'data'), { applyToAll: true });
			htmlFilter.addRules(defaultHtmlFilterRulesEditableOnly);
			htmlFilter.addRules(defaultHtmlFilterRulesForAll, { applyToAll: true });
			htmlFilter.addRules(createBogusAndFillerRules(editor, 'html'), { applyToAll: true });
	
			editor.on('toHtml', function (evt) {
				var evtData = evt.data,
				    data = evtData.dataValue,
				    fixBodyTag;
	
				// The source data is already HTML, but we need to clean
				// it up and apply the filter.
				data = protectSource(data, editor);
	
				// Protect content of textareas. (#9995)
				// Do this before protecting attributes to avoid breaking:
				// <textarea><img src="..." /></textarea>
				data = protectElements(data, protectTextareaRegex);
	
				// Before anything, we must protect the URL attributes as the
				// browser may changing them when setting the innerHTML later in
				// the code.
				data = protectAttributes(data);
	
				// Protect elements than can't be set inside a DIV. E.g. IE removes
				// style tags from innerHTML. (#3710)
				data = protectElements(data, protectElementsRegex);
	
				// Certain elements has problem to go through DOM operation, protect
				// them by prefixing 'cke' namespace. (#3591)
				data = protectElementsNames(data);
	
				// All none-IE browsers ignore self-closed custom elements,
				// protecting them into open-close. (#3591)
				data = protectSelfClosingElements(data);
	
				// Compensate one leading line break after <pre> open as browsers
				// eat it up. (#5789)
				data = protectPreFormatted(data);
	
				// There are attributes which may execute JavaScript code inside fixBin.
				// Encode them greedily. They will be unprotected right after getting HTML from fixBin. (#10)
				data = protectInsecureAttributes(data);
	
				var fixBin = evtData.context || editor.editable().getName(),
				    isPre;
	
				// Old IEs loose formats when load html into <pre>.
				if (CKEDITOR.env.ie && CKEDITOR.env.version < 9 && fixBin == 'pre') {
					fixBin = 'div';
					data = '<pre>' + data + '</pre>';
					isPre = 1;
				}
	
				// Call the browser to help us fixing a possibly invalid HTML
				// structure.
				var el = editor.document.createElement(fixBin);
				// Add fake character to workaround IE comments bug. (#3801)
				el.setHtml('a' + data);
				data = el.getHtml().substr(1);
	
				// Restore shortly protected attribute names.
				data = data.replace(new RegExp('data-cke-' + CKEDITOR.rnd + '-', 'ig'), '');
	
				isPre && (data = data.replace(/^<pre>|<\/pre>$/gi, ''));
	
				// Unprotect "some" of the protected elements at this point.
				data = unprotectElementNames(data);
	
				data = unprotectElements(data);
	
				// Restore the comments that have been protected, in this way they
				// can be properly filtered.
				data = unprotectRealComments(data);
	
				if (evtData.fixForBody === false) {
					fixBodyTag = false;
				} else {
					fixBodyTag = getFixBodyTag(evtData.enterMode, editor.config.autoParagraph);
				}
	
				// Now use our parser to make further fixes to the structure, as
				// well as apply the filter.
				data = CKEDITOR.htmlParser.fragment.fromHtml(data, evtData.context, fixBodyTag);
	
				// The empty root element needs to be fixed by adding 'p' or 'div' into it.
				// This avoids the need to create that element on the first focus (#12630).
				if (fixBodyTag) {
					fixEmptyRoot(data, fixBodyTag);
				}
	
				evtData.dataValue = data;
			}, null, null, 5);
	
			// Filter incoming "data".
			// Add element filter before htmlDataProcessor.dataFilter when purifying input data to correct html.
			editor.on('toHtml', function (evt) {
				if (evt.data.filter.applyTo(evt.data.dataValue, true, evt.data.dontFilter, evt.data.enterMode)) editor.fire('dataFiltered');
			}, null, null, 6);
	
			editor.on('toHtml', function (evt) {
				evt.data.dataValue.filterChildren(that.dataFilter, true);
			}, null, null, 10);
	
			editor.on('toHtml', function (evt) {
				var evtData = evt.data,
				    data = evtData.dataValue,
				    writer = new CKEDITOR.htmlParser.basicWriter();
	
				data.writeChildrenHtml(writer);
				data = writer.getHtml(true);
	
				// Protect the real comments again.
				evtData.dataValue = protectRealComments(data);
			}, null, null, 15);
	
			editor.on('toDataFormat', function (evt) {
				var data = evt.data.dataValue;
	
				// #10854 - we need to strip leading blockless <br> which FF adds
				// automatically when editable contains only non-editable content.
				// We do that for every browser (so it's a constant behavior) and
				// not in BR mode, in which chance of valid leading blockless <br> is higher.
				if (evt.data.enterMode != CKEDITOR.ENTER_BR) data = data.replace(/^<br *\/?>/i, '');
	
				evt.data.dataValue = CKEDITOR.htmlParser.fragment.fromHtml(data, evt.data.context, getFixBodyTag(evt.data.enterMode, editor.config.autoParagraph));
			}, null, null, 5);
	
			editor.on('toDataFormat', function (evt) {
				evt.data.dataValue.filterChildren(that.htmlFilter, true);
			}, null, null, 10);
	
			// Transform outcoming "data".
			// Add element filter after htmlDataProcessor.htmlFilter when preparing output data HTML.
			editor.on('toDataFormat', function (evt) {
				evt.data.filter.applyTo(evt.data.dataValue, false, true);
			}, null, null, 11);
	
			editor.on('toDataFormat', function (evt) {
				var data = evt.data.dataValue,
				    writer = that.writer;
	
				writer.reset();
				data.writeChildrenHtml(writer);
				data = writer.getHtml(true);
	
				// Restore those non-HTML protected source. (#4475,#4880)
				data = unprotectRealComments(data);
				data = unprotectSource(data, editor);
	
				evt.data.dataValue = data;
			}, null, null, 15);
		};
	
		CKEDITOR.htmlDataProcessor.prototype = {
			/**
	   * Processes the (potentially malformed) input HTML to a purified form which
	   * is suitable for using in the WYSIWYG editable.
	   *
	   * This method fires the {@link CKEDITOR.editor#toHtml} event which makes it possible
	   * to hook into the process at various stages.
	   *
	   * **Note:** Since CKEditor 4.3 the signature of this method changed and all options
	   * are now grouped in one `options` object. Previously `context`, `fixForBody` and `dontFilter`
	   * were passed separately.
	   *
	   * @param {String} data The raw data.
	   * @param {Object} [options] The options object.
	   * @param {String} [options.context] The tag name of a context element within which
	   * the input is to be processed, defaults to the editable element.
	   * If `null` is passed, then data will be parsed without context (as children of {@link CKEDITOR.htmlParser.fragment}).
	   * See {@link CKEDITOR.htmlParser.fragment#fromHtml} for more details.
	   * @param {Boolean} [options.fixForBody=true] Whether to trigger the auto paragraph for non-block content.
	   * @param {CKEDITOR.filter} [options.filter] When specified, instead of using the {@link CKEDITOR.editor#filter main filter},
	   * the passed instance will be used to filter the content.
	   * @param {Boolean} [options.dontFilter] Do not filter data with {@link CKEDITOR.filter} (note: transformations
	   * will still be applied).
	   * @param {Number} [options.enterMode] When specified, it will be used instead of the {@link CKEDITOR.editor#enterMode main enterMode}.
	   * @param {Boolean} [options.protectedWhitespaces] Indicates that content was wrapped with `<span>` elements to preserve
	   * leading and trailing whitespaces. Option used by the {@link CKEDITOR.editor#method-insertHtml} method.
	   * @returns {String}
	   */
			toHtml: function (data, options, fixForBody, dontFilter) {
				var editor = this.editor,
				    context,
				    filter,
				    enterMode,
				    protectedWhitespaces;
	
				// Typeof null == 'object', so check truthiness of options too.
				if (options && typeof options == 'object') {
					context = options.context;
					fixForBody = options.fixForBody;
					dontFilter = options.dontFilter;
					filter = options.filter;
					enterMode = options.enterMode;
					protectedWhitespaces = options.protectedWhitespaces;
				}
				// Backward compatibility. Since CKEDITOR 4.3 every option was a separate argument.
				else {
						context = options;
					}
	
				// Fall back to the editable as context if not specified.
				if (!context && context !== null) context = editor.editable().getName();
	
				return editor.fire('toHtml', {
					dataValue: data,
					context: context,
					fixForBody: fixForBody,
					dontFilter: dontFilter,
					filter: filter || editor.filter,
					enterMode: enterMode || editor.enterMode,
					protectedWhitespaces: protectedWhitespaces
				}).dataValue;
			},
	
			/**
	   * See {@link CKEDITOR.dataProcessor#toDataFormat}.
	   *
	   * This method fires the {@link CKEDITOR.editor#toDataFormat} event which makes it possible
	   * to hook into the process at various stages.
	   *
	   * @param {String} html
	   * @param {Object} [options] The options object.
	   * @param {String} [options.context] The tag name of the context element within which
	   * the input is to be processed, defaults to the editable element.
	   * @param {CKEDITOR.filter} [options.filter] When specified, instead of using the {@link CKEDITOR.editor#filter main filter},
	   * the passed instance will be used to apply content transformations to the content.
	   * @param {Number} [options.enterMode] When specified, it will be used instead of the {@link CKEDITOR.editor#enterMode main enterMode}.
	   * @returns {String}
	   */
			toDataFormat: function (html, options) {
				var context, filter, enterMode;
	
				// Do not shorten this to `options && options.xxx`, because
				// falsy `options` will be passed instead of undefined.
				if (options) {
					context = options.context;
					filter = options.filter;
					enterMode = options.enterMode;
				}
	
				// Fall back to the editable as context if not specified.
				if (!context && context !== null) context = this.editor.editable().getName();
	
				return this.editor.fire('toDataFormat', {
					dataValue: html,
					filter: filter || this.editor.filter,
					context: context,
					enterMode: enterMode || this.editor.enterMode
				}).dataValue;
			}
		};
	
		// Produce a set of filtering rules that handles bogus and filler node at the
		// end of block/pseudo block, in the following consequence:
		// 1. elements:<block> - this filter removes any bogus node, then check
		// if it's an empty block that requires a filler.
		// 2. elements:<br> - After cleaned with bogus, this filter checks the real
		// line-break BR to compensate a filler after it.
		//
		// Terms definitions:
		// filler: An element that's either <BR> or &NBSP; at the end of block that established line height.
		// bogus: Whenever a filler is proceeded with inline content, it becomes a bogus which is subjected to be removed.
		//
		// Various forms of the filler:
		// In output HTML: Filler should be consistently &NBSP; <BR> at the end of block is always considered as bogus.
		// In Wysiwyg HTML: Browser dependent - see env.needsBrFiller. Either BR for when needsBrFiller is true, or &NBSP; otherwise.
		// <BR> is NEVER considered as bogus when needsBrFiller is true.
		function createBogusAndFillerRules(editor, type) {
			function createFiller(isOutput) {
				return isOutput || CKEDITOR.env.needsNbspFiller ? new CKEDITOR.htmlParser.text('\xa0') : new CKEDITOR.htmlParser.element('br', { 'data-cke-bogus': 1 });
			}
	
			// This text block filter, remove any bogus and create the filler on demand.
			function blockFilter(isOutput, fillEmptyBlock) {
	
				return function (block) {
					// DO NOT apply the filler if it's a fragment node.
					if (block.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) return;
	
					cleanBogus(block);
	
					// Add fillers to input (always) and to output (if fillEmptyBlock is ok with that).
					var shouldFillBlock = !isOutput || (typeof fillEmptyBlock == 'function' ? fillEmptyBlock(block) : fillEmptyBlock) !== false;
	
					if (shouldFillBlock && isEmptyBlockNeedFiller(block)) {
						block.add(createFiller(isOutput));
					}
				};
			}
	
			// Append a filler right after the last line-break BR, found at the end of block.
			function brFilter(isOutput) {
				return function (br) {
					// DO NOT apply the filer if parent's a fragment node.
					if (br.parent.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) return;
	
					var attrs = br.attributes;
					// Dismiss BRs that are either bogus or eol marker.
					if ('data-cke-bogus' in attrs || 'data-cke-eol' in attrs) {
						delete attrs['data-cke-bogus'];
						return;
					}
	
					// Judge the tail line-break BR, and to insert bogus after it.
					var next = getNext(br),
					    previous = getPrevious(br);
	
					if (!next && isBlockBoundary(br.parent)) append(br.parent, createFiller(isOutput));else if (isBlockBoundary(next) && previous && !isBlockBoundary(previous)) createFiller(isOutput).insertBefore(next);
				};
			}
	
			// Determinate whether this node is potentially a bogus node.
			function maybeBogus(node, atBlockEnd) {
	
				// BR that's not from IE<11 DOM, except for a EOL marker.
				if (!(isOutput && !CKEDITOR.env.needsBrFiller) && node.type == CKEDITOR.NODE_ELEMENT && node.name == 'br' && !node.attributes['data-cke-eol']) {
					return true;
				}
	
				var match;
	
				// NBSP, possibly.
				if (node.type == CKEDITOR.NODE_TEXT && (match = node.value.match(tailNbspRegex))) {
					// We need to separate tail NBSP out of a text node, for later removal.
					if (match.index) {
						new CKEDITOR.htmlParser.text(node.value.substring(0, match.index)).insertBefore(node);
						node.value = match[0];
					}
	
					// From IE<11 DOM, at the end of a text block, or before block boundary.
					if (!CKEDITOR.env.needsBrFiller && isOutput && (!atBlockEnd || node.parent.name in textBlockTags)) return true;
	
					// From the output.
					if (!isOutput) {
						var previous = node.previous;
	
						// Following a line-break at the end of block.
						if (previous && previous.name == 'br') return true;
	
						// Or a single NBSP between two blocks.
						if (!previous || isBlockBoundary(previous)) return true;
					}
				}
	
				return false;
			}
	
			// Removes all bogus inside of this block, and to convert fillers into the proper form.
			function cleanBogus(block) {
				var bogus = [];
				var last = getLast(block),
				    node,
				    previous;
	
				if (last) {
					// Check for bogus at the end of this block.
					// e.g. <p>foo<br /></p>
					maybeBogus(last, 1) && bogus.push(last);
	
					while (last) {
						// Check for bogus at the end of any pseudo block contained.
						if (isBlockBoundary(last) && (node = getPrevious(last)) && maybeBogus(node)) {
							// Bogus must have inline proceeding, instead single BR between two blocks,
							// is considered as filler, e.g. <hr /><br /><hr />
							if ((previous = getPrevious(node)) && !isBlockBoundary(previous)) bogus.push(node);
							// Convert the filler into appropriate form.
							else {
									createFiller(isOutput).insertAfter(node);
									node.remove();
								}
						}
	
						last = last.previous;
					}
				}
	
				// Now remove all bogus collected from above.
				for (var i = 0; i < bogus.length; i++) bogus[i].remove();
			}
	
			// Judge whether it's an empty block that requires a filler node.
			function isEmptyBlockNeedFiller(block) {
	
				// DO NOT fill empty editable in IE<11.
				if (!isOutput && !CKEDITOR.env.needsBrFiller && block.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) return false;
	
				// 1. For IE version >=8,  empty blocks are displayed correctly themself in wysiwiyg;
				// 2. For the rest, at least table cell and list item need no filler space. (#6248)
				if (!isOutput && !CKEDITOR.env.needsBrFiller && (document.documentMode > 7 || block.name in CKEDITOR.dtd.tr || block.name in CKEDITOR.dtd.$listItem)) {
					return false;
				}
	
				var last = getLast(block);
				return !last || block.name == 'form' && last.name == 'input';
			}
	
			var rules = { elements: {} },
			    isOutput = type == 'html',
			    textBlockTags = CKEDITOR.tools.extend({}, blockLikeTags);
	
			// Build the list of text blocks.
			for (var i in textBlockTags) {
				if (!('#' in dtd[i])) delete textBlockTags[i];
			}
	
			for (i in textBlockTags) rules.elements[i] = blockFilter(isOutput, editor.config.fillEmptyBlocks);
	
			// Editable element has to be checked separately.
			rules.root = blockFilter(isOutput, false);
			rules.elements.br = brFilter(isOutput);
			return rules;
		}
	
		function getFixBodyTag(enterMode, autoParagraph) {
			return enterMode != CKEDITOR.ENTER_BR && autoParagraph !== false ? enterMode == CKEDITOR.ENTER_DIV ? 'div' : 'p' : false;
		}
	
		// Regex to scan for &nbsp; at the end of blocks, which are actually placeholders.
		// Safari transforms the &nbsp; to \xa0. (#4172)
		var tailNbspRegex = /(?:&nbsp;|\xa0)$/;
	
		var protectedSourceMarker = '{cke_protected}';
	
		function getLast(node) {
			var last = node.children[node.children.length - 1];
			while (last && isEmpty(last)) last = last.previous;
			return last;
		}
	
		function getNext(node) {
			var next = node.next;
			while (next && isEmpty(next)) next = next.next;
			return next;
		}
	
		function getPrevious(node) {
			var previous = node.previous;
			while (previous && isEmpty(previous)) previous = previous.previous;
			return previous;
		}
	
		// Judge whether the node is an ghost node to be ignored, when traversing.
		function isEmpty(node) {
			return node.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.trim(node.value) || node.type == CKEDITOR.NODE_ELEMENT && node.attributes['data-cke-bookmark'];
		}
	
		// Judge whether the node is a block-like element.
		function isBlockBoundary(node) {
			return node && (node.type == CKEDITOR.NODE_ELEMENT && node.name in blockLikeTags || node.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT);
		}
	
		function append(parent, node) {
			var last = parent.children[parent.children.length - 1];
			parent.children.push(node);
			node.parent = parent;
			if (last) {
				last.next = node;
				node.previous = last;
			}
		}
	
		function getNodeIndex(node) {
			return node.parent ? node.getIndex() : -1;
		}
	
		var dtd = CKEDITOR.dtd,
	
		// Define orders of table elements.
		tableOrder = ['caption', 'colgroup', 'col', 'thead', 'tfoot', 'tbody'],
	
		// List of all block elements.
		blockLikeTags = CKEDITOR.tools.extend({}, dtd.$blockLimit, dtd.$block);
	
		//
		// DATA filter rules ------------------------------------------------------
		//
	
		var defaultDataFilterRulesEditableOnly = {
			elements: {
				input: protectReadOnly,
				textarea: protectReadOnly
			}
		};
	
		// These rules will also be applied to non-editable content.
		var defaultDataFilterRulesForAll = {
			attributeNames: [
			// Event attributes (onXYZ) must not be directly set. They can become
			// active in the editing area (IE|WebKit).
			[/^on/, 'data-cke-pa-on'],
	
			// Don't let some old expando enter editor. Concerns only IE8,
			// but for consistency remove on all browsers.
			[/^data-cke-expando$/, '']]
		};
	
		// Disable form elements editing mode provided by some browsers. (#5746)
		function protectReadOnly(element) {
			var attrs = element.attributes;
	
			// We should flag that the element was locked by our code so
			// it'll be editable by the editor functions (#6046).
			if (attrs.contenteditable != 'false') attrs['data-cke-editable'] = attrs.contenteditable ? 'true' : 1;
	
			attrs.contenteditable = 'false';
		}
	
		//
		// HTML filter rules ------------------------------------------------------
		//
	
		var defaultHtmlFilterRulesEditableOnly = {
			elements: {
				embed: function (element) {
					var parent = element.parent;
	
					// If the <embed> is child of a <object>, copy the width
					// and height attributes from it.
					if (parent && parent.name == 'object') {
						var parentWidth = parent.attributes.width,
						    parentHeight = parent.attributes.height;
						if (parentWidth) element.attributes.width = parentWidth;
						if (parentHeight) element.attributes.height = parentHeight;
					}
				},
	
				// Remove empty link but not empty anchor. (#3829, #13516)
				a: function (element) {
					var attrs = element.attributes;
	
					if (!(element.children.length || attrs.name || attrs.id || element.attributes['data-cke-saved-name'])) return false;
				}
			}
		};
	
		// These rules will also be applied to non-editable content.
		var defaultHtmlFilterRulesForAll = {
			elementNames: [
			// Remove the "cke:" namespace prefix.
			[/^cke:/, ''],
	
			// Ignore <?xml:namespace> tags.
			[/^\?xml:namespace$/, '']],
	
			attributeNames: [
			// Attributes saved for changes and protected attributes.
			[/^data-cke-(saved|pa)-/, ''],
	
			// All "data-cke-" attributes are to be ignored.
			[/^data-cke-.*/, ''], ['hidefocus', '']],
	
			elements: {
				$: function (element) {
					var attribs = element.attributes;
	
					if (attribs) {
						// Elements marked as temporary are to be ignored.
						if (attribs['data-cke-temp']) return false;
	
						// Remove duplicated attributes - #3789.
						var attributeNames = ['name', 'href', 'src'],
						    savedAttributeName;
						for (var i = 0; i < attributeNames.length; i++) {
							savedAttributeName = 'data-cke-saved-' + attributeNames[i];
							savedAttributeName in attribs && delete attribs[attributeNames[i]];
						}
					}
	
					return element;
				},
	
				// The contents of table should be in correct order (#4809).
				table: function (element) {
					// Clone the array as it would become empty during the sort call.
					var children = element.children.slice(0);
	
					children.sort(function (node1, node2) {
						var index1, index2;
	
						// Compare in the predefined order.
						if (node1.type == CKEDITOR.NODE_ELEMENT && node2.type == node1.type) {
							index1 = CKEDITOR.tools.indexOf(tableOrder, node1.name);
							index2 = CKEDITOR.tools.indexOf(tableOrder, node2.name);
						}
	
						// Make sure the sort is stable, if no order can be established above.
						if (!(index1 > -1 && index2 > -1 && index1 != index2)) {
							index1 = getNodeIndex(node1);
							index2 = getNodeIndex(node2);
						}
	
						return index1 > index2 ? 1 : -1;
					});
				},
	
				// Restore param elements into self-closing.
				param: function (param) {
					param.children = [];
					param.isEmpty = true;
					return param;
				},
	
				// Remove dummy span in webkit.
				span: function (element) {
					if (element.attributes['class'] == 'Apple-style-span') delete element.name;
				},
	
				html: function (element) {
					delete element.attributes.contenteditable;
					delete element.attributes['class'];
				},
	
				body: function (element) {
					delete element.attributes.spellcheck;
					delete element.attributes.contenteditable;
				},
	
				style: function (element) {
					var child = element.children[0];
					if (child && child.value) child.value = CKEDITOR.tools.trim(child.value);
	
					if (!element.attributes.type) element.attributes.type = 'text/css';
				},
	
				title: function (element) {
					var titleText = element.children[0];
	
					// Append text-node to title tag if not present (i.e. non-IEs) (#9882).
					!titleText && append(element, titleText = new CKEDITOR.htmlParser.text());
	
					// Transfer data-saved title to title tag.
					titleText.value = element.attributes['data-cke-title'] || '';
				},
	
				input: unprotectReadyOnly,
				textarea: unprotectReadyOnly
			},
	
			attributes: {
				'class': function (value) {
					// Remove all class names starting with "cke_".
					return CKEDITOR.tools.ltrim(value.replace(/(?:^|\s+)cke_[^\s]*/g, '')) || false;
				}
			}
		};
	
		if (CKEDITOR.env.ie) {
			// IE outputs style attribute in capital letters. We should convert
			// them back to lower case, while not hurting the values (#5930)
			defaultHtmlFilterRulesForAll.attributes.style = function (value) {
				return value.replace(/(^|;)([^\:]+)/g, function (match) {
					return match.toLowerCase();
				});
			};
		}
	
		// Disable form elements editing mode provided by some browsers. (#5746)
		function unprotectReadyOnly(element) {
			var attrs = element.attributes;
			switch (attrs['data-cke-editable']) {
				case 'true':
					attrs.contenteditable = 'true';
					break;
				case '1':
					delete attrs.contenteditable;
					break;
			}
		}
	
		//
		// Preprocessor filters ---------------------------------------------------
		//
	
		var protectElementRegex = /<(a|area|img|input|source)\b([^>]*)>/gi,
	
		// Be greedy while looking for protected attributes. This will let us avoid an unfortunate
		// situation when "nested attributes", which may appear valid, are also protected.
		// I.e. if we consider the following HTML:
		//
		// 	<img data-x="&lt;a href=&quot;X&quot;" />
		//
		// then the "non-greedy match" returns:
		//
		// 	'href' => '&quot;X&quot;' // It's wrong! Href is not an attribute of <img>.
		//
		// while greedy match returns:
		//
		// 	'data-x' => '&lt;a href=&quot;X&quot;'
		//
		// which, can be easily filtered out (#11508).
		protectAttributeRegex = /([\w-:]+)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi,
		    protectAttributeNameRegex = /^(href|src|name)$/i;
	
		// Note: we use lazy star '*?' to prevent eating everything up to the last occurrence of </style> or </textarea>.
		var protectElementsRegex = /(?:<style(?=[ >])[^>]*>[\s\S]*?<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi,
		    protectTextareaRegex = /(<textarea(?=[ >])[^>]*>)([\s\S]*?)(?:<\/textarea>)/gi,
		    encodedElementsRegex = /<cke:encoded>([^<]*)<\/cke:encoded>/gi;
	
		var protectElementNamesRegex = /(<\/?)((?:object|embed|param|html|body|head|title)[^>]*>)/gi,
		    unprotectElementNamesRegex = /(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi;
	
		var protectSelfClosingRegex = /<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi;
	
		function protectAttributes(html) {
			return html.replace(protectElementRegex, function (element, tag, attributes) {
				return '<' + tag + attributes.replace(protectAttributeRegex, function (fullAttr, attrName) {
					// Avoid corrupting the inline event attributes (#7243).
					// We should not rewrite the existed protected attributes, e.g. clipboard content from editor. (#5218)
					if (protectAttributeNameRegex.test(attrName) && attributes.indexOf('data-cke-saved-' + attrName) == -1) return ' data-cke-saved-' + fullAttr + ' data-cke-' + CKEDITOR.rnd + '-' + fullAttr;
	
					return fullAttr;
				}) + '>';
			});
		}
	
		function protectElements(html, regex) {
			return html.replace(regex, function (match, tag, content) {
				// Encode < and > in textarea because this won't be done by a browser, since
				// textarea will be protected during passing data through fix bin.
				if (match.indexOf('<textarea') === 0) match = tag + unprotectRealComments(content).replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</textarea>';
	
				return '<cke:encoded>' + encodeURIComponent(match) + '</cke:encoded>';
			});
		}
	
		function unprotectElements(html) {
			return html.replace(encodedElementsRegex, function (match, encoded) {
				return decodeURIComponent(encoded);
			});
		}
	
		function protectElementsNames(html) {
			return html.replace(protectElementNamesRegex, '$1cke:$2');
		}
	
		function unprotectElementNames(html) {
			return html.replace(unprotectElementNamesRegex, '$1$2');
		}
	
		function protectSelfClosingElements(html) {
			return html.replace(protectSelfClosingRegex, '<cke:$1$2></cke:$1>');
		}
	
		function protectPreFormatted(html) {
			return html.replace(/(<pre\b[^>]*>)(\r\n|\n)/g, '$1$2$2');
		}
	
		function protectRealComments(html) {
			return html.replace(/<!--(?!{cke_protected})[\s\S]+?-->/g, function (match) {
				return '<!--' + protectedSourceMarker + '{C}' + encodeURIComponent(match).replace(/--/g, '%2D%2D') + '-->';
			});
		}
	
		// Replace all "on\w{3,}" strings which are not:
		// * opening tags - e.g. `<onfoo`,
		// * closing tags - e.g. </onfoo> (tested in "false positive 1"),
		// * part of other attribute - e.g. `data-onfoo` or `fonfoo`.
		function protectInsecureAttributes(html) {
			return html.replace(/([^a-z0-9<\-])(on\w{3,})(?!>)/gi, '$1data-cke-' + CKEDITOR.rnd + '-$2');
		}
	
		function unprotectRealComments(html) {
			return html.replace(/<!--\{cke_protected\}\{C\}([\s\S]+?)-->/g, function (match, data) {
				return decodeURIComponent(data);
			});
		}
	
		function unprotectSource(html, editor) {
			var store = editor._.dataStore;
	
			return html.replace(/<!--\{cke_protected\}([\s\S]+?)-->/g, function (match, data) {
				return decodeURIComponent(data);
			}).replace(/\{cke_protected_(\d+)\}/g, function (match, id) {
				return store && store[id] || '';
			});
		}
	
		function protectSource(data, editor) {
			var protectedHtml = [],
			    protectRegexes = editor.config.protectedSource,
			    store = editor._.dataStore || (editor._.dataStore = { id: 1 }),
			    tempRegex = /<\!--\{cke_temp(comment)?\}(\d*?)-->/g;
	
			var regexes = [
			// Script tags will also be forced to be protected, otherwise
			// IE will execute them.
			/<script[\s\S]*?(<\/script>|$)/gi,
	
			// <noscript> tags (get lost in IE and messed up in FF).
			/<noscript[\s\S]*?<\/noscript>/gi,
	
			// Avoid meta tags being stripped (#8117).
			/<meta[\s\S]*?\/?>/gi].concat(protectRegexes);
	
			// First of any other protection, we must protect all comments
			// to avoid loosing them (of course, IE related).
			// Note that we use a different tag for comments, as we need to
			// transform them when applying filters.
			data = data.replace(/<!--[\s\S]*?-->/g, function (match) {
				return '<!--{cke_tempcomment}' + (protectedHtml.push(match) - 1) + '-->';
			});
	
			for (var i = 0; i < regexes.length; i++) {
				data = data.replace(regexes[i], function (match) {
					match = match.replace(tempRegex, // There could be protected source inside another one. (#3869).
					function ($, isComment, id) {
						return protectedHtml[id];
					});
	
					// Avoid protecting over protected, e.g. /\{.*?\}/
					return (/cke_temp(comment)?/.test(match) ? match : '<!--{cke_temp}' + (protectedHtml.push(match) - 1) + '-->'
					);
				});
			}
			data = data.replace(tempRegex, function ($, isComment, id) {
				return '<!--' + protectedSourceMarker + (isComment ? '{C}' : '') + encodeURIComponent(protectedHtml[id]).replace(/--/g, '%2D%2D') + '-->';
			});
	
			// Different protection pattern is used for those that
			// live in attributes to avoid from being HTML encoded.
			// Why so serious? See #9205, #8216, #7805, #11754, #11846.
			data = data.replace(/<\w+(?:\s+(?:(?:[^\s=>]+\s*=\s*(?:[^'"\s>]+|'[^']*'|"[^"]*"))|[^\s=\/>]+))+\s*\/?>/g, function (match) {
				return match.replace(/<!--\{cke_protected\}([^>]*)-->/g, function (match, data) {
					store[store.id] = decodeURIComponent(data);
					return '{cke_protected_' + store.id++ + '}';
				});
			});
	
			// This RegExp searches for innerText in all the title/iframe/textarea elements.
			// This is because browser doesn't allow HTML in these elements, that's why we can't
			// nest comments in there. (#11223)
			data = data.replace(/<(title|iframe|textarea)([^>]*)>([\s\S]*?)<\/\1>/g, function (match, tagName, tagAttributes, innerText) {
				return '<' + tagName + tagAttributes + '>' + unprotectSource(unprotectRealComments(innerText), editor) + '</' + tagName + '>';
			});
	
			return data;
		}
	
		// Creates a block if the root element is empty.
		function fixEmptyRoot(root, fixBodyTag) {
			if (!root.children.length && CKEDITOR.dtd[root.name][fixBodyTag]) {
				var fixBodyElement = new CKEDITOR.htmlParser.element(fixBodyTag);
				root.add(fixBodyElement);
			}
		}
	})();
	
	/**
	 * Whether a filler text (non-breaking space entity &mdash; `&nbsp;`) will be
	 * inserted into empty block elements in HTML output.
	 * This is used to render block elements properly with `line-height`.
	 * When a function is specified instead, it will be passed a {@link CKEDITOR.htmlParser.element}
	 * to decide whether adding the filler text by expecting a Boolean return value.
	 *
	 *		config.fillEmptyBlocks = false; // Prevent filler nodes in all empty blocks.
	 *
	 *		// Prevent filler node only in float cleaners.
	 *		config.fillEmptyBlocks = function( element ) {
	 *			if ( element.attributes[ 'class' ].indexOf( 'clear-both' ) != -1 )
	 *				return false;
	 *		};
	 *
	 * @since 3.5
	 * @cfg {Boolean/Function} [fillEmptyBlocks=true]
	 * @member CKEDITOR.config
	 */
	
	/**
	 * This event is fired by the {@link CKEDITOR.htmlDataProcessor} when input HTML
	 * is to be purified by the {@link CKEDITOR.htmlDataProcessor#toHtml} method.
	 *
	 * By adding listeners with different priorities it is possible
	 * to process input HTML on different stages:
	 *
	 *	* 1-4: Data is available in the original string format.
	 *	* 5: Data is initially filtered with regexp patterns and parsed to
	 *		{@link CKEDITOR.htmlParser.fragment} {@link CKEDITOR.htmlParser.element}.
	 *	* 5-9: Data is available in the parsed format, but {@link CKEDITOR.htmlDataProcessor#dataFilter}
	 *		is not applied yet.
	 *	* 6: Data is filtered with the {CKEDITOR.filter content filter}.
	 *	* 10: Data is processed with {@link CKEDITOR.htmlDataProcessor#dataFilter}.
	 *	* 10-14: Data is available in the parsed format and {@link CKEDITOR.htmlDataProcessor#dataFilter}
	 *		has already been applied.
	 *	* 15: Data is written back to an HTML string.
	 *	* 15-*: Data is available in an HTML string.
	 *
	 * For example to be able to process parsed, but not yet filtered data add listener this way:
	 *
	 *		editor.on( 'toHtml', function( evt) {
	 *			evt.data.dataValue; // -> CKEDITOR.htmlParser.fragment instance
	 *		}, null, null, 7 );
	 *
	 * @since 4.1
	 * @event toHtml
	 * @member CKEDITOR.editor
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param data
	 * @param {String/CKEDITOR.htmlParser.fragment/CKEDITOR.htmlParser.element} data.dataValue Input data to be purified.
	 * @param {String} data.context See {@link CKEDITOR.htmlDataProcessor#toHtml} The `context` argument.
	 * @param {Boolean} data.fixForBody See {@link CKEDITOR.htmlDataProcessor#toHtml} The `fixForBody` argument.
	 * @param {Boolean} data.dontFilter See {@link CKEDITOR.htmlDataProcessor#toHtml} The `dontFilter` argument.
	 * @param {Boolean} data.filter See {@link CKEDITOR.htmlDataProcessor#toHtml} The `filter` argument.
	 * @param {Boolean} data.enterMode See {@link CKEDITOR.htmlDataProcessor#toHtml} The `enterMode` argument.
	 * @param {Boolean} [data.protectedWhitespaces] See {@link CKEDITOR.htmlDataProcessor#toHtml} The `protectedWhitespaces` argument.
	 */
	
	/**
	 * This event is fired when {@link CKEDITOR.htmlDataProcessor} is converting
	 * internal HTML to output data HTML.
	 *
	 * By adding listeners with different priorities it is possible
	 * to process input HTML on different stages:
	 *
	 *	* 1-4: Data is available in the original string format.
	 *	* 5: Data is initially filtered with regexp patterns and parsed to
	 *		{@link CKEDITOR.htmlParser.fragment} {@link CKEDITOR.htmlParser.element}.
	 *	* 5-9: Data is available in the parsed format, but {@link CKEDITOR.htmlDataProcessor#htmlFilter}
	 *		is not applied yet.
	 *	* 10: Data is filtered with {@link CKEDITOR.htmlDataProcessor#htmlFilter}.
	 *  * 11: Data is filtered with the {CKEDITOR.filter content filter} (on output the content filter makes
	 *		only transformations, without filtering).
	 *	* 10-14: Data is available in the parsed format and {@link CKEDITOR.htmlDataProcessor#htmlFilter}
	 *		has already been applied.
	 *	* 15: Data is written back to an HTML string.
	 *	* 15-*: Data is available in an HTML string.
	 *
	 * For example to be able to process parsed and already processed data add listener this way:
	 *
	 *		editor.on( 'toDataFormat', function( evt) {
	 *			evt.data.dataValue; // -> CKEDITOR.htmlParser.fragment instance
	 *		}, null, null, 12 );
	 *
	 * @since 4.1
	 * @event toDataFormat
	 * @member CKEDITOR.editor
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param data
	 * @param {String/CKEDITOR.htmlParser.fragment/CKEDITOR.htmlParser.element} data.dataValue Output data to be prepared.
	 * @param {String} data.context See {@link CKEDITOR.htmlDataProcessor#toDataFormat} The `context` argument.
	 * @param {Boolean} data.filter See {@link CKEDITOR.htmlDataProcessor#toDataFormat} The `filter` argument.
	 * @param {Boolean} data.enterMode See {@link CKEDITOR.htmlDataProcessor#toDataFormat} The `enterMode` argument.
	 */

/***/ },
/* 42 */
/*!************************************!*\
  !*** ./core/htmlparser/element.js ***!
  \************************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	'use strict';
	
	/**
	 * A lightweight representation of an HTML element.
	 *
	 * @class
	 * @extends CKEDITOR.htmlParser.node
	 * @constructor Creates an element class instance.
	 * @param {String} name The element name.
	 * @param {Object} attributes An object storing all attributes defined for
	 * this element.
	 */
	
	CKEDITOR.htmlParser.element = function (name, attributes) {
		/**
	  * The element name.
	  *
	  * @property {String}
	  */
		this.name = name;
	
		/**
	  * Stores the attributes defined for this element.
	  *
	  * @property {Object}
	  */
		this.attributes = attributes || {};
	
		/**
	  * The nodes that are direct children of this element.
	  */
		this.children = [];
	
		// Reveal the real semantic of our internal custom tag name (#6639),
		// when resolving whether it's block like.
		var realName = name || '',
		    prefixed = realName.match(/^cke:(.*)/);
		prefixed && (realName = prefixed[1]);
	
		var isBlockLike = !!(CKEDITOR.dtd.$nonBodyContent[realName] || CKEDITOR.dtd.$block[realName] || CKEDITOR.dtd.$listItem[realName] || CKEDITOR.dtd.$tableContent[realName] || CKEDITOR.dtd.$nonEditable[realName] || realName == 'br');
	
		this.isEmpty = !!CKEDITOR.dtd.$empty[name];
		this.isUnknown = !CKEDITOR.dtd[name];
	
		/** @private */
		this._ = {
			isBlockLike: isBlockLike,
			hasInlineStarted: this.isEmpty || !isBlockLike
		};
	};
	
	/**
	 * Object presentation of CSS style declaration text.
	 *
	 * @class
	 * @constructor Creates a `cssStyle` class instance.
	 * @param {CKEDITOR.htmlParser.element/String} elementOrStyleText
	 * An HTML parser element or the inline style text.
	 */
	CKEDITOR.htmlParser.cssStyle = function () {
		var styleText,
		    arg = arguments[0],
		    rules = {};
	
		styleText = arg instanceof CKEDITOR.htmlParser.element ? arg.attributes.style : arg;
	
		// html-encoded quote might be introduced by 'font-family'
		// from MS-Word which confused the following regexp. e.g.
		//'font-family: &quot;Lucida, Console&quot;'
		// TODO reuse CSS methods from tools.
		(styleText || '').replace(/&quot;/g, '"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g, function (match, name, value) {
			name == 'font-family' && (value = value.replace(/["']/g, ''));
			rules[name.toLowerCase()] = value;
		});
	
		return {
	
			rules: rules,
	
			/**
	   * Applies the styles to the specified element or object.
	   *
	   * @param {CKEDITOR.htmlParser.element/CKEDITOR.dom.element/Object} obj
	   */
			populate: function (obj) {
				var style = this.toString();
				if (style) obj instanceof CKEDITOR.dom.element ? obj.setAttribute('style', style) : obj instanceof CKEDITOR.htmlParser.element ? obj.attributes.style = style : obj.style = style;
			},
	
			/**
	   * Serializes CSS style declaration to a string.
	   *
	   * @returns {String}
	   */
			toString: function () {
				var output = [];
				for (var i in rules) rules[i] && output.push(i, ':', rules[i], ';');
				return output.join('');
			}
		};
	};
	
	/** @class CKEDITOR.htmlParser.element */
	(function () {
		// Used to sort attribute entries in an array, where the first element of
		// each object is the attribute name.
		var sortAttribs = function (a, b) {
			a = a[0];
			b = b[0];
			return a < b ? -1 : a > b ? 1 : 0;
		},
		    fragProto = CKEDITOR.htmlParser.fragment.prototype;
	
		CKEDITOR.htmlParser.element.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node(), {
			/**
	   * The node type. This is a constant value set to {@link CKEDITOR#NODE_ELEMENT}.
	   *
	   * @readonly
	   * @property {Number} [=CKEDITOR.NODE_ELEMENT]
	   */
			type: CKEDITOR.NODE_ELEMENT,
	
			/**
	   * Adds a node to the element children list.
	   *
	   * @method
	   * @param {CKEDITOR.htmlParser.node} node The node to be added.
	   * @param {Number} [index] From where the insertion happens.
	   */
			add: fragProto.add,
	
			/**
	   * Clones this element.
	   *
	   * @returns {CKEDITOR.htmlParser.element} The element clone.
	   */
			clone: function () {
				return new CKEDITOR.htmlParser.element(this.name, this.attributes);
			},
	
			/**
	   * Filters this element and its children with the given filter.
	   *
	   * @since 4.1
	   * @param {CKEDITOR.htmlParser.filter} filter
	   * @returns {Boolean} The method returns `false` when this element has
	   * been removed or replaced with another. This information means that
	   * {@link #filterChildren} has to repeat the filter on the current
	   * position in parent's children array.
	   */
			filter: function (filter, context) {
				var element = this,
				    originalName,
				    name;
	
				context = element.getFilterContext(context);
	
				// Do not process elements with data-cke-processor attribute set to off.
				if (context.off) return true;
	
				// Filtering if it's the root node.
				if (!element.parent) filter.onRoot(context, element);
	
				while (true) {
					originalName = element.name;
	
					if (!(name = filter.onElementName(context, originalName))) {
						this.remove();
						return false;
					}
	
					element.name = name;
	
					if (!(element = filter.onElement(context, element))) {
						this.remove();
						return false;
					}
	
					// New element has been returned - replace current one
					// and process it (stop processing this and return false, what
					// means that element has been removed).
					if (element !== this) {
						this.replaceWith(element);
						return false;
					}
	
					// If name has been changed - continue loop, so in next iteration
					// filters for new name will be applied to this element.
					// If name hasn't been changed - stop.
					if (element.name == originalName) break;
	
					// If element has been replaced with something of a
					// different type, then make the replacement filter itself.
					if (element.type != CKEDITOR.NODE_ELEMENT) {
						this.replaceWith(element);
						return false;
					}
	
					// This indicate that the element has been dropped by
					// filter but not the children.
					if (!element.name) {
						this.replaceWithChildren();
						return false;
					}
				}
	
				var attributes = element.attributes,
				    a,
				    value,
				    newAttrName;
	
				for (a in attributes) {
					newAttrName = a;
					value = attributes[a];
	
					// Loop until name isn't modified.
					// A little bit senseless, but IE would do that anyway
					// because it iterates with for-in loop even over properties
					// created during its run.
					while (true) {
						if (!(newAttrName = filter.onAttributeName(context, a))) {
							delete attributes[a];
							break;
						} else if (newAttrName != a) {
							delete attributes[a];
							a = newAttrName;
							continue;
						} else {
							break;
						}
					}
	
					if (newAttrName) {
						if ((value = filter.onAttribute(context, element, newAttrName, value)) === false) delete attributes[newAttrName];else attributes[newAttrName] = value;
					}
				}
	
				if (!element.isEmpty) this.filterChildren(filter, false, context);
	
				return true;
			},
	
			/**
	   * Filters this element's children with the given filter.
	   *
	   * Element's children may only be filtered once by one
	   * instance of the filter.
	   *
	   * @method filterChildren
	   * @param {CKEDITOR.htmlParser.filter} filter
	   */
			filterChildren: fragProto.filterChildren,
	
			/**
	   * Writes the element HTML to the CKEDITOR.htmlWriter.
	   *
	   * @param {CKEDITOR.htmlParser.basicWriter} writer The writer to which HTML will be written.
	   * @param {CKEDITOR.htmlParser.filter} [filter] The filter to be applied to this node.
	   * **Note:** It is unsafe to filter an offline (not appended) node.
	   */
			writeHtml: function (writer, filter) {
				if (filter) this.filter(filter);
	
				var name = this.name,
				    attribsArray = [],
				    attributes = this.attributes,
				    attrName,
				    attr,
				    i,
				    l;
	
				// Open element tag.
				writer.openTag(name, attributes);
	
				// Copy all attributes to an array.
				for (attrName in attributes) attribsArray.push([attrName, attributes[attrName]]);
	
				// Sort the attributes by name.
				if (writer.sortAttributes) attribsArray.sort(sortAttribs);
	
				// Send the attributes.
				for (i = 0, l = attribsArray.length; i < l; i++) {
					attr = attribsArray[i];
					writer.attribute(attr[0], attr[1]);
				}
	
				// Close the tag.
				writer.openTagClose(name, this.isEmpty);
	
				this.writeChildrenHtml(writer);
	
				// Close the element.
				if (!this.isEmpty) writer.closeTag(name);
			},
	
			/**
	   * Sends children of this element to the writer.
	   *
	   * @param {CKEDITOR.htmlParser.basicWriter} writer The writer to which HTML will be written.
	   * @param {CKEDITOR.htmlParser.filter} [filter]
	   */
			writeChildrenHtml: fragProto.writeChildrenHtml,
	
			/**
	   * Replaces this element with its children.
	   *
	   * @since 4.1
	   */
			replaceWithChildren: function () {
				var children = this.children;
	
				for (var i = children.length; i;) children[--i].insertAfter(this);
	
				this.remove();
			},
	
			/**
	   * Executes a callback on each node (of the given type) in this element.
	   *
	   *		// Create a <p> element with foo<b>bar</b>bom as its content.
	   *		var elP = CKEDITOR.htmlParser.fragment.fromHtml( 'foo<b>bar</b>bom', 'p' );
	   *		elP.forEach( function( node ) {
	   *			console.log( node );
	   *		} );
	   *		// Will log:
	   *		// 1. document fragment,
	   *		// 2. <p> element,
	   *		// 3. "foo" text node,
	   *		// 4. <b> element,
	   *		// 5. "bar" text node,
	   *		// 6. "bom" text node.
	   *
	   * @since 4.1
	   * @param {Function} callback Function to be executed on every node.
	   * **Since 4.3**: If `callback` returned `false`, the descendants of the current node will be ignored.
	   * @param {CKEDITOR.htmlParser.node} callback.node Node passed as an argument.
	   * @param {Number} [type] Whether the specified `callback` will be executed only on nodes of this type.
	   * @param {Boolean} [skipRoot] Do not execute `callback` on this element.
	   */
			forEach: fragProto.forEach,
	
			/**
	   * Gets this element's first child. If `condition` is given, this method returns
	   * the first child which satisfies that condition.
	   *
	   * @since 4.3
	   * @param {String/Object/Function} condition Name of a child, a hash of names, or a validator function.
	   * @returns {CKEDITOR.htmlParser.node}
	   */
			getFirst: function (condition) {
				if (!condition) return this.children.length ? this.children[0] : null;
	
				if (typeof condition != 'function') condition = nameCondition(condition);
	
				for (var i = 0, l = this.children.length; i < l; ++i) {
					if (condition(this.children[i])) return this.children[i];
				}
				return null;
			},
	
			/**
	   * Gets this element's inner HTML.
	   *
	   * @since 4.3
	   * @returns {String}
	   */
			getHtml: function () {
				var writer = new CKEDITOR.htmlParser.basicWriter();
				this.writeChildrenHtml(writer);
				return writer.getHtml();
			},
	
			/**
	   * Sets this element's inner HTML.
	   *
	   * @since 4.3
	   * @param {String} html
	   */
			setHtml: function (html) {
				var children = this.children = CKEDITOR.htmlParser.fragment.fromHtml(html).children;
	
				for (var i = 0, l = children.length; i < l; ++i) children[i].parent = this;
			},
	
			/**
	   * Gets this element's outer HTML.
	   *
	   * @since 4.3
	   * @returns {String}
	   */
			getOuterHtml: function () {
				var writer = new CKEDITOR.htmlParser.basicWriter();
				this.writeHtml(writer);
				return writer.getHtml();
			},
	
			/**
	   * Splits this element at the given index.
	   *
	   * @since 4.3
	   * @param {Number} index Index at which the element will be split &mdash; `0` means the beginning,
	   * `1` after first child node, etc.
	   * @returns {CKEDITOR.htmlParser.element} The new element following this one.
	   */
			split: function (index) {
				var cloneChildren = this.children.splice(index, this.children.length - index),
				    clone = this.clone();
	
				for (var i = 0; i < cloneChildren.length; ++i) cloneChildren[i].parent = clone;
	
				clone.children = cloneChildren;
	
				if (cloneChildren[0]) cloneChildren[0].previous = null;
	
				if (index > 0) this.children[index - 1].next = null;
	
				this.parent.add(clone, this.getIndex() + 1);
	
				return clone;
			},
	
			/**
	   * Adds a class name to the list of classes.
	   *
	   * @since 4.4
	   * @param {String} className The class name to be added.
	   */
			addClass: function (className) {
				if (this.hasClass(className)) return;
	
				var c = this.attributes['class'] || '';
	
				this.attributes['class'] = c + (c ? ' ' : '') + className;
			},
	
			/**
	   * Removes a class name from the list of classes.
	   *
	   * @since 4.3
	   * @param {String} className The class name to be removed.
	   */
			removeClass: function (className) {
				var classes = this.attributes['class'];
	
				if (!classes) return;
	
				// We can safely assume that className won't break regexp.
				// http://stackoverflow.com/questions/448981/what-characters-are-valid-in-css-class-names
				classes = CKEDITOR.tools.trim(classes.replace(new RegExp('(?:\\s+|^)' + className + '(?:\\s+|$)'), ' '));
	
				if (classes) this.attributes['class'] = classes;else delete this.attributes['class'];
			},
	
			/**
	   * Checkes whether this element has a class name.
	   *
	   * @since 4.3
	   * @param {String} className The class name to be checked.
	   * @returns {Boolean} Whether this element has a `className`.
	   */
			hasClass: function (className) {
				var classes = this.attributes['class'];
	
				if (!classes) return false;
	
				return new RegExp('(?:^|\\s)' + className + '(?=\\s|$)').test(classes);
			},
	
			getFilterContext: function (ctx) {
				var changes = [];
	
				if (!ctx) {
					ctx = {
						off: false,
						nonEditable: false,
						nestedEditable: false
					};
				}
	
				if (!ctx.off && this.attributes['data-cke-processor'] == 'off') changes.push('off', true);
	
				if (!ctx.nonEditable && this.attributes.contenteditable == 'false') changes.push('nonEditable', true);
				// A context to be given nestedEditable must be nonEditable first (by inheritance) (#11372, #11698).
				// Special case: #11504 - filter starts on <body contenteditable=true>,
				// so ctx.nonEditable has not been yet set to true.
				else if (ctx.nonEditable && !ctx.nestedEditable && this.attributes.contenteditable == 'true') changes.push('nestedEditable', true);
	
				if (changes.length) {
					ctx = CKEDITOR.tools.copy(ctx);
					for (var i = 0; i < changes.length; i += 2) ctx[changes[i]] = changes[i + 1];
				}
	
				return ctx;
			}
		}, true);
	
		function nameCondition(condition) {
			return function (el) {
				return el.type == CKEDITOR.NODE_ELEMENT && (typeof condition == 'string' ? el.name == condition : el.name in condition);
			};
		}
	})();

/***/ },
/* 43 */
/*!**************************!*\
  !*** ./core/template.js ***!
  \**************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.template} class, which represents
	 * an UI template for an editor instance.
	 */
	
	(function () {
		var cache = {},
		    rePlaceholder = /{([^}]+)}/g,
		    reEscapableChars = /([\\'])/g,
		    reNewLine = /\n/g,
		    reCarriageReturn = /\r/g;
	
		/**
	  * Lightweight template used to build the output string from variables.
	  *
	  *		// HTML template for presenting a label UI.
	  *		var tpl = new CKEDITOR.template( '<div class="{cls}">{label}</div>' );
	  *		alert( tpl.output( { cls: 'cke-label', label: 'foo'} ) ); // '<div class="cke-label">foo</div>'
	  *
	  * @class
	  * @constructor Creates a template class instance.
	  * @param {String} source The template source.
	  */
		CKEDITOR.template = function (source) {
			// Builds an optimized function body for the output() method, focused on performance.
			// For example, if we have this "source":
			//	'<div style="{style}">{editorName}</div>'
			// ... the resulting function body will be (apart from the "buffer" handling):
			//	return [ '<div style="', data['style'] == undefined ? '{style}' : data['style'], '">', data['editorName'] == undefined ? '{editorName}' : data['editorName'], '</div>' ].join('');
	
			// Try to read from the cache.
			if (cache[source]) this.output = cache[source];else {
				var fn = source
				// Escape chars like slash "\" or single quote "'".
				.replace(reEscapableChars, '\\$1').replace(reNewLine, '\\n').replace(reCarriageReturn, '\\r')
				// Inject the template keys replacement.
				.replace(rePlaceholder, function (m, key) {
					return "',data['" + key + "']==undefined?'{" + key + "}':data['" + key + "'],'";
				});
	
				fn = "return buffer?buffer.push('" + fn + "'):['" + fn + "'].join('');";
				this.output = cache[source] = Function('data', 'buffer', fn);
			}
		};
	})();
	
	/**
	 * Processes the template, filling its variables with the provided data.
	 *
	 * @method output
	 * @param {Object} data An object containing properties which values will be
	 * used to fill the template variables. The property names must match the
	 * template variables names. Variables without matching properties will be
	 * kept untouched.
	 * @param {Array} [buffer] An array into which the output data will be pushed into.
	 * The number of entries appended to the array is unknown.
	 * @returns {String/Number} If `buffer` has not been provided, the processed
	 * template output data, otherwise the new length of `buffer`.
	 */

/***/ },
/* 44 */
/*!**************************!*\
  !*** ./core/ckeditor.js ***!
  \**************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Contains the third and last part of the {@link CKEDITOR} object
	 *		definition.
	 */
	
	/** @class CKEDITOR */
	
	// Remove the CKEDITOR.loadFullCore reference defined on ckeditor_basic.
	delete CKEDITOR.loadFullCore;
	
	/**
	 * Stores references to all editor instances created. The name of the properties
	 * in this object correspond to instance names, and their values contain the
	 * {@link CKEDITOR.editor} object representing them.
	 *
	 *		alert( CKEDITOR.instances.editor1.name ); // 'editor1'
	 *
	 * @property {Object}
	 */
	CKEDITOR.instances = {};
	
	/**
	 * The document of the window storing the CKEDITOR object.
	 *
	 *		alert( CKEDITOR.document.getBody().getName() ); // 'body'
	 *
	 * @property {CKEDITOR.dom.document}
	 */
	CKEDITOR.document = new CKEDITOR.dom.document(document);
	
	/**
	 * Adds an editor instance to the global {@link CKEDITOR} object. This function
	 * is available for internal use mainly.
	 *
	 * @param {CKEDITOR.editor} editor The editor instance to be added.
	 */
	CKEDITOR.add = function (editor) {
	  CKEDITOR.instances[editor.name] = editor;
	
	  editor.on('focus', function () {
	    if (CKEDITOR.currentInstance != editor) {
	      CKEDITOR.currentInstance = editor;
	      CKEDITOR.fire('currentInstance');
	    }
	  });
	
	  editor.on('blur', function () {
	    if (CKEDITOR.currentInstance == editor) {
	      CKEDITOR.currentInstance = null;
	      CKEDITOR.fire('currentInstance');
	    }
	  });
	
	  CKEDITOR.fire('instance', null, editor);
	};
	
	/**
	 * Removes an editor instance from the global {@link CKEDITOR} object. This function
	 * is available for internal use only. External code must use {@link CKEDITOR.editor#method-destroy}.
	 *
	 * @private
	 * @param {CKEDITOR.editor} editor The editor instance to be removed.
	 */
	CKEDITOR.remove = function (editor) {
	  delete CKEDITOR.instances[editor.name];
	};
	
	(function () {
	  var tpls = {};
	
	  /**
	   * Adds a named {@link CKEDITOR.template} instance to be reused among all editors.
	   * This will return the existing one if a template with same name is already
	   * defined. Additionally, it fires the "template" event to allow template source customization.
	   *
	   * @param {String} name The name which identifies a UI template.
	   * @param {String} source The source string for constructing this template.
	   * @returns {CKEDITOR.template} The created template instance.
	   */
	  CKEDITOR.addTemplate = function (name, source) {
	    var tpl = tpls[name];
	    if (tpl) return tpl;
	
	    // Make it possible to customize the template through event.
	    var params = { name: name, source: source };
	    CKEDITOR.fire('template', params);
	
	    return tpls[name] = new CKEDITOR.template(params.source);
	  };
	
	  /**
	   * Retrieves a defined template created with {@link CKEDITOR#addTemplate}.
	   *
	   * @param {String} name The template name.
	   */
	  CKEDITOR.getTemplate = function (name) {
	    return tpls[name];
	  };
	})();
	
	(function () {
	  var styles = [];
	
	  /**
	   * Adds CSS rules to be appended to the editor document.
	   * This method is mostly used by plugins to add custom styles to the editor
	   * document. For basic content styling the `contents.css` file should be
	   * used instead.
	   *
	   * **Note:** This function should be called before the creation of editor instances.
	   *
	   *		// Add styles for all headings inside editable contents.
	   *		CKEDITOR.addCss( '.cke_editable h1,.cke_editable h2,.cke_editable h3 { border-bottom: 1px dotted red }' );
	   *
	   * @param {String} css The style rules to be appended.
	   * @see CKEDITOR.config#contentsCss
	   */
	  CKEDITOR.addCss = function (css) {
	    styles.push(css);
	  };
	
	  /**
	   * Returns a string will all CSS rules passed to the {@link CKEDITOR#addCss} method.
	   *
	   * @returns {String} A string containing CSS rules.
	   */
	  CKEDITOR.getCss = function () {
	    return styles.join('\n');
	  };
	})();
	
	// Perform global clean up to free as much memory as possible
	// when there are no instances left
	CKEDITOR.on('instanceDestroyed', function () {
	  if (CKEDITOR.tools.isEmpty(this.instances)) CKEDITOR.fire('reset');
	});
	
	// Load the bootstrap script.
	CKEDITOR.loader.load('_bootstrap'); // %REMOVE_LINE%
	
	// Tri-state constants.
	/**
	 * Used to indicate the ON or ACTIVE state.
	 *
	 * @readonly
	 * @property {Number} [=1]
	 */
	CKEDITOR.TRISTATE_ON = 1;
	
	/**
	 * Used to indicate the OFF or INACTIVE state.
	 *
	 * @readonly
	 * @property {Number} [=2]
	 */
	CKEDITOR.TRISTATE_OFF = 2;
	
	/**
	 * Used to indicate the DISABLED state.
	 *
	 * @readonly
	 * @property {Number} [=0]
	 */
	CKEDITOR.TRISTATE_DISABLED = 0;
	
	/**
	 * The editor which is currently active (has user focus).
	 *
	 *		function showCurrentEditorName() {
	 *			if ( CKEDITOR.currentInstance )
	 *				alert( CKEDITOR.currentInstance.name );
	 *			else
	 *				alert( 'Please focus an editor first.' );
	 *		}
	 *
	 * @property {CKEDITOR.editor} currentInstance
	 * @see CKEDITOR#event-currentInstance
	 */
	
	/**
	 * Fired when the CKEDITOR.currentInstance object reference changes. This may
	 * happen when setting the focus on different editor instances in the page.
	 *
	 *		var editor; // A variable to store a reference to the current editor.
	 *		CKEDITOR.on( 'currentInstance', function() {
	 *			editor = CKEDITOR.currentInstance;
	 *		} );
	 *
	 * @event currentInstance
	 */
	
	/**
	 * Fired when the last instance has been destroyed. This event is used to perform
	 * global memory cleanup.
	 *
	 * @event reset
	 */

/***/ },
/* 45 */
/*!*********************************!*\
  !*** ./core/creators/inline.js ***!
  \*********************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	(function () {
		/** @class CKEDITOR */
	
		/**
	  * Turns a DOM element with the `contenteditable` attribute set to `true` into a
	  * CKEditor instance. Check {@link CKEDITOR.dtd#$editable} for a list of
	  * allowed element names.
	  *
	  * **Note:** If the DOM element for which inline editing is being enabled does not have
	  * the `contenteditable` attribute set to `true`, the editor will start in read-only mode.
	  *
	  *		<div contenteditable="true" id="content">...</div>
	  *		...
	  *		CKEDITOR.inline( 'content' );
	  *
	  * It is also possible to create an inline editor from the `<textarea>` element.
	  * If you do so, an additional `<div>` element with editable content will be created
	  * directly after the `<textarea>` element and the `<textarea>` element will be hidden.
	  *
	  * @param {Object/String} element The DOM element or its ID.
	  * @param {Object} [instanceConfig] The specific configurations to apply to this editor instance.
	  * See {@link CKEDITOR.config}.
	  * @returns {CKEDITOR.editor} The editor instance created.
	  */
		CKEDITOR.inline = function (element, instanceConfig) {
			if (!CKEDITOR.env.isCompatible) return null;
	
			element = CKEDITOR.dom.element.get(element);
	
			// Avoid multiple inline editor instances on the same element.
			if (element.getEditor()) throw 'The editor instance "' + element.getEditor().name + '" is already attached to the provided element.';
	
			var editor = new CKEDITOR.editor(instanceConfig, element, CKEDITOR.ELEMENT_MODE_INLINE),
			    textarea = element.is('textarea') ? element : null;
	
			if (textarea) {
				editor.setData(textarea.getValue(), null, true);
	
				//Change element from textarea to div
				element = CKEDITOR.dom.element.createFromHtml('<div contenteditable="' + !!editor.readOnly + '" class="cke_textarea_inline">' + textarea.getValue() + '</div>', CKEDITOR.document);
	
				element.insertAfter(textarea);
				textarea.hide();
	
				// Attaching the concrete form.
				if (textarea.$.form) editor._attachToForm();
			} else {
				// Initial editor data is simply loaded from the page element content to make
				// data retrieval possible immediately after the editor creation.
				editor.setData(element.getHtml(), null, true);
			}
	
			// Once the editor is loaded, start the UI.
			editor.on('loaded', function () {
				editor.fire('uiReady');
	
				// Enable editing on the element.
				editor.editable(element);
	
				// Editable itself is the outermost element.
				editor.container = element;
				editor.ui.contentsElement = element;
	
				// Load and process editor data.
				editor.setData(editor.getData(1));
	
				// Clean on startup.
				editor.resetDirty();
	
				editor.fire('contentDom');
	
				// Inline editing defaults to "wysiwyg" mode, so plugins don't
				// need to make special handling for this "mode-less" environment.
				editor.mode = 'wysiwyg';
				editor.fire('mode');
	
				// The editor is completely loaded for interaction.
				editor.status = 'ready';
				editor.fireOnce('instanceReady');
				CKEDITOR.fire('instanceReady', null, editor);
	
				// give priority to plugins that relay on editor#loaded for bootstrapping.
			}, null, null, 10000);
	
			// Handle editor destroying.
			editor.on('destroy', function () {
				// Remove container from DOM if inline-textarea editor.
				// Show <textarea> back again.
				if (textarea) {
					editor.container.clearCustomData();
					editor.container.remove();
					textarea.show();
				}
	
				editor.element.clearCustomData();
	
				delete editor.element;
			});
	
			return editor;
		};
	
		/**
	  * Calls {@link CKEDITOR#inline} for all page elements with
	  * the `contenteditable` attribute set to `true`.
	  *
	  */
		CKEDITOR.inlineAll = function () {
			var el, data;
	
			for (var name in CKEDITOR.dtd.$editable) {
				var elements = CKEDITOR.document.getElementsByTag(name);
	
				for (var i = 0, len = elements.count(); i < len; i++) {
					el = elements.getItem(i);
	
					if (el.getAttribute('contenteditable') == 'true') {
						// Fire the "inline" event, making it possible to customize
						// the instance settings and eventually cancel the creation.
	
						data = {
							element: el,
							config: {}
						};
	
						if (CKEDITOR.fire('inline', data) !== false) CKEDITOR.inline(el, data.config);
					}
				}
			}
		};
	
		CKEDITOR.domReady(function () {
			!CKEDITOR.disableAutoInline && CKEDITOR.inlineAll();
		});
	})();
	
	/**
	 * Disables creating the inline editor automatically for elements with
	 * the `contenteditable` attribute set to `true`.
	 *
	 *		CKEDITOR.disableAutoInline = true;
	 *
	 * @cfg {Boolean} [disableAutoInline=false]
	 */

/***/ },
/* 46 */
/*!***********************************!*\
  !*** ./core/creators/themedui.js ***!
  \***********************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/** @class CKEDITOR */
	
	/**
	 * The class name used to identify `<textarea>` elements to be replaced
	 * by CKEditor instances. Set it to empty/`null` to disable this feature.
	 *
	 *		CKEDITOR.replaceClass = 'rich_editor';
	 *
	 * @cfg {String} [replaceClass='ckeditor']
	 */
	CKEDITOR.replaceClass = 'ckeditor';
	
	(function () {
		/**
	  * Replaces a `<textarea>` or a DOM element (`<div>`) with a CKEditor
	  * instance. For textareas, the initial value in the editor will be the
	  * textarea value. For DOM elements, their `innerHTML` will be used
	  * instead. It is recommended to use `<textarea>` and `<div>` elements only.
	  *
	  *		<textarea id="myfield" name="myfield"></textarea>
	  *		...
	  *		CKEDITOR.replace( 'myfield' );
	  *
	  *		var textarea = document.body.appendChild( document.createElement( 'textarea' ) );
	  *		CKEDITOR.replace( textarea );
	  *
	  * @param {Object/String} element The DOM element (textarea), its ID, or name.
	  * @param {Object} [config] The specific configuration to apply to this
	  * editor instance. Configuration set here will override the global CKEditor settings
	  * (see {@link CKEDITOR.config}).
	  * @returns {CKEDITOR.editor} The editor instance created.
	  */
		CKEDITOR.replace = function (element, config) {
			return createInstance(element, config, null, CKEDITOR.ELEMENT_MODE_REPLACE);
		};
	
		/**
	  * Creates a new editor instance at the end of a specific DOM element.
	  *
	  *		<!DOCTYPE html>
	  * 		<html>
	  * 			<head>
	  * 				<meta charset="utf-8">
	  * 				<title>CKEditor</title>
	  * 				<!-- Make sure the path to CKEditor is correct. -->
	  *				<script src="/ckeditor/ckeditor.js"></script>
	  *			</head>
	  *			<body>
	  *				<div id="editorSpace"></div>
	  *				<script>
	  *					CKEDITOR.appendTo( 'editorSpace' );
	  *				</script>
	  *			</body>
	  *		</html>
	  *
	  * @param {Object/String} element The DOM element, its ID, or name.
	  * @param {Object} [config] The specific configuration to apply to this
	  * editor instance. Configuration set here will override the global CKEditor settings
	  * (see {@link CKEDITOR.config}).
	  * @param {String} [data] Since 3.3. Initial value for the instance.
	  * @returns {CKEDITOR.editor} The editor instance created.
	  */
		CKEDITOR.appendTo = function (element, config, data) {
			return createInstance(element, config, data, CKEDITOR.ELEMENT_MODE_APPENDTO);
		};
	
		/**
	  * Replaces all `<textarea>` elements available in the document with
	  * editor instances.
	  *
	  *		// Replace all <textarea> elements in the page.
	  *		CKEDITOR.replaceAll();
	  *
	  *		// Replace all <textarea class="myClassName"> elements in the page.
	  *		CKEDITOR.replaceAll( 'myClassName' );
	  *
	  *		// Selectively replace <textarea> elements, based on a custom evaluation function.
	  *		CKEDITOR.replaceAll( function( textarea, config ) {
	  *			// A function that needs to be evaluated for the <textarea>
	  *			// to be replaced. It must explicitly return "false" to ignore a
	  *			// specific <textarea>.
	  *			// You can also customize the editor instance by having the function
	  *			// modify the "config" parameter.
	  *		} );
	  *
	  *		// Full page example where three <textarea> elements are replaced.
	  *		<!DOCTYPE html>
	  *		<html>
	  *			<head>
	  *				<meta charset="utf-8">
	  *				<title>CKEditor</title>
	  *				<!-- Make sure the path to CKEditor is correct. -->
	  *				<script src="/ckeditor/ckeditor.js"></script>
	  *			</head>
	  *			<body>
	  *				<textarea name="editor1"></textarea>
	  *				<textarea name="editor2"></textarea>
	  *				<textarea name="editor3"></textarea>
	  *				<script>
	  *					// Replace all three <textarea> elements above with CKEditor instances.
	  *					CKEDITOR.replaceAll();
	  *				</script>
	  *			</body>
	  *		</html>
	  *
	  * @param {String} [className] The `<textarea>` class name.
	  * @param {Function} [evaluator] An evaluation function that must return `true` for a `<textarea>`
	  * to be replaced with the editor. If the function returns `false`, the `<textarea>` element
	  * will not be replaced.
	  */
		CKEDITOR.replaceAll = function () {
			var textareas = document.getElementsByTagName('textarea');
	
			for (var i = 0; i < textareas.length; i++) {
				var config = null,
				    textarea = textareas[i];
	
				// The "name" and/or "id" attribute must exist.
				if (!textarea.name && !textarea.id) continue;
	
				if (typeof arguments[0] == 'string') {
					// The textarea class name could be passed as the function
					// parameter.
	
					var classRegex = new RegExp('(?:^|\\s)' + arguments[0] + '(?:$|\\s)');
	
					if (!classRegex.test(textarea.className)) continue;
				} else if (typeof arguments[0] == 'function') {
					// An evaluation function could be passed as the function parameter.
					// It must explicitly return "false" to ignore a specific <textarea>.
					config = {};
					if (arguments[0](textarea, config) === false) continue;
				}
	
				this.replace(textarea, config);
			}
		};
	
		/** @class CKEDITOR.editor */
	
		/**
	  * Registers an editing mode. This function is to be used mainly by plugins.
	  *
	  * @param {String} mode The mode name.
	  * @param {Function} exec The function that performs the actual mode change.
	  */
		CKEDITOR.editor.prototype.addMode = function (mode, exec) {
			(this._.modes || (this._.modes = {}))[mode] = exec;
		};
	
		/**
	  * Changes the editing mode of this editor instance.
	  *
	  * **Note:** The mode switch could be asynchronous depending on the mode provider.
	  * Use the `callback` to hook subsequent code.
	  *
	  *		// Switch to "source" view.
	  *		CKEDITOR.instances.editor1.setMode( 'source' );
	  *		// Switch to "wysiwyg" view and be notified on completion.
	  *		CKEDITOR.instances.editor1.setMode( 'wysiwyg', function() { alert( 'wysiwyg mode loaded!' ); } );
	  *
	  * @param {String} [newMode] If not specified, the {@link CKEDITOR.config#startupMode} will be used.
	  * @param {Function} [callback] Optional callback function which is invoked once the mode switch has succeeded.
	  */
		CKEDITOR.editor.prototype.setMode = function (newMode, callback) {
			var editor = this;
	
			var modes = this._.modes;
	
			// Mode loading quickly fails.
			if (newMode == editor.mode || !modes || !modes[newMode]) return;
	
			editor.fire('beforeSetMode', newMode);
	
			if (editor.mode) {
				var isDirty = editor.checkDirty(),
				    previousModeData = editor._.previousModeData,
				    currentData,
				    unlockSnapshot = 0;
	
				editor.fire('beforeModeUnload');
	
				// Detach the current editable. While detaching editable will set
				// cached editor's data (with internal setData call). We use this
				// data below to avoid two getData() calls in a row.
				editor.editable(0);
	
				editor._.previousMode = editor.mode;
				// Get cached data, which was set while detaching editable.
				editor._.previousModeData = currentData = editor.getData(1);
	
				// If data has not been modified in the mode which we are currently leaving,
				// avoid making snapshot right after initializing new mode.
				// http://dev.ckeditor.com/ticket/5217#comment:20
				// Tested by:
				// 'test switch mode with unrecoreded, inner HTML specific content (boguses)'
				// 'test switch mode with unrecoreded, inner HTML specific content (boguses) plus changes in source mode'
				if (editor.mode == 'source' && previousModeData == currentData) {
					// We need to make sure that unlockSnapshot will update the last snapshot
					// (will not create new one) if lockSnapshot is not called on outdated snapshots stack.
					// Additionally, forceUpdate prevents from making content image now, which is useless
					// (because it equals editor data not inner HTML).
					editor.fire('lockSnapshot', { forceUpdate: true });
					unlockSnapshot = 1;
				}
	
				// Clear up the mode space.
				editor.ui.space('contents').setHtml('');
	
				editor.mode = '';
			} else {
				editor._.previousModeData = editor.getData(1);
			}
	
			// Fire the mode handler.
			this._.modes[newMode](function () {
				// Set the current mode.
				editor.mode = newMode;
	
				if (isDirty !== undefined) !isDirty && editor.resetDirty();
	
				if (unlockSnapshot) editor.fire('unlockSnapshot');
				// Since snapshot made on dataReady (which normally catches changes done by setData)
				// won't work because editor.mode was not set yet (it's set in this function), we need
				// to make special snapshot for changes done in source mode here.
				else if (newMode == 'wysiwyg') editor.fire('saveSnapshot');
	
				// Delay to avoid race conditions (setMode inside setMode).
				setTimeout(function () {
					editor.fire('mode');
					callback && callback.call(editor);
				}, 0);
			});
		};
	
		/**
	  * Resizes the editor interface.
	  *
	  *		editor.resize( 900, 300 );
	  *
	  *		editor.resize( '100%', 450, true );
	  *
	  * @param {Number/String} width The new width. It can be an integer denoting a value
	  * in pixels or a CSS size value with unit.
	  * @param {Number/String} height The new height. It can be an integer denoting a value
	  * in pixels or a CSS size value with unit.
	  * @param {Boolean} [isContentHeight] Indicates that the provided height is to
	  * be applied to the editor content area, and not to the entire editor
	  * interface. Defaults to `false`.
	  * @param {Boolean} [resizeInner] Indicates that it is the inner interface
	  * element that must be resized, not the outer element. The default theme
	  * defines the editor interface inside a pair of `<span>` elements
	  * (`<span><span>...</span></span>`). By default the first,
	  * outer `<span>` element receives the sizes. If this parameter is set to
	  * `true`, the second, inner `<span>` is resized instead.
	  */
		CKEDITOR.editor.prototype.resize = function (width, height, isContentHeight, resizeInner) {
			var container = this.container,
			    contents = this.ui.space('contents'),
			    contentsFrame = CKEDITOR.env.webkit && this.document && this.document.getWindow().$.frameElement,
			    outer;
	
			if (resizeInner) {
				outer = this.container.getFirst(function (node) {
					return node.type == CKEDITOR.NODE_ELEMENT && node.hasClass('cke_inner');
				});
			} else {
				outer = container;
			}
	
			// Set as border box width. (#5353)
			outer.setSize('width', width, true);
	
			// WebKit needs to refresh the iframe size to avoid rendering issues. (1/2) (#8348)
			contentsFrame && (contentsFrame.style.width = '1%');
	
			// Get the height delta between the outer table and the content area.
			var contentsOuterDelta = (outer.$.offsetHeight || 0) - (contents.$.clientHeight || 0),
	
	
			// If we're setting the content area's height, then we don't need the delta.
			resultContentsHeight = Math.max(height - (isContentHeight ? 0 : contentsOuterDelta), 0),
			    resultOuterHeight = isContentHeight ? height + contentsOuterDelta : height;
	
			contents.setStyle('height', resultContentsHeight + 'px');
	
			// WebKit needs to refresh the iframe size to avoid rendering issues. (2/2) (#8348)
			contentsFrame && (contentsFrame.style.width = '100%');
	
			// Emit a resize event.
			this.fire('resize', {
				outerHeight: resultOuterHeight,
				contentsHeight: resultContentsHeight,
				// Sometimes width is not provided.
				outerWidth: width || outer.getSize('width')
			});
		};
	
		/**
	  * Gets the element that can be used to check the editor size. This method
	  * is mainly used by the [Editor Resize](http://ckeditor.com/addon/resize) plugin, which adds
	  * a UI handle that can be used to resize the editor.
	  *
	  * @param {Boolean} forContents Whether to return the "contents" part of the theme instead of the container.
	  * @returns {CKEDITOR.dom.element} The resizable element.
	  */
		CKEDITOR.editor.prototype.getResizable = function (forContents) {
			return forContents ? this.ui.space('contents') : this.container;
		};
	
		function createInstance(element, config, data, mode) {
			if (!CKEDITOR.env.isCompatible) return null;
	
			element = CKEDITOR.dom.element.get(element);
	
			// Avoid multiple inline editor instances on the same element.
			if (element.getEditor()) throw 'The editor instance "' + element.getEditor().name + '" is already attached to the provided element.';
	
			// Create the editor instance.
			var editor = new CKEDITOR.editor(config, element, mode);
	
			if (mode == CKEDITOR.ELEMENT_MODE_REPLACE) {
				// Do not replace the textarea right now, just hide it. The effective
				// replacement will be done later in the editor creation lifecycle.
				element.setStyle('visibility', 'hidden');
	
				// #8031 Remember if textarea was required and remove the attribute.
				editor._.required = element.hasAttribute('required');
				element.removeAttribute('required');
			}
	
			data && editor.setData(data, null, true);
	
			// Once the editor is loaded, start the UI.
			editor.on('loaded', function () {
				loadTheme(editor);
	
				if (mode == CKEDITOR.ELEMENT_MODE_REPLACE && editor.config.autoUpdateElement && element.$.form) editor._attachToForm();
	
				editor.setMode(editor.config.startupMode, function () {
					// Clean on startup.
					editor.resetDirty();
	
					// Editor is completely loaded for interaction.
					editor.status = 'ready';
					editor.fireOnce('instanceReady');
					CKEDITOR.fire('instanceReady', null, editor);
				});
			});
	
			editor.on('destroy', destroy);
			return editor;
		}
	
		function destroy() {
			var editor = this,
			    container = editor.container,
			    element = editor.element;
	
			if (container) {
				container.clearCustomData();
				container.remove();
			}
	
			if (element) {
				element.clearCustomData();
				if (editor.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE) {
					element.show();
					if (editor._.required) element.setAttribute('required', 'required');
				}
				delete editor.element;
			}
		}
	
		function loadTheme(editor) {
			var name = editor.name,
			    element = editor.element,
			    elementMode = editor.elementMode;
	
			// Get the HTML for the predefined spaces.
			var topHtml = editor.fire('uiSpace', { space: 'top', html: '' }).html;
			var bottomHtml = editor.fire('uiSpace', { space: 'bottom', html: '' }).html;
	
			var themedTpl = new CKEDITOR.template('<{outerEl}' + ' id="cke_{name}"' + ' class="{id} cke cke_reset cke_chrome cke_editor_{name} cke_{langDir} ' + CKEDITOR.env.cssClass + '" ' + ' dir="{langDir}"' + ' lang="{langCode}"' + ' role="application"' + (editor.title ? ' aria-labelledby="cke_{name}_arialbl"' : '') + '>' + (editor.title ? '<span id="cke_{name}_arialbl" class="cke_voice_label">{voiceLabel}</span>' : '') + '<{outerEl} class="cke_inner cke_reset" role="presentation">' + '{topHtml}' + '<{outerEl} id="{contentId}" class="cke_contents cke_reset" role="presentation"></{outerEl}>' + '{bottomHtml}' + '</{outerEl}>' + '</{outerEl}>');
	
			var container = CKEDITOR.dom.element.createFromHtml(themedTpl.output({
				id: editor.id,
				name: name,
				langDir: editor.lang.dir,
				langCode: editor.langCode,
				voiceLabel: editor.title,
				topHtml: topHtml ? '<span id="' + editor.ui.spaceId('top') + '" class="cke_top cke_reset_all" role="presentation" style="height:auto">' + topHtml + '</span>' : '',
				contentId: editor.ui.spaceId('contents'),
				bottomHtml: bottomHtml ? '<span id="' + editor.ui.spaceId('bottom') + '" class="cke_bottom cke_reset_all" role="presentation">' + bottomHtml + '</span>' : '',
				outerEl: CKEDITOR.env.ie ? 'span' : 'div' // #9571
			}));
	
			if (elementMode == CKEDITOR.ELEMENT_MODE_REPLACE) {
				element.hide();
				container.insertAfter(element);
			} else {
				element.append(container);
			}
	
			editor.container = container;
			editor.ui.contentsElement = editor.ui.space('contents');
	
			// Make top and bottom spaces unelectable, but not content space,
			// otherwise the editable area would be affected.
			topHtml && editor.ui.space('top').unselectable();
			bottomHtml && editor.ui.space('bottom').unselectable();
	
			var width = editor.config.width,
			    height = editor.config.height;
			if (width) container.setStyle('width', CKEDITOR.tools.cssLength(width));
	
			// The editor height is applied to the contents space.
			if (height) editor.ui.space('contents').setStyle('height', CKEDITOR.tools.cssLength(height));
	
			// Disable browser context menu for editor's chrome.
			container.disableContextMenu();
	
			// Redirect the focus into editor for webkit. (#5713)
			CKEDITOR.env.webkit && container.on('focus', function () {
				editor.focus();
			});
	
			editor.fireOnce('uiReady');
		}
	
		// Replace all textareas with the default class name.
		CKEDITOR.domReady(function () {
			CKEDITOR.replaceClass && CKEDITOR.replaceAll(CKEDITOR.replaceClass);
		});
	})();
	
	/**
	 * The current editing mode. An editing mode basically provides
	 * different ways of editing or viewing the editor content.
	 *
	 *		alert( CKEDITOR.instances.editor1.mode ); // (e.g.) 'wysiwyg'
	 *
	 * @readonly
	 * @property {String} mode
	 */
	
	/**
	 * The mode to load at the editor startup. It depends on the plugins
	 * loaded. By default, the `wysiwyg` and `source` modes are available.
	 *
	 *		config.startupMode = 'source';
	 *
	 * @cfg {String} [startupMode='wysiwyg']
	 * @member CKEDITOR.config
	 */
	CKEDITOR.config.startupMode = 'wysiwyg';
	
	/**
	 * Fired after the editor instance is resized through
	 * the {@link CKEDITOR.editor#method-resize CKEDITOR.resize} method.
	 *
	 * @event resize
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param {Object} data Available since CKEditor 4.5.
	 * @param {Number} data.outerHeight The height of the entire area that the editor covers.
	 * @param {Number} data.contentsHeight Editable area height in pixels.
	 * @param {Number} data.outerWidth The width of the entire area that the editor covers.
	 */
	
	/**
	 * Fired before changing the editing mode. See also
	 * {@link #beforeSetMode} and {@link #event-mode}.
	 *
	 * @event beforeModeUnload
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Fired before the editor mode is set. See also
	 * {@link #event-mode} and {@link #beforeModeUnload}.
	 *
	 * @since 3.5.3
	 * @event beforeSetMode
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param {String} data The name of the mode which is about to be set.
	 */
	
	/**
	 * Fired after setting the editing mode. See also {@link #beforeSetMode} and {@link #beforeModeUnload}
	 *
	 * @event mode
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */
	
	/**
	 * Fired when the editor (replacing a `<textarea>` which has a `required` attribute) is empty during form submission.
	 *
	 * This event replaces native required fields validation that the browsers cannot
	 * perform when CKEditor replaces `<textarea>` elements.
	 *
	 * You can cancel this event to prevent the page from submitting data.
	 *
	 *		editor.on( 'required', function( evt ) {
	 *			alert( 'Article content is required.' );
	 *			evt.cancel();
	 *		} );
	 *
	 * @event required
	 * @param {CKEDITOR.editor} editor This editor instance.
	 */

/***/ },
/* 47 */
/*!**************************!*\
  !*** ./core/editable.js ***!
  \**************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */(function(){var isNotWhitespace,isNotBookmark,isEmpty,isBogus,emptyParagraphRegexp,insert,fixTableAfterContentsDeletion,getHtmlFromRangeHelpers,extractHtmlFromRangeHelpers;/**
		 * Editable class which provides all editing related activities by
		 * the `contenteditable` element, dynamically get attached to editor instance.
		 *
		 * @class CKEDITOR.editable
		 * @extends CKEDITOR.dom.element
		 */CKEDITOR.editable=CKEDITOR.tools.createClass({base:CKEDITOR.dom.element,/**
			 * The constructor only stores generic editable creation logic that is commonly shared among
			 * all different editable elements.
			 *
			 * @constructor Creates an editable class instance.
			 * @param {CKEDITOR.editor} editor The editor instance on which the editable operates.
			 * @param {HTMLElement/CKEDITOR.dom.element} element Any DOM element that was as the editor's
			 * editing container, e.g. it could be either an HTML element with the `contenteditable` attribute
			 * set to the `true` that handles WYSIWYG editing or a `<textarea>` element that handles source editing.
			 */$:function(editor,element){// Transform the element into a CKEDITOR.dom.element instance.
	this.base(element.$||element);this.editor=editor;/**
				 * Indicates the initialization status of the editable element. The following statuses are available:
				 *
				 *	* **unloaded** &ndash; the initial state. The editable's instance was created but
				 *	is not fully loaded (in particular it has no data).
				 *	* **ready** &ndash; the editable is fully initialized. The `ready` status is set after
				 *	the first {@link CKEDITOR.editor#method-setData} is called.
				 *	* **detached** &ndash; the editable was detached.
				 *
				 * @since 4.3.3
				 * @readonly
				 * @property {String}
				 */this.status='unloaded';/**
				 * Indicates whether the editable element gained focus.
				 *
				 * @property {Boolean} hasFocus
				 */this.hasFocus=false;// The bootstrapping logic.
	this.setup();},proto:{focus:function(){var active;// [Webkit] When DOM focus is inside of nested contenteditable elements,
	// apply focus on the main editable will compromise it's text selection.
	if(CKEDITOR.env.webkit&&!this.hasFocus){// Restore focus on element which we cached (on selectionCheck) as previously active.
	active=this.editor._.previousActive||this.getDocument().getActive();if(this.contains(active)){active.focus();return;}}// [IE] Use instead "setActive" method to focus the editable if it belongs to
	// the host page document, to avoid bringing an unexpected scroll.
	try{this.$[CKEDITOR.env.ie&&this.getDocument().equals(CKEDITOR.document)?'setActive':'focus']();}catch(e){// IE throws unspecified error when focusing editable after closing dialog opened on nested editable.
	if(!CKEDITOR.env.ie)throw e;}// Remedy if Safari doens't applies focus properly. (#279)
	if(CKEDITOR.env.safari&&!this.isInline()){active=CKEDITOR.document.getActive();if(!active.equals(this.getWindow().getFrame()))this.getWindow().focus();}},/**
				 * Overrides {@link CKEDITOR.dom.element#on} to have special `focus/blur` handling.
				 * The `focusin/focusout` events are used in IE to replace regular `focus/blur` events
				 * because we want to avoid the asynchronous nature of later ones.
				 */on:function(name,fn){var args=Array.prototype.slice.call(arguments,0);if(CKEDITOR.env.ie&&/^focus|blur$/.exec(name)){name=name=='focus'?'focusin':'focusout';// The "focusin/focusout" events bubbled, e.g. If there are elements with layout
	// they fire this event when clicking in to edit them but it must be ignored
	// to allow edit their contents. (#4682)
	fn=isNotBubbling(fn,this);args[0]=name;args[1]=fn;}return CKEDITOR.dom.element.prototype.on.apply(this,args);},/**
				 * Registers an event listener that needs to be removed when detaching this editable.
				 * This means that it will be automatically removed when {@link #detach} is executed,
				 * for example on {@link CKEDITOR.editor#setMode changing editor mode} or destroying editor.
				 *
				 * Except for `obj` all other arguments have the same meaning as in {@link CKEDITOR.event#on}.
				 *
				 * This method is strongly related to the {@link CKEDITOR.editor#contentDom} and
				 * {@link CKEDITOR.editor#contentDomUnload} events, because they are fired
				 * when an editable is being attached and detached. Therefore, this method is usually used
				 * in the following way:
				 *
				 *		editor.on( 'contentDom', function() {
				 *			var editable = editor.editable();
				 *			editable.attachListener( editable, 'mousedown', function() {
				 *				// ...
				 *			} );
				 *		} );
				 *
				 * This code will attach the `mousedown` listener every time a new editable is attached
				 * to the editor, which in classic (`iframe`-based) editor happens every time the
				 * data or the mode is set. This listener will also be removed when that editable is detached.
				 *
				 * It is also possible to attach a listener to another object (e.g. to a document).
				 *
				 *		editor.on( 'contentDom', function() {
				 *			editor.editable().attachListener( editor.document, 'mousedown', function() {
				 *				// ...
				 *			} );
				 *		} );
				 *
				 * @param {CKEDITOR.event} obj The element/object to which the listener will be attached. Every object
				 * which inherits from {@link CKEDITOR.event} may be used including {@link CKEDITOR.dom.element},
				 * {@link CKEDITOR.dom.document}, and {@link CKEDITOR.editable}.
				 * @param {String} eventName The name of the event that will be listened to.
				 * @param {Function} listenerFunction The function listening to the
				 * event. A single {@link CKEDITOR.eventInfo} object instance
				 * containing all the event data is passed to this function.
				 * @param {Object} [scopeObj] The object used to scope the listener
				 * call (the `this` object). If omitted, the current object is used.
				 * @param {Object} [listenerData] Data to be sent as the
				 * {@link CKEDITOR.eventInfo#listenerData} when calling the listener.
				 * @param {Number} [priority=10] The listener priority. Lower priority
				 * listeners are called first. Listeners with the same priority
				 * value are called in the registration order.
				 * @returns {Object} An object containing the `removeListener`
				 * function that can be used to remove the listener at any time.
				 */attachListener:function(obj/*, event, fn, scope, listenerData, priority*/){!this._.listeners&&(this._.listeners=[]);// Register the listener.
	var args=Array.prototype.slice.call(arguments,1),listener=obj.on.apply(obj,args);this._.listeners.push(listener);return listener;},/**
				 * Remove all event listeners registered from {@link #attachListener}.
				 */clearListeners:function(){var listeners=this._.listeners;// Don't get broken by this.
	try{while(listeners.length)listeners.pop().removeListener();}catch(e){}},/**
				 * Restore all attribution changes made by {@link #changeAttr }.
				 */restoreAttrs:function(){var changes=this._.attrChanges,orgVal;for(var attr in changes){if(changes.hasOwnProperty(attr)){orgVal=changes[attr];// Restore original attribute.
	orgVal!==null?this.setAttribute(attr,orgVal):this.removeAttribute(attr);}}},/**
				 * Adds a CSS class name to this editable that needs to be removed on detaching.
				 *
				 * @param {String} className The class name to be added.
				 * @see CKEDITOR.dom.element#addClass
				 */attachClass:function(cls){var classes=this.getCustomData('classes');if(!this.hasClass(cls)){!classes&&(classes=[]),classes.push(cls);this.setCustomData('classes',classes);this.addClass(cls);}},/**
				 * Make an attribution change that would be reverted on editable detaching.
				 * @param {String} attr The attribute name to be changed.
				 * @param {String} val The value of specified attribute.
				 */changeAttr:function(attr,val){var orgVal=this.getAttribute(attr);if(val!==orgVal){!this._.attrChanges&&(this._.attrChanges={});// Saved the original attribute val.
	if(!(attr in this._.attrChanges))this._.attrChanges[attr]=orgVal;this.setAttribute(attr,val);}},/**
				 * Low-level method for inserting text into the editable.
				 * See the {@link CKEDITOR.editor#method-insertText} method which is the editor-level API
				 * for this purpose.
				 *
				 * @param {String} text
				 */insertText:function(text){// Focus the editor before calling transformPlainTextToHtml. (#12726)
	this.editor.focus();this.insertHtml(this.transformPlainTextToHtml(text),'text');},/**
				 * Transforms plain text to HTML based on current selection and {@link CKEDITOR.editor#activeEnterMode}.
				 *
				 * @since 4.5
				 * @param {String} text Text to transform.
				 * @returns {String} HTML generated from the text.
				 */transformPlainTextToHtml:function(text){var enterMode=this.editor.getSelection().getStartElement().hasAscendant('pre',true)?CKEDITOR.ENTER_BR:this.editor.activeEnterMode;return CKEDITOR.tools.transformPlainTextToHtml(text,enterMode);},/**
				 * Low-level method for inserting HTML into the editable.
				 * See the {@link CKEDITOR.editor#method-insertHtml} method which is the editor-level API
				 * for this purpose.
				 *
				 * This method will insert HTML into the current selection or a given range. It also creates an undo snapshot,
				 * scrolls the viewport to the insertion and selects the range next to the inserted content.
				 * If you want to insert HTML without additional operations use {@link #method-insertHtmlIntoRange}.
				 *
				 * Fires the {@link CKEDITOR.editor#event-afterInsertHtml} event.
				 *
				 * @param {String} data The HTML to be inserted.
				 * @param {String} [mode='html'] See {@link CKEDITOR.editor#method-insertHtml}'s param.
				 * @param {CKEDITOR.dom.range} [range] If specified, the HTML will be inserted into the range
				 * instead of into the selection. The selection will be placed at the end of the insertion (like in the normal case).
				 * Introduced in CKEditor 4.5.
				 */insertHtml:function(data,mode,range){var editor=this.editor;editor.focus();editor.fire('saveSnapshot');if(!range){// HTML insertion only considers the first range.
	// Note: getRanges will be overwritten for tests since we want to test
	// custom ranges and bypass native selections.
	range=editor.getSelection().getRanges()[0];}// Default mode is 'html'.
	insert(this,mode||'html',data,range);// Make the final range selection.
	range.select();afterInsert(this);this.editor.fire('afterInsertHtml',{});},/**
				 * Inserts HTML into the position in the editor determined by the range.
				 *
				 * **Note:** This method does not {@link CKEDITOR.editor#saveSnapshot save undo snapshots} nor selects inserted
				 * HTML. If you want to do it, use {@link #method-insertHtml}.
				 *
				 * Fires the {@link CKEDITOR.editor#event-afterInsertHtml} event.
				 *
				 * @since 4.5
				 * @param {String} data HTML code to be inserted into the editor.
				 * @param {CKEDITOR.dom.range} range The range as a place of insertion.
				 * @param {String} [mode='html'] Mode in which HTML will be inserted.
				 * See {@link CKEDITOR.editor#method-insertHtml}.
				 */insertHtmlIntoRange:function(data,range,mode){// Default mode is 'html'
	insert(this,mode||'html',data,range);this.editor.fire('afterInsertHtml',{intoRange:range});},/**
				 * Low-level method for inserting an element into the editable.
				 * See the {@link CKEDITOR.editor#method-insertElement} method which is the editor-level API
				 * for this purpose.
				 *
				 * This method will insert the element into the current selection or a given range. It also creates an undo
				 * snapshot, scrolls the viewport to the insertion and selects the range next to the inserted content.
				 * If you want to insert an element without additional operations use {@link #method-insertElementIntoRange}.
				 *
				 * @param {CKEDITOR.dom.element} element The element to insert.
				 * @param {CKEDITOR.dom.range} [range] If specified, the element will be inserted into the range
				 * instead of into the selection.
				 */insertElement:function(element,range){var editor=this.editor;// Prepare for the insertion. For example - focus editor (#11848).
	editor.focus();editor.fire('saveSnapshot');var enterMode=editor.activeEnterMode,selection=editor.getSelection(),elementName=element.getName(),isBlock=CKEDITOR.dtd.$block[elementName];if(!range){range=selection.getRanges()[0];}// Insert element into first range only and ignore the rest (#11183).
	if(this.insertElementIntoRange(element,range)){range.moveToPosition(element,CKEDITOR.POSITION_AFTER_END);// If we're inserting a block element, the new cursor position must be
	// optimized. (#3100,#5436,#8950)
	if(isBlock){// Find next, meaningful element.
	var next=element.getNext(function(node){return isNotEmpty(node)&&!isBogus(node);});if(next&&next.type==CKEDITOR.NODE_ELEMENT&&next.is(CKEDITOR.dtd.$block)){// If the next one is a text block, move cursor to the start of it's content.
	if(next.getDtd()['#'])range.moveToElementEditStart(next);// Otherwise move cursor to the before end of the last element.
	else range.moveToElementEditEnd(element);}// Open a new line if the block is inserted at the end of parent.
	else if(!next&&enterMode!=CKEDITOR.ENTER_BR){next=range.fixBlock(true,enterMode==CKEDITOR.ENTER_DIV?'div':'p');range.moveToElementEditStart(next);}}}// Set up the correct selection.
	selection.selectRanges([range]);afterInsert(this);},/**
				 * Alias for {@link #insertElement}.
				 *
				 * @deprecated
				 * @param {CKEDITOR.dom.element} element The element to be inserted.
				 */insertElementIntoSelection:function(element){this.insertElement(element);},/**
				 * Inserts an element into the position in the editor determined by the range.
				 *
				 * **Note:** This method does not {@link CKEDITOR.editor#saveSnapshot save undo snapshots} nor selects the inserted
				 * element. If you want to do it, use the {@link #method-insertElement} method.
				 *
				 * @param {CKEDITOR.dom.element} element The element to be inserted.
				 * @param {CKEDITOR.dom.range} range The range as a place of insertion.
				 * @returns {Boolean} Informs whether the insertion was successful.
				 */insertElementIntoRange:function(element,range){var editor=this.editor,enterMode=editor.config.enterMode,elementName=element.getName(),isBlock=CKEDITOR.dtd.$block[elementName];if(range.checkReadOnly())return false;// Remove the original contents, merge split nodes.
	range.deleteContents(1);// If range is placed in inermediate element (not td or th), we need to do three things:
	// * fill emptied <td/th>s with if browser needs them,
	// * remove empty text nodes so IE8 won't crash (http://dev.ckeditor.com/ticket/11183#comment:8),
	// * fix structure and move range into the <td/th> element.
	if(range.startContainer.type==CKEDITOR.NODE_ELEMENT&&range.startContainer.is({tr:1,table:1,tbody:1,thead:1,tfoot:1}))fixTableAfterContentsDeletion(range);// If we're inserting a block at dtd-violated position, split
	// the parent blocks until we reach blockLimit.
	var current,dtd;if(isBlock){while((current=range.getCommonAncestor(0,1))&&(dtd=CKEDITOR.dtd[current.getName()])&&!(dtd&&dtd[elementName])){// Split up inline elements.
	if(current.getName()in CKEDITOR.dtd.span)range.splitElement(current);// If we're in an empty block which indicate a new paragraph,
	// simply replace it with the inserting block.(#3664)
	else if(range.checkStartOfBlock()&&range.checkEndOfBlock()){range.setStartBefore(current);range.collapse(true);current.remove();}else{range.splitBlock(enterMode==CKEDITOR.ENTER_DIV?'div':'p',editor.editable());}}}// Insert the new node.
	range.insertNode(element);// Return true if insertion was successful.
	return true;},/**
				 * @see CKEDITOR.editor#setData
				 */setData:function(data,isSnapshot){if(!isSnapshot)data=this.editor.dataProcessor.toHtml(data);this.setHtml(data);this.fixInitialSelection();// Editable is ready after first setData.
	if(this.status=='unloaded')this.status='ready';this.editor.fire('dataReady');},/**
				 * @see CKEDITOR.editor#getData
				 */getData:function(isSnapshot){var data=this.getHtml();if(!isSnapshot)data=this.editor.dataProcessor.toDataFormat(data);return data;},/**
				 * Changes the read-only state of this editable.
				 *
				 * @param {Boolean} isReadOnly
				 */setReadOnly:function(isReadOnly){this.setAttribute('contenteditable',!isReadOnly);},/**
				 * Detaches this editable object from the DOM (removes classes, listeners, etc.)
				 */detach:function(){// Cleanup the element.
	this.removeClass('cke_editable');this.status='detached';// Save the editor reference which will be lost after
	// calling detach from super class.
	var editor=this.editor;this._.detach();delete editor.document;delete editor.window;},/**
				 * Checks if the editable is one of the host page elements, indicates
				 * an inline editing environment.
				 *
				 * @returns {Boolean}
				 */isInline:function(){return this.getDocument().equals(CKEDITOR.document);},/**
				 * Fixes the selection and focus which may be in incorrect state after
				 * editable's inner HTML was overwritten.
				 *
				 * If the editable did not have focus, then the selection will be fixed when the editable
				 * is focused for the first time. If the editable already had focus, then the selection will
				 * be fixed immediately.
				 *
				 * To understand the problem see:
				 *
				 * * http://tests.ckeditor.dev:1030/tests/core/selection/manual/focusaftersettingdata
				 * * http://tests.ckeditor.dev:1030/tests/core/selection/manual/focusafterundoing
				 * * http://tests.ckeditor.dev:1030/tests/core/selection/manual/selectionafterfocusing
				 * * http://tests.ckeditor.dev:1030/tests/plugins/newpage/manual/selectionafternewpage
				 *
				 * @since 4.4.6
				 * @private
				 */fixInitialSelection:function(){var that=this;// Deal with IE8- IEQM (the old MS selection) first.
	if(CKEDITOR.env.ie&&(CKEDITOR.env.version<9||CKEDITOR.env.quirks)){if(this.hasFocus){this.focus();fixMSSelection();}return;}// If editable did not have focus, fix the selection when it is first focused.
	if(!this.hasFocus){this.once('focus',function(){fixSelection();},null,null,-999);// If editable had focus, fix the selection immediately.
	}else{this.focus();fixSelection();}function fixSelection(){var $doc=that.getDocument().$,$sel=$doc.getSelection();if(requiresFix($sel)){var range=new CKEDITOR.dom.range(that);range.moveToElementEditStart(that);var $range=$doc.createRange();$range.setStart(range.startContainer.$,range.startOffset);$range.collapse(true);$sel.removeAllRanges();$sel.addRange($range);}}function requiresFix($sel){// This condition covers most broken cases after setting data.
	if($sel.anchorNode&&$sel.anchorNode==that.$){return true;}// Fix for:
	// http://tests.ckeditor.dev:1030/tests/core/selection/manual/focusaftersettingdata
	// (the inline editor TC)
	if(CKEDITOR.env.webkit){var active=that.getDocument().getActive();if(active&&active.equals(that)&&!$sel.anchorNode){return true;}}}function fixMSSelection(){var $doc=that.getDocument().$,$sel=$doc.selection,active=that.getDocument().getActive();if($sel.type=='None'&&active.equals(that)){var range=new CKEDITOR.dom.range(that),parentElement,$range=$doc.body.createTextRange();range.moveToElementEditStart(that);parentElement=range.startContainer;if(parentElement.type!=CKEDITOR.NODE_ELEMENT){parentElement=parentElement.getParent();}$range.moveToElementText(parentElement.$);$range.collapse(true);$range.select();}}},/**
				 * The base of the {@link CKEDITOR.editor#getSelectedHtml} method.
				 *
				 * @since 4.5
				 * @method getHtmlFromRange
				 * @param {CKEDITOR.dom.range} range
				 * @returns {CKEDITOR.dom.documentFragment}
				 */getHtmlFromRange:function(range){// There's nothing to return if range is collapsed.
	if(range.collapsed)return new CKEDITOR.dom.documentFragment(range.document);// Info object passed between methods.
	var that={doc:this.getDocument(),// Leave original range object untouched.
	range:range.clone()};getHtmlFromRangeHelpers.eol.detect(that,this);getHtmlFromRangeHelpers.bogus.exclude(that);getHtmlFromRangeHelpers.cell.shrink(that);that.fragment=that.range.cloneContents();getHtmlFromRangeHelpers.tree.rebuild(that,this);getHtmlFromRangeHelpers.eol.fix(that,this);return new CKEDITOR.dom.documentFragment(that.fragment.$);},/**
				 * The base of the {@link CKEDITOR.editor#extractSelectedHtml} method.
				 *
				 * **Note:** The range is modified so it matches the desired selection after extraction
				 * even though the selection is not made.
				 *
				 * @since 4.5
				 * @param {CKEDITOR.dom.range} range
				 * @param {Boolean} [removeEmptyBlock=false] See {@link CKEDITOR.editor#extractSelectedHtml}'s parameter.
				 * Note that the range will not be modified if this parameter is set to `true`.
				 * @returns {CKEDITOR.dom.documentFragment} The extracted fragment of the editable content.
				 */extractHtmlFromRange:function(range,removeEmptyBlock){var helpers=extractHtmlFromRangeHelpers,that={range:range,doc:range.document},// Since it is quite hard to build a valid documentFragment
	// out of extracted contents because DOM changes, let's mimic
	// extracted HTML with #getHtmlFromRange. Yep. It's a hack.
	extractedFragment=this.getHtmlFromRange(range);// Collapsed range means that there's nothing to extract.
	if(range.collapsed){range.optimize();return extractedFragment;}// Include inline element if possible.
	range.enlarge(CKEDITOR.ENLARGE_INLINE,1);// This got to be done before bookmarks are created because purging
	// depends on the position of the range at the boundaries of the table,
	// usually distorted by bookmark spans.
	helpers.table.detectPurge(that);// We'll play with DOM, let's hold the position of the range.
	that.bookmark=range.createBookmark();// While bookmarked, make unaccessible, to make sure that none of the methods
	// will try to use it (they should use that.bookmark).
	// This is done because ranges get desynchronized with the DOM when more bookmarks
	// is created (as for instance that.targetBookmark).
	delete that.range;// The range to be restored after extraction should be kept
	// outside of the range, so it's not removed by range.extractContents.
	var targetRange=this.editor.createRange();targetRange.moveToPosition(that.bookmark.startNode,CKEDITOR.POSITION_BEFORE_START);that.targetBookmark=targetRange.createBookmark();// Execute content-specific detections.
	helpers.list.detectMerge(that,this);helpers.table.detectRanges(that,this);helpers.block.detectMerge(that,this);// Simply, do the job.
	if(that.tableContentsRanges){helpers.table.deleteRanges(that);// Done here only to remove bookmark's spans.
	range.moveToBookmark(that.bookmark);that.range=range;}else{// To use the range we need to restore the bookmark and make
	// the range accessible again.
	range.moveToBookmark(that.bookmark);that.range=range;range.extractContents(helpers.detectExtractMerge(that));}// Move working range to desired, pre-computed position.
	range.moveToBookmark(that.targetBookmark);// Make sure range is always anchored in an element. For consistency.
	range.optimize();// It my happen that the uncollapsed range which referred to a valid selection,
	// will be placed in an uneditable location after being collapsed:
	// <tr>[<td>x</td>]</tr> -> <tr>[]<td>x</td></tr> -> <tr><td>[]x</td></tr>
	helpers.fixUneditableRangePosition(range);// Execute content-specific post-extract routines.
	helpers.list.merge(that,this);helpers.table.purge(that,this);helpers.block.merge(that,this);// Remove empty block, duh!
	if(removeEmptyBlock){var path=range.startPath();// <p><b>^</b></p> is empty block.
	if(range.checkStartOfBlock()&&range.checkEndOfBlock()&&path.block&&!range.root.equals(path.block)&&// Do not remove a block with bookmarks. (#13465)
	!hasBookmarks(path.block)){range.moveToPosition(path.block,CKEDITOR.POSITION_BEFORE_START);path.block.remove();}}else{// Auto paragraph, if needed.
	helpers.autoParagraph(this.editor,range);// Let's have a bogus next to the caret, if needed.
	if(isEmpty(range.startContainer))range.startContainer.appendBogus();}// Merge inline siblings if any around the caret.
	range.startContainer.mergeSiblings();return extractedFragment;},/**
				 * Editable element bootstrapping.
				 *
				 * @private
				 */setup:function(){var editor=this.editor;// Handle the load/read of editor data/snapshot.
	this.attachListener(editor,'beforeGetData',function(){var data=this.getData();// Post processing html output of wysiwyg editable.
	if(!this.is('textarea')){// Reset empty if the document contains only one empty paragraph.
	if(editor.config.ignoreEmptyParagraph!==false)data=data.replace(emptyParagraphRegexp,function(match,lookback){return lookback;});}editor.setData(data,null,1);},this);this.attachListener(editor,'getSnapshot',function(evt){evt.data=this.getData(1);},this);this.attachListener(editor,'afterSetData',function(){this.setData(editor.getData(1));},this);this.attachListener(editor,'loadSnapshot',function(evt){this.setData(evt.data,1);},this);// Delegate editor focus/blur to editable.
	this.attachListener(editor,'beforeFocus',function(){var sel=editor.getSelection(),ieSel=sel&&sel.getNative();// IE considers control-type element as separate
	// focus host when selected, avoid destroying the
	// selection in such case. (#5812) (#8949)
	if(ieSel&&ieSel.type=='Control')return;this.focus();},this);this.attachListener(editor,'insertHtml',function(evt){this.insertHtml(evt.data.dataValue,evt.data.mode,evt.data.range);},this);this.attachListener(editor,'insertElement',function(evt){this.insertElement(evt.data);},this);this.attachListener(editor,'insertText',function(evt){this.insertText(evt.data);},this);// Update editable state.
	this.setReadOnly(editor.readOnly);// The editable class.
	this.attachClass('cke_editable');// The element mode css class.
	if(editor.elementMode==CKEDITOR.ELEMENT_MODE_INLINE){this.attachClass('cke_editable_inline');}else if(editor.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE||editor.elementMode==CKEDITOR.ELEMENT_MODE_APPENDTO){this.attachClass('cke_editable_themed');}this.attachClass('cke_contents_'+editor.config.contentsLangDirection);// Setup editor keystroke handlers on this element.
	var keystrokeHandler=editor.keystrokeHandler;// If editor is read-only, then make sure that BACKSPACE key
	// is blocked to prevent browser history navigation.
	keystrokeHandler.blockedKeystrokes[8]=+editor.readOnly;editor.keystrokeHandler.attach(this);// Update focus states.
	this.on('blur',function(){this.hasFocus=false;},null,null,-1);this.on('focus',function(){this.hasFocus=true;},null,null,-1);// Register to focus manager.
	editor.focusManager.add(this);// Inherit the initial focus on editable element.
	if(this.equals(CKEDITOR.document.getActive())){this.hasFocus=true;// Pending until this editable has attached.
	editor.once('contentDom',function(){editor.focusManager.focus(this);},this);}// Apply tab index on demand, with original direction saved.
	if(this.isInline()){// tabIndex of the editable is different than editor's one.
	// Update the attribute of the editable.
	this.changeAttr('tabindex',editor.tabIndex);}// The above is all we'll be doing for a <textarea> editable.
	if(this.is('textarea'))return;// The DOM document which the editing acts upon.
	editor.document=this.getDocument();editor.window=this.getWindow();var doc=editor.document;this.changeAttr('spellcheck',!editor.config.disableNativeSpellChecker);// Apply contents direction on demand, with original direction saved.
	var dir=editor.config.contentsLangDirection;if(this.getDirection(1)!=dir)this.changeAttr('dir',dir);// Create the content stylesheet for this document.
	var styles=CKEDITOR.getCss();if(styles){var head=doc.getHead(),stylesElement=head.getCustomData('stylesheet');if(!stylesElement){var sheet=doc.appendStyleText(styles);sheet=new CKEDITOR.dom.element(sheet.ownerNode||sheet.owningElement);head.setCustomData('stylesheet',sheet);sheet.data('cke-temp',1);}else if(styles!=stylesElement.getText()){CKEDITOR.env.ie&&CKEDITOR.env.version<9?stylesElement.$.styleSheet.cssText=styles:stylesElement.setText(styles);}}// Update the stylesheet sharing count.
	var ref=doc.getCustomData('stylesheet_ref')||0;doc.setCustomData('stylesheet_ref',ref+1);// Pass this configuration to styles system.
	this.setCustomData('cke_includeReadonly',!editor.config.disableReadonlyStyling);// Prevent the browser opening read-only links. (#6032 & #10912)
	this.attachListener(this,'click',function(evt){evt=evt.data;var link=new CKEDITOR.dom.elementPath(evt.getTarget(),this).contains('a');if(link&&evt.$.button!=2&&link.isReadOnly())evt.preventDefault();});var backspaceOrDelete={8:1,46:1};// Override keystrokes which should have deletion behavior
	//  on fully selected element . (#4047) (#7645)
	this.attachListener(editor,'key',function(evt){if(editor.readOnly)return true;// Use getKey directly in order to ignore modifiers.
	// Justification: http://dev.ckeditor.com/ticket/11861#comment:13
	var keyCode=evt.data.domEvent.getKey(),isHandled;// Backspace OR Delete.
	if(keyCode in backspaceOrDelete){var sel=editor.getSelection(),selected,range=sel.getRanges()[0],path=range.startPath(),block,parent,next,rtl=keyCode==8;if(// [IE<11] Remove selected image/anchor/etc here to avoid going back in history. (#10055)
	CKEDITOR.env.ie&&CKEDITOR.env.version<11&&(selected=sel.getSelectedElement())||(// Remove the entire list/table on fully selected content. (#7645)
	selected=getSelectedTableList(sel))){// Make undo snapshot.
	editor.fire('saveSnapshot');// Delete any element that 'hasLayout' (e.g. hr,table) in IE8 will
	// break up the selection, safely manage it here. (#4795)
	range.moveToPosition(selected,CKEDITOR.POSITION_BEFORE_START);// Remove the control manually.
	selected.remove();range.select();editor.fire('saveSnapshot');isHandled=1;}else if(range.collapsed){// Handle the following special cases: (#6217)
	// 1. Del/Backspace key before/after table;
	// 2. Backspace Key after start of table.
	if((block=path.block)&&(next=block[rtl?'getPrevious':'getNext'](isNotWhitespace))&&next.type==CKEDITOR.NODE_ELEMENT&&next.is('table')&&range[rtl?'checkStartOfBlock':'checkEndOfBlock']()){editor.fire('saveSnapshot');// Remove the current empty block.
	if(range[rtl?'checkEndOfBlock':'checkStartOfBlock']())block.remove();// Move cursor to the beginning/end of table cell.
	range['moveToElementEdit'+(rtl?'End':'Start')](next);range.select();editor.fire('saveSnapshot');isHandled=1;}else if(path.blockLimit&&path.blockLimit.is('td')&&(parent=path.blockLimit.getAscendant('table'))&&range.checkBoundaryOfElement(parent,rtl?CKEDITOR.START:CKEDITOR.END)&&(next=parent[rtl?'getPrevious':'getNext'](isNotWhitespace))){editor.fire('saveSnapshot');// Move cursor to the end of previous block.
	range['moveToElementEdit'+(rtl?'End':'Start')](next);// Remove any previous empty block.
	if(range.checkStartOfBlock()&&range.checkEndOfBlock())next.remove();else range.select();editor.fire('saveSnapshot');isHandled=1;}// BACKSPACE/DEL pressed at the start/end of table cell.
	else if((parent=path.contains(['td','th','caption']))&&range.checkBoundaryOfElement(parent,rtl?CKEDITOR.START:CKEDITOR.END)){isHandled=1;}}}return!isHandled;});// On IE>=11 we need to fill blockless editable with <br> if it was deleted.
	if(editor.blockless&&CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller){this.attachListener(this,'keyup',function(evt){if(evt.data.getKeystroke()in backspaceOrDelete&&!this.getFirst(isNotEmpty)){this.appendBogus();// Set the selection before bogus, because IE tends to put it after.
	var range=editor.createRange();range.moveToPosition(this,CKEDITOR.POSITION_AFTER_START);range.select();}});}this.attachListener(this,'dblclick',function(evt){if(editor.readOnly)return false;var data={element:evt.data.getTarget()};editor.fire('doubleclick',data);});// Prevent automatic submission in IE #6336
	CKEDITOR.env.ie&&this.attachListener(this,'click',blockInputClick);// Gecko/Webkit need some help when selecting control type elements. (#3448)
	// We apply same behavior for IE Edge. (#13386)
	if(!CKEDITOR.env.ie||CKEDITOR.env.edge){this.attachListener(this,'mousedown',function(ev){var control=ev.data.getTarget();// #11727. Note: htmlDP assures that input/textarea/select have contenteditable=false
	// attributes. However, they also have data-cke-editable attribute, so isReadOnly() returns false,
	// and therefore those elements are correctly selected by this code.
	if(control.is('img','hr','input','textarea','select')&&!control.isReadOnly()){editor.getSelection().selectElement(control);// Prevent focus from stealing from the editable. (#9515)
	if(control.is('input','textarea','select'))ev.data.preventDefault();}});}// For some reason, after click event is done, IE Edge loses focus on the selected element. (#13386)
	if(CKEDITOR.env.edge){this.attachListener(this,'mouseup',function(ev){var selectedElement=ev.data.getTarget();if(selectedElement&&selectedElement.is('img')){editor.getSelection().selectElement(selectedElement);}});}// Prevent right click from selecting an empty block even
	// when selection is anchored inside it. (#5845)
	if(CKEDITOR.env.gecko){this.attachListener(this,'mouseup',function(ev){if(ev.data.$.button==2){var target=ev.data.getTarget();if(!target.getOuterHtml().replace(emptyParagraphRegexp,'')){var range=editor.createRange();range.moveToElementEditStart(target);range.select(true);}}});}// Webkit: avoid from editing form control elements content.
	if(CKEDITOR.env.webkit){// Prevent from tick checkbox/radiobox/select
	this.attachListener(this,'click',function(ev){if(ev.data.getTarget().is('input','select'))ev.data.preventDefault();});// Prevent from editig textfield/textarea value.
	this.attachListener(this,'mouseup',function(ev){if(ev.data.getTarget().is('input','textarea'))ev.data.preventDefault();});}// Prevent Webkit/Blink from going rogue when joining
	// blocks on BACKSPACE/DEL (#11861,#9998).
	if(CKEDITOR.env.webkit){this.attachListener(editor,'key',function(evt){if(editor.readOnly){return true;}// Use getKey directly in order to ignore modifiers.
	// Justification: http://dev.ckeditor.com/ticket/11861#comment:13
	var key=evt.data.domEvent.getKey();if(!(key in backspaceOrDelete))return;var backspace=key==8,range=editor.getSelection().getRanges()[0],startPath=range.startPath();if(range.collapsed){if(!mergeBlocksCollapsedSelection(editor,range,backspace,startPath))return;}else{if(!mergeBlocksNonCollapsedSelection(editor,range,startPath))return;}// Scroll to the new position of the caret (#11960).
	editor.getSelection().scrollIntoView();editor.fire('saveSnapshot');return false;},this,null,100);// Later is better – do not override existing listeners.
	}}},_:{detach:function(){// Update the editor cached data with current data.
	this.editor.setData(this.editor.getData(),0,1);this.clearListeners();this.restoreAttrs();// Cleanup our custom classes.
	var classes;if(classes=this.removeCustomData('classes')){while(classes.length)this.removeClass(classes.pop());}// Remove contents stylesheet from document if it's the last usage.
	if(!this.is('textarea')){var doc=this.getDocument(),head=doc.getHead();if(head.getCustomData('stylesheet')){var refs=doc.getCustomData('stylesheet_ref');if(! --refs){doc.removeCustomData('stylesheet_ref');var sheet=head.removeCustomData('stylesheet');sheet.remove();}else{doc.setCustomData('stylesheet_ref',refs);}}}this.editor.fire('contentDomUnload');// Free up the editor reference.
	delete this.editor;}}});/**
		 * Creates, retrieves or detaches an editable element of the editor.
		 * This method should always be used instead of calling {@link CKEDITOR.editable} directly.
		 *
		 * @method editable
		 * @member CKEDITOR.editor
		 * @param {CKEDITOR.dom.element/CKEDITOR.editable} elementOrEditable The
		 * DOM element to become the editable or a {@link CKEDITOR.editable} object.
		 */CKEDITOR.editor.prototype.editable=function(element){var editable=this._.editable;// This editor has already associated with
	// an editable element, silently fails.
	if(editable&&element)return 0;if(arguments.length){editable=this._.editable=element?element instanceof CKEDITOR.editable?element:new CKEDITOR.editable(this,element):(// Detach the editable from editor.
	editable&&editable.detach(),null);}// Just retrieve the editable.
	return editable;};CKEDITOR.on('instanceLoaded',function(evt){var editor=evt.editor;// and flag that the element was locked by our code so it'll be editable by the editor functions (#6046).
	editor.on('insertElement',function(evt){var element=evt.data;if(element.type==CKEDITOR.NODE_ELEMENT&&(element.is('input')||element.is('textarea'))){// // The element is still not inserted yet, force attribute-based check.
	if(element.getAttribute('contentEditable')!='false')element.data('cke-editable',element.hasAttribute('contenteditable')?'true':'1');element.setAttribute('contentEditable',false);}});editor.on('selectionChange',function(evt){if(editor.readOnly)return;// Auto fixing on some document structure weakness to enhance usabilities. (#3190 and #3189)
	var sel=editor.getSelection();// Do it only when selection is not locked. (#8222)
	if(sel&&!sel.isLocked){var isDirty=editor.checkDirty();// Lock undoM before touching DOM to prevent
	// recording these changes as separate snapshot.
	editor.fire('lockSnapshot');fixDom(evt);editor.fire('unlockSnapshot');!isDirty&&editor.resetDirty();}});});CKEDITOR.on('instanceCreated',function(evt){var editor=evt.editor;editor.on('mode',function(){var editable=editor.editable();// Setup proper ARIA roles and properties for inline editable, classic
	// (iframe-based) editable is instead handled by plugin.
	if(editable&&editable.isInline()){var ariaLabel=editor.title;editable.changeAttr('role','textbox');editable.changeAttr('aria-label',ariaLabel);if(ariaLabel)editable.changeAttr('title',ariaLabel);var helpLabel=editor.fire('ariaEditorHelpLabel',{}).label;if(helpLabel){// Put the voice label in different spaces, depending on element mode, so
	// the DOM element get auto detached on mode reload or editor destroy.
	var ct=this.ui.space(this.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?'top':'contents');if(ct){var ariaDescId=CKEDITOR.tools.getNextId(),desc=CKEDITOR.dom.element.createFromHtml('<span id="'+ariaDescId+'" class="cke_voice_label">'+helpLabel+'</span>');ct.append(desc);editable.changeAttr('aria-describedby',ariaDescId);}}}});});// #9222: Show text cursor in Gecko.
	// Show default cursor over control elements on all non-IEs.
	CKEDITOR.addCss('.cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}');//
	//
	// Bazillion helpers for the editable class and above listeners.
	//
	//
	isNotWhitespace=CKEDITOR.dom.walker.whitespaces(true),isNotBookmark=CKEDITOR.dom.walker.bookmark(false,true),isEmpty=CKEDITOR.dom.walker.empty(),isBogus=CKEDITOR.dom.walker.bogus(),// Matching an empty paragraph at the end of document.
	emptyParagraphRegexp=/(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi;// Auto-fixing block-less content by wrapping paragraph (#3190), prevent
	// non-exitable-block by padding extra br.(#3189)
	// Returns truly value when dom was changed, falsy otherwise.
	function fixDom(evt){var editor=evt.editor,path=evt.data.path,blockLimit=path.blockLimit,selection=evt.data.selection,range=selection.getRanges()[0],selectionUpdateNeeded;if(CKEDITOR.env.gecko||CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller){var blockNeedsFiller=needsBrFiller(selection,path);if(blockNeedsFiller){blockNeedsFiller.appendBogus();// IE tends to place selection after appended bogus, so we need to
	// select the original range (placed before bogus).
	selectionUpdateNeeded=CKEDITOR.env.ie;}}// When we're in block enter mode, a new paragraph will be established
	// to encapsulate inline contents inside editable. (#3657)
	// Don't autoparagraph if browser (namely - IE) incorrectly anchored selection
	// inside non-editable content. This happens e.g. if non-editable block is the only
	// content of editable.
	if(shouldAutoParagraph(editor,path.block,blockLimit)&&range.collapsed&&!range.getCommonAncestor().isReadOnly()){var testRng=range.clone();testRng.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS);var walker=new CKEDITOR.dom.walker(testRng);walker.guard=function(node){return!isNotEmpty(node)||node.type==CKEDITOR.NODE_COMMENT||node.isReadOnly();};// 1. Inline content discovered under cursor;
	// 2. Empty editable.
	if(!walker.checkForward()||testRng.checkStartOfBlock()&&testRng.checkEndOfBlock()){var fixedBlock=range.fixBlock(true,editor.activeEnterMode==CKEDITOR.ENTER_DIV?'div':'p');// For IE<11, we should remove any filler node which was introduced before.
	if(!CKEDITOR.env.needsBrFiller){var first=fixedBlock.getFirst(isNotEmpty);if(first&&isNbsp(first))first.remove();}selectionUpdateNeeded=1;// Cancel this selection change in favor of the next (correct). (#6811)
	evt.cancel();}}if(selectionUpdateNeeded)range.select();}// Checks whether current selection requires br filler to be appended.
	// @returns Block which needs filler or falsy value.
	function needsBrFiller(selection,path){// Fake selection does not need filler, because it is fake.
	if(selection.isFake)return 0;// Ensure bogus br could help to move cursor (out of styles) to the end of block. (#7041)
	var pathBlock=path.block||path.blockLimit,lastNode=pathBlock&&pathBlock.getLast(isNotEmpty);// Check some specialities of the current path block:
	// 1. It is really displayed as block; (#7221)
	// 2. It doesn't end with one inner block; (#7467)
	// 3. It doesn't have bogus br yet.
	if(pathBlock&&pathBlock.isBlockBoundary()&&!(lastNode&&lastNode.type==CKEDITOR.NODE_ELEMENT&&lastNode.isBlockBoundary())&&!pathBlock.is('pre')&&!pathBlock.getBogus())return pathBlock;}function blockInputClick(evt){var element=evt.data.getTarget();if(element.is('input')){var type=element.getAttribute('type');if(type=='submit'||type=='reset')evt.data.preventDefault();}}function isNotEmpty(node){return isNotWhitespace(node)&&isNotBookmark(node);}function isNbsp(node){return node.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(node.getText()).match(/^(?:&nbsp;|\xa0)$/);}function isNotBubbling(fn,src){return function(evt){var other=evt.data.$.toElement||evt.data.$.fromElement||evt.data.$.relatedTarget;// First of all, other may simply be null/undefined.
	// Second of all, at least early versions of Spartan returned empty objects from evt.relatedTarget,
	// so let's also check the node type.
	other=other&&other.nodeType==CKEDITOR.NODE_ELEMENT?new CKEDITOR.dom.element(other):null;if(!(other&&(src.equals(other)||src.contains(other))))fn.call(this,evt);};}function hasBookmarks(element){// We use getElementsByTag() instead of find() to retain compatibility with IE quirks mode.
	var potentialBookmarks=element.getElementsByTag('span'),i=0,child;if(potentialBookmarks){while(child=potentialBookmarks.getItem(i++)){if(!isNotBookmark(child)){return true;}}}return false;}// Check if the entire table/list contents is selected.
	function getSelectedTableList(sel){var selected,range=sel.getRanges()[0],editable=sel.root,path=range.startPath(),structural={table:1,ul:1,ol:1,dl:1};if(path.contains(structural)){// Clone the original range.
	var walkerRng=range.clone();// Enlarge the range: X<ul><li>[Y]</li></ul>X => [X<ul><li>]Y</li></ul>X
	walkerRng.collapse(1);walkerRng.setStartAt(editable,CKEDITOR.POSITION_AFTER_START);// Create a new walker.
	var walker=new CKEDITOR.dom.walker(walkerRng);// Assign a new guard to the walker.
	walker.guard=guard();// Go backwards checking for selected structural node.
	walker.checkBackward();// If there's a selected structured element when checking backwards,
	// then check the same forwards.
	if(selected){// Clone the original range.
	walkerRng=range.clone();// Enlarge the range (assuming <ul> is selected element from guard):
	//
	// 	   X<ul><li>[Y]</li></ul>X    =>    X<ul><li>Y[</li></ul>]X
	//
	// If the walker went deeper down DOM than a while ago when traversing
	// backwards, then it doesn't make sense: an element must be selected
	// symmetrically. By placing range end **after previously selected node**,
	// we make sure we don't go no deeper in DOM when going forwards.
	walkerRng.collapse();walkerRng.setEndAt(selected,CKEDITOR.POSITION_AFTER_END);// Create a new walker.
	walker=new CKEDITOR.dom.walker(walkerRng);// Assign a new guard to the walker.
	walker.guard=guard(true);// Reset selected node.
	selected=false;// Go forwards checking for selected structural node.
	walker.checkForward();return selected;}}return null;function guard(forwardGuard){return function(node,isWalkOut){// Save the encountered node as selected if going down the DOM structure
	// and the node is structured element.
	if(isWalkOut&&node.type==CKEDITOR.NODE_ELEMENT&&node.is(structural))selected=node;// Stop the walker when either traversing another non-empty node at the same
	// DOM level as in previous step.
	// NOTE: When going forwards, stop if encountered a bogus.
	if(!isWalkOut&&isNotEmpty(node)&&!(forwardGuard&&isBogus(node)))return false;};}}// Whether in given context (pathBlock, pathBlockLimit and editor settings)
	// editor should automatically wrap inline contents with blocks.
	function shouldAutoParagraph(editor,pathBlock,pathBlockLimit){// Check whether pathBlock equals pathBlockLimit to support nested editable (#12162).
	return editor.config.autoParagraph!==false&&editor.activeEnterMode!=CKEDITOR.ENTER_BR&&(editor.editable().equals(pathBlockLimit)&&!pathBlock||pathBlock&&pathBlock.getAttribute('contenteditable')=='true');}function autoParagraphTag(editor){return editor.activeEnterMode!=CKEDITOR.ENTER_BR&&editor.config.autoParagraph!==false?editor.activeEnterMode==CKEDITOR.ENTER_DIV?'div':'p':false;}//
	// Functions related to insertXXX methods
	//
	insert=function(){'use strict';var DTD=CKEDITOR.dtd;// Inserts the given (valid) HTML into the range position (with range content deleted),
	// guarantee it's result to be a valid DOM tree.
	function insert(editable,type,data,range){var editor=editable.editor,dontFilter=false;if(type=='unfiltered_html'){type='html';dontFilter=true;}// Check range spans in non-editable.
	if(range.checkReadOnly())return;// RANGE PREPARATIONS
	var path=new CKEDITOR.dom.elementPath(range.startContainer,range.root),// Let root be the nearest block that's impossible to be split
	// during html processing.
	blockLimit=path.blockLimit||range.root,// The "state" value.
	that={type:type,dontFilter:dontFilter,editable:editable,editor:editor,range:range,blockLimit:blockLimit,// During pre-processing / preparations startContainer of affectedRange should be placed
	// in this element in which inserted or moved (in case when we merge blocks) content
	// could create situation that will need merging inline elements.
	// Examples:
	// <div><b>A</b>^B</div> + <b>C</b> => <div><b>A</b><b>C</b>B</div> - affected container is <div>.
	// <p><b>A[B</b></p><p><b>C]D</b></p> + E => <p><b>AE</b></p><p><b>D</b></p> =>
	//		<p><b>AE</b><b>D</b></p> - affected container is <p> (in text mode).
	mergeCandidates:[],zombies:[]};prepareRangeToDataInsertion(that);// DATA PROCESSING
	// Select range and stop execution.
	// If data has been totally emptied after the filtering,
	// any insertion is pointless (#10339).
	if(data&&processDataForInsertion(that,data)){// DATA INSERTION
	insertDataIntoRange(that);}// FINAL CLEANUP
	// Set final range position and clean up.
	cleanupAfterInsertion(that);}// Prepare range to its data deletion.
	// Delete its contents.
	// Prepare it to insertion.
	function prepareRangeToDataInsertion(that){var range=that.range,mergeCandidates=that.mergeCandidates,node,marker,path,startPath,endPath,previous,bm;// If range starts in inline element then insert a marker, so empty
	// inline elements won't be removed while range.deleteContents
	// and we will be able to move range back into this element.
	// E.g. 'aa<b>[bb</b>]cc' -> (after deleting) 'aa<b><span/></b>cc'
	if(that.type=='text'&&range.shrink(CKEDITOR.SHRINK_ELEMENT,true,false)){marker=CKEDITOR.dom.element.createFromHtml('<span>&nbsp;</span>',range.document);range.insertNode(marker);range.setStartAfter(marker);}// By using path we can recover in which element was startContainer
	// before deleting contents.
	// Start and endPathElements will be used to squash selected blocks, after removing
	// selection contents. See rule 5.
	startPath=new CKEDITOR.dom.elementPath(range.startContainer);that.endPath=endPath=new CKEDITOR.dom.elementPath(range.endContainer);if(!range.collapsed){// Anticipate the possibly empty block at the end of range after deletion.
	node=endPath.block||endPath.blockLimit;var ancestor=range.getCommonAncestor();if(node&&!(node.equals(ancestor)||node.contains(ancestor))&&range.checkEndOfBlock()){that.zombies.push(node);}range.deleteContents();}// Rule 4.
	// Move range into the previous block.
	while((previous=getRangePrevious(range))&&checkIfElement(previous)&&previous.isBlockBoundary()&&// Check if previousNode was parent of range's startContainer before deleteContents.
	startPath.contains(previous))range.moveToPosition(previous,CKEDITOR.POSITION_BEFORE_END);// Rule 5.
	mergeAncestorElementsOfSelectionEnds(range,that.blockLimit,startPath,endPath);// Rule 1.
	if(marker){// If marker was created then move collapsed range into its place.
	range.setEndBefore(marker);range.collapse();marker.remove();}// Split inline elements so HTML will be inserted with its own styles.
	path=range.startPath();if(node=path.contains(isInline,false,1)){range.splitElement(node);that.inlineStylesRoot=node;that.inlineStylesPeak=path.lastElement;}// Record inline merging candidates for later cleanup in place.
	bm=range.createBookmark();// 1. Inline siblings.
	node=bm.startNode.getPrevious(isNotEmpty);node&&checkIfElement(node)&&isInline(node)&&mergeCandidates.push(node);node=bm.startNode.getNext(isNotEmpty);node&&checkIfElement(node)&&isInline(node)&&mergeCandidates.push(node);// 2. Inline parents.
	node=bm.startNode;while((node=node.getParent())&&isInline(node))mergeCandidates.push(node);range.moveToBookmark(bm);}function processDataForInsertion(that,data){var range=that.range;// Rule 8. - wrap entire data in inline styles.
	// (e.g. <p><b>x^z</b></p> + <p>a</p><p>b</p> -> <b><p>a</p><p>b</p></b>)
	// Incorrect tags order will be fixed by htmlDataProcessor.
	if(that.type=='text'&&that.inlineStylesRoot)data=wrapDataWithInlineStyles(data,that);var context=that.blockLimit.getName();// Wrap data to be inserted, to avoid losing leading whitespaces
	// when going through the below procedure.
	if(/^\s+|\s+$/.test(data)&&'span'in CKEDITOR.dtd[context]){var protect='<span data-cke-marker="1">&nbsp;</span>';data=protect+data+protect;}// Process the inserted html, in context of the insertion root.
	// Don't use the "fix for body" feature as auto paragraphing must
	// be handled during insertion.
	data=that.editor.dataProcessor.toHtml(data,{context:null,fixForBody:false,protectedWhitespaces:!!protect,dontFilter:that.dontFilter,// Use the current, contextual settings.
	filter:that.editor.activeFilter,enterMode:that.editor.activeEnterMode});// Build the node list for insertion.
	var doc=range.document,wrapper=doc.createElement('body');wrapper.setHtml(data);// Eventually remove the temporaries.
	if(protect){wrapper.getFirst().remove();wrapper.getLast().remove();}// Rule 7.
	var block=range.startPath().block;if(block&&// Apply when there exists path block after deleting selection's content...
	!(block.getChildCount()==1&&block.getBogus())){// ... and the only content of this block isn't a bogus.
	stripBlockTagIfSingleLine(wrapper);}that.dataWrapper=wrapper;return data;}function insertDataIntoRange(that){var range=that.range,doc=range.document,path,blockLimit=that.blockLimit,nodesData,nodeData,node,nodeIndex=0,bogus,bogusNeededBlocks=[],pathBlock,fixBlock,splittingContainer=0,dontMoveCaret=0,insertionContainer,toSplit,newContainer,startContainer=range.startContainer,endContainer=that.endPath.elements[0],filteredNodes,// If endContainer was merged into startContainer: <p>a[b</p><p>c]d</p>
	// or it's equal to startContainer: <p>a^b</p>
	// or different situation happened :P
	// then there's no separate container for the end of selection.
	pos=endContainer.getPosition(startContainer),separateEndContainer=!!endContainer.getCommonAncestor(startContainer)&&// endC is not detached.
	pos!=CKEDITOR.POSITION_IDENTICAL&&!(pos&CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_IS_CONTAINED);// endC & endS are in separate branches.
	nodesData=extractNodesData(that.dataWrapper,that);removeBrsAdjacentToPastedBlocks(nodesData,range);for(;nodeIndex<nodesData.length;nodeIndex++){nodeData=nodesData[nodeIndex];// Ignore trailing <brs>
	if(nodeData.isLineBreak&&splitOnLineBreak(range,blockLimit,nodeData)){// Do not move caret towards the text (in cleanupAfterInsertion),
	// because caret was placed after a line break.
	dontMoveCaret=nodeIndex>0;continue;}path=range.startPath();// Auto paragraphing.
	if(!nodeData.isBlock&&shouldAutoParagraph(that.editor,path.block,path.blockLimit)&&(fixBlock=autoParagraphTag(that.editor))){fixBlock=doc.createElement(fixBlock);fixBlock.appendBogus();range.insertNode(fixBlock);if(CKEDITOR.env.needsBrFiller&&(bogus=fixBlock.getBogus()))bogus.remove();range.moveToPosition(fixBlock,CKEDITOR.POSITION_BEFORE_END);}node=range.startPath().block;// Remove any bogus element on the current path block for now, and mark
	// it for later compensation.
	if(node&&!node.equals(pathBlock)){bogus=node.getBogus();if(bogus){bogus.remove();bogusNeededBlocks.push(node);}pathBlock=node;}// First not allowed node reached - start splitting original container
	if(nodeData.firstNotAllowed)splittingContainer=1;if(splittingContainer&&nodeData.isElement){insertionContainer=range.startContainer;toSplit=null;// Find the first ancestor that can contain current node.
	// This one won't be split.
	while(insertionContainer&&!DTD[insertionContainer.getName()][nodeData.name]){if(insertionContainer.equals(blockLimit)){insertionContainer=null;break;}toSplit=insertionContainer;insertionContainer=insertionContainer.getParent();}// If split has to be done - do it and mark both ends as a possible zombies.
	if(insertionContainer){if(toSplit){newContainer=range.splitElement(toSplit);that.zombies.push(newContainer);that.zombies.push(toSplit);}}// Unable to make the insertion happen in place, resort to the content filter.
	else{// If everything worked fine insertionContainer == blockLimit here.
	filteredNodes=filterElement(nodeData.node,blockLimit.getName(),!nodeIndex,nodeIndex==nodesData.length-1);}}if(filteredNodes){while(node=filteredNodes.pop())range.insertNode(node);filteredNodes=0;}else{// Insert current node at the start of range.
	range.insertNode(nodeData.node);}// Move range to the endContainer for the final allowed elements.
	if(nodeData.lastNotAllowed&&nodeIndex<nodesData.length-1){// If separateEndContainer exists move range there.
	// Otherwise try to move range to container created during splitting.
	// If this doesn't work - don't move range.
	newContainer=separateEndContainer?endContainer:newContainer;newContainer&&range.setEndAt(newContainer,CKEDITOR.POSITION_AFTER_START);splittingContainer=0;}// Collapse range after insertion to end.
	range.collapse();}// Rule 9. Non-editable content should be selected as a whole.
	if(isSingleNonEditableElement(nodesData)){dontMoveCaret=true;node=nodesData[0].node;range.setStartAt(node,CKEDITOR.POSITION_BEFORE_START);range.setEndAt(node,CKEDITOR.POSITION_AFTER_END);}that.dontMoveCaret=dontMoveCaret;that.bogusNeededBlocks=bogusNeededBlocks;}function cleanupAfterInsertion(that){var range=that.range,node,testRange,movedIntoInline,bogusNeededBlocks=that.bogusNeededBlocks,// Create a bookmark to defend against the following range deconstructing operations.
	bm=range.createBookmark();// Remove all elements that could be created while splitting nodes
	// with ranges at its start|end.
	// E.g. remove <div><p></p></div>
	// But not <div><p> </p></div>
	// And replace <div><p><span data="cke-bookmark"/></p></div> with found bookmark.
	while(node=that.zombies.pop()){// Detached element.
	if(!node.getParent())continue;testRange=range.clone();testRange.moveToElementEditStart(node);testRange.removeEmptyBlocksAtEnd();}if(bogusNeededBlocks){// Bring back all block bogus nodes.
	while(node=bogusNeededBlocks.pop()){if(CKEDITOR.env.needsBrFiller)node.appendBogus();else node.append(range.document.createText('\u00a0'));}}// Eventually merge identical inline elements.
	while(node=that.mergeCandidates.pop())node.mergeSiblings();range.moveToBookmark(bm);// Rule 3.
	// Shrink range to the BEFOREEND of previous innermost editable node in source order.
	if(!that.dontMoveCaret){node=getRangePrevious(range);while(node&&checkIfElement(node)&&!node.is(DTD.$empty)){if(node.isBlockBoundary())range.moveToPosition(node,CKEDITOR.POSITION_BEFORE_END);else{// Don't move into inline element (which ends with a text node)
	// found which contains white-space at its end.
	// If not - move range's end to the end of this element.
	if(isInline(node)&&node.getHtml().match(/(\s|&nbsp;)$/g)){movedIntoInline=null;break;}movedIntoInline=range.clone();movedIntoInline.moveToPosition(node,CKEDITOR.POSITION_BEFORE_END);}node=node.getLast(isNotEmpty);}movedIntoInline&&range.moveToRange(movedIntoInline);}}//
	// HELPERS ------------------------------------------------------------
	//
	function checkIfElement(node){return node.type==CKEDITOR.NODE_ELEMENT;}function extractNodesData(dataWrapper,that){var node,sibling,nodeName,allowed,nodesData=[],startContainer=that.range.startContainer,path=that.range.startPath(),allowedNames=DTD[startContainer.getName()],nodeIndex=0,nodesList=dataWrapper.getChildren(),nodesCount=nodesList.count(),firstNotAllowed=-1,lastNotAllowed=-1,lineBreak=0,blockSibling;// Selection start within a list.
	var insideOfList=path.contains(DTD.$list);for(;nodeIndex<nodesCount;++nodeIndex){node=nodesList.getItem(nodeIndex);if(checkIfElement(node)){nodeName=node.getName();// Extract only the list items, when insertion happens
	// inside of a list, reads as rearrange list items. (#7957)
	if(insideOfList&&nodeName in CKEDITOR.dtd.$list){nodesData=nodesData.concat(extractNodesData(node,that));continue;}allowed=!!allowedNames[nodeName];// Mark <brs data-cke-eol="1"> at the beginning and at the end.
	if(nodeName=='br'&&node.data('cke-eol')&&(!nodeIndex||nodeIndex==nodesCount-1)){sibling=nodeIndex?nodesData[nodeIndex-1].node:nodesList.getItem(nodeIndex+1);// Line break has to have sibling which is not an <br>.
	lineBreak=sibling&&(!checkIfElement(sibling)||!sibling.is('br'));// Line break has block element as a sibling.
	blockSibling=sibling&&checkIfElement(sibling)&&DTD.$block[sibling.getName()];}if(firstNotAllowed==-1&&!allowed)firstNotAllowed=nodeIndex;if(!allowed)lastNotAllowed=nodeIndex;nodesData.push({isElement:1,isLineBreak:lineBreak,isBlock:node.isBlockBoundary(),hasBlockSibling:blockSibling,node:node,name:nodeName,allowed:allowed});lineBreak=0;blockSibling=0;}else{nodesData.push({isElement:0,node:node,allowed:1});}}// Mark first node that cannot be inserted directly into startContainer
	// and last node for which startContainer has to be split.
	if(firstNotAllowed>-1)nodesData[firstNotAllowed].firstNotAllowed=1;if(lastNotAllowed>-1)nodesData[lastNotAllowed].lastNotAllowed=1;return nodesData;}// TODO: Review content transformation rules on filtering element.
	function filterElement(element,parentName,isFirst,isLast){var nodes=filterElementInner(element,parentName),nodes2=[],nodesCount=nodes.length,nodeIndex=0,node,afterSpace=0,lastSpaceIndex=-1;// Remove duplicated spaces and spaces at the:
	// * beginnig if filtered element isFirst (isFirst that's going to be inserted)
	// * end if filtered element isLast.
	for(;nodeIndex<nodesCount;nodeIndex++){node=nodes[nodeIndex];if(node==' '){// Don't push doubled space and if it's leading space for insertion.
	if(!afterSpace&&!(isFirst&&!nodeIndex)){nodes2.push(new CKEDITOR.dom.text(' '));lastSpaceIndex=nodes2.length;}afterSpace=1;}else{nodes2.push(node);afterSpace=0;}}// Remove trailing space.
	if(isLast&&lastSpaceIndex==nodes2.length)nodes2.pop();return nodes2;}function filterElementInner(element,parentName){var nodes=[],children=element.getChildren(),childrenCount=children.count(),child,childIndex=0,allowedNames=DTD[parentName],surroundBySpaces=!element.is(DTD.$inline)||element.is('br');if(surroundBySpaces)nodes.push(' ');for(;childIndex<childrenCount;childIndex++){child=children.getItem(childIndex);if(checkIfElement(child)&&!child.is(allowedNames))nodes=nodes.concat(filterElementInner(child,parentName));else nodes.push(child);}if(surroundBySpaces)nodes.push(' ');return nodes;}function getRangePrevious(range){return checkIfElement(range.startContainer)&&range.startContainer.getChild(range.startOffset-1);}function isInline(node){return node&&checkIfElement(node)&&(node.is(DTD.$removeEmpty)||node.is('a')&&!node.isBlockBoundary());}// Checks if only non-editable element is being inserted.
	function isSingleNonEditableElement(nodesData){if(nodesData.length!=1)return false;var nodeData=nodesData[0];return nodeData.isElement&&nodeData.node.getAttribute('contenteditable')=='false';}var blockMergedTags={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ul:1,ol:1,li:1,pre:1,dl:1,blockquote:1};// See rule 5. in TCs.
	// Initial situation:
	// <ul><li>AA^</li></ul><ul><li>BB</li></ul>
	// We're looking for 2nd <ul>, comparing with 1st <ul> and merging.
	// We're not merging if caret is between these elements.
	function mergeAncestorElementsOfSelectionEnds(range,blockLimit,startPath,endPath){var walkerRange=range.clone(),walker,nextNode,previousNode;walkerRange.setEndAt(blockLimit,CKEDITOR.POSITION_BEFORE_END);walker=new CKEDITOR.dom.walker(walkerRange);if((nextNode=walker.next())&&// Find next source node
	checkIfElement(nextNode)&&// which is an element
	blockMergedTags[nextNode.getName()]&&(// that can be merged.
	previousNode=nextNode.getPrevious())&&// Take previous one
	checkIfElement(previousNode)&&// which also has to be an element.
	!previousNode.getParent().equals(range.startContainer)&&// Fail if caret is on the same level.
	// This means that caret is between these nodes.
	startPath.contains(previousNode)&&// Elements path of start of selection has
	endPath.contains(nextNode)&&// to contain prevNode and vice versa.
	nextNode.isIdentical(previousNode)// Check if elements are identical.
	){// Merge blocks and repeat.
	nextNode.moveChildren(previousNode);nextNode.remove();mergeAncestorElementsOfSelectionEnds(range,blockLimit,startPath,endPath);}}// If last node that will be inserted is a block (but not a <br>)
	// and it will be inserted right before <br> remove this <br>.
	// Do the same for the first element that will be inserted and preceding <br>.
	function removeBrsAdjacentToPastedBlocks(nodesData,range){var succeedingNode=range.endContainer.getChild(range.endOffset),precedingNode=range.endContainer.getChild(range.endOffset-1);if(succeedingNode)remove(succeedingNode,nodesData[nodesData.length-1]);if(precedingNode&&remove(precedingNode,nodesData[0])){// If preceding <br> was removed - move range left.
	range.setEnd(range.endContainer,range.endOffset-1);range.collapse();}function remove(maybeBr,maybeBlockData){if(maybeBlockData.isBlock&&maybeBlockData.isElement&&!maybeBlockData.node.is('br')&&checkIfElement(maybeBr)&&maybeBr.is('br')){maybeBr.remove();return 1;}}}// Return 1 if <br> should be skipped when inserting, 0 otherwise.
	function splitOnLineBreak(range,blockLimit,nodeData){var firstBlockAscendant,pos;if(nodeData.hasBlockSibling)return 1;firstBlockAscendant=range.startContainer.getAscendant(DTD.$block,1);if(!firstBlockAscendant||!firstBlockAscendant.is({div:1,p:1}))return 0;pos=firstBlockAscendant.getPosition(blockLimit);if(pos==CKEDITOR.POSITION_IDENTICAL||pos==CKEDITOR.POSITION_CONTAINS)return 0;var newContainer=range.splitElement(firstBlockAscendant);range.moveToPosition(newContainer,CKEDITOR.POSITION_AFTER_START);return 1;}var stripSingleBlockTags={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},inlineButNotBr=CKEDITOR.tools.extend({},DTD.$inline);delete inlineButNotBr.br;// Rule 7.
	function stripBlockTagIfSingleLine(dataWrapper){var block,children;if(dataWrapper.getChildCount()==1&&// Only one node bein inserted.
	checkIfElement(block=dataWrapper.getFirst())&&// And it's an element.
	block.is(stripSingleBlockTags)&&// That's <p> or <div> or header.
	!block.hasAttribute('contenteditable')// It's not a non-editable block or nested editable.
	){// Check children not containing block.
	children=block.getElementsByTag('*');for(var i=0,child,count=children.count();i<count;i++){child=children.getItem(i);if(!child.is(inlineButNotBr))return;}block.moveChildren(block.getParent(1));block.remove();}}function wrapDataWithInlineStyles(data,that){var element=that.inlineStylesPeak,doc=element.getDocument(),wrapper=doc.createText('{cke-peak}'),limit=that.inlineStylesRoot.getParent();while(!element.equals(limit)){wrapper=wrapper.appendTo(element.clone());element=element.getParent();}// Don't use String.replace because it fails in IE7 if special replacement
	// characters ($$, $&, etc.) are in data (#10367).
	return wrapper.getOuterHtml().split('{cke-peak}').join(data);}return insert;}();function afterInsert(editable){var editor=editable.editor;// Scroll using selection, not ranges, to affect native pastes.
	editor.getSelection().scrollIntoView();// Save snaps after the whole execution completed.
	// This's a workaround for make DOM modification's happened after
	// 'insertElement' to be included either, e.g. Form-based dialogs' 'commitContents'
	// call.
	setTimeout(function(){editor.fire('saveSnapshot');},0);}// 1. Fixes a range which is a result of deleteContents() and is placed in an intermediate element (see dtd.$intermediate),
	// inside a table. A goal is to find a closest <td> or <th> element and when this fails, recreate the structure of the table.
	// 2. Fixes empty cells by appending bogus <br>s or deleting empty text nodes in IE<=8 case.
	fixTableAfterContentsDeletion=function(){// Creates an element walker which can only "go deeper". It won't
	// move out from any element. Therefore it can be used to find <td>x</td> in cases like:
	// <table><tbody><tr><td>x</td></tr></tbody>^<tfoot>...
	function getFixTableSelectionWalker(testRange){var walker=new CKEDITOR.dom.walker(testRange);walker.guard=function(node,isMovingOut){if(isMovingOut)return false;if(node.type==CKEDITOR.NODE_ELEMENT)return node.is(CKEDITOR.dtd.$tableContent);};walker.evaluator=function(node){return node.type==CKEDITOR.NODE_ELEMENT;};return walker;}function fixTableStructure(element,newElementName,appendToStart){var temp=element.getDocument().createElement(newElementName);element.append(temp,appendToStart);return temp;}// Fix empty cells. This means:
	// * add bogus <br> if browser needs it
	// * remove empty text nodes on IE8, because it will crash (http://dev.ckeditor.com/ticket/11183#comment:8).
	function fixEmptyCells(cells){var i=cells.count(),cell;for(i;i-->0;){cell=cells.getItem(i);if(!CKEDITOR.tools.trim(cell.getHtml())){cell.appendBogus();if(CKEDITOR.env.ie&&CKEDITOR.env.version<9&&cell.getChildCount())cell.getFirst().remove();}}}return function(range){var container=range.startContainer,table=container.getAscendant('table',1),testRange,deeperSibling,appendToStart=false;fixEmptyCells(table.getElementsByTag('td'));fixEmptyCells(table.getElementsByTag('th'));// Look left.
	testRange=range.clone();testRange.setStart(container,0);deeperSibling=getFixTableSelectionWalker(testRange).lastBackward();// If left is empty, look right.
	if(!deeperSibling){testRange=range.clone();testRange.setEndAt(container,CKEDITOR.POSITION_BEFORE_END);deeperSibling=getFixTableSelectionWalker(testRange).lastForward();appendToStart=true;}// If there's no deeper nested element in both direction - container is empty - we'll use it then.
	if(!deeperSibling)deeperSibling=container;// Fix structure...
	// We found a table what means that it's empty - remove it completely.
	if(deeperSibling.is('table')){range.setStartAt(deeperSibling,CKEDITOR.POSITION_BEFORE_START);range.collapse(true);deeperSibling.remove();return;}// Found an empty txxx element - append tr.
	if(deeperSibling.is({tbody:1,thead:1,tfoot:1}))deeperSibling=fixTableStructure(deeperSibling,'tr',appendToStart);// Found an empty tr element - append td/th.
	if(deeperSibling.is('tr'))deeperSibling=fixTableStructure(deeperSibling,deeperSibling.getParent().is('thead')?'th':'td',appendToStart);// To avoid setting selection after bogus, remove it from the current cell.
	// We can safely do that, because we'll insert element into that cell.
	var bogus=deeperSibling.getBogus();if(bogus)bogus.remove();range.moveToPosition(deeperSibling,appendToStart?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END);};}();function mergeBlocksCollapsedSelection(editor,range,backspace,startPath){var startBlock=startPath.block;// Selection must be collapsed and to be anchored in a block.
	if(!startBlock)return false;// Exclude cases where, i.e. if pressed arrow key, selection
	// would move within the same block (merge inside a block).
	if(!range[backspace?'checkStartOfBlock':'checkEndOfBlock']())return false;// Make sure, there's an editable position to put selection,
	// which i.e. would be used if pressed arrow key, but abort
	// if such position exists but means a selected non-editable element.
	if(!range.moveToClosestEditablePosition(startBlock,!backspace)||!range.collapsed)return false;// Handle special case, when block's sibling is a <hr>. Delete it and keep selection
	// in the same place (http://dev.ckeditor.com/ticket/11861#comment:9).
	if(range.startContainer.type==CKEDITOR.NODE_ELEMENT){var touched=range.startContainer.getChild(range.startOffset-(backspace?1:0));if(touched&&touched.type==CKEDITOR.NODE_ELEMENT&&touched.is('hr')){editor.fire('saveSnapshot');touched.remove();return true;}}var siblingBlock=range.startPath().block;// Abort if an editable position exists, but either it's not
	// in a block or that block is the parent of the start block
	// (merging child into parent).
	if(!siblingBlock||siblingBlock&&siblingBlock.contains(startBlock))return;editor.fire('saveSnapshot');// Remove bogus to avoid duplicated boguses.
	var bogus;if(bogus=(backspace?siblingBlock:startBlock).getBogus())bogus.remove();// Save selection. It will be restored.
	var selection=editor.getSelection(),bookmarks=selection.createBookmarks();// Merge blocks.
	(backspace?startBlock:siblingBlock).moveChildren(backspace?siblingBlock:startBlock,false);// Also merge children along with parents.
	startPath.lastElement.mergeSiblings();// Cut off removable branch of the DOM tree.
	pruneEmptyDisjointAncestors(startBlock,siblingBlock,!backspace);// Restore selection.
	selection.selectBookmarks(bookmarks);return true;}function mergeBlocksNonCollapsedSelection(editor,range,startPath){var startBlock=startPath.block,endPath=range.endPath(),endBlock=endPath.block;// Selection must be anchored in two different blocks.
	if(!startBlock||!endBlock||startBlock.equals(endBlock))return false;editor.fire('saveSnapshot');// Remove bogus to avoid duplicated boguses.
	var bogus;if(bogus=startBlock.getBogus())bogus.remove();// Changing end container to element from text node (#12503).
	range.enlarge(CKEDITOR.ENLARGE_INLINE);// Delete range contents. Do NOT merge. Merging is weird.
	range.deleteContents();// If something has left of the block to be merged, clean it up.
	// It may happen when merging with list items.
	if(endBlock.getParent()){// Move children to the first block.
	endBlock.moveChildren(startBlock,false);// ...and merge them if that's possible.
	startPath.lastElement.mergeSiblings();// If expanded selection, things are always merged like with BACKSPACE.
	pruneEmptyDisjointAncestors(startBlock,endBlock,true);}// Make sure the result selection is collapsed.
	range=editor.getSelection().getRanges()[0];range.collapse(1);// Optimizing range containers from text nodes to elements (#12503).
	range.optimize();if(range.startContainer.getHtml()===''){range.startContainer.appendBogus();}range.select();return true;}// Finds the innermost child of common parent, which,
	// if removed, removes nothing but the contents of the element.
	//
	//	before: <div><p><strong>first</strong></p><p>second</p></div>
	//	after:  <div><p>second</p></div>
	//
	//	before: <div><p>x<strong>first</strong></p><p>second</p></div>
	//	after:  <div><p>x</p><p>second</p></div>
	//
	//	isPruneToEnd=true
	//	before: <div><p><strong>first</strong></p><p>second</p></div>
	//	after:  <div><p><strong>first</strong></p></div>
	//
	// @param {CKEDITOR.dom.element} first
	// @param {CKEDITOR.dom.element} second
	// @param {Boolean} isPruneToEnd
	function pruneEmptyDisjointAncestors(first,second,isPruneToEnd){var commonParent=first.getCommonAncestor(second),node=isPruneToEnd?second:first,removableParent=node;while((node=node.getParent())&&!commonParent.equals(node)&&node.getChildCount()==1)removableParent=node;removableParent.remove();}//
	// Helpers for editable.getHtmlFromRange.
	//
	getHtmlFromRangeHelpers={eol:{detect:function(that,editable){var range=that.range,rangeStart=range.clone(),rangeEnd=range.clone(),startPath=new CKEDITOR.dom.elementPath(range.startContainer,editable),endPath=new CKEDITOR.dom.elementPath(range.endContainer,editable);// Note: checkBoundaryOfElement will not work on original range as CKEDITOR.START|END
	// means that range start|end must be literally anchored at block start|end, e.g.
	//
	// 		<p>a{</p><p>}b</p>
	//
	// will return false for both paragraphs but two similar ranges
	//
	// 		<p>a{}</p><p>{}b</p>
	//
	// will return true if checked separately.
	rangeStart.collapse(1);rangeEnd.collapse();if(startPath.block&&rangeStart.checkBoundaryOfElement(startPath.block,CKEDITOR.END)){range.setStartAfter(startPath.block);that.prependEolBr=1;}if(endPath.block&&rangeEnd.checkBoundaryOfElement(endPath.block,CKEDITOR.START)){range.setEndBefore(endPath.block);that.appendEolBr=1;}},fix:function(that,editable){var doc=editable.getDocument(),appended;// Append <br data-cke-eol="1"> to the fragment.
	if(that.appendEolBr){appended=this.createEolBr(doc);that.fragment.append(appended);}// Prepend <br data-cke-eol="1"> to the fragment but avoid duplicates. Such
	// elements should never follow each other in DOM.
	if(that.prependEolBr&&(!appended||appended.getPrevious())){that.fragment.append(this.createEolBr(doc),1);}},createEolBr:function(doc){return doc.createElement('br',{attributes:{'data-cke-eol':1}});}},bogus:{exclude:function(that){var boundaryNodes=that.range.getBoundaryNodes(),startNode=boundaryNodes.startNode,endNode=boundaryNodes.endNode;// If bogus is the last node in range but not the only node, exclude it.
	if(endNode&&isBogus(endNode)&&(!startNode||!startNode.equals(endNode)))that.range.setEndBefore(endNode);}},tree:{rebuild:function(that,editable){var range=that.range,node=range.getCommonAncestor(),// A path relative to the common ancestor.
	commonPath=new CKEDITOR.dom.elementPath(node,editable),startPath=new CKEDITOR.dom.elementPath(range.startContainer,editable),endPath=new CKEDITOR.dom.elementPath(range.endContainer,editable),limit;if(node.type==CKEDITOR.NODE_TEXT)node=node.getParent();// Fix DOM of partially enclosed tables
	// 		<table><tbody><tr><td>a{b</td><td>c}d</td></tr></tbody></table>
	// Full table is returned
	// 		<table><tbody><tr><td>b</td><td>c</td></tr></tbody></table>
	// instead of
	// 		<td>b</td><td>c</td>
	if(commonPath.blockLimit.is({tr:1,table:1})){var tableParent=commonPath.contains('table').getParent();limit=function(node){return!node.equals(tableParent);};}// Fix DOM in the following case
	// 		<ol><li>a{b<ul><li>c}d</li></ul></li></ol>
	// Full list is returned
	// 		<ol><li>b<ul><li>c</li></ul></li></ol>
	// instead of
	// 		b<ul><li>c</li></ul>
	else if(commonPath.block&&commonPath.block.is(CKEDITOR.dtd.$listItem)){var startList=startPath.contains(CKEDITOR.dtd.$list),endList=endPath.contains(CKEDITOR.dtd.$list);if(!startList.equals(endList)){var listParent=commonPath.contains(CKEDITOR.dtd.$list).getParent();limit=function(node){return!node.equals(listParent);};}}// If not defined, use generic limit function.
	if(!limit){limit=function(node){return!node.equals(commonPath.block)&&!node.equals(commonPath.blockLimit);};}this.rebuildFragment(that,editable,node,limit);},rebuildFragment:function(that,editable,node,checkLimit){var clone;while(node&&!node.equals(editable)&&checkLimit(node)){// Don't clone children. Preserve element ids.
	clone=node.clone(0,1);that.fragment.appendTo(clone);that.fragment=clone;node=node.getParent();}}},cell:{// Handle range anchored in table row with a single cell enclosed:
	// 		<table><tbody><tr>[<td>a</td>]</tr></tbody></table>
	// becomes
	// 		<table><tbody><tr><td>{a}</td></tr></tbody></table>
	shrink:function(that){var range=that.range,startContainer=range.startContainer,endContainer=range.endContainer,startOffset=range.startOffset,endOffset=range.endOffset;if(startContainer.type==CKEDITOR.NODE_ELEMENT&&startContainer.equals(endContainer)&&startContainer.is('tr')&&++startOffset==endOffset){range.shrink(CKEDITOR.SHRINK_TEXT);}}}};//
	// Helpers for editable.extractHtmlFromRange.
	//
	extractHtmlFromRangeHelpers=function(){function optimizeBookmarkNode(node,toStart){var parent=node.getParent();if(parent.is(CKEDITOR.dtd.$inline))node[toStart?'insertBefore':'insertAfter'](parent);}function mergeElements(merged,startBookmark,endBookmark){optimizeBookmarkNode(startBookmark);optimizeBookmarkNode(endBookmark,1);var next;while(next=endBookmark.getNext()){next.insertAfter(startBookmark);// Update startBookmark after insertion to avoid the reversal of nodes (#13449).
	startBookmark=next;}if(isEmpty(merged))merged.remove();}function getPath(startElement,root){return new CKEDITOR.dom.elementPath(startElement,root);}// Creates a range from a bookmark without removing the bookmark.
	function createRangeFromBookmark(root,bookmark){var range=new CKEDITOR.dom.range(root);range.setStartAfter(bookmark.startNode);range.setEndBefore(bookmark.endNode);return range;}var list={detectMerge:function(that,editable){var range=createRangeFromBookmark(editable,that.bookmark),startPath=range.startPath(),endPath=range.endPath(),startList=startPath.contains(CKEDITOR.dtd.$list),endList=endPath.contains(CKEDITOR.dtd.$list);that.mergeList=// Both lists must exist
	startList&&endList&&// ...and be of the same type
	// startList.getName() == endList.getName() &&
	// ...and share the same parent (same level in the tree)
	startList.getParent().equals(endList.getParent())&&// ...and must be different.
	!startList.equals(endList);that.mergeListItems=startPath.block&&endPath.block&&// Both containers must be list items
	startPath.block.is(CKEDITOR.dtd.$listItem)&&endPath.block.is(CKEDITOR.dtd.$listItem);// Create merge bookmark.
	if(that.mergeList||that.mergeListItems){var rangeClone=range.clone();rangeClone.setStartBefore(that.bookmark.startNode);rangeClone.setEndAfter(that.bookmark.endNode);that.mergeListBookmark=rangeClone.createBookmark();}},merge:function(that,editable){if(!that.mergeListBookmark)return;var startNode=that.mergeListBookmark.startNode,endNode=that.mergeListBookmark.endNode,startPath=getPath(startNode,editable),endPath=getPath(endNode,editable);if(that.mergeList){var firstList=startPath.contains(CKEDITOR.dtd.$list),secondList=endPath.contains(CKEDITOR.dtd.$list);if(!firstList.equals(secondList)){secondList.moveChildren(firstList);secondList.remove();}}if(that.mergeListItems){var firstListItem=startPath.contains(CKEDITOR.dtd.$listItem),secondListItem=endPath.contains(CKEDITOR.dtd.$listItem);if(!firstListItem.equals(secondListItem)){mergeElements(secondListItem,startNode,endNode);}}// Remove bookmark nodes.
	startNode.remove();endNode.remove();}};var block={// Detects whether blocks should be merged once contents are extracted.
	detectMerge:function(that,editable){// Don't merge blocks if lists or tables are already involved.
	if(that.tableContentsRanges||that.mergeListBookmark)return;var rangeClone=new CKEDITOR.dom.range(editable);rangeClone.setStartBefore(that.bookmark.startNode);rangeClone.setEndAfter(that.bookmark.endNode);that.mergeBlockBookmark=rangeClone.createBookmark();},merge:function(that,editable){if(!that.mergeBlockBookmark||that.purgeTableBookmark)return;var startNode=that.mergeBlockBookmark.startNode,endNode=that.mergeBlockBookmark.endNode,startPath=getPath(startNode,editable),endPath=getPath(endNode,editable),firstBlock=startPath.block,secondBlock=endPath.block;if(firstBlock&&secondBlock&&!firstBlock.equals(secondBlock)){mergeElements(secondBlock,startNode,endNode);}// Remove bookmark nodes.
	startNode.remove();endNode.remove();}};var table=function(){var tableEditable={td:1,th:1,caption:1};// Returns an array of ranges which should be entirely extracted.
	//
	// <table><tr>[<td>xx</td><td>y}y</td></tr></table>
	// will find:
	// <table><tr><td>[xx]</td><td>[y}y</td></tr></table>
	function findTableContentsRanges(range){// Leaving the below for debugging purposes.
	//
	// console.log( 'findTableContentsRanges' );
	// console.log( bender.tools.range.getWithHtml( range.root, range ) );
	var contentsRanges=[],editableRange,walker=new CKEDITOR.dom.walker(range),startCell=range.startPath().contains(tableEditable),endCell=range.endPath().contains(tableEditable),database={};walker.guard=function(node,leaving){// Guard may be executed on some node boundaries multiple times,
	// what results in creating more than one range for each selected cell. (#12964)
	if(node.type==CKEDITOR.NODE_ELEMENT){var key='visited_'+(leaving?'out':'in');if(node.getCustomData(key)){return;}CKEDITOR.dom.element.setMarker(database,node,key,1);}// Handle partial selection in a cell in which the range starts:
	// <td><p>x{xx</p></td>...
	// will store:
	// <td><p>x{xx</p>]</td>
	if(leaving&&startCell&&node.equals(startCell)){editableRange=range.clone();editableRange.setEndAt(startCell,CKEDITOR.POSITION_BEFORE_END);contentsRanges.push(editableRange);return;}// Handle partial selection in a cell in which the range ends.
	if(!leaving&&endCell&&node.equals(endCell)){editableRange=range.clone();editableRange.setStartAt(endCell,CKEDITOR.POSITION_AFTER_START);contentsRanges.push(editableRange);return;}// Handle all other cells visited by the walker.
	// We need to check whether the cell is disjoint with
	// the start and end cells to correctly handle case like:
	// <td>x{x</td><td><table>..<td>y}y</td>..</table></td>
	// without the check the second cell's content would be entirely removed.
	if(!leaving&&checkRemoveCellContents(node)){editableRange=range.clone();editableRange.selectNodeContents(node);contentsRanges.push(editableRange);}};walker.lastForward();// Clear all markers so next extraction will not be affected by this one.
	CKEDITOR.dom.element.clearAllMarkers(database);return contentsRanges;function checkRemoveCellContents(node){return(// Must be a cell.
	node.type==CKEDITOR.NODE_ELEMENT&&node.is(tableEditable)&&(// Must be disjoint with the range's startCell if exists.
	!startCell||checkDisjointNodes(node,startCell))&&(// Must be disjoint with the range's endCell if exists.
	!endCell||checkDisjointNodes(node,endCell)));}}// Returns a normalized common ancestor of a range.
	// If the real common ancestor is located somewhere in between a table and a td/th/caption,
	// then the table will be returned.
	function getNormalizedAncestor(range){var common=range.getCommonAncestor();if(common.is(CKEDITOR.dtd.$tableContent)&&!common.is(tableEditable)){common=common.getAscendant('table',true);}return common;}// Check whether node1 and node2 are disjoint, so are:
	// * not identical,
	// * not contained in each other.
	function checkDisjointNodes(node1,node2){var disallowedPositions=CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_IS_CONTAINED,pos=node1.getPosition(node2);// Baaah... IDENTICAL is 0, so we can't simplify this ;/.
	return pos===CKEDITOR.POSITION_IDENTICAL?false:(pos&disallowedPositions)===0;}return{// Detects whether to purge entire list.
	detectPurge:function(that){var range=that.range,walkerRange=range.clone();walkerRange.enlarge(CKEDITOR.ENLARGE_ELEMENT);var walker=new CKEDITOR.dom.walker(walkerRange),editablesCount=0;// Count the number of table editables in the range. If there's more than one,
	// table MAY be removed completely (it's a cross-cell range). Otherwise, only
	// the contents of the cell are usually removed.
	walker.evaluator=function(node){if(node.type==CKEDITOR.NODE_ELEMENT&&node.is(tableEditable)){++editablesCount;}};walker.checkForward();if(editablesCount>1){var startTable=range.startPath().contains('table'),endTable=range.endPath().contains('table');if(startTable&&endTable&&range.checkBoundaryOfElement(startTable,CKEDITOR.START)&&range.checkBoundaryOfElement(endTable,CKEDITOR.END)){var rangeClone=that.range.clone();rangeClone.setStartBefore(startTable);rangeClone.setEndAfter(endTable);that.purgeTableBookmark=rangeClone.createBookmark();}}},// The magic.
	//
	// This method tries to discover whether the range starts or ends somewhere in a table
	// (it is not interested whether the range contains a table, because in such case
	// the extractContents() methods does the job correctly).
	// If the range meets these criteria, then the method tries to discover and store the following:
	//
	// * that.tableSurroundingRange - a part of the range which is located outside of any table which
	// will be touched (note: when range is located in a single cell it does not touch the table).
	// This range can be placed at:
	//		* at the beginning: <p>he{re</p><table>..]..</table>
	//		* in the middle: <table>..[..</table><p>here</p><table>..]..</table>
	//		* at the end: <table>..[..</table><p>he}re</p>
	// * that.tableContentsRanges - an array of ranges with contents of td/th/caption that should be removed.
	// This assures that calling extractContents() does not change the structure of the table(s).
	detectRanges:function(that,editable){var range=createRangeFromBookmark(editable,that.bookmark),surroundingRange=range.clone(),leftRange,rightRange,// Find a common ancestor and normalize it (so the following paths contain tables).
	commonAncestor=getNormalizedAncestor(range),// Create paths using the normalized ancestor, so tables beyond the context
	// of the input range are not found.
	startPath=new CKEDITOR.dom.elementPath(range.startContainer,commonAncestor),endPath=new CKEDITOR.dom.elementPath(range.endContainer,commonAncestor),startTable=startPath.contains('table'),endTable=endPath.contains('table'),tableContentsRanges;// Nothing to do here - the range doesn't touch any table or
	// it contains a table, but that table is fully selected so it will be simply fully removed
	// by the normal algorithm.
	if(!startTable&&!endTable){return;}// Handle two disjoint tables case:
	// <table>..[..</table><p>ab</p><table>..]..</table>
	// is handled as (respectively: findTableContents( left ), surroundingRange, findTableContents( right )):
	// <table>..[..</table>][<p>ab</p>][<table>..]..</table>
	// Check that tables are disjoint to exclude a case when start equals end or one is contained
	// in the other.
	if(startTable&&endTable&&checkDisjointNodes(startTable,endTable)){that.tableSurroundingRange=surroundingRange;surroundingRange.setStartAt(startTable,CKEDITOR.POSITION_AFTER_END);surroundingRange.setEndAt(endTable,CKEDITOR.POSITION_BEFORE_START);leftRange=range.clone();leftRange.setEndAt(startTable,CKEDITOR.POSITION_AFTER_END);rightRange=range.clone();rightRange.setStartAt(endTable,CKEDITOR.POSITION_BEFORE_START);tableContentsRanges=findTableContentsRanges(leftRange).concat(findTableContentsRanges(rightRange));}// Divide the initial range into two parts:
	// * range which contains the part containing the table,
	// * surroundingRange which contains the part outside the table.
	//
	// The surroundingRange exists only if one of the range ends is
	// located outside the table.
	//
	// <p>a{b</p><table>..]..</table><p>cd</p>
	// becomes (respectively: surroundingRange, range):
	// <p>a{b</p>][<table>..]..</table><p>cd</p>
	else if(!startTable){that.tableSurroundingRange=surroundingRange;surroundingRange.setEndAt(endTable,CKEDITOR.POSITION_BEFORE_START);range.setStartAt(endTable,CKEDITOR.POSITION_AFTER_START);}// <p>ab</p><table>..[..</table><p>c}d</p>
	// becomes (respectively range, surroundingRange):
	// <p>ab</p><table>..[..</table>][<p>c}d</p>
	else if(!endTable){that.tableSurroundingRange=surroundingRange;surroundingRange.setStartAt(startTable,CKEDITOR.POSITION_AFTER_END);range.setEndAt(startTable,CKEDITOR.POSITION_AFTER_END);}// Use already calculated or calculate for the remaining range.
	that.tableContentsRanges=tableContentsRanges?tableContentsRanges:findTableContentsRanges(range);// Leaving the below for debugging purposes.
	//
	// if ( that.tableSurroundingRange ) {
	// 	console.log( 'tableSurroundingRange' );
	// 	console.log( bender.tools.range.getWithHtml( that.tableSurroundingRange.root, that.tableSurroundingRange ) );
	// }
	//
	// console.log( 'tableContentsRanges' );
	// that.tableContentsRanges.forEach( function( range ) {
	// 	console.log( bender.tools.range.getWithHtml( range.root, range ) );
	// } );
	},deleteRanges:function(that){var range;// Delete table cell contents.
	while(range=that.tableContentsRanges.pop()){range.extractContents();if(isEmpty(range.startContainer))range.startContainer.appendBogus();}// Finally delete surroundings of the table.
	if(that.tableSurroundingRange){that.tableSurroundingRange.extractContents();}},purge:function(that){if(!that.purgeTableBookmark)return;var doc=that.doc,range=that.range,rangeClone=range.clone(),// How about different enter modes?
	block=doc.createElement('p');block.insertBefore(that.purgeTableBookmark.startNode);rangeClone.moveToBookmark(that.purgeTableBookmark);rangeClone.deleteContents();that.range.moveToPosition(block,CKEDITOR.POSITION_AFTER_START);}};}();return{list:list,block:block,table:table,// Detects whether use "mergeThen" argument in range.extractContents().
	detectExtractMerge:function(that){// Don't merge if playing with lists.
	return!(that.range.startPath().contains(CKEDITOR.dtd.$listItem)&&that.range.endPath().contains(CKEDITOR.dtd.$listItem));},fixUneditableRangePosition:function(range){if(!range.startContainer.getDtd()['#']){range.moveToClosestEditablePosition(null,true);}},// Perform auto paragraphing if needed.
	autoParagraph:function(editor,range){var path=range.startPath(),fixBlock;if(shouldAutoParagraph(editor,path.block,path.blockLimit)&&(fixBlock=autoParagraphTag(editor))){fixBlock=range.document.createElement(fixBlock);fixBlock.appendBogus();range.insertNode(fixBlock);range.moveToPosition(fixBlock,CKEDITOR.POSITION_AFTER_START);}}};}();})();/**
	 * Whether the editor must output an empty value (`''`) if its content only consists
	 * of an empty paragraph.
	 *
	 *		config.ignoreEmptyParagraph = false;
	 *
	 * @cfg {Boolean} [ignoreEmptyParagraph=true]
	 * @member CKEDITOR.config
	 *//**
	 * Event fired by the editor in order to get accessibility help label.
	 * The event is responded to by a component which provides accessibility
	 * help (i.e. the `a11yhelp` plugin) hence the editor is notified whether
	 * accessibility help is available.
	 *
	 * Providing info:
	 *
	 *		editor.on( 'ariaEditorHelpLabel', function( evt ) {
	 *				evt.data.label = editor.lang.common.editorHelp;
	 *		} );
	 *
	 * Getting label:
	 *
	 *		var helpLabel = editor.fire( 'ariaEditorHelpLabel', {} ).label;
	 *
	 * @since 4.4.3
	 * @event ariaEditorHelpLabel
	 * @param {String} label The label to be used.
	 * @member CKEDITOR.editor
	 *//**
	 * Event fired when the user double-clicks in the editable area.
	 * The event allows to open a dialog window for a clicked element in a convenient way:
	 *
	 *		editor.on( 'doubleclick', function( evt ) {
	 *			var element = evt.data.element;
	 *
	 *			if ( element.is( 'table' ) )
	 *				evt.data.dialog = 'tableProperties';
	 *		} );
	 *
	 * **Note:** To handle double-click on a widget use {@link CKEDITOR.plugins.widget#doubleclick}.
	 *
	 * @event doubleclick
	 * @param data
	 * @param {CKEDITOR.dom.element} data.element The double-clicked element.
	 * @param {String} data.dialog The dialog window to be opened. If set by the listener,
	 * the specified dialog window will be opened.
	 * @member CKEDITOR.editor
	 */

/***/ },
/* 48 */
/*!***************************!*\
  !*** ./core/selection.js ***!
  \***************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	(function () {
		// #### checkSelectionChange : START
	
		// The selection change check basically saves the element parent tree of
		// the current node and check it on successive requests. If there is any
		// change on the tree, then the selectionChange event gets fired.
		function checkSelectionChange() {
			// A possibly available fake-selection.
			var sel = this._.fakeSelection,
			    realSel;
	
			if (sel) {
				realSel = this.getSelection(1);
	
				// If real (not locked/stored) selection was moved from hidden container,
				// then the fake-selection must be invalidated.
				if (!realSel || !realSel.isHidden()) {
					// Remove the cache from fake-selection references in use elsewhere.
					sel.reset();
	
					// Have the code using the native selection.
					sel = 0;
				}
			}
	
			// If not fake-selection is available then get the native selection.
			if (!sel) {
				sel = realSel || this.getSelection(1);
	
				// Editor may have no selection at all.
				if (!sel || sel.getType() == CKEDITOR.SELECTION_NONE) return;
			}
	
			this.fire('selectionCheck', sel);
	
			var currentPath = this.elementPath();
			if (!currentPath.compare(this._.selectionPreviousPath)) {
				// Cache the active element, which we'll eventually lose on Webkit.
				if (CKEDITOR.env.webkit) this._.previousActive = this.document.getActive();
	
				this._.selectionPreviousPath = currentPath;
				this.fire('selectionChange', { selection: sel, path: currentPath });
			}
		}
	
		var checkSelectionChangeTimer, checkSelectionChangeTimeoutPending;
	
		function checkSelectionChangeTimeout() {
			// Firing the "OnSelectionChange" event on every key press started to
			// be too slow. This function guarantees that there will be at least
			// 200ms delay between selection checks.
	
			checkSelectionChangeTimeoutPending = true;
	
			if (checkSelectionChangeTimer) return;
	
			checkSelectionChangeTimeoutExec.call(this);
	
			checkSelectionChangeTimer = CKEDITOR.tools.setTimeout(checkSelectionChangeTimeoutExec, 200, this);
		}
	
		function checkSelectionChangeTimeoutExec() {
			checkSelectionChangeTimer = null;
	
			if (checkSelectionChangeTimeoutPending) {
				// Call this with a timeout so the browser properly moves the
				// selection after the mouseup. It happened that the selection was
				// being moved after the mouseup when clicking inside selected text
				// with Firefox.
				CKEDITOR.tools.setTimeout(checkSelectionChange, 0, this);
	
				checkSelectionChangeTimeoutPending = false;
			}
		}
	
		// #### checkSelectionChange : END
	
		var isVisible = CKEDITOR.dom.walker.invisible(1);
	
		// May absorb the caret if:
		// * is a visible node,
		// * is a non-empty element (this rule will accept elements like <strong></strong> because they
		//	they were not accepted by the isVisible() check, not not <br> which cannot absorb the caret).
		//	See #12621.
		function mayAbsorbCaret(node) {
			if (isVisible(node)) return true;
	
			if (node.type == CKEDITOR.NODE_ELEMENT && !node.is(CKEDITOR.dtd.$empty)) return true;
	
			return false;
		}
	
		function rangeRequiresFix(range) {
			// Whether we must prevent from absorbing caret by this context node.
			// Also checks whether there's an editable position next to that node.
			function ctxRequiresFix(node, isAtEnd) {
				// It's ok for us if a text node absorbs the caret, because
				// the caret container element isn't changed then.
				if (!node || node.type == CKEDITOR.NODE_TEXT) return false;
	
				var testRng = range.clone();
				return testRng['moveToElementEdit' + (isAtEnd ? 'End' : 'Start')](node);
			}
	
			// Range root must be the editable element, it's to avoid creating filler char
			// on any temporary internal selection.
			if (!(range.root instanceof CKEDITOR.editable)) return false;
	
			var ct = range.startContainer;
	
			var previous = range.getPreviousNode(mayAbsorbCaret, null, ct),
			    next = range.getNextNode(mayAbsorbCaret, null, ct);
	
			// Any adjacent text container may absorb the caret, e.g.
			// <p><strong>text</strong>^foo</p>
			// <p>foo^<strong>text</strong></p>
			// <div>^<p>foo</p></div>
			if (ctxRequiresFix(previous) || ctxRequiresFix(next, 1)) return true;
	
			// Empty block/inline element is also affected. <span>^</span>, <p>^</p> (#7222)
			// If you found this line confusing check #12655.
			if (!(previous || next) && !(ct.type == CKEDITOR.NODE_ELEMENT && ct.isBlockBoundary() && ct.getBogus())) return true;
	
			return false;
		}
	
		function createFillingCharSequenceNode(editable) {
			removeFillingCharSequenceNode(editable, false);
	
			var fillingChar = editable.getDocument().createText(fillingCharSequence);
			editable.setCustomData('cke-fillingChar', fillingChar);
	
			return fillingChar;
		}
	
		// Checks if a filling char has been used, eventualy removing it (#1272).
		function checkFillingCharSequenceNodeReady(editable) {
			var fillingChar = editable.getCustomData('cke-fillingChar');
	
			if (fillingChar) {
				// Use this flag to avoid removing the filling char right after
				// creating it.
				if (fillingChar.getCustomData('ready')) {
					removeFillingCharSequenceNode(editable);
				} else {
					fillingChar.setCustomData('ready', 1);
				}
			}
		}
	
		function removeFillingCharSequenceNode(editable, keepSelection) {
			var fillingChar = editable && editable.removeCustomData('cke-fillingChar');
	
			if (fillingChar) {
				// Text selection position might get mangled by
				// subsequent dom modification, save it now for restoring. (#8617)
				if (keepSelection !== false) {
					var sel = editable.getDocument().getSelection().getNative(),
	
					// Be error proof.
					range = sel && sel.type != 'None' && sel.getRangeAt(0),
					    fillingCharSeqLength = fillingCharSequence.length;
	
					// If there's some text other than the sequence in the FC text node and the range
					// intersects with that node...
					if (fillingChar.getLength() > fillingCharSeqLength && range && range.intersectsNode(fillingChar.$)) {
						var bm = createNativeSelectionBookmark(sel);
	
						// Correct start offset anticipating the removal of FC.
						if (sel.anchorNode == fillingChar.$ && sel.anchorOffset > fillingCharSeqLength) {
							bm[0].offset -= fillingCharSeqLength;
						}
	
						// Correct end offset anticipating the removal of FC.
						if (sel.focusNode == fillingChar.$ && sel.focusOffset > fillingCharSeqLength) {
							bm[1].offset -= fillingCharSeqLength;
						}
					}
				}
	
				// We can't simply remove the filling node because the user
				// will actually enlarge it when typing, so we just remove the
				// invisible char from it.
				fillingChar.setText(removeFillingCharSequenceString(fillingChar.getText(), 1));
	
				// Restore the bookmark preserving selection's direction.
				if (bm) {
					moveNativeSelectionToBookmark(editable.getDocument().$, bm);
				}
			}
		}
	
		// #13816
		function removeFillingCharSequenceString(str, nbspAware) {
			if (nbspAware) {
				return str.replace(fillingCharSequenceRegExp, function (m, p) {
					// #10291 if filling char is followed by a space replace it with NBSP.
					return p ? '\xa0' : '';
				});
			} else {
				return str.replace(fillingCharSequence, '');
			}
		}
	
		function createNativeSelectionBookmark(sel) {
			return [{ node: sel.anchorNode, offset: sel.anchorOffset }, { node: sel.focusNode, offset: sel.focusOffset }];
		}
	
		function moveNativeSelectionToBookmark(document, bm) {
			var sel = document.getSelection(),
			    range = document.createRange();
	
			range.setStart(bm[0].node, bm[0].offset);
			range.collapse(true);
			sel.removeAllRanges();
			sel.addRange(range);
			sel.extend(bm[1].node, bm[1].offset);
		}
	
		// Creates cke_hidden_sel container and puts real selection there.
		function hideSelection(editor, ariaLabel) {
			var content = ariaLabel || '&nbsp;',
			    style = CKEDITOR.env.ie ? 'display:none' : 'position:fixed;top:0;left:-1000px',
			    hiddenEl = CKEDITOR.dom.element.createFromHtml('<div data-cke-hidden-sel="1" data-cke-temp="1" style="' + style + '">' + content + '</div>', editor.document);
	
			editor.fire('lockSnapshot');
	
			editor.editable().append(hiddenEl);
	
			// Always use real selection to avoid overriding locked one (http://dev.ckeditor.com/ticket/11104#comment:13).
			var sel = editor.getSelection(1),
			    range = editor.createRange(),
	
			// Cancel selectionchange fired by selectRanges - prevent from firing selectionChange.
			listener = sel.root.on('selectionchange', function (evt) {
				evt.cancel();
			}, null, null, 0);
	
			range.setStartAt(hiddenEl, CKEDITOR.POSITION_AFTER_START);
			range.setEndAt(hiddenEl, CKEDITOR.POSITION_BEFORE_END);
			sel.selectRanges([range]);
	
			listener.removeListener();
	
			editor.fire('unlockSnapshot');
	
			// Set this value at the end, so reset() executed by selectRanges()
			// will clean up old hidden selection container.
			editor._.hiddenSelectionContainer = hiddenEl;
		}
	
		function removeHiddenSelectionContainer(editor) {
			var hiddenEl = editor._.hiddenSelectionContainer;
	
			if (hiddenEl) {
				var isDirty = editor.checkDirty();
	
				editor.fire('lockSnapshot');
				hiddenEl.remove();
				editor.fire('unlockSnapshot');
	
				!isDirty && editor.resetDirty();
			}
	
			delete editor._.hiddenSelectionContainer;
		}
	
		// Object containing keystroke handlers for fake selection.
		var fakeSelectionDefaultKeystrokeHandlers = function () {
			function leave(right) {
				return function (evt) {
					var range = evt.editor.createRange();
	
					// Move selection only if there's a editable place for it.
					// It no, then do nothing (keystroke will be blocked, widget selection kept).
					if (range.moveToClosestEditablePosition(evt.selected, right)) evt.editor.getSelection().selectRanges([range]);
	
					// Prevent default.
					return false;
				};
			}
	
			function del(right) {
				return function (evt) {
					var editor = evt.editor,
					    range = editor.createRange(),
					    found;
	
					// If haven't found place for caret on the default side,
					// try to find it on the other side.
					if (!(found = range.moveToClosestEditablePosition(evt.selected, right))) found = range.moveToClosestEditablePosition(evt.selected, !right);
	
					if (found) editor.getSelection().selectRanges([range]);
	
					// Save the state before removing selected element.
					editor.fire('saveSnapshot');
	
					evt.selected.remove();
	
					// Haven't found any editable space before removing element,
					// try to place the caret anywhere (most likely, in empty editable).
					if (!found) {
						range.moveToElementEditablePosition(editor.editable());
						editor.getSelection().selectRanges([range]);
					}
	
					editor.fire('saveSnapshot');
	
					// Prevent default.
					return false;
				};
			}
	
			var leaveLeft = leave(),
			    leaveRight = leave(1);
	
			return {
				37: leaveLeft, // LEFT
				38: leaveLeft, // UP
				39: leaveRight, // RIGHT
				40: leaveRight, // DOWN
				8: del(), // BACKSPACE
				46: del(1) // DELETE
			};
		}();
	
		// Handle left, right, delete and backspace keystrokes next to non-editable elements
		// by faking selection on them.
		function getOnKeyDownListener(editor) {
			var keystrokes = { 37: 1, 39: 1, 8: 1, 46: 1 };
	
			return function (evt) {
				var keystroke = evt.data.getKeystroke();
	
				// Handle only left/right/del/bspace keys.
				if (!keystrokes[keystroke]) return;
	
				var sel = editor.getSelection(),
				    ranges = sel.getRanges(),
				    range = ranges[0];
	
				// Handle only single range and it has to be collapsed.
				if (ranges.length != 1 || !range.collapsed) return;
	
				var next = range[keystroke < 38 ? 'getPreviousEditableNode' : 'getNextEditableNode']();
	
				if (next && next.type == CKEDITOR.NODE_ELEMENT && next.getAttribute('contenteditable') == 'false') {
					editor.getSelection().fake(next);
					evt.data.preventDefault();
					evt.cancel();
				}
			};
		}
	
		// If fake selection should be applied this function will return instance of
		// CKEDITOR.dom.element which should gain fake selection.
		function getNonEditableFakeSelectionReceiver(ranges) {
			var enclosedNode, shrinkedNode, clone, range;
	
			if (ranges.length == 1 && !(range = ranges[0]).collapsed && (enclosedNode = range.getEnclosedNode()) && enclosedNode.type == CKEDITOR.NODE_ELEMENT) {
				// So far we can't say that enclosed element is non-editable. Before checking,
				// we'll shrink range (clone). Shrinking will stop on non-editable range, or
				// innermost element (#11114).
				clone = range.clone();
				clone.shrink(CKEDITOR.SHRINK_ELEMENT, true);
	
				// If shrinked range still encloses an element, check this one (shrink stops only on non-editable elements).
				if ((shrinkedNode = clone.getEnclosedNode()) && shrinkedNode.type == CKEDITOR.NODE_ELEMENT) enclosedNode = shrinkedNode;
	
				if (enclosedNode.getAttribute('contenteditable') == 'false') return enclosedNode;
			}
		}
	
		// Fix ranges which may end after hidden selection container.
		// Note: this function may only be used if hidden selection container
		// is not in DOM any more.
		function fixRangesAfterHiddenSelectionContainer(ranges, root) {
			var range;
			for (var i = 0; i < ranges.length; ++i) {
				range = ranges[i];
				if (range.endContainer.equals(root)) {
					// We can use getChildCount() because hidden selection container is not in DOM.
					range.endOffset = Math.min(range.endOffset, root.getChildCount());
				}
			}
		}
	
		// Extract only editable part or ranges.
		// Note: this function modifies ranges list!
		// @param {CKEDITOR.dom.rangeList} ranges
		function extractEditableRanges(ranges) {
			for (var i = 0; i < ranges.length; i++) {
				var range = ranges[i];
	
				// Drop range spans inside one ready-only node.
				var parent = range.getCommonAncestor();
				if (parent.isReadOnly()) ranges.splice(i, 1);
	
				if (range.collapsed) continue;
	
				// Range may start inside a non-editable element,
				// replace the range start after it.
				if (range.startContainer.isReadOnly()) {
					var current = range.startContainer,
					    isElement;
	
					while (current) {
						isElement = current.type == CKEDITOR.NODE_ELEMENT;
	
						if (isElement && current.is('body') || !current.isReadOnly()) break;
	
						if (isElement && current.getAttribute('contentEditable') == 'false') range.setStartAfter(current);
	
						current = current.getParent();
					}
				}
	
				var startContainer = range.startContainer,
				    endContainer = range.endContainer,
				    startOffset = range.startOffset,
				    endOffset = range.endOffset,
				    walkerRange = range.clone();
	
				// Enlarge range start/end with text node to avoid walker
				// being DOM destructive, it doesn't interfere our checking
				// of elements below as well.
				if (startContainer && startContainer.type == CKEDITOR.NODE_TEXT) {
					if (startOffset >= startContainer.getLength()) walkerRange.setStartAfter(startContainer);else walkerRange.setStartBefore(startContainer);
				}
	
				if (endContainer && endContainer.type == CKEDITOR.NODE_TEXT) {
					if (!endOffset) walkerRange.setEndBefore(endContainer);else walkerRange.setEndAfter(endContainer);
				}
	
				// Looking for non-editable element inside the range.
				var walker = new CKEDITOR.dom.walker(walkerRange);
				walker.evaluator = function (node) {
					if (node.type == CKEDITOR.NODE_ELEMENT && node.isReadOnly()) {
						var newRange = range.clone();
						range.setEndBefore(node);
	
						// Drop collapsed range around read-only elements,
						// it make sure the range list empty when selecting
						// only non-editable elements.
						if (range.collapsed) ranges.splice(i--, 1);
	
						// Avoid creating invalid range.
						if (!(node.getPosition(walkerRange.endContainer) & CKEDITOR.POSITION_CONTAINS)) {
							newRange.setStartAfter(node);
							if (!newRange.collapsed) ranges.splice(i + 1, 0, newRange);
						}
	
						return true;
					}
	
					return false;
				};
	
				walker.next();
			}
	
			return ranges;
		}
	
		// Setup all editor instances for the necessary selection hooks.
		CKEDITOR.on('instanceCreated', function (ev) {
			var editor = ev.editor;
	
			editor.on('contentDom', function () {
				var doc = editor.document,
				    outerDoc = CKEDITOR.document,
				    editable = editor.editable(),
				    body = doc.getBody(),
				    html = doc.getDocumentElement();
	
				var isInline = editable.isInline();
	
				var restoreSel, lastSel;
	
				// Give the editable an initial selection on first focus,
				// put selection at a consistent position at the start
				// of the contents. (#9507)
				if (CKEDITOR.env.gecko) {
					editable.attachListener(editable, 'focus', function (evt) {
						evt.removeListener();
	
						if (restoreSel !== 0) {
							var nativ = editor.getSelection().getNative();
							// Do it only if the native selection is at an unwanted
							// place (at the very start of the editable). #10119
							if (nativ && nativ.isCollapsed && nativ.anchorNode == editable.$) {
								var rng = editor.createRange();
								rng.moveToElementEditStart(editable);
								rng.select();
							}
						}
					}, null, null, -2);
				}
	
				// Plays the magic here to restore/save dom selection on editable focus/blur.
				editable.attachListener(editable, CKEDITOR.env.webkit ? 'DOMFocusIn' : 'focus', function () {
					// On Webkit we use DOMFocusIn which is fired more often than focus - e.g. when moving from main editable
					// to nested editable (or the opposite). Unlock selection all, but restore only when it was locked
					// for the same active element, what will e.g. mean restoring after displaying dialog.
					if (restoreSel && CKEDITOR.env.webkit) restoreSel = editor._.previousActive && editor._.previousActive.equals(doc.getActive());
	
					editor.unlockSelection(restoreSel);
					restoreSel = 0;
				}, null, null, -1);
	
				// Disable selection restoring when clicking in.
				editable.attachListener(editable, 'mousedown', function () {
					restoreSel = 0;
				});
	
				// Save a cloned version of current selection.
				function saveSel() {
					lastSel = new CKEDITOR.dom.selection(editor.getSelection());
					lastSel.lock();
				}
	
				// Browsers could loose the selection once the editable lost focus,
				// in such case we need to reproduce it by saving a locked selection
				// and restoring it upon focus gain.
				if (CKEDITOR.env.ie || isInline) {
					// For old IEs, we can retrieve the last correct DOM selection upon the "beforedeactivate" event.
					// For the rest, a more frequent check is required for each selection change made.
					if (isMSSelection) editable.attachListener(editable, 'beforedeactivate', saveSel, null, null, -1);else editable.attachListener(editor, 'selectionCheck', saveSel, null, null, -1);
	
					// Lock the selection and mark it to be restored.
					// On Webkit we use DOMFocusOut which is fired more often than blur. I.e. it will also be
					// fired when nested editable is blurred.
					editable.attachListener(editable, CKEDITOR.env.webkit ? 'DOMFocusOut' : 'blur', function () {
						editor.lockSelection(lastSel);
						restoreSel = 1;
					}, null, null, -1);
	
					// Disable selection restoring when clicking in.
					editable.attachListener(editable, 'mousedown', function () {
						restoreSel = 0;
					});
				}
	
				// The following selection-related fixes only apply to classic (`iframe`-based) editable.
				if (CKEDITOR.env.ie && !isInline) {
					var scroll;
					editable.attachListener(editable, 'mousedown', function (evt) {
						// IE scrolls document to top on right mousedown
						// when editor has no focus, remember this scroll
						// position and revert it before context menu opens. (#5778)
						if (evt.data.$.button == 2) {
							var sel = editor.document.getSelection();
							if (!sel || sel.getType() == CKEDITOR.SELECTION_NONE) scroll = editor.window.getScrollPosition();
						}
					});
	
					editable.attachListener(editable, 'mouseup', function (evt) {
						// Restore recorded scroll position when needed on right mouseup.
						if (evt.data.$.button == 2 && scroll) {
							editor.document.$.documentElement.scrollLeft = scroll.x;
							editor.document.$.documentElement.scrollTop = scroll.y;
						}
						scroll = null;
					});
	
					// When content doc is in standards mode, IE doesn't focus the editor when
					// clicking at the region below body (on html element) content, we emulate
					// the normal behavior on old IEs. (#1659, #7932)
					if (doc.$.compatMode != 'BackCompat') {
						if (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) {
							html.on('mousedown', function (evt) {
								evt = evt.data;
	
								// Expand the text range along with mouse move.
								function onHover(evt) {
									evt = evt.data.$;
									if (textRng) {
										// Read the current cursor.
										var rngEnd = body.$.createTextRange();
	
										moveRangeToPoint(rngEnd, evt.clientX, evt.clientY);
	
										// Handle drag directions.
										textRng.setEndPoint(startRng.compareEndPoints('StartToStart', rngEnd) < 0 ? 'EndToEnd' : 'StartToStart', rngEnd);
	
										// Update selection with new range.
										textRng.select();
									}
								}
	
								function removeListeners() {
									outerDoc.removeListener('mouseup', onSelectEnd);
									html.removeListener('mouseup', onSelectEnd);
								}
	
								function onSelectEnd() {
									html.removeListener('mousemove', onHover);
									removeListeners();
	
									// Make it in effect on mouse up. (#9022)
									textRng.select();
								}
	
								// We're sure that the click happens at the region
								// below body, but not on scrollbar.
								if (evt.getTarget().is('html') && evt.$.y < html.$.clientHeight && evt.$.x < html.$.clientWidth) {
									// Start to build the text range.
									var textRng = body.$.createTextRange();
									moveRangeToPoint(textRng, evt.$.clientX, evt.$.clientY);
	
									// Records the dragging start of the above text range.
									var startRng = textRng.duplicate();
	
									html.on('mousemove', onHover);
									outerDoc.on('mouseup', onSelectEnd);
									html.on('mouseup', onSelectEnd);
								}
							});
						}
	
						// It's much simpler for IE8+, we just need to reselect the reported range.
						// This hack does not work on IE>=11 because there's no old selection&range APIs.
						if (CKEDITOR.env.version > 7 && CKEDITOR.env.version < 11) {
							html.on('mousedown', function (evt) {
								if (evt.data.getTarget().is('html')) {
									// Limit the text selection mouse move inside of editable. (#9715)
									outerDoc.on('mouseup', onSelectEnd);
									html.on('mouseup', onSelectEnd);
								}
							});
						}
					}
				}
	
				// We check the selection change:
				// 1. Upon "selectionchange" event from the editable element. (which might be faked event fired by our code)
				// 2. After the accomplish of keyboard and mouse events.
				editable.attachListener(editable, 'selectionchange', checkSelectionChange, editor);
				editable.attachListener(editable, 'keyup', checkSelectionChangeTimeout, editor);
				// Always fire the selection change on focus gain.
				// On Webkit do this on DOMFocusIn, because the selection is unlocked on it too and
				// we need synchronization between those listeners to not lost cached editor._.previousActive property
				// (which is updated on selectionCheck).
				editable.attachListener(editable, CKEDITOR.env.webkit ? 'DOMFocusIn' : 'focus', function () {
					editor.forceNextSelectionCheck();
					editor.selectionChange(1);
				});
	
				// #9699: On Webkit&Gecko in inline editor we have to check selection when it was changed
				// by dragging and releasing mouse button outside editable. Dragging (mousedown)
				// has to be initialized in editable, but for mouseup we listen on document element.
				if (isInline && (CKEDITOR.env.webkit || CKEDITOR.env.gecko)) {
					var mouseDown;
					editable.attachListener(editable, 'mousedown', function () {
						mouseDown = 1;
					});
					editable.attachListener(doc.getDocumentElement(), 'mouseup', function () {
						if (mouseDown) checkSelectionChangeTimeout.call(editor);
						mouseDown = 0;
					});
				}
				// In all other cases listen on simple mouseup over editable, as we did before #9699.
				//
				// Use document instead of editable in non-IEs for observing mouseup
				// since editable won't fire the event if selection process started within iframe and ended out
				// of the editor (#9851).
				else {
						editable.attachListener(CKEDITOR.env.ie ? editable : doc.getDocumentElement(), 'mouseup', checkSelectionChangeTimeout, editor);
					}
	
				if (CKEDITOR.env.webkit) {
					// Before keystroke is handled by editor, check to remove the filling char.
					editable.attachListener(doc, 'keydown', function (evt) {
						var key = evt.data.getKey();
						// Remove the filling char before some keys get
						// executed, so they'll not get blocked by it.
						switch (key) {
							case 13: // ENTER
							case 33: // PAGEUP
							case 34: // PAGEDOWN
							case 35: // HOME
							case 36: // END
							case 37: // LEFT-ARROW
							case 39: // RIGHT-ARROW
							case 8: // BACKSPACE
							case 45: // INS
							case 46:
								// DEl
								removeFillingCharSequenceNode(editable);
						}
					}, null, null, -1);
				}
	
				// Automatically select non-editable element when navigating into
				// it by left/right or backspace/del keys.
				editable.attachListener(editable, 'keydown', getOnKeyDownListener(editor), null, null, -1);
	
				function moveRangeToPoint(range, x, y) {
					// Error prune in IE7. (#9034, #9110)
					try {
						range.moveToPoint(x, y);
					} catch (e) {}
				}
	
				function removeListeners() {
					outerDoc.removeListener('mouseup', onSelectEnd);
					html.removeListener('mouseup', onSelectEnd);
				}
	
				function onSelectEnd() {
					removeListeners();
	
					// The event is not fired when clicking on the scrollbars,
					// so we can safely check the following to understand
					// whether the empty space following <body> has been clicked.
					var sel = CKEDITOR.document.$.selection,
					    range = sel.createRange();
	
					// The selection range is reported on host, but actually it should applies to the content doc.
					if (sel.type != 'None' && range.parentElement().ownerDocument == doc.$) range.select();
				}
			});
	
			editor.on('setData', function () {
				// Invalidate locked selection when unloading DOM.
				// (#9521, #5217#comment:32 and #11500#comment:11)
				editor.unlockSelection();
	
				// Webkit's selection will mess up after the data loading.
				if (CKEDITOR.env.webkit) clearSelection();
			});
	
			// Catch all the cases which above setData listener couldn't catch.
			// For example: switching to source mode and destroying editor.
			editor.on('contentDomUnload', function () {
				editor.unlockSelection();
			});
	
			// IE9 might cease to work if there's an object selection inside the iframe (#7639).
			if (CKEDITOR.env.ie9Compat) editor.on('beforeDestroy', clearSelection, null, null, 9);
	
			// Check selection change on data reload.
			editor.on('dataReady', function () {
				// Clean up fake selection after setting data.
				delete editor._.fakeSelection;
				delete editor._.hiddenSelectionContainer;
	
				editor.selectionChange(1);
			});
	
			// When loaded data are ready check whether hidden selection container was not loaded.
			editor.on('loadSnapshot', function () {
				var isElement = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT),
	
				// TODO replace with el.find() which will be introduced in #9764,
				// because it may happen that hidden sel container won't be the last element.
				last = editor.editable().getLast(isElement);
	
				if (last && last.hasAttribute('data-cke-hidden-sel')) {
					last.remove();
	
					// Firefox does a very unfortunate thing. When a non-editable element is the only
					// element in the editable, when we remove the hidden selection container, Firefox
					// will insert a bogus <br> at the beginning of the editable...
					// See: https://bugzilla.mozilla.org/show_bug.cgi?id=911201
					//
					// This behavior is never desired because this <br> pushes the content lower, but in
					// this case it is especially dangerous, because it happens when a bookmark is being restored.
					// Since this <br> is inserted at the beginning it changes indexes and thus breaks the bookmark2
					// what results in errors.
					//
					// So... let's revert what Firefox broke.
					if (CKEDITOR.env.gecko) {
						var first = editor.editable().getFirst(isElement);
						if (first && first.is('br') && first.getAttribute('_moz_editor_bogus_node')) {
							first.remove();
						}
					}
				}
			}, null, null, 100);
	
			editor.on('key', function (evt) {
				if (editor.mode != 'wysiwyg') return;
	
				var sel = editor.getSelection();
				if (!sel.isFake) return;
	
				var handler = fakeSelectionDefaultKeystrokeHandlers[evt.data.keyCode];
				if (handler) return handler({ editor: editor, selected: sel.getSelectedElement(), selection: sel, keyEvent: evt });
			});
	
			function clearSelection() {
				var sel = editor.getSelection();
				sel && sel.removeAllRanges();
			}
		});
	
		// On WebKit only, we need a special "filling" char on some situations
		// (#1272). Here we set the events that should invalidate that char.
		if (CKEDITOR.env.webkit) {
			CKEDITOR.on('instanceReady', function (evt) {
				var editor = evt.editor;
	
				editor.on('selectionChange', function () {
					checkFillingCharSequenceNodeReady(editor.editable());
				}, null, null, -1);
	
				editor.on('beforeSetMode', function () {
					removeFillingCharSequenceNode(editor.editable());
				}, null, null, -1);
	
				// Filter Undo snapshot's HTML to get rid of Filling Char Sequence.
				// Note: CKEDITOR.dom.range.createBookmark2() normalizes snapshot's
				// bookmarks to anticipate the removal of FCSeq from the snapshot's HTML (#13816).
				editor.on('getSnapshot', function (evt) {
					if (evt.data) {
						evt.data = removeFillingCharSequenceString(evt.data);
					}
				}, editor, null, 20);
	
				// Filter data to get rid of Filling Char Sequence. Filter on #toDataFormat
				// instead of #getData because once removed, FCSeq may leave an empty element,
				// which should be pruned by the dataProcessor (#13816).
				// Note: Used low priority to filter when dataProcessor works on strings,
				// not pseudo–DOM.
				editor.on('toDataFormat', function (evt) {
					evt.data.dataValue = removeFillingCharSequenceString(evt.data.dataValue);
				}, null, null, 0);
			});
		}
	
		/**
	  * Check the selection change in editor and potentially fires
	  * the {@link CKEDITOR.editor#event-selectionChange} event.
	  *
	  * @method
	  * @member CKEDITOR.editor
	  * @param {Boolean} [checkNow=false] Force the check to happen immediately
	  * instead of coming with a timeout delay (default).
	  */
		CKEDITOR.editor.prototype.selectionChange = function (checkNow) {
			(checkNow ? checkSelectionChange : checkSelectionChangeTimeout).call(this);
		};
	
		/**
	  * Retrieve the editor selection in scope of editable element.
	  *
	  * **Note:** Since the native browser selection provides only one single
	  * selection at a time per document, so if editor's editable element has lost focus,
	  * this method will return a null value unless the {@link CKEDITOR.editor#lockSelection}
	  * has been called beforehand so the saved selection is retrieved.
	  *
	  *		var selection = CKEDITOR.instances.editor1.getSelection();
	  *		alert( selection.getType() );
	  *
	  * @method
	  * @member CKEDITOR.editor
	  * @param {Boolean} forceRealSelection Return real selection, instead of saved or fake one.
	  * @returns {CKEDITOR.dom.selection} A selection object or null if not available for the moment.
	  */
		CKEDITOR.editor.prototype.getSelection = function (forceRealSelection) {
	
			// Check if there exists a locked or fake selection.
			if ((this._.savedSelection || this._.fakeSelection) && !forceRealSelection) return this._.savedSelection || this._.fakeSelection;
	
			// Editable element might be absent or editor might not be in a wysiwyg mode.
			var editable = this.editable();
			return editable && this.mode == 'wysiwyg' ? new CKEDITOR.dom.selection(editable) : null;
		};
	
		/**
	  * Locks the selection made in the editor in order to make it possible to
	  * manipulate it without browser interference. A locked selection is
	  * cached and remains unchanged until it is released with the
	  * {@link CKEDITOR.editor#unlockSelection} method.
	  *
	  * @method
	  * @member CKEDITOR.editor
	  * @param {CKEDITOR.dom.selection} [sel] Specify the selection to be locked.
	  * @returns {Boolean} `true` if selection was locked.
	  */
		CKEDITOR.editor.prototype.lockSelection = function (sel) {
			sel = sel || this.getSelection(1);
			if (sel.getType() != CKEDITOR.SELECTION_NONE) {
				!sel.isLocked && sel.lock();
				this._.savedSelection = sel;
				return true;
			}
			return false;
		};
	
		/**
	  * Unlocks the selection made in the editor and locked with the
	  * {@link CKEDITOR.editor#unlockSelection} method. An unlocked selection
	  * is no longer cached and can be changed.
	  *
	  * @method
	  * @member CKEDITOR.editor
	  * @param {Boolean} [restore] If set to `true`, the selection is
	  * restored back to the selection saved earlier by using the
	  * {@link CKEDITOR.dom.selection#lock} method.
	  */
		CKEDITOR.editor.prototype.unlockSelection = function (restore) {
			var sel = this._.savedSelection;
			if (sel) {
				sel.unlock(restore);
				delete this._.savedSelection;
				return true;
			}
	
			return false;
		};
	
		/**
	  * @method
	  * @member CKEDITOR.editor
	  * @todo
	  */
		CKEDITOR.editor.prototype.forceNextSelectionCheck = function () {
			delete this._.selectionPreviousPath;
		};
	
		/**
	  * Gets the current selection in context of the document's body element.
	  *
	  *		var selection = CKEDITOR.instances.editor1.document.getSelection();
	  *		alert( selection.getType() );
	  *
	  * @method
	  * @member CKEDITOR.dom.document
	  * @returns {CKEDITOR.dom.selection} A selection object.
	  */
		CKEDITOR.dom.document.prototype.getSelection = function () {
			return new CKEDITOR.dom.selection(this);
		};
	
		/**
	  * Select this range as the only one with {@link CKEDITOR.dom.selection#selectRanges}.
	  *
	  * @method
	  * @returns {CKEDITOR.dom.selection}
	  * @member CKEDITOR.dom.range
	  */
		CKEDITOR.dom.range.prototype.select = function () {
			var sel = this.root instanceof CKEDITOR.editable ? this.root.editor.getSelection() : new CKEDITOR.dom.selection(this.root);
	
			sel.selectRanges([this]);
	
			return sel;
		};
	
		/**
	  * No selection.
	  *
	  *		if ( editor.getSelection().getType() == CKEDITOR.SELECTION_NONE )
	  *			alert( 'Nothing is selected' );
	  *
	  * @readonly
	  * @property {Number} [=1]
	  * @member CKEDITOR
	  */
		CKEDITOR.SELECTION_NONE = 1;
	
		/**
	  * A text or a collapsed selection.
	  *
	  *		if ( editor.getSelection().getType() == CKEDITOR.SELECTION_TEXT )
	  *			alert( 'A text is selected' );
	  *
	  * @readonly
	  * @property {Number} [=2]
	  * @member CKEDITOR
	  */
		CKEDITOR.SELECTION_TEXT = 2;
	
		/**
	  * Element selection.
	  *
	  *		if ( editor.getSelection().getType() == CKEDITOR.SELECTION_ELEMENT )
	  *			alert( 'An element is selected' );
	  *
	  * @readonly
	  * @property {Number} [=3]
	  * @member CKEDITOR
	  */
		CKEDITOR.SELECTION_ELEMENT = 3;
	
		var isMSSelection = typeof window.getSelection != 'function',
		    nextRev = 1;
	
		/**
	  * Manipulates the selection within a DOM element. If the current browser selection
	  * spans outside of the element, an empty selection object is returned.
	  *
	  * Despite the fact that selection's constructor allows to create selection instances,
	  * usually it's better to get selection from the editor instance:
	  *
	  *		var sel = editor.getSelection();
	  *
	  * See {@link CKEDITOR.editor#getSelection}.
	  *
	  * @class
	  * @constructor Creates a selection class instance.
	  *
	  *		// Selection scoped in document.
	  *		var sel = new CKEDITOR.dom.selection( CKEDITOR.document );
	  *
	  *		// Selection scoped in element with 'editable' id.
	  *		var sel = new CKEDITOR.dom.selection( CKEDITOR.document.getById( 'editable' ) );
	  *
	  *		// Cloning selection.
	  *		var clone = new CKEDITOR.dom.selection( sel );
	  *
	  * @param {CKEDITOR.dom.document/CKEDITOR.dom.element/CKEDITOR.dom.selection} target
	  * The DOM document/element that the DOM selection is restrained to. Only selection which spans
	  * within the target element is considered as valid.
	  *
	  * If {@link CKEDITOR.dom.selection} is passed, then its clone will be created.
	  */
		CKEDITOR.dom.selection = function (target) {
			// Target is a selection - clone it.
			if (target instanceof CKEDITOR.dom.selection) {
				var selection = target;
				target = target.root;
			}
	
			var isElement = target instanceof CKEDITOR.dom.element,
			    root;
	
			this.rev = selection ? selection.rev : nextRev++;
			this.document = target instanceof CKEDITOR.dom.document ? target : target.getDocument();
			this.root = root = isElement ? target : this.document.getBody();
			this.isLocked = 0;
			this._ = {
				cache: {}
			};
	
			// Clone selection.
			if (selection) {
				CKEDITOR.tools.extend(this._.cache, selection._.cache);
				this.isFake = selection.isFake;
				this.isLocked = selection.isLocked;
				return this;
			}
	
			// Check whether browser focus is really inside of the editable element.
	
			var nativeSel = this.getNative(),
			    rangeParent,
			    range;
	
			if (nativeSel) {
				if (nativeSel.getRangeAt) {
					range = nativeSel.rangeCount && nativeSel.getRangeAt(0);
					rangeParent = range && new CKEDITOR.dom.node(range.commonAncestorContainer);
				}
				// For old IEs.
				else {
						// Sometimes, mostly when selection is close to the table or hr,
						// IE throws "Unspecified error".
						try {
							range = nativeSel.createRange();
						} catch (err) {}
						rangeParent = range && CKEDITOR.dom.element.get(range.item && range.item(0) || range.parentElement());
					}
			}
	
			// Selection out of concerned range, empty the selection.
			// TODO check whether this condition cannot be reverted to its old
			// form (commented out) after we closed #10438.
			//if ( !( rangeParent && ( root.equals( rangeParent ) || root.contains( rangeParent ) ) ) ) {
			if (!(rangeParent && (rangeParent.type == CKEDITOR.NODE_ELEMENT || rangeParent.type == CKEDITOR.NODE_TEXT) && (this.root.equals(rangeParent) || this.root.contains(rangeParent)))) {
	
				this._.cache.type = CKEDITOR.SELECTION_NONE;
				this._.cache.startElement = null;
				this._.cache.selectedElement = null;
				this._.cache.selectedText = '';
				this._.cache.ranges = new CKEDITOR.dom.rangeList();
			}
	
			return this;
		};
	
		var styleObjectElements = { img: 1, hr: 1, li: 1, table: 1, tr: 1, td: 1, th: 1, embed: 1, object: 1, ol: 1, ul: 1,
			a: 1, input: 1, form: 1, select: 1, textarea: 1, button: 1, fieldset: 1, thead: 1, tfoot: 1 };
	
		// #13816
		var fillingCharSequence = CKEDITOR.tools.repeat('\u200b', 7),
		    fillingCharSequenceRegExp = new RegExp(fillingCharSequence + '( )?', 'g');
	
		CKEDITOR.tools.extend(CKEDITOR.dom.selection, {
			_removeFillingCharSequenceString: removeFillingCharSequenceString,
			_createFillingCharSequenceNode: createFillingCharSequenceNode,
	
			/**
	   * The sequence used in a WebKit-based browser to create a Filling Character. By default it is
	   * a string of 7 zero-width space characters (U+200B).
	   *
	   * @since 4.5.7
	   * @readonly
	   * @property {String}
	   */
			FILLING_CHAR_SEQUENCE: fillingCharSequence
		});
	
		CKEDITOR.dom.selection.prototype = {
			/**
	   * Gets the native selection object from the browser.
	   *
	   *		var selection = editor.getSelection().getNative();
	   *
	   * @returns {Object} The native browser selection object.
	   */
			getNative: function () {
				if (this._.cache.nativeSel !== undefined) return this._.cache.nativeSel;
	
				return this._.cache.nativeSel = isMSSelection ? this.document.$.selection : this.document.getWindow().$.getSelection();
			},
	
			/**
	   * Gets the type of the current selection. The following values are
	   * available:
	   *
	   * * {@link CKEDITOR#SELECTION_NONE} (1): No selection.
	   * * {@link CKEDITOR#SELECTION_TEXT} (2): A text or a collapsed selection is selected.
	   * * {@link CKEDITOR#SELECTION_ELEMENT} (3): An element is selected.
	   *
	   * Example:
	   *
	   *		if ( editor.getSelection().getType() == CKEDITOR.SELECTION_TEXT )
	   *			alert( 'A text is selected' );
	   *
	   * @method
	   * @returns {Number} One of the following constant values: {@link CKEDITOR#SELECTION_NONE},
	   * {@link CKEDITOR#SELECTION_TEXT} or {@link CKEDITOR#SELECTION_ELEMENT}.
	   */
			getType: isMSSelection ? function () {
				var cache = this._.cache;
				if (cache.type) return cache.type;
	
				var type = CKEDITOR.SELECTION_NONE;
	
				try {
					var sel = this.getNative(),
					    ieType = sel.type;
	
					if (ieType == 'Text') type = CKEDITOR.SELECTION_TEXT;
	
					if (ieType == 'Control') type = CKEDITOR.SELECTION_ELEMENT;
	
					// It is possible that we can still get a text range
					// object even when type == 'None' is returned by IE.
					// So we'd better check the object returned by
					// createRange() rather than by looking at the type.
					if (sel.createRange().parentElement()) type = CKEDITOR.SELECTION_TEXT;
				} catch (e) {}
	
				return cache.type = type;
			} : function () {
				var cache = this._.cache;
				if (cache.type) return cache.type;
	
				var type = CKEDITOR.SELECTION_TEXT;
	
				var sel = this.getNative();
	
				if (!(sel && sel.rangeCount)) type = CKEDITOR.SELECTION_NONE;else if (sel.rangeCount == 1) {
					// Check if the actual selection is a control (IMG,
					// TABLE, HR, etc...).
	
					var range = sel.getRangeAt(0),
					    startContainer = range.startContainer;
	
					if (startContainer == range.endContainer && startContainer.nodeType == 1 && range.endOffset - range.startOffset == 1 && styleObjectElements[startContainer.childNodes[range.startOffset].nodeName.toLowerCase()]) {
						type = CKEDITOR.SELECTION_ELEMENT;
					}
				}
	
				return cache.type = type;
			},
	
			/**
	   * Retrieves the {@link CKEDITOR.dom.range} instances that represent the current selection.
	   *
	   * Note: Some browsers return multiple ranges even for a continuous selection. Firefox, for example, returns
	   * one range for each table cell when one or more table rows are selected.
	   *
	   *		var ranges = selection.getRanges();
	   *		alert( ranges.length );
	   *
	   * @method
	   * @param {Boolean} [onlyEditables] If set to `true`, this function retrives editable ranges only.
	   * @returns {Array} Range instances that represent the current selection.
	   */
			getRanges: function () {
				var func = isMSSelection ? function () {
					function getNodeIndex(node) {
						return new CKEDITOR.dom.node(node).getIndex();
					}
	
					// Finds the container and offset for a specific boundary
					// of an IE range.
					var getBoundaryInformation = function (range, start) {
						// Creates a collapsed range at the requested boundary.
						range = range.duplicate();
						range.collapse(start);
	
						// Gets the element that encloses the range entirely.
						var parent = range.parentElement();
	
						// Empty parent element, e.g. <i>^</i>
						if (!parent.hasChildNodes()) return { container: parent, offset: 0 };
	
						var siblings = parent.children,
						    child,
						    sibling,
						    testRange = range.duplicate(),
						    startIndex = 0,
						    endIndex = siblings.length - 1,
						    index = -1,
						    position,
						    distance,
						    container;
	
						// Binary search over all element childs to test the range to see whether
						// range is right on the boundary of one element.
						while (startIndex <= endIndex) {
							index = Math.floor((startIndex + endIndex) / 2);
							child = siblings[index];
							testRange.moveToElementText(child);
							position = testRange.compareEndPoints('StartToStart', range);
	
							if (position > 0) endIndex = index - 1;else if (position < 0) startIndex = index + 1;else return { container: parent, offset: getNodeIndex(child) };
						}
	
						// All childs are text nodes,
						// or to the right hand of test range are all text nodes. (#6992)
						if (index == -1 || index == siblings.length - 1 && position < 0) {
							// Adapt test range to embrace the entire parent contents.
							testRange.moveToElementText(parent);
							testRange.setEndPoint('StartToStart', range);
	
							// IE report line break as CRLF with range.text but
							// only LF with textnode.nodeValue, normalize them to avoid
							// breaking character counting logic below. (#3949)
							distance = testRange.text.replace(/(\r\n|\r)/g, '\n').length;
	
							siblings = parent.childNodes;
	
							// Actual range anchor right beside test range at the boundary of text node.
							if (!distance) {
								child = siblings[siblings.length - 1];
	
								if (child.nodeType != CKEDITOR.NODE_TEXT) return { container: parent, offset: siblings.length };else return { container: child, offset: child.nodeValue.length };
							}
	
							// Start the measuring until distance overflows, meanwhile count the text nodes.
							var i = siblings.length;
							while (distance > 0 && i > 0) {
								sibling = siblings[--i];
								if (sibling.nodeType == CKEDITOR.NODE_TEXT) {
									container = sibling;
									distance -= sibling.nodeValue.length;
								}
							}
	
							return { container: container, offset: -distance };
						}
						// Test range was one offset beyond OR behind the anchored text node.
						else {
								// Adapt one side of test range to the actual range
								// for measuring the offset between them.
								testRange.collapse(position > 0 ? true : false);
								testRange.setEndPoint(position > 0 ? 'StartToStart' : 'EndToStart', range);
	
								// IE report line break as CRLF with range.text but
								// only LF with textnode.nodeValue, normalize them to avoid
								// breaking character counting logic below. (#3949)
								distance = testRange.text.replace(/(\r\n|\r)/g, '\n').length;
	
								// Actual range anchor right beside test range at the inner boundary of text node.
								if (!distance) return { container: parent, offset: getNodeIndex(child) + (position > 0 ? 0 : 1) };
	
								// Start the measuring until distance overflows, meanwhile count the text nodes.
								while (distance > 0) {
									try {
										sibling = child[position > 0 ? 'previousSibling' : 'nextSibling'];
										if (sibling.nodeType == CKEDITOR.NODE_TEXT) {
											distance -= sibling.nodeValue.length;
											container = sibling;
										}
										child = sibling;
									}
									// Measurement in IE could be somtimes wrong because of <select> element. (#4611)
									catch (e) {
										return { container: parent, offset: getNodeIndex(child) };
									}
								}
	
								return { container: container, offset: position > 0 ? -distance : container.nodeValue.length + distance };
							}
					};
	
					return function () {
						// IE doesn't have range support (in the W3C way), so we
						// need to do some magic to transform selections into
						// CKEDITOR.dom.range instances.
	
						var sel = this.getNative(),
						    nativeRange = sel && sel.createRange(),
						    type = this.getType(),
						    range;
	
						if (!sel) return [];
	
						if (type == CKEDITOR.SELECTION_TEXT) {
							range = new CKEDITOR.dom.range(this.root);
	
							var boundaryInfo = getBoundaryInformation(nativeRange, true);
							range.setStart(new CKEDITOR.dom.node(boundaryInfo.container), boundaryInfo.offset);
	
							boundaryInfo = getBoundaryInformation(nativeRange);
							range.setEnd(new CKEDITOR.dom.node(boundaryInfo.container), boundaryInfo.offset);
	
							// Correct an invalid IE range case on empty list item. (#5850)
							if (range.endContainer.getPosition(range.startContainer) & CKEDITOR.POSITION_PRECEDING && range.endOffset <= range.startContainer.getIndex()) range.collapse();
	
							return [range];
						} else if (type == CKEDITOR.SELECTION_ELEMENT) {
							var retval = [];
	
							for (var i = 0; i < nativeRange.length; i++) {
								var element = nativeRange.item(i),
								    parentElement = element.parentNode,
								    j = 0;
	
								range = new CKEDITOR.dom.range(this.root);
	
								for (; j < parentElement.childNodes.length && parentElement.childNodes[j] != element; j++) {}
	
								range.setStart(new CKEDITOR.dom.node(parentElement), j);
								range.setEnd(new CKEDITOR.dom.node(parentElement), j + 1);
								retval.push(range);
							}
	
							return retval;
						}
	
						return [];
					};
				}() : function () {
					// On browsers implementing the W3C range, we simply
					// tranform the native ranges in CKEDITOR.dom.range
					// instances.
	
					var ranges = [],
					    range,
					    sel = this.getNative();
	
					if (!sel) return ranges;
	
					for (var i = 0; i < sel.rangeCount; i++) {
						var nativeRange = sel.getRangeAt(i);
	
						range = new CKEDITOR.dom.range(this.root);
	
						range.setStart(new CKEDITOR.dom.node(nativeRange.startContainer), nativeRange.startOffset);
						range.setEnd(new CKEDITOR.dom.node(nativeRange.endContainer), nativeRange.endOffset);
						ranges.push(range);
					}
					return ranges;
				};
	
				return function (onlyEditables) {
					var cache = this._.cache,
					    ranges = cache.ranges;
	
					if (!ranges) cache.ranges = ranges = new CKEDITOR.dom.rangeList(func.call(this));
	
					if (!onlyEditables) return ranges;
	
					// Split range into multiple by read-only nodes.
					// Clone ranges array to avoid changing cached ranges (#11493).
					return extractEditableRanges(new CKEDITOR.dom.rangeList(ranges.slice()));
				};
			}(),
	
			/**
	   * Gets the DOM element in which the selection starts.
	   *
	   *		var element = editor.getSelection().getStartElement();
	   *		alert( element.getName() );
	   *
	   * @returns {CKEDITOR.dom.element} The element at the beginning of the selection.
	   */
			getStartElement: function () {
				var cache = this._.cache;
				if (cache.startElement !== undefined) return cache.startElement;
	
				var node;
	
				switch (this.getType()) {
					case CKEDITOR.SELECTION_ELEMENT:
						return this.getSelectedElement();
	
					case CKEDITOR.SELECTION_TEXT:
	
						var range = this.getRanges()[0];
	
						if (range) {
							if (!range.collapsed) {
								range.optimize();
	
								// Decrease the range content to exclude particial
								// selected node on the start which doesn't have
								// visual impact. ( #3231 )
								while (1) {
									var startContainer = range.startContainer,
									    startOffset = range.startOffset;
									// Limit the fix only to non-block elements.(#3950)
									if (startOffset == (startContainer.getChildCount ? startContainer.getChildCount() : startContainer.getLength()) && !startContainer.isBlockBoundary()) range.setStartAfter(startContainer);else break;
								}
	
								node = range.startContainer;
	
								if (node.type != CKEDITOR.NODE_ELEMENT) return node.getParent();
	
								node = node.getChild(range.startOffset);
	
								if (!node || node.type != CKEDITOR.NODE_ELEMENT) node = range.startContainer;else {
									var child = node.getFirst();
									while (child && child.type == CKEDITOR.NODE_ELEMENT) {
										node = child;
										child = child.getFirst();
									}
								}
							} else {
								node = range.startContainer;
								if (node.type != CKEDITOR.NODE_ELEMENT) node = node.getParent();
							}
	
							node = node.$;
						}
				}
	
				return cache.startElement = node ? new CKEDITOR.dom.element(node) : null;
			},
	
			/**
	   * Gets the currently selected element.
	   *
	   *		var element = editor.getSelection().getSelectedElement();
	   *		alert( element.getName() );
	   *
	   * @returns {CKEDITOR.dom.element} The selected element. Null if no
	   * selection is available or the selection type is not {@link CKEDITOR#SELECTION_ELEMENT}.
	   */
			getSelectedElement: function () {
				var cache = this._.cache;
				if (cache.selectedElement !== undefined) return cache.selectedElement;
	
				var self = this;
	
				var node = CKEDITOR.tools.tryThese(
				// Is it native IE control type selection?
				function () {
					return self.getNative().createRange().item(0);
				},
				// Figure it out by checking if there's a single enclosed
				// node of the range.
				function () {
					var range = self.getRanges()[0].clone(),
					    enclosed,
					    selected;
	
					// Check first any enclosed element, e.g. <ul>[<li><a href="#">item</a></li>]</ul>
					for (var i = 2; i && !((enclosed = range.getEnclosedNode()) && enclosed.type == CKEDITOR.NODE_ELEMENT && styleObjectElements[enclosed.getName()] && (selected = enclosed)); i--) {
						// Then check any deep wrapped element, e.g. [<b><i><img /></i></b>]
						range.shrink(CKEDITOR.SHRINK_ELEMENT);
					}
	
					return selected && selected.$;
				});
	
				return cache.selectedElement = node ? new CKEDITOR.dom.element(node) : null;
			},
	
			/**
	   * Retrieves the text contained within the range. An empty string is returned for non-text selection.
	   *
	   *		var text = editor.getSelection().getSelectedText();
	   *		alert( text );
	   *
	   * @since 3.6.1
	   * @returns {String} A string of text within the current selection.
	   */
			getSelectedText: function () {
				var cache = this._.cache;
				if (cache.selectedText !== undefined) return cache.selectedText;
	
				var nativeSel = this.getNative(),
				    text = isMSSelection ? nativeSel.type == 'Control' ? '' : nativeSel.createRange().text : nativeSel.toString();
	
				return cache.selectedText = text;
			},
	
			/**
	   * Locks the selection made in the editor in order to make it possible to
	   * manipulate it without browser interference. A locked selection is
	   * cached and remains unchanged until it is released with the {@link #unlock} method.
	   *
	   *		editor.getSelection().lock();
	   */
			lock: function () {
				// Call all cacheable function.
				this.getRanges();
				this.getStartElement();
				this.getSelectedElement();
				this.getSelectedText();
	
				// The native selection is not available when locked.
				this._.cache.nativeSel = null;
	
				this.isLocked = 1;
			},
	
			/**
	   * @todo
	   */
			unlock: function (restore) {
				if (!this.isLocked) return;
	
				if (restore) {
					var selectedElement = this.getSelectedElement(),
					    ranges = !selectedElement && this.getRanges(),
					    faked = this.isFake;
				}
	
				this.isLocked = 0;
				this.reset();
	
				if (restore) {
					// Saved selection may be outdated (e.g. anchored in offline nodes).
					// Avoid getting broken by such.
					var common = selectedElement || ranges[0] && ranges[0].getCommonAncestor();
					if (!(common && common.getAscendant('body', 1))) return;
	
					if (faked) this.fake(selectedElement);else if (selectedElement) this.selectElement(selectedElement);else this.selectRanges(ranges);
				}
			},
	
			/**
	   * Clears the selection cache.
	   *
	   *		editor.getSelection().reset();
	   */
			reset: function () {
				this._.cache = {};
				this.isFake = 0;
	
				var editor = this.root.editor;
	
				// Invalidate any fake selection available in the editor.
				if (editor && editor._.fakeSelection) {
					// Test whether this selection is the one that was
					// faked or its clone.
					if (this.rev == editor._.fakeSelection.rev) {
						delete editor._.fakeSelection;
	
						removeHiddenSelectionContainer(editor);
					} else {
						CKEDITOR.warn('selection-fake-reset');
					}
				}
	
				this.rev = nextRev++;
			},
	
			/**
	   * Makes the current selection of type {@link CKEDITOR#SELECTION_ELEMENT} by enclosing the specified element.
	   *
	   *		var element = editor.document.getById( 'sampleElement' );
	   *		editor.getSelection().selectElement( element );
	   *
	   * @param {CKEDITOR.dom.element} element The element to enclose in the selection.
	   */
			selectElement: function (element) {
				var range = new CKEDITOR.dom.range(this.root);
				range.setStartBefore(element);
				range.setEndAfter(element);
				this.selectRanges([range]);
			},
	
			/**
	   * Clears the original selection and adds the specified ranges to the document selection.
	   *
	   * 		// Move selection to the end of the editable element.
	   *		var range = editor.createRange();
	   *		range.moveToPosition( range.root, CKEDITOR.POSITION_BEFORE_END );
	   *		editor.getSelection().selectRanges( [ ranges ] );
	   *
	   * @param {Array} ranges An array of {@link CKEDITOR.dom.range} instances
	   * representing ranges to be added to the document.
	   */
			selectRanges: function (ranges) {
				var editor = this.root.editor,
				    hadHiddenSelectionContainer = editor && editor._.hiddenSelectionContainer;
	
				this.reset();
	
				// Check if there's a hiddenSelectionContainer in editable at some index.
				// Some ranges may be anchored after the hiddenSelectionContainer and,
				// once the container is removed while resetting the selection, they
				// may need new endOffset (one element less within the range) (#11021 #11393).
				if (hadHiddenSelectionContainer) fixRangesAfterHiddenSelectionContainer(ranges, this.root);
	
				if (!ranges.length) return;
	
				// Refresh the locked selection.
				if (this.isLocked) {
					// making a new DOM selection will force the focus on editable in certain situation,
					// we have to save the currently focused element for later recovery.
					var focused = CKEDITOR.document.getActive();
					this.unlock();
					this.selectRanges(ranges);
					this.lock();
					// Return to the previously focused element.
					focused && !focused.equals(this.root) && focused.focus();
					return;
				}
	
				// Handle special case - automatic fake selection on non-editable elements.
				var receiver = getNonEditableFakeSelectionReceiver(ranges);
	
				if (receiver) {
					this.fake(receiver);
					return;
				}
	
				if (isMSSelection) {
					var notWhitespaces = CKEDITOR.dom.walker.whitespaces(true),
					    fillerTextRegex = /\ufeff|\u00a0/,
					    nonCells = { table: 1, tbody: 1, tr: 1 };
	
					if (ranges.length > 1) {
						// IE doesn't accept multiple ranges selection, so we join all into one.
						var last = ranges[ranges.length - 1];
						ranges[0].setEnd(last.endContainer, last.endOffset);
					}
	
					var range = ranges[0];
					var collapsed = range.collapsed,
					    isStartMarkerAlone,
					    dummySpan,
					    ieRange;
	
					// Try to make a object selection, be careful with selecting phase element in IE
					// will breaks the selection in non-framed environment.
					var selected = range.getEnclosedNode();
					if (selected && selected.type == CKEDITOR.NODE_ELEMENT && selected.getName() in styleObjectElements && !(selected.is('a') && selected.getText())) {
						try {
							ieRange = selected.$.createControlRange();
							ieRange.addElement(selected.$);
							ieRange.select();
							return;
						} catch (er) {}
					}
	
					// IE doesn't support selecting the entire table row/cell, move the selection into cells, e.g.
					// <table><tbody><tr>[<td>cell</b></td>... => <table><tbody><tr><td>[cell</td>...
					if (range.startContainer.type == CKEDITOR.NODE_ELEMENT && range.startContainer.getName() in nonCells || range.endContainer.type == CKEDITOR.NODE_ELEMENT && range.endContainer.getName() in nonCells) {
						range.shrink(CKEDITOR.NODE_ELEMENT, true);
						// The range might get collapsed (#7975). Update cached variable.
						collapsed = range.collapsed;
					}
	
					var bookmark = range.createBookmark();
	
					// Create marker tags for the start and end boundaries.
					var startNode = bookmark.startNode;
	
					var endNode;
					if (!collapsed) endNode = bookmark.endNode;
	
					// Create the main range which will be used for the selection.
					ieRange = range.document.$.body.createTextRange();
	
					// Position the range at the start boundary.
					ieRange.moveToElementText(startNode.$);
					ieRange.moveStart('character', 1);
	
					if (endNode) {
						// Create a tool range for the end.
						var ieRangeEnd = range.document.$.body.createTextRange();
	
						// Position the tool range at the end.
						ieRangeEnd.moveToElementText(endNode.$);
	
						// Move the end boundary of the main range to match the tool range.
						ieRange.setEndPoint('EndToEnd', ieRangeEnd);
						ieRange.moveEnd('character', -1);
					} else {
						// The isStartMarkerAlone logic comes from V2. It guarantees that the lines
						// will expand and that the cursor will be blinking on the right place.
						// Actually, we are using this flag just to avoid using this hack in all
						// situations, but just on those needed.
						var next = startNode.getNext(notWhitespaces);
						var inPre = startNode.hasAscendant('pre');
						isStartMarkerAlone = !(next && next.getText && next.getText().match(fillerTextRegex)) && ( // already a filler there?
						inPre || !startNode.hasPrevious() || startNode.getPrevious().is && startNode.getPrevious().is('br'));
	
						// Append a temporary <span>&#65279;</span> before the selection.
						// This is needed to avoid IE destroying selections inside empty
						// inline elements, like <b></b> (#253).
						// It is also needed when placing the selection right after an inline
						// element to avoid the selection moving inside of it.
						dummySpan = range.document.createElement('span');
						dummySpan.setHtml('&#65279;'); // Zero Width No-Break Space (U+FEFF). See #1359.
						dummySpan.insertBefore(startNode);
	
						if (isStartMarkerAlone) {
							// To expand empty blocks or line spaces after <br>, we need
							// instead to have any char, which will be later deleted using the
							// selection.
							// \ufeff = Zero Width No-Break Space (U+FEFF). (#1359)
							range.document.createText('\ufeff').insertBefore(startNode);
						}
					}
	
					// Remove the markers (reset the position, because of the changes in the DOM tree).
					range.setStartBefore(startNode);
					startNode.remove();
	
					if (collapsed) {
						if (isStartMarkerAlone) {
							// Move the selection start to include the temporary \ufeff.
							ieRange.moveStart('character', -1);
	
							ieRange.select();
	
							// Remove our temporary stuff.
							range.document.$.selection.clear();
						} else {
							ieRange.select();
						}
	
						range.moveToPosition(dummySpan, CKEDITOR.POSITION_BEFORE_START);
						dummySpan.remove();
					} else {
						range.setEndBefore(endNode);
						endNode.remove();
						ieRange.select();
					}
				} else {
					var sel = this.getNative();
	
					// getNative() returns null if iframe is "display:none" in FF. (#6577)
					if (!sel) return;
	
					this.removeAllRanges();
	
					for (var i = 0; i < ranges.length; i++) {
						// Joining sequential ranges introduced by
						// readonly elements protection.
						if (i < ranges.length - 1) {
							var left = ranges[i],
							    right = ranges[i + 1],
							    between = left.clone();
							between.setStart(left.endContainer, left.endOffset);
							between.setEnd(right.startContainer, right.startOffset);
	
							// Don't confused by Firefox adjancent multi-ranges
							// introduced by table cells selection.
							if (!between.collapsed) {
								between.shrink(CKEDITOR.NODE_ELEMENT, true);
								var ancestor = between.getCommonAncestor(),
								    enclosed = between.getEnclosedNode();
	
								// The following cases has to be considered:
								// 1. <span contenteditable="false">[placeholder]</span>
								// 2. <input contenteditable="false"  type="radio"/> (#6621)
								if (ancestor.isReadOnly() || enclosed && enclosed.isReadOnly()) {
									right.setStart(left.startContainer, left.startOffset);
									ranges.splice(i--, 1);
									continue;
								}
							}
						}
	
						range = ranges[i];
	
						var nativeRange = this.document.$.createRange();
	
						if (range.collapsed && CKEDITOR.env.webkit && rangeRequiresFix(range)) {
							// Append a zero-width space so WebKit will not try to
							// move the selection by itself (#1272).
							var fillingChar = createFillingCharSequenceNode(this.root);
							range.insertNode(fillingChar);
	
							next = fillingChar.getNext();
	
							// If the filling char is followed by a <br>, whithout
							// having something before it, it'll not blink.
							// Let's remove it in this case.
							if (next && !fillingChar.getPrevious() && next.type == CKEDITOR.NODE_ELEMENT && next.getName() == 'br') {
								removeFillingCharSequenceNode(this.root);
								range.moveToPosition(next, CKEDITOR.POSITION_BEFORE_START);
							} else {
								range.moveToPosition(fillingChar, CKEDITOR.POSITION_AFTER_END);
							}
						}
	
						nativeRange.setStart(range.startContainer.$, range.startOffset);
	
						try {
							nativeRange.setEnd(range.endContainer.$, range.endOffset);
						} catch (e) {
							// There is a bug in Firefox implementation (it would be too easy
							// otherwise). The new start can't be after the end (W3C says it can).
							// So, let's create a new range and collapse it to the desired point.
							if (e.toString().indexOf('NS_ERROR_ILLEGAL_VALUE') >= 0) {
								range.collapse(1);
								nativeRange.setEnd(range.endContainer.$, range.endOffset);
							} else {
								throw e;
							}
						}
	
						// Select the range.
						sel.addRange(nativeRange);
					}
				}
	
				this.reset();
	
				// Fakes the IE DOM event "selectionchange" on editable.
				this.root.fire('selectionchange');
			},
	
			/**
	   * Makes a "fake selection" of an element.
	   *
	   * A fake selection does not render UI artifacts over the selected
	   * element. Additionally, the browser native selection system is not
	   * aware of the fake selection. In practice, the native selection is
	   * moved to a hidden place where no native selection UI artifacts are
	   * displayed to the user.
	   *
	   * @param {CKEDITOR.dom.element} element The element to be "selected".
	   * @param {String} [ariaLabel] A string to be used by the screen reader to describe the selection.
	   */
			fake: function (element, ariaLabel) {
				var editor = this.root.editor;
	
				// Attempt to retreive aria-label if possible (#14539).
				if (ariaLabel === undefined && element.hasAttribute('aria-label')) {
					ariaLabel = element.getAttribute('aria-label');
				}
	
				// Cleanup after previous selection - e.g. remove hidden sel container.
				this.reset();
	
				hideSelection(editor, ariaLabel);
	
				// Set this value after executing hiseSelection, because it may
				// cause reset() which overwrites cache.
				var cache = this._.cache;
	
				// Caches a range than holds the element.
				var range = new CKEDITOR.dom.range(this.root);
				range.setStartBefore(element);
				range.setEndAfter(element);
				cache.ranges = new CKEDITOR.dom.rangeList(range);
	
				// Put this element in the cache.
				cache.selectedElement = cache.startElement = element;
				cache.type = CKEDITOR.SELECTION_ELEMENT;
	
				// Properties that will not be available when isFake.
				cache.selectedText = cache.nativeSel = null;
	
				this.isFake = 1;
				this.rev = nextRev++;
	
				// Save this selection, so it can be returned by editor.getSelection().
				editor._.fakeSelection = this;
	
				// Fire selectionchange, just like a normal selection.
				this.root.fire('selectionchange');
			},
	
			/**
	   * Checks whether selection is placed in hidden element.
	   *
	   * This method is to be used to verify whether fake selection
	   * (see {@link #fake}) is still hidden.
	   *
	   * **Note:** this method should be executed on real selection - e.g.:
	   *
	   *		editor.getSelection( true ).isHidden();
	   *
	   * @returns {Boolean}
	   */
			isHidden: function () {
				var el = this.getCommonAncestor();
	
				if (el && el.type == CKEDITOR.NODE_TEXT) el = el.getParent();
	
				return !!(el && el.data('cke-hidden-sel'));
			},
	
			/**
	   * Creates a bookmark for each range of this selection (from {@link #getRanges})
	   * by calling the {@link CKEDITOR.dom.range#createBookmark} method,
	   * with extra care taken to avoid interference among those ranges. The arguments
	   * received are the same as with the underlying range method.
	   *
	   *		var bookmarks = editor.getSelection().createBookmarks();
	   *
	   * @returns {Array} Array of bookmarks for each range.
	   */
			createBookmarks: function (serializable) {
				var bookmark = this.getRanges().createBookmarks(serializable);
				this.isFake && (bookmark.isFake = 1);
				return bookmark;
			},
	
			/**
	   * Creates a bookmark for each range of this selection (from {@link #getRanges})
	   * by calling the {@link CKEDITOR.dom.range#createBookmark2} method,
	   * with extra care taken to avoid interference among those ranges. The arguments
	   * received are the same as with the underlying range method.
	   *
	   *		var bookmarks = editor.getSelection().createBookmarks2();
	   *
	   * @returns {Array} Array of bookmarks for each range.
	   */
			createBookmarks2: function (normalized) {
				var bookmark = this.getRanges().createBookmarks2(normalized);
				this.isFake && (bookmark.isFake = 1);
				return bookmark;
			},
	
			/**
	   * Selects the virtual ranges denoted by the bookmarks by calling {@link #selectRanges}.
	   *
	   *		var bookmarks = editor.getSelection().createBookmarks();
	   *		editor.getSelection().selectBookmarks( bookmarks );
	   *
	   * @param {Array} bookmarks The bookmarks representing ranges to be selected.
	   * @returns {CKEDITOR.dom.selection} This selection object, after the ranges were selected.
	   */
			selectBookmarks: function (bookmarks) {
				var ranges = [],
				    node;
	
				for (var i = 0; i < bookmarks.length; i++) {
					var range = new CKEDITOR.dom.range(this.root);
					range.moveToBookmark(bookmarks[i]);
					ranges.push(range);
				}
	
				// It may happen that the content change during loading, before selection is set so bookmark leads to text node.
				if (bookmarks.isFake) {
					node = ranges[0].getEnclosedNode();
					if (!node || node.type != CKEDITOR.NODE_ELEMENT) {
						CKEDITOR.warn('selection-not-fake');
						bookmarks.isFake = 0;
					}
				}
	
				if (bookmarks.isFake) this.fake(node);else this.selectRanges(ranges);
	
				return this;
			},
	
			/**
	   * Retrieves the common ancestor node of the first range and the last range.
	   *
	   *		var ancestor = editor.getSelection().getCommonAncestor();
	   *
	   * @returns {CKEDITOR.dom.element} The common ancestor of the selection or `null` if selection is empty.
	   */
			getCommonAncestor: function () {
				var ranges = this.getRanges();
				if (!ranges.length) return null;
	
				var startNode = ranges[0].startContainer,
				    endNode = ranges[ranges.length - 1].endContainer;
				return startNode.getCommonAncestor(endNode);
			},
	
			/**
	   * Moves the scrollbar to the starting position of the current selection.
	   *
	   *		editor.getSelection().scrollIntoView();
	   */
			scrollIntoView: function () {
				// Scrolls the first range into view.
				if (this.type != CKEDITOR.SELECTION_NONE) this.getRanges()[0].scrollIntoView();
			},
	
			/**
	   * Remove all the selection ranges from the document.
	   */
			removeAllRanges: function () {
				// Don't clear selection outside this selection's root (#11500).
				if (this.getType() == CKEDITOR.SELECTION_NONE) return;
	
				var nativ = this.getNative();
	
				try {
					nativ && nativ[isMSSelection ? 'empty' : 'removeAllRanges']();
				} catch (er) {}
	
				this.reset();
			}
		};
	})();
	
	/**
	 * Fired when selection inside editor has been changed. Note that this event
	 * is fired only when selection's start element (container of a selecion start)
	 * changes, not on every possible selection change. Thanks to that `selectionChange`
	 * is fired less frequently, but on every context
	 * (the {@link CKEDITOR.editor#elementPath elements path} holding selection's start) change.
	 *
	 * @event selectionChange
	 * @member CKEDITOR.editor
	 * @param {CKEDITOR.editor} editor This editor instance.
	 * @param data
	 * @param {CKEDITOR.dom.selection} data.selection
	 * @param {CKEDITOR.dom.elementPath} data.path
	 */
	
	/**
	 * Selection's revision. This value is incremented every time new
	 * selection is created or existing one is modified.
	 *
	 * @since 4.3
	 * @readonly
	 * @property {Number} rev
	 */
	
	/**
	 * Document in which selection is anchored.
	 *
	 * @readonly
	 * @property {CKEDITOR.dom.document} document
	 */
	
	/**
	 * Selection's root element.
	 *
	 * @readonly
	 * @property {CKEDITOR.dom.element} root
	 */
	
	/**
	 * Whether selection is locked (cannot be modified).
	 *
	 * See {@link #lock} and {@link #unlock} methods.
	 *
	 * @readonly
	 * @property {Boolean} isLocked
	 */
	
	/**
	 * Whether selection is a fake selection.
	 *
	 * See {@link #fake} method.
	 *
	 * @readonly
	 * @property {Boolean} isFake
	 */

/***/ },
/* 49 */
/*!***********************!*\
  !*** ./core/style.js ***!
  \***********************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	'use strict';
	
	/**
	 * Block style type.
	 *
	 * Read more in the {@link CKEDITOR.style} class documentation.
	 *
	 * @readonly
	 * @property {Number} [=1]
	 * @member CKEDITOR
	 */
	
	CKEDITOR.STYLE_BLOCK = 1;
	
	/**
	 * Inline style type.
	 *
	 * Read more in the {@link CKEDITOR.style} class documentation.
	 *
	 * @readonly
	 * @property {Number} [=2]
	 * @member CKEDITOR
	 */
	CKEDITOR.STYLE_INLINE = 2;
	
	/**
	 * Object style type.
	 *
	 * Read more in the {@link CKEDITOR.style} class documentation.
	 *
	 * @readonly
	 * @property {Number} [=3]
	 * @member CKEDITOR
	 */
	CKEDITOR.STYLE_OBJECT = 3;
	
	(function () {
		var blockElements = {
			address: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, p: 1,
			pre: 1, section: 1, header: 1, footer: 1, nav: 1, article: 1, aside: 1, figure: 1,
			dialog: 1, hgroup: 1, time: 1, meter: 1, menu: 1, command: 1, keygen: 1, output: 1,
			progress: 1, details: 1, datagrid: 1, datalist: 1
		},
		    objectElements = {
			a: 1, blockquote: 1, embed: 1, hr: 1, img: 1, li: 1, object: 1, ol: 1, table: 1, td: 1,
			tr: 1, th: 1, ul: 1, dl: 1, dt: 1, dd: 1, form: 1, audio: 1, video: 1
		};
	
		var semicolonFixRegex = /\s*(?:;\s*|$)/,
		    varRegex = /#\((.+?)\)/g;
	
		var notBookmark = CKEDITOR.dom.walker.bookmark(0, 1),
		    nonWhitespaces = CKEDITOR.dom.walker.whitespaces(1);
	
		/**
	  * A class representing a style instance for the specific style definition.
	  * In this approach, a style is a set of properties, like attributes and styles,
	  * which can be applied to and removed from a {@link CKEDITOR.dom.selection selection} through
	  * {@link CKEDITOR.editor editor} methods: {@link CKEDITOR.editor#applyStyle} and {@link CKEDITOR.editor#removeStyle},
	  * respectively.
	  *
	  * Three default style types are available: {@link CKEDITOR#STYLE_BLOCK STYLE_BLOCK}, {@link CKEDITOR#STYLE_INLINE STYLE_INLINE},
	  * and {@link CKEDITOR#STYLE_OBJECT STYLE_OBJECT}. Based on its type, a style heavily changes its behavior.
	  * You can read more about style types in the [Style Types section of the Styles guide](#!/guide/dev_styles-section-style-types).
	  *
	  * It is possible to define a custom style type by subclassing this class by using the {@link #addCustomHandler} method.
	  * However, because of great complexity of the styles handling job, it is only possible in very specific cases.
	  *
	  * ### Usage
	  *
	  * Basic usage:
	  *
	  *		// Define a block style.
	  *		var style = new CKEDITOR.style( { element: 'h1' } );
	  *
	  *		// Considering the following selection:
	  *		// <p>Foo</p><p>Bar^</p>
	  *		// Executing:
	  *		editor.applyStyle( style );
	  *		// Will give:
	  *		// <p>Foo</p><h1>Bar^</h1>
	  *		style.checkActive( editor.elementPath(), editor ); // -> true
	  *
	  *		editor.removeStyle( style );
	  *		// Will give:
	  *		// <p>Foo</p><p>Bar^</p>
	  *
	  *		style.checkActive( editor.elementPath(), editor ); // -> false
	  *
	  * Object style:
	  *
	  *		// Define an object style.
	  *		var style = new CKEDITOR.style( { element: 'img', attributes: { 'class': 'foo' } } );
	  *
	  *		// Considering the following selection:
	  *		// <p><img src="bar.png" alt="" />Foo^</p>
	  *		// Executing:
	  *		editor.applyStyle( style );
	  *		// Will not apply the style, because the image is not selected.
	  *		// You can check if a style can be applied on the current selection with:
	  *		style.checkApplicable( editor.elementPath(), editor ); // -> false
	  *
	  *		// Considering the following selection:
	  *		// <p>[<img src="bar.png" alt="" />]Foo</p>
	  *		// Executing
	  *		editor.applyStyle( style );
	  *		// Will give:
	  *		// <p>[<img src="bar.png" alt="" class="foo" />]Foo</p>
	  *
	  * ### API changes introduced in CKEditor 4.4
	  *
	  * Before CKEditor 4.4 all style instances had no access at all to the {@link CKEDITOR.editor editor instance}
	  * within which the style is used. Neither the style constructor, nor style methods were requiring
	  * passing the editor instance which made styles independent of the editor and hence its settings and state.
	  * This design decision came from CKEditor 3; it started causing problems and became an unsolvable obstacle for
	  * the {@link CKEDITOR.style.customHandlers.widget widget style handler} which we introduced in CKEditor 4.4.
	  *
	  * There were two possible solutions. Passing an editor instance to the style constructor or to every method.
	  * The first approach would be clean, however, having in mind the backward compatibility, we did not decide
	  * to go for it. It would bind the style to one editor instance, making it unusable with other editor instances.
	  * That could break many implementations reusing styles between editors. Therefore, we decided to take the longer
	  * but safer path &mdash; the editor instance became an argument for nearly all style methods, however,
	  * for backward compatibility reasons, all these methods will work without it. Even the newly
	  * implemented {@link CKEDITOR.style.customHandlers.widget widget style handler}'s methods will not fail,
	  * although they will also not work by aborting at an early stage.
	  *
	  * Therefore, you can safely upgrade to CKEditor 4.4 even if you use style methods without providing
	  * the editor instance. You must only align your code if your implementation should handle widget styles
	  * or any other custom style handler. Of course, we recommend doing this in any case to avoid potential
	  * problems in the future.
	  *
	  * @class
	  * @constructor Creates a style class instance.
	  * @param styleDefinition
	  * @param variablesValues
	  */
		CKEDITOR.style = function (styleDefinition, variablesValues) {
			if (typeof styleDefinition.type == 'string') return new CKEDITOR.style.customHandlers[styleDefinition.type](styleDefinition);
	
			// Inline style text as attribute should be converted
			// to styles object.
			var attrs = styleDefinition.attributes;
			if (attrs && attrs.style) {
				styleDefinition.styles = CKEDITOR.tools.extend({}, styleDefinition.styles, CKEDITOR.tools.parseCssText(attrs.style));
				delete attrs.style;
			}
	
			if (variablesValues) {
				styleDefinition = CKEDITOR.tools.clone(styleDefinition);
	
				replaceVariables(styleDefinition.attributes, variablesValues);
				replaceVariables(styleDefinition.styles, variablesValues);
			}
	
			var element = this.element = styleDefinition.element ? typeof styleDefinition.element == 'string' ? styleDefinition.element.toLowerCase() : styleDefinition.element : '*';
	
			this.type = styleDefinition.type || (blockElements[element] ? CKEDITOR.STYLE_BLOCK : objectElements[element] ? CKEDITOR.STYLE_OBJECT : CKEDITOR.STYLE_INLINE);
	
			// If the 'element' property is an object with a set of possible element, it will be applied like an object style: only to existing elements
			if (typeof this.element == 'object') this.type = CKEDITOR.STYLE_OBJECT;
	
			this._ = {
				definition: styleDefinition
			};
		};
	
		CKEDITOR.style.prototype = {
			/**
	   * Applies the style on the editor's current selection.
	   *
	   * Before the style is applied, the method checks if the {@link #checkApplicable style is applicable}.
	   *
	   * **Note:** The recommended way of applying the style is by using the
	   * {@link CKEDITOR.editor#applyStyle} method, which is a shorthand for this method.
	   *
	   * @param {CKEDITOR.editor/CKEDITOR.dom.document} editor The editor instance in which
	   * the style will be applied.
	   * A {@link CKEDITOR.dom.document} instance is accepted for backward compatibility
	   * reasons, although since CKEditor 4.4 this type of argument is deprecated. Read more about
	   * the signature change in the {@link CKEDITOR.style} documentation.
	   */
			apply: function (editor) {
				// Backward compatibility.
				if (editor instanceof CKEDITOR.dom.document) return applyStyleOnSelection.call(this, editor.getSelection());
	
				if (this.checkApplicable(editor.elementPath(), editor)) {
					var initialEnterMode = this._.enterMode;
	
					// See comment in removeStyle.
					if (!initialEnterMode) this._.enterMode = editor.activeEnterMode;
					applyStyleOnSelection.call(this, editor.getSelection(), 0, editor);
					this._.enterMode = initialEnterMode;
				}
			},
	
			/**
	   * Removes the style from the editor's current selection.
	   *
	   * Before the style is applied, the method checks if {@link #checkApplicable style could be applied}.
	   *
	   * **Note:** The recommended way of removing the style is by using the
	   * {@link CKEDITOR.editor#removeStyle} method, which is a shorthand for this method.
	   *
	   * @param {CKEDITOR.editor/CKEDITOR.dom.document} editor The editor instance in which
	   * the style will be removed.
	   * A {@link CKEDITOR.dom.document} instance is accepted for backward compatibility
	   * reasons, although since CKEditor 4.4 this type of argument is deprecated. Read more about
	   * the signature change in the {@link CKEDITOR.style} documentation.
	   */
			remove: function (editor) {
				// Backward compatibility.
				if (editor instanceof CKEDITOR.dom.document) return applyStyleOnSelection.call(this, editor.getSelection(), 1);
	
				if (this.checkApplicable(editor.elementPath(), editor)) {
					var initialEnterMode = this._.enterMode;
	
					// Before CKEditor 4.4 style knew nothing about editor, so in order to provide enterMode
					// which should be used developers were forced to hack the style object (see #10190).
					// Since CKEditor 4.4 style knows about editor (at least when it's being applied/removed), but we
					// use _.enterMode for backward compatibility with those hacks.
					// Note: we should not change style's enter mode if it was already set.
					if (!initialEnterMode) this._.enterMode = editor.activeEnterMode;
					applyStyleOnSelection.call(this, editor.getSelection(), 1, editor);
					this._.enterMode = initialEnterMode;
				}
			},
	
			/**
	   * Applies the style on the provided range. Unlike {@link #apply} this
	   * method does not take care of setting the selection, however, the range
	   * is updated to the correct place.
	   *
	   * **Note:** If you want to apply the style on the editor selection,
	   * you probably want to use {@link CKEDITOR.editor#applyStyle}.
	   *
	   * @param {CKEDITOR.dom.range} range
	   * @param {CKEDITOR.editor} editor The editor instance. Required argument since
	   * CKEditor 4.4. The style system will work without it, but it is highly
	   * recommended to provide it for integration with all features.  Read more about
	   * the signature change in the {@link CKEDITOR.style} documentation.
	   */
			applyToRange: function (range) {
				this.applyToRange = this.type == CKEDITOR.STYLE_INLINE ? applyInlineStyle : this.type == CKEDITOR.STYLE_BLOCK ? applyBlockStyle : this.type == CKEDITOR.STYLE_OBJECT ? applyObjectStyle : null;
	
				return this.applyToRange(range);
			},
	
			/**
	   * Removes the style from the provided range. Unlike {@link #remove} this
	   * method does not take care of setting the selection, however, the range
	   * is updated to the correct place.
	   *
	   * **Note:** If you want to remove the style from the editor selection,
	   * you probably want to use {@link CKEDITOR.editor#removeStyle}.
	   *
	   * @param {CKEDITOR.dom.range} range
	   * @param {CKEDITOR.editor} editor The editor instance. Required argument since
	   * CKEditor 4.4. The style system will work without it, but it is highly
	   * recommended to provide it for integration with all features. Read more about
	   * the signature change in the {@link CKEDITOR.style} documentation.
	   */
			removeFromRange: function (range) {
				this.removeFromRange = this.type == CKEDITOR.STYLE_INLINE ? removeInlineStyle : this.type == CKEDITOR.STYLE_BLOCK ? removeBlockStyle : this.type == CKEDITOR.STYLE_OBJECT ? removeObjectStyle : null;
	
				return this.removeFromRange(range);
			},
	
			/**
	   * Applies the style to the element. This method bypasses all checks
	   * and applies the style attributes directly on the provided element. Use with caution.
	   *
	   * See {@link CKEDITOR.editor#applyStyle}.
	   *
	   * @param {CKEDITOR.dom.element} element
	   * @param {CKEDITOR.editor} editor The editor instance. Required argument since
	   * CKEditor 4.4. The style system will work without it, but it is highly
	   * recommended to provide it for integration with all features. Read more about
	   * the signature change in the {@link CKEDITOR.style} documentation.
	   */
			applyToObject: function (element) {
				setupElement(element, this);
			},
	
			/**
	   * Gets the style state inside the elements path.
	   *
	   * @param {CKEDITOR.dom.elementPath} elementPath
	   * @param {CKEDITOR.editor} editor The editor instance. Required argument since
	   * CKEditor 4.4. The style system will work without it, but it is highly
	   * recommended to provide it for integration with all features. Read more about
	   * the signature change in the {@link CKEDITOR.style} documentation.
	   * @returns {Boolean} `true` if the element is active in the elements path.
	   */
			checkActive: function (elementPath, editor) {
				switch (this.type) {
					case CKEDITOR.STYLE_BLOCK:
						return this.checkElementRemovable(elementPath.block || elementPath.blockLimit, true, editor);
	
					case CKEDITOR.STYLE_OBJECT:
					case CKEDITOR.STYLE_INLINE:
	
						var elements = elementPath.elements;
	
						for (var i = 0, element; i < elements.length; i++) {
							element = elements[i];
	
							if (this.type == CKEDITOR.STYLE_INLINE && (element == elementPath.block || element == elementPath.blockLimit)) continue;
	
							if (this.type == CKEDITOR.STYLE_OBJECT) {
								var name = element.getName();
								if (!(typeof this.element == 'string' ? name == this.element : name in this.element)) continue;
							}
	
							if (this.checkElementRemovable(element, true, editor)) return true;
						}
				}
				return false;
			},
	
			/**
	   * Whether this style can be applied at the specified elements path.
	   *
	   * @param {CKEDITOR.dom.elementPath} elementPath The elements path to
	   * check the style against.
	   * @param {CKEDITOR.editor} editor The editor instance. Required argument since
	   * CKEditor 4.4. The style system will work without it, but it is highly
	   * recommended to provide it for integration with all features. Read more about
	   * the signature change in the {@link CKEDITOR.style} documentation.
	   * @param {CKEDITOR.filter} [filter] If defined, the style will be
	   * checked against this filter as well.
	   * @returns {Boolean} `true` if this style can be applied at the elements path.
	   */
			checkApplicable: function (elementPath, editor, filter) {
				// Backward compatibility.
				if (editor && editor instanceof CKEDITOR.filter) filter = editor;
	
				if (filter && !filter.check(this)) return false;
	
				switch (this.type) {
					case CKEDITOR.STYLE_OBJECT:
						return !!elementPath.contains(this.element);
					case CKEDITOR.STYLE_BLOCK:
						return !!elementPath.blockLimit.getDtd()[this.element];
				}
	
				return true;
			},
	
			/**
	   * Checks if the element matches the current style definition.
	   *
	   * @param {CKEDITOR.dom.element} element
	   * @param {Boolean} fullMatch
	   * @param {CKEDITOR.editor} editor The editor instance. Required argument since
	   * CKEditor 4.4. The style system will work without it, but it is highly
	   * recommended to provide it for integration with all features. Read more about
	   * the signature change in the {@link CKEDITOR.style} documentation.
	   * @returns {Boolean}
	   */
			checkElementMatch: function (element, fullMatch) {
				var def = this._.definition;
	
				if (!element || !def.ignoreReadonly && element.isReadOnly()) return false;
	
				var attribs,
				    name = element.getName();
	
				// If the element name is the same as the style name.
				if (typeof this.element == 'string' ? name == this.element : name in this.element) {
					// If no attributes are defined in the element.
					if (!fullMatch && !element.hasAttributes()) return true;
	
					attribs = getAttributesForComparison(def);
	
					if (attribs._length) {
						for (var attName in attribs) {
							if (attName == '_length') continue;
	
							var elementAttr = element.getAttribute(attName) || '';
	
							// Special treatment for 'style' attribute is required.
							if (attName == 'style' ? compareCssText(attribs[attName], elementAttr) : attribs[attName] == elementAttr) {
								if (!fullMatch) return true;
							} else if (fullMatch) {
								return false;
							}
						}
						if (fullMatch) return true;
					} else {
						return true;
					}
				}
	
				return false;
			},
	
			/**
	   * Checks if an element, or any of its attributes, is removable by the
	   * current style definition.
	   *
	   * @param {CKEDITOR.dom.element} element
	   * @param {Boolean} fullMatch
	   * @param {CKEDITOR.editor} editor The editor instance. Required argument since
	   * CKEditor 4.4. The style system will work without it, but it is highly
	   * recommended to provide it for integration with all features. Read more about
	   * the signature change in the {@link CKEDITOR.style} documentation.
	   * @returns {Boolean}
	   */
			checkElementRemovable: function (element, fullMatch, editor) {
				// Check element matches the style itself.
				if (this.checkElementMatch(element, fullMatch, editor)) return true;
	
				// Check if the element matches the style overrides.
				var override = getOverrides(this)[element.getName()];
				if (override) {
					var attribs, attName;
	
					// If no attributes have been defined, remove the element.
					if (!(attribs = override.attributes)) return true;
	
					for (var i = 0; i < attribs.length; i++) {
						attName = attribs[i][0];
						var actualAttrValue = element.getAttribute(attName);
						if (actualAttrValue) {
							var attValue = attribs[i][1];
	
							// Remove the attribute if:
							//    - The override definition value is null;
							//    - The override definition value is a string that
							//      matches the attribute value exactly.
							//    - The override definition value is a regex that
							//      has matches in the attribute value.
							if (attValue === null) return true;
							if (typeof attValue == 'string') {
								if (actualAttrValue == attValue) return true;
							} else if (attValue.test(actualAttrValue)) {
								return true;
							}
						}
					}
				}
				return false;
			},
	
			/**
	   * Builds the preview HTML based on the styles definition.
	   *
	   * @param {String} [label] The label used in the style preview.
	   * @return {String} The HTML of preview.
	   */
			buildPreview: function (label) {
				var styleDefinition = this._.definition,
				    html = [],
				    elementName = styleDefinition.element;
	
				// Avoid <bdo> in the preview.
				if (elementName == 'bdo') elementName = 'span';
	
				html = ['<', elementName];
	
				// Assign all defined attributes.
				var attribs = styleDefinition.attributes;
				if (attribs) {
					for (var att in attribs) html.push(' ', att, '="', attribs[att], '"');
				}
	
				// Assign the style attribute.
				var cssStyle = CKEDITOR.style.getStyleText(styleDefinition);
				if (cssStyle) html.push(' style="', cssStyle, '"');
	
				html.push('>', label || styleDefinition.name, '</', elementName, '>');
	
				return html.join('');
			},
	
			/**
	   * Returns the style definition.
	   *
	   * @since 4.1
	   * @returns {Object}
	   */
			getDefinition: function () {
				return this._.definition;
			}
	
			/**
	   * If defined (for example by {@link CKEDITOR.style#addCustomHandler custom style handler}), it returns
	   * the {@link CKEDITOR.filter.allowedContentRules allowed content rules} which should be added to the
	   * {@link CKEDITOR.filter} when enabling this style.
	   *
	   * **Note:** This method is not defined in the {@link CKEDITOR.style} class.
	   *
	   * @since 4.4
	   * @method toAllowedContentRules
	   * @param {CKEDITOR.editor} [editor] The editor instance.
	   * @returns {CKEDITOR.filter.allowedContentRules} The rules that should represent this style in the {@link CKEDITOR.filter}.
	   */
		};
	
		/**
	  * Builds the inline style text based on the style definition.
	  *
	  * @static
	  * @param styleDefinition
	  * @returns {String} Inline style text.
	  */
		CKEDITOR.style.getStyleText = function (styleDefinition) {
			// If we have already computed it, just return it.
			var stylesDef = styleDefinition._ST;
			if (stylesDef) return stylesDef;
	
			stylesDef = styleDefinition.styles;
	
			// Builds the StyleText.
			var stylesText = styleDefinition.attributes && styleDefinition.attributes.style || '',
			    specialStylesText = '';
	
			if (stylesText.length) stylesText = stylesText.replace(semicolonFixRegex, ';');
	
			for (var style in stylesDef) {
				var styleVal = stylesDef[style],
				    text = (style + ':' + styleVal).replace(semicolonFixRegex, ';');
	
				// Some browsers don't support 'inherit' property value, leave them intact. (#5242)
				if (styleVal == 'inherit') specialStylesText += text;else stylesText += text;
			}
	
			// Browsers make some changes to the style when applying them. So, here
			// we normalize it to the browser format.
			if (stylesText.length) stylesText = CKEDITOR.tools.normalizeCssText(stylesText, true);
	
			stylesText += specialStylesText;
	
			// Return it, saving it to the next request.
			return styleDefinition._ST = stylesText;
		};
	
		/**
	  * Namespace containing custom style handlers added with {@link CKEDITOR.style#addCustomHandler}.
	  *
	  * @since 4.4
	  * @class
	  * @singleton
	  */
		CKEDITOR.style.customHandlers = {};
	
		/**
	  * Creates a {@link CKEDITOR.style} subclass and registers it in the style system.
	  * Registered class will be used as a handler for a style of this type. This allows
	  * to extend the styles system, which by default uses only the {@link CKEDITOR.style}, with
	  * new functionality. Registered classes are accessible in the {@link CKEDITOR.style.customHandlers}.
	  *
	  * ### The Style Class Definition
	  *
	  * The definition object is used to override properties in a prototype inherited
	  * from the {@link CKEDITOR.style} class. It must contain a `type` property which is
	  * a name of the new type and therefore it must be unique. The default style types
	  * ({@link CKEDITOR#STYLE_BLOCK STYLE_BLOCK}, {@link CKEDITOR#STYLE_INLINE STYLE_INLINE},
	  * and {@link CKEDITOR#STYLE_OBJECT STYLE_OBJECT}) are integers, but for easier identification
	  * it is recommended to use strings as custom type names.
	  *
	  * Besides `type`, the definition may contain two more special properties:
	  *
	  *  * `setup {Function}` &ndash; An optional callback executed when a style instance is created.
	  * Like the style constructor, it is executed in style context and with the style definition as an argument.
	  *  * `assignedTo {Number}` &ndash; Can be set to one of the default style types. Some editor
	  * features like the Styles drop-down assign styles to one of the default groups based on
	  * the style type. By using this property it is possible to notify them to which group this
	  * custom style should be assigned. It defaults to the {@link CKEDITOR#STYLE_OBJECT}.
	  *
	  * Other properties of the definition object will just be used to extend the prototype inherited
	  * from the {@link CKEDITOR.style} class. So if the definition contains an `apply` method, it will
	  * override the {@link CKEDITOR.style#apply} method.
	  *
	  * ### Usage
	  *
	  * Registering a basic handler:
	  *
	  *		var styleClass = CKEDITOR.style.addCustomHandler( {
	  *			type: 'custom'
	  *		} );
	  *
	  *		var style = new styleClass( { ... } );
	  *		style instanceof styleClass; // -> true
	  *		style instanceof CKEDITOR.style; // -> true
	  *		style.type; // -> 'custom'
	  *
	  * The {@link CKEDITOR.style} constructor used as a factory:
	  *
	  *		var styleClass = CKEDITOR.style.addCustomHandler( {
	  *			type: 'custom'
	  *		} );
	  *
	  *		// Style constructor accepts style definition (do not confuse with style class definition).
	  *		var style = new CKEDITOR.style( { type: 'custom', attributes: ... } );
	  *		style instanceof styleClass; // -> true
	  *
	  * Thanks to that, integration code using styles does not need to know
	  * which style handler it should use. It is determined by the {@link CKEDITOR.style} constructor.
	  *
	  * Overriding existing {@link CKEDITOR.style} methods:
	  *
	  *		var styleClass = CKEDITOR.style.addCustomHandler( {
	  *			type: 'custom',
	  *			apply: function( editor ) {
	  *				console.log( 'apply' );
	  *			},
	  *			remove: function( editor ) {
	  *				console.log( 'remove' );
	  *			}
	  *		} );
	  *
	  *		var style = new CKEDITOR.style( { type: 'custom', attributes: ... } );
	  *		editor.applyStyle( style ); // logged 'apply'
	  *
	  *		style = new CKEDITOR.style( { element: 'img', attributes: { 'class': 'foo' } } );
	  *		editor.applyStyle( style ); // style is really applied if image was selected
	  *
	  * ### Practical Recommendations
	  *
	  * The style handling job, which includes such tasks as applying, removing, checking state, and
	  * checking if a style can be applied, is very complex. Therefore without deep knowledge
	  * about DOM and especially {@link CKEDITOR.dom.range ranges} and {@link CKEDITOR.dom.walker DOM walker} it is impossible
	  * to implement a completely custom style handler able to handle block, inline, and object type styles.
	  * However, it is possible to customize the default implementation by overriding default methods and
	  * reusing them.
	  *
	  * The only style handler which can be implemented from scratch without huge effort is a style
	  * applicable to objects ([read more about types](http://docs.ckeditor.com/#!/guide/dev_styles-section-style-types)).
	  * Such style can only be applied when a specific object is selected. An example implementation can
	  * be found in the [widget plugin](https://github.com/ckeditor/ckeditor-dev/blob/master/plugins/widget/plugin.js).
	  *
	  * When implementing a style handler from scratch at least the following methods must be defined:
	  *
	  * * {@link CKEDITOR.style#apply apply} and {@link CKEDITOR.style#remove remove},
	  * * {@link CKEDITOR.style#checkElementRemovable checkElementRemovable} and
	  * {@link CKEDITOR.style#checkElementMatch checkElementMatch} &ndash; Note that both methods reuse the same logic,
	  * * {@link CKEDITOR.style#checkActive checkActive} &ndash; Reuses
	  * {@link CKEDITOR.style#checkElementMatch checkElementMatch},
	  * * {@link CKEDITOR.style#toAllowedContentRules toAllowedContentRules} &ndash; Not required, but very useful in
	  * case of a custom style that has to notify the {@link CKEDITOR.filter} which rules it allows when registered.
	  *
	  * @since 4.4
	  * @static
	  * @member CKEDITOR.style
	  * @param definition The style class definition.
	  * @returns {CKEDITOR.style} The new style class created for the provided definition.
	  */
		CKEDITOR.style.addCustomHandler = function (definition) {
			var styleClass = function (styleDefinition) {
				this._ = {
					definition: styleDefinition
				};
	
				if (this.setup) this.setup(styleDefinition);
			};
	
			styleClass.prototype = CKEDITOR.tools.extend(
			// Prototype of CKEDITOR.style.
			CKEDITOR.tools.prototypedCopy(CKEDITOR.style.prototype),
			// Defaults.
			{
				assignedTo: CKEDITOR.STYLE_OBJECT
			},
			// Passed definition - overrides.
			definition, true);
	
			this.customHandlers[definition.type] = styleClass;
	
			return styleClass;
		};
	
		// Gets the parent element which blocks the styling for an element. This
		// can be done through read-only elements (contenteditable=false) or
		// elements with the "data-nostyle" attribute.
		function getUnstylableParent(element, root) {
			var unstylable, editable;
	
			while (element = element.getParent()) {
				if (element.equals(root)) break;
	
				if (element.getAttribute('data-nostyle')) unstylable = element;else if (!editable) {
					var contentEditable = element.getAttribute('contentEditable');
	
					if (contentEditable == 'false') unstylable = element;else if (contentEditable == 'true') editable = 1;
				}
			}
	
			return unstylable;
		}
	
		var posPrecedingIdenticalContained = CKEDITOR.POSITION_PRECEDING | CKEDITOR.POSITION_IDENTICAL | CKEDITOR.POSITION_IS_CONTAINED,
		    posFollowingIdenticalContained = CKEDITOR.POSITION_FOLLOWING | CKEDITOR.POSITION_IDENTICAL | CKEDITOR.POSITION_IS_CONTAINED;
	
		// Checks if the current node can be a child of the style element.
		function checkIfNodeCanBeChildOfStyle(def, currentNode, lastNode, nodeName, dtd, nodeIsNoStyle, nodeIsReadonly, includeReadonly) {
			// Style can be applied to text node.
			if (!nodeName) return 1;
	
			// Style definitely cannot be applied if DTD or data-nostyle do not allow.
			if (!dtd[nodeName] || nodeIsNoStyle) return 0;
	
			// Non-editable element cannot be styled is we shouldn't include readonly elements.
			if (nodeIsReadonly && !includeReadonly) return 0;
	
			// Check that we haven't passed lastNode yet and that style's childRule allows this style on current element.
			return checkPositionAndRule(currentNode, lastNode, def, posPrecedingIdenticalContained);
		}
	
		// Check if the style element can be a child of the current
		// node parent or if the element is not defined in the DTD.
		function checkIfStyleCanBeChildOf(def, currentParent, elementName, isUnknownElement) {
			return currentParent && ((currentParent.getDtd() || CKEDITOR.dtd.span)[elementName] || isUnknownElement) && (!def.parentRule || def.parentRule(currentParent));
		}
	
		function checkIfStartsRange(nodeName, currentNode, lastNode) {
			return !nodeName || !CKEDITOR.dtd.$removeEmpty[nodeName] || (currentNode.getPosition(lastNode) | posPrecedingIdenticalContained) == posPrecedingIdenticalContained;
		}
	
		function checkIfTextOrReadonlyOrEmptyElement(currentNode, nodeIsReadonly) {
			var nodeType = currentNode.type;
			return nodeType == CKEDITOR.NODE_TEXT || nodeIsReadonly || nodeType == CKEDITOR.NODE_ELEMENT && !currentNode.getChildCount();
		}
	
		// Checks if position is a subset of posBitFlags and that nodeA fulfills style def rule.
		function checkPositionAndRule(nodeA, nodeB, def, posBitFlags) {
			return (nodeA.getPosition(nodeB) | posBitFlags) == posBitFlags && (!def.childRule || def.childRule(nodeA));
		}
	
		function applyInlineStyle(range) {
			var document = range.document;
	
			if (range.collapsed) {
				// Create the element to be inserted in the DOM.
				var collapsedElement = getElement(this, document);
	
				// Insert the empty element into the DOM at the range position.
				range.insertNode(collapsedElement);
	
				// Place the selection right inside the empty element.
				range.moveToPosition(collapsedElement, CKEDITOR.POSITION_BEFORE_END);
	
				return;
			}
	
			var elementName = this.element,
			    def = this._.definition,
			    isUnknownElement;
	
			// Indicates that fully selected read-only elements are to be included in the styling range.
			var ignoreReadonly = def.ignoreReadonly,
			    includeReadonly = ignoreReadonly || def.includeReadonly;
	
			// If the read-only inclusion is not available in the definition, try
			// to get it from the root data (most often it's the editable).
			if (includeReadonly == null) includeReadonly = range.root.getCustomData('cke_includeReadonly');
	
			// Get the DTD definition for the element. Defaults to "span".
			var dtd = CKEDITOR.dtd[elementName];
			if (!dtd) {
				isUnknownElement = true;
				dtd = CKEDITOR.dtd.span;
			}
	
			// Expand the range.
			range.enlarge(CKEDITOR.ENLARGE_INLINE, 1);
			range.trim();
	
			// Get the first node to be processed and the last, which concludes the processing.
			var boundaryNodes = range.createBookmark(),
			    firstNode = boundaryNodes.startNode,
			    lastNode = boundaryNodes.endNode,
			    currentNode = firstNode,
			    styleRange;
	
			if (!ignoreReadonly) {
				// Check if the boundaries are inside non stylable elements.
				var root = range.getCommonAncestor(),
				    firstUnstylable = getUnstylableParent(firstNode, root),
				    lastUnstylable = getUnstylableParent(lastNode, root);
	
				// If the first element can't be styled, we'll start processing right
				// after its unstylable root.
				if (firstUnstylable) currentNode = firstUnstylable.getNextSourceNode(true);
	
				// If the last element can't be styled, we'll stop processing on its
				// unstylable root.
				if (lastUnstylable) lastNode = lastUnstylable;
			}
	
			// Do nothing if the current node now follows the last node to be processed.
			if (currentNode.getPosition(lastNode) == CKEDITOR.POSITION_FOLLOWING) currentNode = 0;
	
			while (currentNode) {
				var applyStyle = false;
	
				if (currentNode.equals(lastNode)) {
					currentNode = null;
					applyStyle = true;
				} else {
					var nodeName = currentNode.type == CKEDITOR.NODE_ELEMENT ? currentNode.getName() : null,
					    nodeIsReadonly = nodeName && currentNode.getAttribute('contentEditable') == 'false',
					    nodeIsNoStyle = nodeName && currentNode.getAttribute('data-nostyle');
	
					// Skip bookmarks.
					if (nodeName && currentNode.data('cke-bookmark')) {
						currentNode = currentNode.getNextSourceNode(true);
						continue;
					}
	
					// Find all nested editables of a non-editable block and apply this style inside them.
					if (nodeIsReadonly && includeReadonly && CKEDITOR.dtd.$block[nodeName]) applyStyleOnNestedEditables.call(this, currentNode);
	
					// Check if the current node can be a child of the style element.
					if (checkIfNodeCanBeChildOfStyle(def, currentNode, lastNode, nodeName, dtd, nodeIsNoStyle, nodeIsReadonly, includeReadonly)) {
						var currentParent = currentNode.getParent();
	
						// Check if the style element can be a child of the current
						// node parent or if the element is not defined in the DTD.
						if (checkIfStyleCanBeChildOf(def, currentParent, elementName, isUnknownElement)) {
							// This node will be part of our range, so if it has not
							// been started, place its start right before the node.
							// In the case of an element node, it will be included
							// only if it is entirely inside the range.
							if (!styleRange && checkIfStartsRange(nodeName, currentNode, lastNode)) {
								styleRange = range.clone();
								styleRange.setStartBefore(currentNode);
							}
	
							// Non element nodes, readonly elements, or empty
							// elements can be added completely to the range.
							if (checkIfTextOrReadonlyOrEmptyElement(currentNode, nodeIsReadonly)) {
								var includedNode = currentNode;
								var parentNode;
	
								// This node is about to be included completelly, but,
								// if this is the last node in its parent, we must also
								// check if the parent itself can be added completelly
								// to the range, otherwise apply the style immediately.
								while ((applyStyle = !includedNode.getNext(notBookmark)) && (parentNode = includedNode.getParent(), dtd[parentNode.getName()]) && checkPositionAndRule(parentNode, firstNode, def, posFollowingIdenticalContained)) {
									includedNode = parentNode;
								}
	
								styleRange.setEndAfter(includedNode);
							}
						} else {
							applyStyle = true;
						}
					}
					// Style isn't applicable to current element, so apply style to
					// range ending at previously chosen position, or nowhere if we haven't
					// yet started styleRange.
					else {
							applyStyle = true;
						}
	
					// Get the next node to be processed.
					// If we're currently on a non-editable element or non-styleable element,
					// then we'll be moved to current node's sibling (or even further), so we'll
					// avoid messing up its content.
					currentNode = currentNode.getNextSourceNode(nodeIsNoStyle || nodeIsReadonly);
				}
	
				// Apply the style if we have something to which apply it.
				if (applyStyle && styleRange && !styleRange.collapsed) {
					// Build the style element, based on the style object definition.
					var styleNode = getElement(this, document),
					    styleHasAttrs = styleNode.hasAttributes();
	
					// Get the element that holds the entire range.
					var parent = styleRange.getCommonAncestor();
	
					var removeList = {
						styles: {},
						attrs: {},
						// Styles cannot be removed.
						blockedStyles: {},
						// Attrs cannot be removed.
						blockedAttrs: {}
					};
	
					var attName, styleName, value;
	
					// Loop through the parents, removing the redundant attributes
					// from the element to be applied.
					while (styleNode && parent) {
						if (parent.getName() == elementName) {
							for (attName in def.attributes) {
								if (removeList.blockedAttrs[attName] || !(value = parent.getAttribute(styleName))) continue;
	
								if (styleNode.getAttribute(attName) == value) removeList.attrs[attName] = 1;else removeList.blockedAttrs[attName] = 1;
							}
	
							for (styleName in def.styles) {
								if (removeList.blockedStyles[styleName] || !(value = parent.getStyle(styleName))) continue;
	
								if (styleNode.getStyle(styleName) == value) removeList.styles[styleName] = 1;else removeList.blockedStyles[styleName] = 1;
							}
						}
	
						parent = parent.getParent();
					}
	
					for (attName in removeList.attrs) styleNode.removeAttribute(attName);
	
					for (styleName in removeList.styles) styleNode.removeStyle(styleName);
	
					if (styleHasAttrs && !styleNode.hasAttributes()) styleNode = null;
	
					if (styleNode) {
						// Move the contents of the range to the style element.
						styleRange.extractContents().appendTo(styleNode);
	
						// Insert it into the range position (it is collapsed after
						// extractContents.
						styleRange.insertNode(styleNode);
	
						// Here we do some cleanup, removing all duplicated
						// elements from the style element.
						removeFromInsideElement.call(this, styleNode);
	
						// Let's merge our new style with its neighbors, if possible.
						styleNode.mergeSiblings();
	
						// As the style system breaks text nodes constantly, let's normalize
						// things for performance.
						// With IE, some paragraphs get broken when calling normalize()
						// repeatedly. Also, for IE, we must normalize body, not documentElement.
						// IE is also known for having a "crash effect" with normalize().
						// We should try to normalize with IE too in some way, somewhere.
						if (!CKEDITOR.env.ie) styleNode.$.normalize();
					}
					// Style already inherit from parents, left just to clear up any internal overrides. (#5931)
					else {
							styleNode = new CKEDITOR.dom.element('span');
							styleRange.extractContents().appendTo(styleNode);
							styleRange.insertNode(styleNode);
							removeFromInsideElement.call(this, styleNode);
							styleNode.remove(true);
						}
	
					// Style applied, let's release the range, so it gets
					// re-initialization in the next loop.
					styleRange = null;
				}
			}
	
			// Remove the bookmark nodes.
			range.moveToBookmark(boundaryNodes);
	
			// Minimize the result range to exclude empty text nodes. (#5374)
			range.shrink(CKEDITOR.SHRINK_TEXT);
	
			// Get inside the remaining element if range.shrink( TEXT ) has failed because of non-editable elements inside.
			// E.g. range.shrink( TEXT ) will not get inside:
			// [<b><i contenteditable="false">x</i></b>]
			// but range.shrink( ELEMENT ) will.
			range.shrink(CKEDITOR.NODE_ELEMENT, true);
		}
	
		function removeInlineStyle(range) {
			// Make sure our range has included all "collpased" parent inline nodes so
			// that our operation logic can be simpler.
			range.enlarge(CKEDITOR.ENLARGE_INLINE, 1);
	
			var bookmark = range.createBookmark(),
			    startNode = bookmark.startNode;
	
			if (range.collapsed) {
				var startPath = new CKEDITOR.dom.elementPath(startNode.getParent(), range.root),
	
				// The topmost element in elementspatch which we should jump out of.
				boundaryElement;
	
				for (var i = 0, element; i < startPath.elements.length && (element = startPath.elements[i]); i++) {
					// 1. If it's collaped inside text nodes, try to remove the style from the whole element.
					//
					// 2. Otherwise if it's collapsed on element boundaries, moving the selection
					//  outside the styles instead of removing the whole tag,
					//  also make sure other inner styles were well preserverd.(#3309)
					if (element == startPath.block || element == startPath.blockLimit) break;
	
					if (this.checkElementRemovable(element)) {
						var isStart;
	
						if (range.collapsed && (range.checkBoundaryOfElement(element, CKEDITOR.END) || (isStart = range.checkBoundaryOfElement(element, CKEDITOR.START)))) {
							boundaryElement = element;
							boundaryElement.match = isStart ? 'start' : 'end';
						} else {
							// Before removing the style node, there may be a sibling to the style node
							// that's exactly the same to the one to be removed. To the user, it makes
							// no difference that they're separate entities in the DOM tree. So, merge
							// them before removal.
							element.mergeSiblings();
							if (element.is(this.element)) removeFromElement.call(this, element);else removeOverrides(element, getOverrides(this)[element.getName()]);
						}
					}
				}
	
				// Re-create the style tree after/before the boundary element,
				// the replication start from bookmark start node to define the
				// new range.
				if (boundaryElement) {
					var clonedElement = startNode;
					for (i = 0;; i++) {
						var newElement = startPath.elements[i];
						if (newElement.equals(boundaryElement)) break;
						// Avoid copying any matched element.
						else if (newElement.match) continue;else newElement = newElement.clone();
						newElement.append(clonedElement);
						clonedElement = newElement;
					}
					clonedElement[boundaryElement.match == 'start' ? 'insertBefore' : 'insertAfter'](boundaryElement);
				}
			} else {
				// Now our range isn't collapsed. Lets walk from the start node to the end
				// node via DFS and remove the styles one-by-one.
				var endNode = bookmark.endNode,
				    me = this;
	
				breakNodes();
	
				// Now, do the DFS walk.
				var currentNode = startNode;
				while (!currentNode.equals(endNode)) {
					// Need to get the next node first because removeFromElement() can remove
					// the current node from DOM tree.
					var nextNode = currentNode.getNextSourceNode();
					if (currentNode.type == CKEDITOR.NODE_ELEMENT && this.checkElementRemovable(currentNode)) {
						// Remove style from element or overriding element.
						if (currentNode.getName() == this.element) removeFromElement.call(this, currentNode);else removeOverrides(currentNode, getOverrides(this)[currentNode.getName()]);
	
						// removeFromElement() may have merged the next node with something before
						// the startNode via mergeSiblings(). In that case, the nextNode would
						// contain startNode and we'll have to call breakNodes() again and also
						// reassign the nextNode to something after startNode.
						if (nextNode.type == CKEDITOR.NODE_ELEMENT && nextNode.contains(startNode)) {
							breakNodes();
							nextNode = startNode.getNext();
						}
					}
					currentNode = nextNode;
				}
			}
	
			range.moveToBookmark(bookmark);
			// See the comment for range.shrink in applyInlineStyle.
			range.shrink(CKEDITOR.NODE_ELEMENT, true);
	
			// Find out the style ancestor that needs to be broken down at startNode
			// and endNode.
			function breakNodes() {
				var startPath = new CKEDITOR.dom.elementPath(startNode.getParent()),
				    endPath = new CKEDITOR.dom.elementPath(endNode.getParent()),
				    breakStart = null,
				    breakEnd = null;
	
				for (var i = 0; i < startPath.elements.length; i++) {
					var element = startPath.elements[i];
	
					if (element == startPath.block || element == startPath.blockLimit) break;
	
					if (me.checkElementRemovable(element, true)) breakStart = element;
				}
	
				for (i = 0; i < endPath.elements.length; i++) {
					element = endPath.elements[i];
	
					if (element == endPath.block || element == endPath.blockLimit) break;
	
					if (me.checkElementRemovable(element, true)) breakEnd = element;
				}
	
				if (breakEnd) endNode.breakParent(breakEnd);
				if (breakStart) startNode.breakParent(breakStart);
			}
		}
	
		// Apply style to nested editables inside editablesContainer.
		// @param {CKEDITOR.dom.element} editablesContainer
		// @context CKEDITOR.style
		function applyStyleOnNestedEditables(editablesContainer) {
			var editables = findNestedEditables(editablesContainer),
			    editable,
			    l = editables.length,
			    i = 0,
			    range = l && new CKEDITOR.dom.range(editablesContainer.getDocument());
	
			for (; i < l; ++i) {
				editable = editables[i];
				// Check if style is allowed by this editable's ACF.
				if (checkIfAllowedInEditable(editable, this)) {
					range.selectNodeContents(editable);
					applyInlineStyle.call(this, range);
				}
			}
		}
	
		// Finds nested editables within container. Does not return
		// editables nested in another editable (twice).
		function findNestedEditables(container) {
			var editables = [];
	
			container.forEach(function (element) {
				if (element.getAttribute('contenteditable') == 'true') {
					editables.push(element);
					return false; // Skip children.
				}
			}, CKEDITOR.NODE_ELEMENT, true);
	
			return editables;
		}
	
		// Checks if style is allowed in this editable.
		function checkIfAllowedInEditable(editable, style) {
			var filter = CKEDITOR.filter.instances[editable.data('cke-filter')];
	
			return filter ? filter.check(style) : 1;
		}
	
		// Checks if style is allowed by iterator's active filter.
		function checkIfAllowedByIterator(iterator, style) {
			return iterator.activeFilter ? iterator.activeFilter.check(style) : 1;
		}
	
		function applyObjectStyle(range) {
			// Selected or parent element. (#9651)
			var start = range.getEnclosedNode() || range.getCommonAncestor(false, true),
			    element = new CKEDITOR.dom.elementPath(start, range.root).contains(this.element, 1);
	
			element && !element.isReadOnly() && setupElement(element, this);
		}
	
		function removeObjectStyle(range) {
			var parent = range.getCommonAncestor(true, true),
			    element = new CKEDITOR.dom.elementPath(parent, range.root).contains(this.element, 1);
	
			if (!element) return;
	
			var style = this,
			    def = style._.definition,
			    attributes = def.attributes;
	
			// Remove all defined attributes.
			if (attributes) {
				for (var att in attributes) element.removeAttribute(att, attributes[att]);
			}
	
			// Assign all defined styles.
			if (def.styles) {
				for (var i in def.styles) {
					if (def.styles.hasOwnProperty(i)) element.removeStyle(i);
				}
			}
		}
	
		function applyBlockStyle(range) {
			// Serializible bookmarks is needed here since
			// elements may be merged.
			var bookmark = range.createBookmark(true);
	
			var iterator = range.createIterator();
			iterator.enforceRealBlocks = true;
	
			// make recognize <br /> tag as a separator in ENTER_BR mode (#5121)
			if (this._.enterMode) iterator.enlargeBr = this._.enterMode != CKEDITOR.ENTER_BR;
	
			var block,
			    doc = range.document,
			    newBlock;
	
			while (block = iterator.getNextParagraph()) {
				if (!block.isReadOnly() && checkIfAllowedByIterator(iterator, this)) {
					newBlock = getElement(this, doc, block);
					replaceBlock(block, newBlock);
				}
			}
	
			range.moveToBookmark(bookmark);
		}
	
		function removeBlockStyle(range) {
			// Serializible bookmarks is needed here since
			// elements may be merged.
			var bookmark = range.createBookmark(1);
	
			var iterator = range.createIterator();
			iterator.enforceRealBlocks = true;
			iterator.enlargeBr = this._.enterMode != CKEDITOR.ENTER_BR;
	
			var block, newBlock;
	
			while (block = iterator.getNextParagraph()) {
				if (this.checkElementRemovable(block)) {
					// <pre> get special treatment.
					if (block.is('pre')) {
						newBlock = this._.enterMode == CKEDITOR.ENTER_BR ? null : range.document.createElement(this._.enterMode == CKEDITOR.ENTER_P ? 'p' : 'div');
	
						newBlock && block.copyAttributes(newBlock);
						replaceBlock(block, newBlock);
					} else {
						removeFromElement.call(this, block);
					}
				}
			}
	
			range.moveToBookmark(bookmark);
		}
	
		// Replace the original block with new one, with special treatment
		// for <pre> blocks to make sure content format is well preserved, and merging/splitting adjacent
		// when necessary. (#3188)
		function replaceBlock(block, newBlock) {
			// Block is to be removed, create a temp element to
			// save contents.
			var removeBlock = !newBlock;
			if (removeBlock) {
				newBlock = block.getDocument().createElement('div');
				block.copyAttributes(newBlock);
			}
	
			var newBlockIsPre = newBlock && newBlock.is('pre'),
			    blockIsPre = block.is('pre'),
			    isToPre = newBlockIsPre && !blockIsPre,
			    isFromPre = !newBlockIsPre && blockIsPre;
	
			if (isToPre) newBlock = toPre(block, newBlock);else if (isFromPre)
				// Split big <pre> into pieces before start to convert.
				newBlock = fromPres(removeBlock ? [block.getHtml()] : splitIntoPres(block), newBlock);else block.moveChildren(newBlock);
	
			newBlock.replace(block);
	
			if (newBlockIsPre) {
				// Merge previous <pre> blocks.
				mergePre(newBlock);
			} else if (removeBlock) {
				removeNoAttribsElement(newBlock);
			}
		}
	
		// Merge a <pre> block with a previous sibling if available.
		function mergePre(preBlock) {
			var previousBlock;
			if (!((previousBlock = preBlock.getPrevious(nonWhitespaces)) && previousBlock.type == CKEDITOR.NODE_ELEMENT && previousBlock.is('pre'))) return;
	
			// Merge the previous <pre> block contents into the current <pre>
			// block.
			//
			// Another thing to be careful here is that currentBlock might contain
			// a '\n' at the beginning, and previousBlock might contain a '\n'
			// towards the end. These new lines are not normally displayed but they
			// become visible after merging.
			var mergedHtml = replace(previousBlock.getHtml(), /\n$/, '') + '\n\n' + replace(preBlock.getHtml(), /^\n/, '');
	
			// Krugle: IE normalizes innerHTML from <pre>, breaking whitespaces.
			if (CKEDITOR.env.ie) preBlock.$.outerHTML = '<pre>' + mergedHtml + '</pre>';else preBlock.setHtml(mergedHtml);
	
			previousBlock.remove();
		}
	
		// Split into multiple <pre> blocks separated by double line-break.
		function splitIntoPres(preBlock) {
			// Exclude the ones at header OR at tail,
			// and ignore bookmark content between them.
			var duoBrRegex = /(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi,
			    pres = [],
			    splitedHtml = replace(preBlock.getOuterHtml(), duoBrRegex, function (match, charBefore, bookmark) {
				return charBefore + '</pre>' + bookmark + '<pre>';
			});
	
			splitedHtml.replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi, function (match, preContent) {
				pres.push(preContent);
			});
			return pres;
		}
	
		// Wrapper function of String::replace without considering of head/tail bookmarks nodes.
		function replace(str, regexp, replacement) {
			var headBookmark = '',
			    tailBookmark = '';
	
			str = str.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi, function (str, m1, m2) {
				m1 && (headBookmark = m1);
				m2 && (tailBookmark = m2);
				return '';
			});
			return headBookmark + str.replace(regexp, replacement) + tailBookmark;
		}
	
		// Converting a list of <pre> into blocks with format well preserved.
		function fromPres(preHtmls, newBlock) {
			var docFrag;
			if (preHtmls.length > 1) docFrag = new CKEDITOR.dom.documentFragment(newBlock.getDocument());
	
			for (var i = 0; i < preHtmls.length; i++) {
				var blockHtml = preHtmls[i];
	
				// 1. Trim the first and last line-breaks immediately after and before <pre>,
				// they're not visible.
				blockHtml = blockHtml.replace(/(\r\n|\r)/g, '\n');
				blockHtml = replace(blockHtml, /^[ \t]*\n/, '');
				blockHtml = replace(blockHtml, /\n$/, '');
				// 2. Convert spaces or tabs at the beginning or at the end to &nbsp;
				blockHtml = replace(blockHtml, /^[ \t]+|[ \t]+$/g, function (match, offset) {
					if (match.length == 1) // one space, preserve it
						return '&nbsp;';else if (!offset) // beginning of block
						return CKEDITOR.tools.repeat('&nbsp;', match.length - 1) + ' ';else // end of block
						return ' ' + CKEDITOR.tools.repeat('&nbsp;', match.length - 1);
				});
	
				// 3. Convert \n to <BR>.
				// 4. Convert contiguous (i.e. non-singular) spaces or tabs to &nbsp;
				blockHtml = blockHtml.replace(/\n/g, '<br>');
				blockHtml = blockHtml.replace(/[ \t]{2,}/g, function (match) {
					return CKEDITOR.tools.repeat('&nbsp;', match.length - 1) + ' ';
				});
	
				if (docFrag) {
					var newBlockClone = newBlock.clone();
					newBlockClone.setHtml(blockHtml);
					docFrag.append(newBlockClone);
				} else {
					newBlock.setHtml(blockHtml);
				}
			}
	
			return docFrag || newBlock;
		}
	
		// Converting from a non-PRE block to a PRE block in formatting operations.
		function toPre(block, newBlock) {
			var bogus = block.getBogus();
			bogus && bogus.remove();
	
			// First trim the block content.
			var preHtml = block.getHtml();
	
			// 1. Trim head/tail spaces, they're not visible.
			preHtml = replace(preHtml, /(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g, '');
			// 2. Delete ANSI whitespaces immediately before and after <BR> because
			//    they are not visible.
			preHtml = preHtml.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi, '$1');
			// 3. Compress other ANSI whitespaces since they're only visible as one
			//    single space previously.
			// 4. Convert &nbsp; to spaces since &nbsp; is no longer needed in <PRE>.
			preHtml = preHtml.replace(/([ \t\n\r]+|&nbsp;)/g, ' ');
			// 5. Convert any <BR /> to \n. This must not be done earlier because
			//    the \n would then get compressed.
			preHtml = preHtml.replace(/<br\b[^>]*>/gi, '\n');
	
			// Krugle: IE normalizes innerHTML to <pre>, breaking whitespaces.
			if (CKEDITOR.env.ie) {
				var temp = block.getDocument().createElement('div');
				temp.append(newBlock);
				newBlock.$.outerHTML = '<pre>' + preHtml + '</pre>';
				newBlock.copyAttributes(temp.getFirst());
				newBlock = temp.getFirst().remove();
			} else {
				newBlock.setHtml(preHtml);
			}
	
			return newBlock;
		}
	
		// Removes a style from an element itself, don't care about its subtree.
		function removeFromElement(element, keepDataAttrs) {
			var def = this._.definition,
			    attributes = def.attributes,
			    styles = def.styles,
			    overrides = getOverrides(this)[element.getName()],
	
			// If the style is only about the element itself, we have to remove the element.
			removeEmpty = CKEDITOR.tools.isEmpty(attributes) && CKEDITOR.tools.isEmpty(styles);
	
			// Remove definition attributes/style from the elemnt.
			for (var attName in attributes) {
				// The 'class' element value must match (#1318).
				if ((attName == 'class' || this._.definition.fullMatch) && element.getAttribute(attName) != normalizeProperty(attName, attributes[attName])) continue;
	
				// Do not touch data-* attributes (#11011) (#11258).
				if (keepDataAttrs && attName.slice(0, 5) == 'data-') continue;
	
				removeEmpty = element.hasAttribute(attName);
				element.removeAttribute(attName);
			}
	
			for (var styleName in styles) {
				// Full match style insist on having fully equivalence. (#5018)
				if (this._.definition.fullMatch && element.getStyle(styleName) != normalizeProperty(styleName, styles[styleName], true)) continue;
	
				removeEmpty = removeEmpty || !!element.getStyle(styleName);
				element.removeStyle(styleName);
			}
	
			// Remove overrides, but don't remove the element if it's a block element
			removeOverrides(element, overrides, blockElements[element.getName()]);
	
			if (removeEmpty) {
				if (this._.definition.alwaysRemoveElement) removeNoAttribsElement(element, 1);else {
					if (!CKEDITOR.dtd.$block[element.getName()] || this._.enterMode == CKEDITOR.ENTER_BR && !element.hasAttributes()) removeNoAttribsElement(element);else element.renameNode(this._.enterMode == CKEDITOR.ENTER_P ? 'p' : 'div');
				}
			}
		}
	
		// Removes a style from inside an element. Called on applyStyle to make cleanup
		// before apply. During clean up this function keep data-* attribute in contrast
		// to removeFromElement.
		function removeFromInsideElement(element) {
			var overrides = getOverrides(this),
			    innerElements = element.getElementsByTag(this.element),
			    innerElement;
	
			for (var i = innerElements.count(); --i >= 0;) {
				innerElement = innerElements.getItem(i);
	
				// Do not remove elements which are read only (e.g. duplicates inside widgets).
				if (!innerElement.isReadOnly()) removeFromElement.call(this, innerElement, true);
			}
	
			// Now remove any other element with different name that is
			// defined to be overriden.
			for (var overrideElement in overrides) {
				if (overrideElement != this.element) {
					innerElements = element.getElementsByTag(overrideElement);
	
					for (i = innerElements.count() - 1; i >= 0; i--) {
						innerElement = innerElements.getItem(i);
	
						// Do not remove elements which are read only (e.g. duplicates inside widgets).
						if (!innerElement.isReadOnly()) removeOverrides(innerElement, overrides[overrideElement]);
					}
				}
			}
		}
	
		// Remove overriding styles/attributes from the specific element.
		// Note: Remove the element if no attributes remain.
		// @param {Object} element
		// @param {Object} overrides
		// @param {Boolean} Don't remove the element
		function removeOverrides(element, overrides, dontRemove) {
			var attributes = overrides && overrides.attributes;
	
			if (attributes) {
				for (var i = 0; i < attributes.length; i++) {
					var attName = attributes[i][0],
					    actualAttrValue;
	
					if (actualAttrValue = element.getAttribute(attName)) {
						var attValue = attributes[i][1];
	
						// Remove the attribute if:
						//    - The override definition value is null ;
						//    - The override definition valie is a string that
						//      matches the attribute value exactly.
						//    - The override definition value is a regex that
						//      has matches in the attribute value.
						if (attValue === null || attValue.test && attValue.test(actualAttrValue) || typeof attValue == 'string' && actualAttrValue == attValue) element.removeAttribute(attName);
					}
				}
			}
	
			if (!dontRemove) removeNoAttribsElement(element);
		}
	
		// If the element has no more attributes, remove it.
		function removeNoAttribsElement(element, forceRemove) {
			// If no more attributes remained in the element, remove it,
			// leaving its children.
			if (!element.hasAttributes() || forceRemove) {
				if (CKEDITOR.dtd.$block[element.getName()]) {
					var previous = element.getPrevious(nonWhitespaces),
					    next = element.getNext(nonWhitespaces);
	
					if (previous && (previous.type == CKEDITOR.NODE_TEXT || !previous.isBlockBoundary({ br: 1 }))) element.append('br', 1);
					if (next && (next.type == CKEDITOR.NODE_TEXT || !next.isBlockBoundary({ br: 1 }))) element.append('br');
	
					element.remove(true);
				} else {
					// Removing elements may open points where merging is possible,
					// so let's cache the first and last nodes for later checking.
					var firstChild = element.getFirst();
					var lastChild = element.getLast();
	
					element.remove(true);
	
					if (firstChild) {
						// Check the cached nodes for merging.
						firstChild.type == CKEDITOR.NODE_ELEMENT && firstChild.mergeSiblings();
	
						if (lastChild && !firstChild.equals(lastChild) && lastChild.type == CKEDITOR.NODE_ELEMENT) lastChild.mergeSiblings();
					}
				}
			}
		}
	
		function getElement(style, targetDocument, element) {
			var el,
			    elementName = style.element;
	
			// The "*" element name will always be a span for this function.
			if (elementName == '*') elementName = 'span';
	
			// Create the element.
			el = new CKEDITOR.dom.element(elementName, targetDocument);
	
			// #6226: attributes should be copied before the new ones are applied
			if (element) element.copyAttributes(el);
	
			el = setupElement(el, style);
	
			// Avoid ID duplication.
			if (targetDocument.getCustomData('doc_processing_style') && el.hasAttribute('id')) el.removeAttribute('id');else targetDocument.setCustomData('doc_processing_style', 1);
	
			return el;
		}
	
		function setupElement(el, style) {
			var def = style._.definition,
			    attributes = def.attributes,
			    styles = CKEDITOR.style.getStyleText(def);
	
			// Assign all defined attributes.
			if (attributes) {
				for (var att in attributes) el.setAttribute(att, attributes[att]);
			}
	
			// Assign all defined styles.
			if (styles) el.setAttribute('style', styles);
	
			return el;
		}
	
		function replaceVariables(list, variablesValues) {
			for (var item in list) {
				list[item] = list[item].replace(varRegex, function (match, varName) {
					return variablesValues[varName];
				});
			}
		}
	
		// Returns an object that can be used for style matching comparison.
		// Attributes names and values are all lowercased, and the styles get
		// merged with the style attribute.
		function getAttributesForComparison(styleDefinition) {
			// If we have already computed it, just return it.
			var attribs = styleDefinition._AC;
			if (attribs) return attribs;
	
			attribs = {};
	
			var length = 0;
	
			// Loop through all defined attributes.
			var styleAttribs = styleDefinition.attributes;
			if (styleAttribs) {
				for (var styleAtt in styleAttribs) {
					length++;
					attribs[styleAtt] = styleAttribs[styleAtt];
				}
			}
	
			// Includes the style definitions.
			var styleText = CKEDITOR.style.getStyleText(styleDefinition);
			if (styleText) {
				if (!attribs.style) length++;
				attribs.style = styleText;
			}
	
			// Appends the "length" information to the object.
			attribs._length = length;
	
			// Return it, saving it to the next request.
			return styleDefinition._AC = attribs;
		}
	
		// Get the the collection used to compare the elements and attributes,
		// defined in this style overrides, with other element. All information in
		// it is lowercased.
		// @param {CKEDITOR.style} style
		function getOverrides(style) {
			if (style._.overrides) return style._.overrides;
	
			var overrides = style._.overrides = {},
			    definition = style._.definition.overrides;
	
			if (definition) {
				// The override description can be a string, object or array.
				// Internally, well handle arrays only, so transform it if needed.
				if (!CKEDITOR.tools.isArray(definition)) definition = [definition];
	
				// Loop through all override definitions.
				for (var i = 0; i < definition.length; i++) {
					var override = definition[i],
					    elementName,
					    overrideEl,
					    attrs;
	
					// If can be a string with the element name.
					if (typeof override == 'string') elementName = override.toLowerCase();
					// Or an object.
					else {
							elementName = override.element ? override.element.toLowerCase() : style.element;
							attrs = override.attributes;
						}
	
					// We can have more than one override definition for the same
					// element name, so we attempt to simply append information to
					// it if it already exists.
					overrideEl = overrides[elementName] || (overrides[elementName] = {});
	
					if (attrs) {
						// The returning attributes list is an array, because we
						// could have different override definitions for the same
						// attribute name.
						var overrideAttrs = overrideEl.attributes = overrideEl.attributes || [];
						for (var attName in attrs) {
							// Each item in the attributes array is also an array,
							// where [0] is the attribute name and [1] is the
							// override value.
							overrideAttrs.push([attName.toLowerCase(), attrs[attName]]);
						}
					}
				}
			}
	
			return overrides;
		}
	
		// Make the comparison of attribute value easier by standardizing it.
		function normalizeProperty(name, value, isStyle) {
			var temp = new CKEDITOR.dom.element('span');
			temp[isStyle ? 'setStyle' : 'setAttribute'](name, value);
			return temp[isStyle ? 'getStyle' : 'getAttribute'](name);
		}
	
		// Compare two bunch of styles, with the speciality that value 'inherit'
		// is treated as a wildcard which will match any value.
		// @param {Object/String} source
		// @param {Object/String} target
		// @returns {Boolean}
		function compareCssText(source, target) {
			function filter(string, propertyName) {
				// In case of font-families we'll skip quotes. (#10750)
				return propertyName.toLowerCase() == 'font-family' ? string.replace(/["']/g, '') : string;
			}
	
			if (typeof source == 'string') source = CKEDITOR.tools.parseCssText(source);
			if (typeof target == 'string') target = CKEDITOR.tools.parseCssText(target, true);
	
			for (var name in source) {
				if (!(name in target)) {
					return false;
				}
	
				if (!(filter(target[name], name) == filter(source[name], name) || source[name] == 'inherit' || target[name] == 'inherit')) {
					return false;
				}
			}
			return true;
		}
	
		function applyStyleOnSelection(selection, remove, editor) {
			var doc = selection.document,
			    ranges = selection.getRanges(),
			    func = remove ? this.removeFromRange : this.applyToRange,
			    range;
	
			var iterator = ranges.createIterator();
			while (range = iterator.getNextRange()) func.call(this, range, editor);
	
			selection.selectRanges(ranges);
			doc.removeCustomData('doc_processing_style');
		}
	})();
	
	/**
	 * Generic style command. It applies a specific style when executed.
	 *
	 *		var boldStyle = new CKEDITOR.style( { element: 'strong' } );
	 *		// Register the "bold" command, which applies the bold style.
	 *		editor.addCommand( 'bold', new CKEDITOR.styleCommand( boldStyle ) );
	 *
	 * @class
	 * @constructor Creates a styleCommand class instance.
	 * @extends CKEDITOR.commandDefinition
	 * @param {CKEDITOR.style} style The style to be applied when command is executed.
	 * @param {Object} [ext] Additional command definition's properties.
	 */
	CKEDITOR.styleCommand = function (style, ext) {
		this.style = style;
		this.allowedContent = style;
		this.requiredContent = style;
	
		CKEDITOR.tools.extend(this, ext, true);
	};
	
	/**
	 * @param {CKEDITOR.editor} editor
	 * @todo
	 */
	CKEDITOR.styleCommand.prototype.exec = function (editor) {
		editor.focus();
	
		if (this.state == CKEDITOR.TRISTATE_OFF) editor.applyStyle(this.style);else if (this.state == CKEDITOR.TRISTATE_ON) editor.removeStyle(this.style);
	};
	
	/**
	 * Manages styles registration and loading. See also {@link CKEDITOR.config#stylesSet}.
	 *
	 *		// The set of styles for the <b>Styles</b> drop-down list.
	 *		CKEDITOR.stylesSet.add( 'default', [
	 *			// Block Styles
	 *			{ name: 'Blue Title',		element: 'h3',		styles: { 'color': 'Blue' } },
	 *			{ name: 'Red Title',		element: 'h3',		styles: { 'color': 'Red' } },
	 *
	 *			// Inline Styles
	 *			{ name: 'Marker: Yellow',	element: 'span',	styles: { 'background-color': 'Yellow' } },
	 *			{ name: 'Marker: Green',	element: 'span',	styles: { 'background-color': 'Lime' } },
	 *
	 *			// Object Styles
	 *			{
	 *				name: 'Image on Left',
	 *				element: 'img',
	 *				attributes: {
	 *					style: 'padding: 5px; margin-right: 5px',
	 *					border: '2',
	 *					align: 'left'
	 *				}
	 *			}
	 *		] );
	 *
	 * @since 3.2
	 * @class
	 * @singleton
	 * @extends CKEDITOR.resourceManager
	 */
	CKEDITOR.stylesSet = new CKEDITOR.resourceManager('', 'stylesSet');
	
	// Backward compatibility (#5025).
	CKEDITOR.addStylesSet = CKEDITOR.tools.bind(CKEDITOR.stylesSet.add, CKEDITOR.stylesSet);
	CKEDITOR.loadStylesSet = function (name, url, callback) {
		CKEDITOR.stylesSet.addExternal(name, url, '');
		CKEDITOR.stylesSet.load(name, callback);
	};
	
	CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
		/**
	  * Registers a function to be called whenever the selection position changes in the
	  * editing area. The current state is passed to the function. The possible
	  * states are {@link CKEDITOR#TRISTATE_ON} and {@link CKEDITOR#TRISTATE_OFF}.
	  *
	  *		// Create a style object for the <b> element.
	  *		var style = new CKEDITOR.style( { element: 'b' } );
	  *		var editor = CKEDITOR.instances.editor1;
	  *		editor.attachStyleStateChange( style, function( state ) {
	  *			if ( state == CKEDITOR.TRISTATE_ON )
	  *				alert( 'The current state for the B element is ON' );
	  *			else
	  *				alert( 'The current state for the B element is OFF' );
	  *		} );
	  *
	  * @member CKEDITOR.editor
	  * @param {CKEDITOR.style} style The style to be watched.
	  * @param {Function} callback The function to be called.
	  */
		attachStyleStateChange: function (style, callback) {
			// Try to get the list of attached callbacks.
			var styleStateChangeCallbacks = this._.styleStateChangeCallbacks;
	
			// If it doesn't exist, it means this is the first call. So, let's create
			// all the structure to manage the style checks and the callback calls.
			if (!styleStateChangeCallbacks) {
				// Create the callbacks array.
				styleStateChangeCallbacks = this._.styleStateChangeCallbacks = [];
	
				// Attach to the selectionChange event, so we can check the styles at
				// that point.
				this.on('selectionChange', function (ev) {
					// Loop throw all registered callbacks.
					for (var i = 0; i < styleStateChangeCallbacks.length; i++) {
						var callback = styleStateChangeCallbacks[i];
	
						// Check the current state for the style defined for that callback.
						var currentState = callback.style.checkActive(ev.data.path, this) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF;
	
						// Call the callback function, passing the current state to it.
						callback.fn.call(this, currentState);
					}
				});
			}
	
			// Save the callback info, so it can be checked on the next occurrence of
			// selectionChange.
			styleStateChangeCallbacks.push({ style: style, fn: callback });
		},
	
		/**
	  * Applies the style upon the editor's current selection. Shorthand for
	  * {@link CKEDITOR.style#apply}.
	  *
	  * @member CKEDITOR.editor
	  * @param {CKEDITOR.style} style
	  */
		applyStyle: function (style) {
			style.apply(this);
		},
	
		/**
	  * Removes the style from the editor's current selection. Shorthand for
	  * {@link CKEDITOR.style#remove}.
	  *
	  * @member CKEDITOR.editor
	  * @param {CKEDITOR.style} style
	  */
		removeStyle: function (style) {
			style.remove(this);
		},
	
		/**
	  * Gets the current `stylesSet` for this instance.
	  *
	  *		editor.getStylesSet( function( stylesDefinitions ) {} );
	  *
	  * See also {@link CKEDITOR.editor#stylesSet} event.
	  *
	  * @member CKEDITOR.editor
	  * @param {Function} callback The function to be called with the styles data.
	  */
		getStylesSet: function (callback) {
			if (!this._.stylesDefinitions) {
				var editor = this,
	
				// Respect the backwards compatible definition entry
				configStyleSet = editor.config.stylesCombo_stylesSet || editor.config.stylesSet;
	
				// The false value means that none styles should be loaded.
				if (configStyleSet === false) {
					callback(null);
					return;
				}
	
				// #5352 Allow to define the styles directly in the config object
				if (configStyleSet instanceof Array) {
					editor._.stylesDefinitions = configStyleSet;
					callback(configStyleSet);
					return;
				}
	
				// Default value is 'default'.
				if (!configStyleSet) configStyleSet = 'default';
	
				var partsStylesSet = configStyleSet.split(':'),
				    styleSetName = partsStylesSet[0],
				    externalPath = partsStylesSet[1];
	
				CKEDITOR.stylesSet.addExternal(styleSetName, externalPath ? partsStylesSet.slice(1).join(':') : CKEDITOR.getUrl('styles.js'), '');
	
				CKEDITOR.stylesSet.load(styleSetName, function (stylesSet) {
					editor._.stylesDefinitions = stylesSet[styleSetName];
					callback(editor._.stylesDefinitions);
				});
			} else {
				callback(this._.stylesDefinitions);
			}
		}
	});
	
	/**
	 * Indicates that fully selected read-only elements will be included when
	 * applying the style (for inline styles only).
	 *
	 * @since 3.5
	 * @property {Boolean} [includeReadonly=false]
	 * @member CKEDITOR.style
	 */
	
	/**
	 * Indicates that any matches element of this style will be eventually removed
	 * when calling {@link CKEDITOR.editor#removeStyle}.
	 *
	 * @since 4.0
	 * @property {Boolean} [alwaysRemoveElement=false]
	 * @member CKEDITOR.style
	 */
	
	/**
	 * Disables inline styling on read-only elements.
	 *
	 * @since 3.5
	 * @cfg {Boolean} [disableReadonlyStyling=false]
	 * @member CKEDITOR.config
	 */
	
	/**
	 * The "styles definition set" to use in the editor. They will be used in the
	 * styles combo and the style selector of the div container.
	 *
	 * The styles may be defined in the page containing the editor, or can be
	 * loaded on demand from an external file. In the second case, if this setting
	 * contains only a name, the `styles.js` file will be loaded from the
	 * CKEditor root folder (what ensures backward compatibility with CKEditor 4.0).
	 *
	 * Otherwise, this setting has the `name:url` syntax, making it
	 * possible to set the URL from which the styles file will be loaded.
	 * Note that the `name` has to be equal to the name used in
	 * {@link CKEDITOR.stylesSet#add} while registering the styles set.
	 *
	 * **Note**: Since 4.1 it is possible to set `stylesSet` to `false`
	 * to prevent loading any styles set.
	 *
	 * Read more in the [documentation](#!/guide/dev_styles)
	 * and see the [SDK sample](http://sdk.ckeditor.com/samples/styles.html).
	 *
	 *		// Do not load any file. The styles set is empty.
	 *		config.stylesSet = false;
	 *
	 *		// Load the 'mystyles' styles set from the styles.js file.
	 *		config.stylesSet = 'mystyles';
	 *
	 *		// Load the 'mystyles' styles set from a relative URL.
	 *		config.stylesSet = 'mystyles:/editorstyles/styles.js';
	 *
	 *		// Load the 'mystyles' styles set from a full URL.
	 *		config.stylesSet = 'mystyles:http://www.example.com/editorstyles/styles.js';
	 *
	 *		// Load from a list of definitions.
	 *		config.stylesSet = [
	 *			{ name: 'Strong Emphasis', element: 'strong' },
	 *			{ name: 'Emphasis', element: 'em' },
	 *			...
	 *		];
	 *
	 * @since 3.3
	 * @cfg {String/Array/Boolean} [stylesSet='default']
	 * @member CKEDITOR.config
	 */

/***/ },
/* 50 */
/*!*****************************!*\
  !*** ./core/dom/comment.js ***!
  \*****************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.dom.comment} class, which represents
	 *		a DOM comment node.
	 */
	
	/**
	 * Represents a DOM comment node.
	 *
	 *		var nativeNode = document.createComment( 'Example' );
	 *		var comment = new CKEDITOR.dom.comment( nativeNode );
	 *
	 *		var comment = new CKEDITOR.dom.comment( 'Example' );
	 *
	 * @class
	 * @extends CKEDITOR.dom.node
	 * @constructor Creates a comment class instance.
	 * @param {Object/String} comment A native DOM comment node or a string containing
	 * the text to use to create a new comment node.
	 * @param {CKEDITOR.dom.document} [ownerDocument] The document that will contain
	 * the node in case of new node creation. Defaults to the current document.
	 */
	CKEDITOR.dom.comment = function (comment, ownerDocument) {
	  if (typeof comment == 'string') comment = (ownerDocument ? ownerDocument.$ : document).createComment(comment);
	
	  CKEDITOR.dom.domObject.call(this, comment);
	};
	
	CKEDITOR.dom.comment.prototype = new CKEDITOR.dom.node();
	
	CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype, {
	  /**
	   * The node type. This is a constant value set to {@link CKEDITOR#NODE_COMMENT}.
	   *
	   * @readonly
	   * @property {Number} [=CKEDITOR.NODE_COMMENT]
	   */
	  type: CKEDITOR.NODE_COMMENT,
	
	  /**
	   * Gets the outer HTML of this comment.
	   *
	   * @returns {String} The HTML `<!-- comment value -->`.
	   */
	  getOuterHtml: function () {
	    return '<!--' + this.$.nodeValue + '-->';
	  }
	});

/***/ },
/* 51 */
/*!*********************************!*\
  !*** ./core/dom/elementpath.js ***!
  \*********************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	'use strict';
	
	(function () {
	
		var pathBlockLimitElements = {},
		    pathBlockElements = {},
		    tag;
	
		// Elements that are considered the "Block limit" in an element path.
		for (tag in CKEDITOR.dtd.$blockLimit) {
			// Exclude from list roots.
			if (!(tag in CKEDITOR.dtd.$list)) pathBlockLimitElements[tag] = 1;
		}
	
		// Elements that are considered the "End level Block" in an element path.
		for (tag in CKEDITOR.dtd.$block) {
			// Exclude block limits, and empty block element, e.g. hr.
			if (!(tag in CKEDITOR.dtd.$blockLimit || tag in CKEDITOR.dtd.$empty)) pathBlockElements[tag] = 1;
		}
	
		// Check if an element contains any block element.
		function checkHasBlock(element) {
			var childNodes = element.getChildren();
	
			for (var i = 0, count = childNodes.count(); i < count; i++) {
				var child = childNodes.getItem(i);
	
				if (child.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$block[child.getName()]) return true;
			}
	
			return false;
		}
	
		/**
	  * Retrieve the list of nodes walked from the start node up to the editable element of the editor.
	  *
	  * @class
	  * @constructor Creates an element path class instance.
	  * @param {CKEDITOR.dom.element} startNode From which the path should start.
	  * @param {CKEDITOR.dom.element} root To which element the path should stop, defaults to the `body` element.
	  */
		CKEDITOR.dom.elementPath = function (startNode, root) {
			var block = null,
			    blockLimit = null,
			    elements = [],
			    e = startNode,
			    elementName;
	
			// Backward compact.
			root = root || startNode.getDocument().getBody();
	
			do {
				if (e.type == CKEDITOR.NODE_ELEMENT) {
					elements.push(e);
	
					if (!this.lastElement) {
						this.lastElement = e;
	
						// If an object or non-editable element is fully selected at the end of the element path,
						// it must not become the block limit.
						if (e.is(CKEDITOR.dtd.$object) || e.getAttribute('contenteditable') == 'false') continue;
					}
	
					if (e.equals(root)) break;
	
					if (!blockLimit) {
						elementName = e.getName();
	
						// First editable element becomes a block limit, because it cannot be split.
						if (e.getAttribute('contenteditable') == 'true') blockLimit = e;
						// "Else" because element cannot be both - block and block levelimit.
						else if (!block && pathBlockElements[elementName]) block = e;
	
						if (pathBlockLimitElements[elementName]) {
							// End level DIV is considered as the block, if no block is available. (#525)
							// But it must NOT be the root element (checked above).
							if (!block && elementName == 'div' && !checkHasBlock(e)) block = e;else blockLimit = e;
						}
					}
				}
			} while (e = e.getParent());
	
			// Block limit defaults to root.
			if (!blockLimit) blockLimit = root;
	
			/**
	   * First non-empty block element which:
	   *
	   * * is not a {@link CKEDITOR.dtd#$blockLimit},
	   * * or is a `div` which does not contain block elements and is not a `root`.
	   *
	   * This means a first, splittable block in elements path.
	   *
	   * @readonly
	   * @property {CKEDITOR.dom.element}
	   */
			this.block = block;
	
			/**
	   * See the {@link CKEDITOR.dtd#$blockLimit} description.
	   *
	   * @readonly
	   * @property {CKEDITOR.dom.element}
	   */
			this.blockLimit = blockLimit;
	
			/**
	   * The root of the elements path - `root` argument passed to class constructor or a `body` element.
	   *
	   * @readonly
	   * @property {CKEDITOR.dom.element}
	   */
			this.root = root;
	
			/**
	   * An array of elements (from `startNode` to `root`) in the path.
	   *
	   * @readonly
	   * @property {CKEDITOR.dom.element[]}
	   */
			this.elements = elements;
	
			/**
	   * The last element of the elements path - `startNode` or its parent.
	   *
	   * @readonly
	   * @property {CKEDITOR.dom.element} lastElement
	   */
		};
	})();
	
	CKEDITOR.dom.elementPath.prototype = {
		/**
	  * Compares this element path with another one.
	  *
	  * @param {CKEDITOR.dom.elementPath} otherPath The elementPath object to be
	  * compared with this one.
	  * @returns {Boolean} `true` if the paths are equal, containing the same
	  * number of elements and the same elements in the same order.
	  */
		compare: function (otherPath) {
			var thisElements = this.elements;
			var otherElements = otherPath && otherPath.elements;
	
			if (!otherElements || thisElements.length != otherElements.length) return false;
	
			for (var i = 0; i < thisElements.length; i++) {
				if (!thisElements[i].equals(otherElements[i])) return false;
			}
	
			return true;
		},
	
		/**
	  * Search the path elements that meets the specified criteria.
	  *
	  * @param {String/Array/Function/Object/CKEDITOR.dom.element} query The criteria that can be
	  * either a tag name, list (array and object) of tag names, element or an node evaluator function.
	  * @param {Boolean} [excludeRoot] Not taking path root element into consideration.
	  * @param {Boolean} [fromTop] Search start from the topmost element instead of bottom.
	  * @returns {CKEDITOR.dom.element} The first matched dom element or `null`.
	  */
		contains: function (query, excludeRoot, fromTop) {
			var evaluator;
			if (typeof query == 'string') evaluator = function (node) {
				return node.getName() == query;
			};
			if (query instanceof CKEDITOR.dom.element) evaluator = function (node) {
				return node.equals(query);
			};else if (CKEDITOR.tools.isArray(query)) evaluator = function (node) {
				return CKEDITOR.tools.indexOf(query, node.getName()) > -1;
			};else if (typeof query == 'function') evaluator = query;else if (typeof query == 'object') evaluator = function (node) {
				return node.getName() in query;
			};
	
			var elements = this.elements,
			    length = elements.length;
			excludeRoot && length--;
	
			if (fromTop) {
				elements = Array.prototype.slice.call(elements, 0);
				elements.reverse();
			}
	
			for (var i = 0; i < length; i++) {
				if (evaluator(elements[i])) return elements[i];
			}
	
			return null;
		},
	
		/**
	  * Check whether the elements path is the proper context for the specified
	  * tag name in the DTD.
	  *
	  * @param {String} tag The tag name.
	  * @returns {Boolean}
	  */
		isContextFor: function (tag) {
			var holder;
	
			// Check for block context.
			if (tag in CKEDITOR.dtd.$block) {
				// Indeterminate elements which are not subjected to be splitted or surrounded must be checked first.
				var inter = this.contains(CKEDITOR.dtd.$intermediate);
				holder = inter || this.root.equals(this.block) && this.block || this.blockLimit;
				return !!holder.getDtd()[tag];
			}
	
			return true;
		},
	
		/**
	  * Retrieve the text direction for this elements path.
	  *
	  * @returns {'ltr'/'rtl'}
	  */
		direction: function () {
			var directionNode = this.block || this.blockLimit || this.root;
			return directionNode.getDirection(1);
		}
	};

/***/ },
/* 52 */
/*!**************************!*\
  !*** ./core/dom/text.js ***!
  \**************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.dom.text} class, which represents
	 *		a DOM text node.
	 */
	
	/**
	 * Represents a DOM text node.
	 *
	 *		var nativeNode = document.createTextNode( 'Example' );
	 *		var text = new CKEDITOR.dom.text( nativeNode );
	 *
	 *		var text = new CKEDITOR.dom.text( 'Example' );
	 *
	 * @class
	 * @extends CKEDITOR.dom.node
	 * @constructor Creates a text class instance.
	 * @param {Object/String} text A native DOM text node or a string containing
	 * the text to use to create a new text node.
	 * @param {CKEDITOR.dom.document} [ownerDocument] The document that will contain
	 * the node in case of new node creation. Defaults to the current document.
	 */
	CKEDITOR.dom.text = function (text, ownerDocument) {
		if (typeof text == 'string') text = (ownerDocument ? ownerDocument.$ : document).createTextNode(text);
	
		// Theoretically, we should call the base constructor here
		// (not CKEDITOR.dom.node though). But, IE doesn't support expando
		// properties on text node, so the features provided by domObject will not
		// work for text nodes (which is not a big issue for us).
		//
		// CKEDITOR.dom.domObject.call( this, element );
	
		this.$ = text;
	};
	
	CKEDITOR.dom.text.prototype = new CKEDITOR.dom.node();
	
	CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype, {
		/**
	  * The node type. This is a constant value set to {@link CKEDITOR#NODE_TEXT}.
	  *
	  * @readonly
	  * @property {Number} [=CKEDITOR.NODE_TEXT]
	  */
		type: CKEDITOR.NODE_TEXT,
	
		/**
	  * Gets length of node's value.
	  *
	  * @returns {Number}
	  */
		getLength: function () {
			return this.$.nodeValue.length;
		},
	
		/**
	  * Gets node's value.
	  *
	  * @returns {String}
	  */
		getText: function () {
			return this.$.nodeValue;
		},
	
		/**
	  * Sets node's value.
	  *
	  * @param {String} text
	  */
		setText: function (text) {
			this.$.nodeValue = text;
		},
	
		/**
	  * Breaks this text node into two nodes at the specified offset,
	  * keeping both in the tree as siblings. This node then only contains
	  * all the content up to the offset point. A new text node, which is
	  * inserted as the next sibling of this node, contains all the content
	  * at and after the offset point. When the offset is equal to the
	  * length of this node, the new node has no data.
	  *
	  * @param {Number} The position at which to split, starting from zero.
	  * @returns {CKEDITOR.dom.text} The new text node.
	  */
		split: function (offset) {
	
			// Saved the children count and text length beforehand.
			var parent = this.$.parentNode,
			    count = parent.childNodes.length,
			    length = this.getLength();
	
			var doc = this.getDocument();
			var retval = new CKEDITOR.dom.text(this.$.splitText(offset), doc);
	
			if (parent.childNodes.length == count) {
				// If the offset is after the last char, IE creates the text node
				// on split, but don't include it into the DOM. So, we have to do
				// that manually here.
				if (offset >= length) {
					retval = doc.createText('');
					retval.insertAfter(this);
				} else {
					// IE BUG: IE8+ does not update the childNodes array in DOM after splitText(),
					// we need to make some DOM changes to make it update. (#3436)
					var workaround = doc.createText('');
					workaround.insertAfter(retval);
					workaround.remove();
				}
			}
	
			return retval;
		},
	
		/**
	  * Extracts characters from indexA up to but not including `indexB`.
	  *
	  * @param {Number} indexA An integer between `0` and one less than the
	  * length of the text.
	  * @param {Number} [indexB] An integer between `0` and the length of the
	  * string. If omitted, extracts characters to the end of the text.
	  */
		substring: function (indexA, indexB) {
			// We need the following check due to a Firefox bug
			// https://bugzilla.mozilla.org/show_bug.cgi?id=458886
			if (typeof indexB != 'number') return this.$.nodeValue.substr(indexA);else return this.$.nodeValue.substring(indexA, indexB);
		}
	});

/***/ },
/* 53 */
/*!*******************************!*\
  !*** ./core/dom/rangelist.js ***!
  \*******************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	(function () {
		/**
	  * Represents a list os CKEDITOR.dom.range objects, which can be easily
	  * iterated sequentially.
	  *
	  * @class
	  * @extends Array
	  * @constructor Creates a rangeList class instance.
	  * @param {CKEDITOR.dom.range/CKEDITOR.dom.range[]} [ranges] The ranges contained on this list.
	  * Note that, if an array of ranges is specified, the range sequence
	  * should match its DOM order. This class will not help to sort them.
	  */
		CKEDITOR.dom.rangeList = function (ranges) {
			if (ranges instanceof CKEDITOR.dom.rangeList) return ranges;
	
			if (!ranges) ranges = [];else if (ranges instanceof CKEDITOR.dom.range) ranges = [ranges];
	
			return CKEDITOR.tools.extend(ranges, mixins);
		};
	
		var mixins = {
			/**
	   * Creates an instance of the rangeList iterator, it should be used
	   * only when the ranges processing could be DOM intrusive, which
	   * means it may pollute and break other ranges in this list.
	   * Otherwise, it's enough to just iterate over this array in a for loop.
	   *
	   * @returns {CKEDITOR.dom.rangeListIterator}
	   */
			createIterator: function () {
				var rangeList = this,
				    bookmark = CKEDITOR.dom.walker.bookmark(),
				    bookmarks = [],
				    current;
	
				return {
					/**
	     * Retrieves the next range in the list.
	     *
	     * @member CKEDITOR.dom.rangeListIterator
	     * @param {Boolean} [mergeConsequent=false] Whether join two adjacent
	     * ranges into single, e.g. consequent table cells.
	     */
					getNextRange: function (mergeConsequent) {
						current = current === undefined ? 0 : current + 1;
	
						var range = rangeList[current];
	
						// Multiple ranges might be mangled by each other.
						if (range && rangeList.length > 1) {
							// Bookmarking all other ranges on the first iteration,
							// the range correctness after it doesn't matter since we'll
							// restore them before the next iteration.
							if (!current) {
								// Make sure bookmark correctness by reverse processing.
								for (var i = rangeList.length - 1; i >= 0; i--) bookmarks.unshift(rangeList[i].createBookmark(true));
							}
	
							if (mergeConsequent) {
								// Figure out how many ranges should be merged.
								var mergeCount = 0;
								while (rangeList[current + mergeCount + 1]) {
									var doc = range.document,
									    found = 0,
									    left = doc.getById(bookmarks[mergeCount].endNode),
									    right = doc.getById(bookmarks[mergeCount + 1].startNode),
									    next;
	
									// Check subsequent range.
									while (1) {
										next = left.getNextSourceNode(false);
										if (!right.equals(next)) {
											// This could be yet another bookmark or
											// walking across block boundaries.
											if (bookmark(next) || next.type == CKEDITOR.NODE_ELEMENT && next.isBlockBoundary()) {
												left = next;
												continue;
											}
										} else {
											found = 1;
										}
	
										break;
									}
	
									if (!found) break;
	
									mergeCount++;
								}
							}
	
							range.moveToBookmark(bookmarks.shift());
	
							// Merge ranges finally after moving to bookmarks.
							while (mergeCount--) {
								next = rangeList[++current];
								next.moveToBookmark(bookmarks.shift());
								range.setEnd(next.endContainer, next.endOffset);
							}
						}
	
						return range;
					}
				};
			},
	
			/**
	   * Create bookmarks for all ranges. See {@link CKEDITOR.dom.range#createBookmark}.
	   *
	   * @param {Boolean} [serializable=false] See {@link CKEDITOR.dom.range#createBookmark}.
	   * @returns {Array} Array of bookmarks.
	   */
			createBookmarks: function (serializable) {
				var retval = [],
				    bookmark;
				for (var i = 0; i < this.length; i++) {
					retval.push(bookmark = this[i].createBookmark(serializable, true));
	
					// Updating the container & offset values for ranges
					// that have been touched.
					for (var j = i + 1; j < this.length; j++) {
						this[j] = updateDirtyRange(bookmark, this[j]);
						this[j] = updateDirtyRange(bookmark, this[j], true);
					}
				}
				return retval;
			},
	
			/**
	   * Create "unobtrusive" bookmarks for all ranges. See {@link CKEDITOR.dom.range#createBookmark2}.
	   *
	   * @param {Boolean} [normalized=false] See {@link CKEDITOR.dom.range#createBookmark2}.
	   * @returns {Array} Array of bookmarks.
	   */
			createBookmarks2: function (normalized) {
				var bookmarks = [];
	
				for (var i = 0; i < this.length; i++) bookmarks.push(this[i].createBookmark2(normalized));
	
				return bookmarks;
			},
	
			/**
	   * Move each range in the list to the position specified by a list of bookmarks.
	   *
	   * @param {Array} bookmarks The list of bookmarks, each one matching a range in the list.
	   */
			moveToBookmarks: function (bookmarks) {
				for (var i = 0; i < this.length; i++) this[i].moveToBookmark(bookmarks[i]);
			}
		};
	
		// Update the specified range which has been mangled by previous insertion of
		// range bookmark nodes.(#3256)
		function updateDirtyRange(bookmark, dirtyRange, checkEnd) {
			var serializable = bookmark.serializable,
			    container = dirtyRange[checkEnd ? 'endContainer' : 'startContainer'],
			    offset = checkEnd ? 'endOffset' : 'startOffset';
	
			var bookmarkStart = serializable ? dirtyRange.document.getById(bookmark.startNode) : bookmark.startNode;
	
			var bookmarkEnd = serializable ? dirtyRange.document.getById(bookmark.endNode) : bookmark.endNode;
	
			if (container.equals(bookmarkStart.getPrevious())) {
				dirtyRange.startOffset = dirtyRange.startOffset - container.getLength() - bookmarkEnd.getPrevious().getLength();
				container = bookmarkEnd.getNext();
			} else if (container.equals(bookmarkEnd.getPrevious())) {
				dirtyRange.startOffset = dirtyRange.startOffset - container.getLength();
				container = bookmarkEnd.getNext();
			}
	
			container.equals(bookmarkStart.getParent()) && dirtyRange[offset]++;
			container.equals(bookmarkEnd.getParent()) && dirtyRange[offset]++;
	
			// Update and return this range.
			dirtyRange[checkEnd ? 'endContainer' : 'startContainer'] = container;
			return dirtyRange;
		}
	})();
	
	/**
	 * (Virtual Class) Do not call this constructor. This class is not really part
	 * of the API. It just describes the return type of {@link CKEDITOR.dom.rangeList#createIterator}.
	 *
	 * @class CKEDITOR.dom.rangeListIterator
	 */

/***/ },
/* 54 */
/*!**********************!*\
  !*** ./core/skin.js ***!
  \**********************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview Defines the {@link CKEDITOR.skin} class that is used to manage skin parts.
	 */
	
	(function () {
		var cssLoaded = {};
	
		function getName() {
			return CKEDITOR.skinName.split(',')[0];
		}
	
		function getConfigPath() {
			return CKEDITOR.getUrl(CKEDITOR.skinName.split(',')[1] || 'skins/' + getName() + '/');
		}
	
		/**
	  * Manages the loading of skin parts among all editor instances.
	  *
	  * @class
	  * @singleton
	  */
		CKEDITOR.skin = {
			/**
	   * Returns the root path to the skin directory.
	   *
	   * @method
	   * @todo
	   */
			path: getConfigPath,
	
			/**
	   * Loads a skin part into the page. Does nothing if the part has already been loaded.
	   *
	   * **Note:** The "editor" part is always auto loaded upon instance creation,
	   * thus this function is mainly used to **lazy load** other parts of the skin
	   * that do not have to be displayed until requested.
	   *
	   *		// Load the dialog part.
	   *		editor.skin.loadPart( 'dialog' );
	   *
	   * @param {String} part The name of the skin part CSS file that resides in the skin directory.
	   * @param {Function} fn The provided callback function which is invoked after the part is loaded.
	   */
			loadPart: function (part, fn) {
				if (CKEDITOR.skin.name != getName()) {
					CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(getConfigPath() + 'skin.js'), function () {
						loadCss(part, fn);
					});
				} else {
					loadCss(part, fn);
				}
			},
	
			/**
	   * Retrieves the real URL of a (CSS) skin part.
	   *
	   * @param {String} part
	   */
			getPath: function (part) {
				return CKEDITOR.getUrl(getCssPath(part));
			},
	
			/**
	   * The list of registered icons. To add new icons to this list, use {@link #addIcon}.
	   */
			icons: {},
	
			/**
	   * Registers an icon.
	   *
	   * @param {String} name The icon name.
	   * @param {String} path The path to the icon image file.
	   * @param {Number} [offset] The vertical offset position of the icon, if
	   * available inside a strip image.
	   * @param {String} [bgsize] The value of the CSS "background-size" property to
	   * use for this icon
	   */
			addIcon: function (name, path, offset, bgsize) {
				name = name.toLowerCase();
				if (!this.icons[name]) {
					this.icons[name] = {
						path: path,
						offset: offset || 0,
						bgsize: bgsize || '16px'
					};
				}
			},
	
			/**
	   * Gets the CSS background styles to be used to render a specific icon.
	   *
	   * @param {String} name The icon name, as registered with {@link #addIcon}.
	   * @param {Boolean} [rtl] Indicates that the RTL version of the icon is
	   * to be used, if available.
	   * @param {String} [overridePath] The path to the icon image file. It
	   * overrides the path defined by the named icon, if available, and is
	   * used if the named icon was not registered.
	   * @param {Number} [overrideOffset] The vertical offset position of the
	   * icon. It overrides the offset defined by the named icon, if
	   * available, and is used if the named icon was not registered.
	   * @param {String} [overrideBgsize] The value of the CSS "background-size" property
	   * to use for the icon. It overrides the value defined by the named icon,
	   * if available, and is used if the named icon was not registered.
	   */
			getIconStyle: function (name, rtl, overridePath, overrideOffset, overrideBgsize) {
				var icon, path, offset, bgsize;
	
				if (name) {
					name = name.toLowerCase();
					// If we're in RTL, try to get the RTL version of the icon.
					if (rtl) icon = this.icons[name + '-rtl'];
	
					// If not in LTR or no RTL version available, get the generic one.
					if (!icon) icon = this.icons[name];
				}
	
				path = overridePath || icon && icon.path || '';
				offset = overrideOffset || icon && icon.offset;
				bgsize = overrideBgsize || icon && icon.bgsize || '16px';
	
				// If we use apostrophes in background-image, we must escape apostrophes in path (just to be sure). (#13361)
				if (path) path = path.replace(/'/g, '\\\'');
	
				return path && 'background-image:url(\'' + CKEDITOR.getUrl(path) + '\');background-position:0 ' + offset + 'px;background-size:' + bgsize + ';';
			}
		};
	
		function getCssPath(part) {
			// Check for ua-specific version of skin part.
			var uas = CKEDITOR.skin['ua_' + part],
			    env = CKEDITOR.env;
			if (uas) {
	
				// Having versioned UA checked first.
				uas = uas.split(',').sort(function (a, b) {
					return a > b ? -1 : 1;
				});
	
				// Loop through all ua entries, checking is any of them match the current ua.
				for (var i = 0, ua; i < uas.length; i++) {
					ua = uas[i];
	
					if (env.ie) {
						if (ua.replace(/^ie/, '') == env.version || env.quirks && ua == 'iequirks') ua = 'ie';
					}
	
					if (env[ua]) {
						part += '_' + uas[i];
						break;
					}
				}
			}
			return CKEDITOR.getUrl(getConfigPath() + part + '.css');
		}
	
		function loadCss(part, callback) {
			// Avoid reload.
			if (!cssLoaded[part]) {
				CKEDITOR.document.appendStyleSheet(getCssPath(part));
				cssLoaded[part] = 1;
			}
	
			// CSS loading should not be blocking.
			callback && callback();
		}
	
		CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
			/** Gets the color of the editor user interface.
	   *
	   *		CKEDITOR.instances.editor1.getUiColor();
	   *
	   * @method
	   * @member CKEDITOR.editor
	   * @returns {String} uiColor The editor UI color or `undefined` if the UI color is not set.
	   */
			getUiColor: function () {
				return this.uiColor;
			},
	
			/** Sets the color of the editor user interface. This method accepts a color value in
	   * hexadecimal notation, with a `#` character (e.g. #ffffff).
	   *
	   * 		CKEDITOR.instances.editor1.setUiColor( '#ff00ff' );
	   *
	   * @method
	   * @member CKEDITOR.editor
	   * @param {String} color The desired editor UI color in hexadecimal notation.
	   */
			setUiColor: function (color) {
				var uiStyle = getStylesheet(CKEDITOR.document);
	
				return (this.setUiColor = function (color) {
					this.uiColor = color;
	
					var chameleon = CKEDITOR.skin.chameleon,
					    editorStyleContent = '',
					    panelStyleContent = '';
	
					if (typeof chameleon == 'function') {
						editorStyleContent = chameleon(this, 'editor');
						panelStyleContent = chameleon(this, 'panel');
					}
	
					var replace = [[uiColorRegexp, color]];
	
					// Update general style.
					updateStylesheets([uiStyle], editorStyleContent, replace);
	
					// Update panel styles.
					updateStylesheets(uiColorMenus, panelStyleContent, replace);
				}).call(this, color);
			}
		});
	
		var uiColorStylesheetId = 'cke_ui_color',
		    uiColorMenus = [],
		    uiColorRegexp = /\$color/g;
	
		function getStylesheet(document) {
			var node = document.getById(uiColorStylesheetId);
			if (!node) {
				node = document.getHead().append('style');
				node.setAttribute('id', uiColorStylesheetId);
				node.setAttribute('type', 'text/css');
			}
			return node;
		}
	
		function updateStylesheets(styleNodes, styleContent, replace) {
			var r, i, content;
	
			// We have to split CSS declarations for webkit.
			if (CKEDITOR.env.webkit) {
				styleContent = styleContent.split('}').slice(0, -1);
				for (i = 0; i < styleContent.length; i++) styleContent[i] = styleContent[i].split('{');
			}
	
			for (var id = 0; id < styleNodes.length; id++) {
				if (CKEDITOR.env.webkit) {
					for (i = 0; i < styleContent.length; i++) {
						content = styleContent[i][1];
						for (r = 0; r < replace.length; r++) content = content.replace(replace[r][0], replace[r][1]);
	
						styleNodes[id].$.sheet.addRule(styleContent[i][0], content);
					}
				} else {
					content = styleContent;
					for (r = 0; r < replace.length; r++) content = content.replace(replace[r][0], replace[r][1]);
	
					if (CKEDITOR.env.ie && CKEDITOR.env.version < 11) styleNodes[id].$.styleSheet.cssText += content;else styleNodes[id].$.innerHTML += content;
				}
			}
		}
	
		CKEDITOR.on('instanceLoaded', function (evt) {
			// The chameleon feature is not for IE quirks.
			if (CKEDITOR.env.ie && CKEDITOR.env.quirks) return;
	
			var editor = evt.editor,
			    showCallback = function (event) {
				var panel = event.data[0] || event.data;
				var iframe = panel.element.getElementsByTag('iframe').getItem(0).getFrameDocument();
	
				// Add stylesheet if missing.
				if (!iframe.getById('cke_ui_color')) {
					var node = getStylesheet(iframe);
					uiColorMenus.push(node);
	
					var color = editor.getUiColor();
					// Set uiColor for new panel.
					if (color) updateStylesheets([node], CKEDITOR.skin.chameleon(editor, 'panel'), [[uiColorRegexp, color]]);
				}
			};
	
			editor.on('panelShow', showCallback);
			editor.on('menuShow', showCallback);
	
			// Apply UI color if specified in config.
			if (editor.config.uiColor) editor.setUiColor(editor.config.uiColor);
		});
	})();
	
	/**
	 * The list of file names matching the browser user agent string from
	 * {@link CKEDITOR.env}. This is used to load the skin part file in addition
	 * to the "main" skin file for a particular browser.
	 *
	 * **Note:** For each of the defined skin parts the corresponding
	 * CSS file with the same name as the user agent must exist inside
	 * the skin directory.
	 *
	 * @property ua
	 * @todo type?
	 */
	
	/**
	 * The name of the skin that is currently used.
	 *
	 * @property {String} name
	 * @todo
	 */
	
	/**
	 * The editor skin name. Note that it is not possible to have editors with
	 * different skin settings in the same page. In such case just one of the
	 * skins will be used for all editors.
	 *
	 * This is a shortcut to {@link CKEDITOR#skinName}.
	 *
	 * It is possible to install skins outside the default `skin` folder in the
	 * editor installation. In that case, the absolute URL path to that folder
	 * should be provided, separated by a comma (`'skin_name,skin_path'`).
	 *
	 *		config.skin = 'moono';
	 *
	 *		config.skin = 'myskin,/customstuff/myskin/';
	 *
	 * @cfg {String} skin
	 * @member CKEDITOR.config
	 */
	
	/**
	 * A function that supports the chameleon (skin color switch) feature, providing
	 * the skin color style updates to be applied in runtime.
	 *
	 * **Note:** The embedded `$color` variable is to be substituted with a specific UI color.
	 *
	 * @method chameleon
	 * @param {String} editor The editor instance that the color changes apply to.
	 * @param {String} part The name of the skin part where the color changes take place.
	 */

/***/ },
/* 55 */
/*!****************************!*\
  !*** ./core/_bootstrap.js ***!
  \****************************/
/***/ function(module, exports) {

	/**
	 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */
	
	/**
	 * @fileOverview API initialization code.
	 */
	
	(function () {
		// Disable HC detection in WebKit. (#5429)
		if (CKEDITOR.env.webkit) CKEDITOR.env.hc = false;else {
			// Check whether high contrast is active by creating a colored border.
			var hcDetect = CKEDITOR.dom.element.createFromHtml('<div style="width:0;height:0;position:absolute;left:-10000px;' + 'border:1px solid;border-color:red blue"></div>', CKEDITOR.document);
	
			hcDetect.appendTo(CKEDITOR.document.getHead());
	
			// Update CKEDITOR.env.
			// Catch exception needed sometimes for FF. (#4230)
			try {
				var top = hcDetect.getComputedStyle('border-top-color'),
				    right = hcDetect.getComputedStyle('border-right-color');
	
				// We need to check if getComputedStyle returned any value, because on FF
				// it returnes empty string if CKEditor is loaded in hidden iframe. (#11121)
				CKEDITOR.env.hc = !!(top && top == right);
			} catch (e) {
				CKEDITOR.env.hc = false;
			}
	
			hcDetect.remove();
		}
	
		if (CKEDITOR.env.hc) CKEDITOR.env.cssClass += ' cke_hc';
	
		// Initially hide UI spaces when relevant skins are loading, later restored by skin css.
		CKEDITOR.document.appendStyleText('.cke{visibility:hidden;}');
	
		// Mark the editor as fully loaded.
		CKEDITOR.status = 'loaded';
		CKEDITOR.fireOnce('loaded');
	
		// Process all instances created by the "basic" implementation.
		var pending = CKEDITOR._.pending;
		if (pending) {
			delete CKEDITOR._.pending;
	
			for (var i = 0; i < pending.length; i++) {
				CKEDITOR.editor.prototype.constructor.apply(pending[i][0], pending[i][1]);
				CKEDITOR.add(pending[i][0]);
			}
		}
	})();
	
	/**
	 * Indicates that CKEditor is running on a High Contrast environment.
	 *
	 *		if ( CKEDITOR.env.hc )
	 *			alert( 'You\'re running on High Contrast mode. The editor interface will get adapted to provide you a better experience.' );
	 *
	 * @property {Boolean} hc
	 * @member CKEDITOR.env
	 */
	
	/**
	 * Fired when a CKEDITOR core object is fully loaded and ready for interaction.
	 *
	 * @event loaded
	 * @member CKEDITOR
	 */

/***/ }
/******/ ]);
//# sourceMappingURL=init.js.map