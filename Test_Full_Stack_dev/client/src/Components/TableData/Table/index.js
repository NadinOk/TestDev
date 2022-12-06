import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Styles from './styles.module.scss'
import {dataTransactionSlice} from "../../../redusers/dataTransactionsSlice";
import {useSelector} from "react-redux";
import {Pagination, Stack} from "@mui/material";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(numberBlock,TransactionID, SenderAddress, RecipientsAddress, BlockConfirmations, data, valu, gas ) {
    return {numberBlock,  TransactionID, SenderAddress, RecipientsAddress, BlockConfirmations, data, valu, gas  };
}

const rows = [
    createData('12057206', '0x0f9aa15ef3...', '0x8A2C601f253...', '0x12D819E30db2E...', 50, 'Mar-17-2021', '0.011354999999999923', '0.007643586'),
    createData('12057206', '0x0f9aa15ef3...', '0x8A2C601f253...', '0x12D819E30db2E...', 50, 'Mar-17-2021', '0.011354999999999923', '0.007643586'),
    createData('12057206', '0x0f9aa15ef3...', '0x8A2C601f253...', '0x12D819E30db2E...', 50, 'Mar-17-2021', '0.011354999999999923', '0.007643586'),
    createData('12057206', '0x0f9aa15ef3...', '0x8A2C601f253...', '0x12D819E30db2E...', 50, 'Mar-17-2021', '0.011354999999999923', '0.007643586'),
    createData('12057206', '0x0f9aa15ef3...', '0x8A2C601f253...', '0x12D819E30db2E...', 50, 'Mar-17-2021', '0.011354999999999923', '0.007643586'),
    createData('12057206', '0x0f9aa15ef3...', '0x8A2C601f253...', '0x12D819E30db2E...', 50, 'Mar-17-2021', '0.011354999999999923', '0.007643586'),
    createData('12057206', '0x0f9aa15ef3...', '0x8A2C601f253...', '0x12D819E30db2E...', 50, 'Mar-17-2021', '0.011354999999999923', '0.007643586'),
    createData('12057206', '0x0f9aa15ef3...', '0x8A2C601f253...', '0x12D819E30db2E...', 50, 'Mar-17-2021', '0.011354999999999923', '0.007643586'),
    createData('12057206', '0x0f9aa15ef3...', '0x8A2C601f253...', '0x12D819E30db2E...', 50, 'Mar-17-2021', '0.011354999999999923', '0.007643586'),
    createData('12057206', '0x0f9aa15ef3...', '0x8A2C601f253...', '0x12D819E30db2E...', 50, 'Mar-17-2021', '0.011354999999999923', '0.007643586'),
    createData('12057206', '0x0f9aa15ef3...', '0x8A2C601f253...', '0x12D819E30db2E...', 50, 'Mar-17-2021', '0.011354999999999923', '0.007643586'),
];

export default function CustomizedTables(props) {
    const getData = useSelector((state) => state.dataTransactionSlice.transactions);

    return (
        <>
            <TableContainer component={Paper} className={Styles.container}>
                <Table sx={{ minWidth: '70%' }} aria-label="customized table">
                    <TableHead className={Styles.header}>
                        <TableRow>
                            <StyledTableCell >Block number</StyledTableCell>
                            <StyledTableCell align="right">Transaction ID</StyledTableCell>
                            <StyledTableCell align="right">Sender address</StyledTableCell>
                            <StyledTableCell align="right">Recipient's address</StyledTableCell>
                            <StyledTableCell align="right">Block confirmations</StyledTableCell>
                            <StyledTableCell align="right">Date</StyledTableCell>
                            <StyledTableCell align="right">Value</StyledTableCell>
                            <StyledTableCell align="right">Transaction Fee</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.numberBlock}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.TransactionID}</StyledTableCell>
                                <StyledTableCell align="right">{row.SenderAddress}</StyledTableCell>
                                <StyledTableCell align="right">{row.RecipientsAddress}</StyledTableCell>
                                <StyledTableCell align="right">{row.BlockConfirmations}</StyledTableCell>
                                <StyledTableCell align="right">{row.data}</StyledTableCell>
                                <StyledTableCell align="right">{row.valu}</StyledTableCell>
                                <StyledTableCell align="right">{row.gas}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/*<Stack color="primary" spacing={2}>*/}
                <Pagination className={Styles.container_pag} color="primary" count={10}  shape="rounded" />
            {/*</Stack>*/}
        </>

    );
}