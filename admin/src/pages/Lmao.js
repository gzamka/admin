// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { auth } from 'src/firebase/firebase';
// import { App } from './_app'
// export const Lmao = () => {
//     const router = useRouter();
//     const [login, setlogin] = useState(false)
//     const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             const uid = user.uid;
//             // console.log(uid);
//             return <App />
//         } else {
//             router.push('/login')
//         }
//     });
// }