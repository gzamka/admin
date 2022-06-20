import { db } from "./firebase/firebase"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
export const useCustomhook = (col) => {
    const [data, setdocs] = useState([])
    useEffect(() => {
        if (col) {
            const queried = query(collection(db, col), orderBy("date", "desc"));
            const sub = onSnapshot(queried, (snapshot) => {
                setdocs([])
                snapshot.forEach((doc) => {
                    setdocs((docs) => [...docs, { ...doc.data(), id: doc.id }])
                })
            })
            return (() => {
                sub()
            })
        }
    }, [])
    return { data }
}