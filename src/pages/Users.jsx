import Layout from '../layout/Layout'
import AddUsersModel from '../components/Users/AddUsersModel';
import UpdateUsersModel from '../components/Users/UpdateUsersModel';
import UsersTable from '../components/Users/UsersTable';

const Users = () => {
    return (
        <Layout>
            <section className=''>

                <div className='d-flex align-items-center justify-content-between bg-white p-3 my-2'>
                    <h4>Users List</h4>
                    <button className='btn btn-outline-dark rounded-0' data-bs-toggle="modal" data-bs-target="#exampleModal">Register</button>
                </div>

                <div className="row bg-white p-3">
                    <div className="col-md-3">
                        <div className='w-100 mb-3 mb-md-0'>
                            <input className="form-control rounded-0" type="month" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='w-100 mb-3 mb-md-0'>
                            <select className="form-select rounded-0">
                                <option selected>Select Role</option>
                                <option value="1">Users</option>
                                <option value="2">Manager</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='w-100 mb-3 mb-md-0'>
                            <select className="form-select rounded-0">
                                <option selected>Select Status</option>
                                <option value="1">Active</option>
                                <option value="2">Suspend</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='w-100'>
                            <input className="form-control rounded-0" type="search" placeholder="Search Hear..." />
                        </div>
                    </div>
                </div>

                <div className='mt-2'>
                    <AddUsersModel />
                    <UpdateUsersModel />
                    <UsersTable />
                </div>
            </section>
        </Layout>
    )
}

export default Users