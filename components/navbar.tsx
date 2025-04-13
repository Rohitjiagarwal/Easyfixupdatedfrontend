"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <>
      <div className="navbar-wrap p-4">
        <nav className="nav-main border navbar fixed-top rounded-4 navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <Image
                src="/images/album/easy-fix-logo-bg-removed-2.png"
                width={100}
                height={60}
                style={{ width: "100%", height: "60px", objectFit: "contain" }}
                alt="brand logo"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav-main"
              aria-controls="nav-main"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="nav-main">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link active "
                    aria-current="page"
                    href=""
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    href="air-conditioner.html"
                  >
                    Air Conditioner Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="washing-machine.html">
                    Washing Machine
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {/* <!-- <Link className="dropdown-item" href="air-conditioner.html">Air Conditioner</Link>
                                    <Link className="dropdown-item" href="washing-machine.html">Washing Machine</Link> --> */}
                    <Link className="dropdown-item" href="fridge.html">
                      Fridge
                    </Link>
                    <Link className="dropdown-item" href="dish-washer.html">
                      Dish Washer
                    </Link>
                    <Link className="dropdown-item" href="wate-heater.html">
                      Water Heater
                    </Link>
                    <Link className="dropdown-item" href="oven.html">
                      Oven
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
