import { useEffect, useState } from 'react';
import { ArrowUpButton, ArrowUpContainer } from './ArrowUp.styled';
import { ArrowUpIcon } from './ArrowUpIcon';

const ArrowUp = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        isVisible={isVisible}
      >
        <ArrowUpIcon />
      </ArrowUpButton>
    </ArrowUpContainer>
  );
};

export default ArrowUp;
