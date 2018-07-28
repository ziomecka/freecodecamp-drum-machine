import React from 'react';
import Drum from '../../components/Drum/index';

export interface HomeViewProps {
}

export interface HomeViewState {
}

export default class HomeView extends React.Component<HomeViewProps, HomeViewState> {
    constructor(props: HomeViewProps, state: HomeViewState) {
        super(props, state);
    }

    render() {
        return (
            <section>
                {this.renderDrum()}
            </section>
        );
    }

    renderDrum() {
        return (
            <Drum />
        );
    }
}