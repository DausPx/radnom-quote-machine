import { atom } from "recoil";

export const quote = atom({
    key: 'quote',
    default:{
        text:'',
        author: ''
    }
});

export const category = atom({
    key: 'category',
    default: 'technology'
})