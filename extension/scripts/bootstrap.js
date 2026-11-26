"use strict";

console.info("[YouTube Focus] Content script initialized.");

if (isHomepage(window.location.pathname)) {
    const toggle = createFeedToggle(false, setFeedVisibility);

    observeFeedToggle(toggle, (mounted) => {
        setFeedVisibility(!mounted || toggle.control.checked);
        console.info("[YouTube Focus] Toggle mounted:", mounted);
    });
}