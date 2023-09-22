import React from 'react';

import './Footer.css'
function Footer() {
    const footerlist =['Privacy' , 'Terms' , 'Feedack', 'Support']
  return (
    <div>
    <section className='footer-bg'>
<div className="container ">

    <div className="row pt-3">
    <hr />
    <div className="col-12 col-lg-6"><p>© 2023 Geeks. All Rights Reserved.</p></div>
    <div className="col-12 col-lg-6">

    <ul className="d-flex float-end"  >
    {footerlist.map((items) =>{
    return  <li className="list-group-item px-3 " key={items} >
    <a className="nav-link" href="#">{items}</a>
    </li>

    })}
    </ul>

    </div>    
    </div>
</div>
</section>
    </div>
  )
}

export default Footer