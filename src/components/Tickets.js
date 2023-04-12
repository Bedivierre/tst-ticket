import React, {useEffect} from 'react';
import {Stack} from "@mui/material";
import Ticket from "./Ticket";

const mockTickets = [
  {
    id:1,  price:22222, companyId:"qwerty-s7",
    info:{
      stops:["HKG"],origin:"PTB",dateEnd:1659324614277,dateStart:1659313094277,duration:11520000,destination:"JNB"
    }
  },
  {
    id:2,  price:33333, companyId:"qwerty-XiamenAir",
    info:{
      stops:[],origin:"PTB",dateEnd:1659324814277,dateStart:1659318094277,duration:11520000,destination:"JNB"
    }
  },
  {
    id:3,  price:44444, companyId:"qwerty-XiamenAir",
    info:{
      stops:["MSK","NSB"],origin:"SPB",dateEnd:1659324614277,dateStart:1659313094277,duration:11520000,destination:"ICT"
    }
  },
]

function Tickets(props) {
  const tickets = props.tickets ?? mockTickets;
  const filterHandler = (item) => {

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