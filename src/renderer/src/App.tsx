// Root component: store provider + route switch.

import { AppProvider, useApp } from './store'
import { Welcome } from './screens/Welcome'
import { Onboarding } from './screens/Onboarding'
import { Home } from './screens/Home'
import { StageView } from './screens/StageView'
import { Resources } from './screens/Resources'
import { Multiplayer } from './screens/Multiplayer'
import { SettingsScreen } from './screens/Settings'
import { Mascot } from './components/Mascot'
import { useState, useEffect } from 'react'
import type { Stage } from '../../shared/types'

function Router(): React.JSX.Element {
  const { route, ready } = useApp()
  const [stages, setStages] = useState<Stage[]>([])

  useEffect(() => {
    void window.api.stages.list().then(setStages)
  }, [])

  if (!ready) {
    return (
      <div className="col center" style={{ height: '100vh', gap: 16 }}>
        <Mascot size={120} />
        <span className="muted">CodeMaster</span>
      </div>
    )
  }

  switch (route.name) {
    case 'welcome':
      return <Welcome />
    case 'onboarding':
      return <Onboarding />
    case 'home':
      return <Home />
    case 'stage': {
      const stage = route.stageKey ? stages.find((s) => s.key === route.stageKey) : undefined
      if (!stage) return <Welcome />
      return <StageView key={stage.key} stage={stage} />
    }
    case 'resources':
      return <Resources />
    case 'multiplayer':
      return <Multiplayer />
    case 'settings':
      return <SettingsScreen />
  }
}

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <div className="app">
        <div className="app-main">
          <div className="wrapper">
            <Router />
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default App
