/*
 * File: app/view/MyContainer.js
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

Ext.define('GridApp.view.MyContainer', {
    extend: 'Ext.container.Container',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.grid.View',
        'Ext.grid.feature.RowBody',
        'Ext.selection.CellModel',
        'Ext.form.Panel'
    ],

    height: 472,
    width: 657,

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    height: 451,
                    width: 499,
                    title: 'My Grid Panel',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'string',
                            text: 'String'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'number',
                            text: 'Number'
                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'date',
                            text: 'Date'
                        },
                        {
                            xtype: 'booleancolumn',
                            dataIndex: 'bool',
                            text: 'Boolean'
                        },
                        {
                            xtype: 'gridcolumn',
                            text: 'MyColumn1'
                        }
                    ],
                    features: [
                        {
                            ftype: 'rowbody'
                        }
                    ],
                    selModel: Ext.create('Ext.selection.CellModel', {

                    })
                },
                {
                    xtype: 'form',
                    flex: 1,
                    layout: 'absolute',
                    bodyPadding: 10,
                    title: 'My Form'
                }
            ]
        });

        me.callParent(arguments);
    }

});