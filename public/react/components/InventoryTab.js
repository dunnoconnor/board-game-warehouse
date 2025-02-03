import React from 'react';
import GamesList from './GamesList';

const InventoryTab = ({ games }) => {
  return <GamesList games={games} />;
};

export default InventoryTab;