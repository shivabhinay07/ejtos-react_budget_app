import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
//Code to import Remaining.js
import Remaining from './components/Remaining';

// code to import ExpenseTotal.js

import ExpenseTotal from './components/ExpenseTotal';
// Code to import Expense list
import ExpenseList from './components/ExpenseList';

// code to import AllocationForm
import AllocationForm from './components/AllocationForm';
// code to import ChangeCurrency
import ChangeCurrency from './components/ChangeCurrency';

import { AppProvider } from './context/AppContext';
import ExpenseItem from './components/ExpenseItem';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                                            // Budget component
                    <div className='col-sm'>
                        <Budget />
                    </div>
                        }        

                        {
                            /* Add Remaining component here*/
                                             //Remaining component
                    <div className='col-sm'>
                    <Remaining />
                </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                                             //ExpenseTotal component
                    <div className='col-sm'>
                    <ExpenseTotal />

                </div>
                        }    

                        {
                            /* Add ChangeCurrency  component here */
                                             //ChangeCurrency component
                    <div className='col-sm'>
                    <ChangeCurrency />
                    
                </div>
                        }     
                       
                        {
                            /* Add ExpenseList component here */
                            <div className='col-sm'>
                            <ExpenseList />
                </div>
                        }         

                        {
                            /* Add ExpenseItem component here */
                            <div className='col-sm'>
                            <ExpenseItem />
                </div>
                        }        

                        {
                            /* Add AllocationForm component here under */
                            <div className='col-sm'>
                            <AllocationForm />
                </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
