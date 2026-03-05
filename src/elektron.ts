import './elektron.css';

/**
 * Sidebar initialization options
 */
export interface SidebarOptions {
  sidebarId?: string;
  toggleId?: string;
  backdropId?: string;
}

/**
 * Initializes the Elektron sidebar toggle logic.
 * @param options - Configuration for element IDs
 */
export function initSidebar(options: SidebarOptions = {}) {
  const {
    sidebarId = 'sidebar',
    toggleId = 'sidebar-toggle',
    backdropId = 'sidebar-backdrop'
  } = options;

  const sidebar = document.getElementById(sidebarId);
  const backdrop = document.getElementById(backdropId);
  const toggleBtn = document.getElementById(toggleId);

  if (!sidebar || !toggleBtn) {
    console.warn(`Elektron: Sidebar or Toggle button not found (${sidebarId}, ${toggleId})`);
    return;
  }

  function toggle() {
    const isOpen = sidebar?.getAttribute('data-state') === 'open';
    if (isOpen) {
      sidebar?.removeAttribute('data-state');
      backdrop?.removeAttribute('data-state');
      document.body.style.overflow = '';
    } else {
      sidebar?.setAttribute('data-state', 'open');
      backdrop?.setAttribute('data-state', 'open');
      document.body.style.overflow = 'hidden';
    }
  }

  // Event Listeners
  toggleBtn.addEventListener('click', toggle);
  backdrop?.addEventListener('click', toggle);

  // Close sidebar on escape key
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && sidebar.getAttribute('data-state') === 'open') {
      toggle();
    }
  };

  document.addEventListener('keydown', handleKeydown);

  // Return a cleanup function
  return () => {
    toggleBtn.removeEventListener('click', toggle);
    backdrop?.removeEventListener('click', toggle);
    document.removeEventListener('keydown', handleKeydown);
  };
}
