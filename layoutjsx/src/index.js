import React from 'react';
import ReactDom from 'react-dom';

import Customerinfo from  "./Customerinfo";
import Header from  "./Header";
import Productinfo from  "./Productinfo";
import Orderinfo from "./Orderinfo";
import "./index.css";


ReactDom.render(<>  
<Header/>
<Customerinfo/>
<Orderinfo/>
<Productinfo/>
 </> ,document.getElementById("root"));