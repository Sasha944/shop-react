import React from "react";
import ReactDOM from "react-dom";

const CreateProduct = ({ handleShowMessageClick,handleCloseModal,onSubmit}) => {
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
                    <input type="text" name="title" placeholder="title"/>
                    <input type="text" name="image" placeholder="image"/>
                    <input type="number" name="price" placeholder="price"/>
                    <textarea name="description" placeholder="description"/>
                    <input type="number" placeholder="id" name="id"/>
                    <button>
                        Save
                    </button>
                </form>
                <button onClick={handleCloseModal}>X</button>
            </div>
        </div>,
        document.getElementById("createProduct"),
    )
};

export default CreateProduct;
