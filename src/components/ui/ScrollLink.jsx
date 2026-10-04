import { scrollToSection } from "../../lib/smoothScroll";

/**
 * In-page anchor that glides with Lenis instead of navigating away.
 * Keeps a real `href="#id"` so middle-click / open-in-new-tab still work.
 *
 * @param {string} to  section id (without the "#")
 */
const ScrollLink = ({ to, children, onClick, ...rest }) => (
  <a
    href={`#${to}`}
    onClick={(event) => {
      onClick?.(event);
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      event.preventDefault();
      scrollToSection(to);
    }}
    {...rest}
  >
    {children}
  </a>
);

export default ScrollLink;
