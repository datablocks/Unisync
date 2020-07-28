# Unisync
Unified ID Cookieless Sync

# USAGE:

- Include the client api adapter from unisync-adapter.js into your code or framework
- Define your partner ID as provided by your account manager
- Receive and process the sync names and ID's from your defined handler function (receiveSync)
- Syncs will be in the form of an object containing the syncer name and the user ID for that syncer

For example:
{"adnxs": "12345", "unisync": "67890"}

The syncer "unisync" will always be present and is the permenant ID linking the rest

On first load - the client adapter will send up all currently known syncs to the handler function.  It will re-fire for every additional sync found that were missing from the inital load or were expired.

Syncs will only be requested for sync ID's that are either missing or expired

For more information contact support@datablocks.net

