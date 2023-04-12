import React, {useEffect} from 'react';
import {Stack} from "@mui/material";
import Ticket from "./Ticket";


function Tickets(props) {
  const tickets = props.tickets;
  const filterHandler = (item) => {
    // const f = props.filter;
    // if(f.origin && (f.origin != item.info.origin))
    //   return false;
    // if(f.dest && (f.dest != item.info.destination))
    //   return false;
    return true
  }
  return (
    <Stack spacing={2}>
      {tickets.filter(filterHandler).map(i => <Ticket key={i.id} data={i} />)}
    </Stack>
  );
}

const a = [1,2,3,4,5,6];
const b = [1,2,3,];
export default Tickets;