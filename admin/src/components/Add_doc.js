import { db } from '../firebase/firebase.js'
import { addDoc, collection, onSnapshot, query, getDoc, orderBy, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { storage } from '../firebase/firebase.js';
import { ref, uploadString, getDownloadURL, deleteObject, getStorage } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react'
const imgUploader = async (el) => {
    const fixedbase64 = el.base64.split(/,(.+)/)[1]
    const imgName = uuidv4() + el.imgName
    ///imgUpload on firebase 
    const storageRef = ref(storage, imgName);
    await uploadString(storageRef, fixedbase64, 'base64', { contentType: "image/jpg" })
    const url = await getDownloadURL(storageRef)
    return { imgName: imgName, imgUrl: url }
}
const imgDelete = async (el) => {
    const storage = getStorage();
    const desertRef = ref(storage, el.imgName);
    await deleteObject(desertRef)
}
export const Add_doc = async ({ values, image = [] }, col) => {
    if (image[0] !== undefined) {
        let arr = []
        await Promise.all(
            image.map(async (el) => {
                let img = await imgUploader(el)
                arr.push(img)
            }))
        await addDoc(collection(db, col), {
            ...values,
            date: Date.now(),
            img: arr,
        })
    }
    else {
        await addDoc(collection(db, col), {
            email: values,
            date: Date.now()
        })
    }
}
export const useGetItems = (col) => {
    const [docs, setdocs] = useState([])
    useEffect(() => {
        const queried = query(collection(db, col), orderBy("date", "desc"));
        const sub = onSnapshot(queried, (snapshot) => {
            setdocs('')
            snapshot.forEach((doc) => {
                setdocs((docs) => [...docs, { ...doc.data(), id: doc.id }])
            })
        })
        return (() => {
            sub()
        })
    }, [])
    return { docs }
}
export const DocUpdate = async ({ values, image, id }, col) => {
    let arr = []
    await Promise.all(image.map(async (el) => {
        if (el.base64) {
            const a = await imgUploader(el)
            arr.push(a)
        } else {
            arr.push(el)
        }
    }))
    const docRef = await getDoc(doc(db, col, id))
    docRef.data().img.forEach((doc) => {
        if (arr.find(el => el.imgName === doc.imgName) === undefined) {
            (async () => {
                await imgDelete(doc)
            })()
        }
    })
    await setDoc(doc(db, col, id), {
        ...values,
        img: arr,
        date: Date.now()
    })

}
export const DeleteProduct = (product, col) => {
    try {
        product.map(async (el) => {
            await deleteDoc(doc(db, col, el.id));
            if (el.img) {
                el.img.map(async (element) => {
                    await imgDelete(element)
                })
            }
        })
    } catch (e) {
        console.log(e);
    }
}
