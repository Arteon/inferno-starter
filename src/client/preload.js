import Home from './components/Home'

// All your server side prefetching is done here
// When a route is matched, the static function is executed
const routes = [
    {
        pattern: '/',
        onEnter: Home.fetchData,
        onLeave: Home.clearData,
        component: Home
    }
]

// Execute server-side async methods to refetch data
export default (stores) => {
    return Promise.all(routes.map(route => route.execute(stores)))
}
