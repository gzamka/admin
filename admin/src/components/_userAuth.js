import { useRouter } from 'next/router';
import { useAuth } from './Authprovider';
import { Loadingscreen } from './Loadingscreen'
export const userAuth = (Component) => {
    return function isLoading(props) {
        const router = useRouter()
        const { login, loading } = useAuth()
        if (loading)
            return <Loadingscreen />

        if (login) {
            return <Component login={login} {...props} />
        } else
            router.push('/login')
    }
}