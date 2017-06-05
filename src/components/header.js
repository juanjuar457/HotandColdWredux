import React from 'react';
import {connect} from 'react-redux';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export function Header(props) {
    let infoModal; //declare this var here. ES6 short hand let could also be var, technically undefined until we use it!
    if (props.showInfoModal) {
        infoModal = <InfoModal />; //passed in as JSX on line 18
    }

    return (
        <header>
            <TopNav />
            {infoModal}
            <h1>HOT or COLD</h1>
        </header>
    );
};

const mapStateToProps = state => ({
    showInfoModal: state.showInfoModal
});
var blah = connect(mapStateToProps);
console.log(blah);
export default blah(Header); //3 functions involved here....
//automaticcaly get the dispatch from using connect.

//for double paras stacked, means 1st is returning a func, and the 2nd func is acting on the 1st func.
//then the header is passed
//connect is a function, after

//Notes on diff b/t the RO version..
//imported connect from react/redux..
//added the mapStateToProps()with the Header passed in.
//mapped the showInfoModal prop that in the initial state is set to FALSE
//
//on let
// if (true) {
//     let hello = "goodbye"; //block level!!! === anything wrapped in culry braces.
// }
// console.log(hello); //this was undefined.
//can't make line 10 to a const b/c you are changing the var.