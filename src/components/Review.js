import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const products = [
  {
    name: 'Item 1',
    desc: "Bleach: Can't Fear Your Own World, Vol. 1",
    price: '$65.00',
    img: "https://i.ebayimg.com/images/g/iWkAAOSwDqliVh64/s-l500.jpg",
  },
  {
    name: 'Item 2',
    desc: "Bleach: Can't Fear Your Own World, Vol. 2",
    price: '$20.32',
    img: "https://images-na.ssl-images-amazon.com/images/I/516fv1Ss4VL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    name: 'Item 3',
    desc: "Bleach: Can't Fear Your Own World, Vol. 3",
    price: '$15.49',
    img: "https://images-na.ssl-images-amazon.com/images/I/51aPRvNLPRL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    name: 'Item 4',
    desc: "Bleach 20th Anniversary Edition, Vol. 1",
    price: '$9.99',
    img: "https://images-na.ssl-images-amazon.com/images/I/51QAMyFriSL._SX331_BO1,204,203,200_.jpg"
  },
  { name: 'Shipping', desc: '', price: 'Free'},
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Box
        component="img"
        sx={{
          height: 50,
          width: 50,
          mb: 1,
          mr: 2,
        }}
        alt="Img"
        src={product.img}
      />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $110.80
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}