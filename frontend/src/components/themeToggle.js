import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px',
        fontSize: 12,
        fontWeight: 500,
        borderRadius: 999,
        border: '1px solid var(--border)',

        /* 👇 INVERSE BACKGROUND */
        background: isDark ? '#e5e7eb' : '#020617',
        color: isDark ? '#020617' : '#e5e7eb',

        cursor: 'pointer',
        transition: 'all 0.15s ease',
        boxShadow: isDark
          ? '0 1px 4px rgba(0,0,0,0.15)'
          : '0 1px 6px rgba(0,0,0,0.6)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.9';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.95)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <span style={{ fontSize: 14 }}>
        {isDark ? '☀️' : '🌙'}
      </span>
      <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
};
