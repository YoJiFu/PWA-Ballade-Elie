import React, { Fragment } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Navbar, NavbarBrand, FormGroup, Input } from "reactstrap";
import style from "./Nav.module.css";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
  };
  return (
    <Fragment>
      <Navbar className={`${style.Navbar} mb-5`}>
        <NavbarBrand href="/" className="d-flex align-items-center">
          <UserCircleIcon className={style.NavbarBrand} />
          <span className={style.NavbarTitle}>Elie Bel</span>
        </NavbarBrand>
        <div className="text-right">
          <FormGroup className={style.NavBarSelect}>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              onChange={changeLanguage}
            >
              <option value="fr">🇫🇷 FR </option>
              <option value="en">🇺🇸 EN</option>
            </Input>
          </FormGroup>
        </div>
      </Navbar>
    </Fragment>
  );
};

export default Nav;
