import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Highlight, Keywords} from 'react-marker'
import Highlighter from "react-highlight-words";

const useStyles = makeStyles({
  root: {
    width: '60%',
    overflowX: 'auto',
    borderBottom:'none'
  },
  table: {
    minWidth: 300,
    borderBottom: 0,
    shadowColor: 'transparent'

  }
  

});

function createData(level, grammar, detail, rule, example) {
  return { level, grammar, detail, rule, example };
}

const rows = [
  createData(
    'C2',
    'extremely',
    'Keri is extremely stingly',
    'Can use phrases (to a fault) to replace extremely',
    'Keri is stingly to a fault'
  ),
  createData(
    'C1',
    'Surprisingly',
    "Surprisingly, she won the jackpot",
    'Can post-modify adverbs with (enough) to intensify',
    "Surprisingly enough, she won the jackpot"
  ),
  createData(
    'B2',
    'should',
    'she should donate money to the charity',
    "Can use (be supposed to) refer to past or future arrangements",
    "she was supposed to donate money to the charity"
  )
];

const ExpandableTableRow = ({ children, expandComponent, expandComponent2, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell style={{borderBottom:"none"}} padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow style={{borderBottom:"none"}}>
          <TableCell style={{borderBottom:"none"}} padding="checkbox"/>
          <ul className='com2'>
          <li className='comli'>{expandComponent}</li>
          <li className='comli'>{expandComponent2}</li>
          </ul>
          
        </TableRow>
      )}
    </>
  );
};

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{backgroundColor:"#8B0000", color:"white", fontSize:"18px", fontWeight:"600"}} padding="checkbox" />
            <TableCell style={{backgroundColor:"#8B0000", color:"white", fontSize:"18px", fontWeight:"600"}} align="center">Recommendation</TableCell>
            <TableCell style={{backgroundColor:"#8B0000", color:"white", fontSize:"18px", fontWeight:"600"}} align="center">Level</TableCell>
            <TableCell style={{backgroundColor:"#8B0000", color:"white", fontSize:"18px", fontWeight:"600"}} align="center">Grammar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <ExpandableTableRow
            key={row.rule}
            expandComponent={
            <TableCell style={{borderBottom:"none"}} colSpan="12">{
              <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={["to a fault", "extremely", "should", "was supposed to", "Surprisingly", "Surprisingly enough"]}
              autoEscape={true}
              textToHighlight={row.detail}
            />}</TableCell>
          }
          expandComponent2={
            <TableCell style={{borderBottom:"none"}} colSpan='12'>{
              <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={["to a fault", "extremely", "should", "was supposed to", "Surprisingly", "Surprisingly enough"]}
              autoEscape={true}
              textToHighlight={row.example}
            />}</TableCell>
          }
          >
            <TableCell style={{borderBottom:"none"}} align="left" compoenet='th' scope="row">{row.rule}</TableCell>
              <TableCell style={{borderBottom:"none",fontSize:"12px", fontWeight:"600"}} align="center" compoenet='th' scope="row">
            {(row.level=='A1') && <Keywords text={row.level} color="mistyrose"/>
            || (row.level=='A2') && <Keywords text={row.level} color="#FFFFE0"/>
            || (row.level=='B1') && <Keywords text={row.level} color="red"/>
            || (row.level=='B2') && <Keywords text={row.level} color="#F5F5DC"/>
            || (row.level=='C1') && <Keywords text={row.level} color="#FFF0F5"/>
            || (row.level=='C2') && <Keywords text={row.level} color="#E0FFFF"/>}
              </TableCell>
              <TableCell style={{borderBottom:"none", fontSize:"15px", fontWeight:"600"}} align="center">{row.grammar}</TableCell>
            </ExpandableTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}