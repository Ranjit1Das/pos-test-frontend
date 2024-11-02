// 'use client';

// import { useRouter } from 'next/navigation';
// import axios from 'axios';
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Container,
//   Paper,
// } from '@mui/material';

// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// // Define validation schema with Yup
// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// });

// const Login = () => {
//   const router = useRouter();

//   const handleSubmit = async (values: { email: string; password: string }) => {
//     try {
//       const result = await axios.post(
//         'http://localhost:10001/api/auth/login',
//         values
//       );

//       if (result.data && result.data.token) {
//         //set sucessfull login context.

//         // Navigate to admin dashboard
//         router.push('/admindash');
//       } else {
//         alert('Login failed: Invalid response');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Login failed');
//     }
//   };

//   return (
//     <Container
//       component="main"
//       maxWidth="xs"
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
//         <Typography component="h1" variant="h4" align="center" sx={{ mb: 2 }}>
//           Welcome Back!
//         </Typography>
//         <Typography
//           component="p"
//           align="center"
//           sx={{ mb: 3, color: 'text.secondary' }}
//         >
//           Please log in to access your dashboard
//         </Typography>

//         <Formik
//           initialValues={{ email: '', password: '' }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ errors, touched, handleChange }) => (
//             <Form>
//               <Box mb={2}>
//                 <Field
//                   as={TextField}
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   autoFocus
//                   onChange={handleChange}
//                   error={touched.email && Boolean(errors.email)}
//                   helperText={touched.email && errors.email}
//                 />
//               </Box>

//               <Box mb={2}>
//                 <Field
//                   as={TextField}
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                   onChange={handleChange}
//                   error={touched.password && Boolean(errors.password)}
//                   helperText={touched.password && errors.password}
//                 />
//               </Box>

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Log In
//               </Button>
//             </Form>
//           )}
//         </Formik>
//       </Paper>
//     </Container>
//   );
// };

// export default Login;

// app/login/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '../../lib/context/AuthContext';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Box,
  Button,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const response = await axios.post(
        'http://localhost:10001/api/auth/login',
        values
      );
      if (response.data.token) {
        login(response.data.token);
        router.push('/admindash');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during login');
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome Back!
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange }) => (
            <Form>
              <Box mb={2}>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  fullWidth
                  variant="outlined"
                  onChange={handleChange}
                  error={Boolean(errors.email && touched.email)}
                  helperText={errors.email}
                />
              </Box>
              <Box mb={2}>
                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  onChange={handleChange}
                  error={Boolean(errors.password && touched.password)}
                  helperText={errors.password}
                />
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Log In
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Login;
