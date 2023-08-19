import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TermsConditions from './pages/TermsConditions'
import TermsConditionsNew from './pages/NewTermsConditions'
import BecomeProvider from './pages/BecomeProvider'
import HomeArabic from './pages/ArabicBase/Home'
import BecomeProviderArabic from './pages/ArabicBase/BecomeProvider'
import TermsConditionsArabic from './pages/ArabicBase/TermsConditionsArabic'
function App() {

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/ar' element={<HomeArabic />} />
				<Route path='/terms-conditions' element={<TermsConditions />} />
				<Route path='/ar/terms-conditions' element={<TermsConditionsArabic />} />
				<Route path='/become-provider' element={<BecomeProvider />} />
				<Route path='/become-provider/terms-conditions-new' element={<TermsConditionsNew />} />
				<Route path='/ar/become-provider' element={<BecomeProviderArabic />} />
			</Routes>
		</Router>
	)
}

export default App
