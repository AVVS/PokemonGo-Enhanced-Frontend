import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import Card from 'material-ui/Card';
import Stats from 'components/Stats';
import Move from 'components/Move';
import ActionButton from 'components/ActionButton';

import InlineSVG from 'svg-inline-react';
import FavoriteIcon from '../../../assets/icons/favorite.svg';
import NotFavoriteIcon from '../../../assets/icons/not-favorite.svg';

export const PokemonWide = ({ pokemon, evolve, release, powerup, ...props }) => (
  <div style={styles.wrapper}>
    <Card style={styles.container} zDepth={0}>
      <div style={styles.imageContainer}>
        <InlineSVG
          src={pokemon.favorite ? FavoriteIcon : NotFavoriteIcon}
          style={{ ...styles.favorite, ...(!pokemon.favorite && styles.notFavorite) }}
        />
        <img src={pokemon.picture} style={styles.image} />
      </div>
      <div style={styles.info}>
        <h2 style={styles.header}>{pokemon.pokemon_id}</h2>
        <div>
          CP <b style={styles.em}>{pokemon.cp}</b>
          <span style={styles.subtle}> / {pokemon.stats.maxCombatPower}</span>
        </div>
        <Stats current={pokemon.individual_stamina} type="STA" />
        <Stats current={pokemon.individual_attack} type="ATK" />
        <Stats current={pokemon.individual_defense} type="DEF" />
      </div>
      <div style={styles.moveContainer}>
        <Move style={styles.move} {...pokemon.stats.move_1} />
        <Move style={styles.move} {...pokemon.stats.move_2} />
      </div>
    </Card>
    <div style={styles.actions}>
      <ActionButton style={styles.action} onTouchTap={powerup} label="power up" />
      <ActionButton style={styles.action} onTouchTap={evolve} label="evolve" />
      <ActionButton style={styles.action} onTouchTap={release} label="transfer" />
    </div>
  </div>
);

PokemonWide.propTypes = {
  pokemon: PropTypes.object.isRequired,
  evolve: PropTypes.func.isRequired,
  release: PropTypes.func.isRequired,
  powerup: PropTypes.func.isRequired
};

const styles = {
  wrapper: {
    marginBottom: 20
  },
  container: {
    width: 300,
    height: 170
  },
  imageContainer: {
    width: 150,
    height: 130,
    textAlign: 'center',
    display: 'inline-block',
    padding: '20px',
    position: 'relative'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  info: {
    width: 135,
    height: 130,
    display: 'inline-block',
    verticalAlign: 'top'
  },
  header: {
    margin: '10px 0',
    color: '#666',
    fontSize: '18px'
  },
  em: {
    fontWeight: 600,
    fontSize: '20px'
  },
  subtle: {
    color: '#ccc'
  },
  moveContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px'
  },
  move: {
    width: '48%',
    flex: '0 1 48%'
  },
  actions: {
    padding: '5px 0',
    display: 'flex',
    justifyContent: 'space-between'
  },
  action: {
    width: '32%',
    flex: '0 1 32%',
    height: '30px',
    lineHeight: '30px'
  },
  favorite: {
    display: 'block',
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: '10px',
    left: '10px',
    fill: '#F8DB43'
  },
  notFavorite: {
    fill: '#CACACA'
  }
};

export default pure(PokemonWide);
