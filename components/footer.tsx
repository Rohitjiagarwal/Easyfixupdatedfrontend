"use client";

export default function Footer() {
  return (
    <footer className="footer d-flex align-items-center" id="footer">
      <div className="container">
        <div className="row g-4 p-2 row-cols-sm-3 row-cols-md-4 ">
          <div className="col-md-4">
            <h2 className="mb-4 fw-bold text-white">EasyFix Expert</h2>
            <p className="footer-brief">
              An application developer’s typical responsibilities include
              coding, designing, application management, troubleshooting,
              monitoring updates and possible security threats, and providing
              end user support.
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="text-white">Quick Links</h6>
            <ul>
              <li>
                <a className="cursorp">Home</a>
              </li>
              <li>
                <a className="cursorp">About</a>
              </li>
              <li>
                <a className="cursorp">Services</a>
              </li>
              <li>
                <a className="cursorp">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="text-white">Contact Information</h6>
            <ul>
              <li>
                <span className="iconcontainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="inherit"
                      d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5"
                    />
                  </svg>
                </span>
                No:25, 1st Subramaniyapuram street, <br />
                State Bank Road, <br /> Karaikudi
              </li>
              <li>
                <span className="iconcontainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="inherit"
                      d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z"
                    />
                  </svg>
                </span>
                <a href="mailto:info@easyfixexpert.com">
                  info@easyfixexpert.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <p className="text-center">
              This website is made with
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                  />
                </svg>
              </span>{" "}
              by
              <a href="https://easyfixexpert.com">EasyFix Expert</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
