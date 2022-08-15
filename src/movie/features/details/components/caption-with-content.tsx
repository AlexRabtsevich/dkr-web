import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

import { Span } from '@dkr-web/ui-kit';

interface IProps {
  caption: ReactNode;
  content: ReactNode;
}

export const CaptionWithContent: FC<IProps> = ({ caption, content }) => {
  return (
    <Box display='flex' alignItems='centers' gap='0 0.5rem'>
      <Span fontWeight='bold'>{caption}: </Span>
      <Span>{content}</Span>
    </Box>
  );
};
