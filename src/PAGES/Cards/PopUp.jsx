import React from 'react'

function PopUp({ trigger, setTrigger, children }) {

    return trigger ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 md:w-1/2 lg:w-1/3 z-50">
            <button
              className="absolute top-2 right-2 text-red-500 font-bold text-lg"
              onClick={() => setTrigger(false)}
            >
              X
            </button>
            {children}
          </div>
        </div>
      ) : null;
    }

export default PopUp