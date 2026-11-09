import { useEffect, useState } from 'react';
import { ArrowUpButton, ArrowUpContainer } from './ArrowUp.styled';
import { ArrowUpIcon } from './ArrowUpIcon';

const ArrowUp = ({ label }: { label: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoverEnabled, setIsHoverEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ArrowUpContainer>
      <ArrowUpButton
        onClick={() => {
          setIsHoverEnabled(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onMouseLeave={() => setIsHoverEnabled(true)}
        isVisible={isVisible}
        $hoverEnabled={isHoverEnabled}
        tabIndex={isVisible ? 0 : -1}
        aria-label={label}
      >
        <ArrowUpIcon />
      </ArrowUpButton>
    </ArrowUpContainer>
  );
};

export default ArrowUp;
