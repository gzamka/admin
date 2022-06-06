import { useRouter } from 'next/router';
import { useAuth } from './Authprovider';
import { Loadingscreen } from './Loadingscreen'
export const userAuth = (Component) => {
    return function isLoading(props) {
        const router = useRouter()
        const { login, loading } = useAuth()

        console.log(loading)
        if (loading)
            return <Loadingscreen />

        if (login) {
            console.log(login);
            return <Component login={login} {...props} />
        } else
            router.push('/login')
    }
}