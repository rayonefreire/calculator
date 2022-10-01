import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Keyboard } from './src/components/Keyboard';

export default function App() {
  return (
    <>
      <Keyboard />
      <StatusBar style='light' />
    </>
  );
}