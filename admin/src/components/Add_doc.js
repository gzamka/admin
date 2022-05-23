import { db } from '../firebase/firebase.js'
import { addDoc, collection, onSnapshot, query, getDocs, orderBy, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { storage } from '../firebase/firebase.js';
import { ref, uploadString, getDownloadURL, deleteObject, getStorage } from "firebase/storage";
import { useEffect, useState } from 'react'
const imgUploader = async (el) => {
    const fixedbase64 = el.base64.split(/,(.+)/)[1]
    ///imgUpload on firebase 
    const storageRef = ref(storage, el.imgName);
    await uploadString(storageRef, fixedbase64, 'base64')
    const url = await getDownloadURL(storageRef)
    return { imgName: el.imgName, imgUrl: url }
}
const imgDelete = async (el) => {
    // console.log(el);
    const storage = getStorage();
    const desertRef = ref(storage, el.imgName);
    await deleteObject(desertRef)
}
export const Add_doc = async ({ values, image }, col) => {
    if (image[0] !== undefined) {
        let arr = []
        await Promise.all(
            image.map(async (el) => {
                let img = await imgUploader(el)
                arr.push(img)
            }))
        await addDoc(collection(db, col), {
            date: Date.now(),
            title: values.title,
            description: values.description,
            img: arr,
        })
    }
}
export const useGetItems = (col) => {
    const [docs, setdocs] = useState([])
    useEffect(async () => {
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
    // console.log(docs);
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
    const docRef = await getDocs(collection(db, col))
    //  arr.includes(image)
    await setDoc(doc(db, col, id), {
        ...values,
        img: arr,
        date: Date.now()
    })

}
export const DeleteProduct = async (product, col) => {
    await deleteDoc(doc(db, col, product.id));
    product.img.map(async (el) => {
        await imgDelete(el)
    })
}
