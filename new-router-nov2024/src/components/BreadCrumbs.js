import { useLocation, Link } from 'react-router-dom';

const BreadCrumbs = () => {
    const location = useLocation(); 
   

    let currentLink = '';
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`
            return (
                <div key={crumb}>
                    <Link to={currentLink}>
                        {crumb} 
                    </Link>
                </div>)
        })

  return (
        <div className="breadCrumbs">{crumbs}</div>
  )
}

export default BreadCrumbs