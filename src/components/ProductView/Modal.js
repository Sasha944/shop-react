import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";


const InputField = styled.input`
display: block;`;

const TextareaField = styled.textarea`
display: block;`;
const Modal = ({ onSubmit,handleShowMessageClick,handleCloseModal,showModal,productList}) => {
    return ReactDOM.createPortal(
        <div
            style={{
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.3)',
            }}
        >
            <div
                style={{
                    padding: 20,
                    background: '#fff',
                    borderRadius: '2px',
                    display: 'inline-block',
                    minHeight: '300px',
                    margin: '1rem',
                    position: 'relative',
                    minWidth: '300px',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                    justifySelf: 'center',
                    zIndex: "300"
                }}
            >
                <form action="" onSubmit={onSubmit}>
                    <InputField name="title" defaultValue={productList.title}/>
                    <InputField name="image" defaultValue={productList.image}/>
                    <InputField name="price" defaultValue={productList.price}/>
                    <TextareaField name="description" defaultValue={productList.description}/>
                    <button>
                        Save
                    </button>
                </form>
                <button onClick={handleCloseModal}>X</button>
            </div>
        </div>,
        document.getElementById("itemProduct"),
    )
};

export default Modal;