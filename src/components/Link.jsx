import React from 'react';

export function Link({ to, className = '', children, onClick, ariaLabel }) {
  return <a href={to} className={className} aria-label={ariaLabel} onClick={(event) => {
    if (!event.metaKey && !event.ctrlKey && !event.shiftKey && event.button === 0) {
      event.preventDefault();
      window.history.pushState({}, '', to);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onClick?.();
    }
  }}>{children}</a>;
}
