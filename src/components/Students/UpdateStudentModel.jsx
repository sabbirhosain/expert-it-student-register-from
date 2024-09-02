import { useState } from 'react';
import Select from 'react-select';

const UpdateStudentModel = () => {
    const [userList, setUserList] = useState();
    const [loading, setLoading] = useState(false);

    const options = [
        { value: "1", label: "Basic Computer with MS Office" },
        { value: "2", label: "Web Design" },
        { value: "3", label: "Graphic Design" },
    ];

    const handleChange = (selectedUserType) => {
        setUserList(selectedUserType);
    };

    const customStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: "white",
            border: "1px solid #dee2e6",
            borderRadius: "0px",
        }),
    };
    return (
        <div class="modal fade" id="updateModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content rounded-0">
                    <form action="">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Student Info</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
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
                                    <label className="form-label">Father's Name</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Mother's Name</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Blood Group</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Courses Name</label>
                                    <Select
                                        options={options}
                                        value={userList}
                                        onChange={handleChange}
                                        isLoading={loading}
                                        placeholder={loading ? "Loading..." : "Select Courses..."}
                                        isClearable={true}
                                        styles={customStyles}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Courses Duration</label>
                                    <input type="text" className="form-control rounded-0" readOnly />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Courses Fee</label>
                                    <input type="text" className="form-control rounded-0" readOnly />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Courses Fee Payment</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Batch No</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Select Student Photo</label>
                                    <input type="file" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Select NID/Birth File</label>
                                    <input type="file" className="form-control rounded-0" />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="reset" class="btn btn-secondary rounded-0">Reset</button>
                            <button type="submit" class="btn btn-primary rounded-0">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateStudentModel