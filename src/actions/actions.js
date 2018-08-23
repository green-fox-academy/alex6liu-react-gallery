export const left = () => ({
  type: 'LEFT',
});

export const right = () => ({
  type: 'RIGHT',
});

export const select = index => ({
  type: 'SELECT',
  index,
});
