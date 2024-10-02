import img from "../../assets/medium.webp"
import { BiTrash } from "react-icons/bi";
const AddUsersModel = () => {
  return (
    <div className="modal fade" id="exampleModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content rounded-0">
          <form action="">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Register Users</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">User Name</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Image</label>
                  <input type="file" className="form-control rounded-0" />
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <div className='d-flex gap-2'>
                <div className='position-relative'>
                  <img src={img} style={{ maxWidth: "50px", maxHeight: "50px", objectFit: "cover" }} />
                  <BiTrash style={{ position: "absolute", right: "0px", top: "0px", color: "yellow", cursor: "pointer" }} />
                </div>
              </div>
              <div className='d-flex gap-2'>
                <button type="reset" className="btn btn-secondary rounded-0">Reset</button>
                <button type="submit" className="btn btn-primary rounded-0">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUsersModel;