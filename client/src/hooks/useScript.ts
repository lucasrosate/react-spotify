import { useState, useEffect } from 'react';

/**
 * Hook that allows to load external scripts inside Virtual DOM.
 * Credits to: [Use Hooks](https://usehooks.com/).
 * 
 * @param src string
 * @returns 
 */


const useScript = (src: string) => {
    // Keep track of script status ("idle", "loading", "ready", "error")
    const [status, setStatus] = useState<string>(src ? "loading" : "idle");
    useEffect(
        () => {
            // Allow falsy src value if waiting on other data needed for
            // constructing the script URL passed to this hook.
            if (!src) {
                setStatus("idle");
                return;
            }
            // Fetch existing script element by src
            // It may have been added by another intance of this hook
            let script: HTMLScriptElement = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;
            if (!script) {
                // Create script
                script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.setAttribute("data-status", "loading");
                // Add script to document body
                document.body.appendChild(script);
                // Store status in attribute on script
                // This can be read by other instances of this hook
                const setAttributeFromEvent = (event: Event) => {
                    script.setAttribute(
                        "data-status",
                        event.type === "load" ? "ready" : "error"
                    );
                };
                script.addEventListener("load", setAttributeFromEvent);
                script.addEventListener("error", setAttributeFromEvent);
            } else {
                // Grab existing script status from attribute and set to state.
                setStatus(String(script.getAttribute("data-status")));
            }
            // Script event handler to update status in state
            // Note: Even if the script already exists we still need to add
            // event handlers to update the state for *this* hook instance.
            const setStateFromEvent = (event: Event) => {
                setStatus(event.type === "load" ? "ready" : "error");
            };
            // Add event listeners
            script.addEventListener("load", setStateFromEvent);
            script.addEventListener("error", setStateFromEvent);
            // Remove event listeners on cleanup
            return () => {
                if (script) {
                    script.removeEventListener("load", setStateFromEvent);
                    script.removeEventListener("error", setStateFromEvent);
                }
            };
        },
        [src] // Only re-run effect if script src changes
    );

    return status;
}
export default useScript;