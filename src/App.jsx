import { Layout } from "./components/Layout/Layout"
import { ComidasList } from "./components/List/ComidasList"
import { FiltersProvider } from "./Context/filters"
function App() {


  return (
    <FiltersProvider>
      <Layout>
        <ComidasList />
      </Layout>
    </FiltersProvider>
  )
}

export default App
