import { db } from "./firebase/firebase"
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
export const useCustomhook = (col) => {
    const [data, setdocs] = useState([])
    useEffect(() => {
        (async () => {
            if (col) {
                const docs = await getDocs(collection(db, col))
                setdocs([])
                docs.forEach((doc) => {
                    setdocs((data) => [...data, { id: doc.id, ...doc.data()}])
                })
            }
        })()
    }, [])
    return { data }
}