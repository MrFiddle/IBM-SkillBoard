Rails.application.config.session_store :cookie_store, key: '_ibmSession', expire_after: 1.hour, domain: :all, tld_length: 2
