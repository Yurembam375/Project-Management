import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(
    function Modal({ children, buttonCption }, ref) {
        const dailog = useRef();
        useImperativeHandle(ref, () => {
            return {
                open() {
                    dailog.current.showModal();
                },
            }

        });
        return createPortal(
            <dailog ref={dailog} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md '>
                {children}
                <form method="dailog">
                    <button>{buttonCption}</button>
                </form>
            </dailog>,
            document.getElementById('modal-root')
        )
    }
)
export default Modal;