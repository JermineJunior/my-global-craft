import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FaMoon className="text-lg" />
      ) : (
        <FaSun className="text-lg" />
      )}
    </Button>
  );
};
