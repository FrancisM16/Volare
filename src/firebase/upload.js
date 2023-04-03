import data from '../data/data.json' assert { type: 'json' }
import { db } from './config.js'
import { addDoc, collection } from 'firebase/firestore'

const dat = data.map((item) => {
    delete item.id
    return item
})

const productosRef = collection(db, 'products')

dat.forEach((item) => {
    addDoc(productosRef, item)
})