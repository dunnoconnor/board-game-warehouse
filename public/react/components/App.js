import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import useFetchGames from '../hooks/useFetchGames';
import InventoryTab from './InventoryTab';
import AddGameTab from './AddGameTab';

export const App = () => {
  const { games, error } = useFetchGames();

  return (
    <main>
      <h1>Board Game Warehouse</h1>
      {error && <p>Error fetching games: {error.message}</p>}
      <Tabs defaultActiveKey="inventory" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="inventory" title="Inventory">
          <InventoryTab games={games} />
        </Tab>
        <Tab eventKey="addGame" title="Add Game">
          <AddGameTab />
        </Tab>
      </Tabs>
    </main>
  );
};