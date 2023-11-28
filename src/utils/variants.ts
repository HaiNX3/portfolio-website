export const fadeIn = (direction: 'up' | 'down') => ({
  hidden: {
    opacity: 0,
    y: direction === 'down' ? -85 : 85,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
});

export const reveal = () => ({
  hidden: {
    left: 0,
  },
  visible: {
    left: '100%',
  },
});

export const scale = () => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
});
