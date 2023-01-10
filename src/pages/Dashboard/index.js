import bgDashboard from "../../assets/bg-dashboard.jpg"

const Dashboard = () => (
    <>
        <div className="p-5 text-center bg-image rounded-3 d-flex justify-content-center align-items-center" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${bgDashboard}')`,
            backgroundSize: "cover",
            minHeight: "100vh",
        }}>
            <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">Welcome</h1>
                        <h4 className="mb-3">Warung Makan Bahari</h4>
                        <a className="btn btn-outline-success btn-lg" href="#!" role="button">Call to action</a>
                    </div>
                </div>
            </div>
        </div>

    </>
)

export default Dashboard;
