"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    import("aos")
      .then((AOS) => {
        AOS.default.init({ duration: 1000, once: true });
      })
      .catch((err) => console.error("AOS import failed:", err));
  }, []);

  const toggleMenu = () => {
    console.log("Toggler clicked, isOpen:", !isOpen); // Debug log
    setIsOpen((prev) => !prev);
    if (dropdownOpen) setDropdownOpen(false); // Close dropdown when toggling menu
  };

  const toggleDropdown = () => {
    console.log("Dropdown toggled, dropdownOpen:", !dropdownOpen); // Debug log
    setDropdownOpen((prev) => !prev);
  };

  const navItems = [
    { href: "/", label: "Home", active: true },
    { href: "/air-conditioner", label: "Air Conditioner Service" },
    { href: "/washing-machine", label: "Washing Machine" },
    {
      label: "Services",
      dropdown: [
        { href: "/fridge", label: "Fridge" },
        { href: "/dish-washer", label: "Dish Washer" },
        { href: "/water-heater", label: "Water Heater" },
        { href: "/oven", label: "Oven" },
      ],
    },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="navbar-wrap" data-aos="fade-down">
      <nav className="nav-main">
        <div className="nav-content">
          <Link className="nav-logo" href="/">
            <Image
              src="/images/album/easy-fix-logo-bg-removed-2.png"
              width={100}
              height={60}
              style={{ width: "100%", height: "60px", objectFit: "contain" }}
              alt="Easy Fix logo"
              priority
            />
          </Link>

          <button
            className={`nav-toggler ${isOpen ? "open" : ""}`}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="nav-toggler-icon"></span>
          </button>

          <div className={`nav-menu ${isOpen ? "show" : ""}`}>
            <ul className="nav-list">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <li
                    className="nav-item nav-dropdown"
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                  >
                    <button
                      className={`nav-link nav-dropdown-toggle ${
                        dropdownOpen ? "open" : ""
                      }`}
                      onClick={toggleDropdown}
                    >
                      {item.label}
                      <span className="dropdown-arrow">▼</span>
                    </button>
                    <div
                      className={`nav-dropdown-menu ${dropdownOpen ? "show" : ""}`}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          className="nav-dropdown-item"
                          href={subItem.href}
                          key={subIndex}
                          onClick={() => {
                            setIsOpen(false);
                            setDropdownOpen(false);
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li
                    className="nav-item"
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                  >
                    <Link
                      className={`nav-link ${item.active ? "active" : ""}`}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}