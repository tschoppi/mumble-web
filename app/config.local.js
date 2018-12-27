// You can overwrite the default configuration values set in [config.js] here.
// There should never be any required changes to this file and you can always
// simply copy it over when updating to a new version.

let config = window.mumbleWebConfig // eslint-disable-line no-unused-vars

// Disable all fields in the 'Connect to Server' dialog
config.connectDialog = {
  'address': false,
  'port': false,
  'token': false,
  'username': false,
  'password': false
}

config.settings.showAvatars = 'never'

// Set voiceMode to something illegal (not sure if this is needed)
config.settings.voiceMode = 'none'
