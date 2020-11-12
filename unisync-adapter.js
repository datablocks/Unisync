function UnisyncAdapter(partnerId, syncReceivedHandler) {
    var self = this;
    this.syncReceivedHandler = syncReceivedHandler;
    this.partnerId = partnerId;
    window.addEventListener('message', function (event) {
        if (event.data.sentinel && event.data.sentinel === 'dblks_syncData') {
            self.onSyncReceived(event.data.data);
        }
    })
}

UnisyncAdapter.prototype.onSyncReceived = function(syncData) {
    if (syncData.id && syncData.uid) {
        this.syncReceivedHandler(syncData.id, syncData.uid);
    }
}

/**
 * Create the iframe and place it on the page.
 */
UnisyncAdapter.prototype.createIframe = function() {
    var iframe = document.createElement('iframe');
    iframe.src = `https://s.0cf.io/?pid=${this.partnerId}`;
    iframe.id = 'unisync-iframe';
    iframe.style= 'display: none;';

    var body = document.getElementsByTagName('body');
    body[0].appendChild(iframe);
}

// usage:
function receiveSync(id, uid) {
    console.log('UNISYNC: buyer name: ' + id) // buyer name
    console.log('UNISYNC: buyer id: ' + uid) // unique id
}

var unisyncParnerId = 'YOUR PARTNER ID FROM DATABLOCKS';
var unisyncAdapter = new UnisyncAdapter(unisyncParnerId, receiveSync);
unisyncAdapter.createIframe();
