import { useState, useEffect } from 'react';

export const useTypewriter = (
  texts: string[],
  options: { 
    typingSpeed?: number;
    deletingSpeed?: number;
    delayAfterType?: number;
    delayAfterDelete?: number;
  } = {}
) => {
  const {
    typingSpeed = 100,
    deletingSpeed = 50,
    delayAfterType = 2000,
    delayAfterDelete = 500,
  } = options;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentText.length < texts[currentTextIndex].length) {
        // Still typing
        timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayAfterType);
      }
    } else {
      if (currentText.length > 0) {
        // Deleting
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next text
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, delayAfterDelete);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    isTyping,
    texts,
    typingSpeed,
    deletingSpeed,
    delayAfterType,
    delayAfterDelete,
  ]);

  return currentText;
};