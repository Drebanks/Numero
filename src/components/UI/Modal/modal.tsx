import React from "react";

interface ModalProps {
  children: React.ReactNode;
}

const ModalLayout: React.FC<ModalProps> = ({
  children,
}) => {
  return (
    <div id="popup-modal" className="modal bg-[#414258] overflow-y-auto fixed top-0 bottom-0 left-0 z-[1000] md:inset-0 h-modal md:h-full">
      <div className="modal_container flex grid place-items-center h-screen">
        <div className="modal_box w-full max-w-xl bg-[#FAFAFA] backdrop-blur-3xl p-8 rounded-3xl ">
          <div className="modal_form shadow-white bg-[#FFFFFF] rounded-3xl relative">
            <div className="modal_form_box">{children} </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModalLayout;