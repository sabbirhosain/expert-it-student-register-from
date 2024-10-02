import { useState } from 'react';
import Layout from '../layout/Layout'
import Select from 'react-select';
import AddCoursesModel from '../components/Courses/AddCoursesModel';
import UpdateCoursesModel from '../components/Courses/UpdateCoursesModel';
import CoursesTable from '../components/Courses/CoursesTable';
const Courses = () => {
  const [userList, setUserList] = useState()
  const [loading, setLoading] = useState(false)

  const options = [
    { value: '1', label: 'Super Admin' },
    { value: '2', label: 'Accountant' },
    { value: '3', label: 'User' },
  ]

  const handleChange = (selectedUserType) => {
    setUserList(selectedUserType);
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white', border: "1px solid #dee2e6", borderRadius: "0px"
    }),
  };


  return (
    <Layout>
      <section className=''>

        <div className='d-flex align-items-center justify-content-between bg-white p-3 my-2'>
          <h4>Courses List</h4>
          <button className='btn btn-outline-dark rounded-0' data-bs-toggle="modal" data-bs-target="#exampleModal">Add New</button>
        </div>

        <div className="row bg-white p-3">
          <div className="col-md-3">
            {/* <div className='w-100 mb-3 mb-md-0'>
              <Select
                options={options}
                value={userList}
                onChange={handleChange}
                isLoading={loading}
                placeholder={loading ? "Loading..." : "Select User Type..."}
                isClearable={true}
                styles={customStyles}
              />
            </div> */}
          </div>
          <div className="col-md-3">
            {/* <div className='w-100 mb-3 mb-md-0'>
              <input className="form-control rounded-0" type="date" />
            </div> */}
          </div>
          <div className="col-md-3">
            {/* <div className='w-100 mb-3 mb-md-0'>
              <input className="form-control rounded-0" type="date" />
            </div> */}
          </div>
          <div className="col-md-3">
            <div className='w-100'>
              <input className="form-control rounded-0" type="search" placeholder="Search Hear..." />
            </div>
          </div>
        </div>

        <div className='mt-2'>
          <AddCoursesModel />
          <UpdateCoursesModel />
          <CoursesTable />
        </div>
      </section>
    </Layout>
  )
}

export default Courses