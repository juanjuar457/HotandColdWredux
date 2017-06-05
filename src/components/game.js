import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

//export as a function, stateless. wrapped in div to make sure its rendering multi comps
//was a class before.
export default function Game(props) {
    return (
        <div>
            <Header />
            <GuessSection />
            <GuessCount />
            <GuessList />
        </div>
    );
};

//this.state stmnts are all gone,
//seems to just hold the child components inside...
