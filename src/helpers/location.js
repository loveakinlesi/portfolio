import { useLocation } from 'react-router-dom';

const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }

// const useRouter = ()=> {
//     var currentRoutes = this.context.router.getCurrentRoutes();
// var lastRoute = currentRoutes[currentRoutes.length - 1];
// console.log(lastRoute.name);
// }


export default usePathname