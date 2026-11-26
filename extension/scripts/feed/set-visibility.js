"use strict";

function setFeedVisibility(feedEnabled) {
    document.documentElement.toggleAttribute(
        "data-youtube-focus-feed-hidden",
        !feedEnabled
    );
}