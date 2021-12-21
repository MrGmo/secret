import { useNavigate, Link } from "react-router-dom";
import { useEffect } from 'react'

function LoginPage(props) {
  const { handleLogin, isLoggedIn } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleLogin])

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-light text-dark"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-black-50 mb-5">
                      Please enter your username and password.
                    </p>
                    <form onSubmit={handleLogin}>
                      <div className="form-outline form-black mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Username"
                          name="username"
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          name="password"
                        />
                      </div>

                      <button
                        className="btn btn-outline-dark btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                    </form>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        style={{ textDecoration: "none" }}
                        className="text-black"
                      >
                        <span id="register-color">Register</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
