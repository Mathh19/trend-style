'use client';

import { Badge, BadgeProps, styled } from '@mui/material';

export const CustomBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#ef4444',
    color: '#ffffff',
    border: `2px solid ${theme.palette.background.paper}`
  }
}));
