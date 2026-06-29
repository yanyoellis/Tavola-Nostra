import React from 'react';

export function DishHotspot({ label, className, onClick, detail }) {
  return <button className={`hotspot ${className}`} onClick={onClick} aria-label={`Open ${label}`}>
    <span className="hotspot__pulse"/>
    <span className="hotspot__label"><small>{detail}</small>{label}<b>↗</b></span>
  </button>;
}
