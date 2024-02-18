import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5">
      <div className="modal-dialog modal-sm" role="document"style={{ marginLeft: '620px' }}>
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0"></div>
          <div className="container">
            <div className="">
              <form>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Email or phone number</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary w-100 py-2 mb-3" type="submit">Login</button>
                <div className="text-center">
                  <a className="icon-link icon-link-hover" href="#">
                    Forgot password?
                    <svg className="bi" aria-hidden="true"><use xlinkHref="#arrow-right"></use></svg>
                  </a>
                </div>
                <div className="border-top my-3"></div>
                <div className="text-center">
                  <button type="button" className="btn btn-success w-10 py-2">Create new account</button>
                </div>
                <div className="border-top my-3"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
