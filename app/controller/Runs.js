/*
 * File: app/controller/Runs.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GridApp.controller.Runs', {
    extend: 'Ext.app.Controller',

    models: [
        'Runs'
    ],
    stores: [
        'Runs'
    ],
    views: [
        'MyContainer'
    ],

    refs: [
        {
            ref: 'runsGrid',
            selector: '#runsGrid'
        },
        {
            ref: 'defForm',
            selector: '#defForm'
        }
    ],

    onSaveClick: function(button, e, eOpts) {

    },

    onResetClick: function(button, e, eOpts) {

    },

    onDeselectClick: function(button, e, eOpts) {

    },

    init: function(application) {
        this.control({
            "#save": {
                click: this.onSaveClick
            },
            "#reset": {
                click: this.onResetClick
            },
            "#deselect": {
                click: this.onDeselectClick
            }
        });
    }

});
