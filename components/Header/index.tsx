'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import menuData from './menuData';
import GithubButton from '../GithubButtton';

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);

  const pathUrl = usePathname();

  return (
    <header
      className={`fixed left-0 top-0 w-full z-99999 py-7 ${'bg-white dark:bg-black shadow !py-4 transition duration-100'}`}
    >
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 lg:flex items-center justify-between relative">
        <div className="w-full lg:w-1/4 flex items-center justify-between">
          <a href="/">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={60}
              height={30}
              className="w-full hidden dark:block"
            />
          </a>

          <button
            aria-label="hamburger Toggler"
            className="lg:hidden block"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="block relative cursor-pointer w-5.5 h-5.5">
              <span className="block absolute w-full h-full">
                <span
                  className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0] ${
                    !navigationOpen ? '!w-full delay-300' : ''
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 ${
                    !navigationOpen ? '!w-full delay-400' : ''
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 ${
                    !navigationOpen ? '!w-full delay-500' : ''
                  }`}
                ></span>
              </span>
              <span className="block absolute w-full h-full rotate-45">
                <span
                  className={`block bg-black dark:bg-white rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-0 ${
                    navigationOpen ? 'h-full delay-[0]' : ''
                  }`}
                ></span>
                <span
                  className={`block bg-black dark:bg-white rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-[.03rem] w-full h-0 ${
                    navigationOpen ? 'h-0.5 dealy-200' : ''
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`w-full lg:w-full h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between ${
            navigationOpen &&
            '!visible bg-white dark:bg-blacksection shadow-solid-5 h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5'
          }`}
        >
          <nav>
            <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && 'group relative'}>
                  {menuItem.submenu ? (
                    <>
                      <a
                        onClick={() => {
                          setDropdownToggler(!dropdownToggler);
                        }}
                        className="hover:text-secondary flex items-center justify-between gap-3 cursor-pointer"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="fill-waterloo group-hover:fill-secondary w-3 h-3 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </a>

                      <ul
                        className={`dropdown ${dropdownToggler ? 'flex' : ''}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-secondary">
                            <Link href={item.path || '#'}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      legacyBehavior
                      href={`${menuItem.path}`}
                      target={menuItem.newTab ? '_blank' : '_self'}
                      className={
                        pathUrl === menuItem.path
                          ? 'hover:text-secondary text-secondary'
                          : 'hover:text-secondary'
                      }
                    >
                      <a onClick={() => setNavigationOpen(false)}>
                        {menuItem.title}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-6 mt-7 lg:mt-0">
            <a href="/waitlist" target="_blank">
              <button className="flex items-center justify-center bg-primary hover:bg-secondary hover:text-dark_button ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5">
                Join Waitlist
              </button>
            </a>
            <GithubButton />
          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;
