import { useRouter } from 'next/router';
import { useAuth } from './Authprovider';
import { Loadingscreen } from './Loadingscreen'
export const userAuth = (Component) => {
    return function isLoading(props) {
        const router = useRouter()
        const { login } = useAuth()
        if (!login) {
            router.push('/login')
            return <Loadingscreen />
        }
        return <Component login={login} {...props} />
    }
}