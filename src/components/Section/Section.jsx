import { Box } from 'components/Box/Box';

export const Section = ({ onClick, title, children }) => {
  return (
    <Box as="section">
      {title && <h2>{title}</h2>}
      {children}
    </Box>
  );
};
