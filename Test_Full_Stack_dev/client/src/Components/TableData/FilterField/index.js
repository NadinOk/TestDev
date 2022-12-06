import * as React from 'react';
import Styles from './styles.module.scss'
import {  useDispatch } from 'react-redux';
import {MenuItem, TextField} from "@mui/material";
import searchIcon from "../../../images/search.svg";
import {transactionActions} from "../../../actions/getDataTransaction";
import CustomizedTables from "../Table";

const currencies = [
    {
        value: 'Block number',
        label: 'Block number',
    },
    {
        value: 'Transaction ID',
        label: 'Transaction ID',
    },
    {
        value: 'Sender address',
        label: 'Sender address',
    },
    {
        value: 'Recipient\'s address',
        label: 'Recipient\'s address',
    },
];

 const SelectLabels = (props) => {
     const dispatch = useDispatch()
    const [filters, setFilters] = React.useState('');
     const [search, setSearch] = React.useState('');

     const handleChange = (event) => {
         if (event.target.name === 'search') {
             setSearch(event.target.value);
         } else {
             setFilters(event.target.value);
         }
    };


const handleClick = () => {
    dispatch(transactionActions.getTransactionData({params: {filters: search}}))
}
    return (
        <>
            <div className={Styles.wrapper}>
                <div className={Styles.container}>
                    <TextField
                        className={Styles.field}
                        value={search}
                        onChange={handleChange}
                        name={'search'}
                    />
                    <TextField
                        className={Styles.field}
                        value={filters}
                        select
                        onChange={handleChange}
                        name={'select'}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <button className={Styles.submitBtn}  type="submit" onClick={handleClick}>
                    <img src={searchIcon} alt={'search image'}/>
                </button>
            </div>
            <CustomizedTables/>
        </>



    );
}

export default SelectLabels