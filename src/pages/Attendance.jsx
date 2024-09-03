import { useState } from 'react';
import Layout from '../layout/Layout'
import Select from 'react-select';

const Attendance = () => {
  const [userList, setUserList] = useState()
  const [loading, setLoading] = useState(false)

  const options = [
    { value: "10", label: "Ten" },
    { value: "9", label: "Nine" },
    { value: "8", label: "Eight" },
    { value: "7", label: "Seven" },
    { value: "6", label: "Six" },
    { value: "5", label: "Five" },
    { value: "4", label: "Four" },
    { value: "3", label: "Three" },
    { value: "2", label: "Two" },
    { value: "1", label: "One" },
  ]

  const handleChange = (selectedUserType) => {
    setUserList(selectedUserType);
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white', border: "1px solid #dee2e6", borderRadius: "0px", zIndex: "999"
    }),
  };

  return (
    <Layout>
      <section className='vh-100'>
        <div className="row bg-white p-3 mt-1">

        <div className="col-md-3">
            <div className='w-100 mb-3 mb-md-0'>
              {/* <input className="form-control rounded-0" type="date" /> */}
              <h4>Attendance Sheet</h4>
            </div>
          </div>

          <div className="col-md-3">
            <div className='w-100'>
              {/* <input className="form-control rounded-0" type="search" placeholder="Search Hear..." /> */}
            </div>
          </div>

          <div className="col-md-3">
            <div className='w-100 mb-3 mb-md-0'>
              <input className="form-control rounded-0" type="date" />
            </div>
          </div>

          <div className="col-md-3">
            <div className='w-100 mb-3 mb-md-0'>
              <Select
                options={options}
                value={userList}
                onChange={handleChange}
                isLoading={loading}
                placeholder={loading ? "Loading..." : "Select Class..."}
                isClearable={true}
                styles={customStyles}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Attendance