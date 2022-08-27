import { OptionsButton } from './FeedbackOptions.styled';
// import { Box } from '../Box/Box';

export const FeedbackOptions = props => {
  return props.options.map(option => {
    return (
      //   <Box mt={20} as="div" key={option}>
      <OptionsButton
        type="button"
        key={option}
        name={option}
        onClick={props.onLeaveFeedback}
      >
        {option}
      </OptionsButton>
      //   </Box>
    );
  });
  // (
  //     <Box mt={20} as="div">
  //         <OptionsButton type="button">

  //       </OptionsButton>
  //     </Box>
  //   );
};
