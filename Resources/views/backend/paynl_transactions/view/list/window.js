Ext.define('Shopware.apps.PaynlTransactions.view.list.Window', {
    extend: 'Shopware.window.Listing',
    alias: 'widget.transaction-list-window',
    height: 450,
    title : '{s name=window_title}PAY. Transactions{/s}',

    configure: function() {
        return {
            listingGrid: 'Shopware.apps.PaynlTransactions.view.list.Transaction',
            listingStore: 'Shopware.apps.PaynlTransactions.store.Transaction'
        };
    }
});