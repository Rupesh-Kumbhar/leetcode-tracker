import React from 'react';
// import { Link } from 'react-router-dom';
import './home.scss';
import ProblemTable from '../problemTable/problemTable';

function Home(){
    return (
      <div className="col-sm-12 ">
        <div className="home py-5">
          <a href='https://www.geeksforgeeks.org/dsa/logic-building-problems/'>
          <h1>Leetcode Tracker</h1>
            </a>
        </div>
        <ProblemTable />

      </div>
    );
}

export default Home;