"use client" ;

import {AiOutlinePlus} from 'react-icons/ai'
import Modal from './Modal';

import { FormEventHandler, useState } from 'react';
import { handleClientScriptLoad } from 'next/script';
import { addTodo } from '../../../api';

const AddTask = () => {

    const  [modalOpen , setModalOpen] = useState<boolean>(false)
    const [newTaskValue , setNewTaskValue] = useState<string>("");

    const handlesubmitNewTodo:FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addTodo ({
            id: "1" ,
            text : newTaskValue
        })
        setNewTaskValue("");
        setModalOpen(false)
    }

    return <div>
        <button onClick={() => setModalOpen(true)}className="btn btn-primary w-full">ADD NEW TASK
        <AiOutlinePlus  className="ml-2"size={18} /></button>
        <Modal  modalOpen ={modalOpen } setModalOpen = {setModalOpen}>
         <form onSubmit={handlesubmitNewTodo}>
            <h3 className='text-bold font-lg'>Add New Task</h3>
            <div className='modal-action'>
            <input
            value={newTaskValue}
            onChange={e => setNewTaskValue(e.target.value)}
             type="text" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            <button type='submit'className='btn'>Submit</button>
         </form>
        </Modal>
    </div>
}
export default AddTask;

