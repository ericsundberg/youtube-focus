"use strict";

function createMountReconciler(toggle, onMountChange) {
    let previous = null;

    return () => {
        const mounted = isHomepage(window.location.pathname)
            && mountFeedToggle(toggle);
        if (!mounted) {
            toggle.remove();
        }
        if (mounted !== previous) {
            previous = mounted;
            onMountChange(mounted);
        }
    };
}

function observeFeedToggle(toggle, onMountChange) {
    const reconcile = createMountReconciler(toggle, onMountChange);
    const observer = new MutationObserver(reconcile);
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["page-subtype"]
    });
    reconcile();
}