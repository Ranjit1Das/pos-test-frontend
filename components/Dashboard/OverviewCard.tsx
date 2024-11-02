// // components/Dashboard/OverviewCard.tsx
// 'use client';
// import React from 'react';
// import { Card, CardContent, Typography, Grid } from '@mui/material';

// const OverviewCard = ({ title, value }) => {
//   return (
//     <Card sx={{ minWidth: 200, margin: 2 }}>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {value}
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           {title}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default OverviewCard;

'use client';
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// Define an interface for the props
interface OverviewCardProps {
  title: string; // Type for title prop
  value: string | number; // Type for value prop (can be string or number)
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value }) => {
  return (
    <Card sx={{ minWidth: 200, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {value}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
