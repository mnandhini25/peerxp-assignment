import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  CardHeader
} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MoneyIcon from '@material-ui/icons/Money';
import { red } from '@material-ui/core/colors';

const CardComponent = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >

{props.data?.header ? (<CardHeader
      subheader={props.data.header.title}
    ></CardHeader>) : ""}
    {
      props.data?.body ?  (<CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            {props.data.body.content}
          </Typography>
          {!props.data.body.isIconDisabled ? 
          (<Typography
            color="textPrimary"
            variant="h3"
          >
          <ArrowUpwardIcon sx={{ color: red[900] }} />
           {props.data.body.value}
          </Typography>):""
          }
        </Grid>
       {!props.data.body.isIconDisabled ? (<Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>):"" }
      </Grid>
      {/* <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowUpwardIcon sx={{ color: red[900] }} />
        <Typography
          sx={{
            color: red[900],
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box> */}
    </CardContent>) : ""
    }
    
  </Card>
);

export default CardComponent;
