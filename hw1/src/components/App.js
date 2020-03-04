import React from 'react';
import profile from './profile.json.js';
import Card from './card';

const App = () => <Card key={profile.name} {...profile}/>;

export default App;