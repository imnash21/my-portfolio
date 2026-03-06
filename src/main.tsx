import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from './components/ui/provider'
import theme from './lib/theme'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider theme={theme} defaultTheme="light">
			<App />
		</Provider>
	</StrictMode>,
)
