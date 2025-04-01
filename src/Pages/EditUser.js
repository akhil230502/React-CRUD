import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header";

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // const [user, setUser] = useState({ mobile: "", password: "" });
    const [mob, setMob] = useState()
    const [pass, setPass] = useState()
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [email, setEmail] = useState()

    useEffect(() => {
        axios.get(`https://67e67d256530dbd31110336d.mockapi.io/api/Users/${id}`)
            .then(response => {
                console.log(response.data);
                setMob(response.data.mobile)
                setEmail(response.data.email)
                setFname(response.data.firstname)
                setLname(response.data.lastname)
            })
            .catch(error => console.log("Error fetching user data:", error));
    }, [id]);

    const handleSubmit = (e) => {
        // e.preventDefault();

        // console.log(user);

        // axios.put(`https://67e67d256530dbd31110336d.mockapi.io/api/Users/${id}`, { firstname: fname, lastname: lname, email: email, mobile: mob, password: pass })
        //     .then(() => {
        //         alert("User updated successfully!");
        //         navigate("/");
        //     })
        //     .catch(error => console.log("Error updating user:", error));
    };

    return (
        <div className="container">
            <Header />
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Firstname</label>
                    <input type="text" name="text" className="form-control" value={fname} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Lastname</label>
                    <input type="text" name="text" className="form-control" value={lname} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input type="text" name="mobile" className="form-control" value={mob} onChange={(e) => setMob(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" name="mobile" className="form-control" value={email} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" value={pass} onChange={(e) => setPass(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-success">Update</button>
            </form>
        </div>
    );
};

export default EditUser;

