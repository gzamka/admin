import { db } from '../firebase/firebase.js'
import { addDoc, collection } from 'firebase/firestore';
import { storage } from '../firebase/firebase.js';
import { ref, uploadString, getDownloadURL } from "firebase/storage";
export const Add_doc = async ({ values, image }) => {
    if (image[0] !== undefined) {
        let arr = []
        await Promise.all(
            image.map(async (el) => {
                const fixedbase64 = el.base64.split(/,(.+)/)[1]
                ///imgUpload on firebase 
                const storageRef = ref(storage, el.imgName);
                await uploadString(storageRef, fixedbase64, 'base64')
                const url = await getDownloadURL(storageRef)
                arr.push({ imgName: el.imgName, imgUrl: url })
            }))
            const docRef = await addDoc(collection(db, "products"), {
            date: Date.now(),
            title: values.title,
            description: values.description,
            img: arr,
        })
    }

}