"use strict";

function createFeedToggle(feedEnabled, onChange) {
    const label = document.createElement("label");
    const input = document.createElement("input");

    label.id = "youtube-focus-feed-toggle";
    input.type = "checkbox";
    input.checked = feedEnabled;
    input.setAttribute("role", "switch");
    input.addEventListener("change", () => onChange(input.checked));

    label.append("Home feed", input);
    return label;
}