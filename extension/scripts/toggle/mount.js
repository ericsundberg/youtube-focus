"use strict";

function mountFeedToggle(toggle) {
    const feed = document.querySelector(
        'ytd-two-column-browse-results-renderer[page-subtype="home"]'
    );

    if (!feed || !document.body) {
        return false;
    }

    if (toggle.parentElement !== document.body) {
        document.body.append(toggle);
    }

    return true;
}