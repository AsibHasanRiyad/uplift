import { ToastContainer } from "react-toastify";

const TestPage = () => {
    const toast =() =>{
        toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className=" h-[100vh] flex justify-center items-center">
      <button onClick={toast} className=" bg-red-500 p-4">Toast</button>
      </div>
    </div>
  );
};

export default TestPage;
