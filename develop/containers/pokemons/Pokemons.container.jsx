import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPokemons } from '../../actions/pokeball.actions';
import pTypes from '../../actions/types/pokeball.types';

import PokemonsPage from '../../components/pages/pokemons/Pokemons.page.jsx';

class PokemonsContainer extends Component {

    componentDidMount() {
        this.props.handleGetPokemons({ limit: 12 });
    }

    handleGetPokemonsNext() {
        const { apiMeta: { paginator }, handleGetPokemons } = this.props;

        handleGetPokemons({ ...paginator });
    }

    render() {
        const { apiMeta, pokemons } = this.props;

        return (
            <PokemonsPage
              apiMeta={apiMeta}
              pokemons={pokemons}
              handleGetPokemons={this.handleGetPokemonsNext.bind(this)}
            />
        );
    }
}

PokemonsContainer.propTypes = {
    pokemons: PropTypes.object,
    apiMeta: PropTypes.object,
    handleGetPokemons: PropTypes.func,
};

const mapStateToProps = (state) => ({
    // todo: set initializing for apiMeta
    apiMeta: state.api[pTypes.GET_POKEMONS] || {},
    pokemons: state.pokeball.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
    handleGetPokemons: bindActionCreators(getPokemons, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsContainer);
