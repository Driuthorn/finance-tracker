import React from 'react'
import { SafeAreaView } from 'react-native'
import Router from './routes/router'

export const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Router />
  </SafeAreaView>
)
