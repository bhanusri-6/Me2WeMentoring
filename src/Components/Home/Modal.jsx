import "../../../public/css/System.css"

const Modal = ({ data, close }) => {
  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <img src={data.img} alt="" />
        <h2>{data.title}</h2>
        <p>{data.content}</p>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Modal;