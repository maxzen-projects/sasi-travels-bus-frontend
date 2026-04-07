import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A component that manages focus for screen readers on route changes.
 * It finds the main heading (h1) of the new page and focuses it.
 */
function RouteFocusManager() {
  const location = useLocation();

  useEffect(() => {
    // Set a timeout to ensure the new page content is rendered before focusing.
    const timer = setTimeout(() => {
      const mainHeading = document.querySelector('main h1');
      if (mainHeading) {
        mainHeading.setAttribute('tabindex', '-1');
        mainHeading.focus();
      }
    }, 100); // A small delay might be needed for components to render.

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null; // This component does not render anything.
}

export default RouteFocusManager;