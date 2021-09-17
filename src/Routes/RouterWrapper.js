import {Route} from 'react-router-dom'

const RouterWrapper = ({component:Component,layout:Layout,...rest}) => {
    return (
        
<Route {...rest} render = {(props) => <Layout {...props} > <Component {...props} />  </Layout>} />
     );
}
 
export default RouterWrapper;