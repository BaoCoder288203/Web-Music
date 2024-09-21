import {useEffect, useState, useMemo, useReducer} from 'react'
import React from 'react';
import { upload } from '@testing-library/user-event/dist/upload';

//useReduce
// 1. Init state: 0
// 2. Actions: Up(state + 1) / Down(state - 1)
// 3. Reducer
// 4. Dispatch

// Init state
const initialState = {
    job: '',
    jobs: []
};

// Actions
const SET_JOB = 'set_JOB';
const ADD_JOB = 'add_JOB';
const REMOVE_JOB = 'remove_JOB';

// Reducer
const reducer = (state ,action) => {

}

// function Content() {
//     console.log("Hello");
//     const [img,setImg] = useState();

//     useEffect(() => {
//         return () => {
//             (img && URL.revokeObjectURL(img.preview))
//         }
//     }, [img])

//     const ChangeIMG = (e) => {
//         const file = e.target.files[0];
//         file.preview = URL.createObjectURL(file);
//         setImg(file);
//     }
//     return (
//         <div>
//             <input 
//                 type="file"
//                 onChange={ChangeIMG}
//             />
//             {img && (
//                 <img src={img.preview} width="50px" style={{borderRadius:'50%'}} />
//             )}
//         </div>
//     )
// }

// function Content() {
//     const [name,setName] = useState('');
//     const [price,setPrice] = useState('');
//     const [products,setProducts] = useState([]);

//     const handleSubmit = ()=>{
//         // Cách thêm phần tử mới vào mảng vào chuyển thành type Object
//         setProducts([...products,{
//             name,
//             price: +price // mẹo đổi sang số 
//         }])
//     }

//     const total = useMemo(() => {
//         const result = products.reduce((sum,prod) => {
//             console.log('Calculater again!');
//             return sum + prod.price
//         },0)
//         return result;
//     },[products])// chỉ khi products thay đổi mới chạy vào 
//     // Nếu biến dependent rỗng thì hàm này chỉ được hoạt động 1 lần
//     // những lần sau đó chỉ mount ra mà ko bị thay đổi 

//     return (
//         <div style={{padding: '10px 32px'}}>
//             <input 
//                 value={name}
//                 placeholder = "Enter name ..."
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <br/>
//             <input 
//                 value={price}
//                 placeholder = "Enter price ..."
//                 onChange={(e) => setPrice(e.target.value)}
//             />
//             <br/>
//             <button onClick={handleSubmit}>
//                 Add
//             </button>
//             <br/>
//             Total: {total}
//             <ul>
//                 {
//                     products.map((product,index) => {
//                         return (
//                             <li key={index}>{product.name} - {product.price}</li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// function Content() {
//     const [count,dispatch] = useReducer(reducer,initialState);

//     return (
//         <div style={{padding: '0 32px'}}>
//             <h1>{count}</h1>
//             <button onClick={()=>{dispatch(DOWN)}}>
//                 Down
//             </button>
//             <button onClick={()=>{dispatch(UP)}}>
//                 Up
//             </button>
//         </div>
//     )
// } 


function Content() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {job,jobs} = state;

    // Dispatch
    return (
        <div style={{padding: '0 32px'}}>
            <h3>Todo</h3>
            <input
                value={job}
                placeholder="Enter todo..."    
            />
            <button>Add</button>
            <ul>
                {jobs.map((job,index)=>{
                    <li key={index}>{job} &times;</li>
                })}
            </ul>
        </div>
    )
}

export default Content;